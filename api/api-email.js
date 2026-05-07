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

  const FROM = 'Joel from ForgeBody <hello@forgebody.fit>';
  const firstName = (name || 'Athlete').split(' ')[0];

  const base = (content) => `<!DOCTYPE html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
<tr><td align="center" style="padding:48px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">
<tr><td align="center" style="padding-bottom:28px;">
  <span style="font-size:20px;font-weight:900;letter-spacing:3px;color:#fff;font-family:'Helvetica Neue',Arial,sans-serif;text-transform:uppercase;">FORGE<span style="color:#CCFF00">/</span>BODY</span>
</td></tr>
${content}
<tr><td style="padding-top:28px;text-align:center;border-top:1px solid rgba(255,255,255,0.07);">
  <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:0 0 4px;font-family:'Helvetica Neue',Arial,sans-serif;">Questions? Just hit reply — I actually read them.</p>
  <p style="color:rgba(255,255,255,0.12);font-size:11px;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">ForgeBody · forgebody.fit · Joel Holomek</p>
</td></tr>
</table></td></tr></table></body></html>`;

  const card = (content) => `<tr><td style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 32px;">${content}</td></tr><tr><td height="20"></td></tr>`;

  const cta = (text) => `<table cellpadding="0" cellspacing="0" style="width:100%;margin-top:24px;"><tr><td style="background:#CCFF00;border-radius:12px;padding:14px 28px;text-align:center;"><a href="https://forgebody.fit" style="color:#000;font-weight:900;font-size:14px;text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;font-family:'Helvetica Neue',Arial,sans-serif;">${text}</a></td></tr></table>`;

  const quote = (text, byline='— Joel') => `
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-top:20px;">
      <tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:20px;">
        <p style="color:rgba(255,255,255,0.5);font-size:13px;line-height:1.8;font-style:italic;margin:0 0 10px;font-family:'Helvetica Neue',Arial,sans-serif;">${text}</p>
        <p style="color:rgba(255,255,255,0.25);font-size:11px;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">${byline}</p>
      </td></tr>
    </table>`;

  const limeBox = (label, content) => `
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:20px;">
      <tr><td style="background:rgba(204,255,0,0.07);border:1px solid rgba(204,255,0,0.2);border-radius:14px;padding:20px;">
        <p style="color:#CCFF00;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;font-family:'Helvetica Neue',Arial,sans-serif;">${label}</p>
        ${content}
      </td></tr>
    </table>`;

  const step = (num, title, desc) => `
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:14px;">
      <tr>
        <td width="34" valign="top">
          <div style="width:26px;height:26px;background:rgba(204,255,0,0.15);border-radius:7px;text-align:center;line-height:26px;font-size:13px;font-weight:900;color:#CCFF00;font-family:'Helvetica Neue',Arial,sans-serif;">${num}</div>
        </td>
        <td>
          <p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 3px;font-family:'Helvetica Neue',Arial,sans-serif;">${title}</p>
          <p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.5;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">${desc}</p>
        </td>
      </tr>
    </table>`;

  const emails = {
    welcome: {
      subject: `You just made a decision most people never make.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">🔥</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">${firstName}.<br/><span style="color:#CCFF00;">You're in.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Most people say they'll start Monday.<br/>You just did something most people never do —<br/><strong style="color:rgba(255,255,255,0.85);">you actually started.</strong></p>
        ${limeBox('Your first 3 steps',
          step('1','Open the app','Go to forgebody.fit. Tap Train. Your personalised workout is waiting.') +
          step('2','Start the 12-week programme','Tap the sidebar menu. Hit "12-Week Programme". Claude builds your entire plan in seconds.') +
          step('3','Ask the AI coach anything','What to eat. How to lift. When to rest. It knows your exact programme.')
        )}
        <table cellpadding="0" cellspacing="0" style="width:100%;"><tr><td style="border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;"></td></tr></table>
        ${quote(`Honestly? I built this app out of frustration. I couldn't keep paying $150 every time I wanted to train properly. I figured if I was feeling that way, other people probably were too.<br/><br/>I really hope ForgeBody changes something for you. Even if it's just feeling a bit more in control of your health — that's enough for me.`, '— Joel, Founder · Reply to this email anytime. I actually read them.')}
        ${cta('Open ForgeBody →')}
      `))
    },

    day3: {
      subject: `3 days in. How's it going, ${firstName}?`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">💪</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">3 days in,<br/><span style="color:#CCFF00;">${firstName}.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">You know what the hardest part of any transformation is?<br/><strong style="color:rgba(255,255,255,0.85);">The first 3 days.</strong><br/>You've already done it.</p>
        <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:20px;"><tr><td style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:20px;">
          <p style="color:rgba(255,255,255,0.3);font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin:0 0 14px;font-family:'Helvetica Neue',Arial,sans-serif;">Have you tried these yet?</p>
          ${[['📋','12-Week Programme','Let Claude build your complete plan. 84 sessions. Progressive overload built in. Zero guesswork.'],['🤖','AI Coach','Ask it anything. What to eat. How to lift. It knows your exact programme.'],['🏃','Run Tracker','Log every run. Track your pace zones. See yourself getting faster.']].map(([icon,title,desc])=>`
          <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:12px;"><tr>
            <td width="32" valign="top" style="font-size:18px;padding-top:2px;">${icon}</td>
            <td><p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 2px;font-family:'Helvetica Neue',Arial,sans-serif;">${title}</p><p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.5;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">${desc}</p></td>
          </tr></table>`).join('')}
        </td></tr></table>
        <table cellpadding="0" cellspacing="0" style="width:100%;"><tr><td style="border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;"></td></tr></table>
        ${quote(`Day 3 is actually where most people quietly disappear. They sign up excited, life gets in the way, and they tell themselves they'll get back to it.<br/><br/>You're still here. That already puts you ahead of most people.<br/><br/>Keep going. It gets easier from here — not because it gets less hard, but because it becomes who you are.`)}
        ${cta("Let's Train →")}
      `))
    },

    week1: {
      subject: `One week. You're already different, ${firstName}.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">🏆</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">One week.<br/><span style="color:#CCFF00;">You showed up.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Most people who download a fitness app never make it past day 3.<br/><strong style="color:rgba(255,255,255,0.85);">You just finished week one.</strong></p>
        ${limeBox('This week, go deeper',`<p style="color:rgba(255,255,255,0.55);font-size:13px;line-height:1.7;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">Log your measurements. Take a progress photo — even if you don't feel like you've changed yet. Start the 12-week programme if you haven't.<br/><br/><strong style="color:rgba(255,255,255,0.75);">Week two is where the habit forms. Don't skip it.</strong></p>`)}
        <table cellpadding="0" cellspacing="0" style="width:100%;"><tr><td style="border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;"></td></tr></table>
        ${quote(`I won't pretend I know exactly what your first week looked like. Maybe you smashed it. Maybe it was harder than you expected. Maybe a bit of both.<br/><br/>Either way — you came back. And that's genuinely all that matters at this stage.<br/><br/>Week two. Let's go.`)}
        ${cta('Open ForgeBody →')}
      `))
    },

    streak_broken: {
      subject: `${firstName}, your streak broke. Here's the truth about that.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">💪</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Streaks break.<br/><span style="color:#CCFF00;">Champions don't.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">You missed a day, ${firstName}. That's just life.<br/><strong style="color:rgba(255,255,255,0.85);">It doesn't undo anything.</strong></p>
        ${limeBox('',`<p style="color:rgba(255,255,255,0.6);font-size:14px;font-style:italic;line-height:1.75;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">Your workouts are still there. Your progress is still there. Your programme is still there. Nothing was lost.</p>`)}
        <table cellpadding="0" cellspacing="0" style="width:100%;"><tr><td style="border-top:1px solid rgba(255,255,255,0.07);padding-top:20px;"></td></tr></table>
        ${quote(`I've missed days too. Everyone has. The people who transform aren't the ones who never miss — they're the ones who don't let one missed day become two.<br/><br/>That's it. That's the whole secret.<br/><br/>See you back in the app.`)}
        ${cta('Start My New Streak →')}
      `))
    }
  };

  const emailTemplate = emails[type];
  if (!emailTemplate) return res.status(400).json({ error: `Unknown email type: ${type}` });

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
        subject: emailTemplate.subject,
        html: emailTemplate.html,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.error('Resend error:', response.status, data);
      return res.status(response.status).json({ error: data.message || 'Email send failed' });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message });
  }
}
