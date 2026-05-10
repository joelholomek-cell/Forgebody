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
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;min-height:100vh;">
<tr><td align="center" style="padding:48px 20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:540px;">
<tr><td align="center" style="padding-bottom:32px;">
  <span style="font-size:22px;font-weight:900;letter-spacing:3px;color:#fff;font-family:'Helvetica Neue',Arial,sans-serif;text-transform:uppercase;">FORGE<span style="color:#CCFF00">/</span>BODY</span>
  <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:6px 0 0;font-family:'Helvetica Neue',Arial,sans-serif;letter-spacing:1px;">SORRY DAVE.</p>
</td></tr>
${content}
<tr><td style="padding-top:32px;text-align:center;border-top:1px solid rgba(255,255,255,0.07);">
  <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:0 0 4px;font-family:'Helvetica Neue',Arial,sans-serif;">Reply to this email — I actually read them.</p>
  <p style="color:rgba(255,255,255,0.1);font-size:11px;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">ForgeBody · forgebody.fit · Joel Holomek</p>
</td></tr>
</table></td></tr></table></body></html>`;

  const card = (content) => `<tr><td style="background:#111111;border:1px solid rgba(255,255,255,0.08);border-radius:20px;padding:36px 32px;">${content}</td></tr><tr><td height="20"></td></tr>`;

  const cta = (text) => `<table cellpadding="0" cellspacing="0" style="width:100%;margin-top:24px;"><tr><td style="background:#CCFF00;border-radius:12px;padding:14px 28px;text-align:center;"><a href="https://forgebody.fit" style="color:#000;font-weight:900;font-size:14px;text-decoration:none;text-transform:uppercase;letter-spacing:1.5px;font-family:'Helvetica Neue',Arial,sans-serif;">${text}</a></td></tr></table>`;

  const joelQuote = (text) => `
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-top:24px;">
      <tr><td style="background:rgba(255,255,255,0.04);border-left:3px solid #CCFF00;border-radius:0 14px 14px 0;padding:20px 20px 20px 24px;">
        <p style="color:rgba(255,255,255,0.55);font-size:13px;line-height:1.8;font-style:italic;margin:0 0 10px;font-family:'Helvetica Neue',Arial,sans-serif;">${text}</p>
        <p style="color:rgba(255,255,255,0.2);font-size:11px;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">— Joel, Founder · forgebody.fit</p>
      </td></tr>
    </table>`;

  const limeBox = (label, content) => `
    <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:20px;">
      <tr><td style="background:rgba(204,255,0,0.07);border:1px solid rgba(204,255,0,0.2);border-radius:14px;padding:20px;">
        ${label ? `<p style="color:#CCFF00;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;font-family:'Helvetica Neue',Arial,sans-serif;">${label}</p>` : ''}
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
      subject: `Dave just lost a client. Welcome to ForgeBody, ${firstName}.`,
      html: base(card(`
        <p style="color:#CCFF00;font-size:11px;font-weight:800;letter-spacing:2px;text-transform:uppercase;margin:0 0 20px;font-family:'Helvetica Neue',Arial,sans-serif;">SORRY DAVE.</p>
        <h1 style="color:#fff;font-size:30px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 8px;line-height:1.05;font-family:'Helvetica Neue',Arial,sans-serif;">${firstName}.<br/><span style="color:#CCFF00;">You're in.</span></h1>
        <p style="color:rgba(255,255,255,0.45);font-size:14px;margin:0 0 28px;line-height:1.8;font-family:'Helvetica Neue',Arial,sans-serif;">While Dave was busy cancelling on someone else, you just got access to a trainer that never cancels, never runs late, and never charges $150 an hour.<br/><br/><strong style="color:rgba(255,255,255,0.8);">Welcome to ForgeBody.</strong></p>
        ${limeBox('Your first 3 steps',
          step('1','Start the 12-Week Programme','Open the app. Hit the sidebar. Let FORGE build your entire plan in 60 seconds. 84 sessions. Zero guesswork.') +
          step('2','Log your first workout','Go to Train. Pick your split. Every rep you log builds your history.') +
          step('3','Ask FORGE anything','Your AI coach knows your goal, your level and your programme. Ask it anything. 3am. Pre-workout. Post-leg-day.')
        )}
        ${joelQuote(`I built ForgeBody because I was sick of paying a PT $150 to show up 8 minutes late and leave 5 minutes early. Dave was good, but Dave was expensive.<br/><br/>ForgeBody is what happens when you give everyone access to a great trainer for $19 a month.<br/><br/>I really hope it changes something for you. Even something small.`)}
        ${cta('Open ForgeBody → Start Training')}
      `))
    },

    day3: {
      subject: `3 days in. Dave's already cancelled twice. You haven't.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">💪</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">3 days.<br/><span style="color:#CCFF00;">Still here.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">You know what most people do on day 3?<br/>They quietly disappear. Tell themselves they'll restart Monday.<br/><strong style="color:rgba(255,255,255,0.85);">You're still here. That's already the difference.</strong></p>
        ${limeBox('Have you tried FORGE yet?',`
          <table cellpadding="0" cellspacing="0" style="width:100%;">
            ${[
              ['🧬','12-Week Programme','84 sessions. Progressive overload built in. Adapts every 4 weeks. Built around your exact goal.'],
              ['🤖','Ask FORGE anything','Your AI coach. Available 24/7. Knows your programme. Never says "that\'s beyond my scope."'],
              ['📸','Progress Photos','Take one now. Even if nothing\'s changed yet. Future you will thank you.'],
            ].map(([icon,title,desc])=>`
            <table cellpadding="0" cellspacing="0" style="width:100%;margin-bottom:14px;"><tr>
              <td width="32" valign="top" style="font-size:20px;padding-top:2px;">${icon}</td>
              <td style="padding-left:12px;"><p style="color:#fff;font-size:13px;font-weight:700;margin:0 0 3px;font-family:'Helvetica Neue',Arial,sans-serif;">${title}</p><p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.5;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">${desc}</p></td>
            </tr></table>`).join('')}
          </table>`)}
        ${joelQuote(`Day 3 is where most people fall off. The initial excitement wears off, real life creeps back in, and suddenly it's been two weeks.<br/><br/>The fact that you're still here — even reading this — tells me you're not most people.<br/><br/>Keep going. The results compound. So does the habit.`)}
        ${cta("Let's Train →")}
      `))
    },

    week1: {
      subject: `One week. Dave would've billed you $600 for this.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">🏆</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Week one.<br/><span style="color:#CCFF00;">Done.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">A traditional PT would've charged you $600 for this week.<br/>You paid $19 a month.<br/><strong style="color:rgba(255,255,255,0.85);">Dave is somewhere crying into his protein shake.</strong></p>
        ${limeBox('Make week two count',`<p style="color:rgba(255,255,255,0.55);font-size:13px;line-height:1.7;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">• Take a progress photo if you haven't<br/>• Log your starting weight and measurements<br/>• Start or check your 12-Week Programme<br/><br/><strong style="color:rgba(255,255,255,0.75);">Week two is where habits form. Don't skip it.</strong></p>`)}
        ${joelQuote(`Week one is a proof of concept. Week two is the beginning of a habit. Week three is when it starts to feel automatic.<br/><br/>You're one week ahead of the version of yourself who didn't start. Keep adding to that lead.`)}
        ${cta('Open ForgeBody →')}
      `))
    },

    day14: {
      subject: `Two weeks. Dave would've cancelled on you at least twice by now.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">⚡</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">14 days.<br/><span style="color:#CCFF00;">Still building.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Two weeks ago you made a decision.<br/>Most people go back to doing nothing within 7 days.<br/><strong style="color:rgba(255,255,255,0.85);">You're at 14. And the compound interest is starting.</strong></p>
        ${limeBox('Where are you in your programme?',`<p style="color:rgba(255,255,255,0.55);font-size:13px;line-height:1.7;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">If you haven't started the 12-Week Programme yet — now is the time. It takes 60 seconds to generate. FORGE builds your complete plan around your exact goal, equipment and level.<br/><br/><strong style="color:rgba(255,255,255,0.75);">84 sessions. Week by week progression. No guesswork.</strong></p>`)}
        ${joelQuote(`Two weeks in, most people start to feel it. The soreness is more manageable. The weights feel a little easier. The habit is taking shape.<br/><br/>This is the phase where people who stick with it start to pull away from the people who quit.<br/><br/>Keep pulling.`)}
        ${cta('Check Your Programme →')}
      `))
    },

    month1: {
      subject: `30 days. ${firstName}, this is who you are now.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">🔥</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">30 days.<br/><span style="color:#CCFF00;">You changed.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">A month ago you decided something was going to be different.<br/><strong style="color:rgba(255,255,255,0.85);">Thirty days later, you're right.</strong><br/>This isn't motivation anymore. This is identity.</p>
        ${limeBox('One month milestone — do these',`<p style="color:rgba(255,255,255,0.55);font-size:13px;line-height:1.7;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">📸 Take a progress photo — compare it to day 1<br/>📊 Log your current weight and measurements<br/>💪 Check your personal bests — they've moved<br/>🎯 Set your goal for month 2<br/><br/><strong style="color:rgba(255,255,255,0.75);">Month 2 is where the results start to show on the outside.</strong></p>`)}
        ${joelQuote(`I'm genuinely proud of you. Not in a cheesy way — in the way that watching someone actually follow through on something they said they'd do is still surprisingly rare.<br/><br/>A month of ForgeBody. You did that.<br/><br/>Dave definitely doesn't miss you. But we do. Keep going.`)}
        ${cta('Open ForgeBody → Month 2 →')}
      `))
    },

    streak_broken: {
      subject: `${firstName}, your streak broke. Here's the truth.`,
      html: base(card(`
        <div style="font-size:44px;text-align:center;margin-bottom:16px;">💪</div>
        <h1 style="color:#fff;font-size:28px;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;margin:0 0 12px;line-height:1.1;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">Streaks break.<br/><span style="color:#CCFF00;">You don't.</span></h1>
        <p style="color:rgba(255,255,255,0.5);font-size:14px;margin:0 0 24px;line-height:1.75;text-align:center;font-family:'Helvetica Neue',Arial,sans-serif;">You missed a day, ${firstName}.<br/>Dave missed sessions too — and he was getting paid.<br/><strong style="color:rgba(255,255,255,0.85);">A missed day doesn't undo anything.</strong></p>
        ${limeBox('',`<p style="color:rgba(255,255,255,0.6);font-size:14px;font-style:italic;line-height:1.75;margin:0;font-family:'Helvetica Neue',Arial,sans-serif;">Your workouts are still there. Your progress is still there. Your programme is still there. Your PBs are still there. Nothing was lost.</p>`)}
        ${joelQuote(`I've missed days. Everyone has. The difference between people who transform and people who don't isn't that the winners never miss a day.<br/><br/>It's that they don't let one missed day become two.<br/><br/>That's it. That's the whole secret. See you back in the app.`)}
        ${cta('Start My New Streak →')}
      `))
    }
  };

  const emailTemplate = emails[type];
  if (!emailTemplate) return res.status(400).json({ error: `Unknown email type: ${type}` });

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [email], subject: emailTemplate.subject, html: emailTemplate.html }),
    });
    const data = await response.json();
    if (!response.ok) return res.status(response.status).json({ error: data.message || 'Email send failed' });
    return res.status(200).json({ success: true, id: data.id });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
