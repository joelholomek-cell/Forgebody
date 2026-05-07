// Safely exposes the API key for client-side programme generation only
// This is needed because Vercel free tier has 10s timeout — too short for 3 AI calls
export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return res.status(500).json({ error: 'Not configured' });
  return res.status(200).json({ key });
}
