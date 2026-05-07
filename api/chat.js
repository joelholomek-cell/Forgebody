export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'AI coach not configured. Add ANTHROPIC_API_KEY to Vercel environment variables.' });
  }

  try {
    const { messages, system } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: system || 'You are ForgeBody AI — an expert personal fitness coach. Be direct, motivating and practical.',
        messages,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.error('Anthropic API error:', response.status, errData);
      if (response.status === 401) return res.status(500).json({ error: 'Invalid API key.' });
      if (response.status === 402) return res.status(402).json({ error: 'AI coach credits exhausted. Top up at console.anthropic.com' });
      return res.status(response.status).json({ error: errData?.error?.message || 'Anthropic API error' });
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    console.error('Chat handler error:', error);
    return res.status(500).json({ error: 'Failed to connect to AI coach. Please try again.' });
  }
}
