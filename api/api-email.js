export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'RESEND_API_KEY not configured' });

  const { type, email, name } = req.body;
  if (!type || !email) return res.status(400).json({ error: 'Missing type or email' });

  const FROM = 'ForgeBody <hello@forgebody.fit>';

  const emails = {
    welcome: {
      subject: `Welcome to ForgeBody, ${name || 'Athlete'} 💪`,
      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Welcome to ForgeBody</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

  <!-- Logo -->
  <tr><td align="center" style="padding-bottom:32px;">
    <span style="font-size:24px;font-weight:900;letter-spacing:2px;color:#ffffff;font-family:'Helvetica Neue',Arial,sans-serif;text-transform:uppercase;">FORGE<span style="color:#CCFF00">/</span>BODY</span>
  </td></tr>

  <!-- Hero card -->
  <tr><td style="background:linear-gradient(135deg,rgba(204,255,0,0.1),rgba(0,0,0,0.8));border:1px solid rgba(204,255,0,0.25);border-radius:20px;padding:40px 32px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">💪</div>
    <h1 style="color:#ffffff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 8px;line-height:1.1;">Welcome, ${name || 'Athlete'}.</h1>
    <p style="color:rgba(255,255,255,0.5);font-size:15px;margin:0 0 28px;line-height:1.6;">Your 7-day free trial has started. Here's how to get the most out of it.</p>

    <!-- Steps -->
    <table width="100%" cellpadding="0" cellspacing="0">
      ${[
        ['🏋️', 'Start Your Workout', 'Go to the Train tab. Your personalised split is ready. Tap Start Workout.'],
        ['🍽️', 'Set Up Your Meals', 'Open the Nutrition tab. Your meal plan is built around your goal and diet.'],
        ['🤖', 'Meet Your AI Coach', 'Ask the AI Coach anything — workouts, nutrition, recovery. It knows your programme.'],
        ['📋', 'Start the 12-Week Programme', 'Go to the sidebar and tap 12-Week Programme. Claude will build your plan in seconds.'],
      ].map(([icon, title, desc]) => `
      <tr><td style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px;margin-bottom:8px;text-align:left;display:block;margin-bottom:8px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="40" style="font-size:20px;vertical-align:top;padding-top:2px;">${icon}</td>
            <td>
              <div style="color:#ffffff;font-weight:700;font-size:14px;margin-bottom:4px;">${title}</div>
              <div style="color:rgba(255,255,255,0.45);font-size:13px;line-height:1.5;">${desc}</div>
            </td>
          </tr>
        </table>
      </td></tr>
      <tr><td height="8"></td></tr>
      `).join('')}
    </table>

    <!-- CTA -->
    <table cellpadding="0" cellspacing="0" style="margin:28px auto 0;">
      <tr><td style="background:#CCFF00;border-radius:12px;padding:14px 32px;text-align:center;">
        <a href="https://forgebody.fit" style="color:#000000;font-weight:900;font-size:15px;text-decoration:none;text-transform:uppercase;letter-spacing:1px;">Open ForgeBody →</a>
      </td></tr>
    </table>
  </td></tr>

  <!-- Trial reminder -->
  <tr><td style="padding:20px 0;text-align:center;">
    <p style="color:rgba(255,255,255,0.25);font-size:12px;margin:0;line-height:1.6;">
      Your free trial runs for 7 days. After that it's $19/month — cancel anytime before then and you won't be charged.<br/>
      Questions? Reply to this email or WhatsApp us at +61 493 434 408.
    </p>
  </td></tr>

  <!-- Footer -->
  <tr><td style="text-align:center;padding-top:8px;">
    <p style="color:rgba(255,255,255,0.15);font-size:11px;margin:0;">ForgeBody · forgebody.fit</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
    },

    trial_ending: {
      subject: `Your ForgeBody trial ends tomorrow ⏰`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

  <tr><td align="center" style="padding-bottom:32px;">
    <span style="font-size:24px;font-weight:900;letter-spacing:2px;color:#ffffff;text-transform:uppercase;">FORGE<span style="color:#CCFF00">/</span>BODY</span>
  </td></tr>

  <tr><td style="background:linear-gradient(135deg,rgba(251,146,60,0.12),rgba(0,0,0,0.8));border:1px solid rgba(251,146,60,0.3);border-radius:20px;padding:40px 32px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">⏰</div>
    <h1 style="color:#ffffff;font-size:26px;font-weight:900;text-transform:uppercase;margin:0 0 12px;line-height:1.1;">Your trial ends<br/>tomorrow, ${name || 'Athlete'}.</h1>
    <p style="color:rgba(255,255,255,0.5);font-size:15px;margin:0 0 28px;line-height:1.6;">Keep everything you've built — your workouts, progress, meal plans and AI coach — for just $19/month.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      ${[
        ['🏋️', 'Your workout programme'],
        ['🍽️', 'Your personalised meal plans'],
        ['📊', 'Your progress & personal bests'],
        ['🤖', 'AI coach access 24/7'],
        ['📋', 'Your 12-week programme'],
      ].map(([icon, text]) => `
      <tr><td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06);">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="32" style="font-size:16px;">${icon}</td>
            <td style="color:rgba(255,255,255,0.7);font-size:14px;text-align:left;">${text}</td>
            <td width="24" style="color:#CCFF00;font-size:14px;">✓</td>
          </tr>
        </table>
      </td></tr>`).join('')}
    </table>

    <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
      <tr><td style="background:#CCFF00;border-radius:12px;padding:14px 32px;text-align:center;">
        <a href="https://forgebody.fit" style="color:#000000;font-weight:900;font-size:15px;text-decoration:none;text-transform:uppercase;letter-spacing:1px;">Keep My Access →</a>
      </td></tr>
    </table>

    <p style="color:rgba(255,255,255,0.3);font-size:12px;margin:0;">If you'd like to cancel, just tap Manage Subscription in the app. No hard feelings.</p>
  </td></tr>

  <tr><td style="text-align:center;padding-top:20px;">
    <p style="color:rgba(255,255,255,0.15);font-size:11px;margin:0;">ForgeBody · forgebody.fit</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
    },

    streak_broken: {
      subject: `Your streak is gone. But it's not over 🔥`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
<tr><td align="center" style="padding:40px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

  <tr><td align="center" style="padding-bottom:32px;">
    <span style="font-size:24px;font-weight:900;letter-spacing:2px;color:#ffffff;text-transform:uppercase;">FORGE<span style="color:#CCFF00">/</span>BODY</span>
  </td></tr>

  <tr><td style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:40px 32px;text-align:center;">
    <div style="font-size:48px;margin-bottom:16px;">💪</div>
    <h1 style="color:#ffffff;font-size:26px;font-weight:900;text-transform:uppercase;margin:0 0 12px;line-height:1.1;">Streaks break.<br/>Champions don't.</h1>
    <p style="color:rgba(255,255,255,0.5);font-size:15px;margin:0 0 24px;line-height:1.6;">Hey ${name || 'Athlete'}, you missed a day. That's fine. Every athlete misses days. What matters is what you do next.</p>

    <div style="background:rgba(204,255,0,0.08);border:1px solid rgba(204,255,0,0.2);border-radius:12px;padding:20px;margin-bottom:24px;">
      <p style="color:rgba(255,255,255,0.6);font-size:14px;font-style:italic;margin:0;line-height:1.6;">"The only workout you regret is the one you didn't do."</p>
    </div>

    <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
      <tr><td style="background:#CCFF00;border-radius:12px;padding:14px 32px;text-align:center;">
        <a href="https://forgebody.fit" style="color:#000000;font-weight:900;font-size:15px;text-decoration:none;text-transform:uppercase;letter-spacing:1px;">Start New Streak →</a>
      </td></tr>
    </table>
  </td></tr>

  <tr><td style="text-align:center;padding-top:20px;">
    <p style="color:rgba(255,255,255,0.15);font-size:11px;margin:0;">ForgeBody · forgebody.fit</p>
  </td></tr>

</table>
</td></tr>
</table>
</body>
</html>`
    }
  };

  const emailData = emails[type];
  if (!emailData) return res.status(400).json({ error: 'Unknown email type' });

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        subject: emailData.subject,
        html: emailData.html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(response.status).json({ error: data.message || 'Email failed' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email handler error:', error);
    return res.status(500).json({ error: error.message });
  }
}
