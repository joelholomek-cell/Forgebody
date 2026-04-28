import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  // Verify webhook signature
  try {
    const stripe = await import('stripe').then(m => m.default(process.env.STRIPE_SECRET_KEY));
    const rawBody = await getRawBody(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  const email = event.data?.object?.customer_email || event.data?.object?.customer_details?.email;
  const customerId = event.data?.object?.customer;

  try {
    switch (event.type) {

      // Payment succeeded — mark subscribed
      case 'checkout.session.completed':
      case 'invoice.payment_succeeded': {
        if (email) {
          await supabase.from('profiles')
            .update({ subscribed: true, subscribed_at: new Date().toISOString() })
            .eq('email', email);
        }
        break;
      }

      // Subscription cancelled or payment failed — revoke access
      case 'customer.subscription.deleted':
      case 'invoice.payment_failed':
      case 'customer.subscription.paused': {
        if (email) {
          await supabase.from('profiles')
            .update({ subscribed: false, plan: null })
            .eq('email', email);
        }
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('Webhook handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

// Helper to get raw body for signature verification
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export const config = {
  api: {
    bodyParser: false, // Required for Stripe signature verification
  },
};
