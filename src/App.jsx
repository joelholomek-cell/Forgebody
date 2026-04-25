import { useState, useEffect } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const C = {
  black: "#0a0a0a",
  card: "#111111",
  cardBorder: "#1e1e1e",
  lime: "#CCFF00",
  white: "#FFFFFF",
  muted: "#666666",
  mutedLight: "#999999",
};

const s = {
  app: { minHeight: "100vh", background: C.black, color: C.white, fontFamily: "'Barlow Condensed', 'Barlow', sans-serif" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: `1px solid ${C.cardBorder}`, background: C.black, position: "sticky", top: 0, zIndex: 100 },
  logo: { fontSize: "1.4rem", fontWeight: 900, letterSpacing: "0.05em", color: C.white, textTransform: "uppercase" },
  logoSlash: { color: C.lime },
  btn: { background: C.lime, color: C.black, border: "none", borderRadius: "4px", padding: "0.65rem 1.5rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.08em", textTransform: "uppercase" },
  btnOutline: { background: "transparent", color: C.white, border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "0.65rem 1.5rem", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase" },
  hero: { textAlign: "left", padding: "5rem 2rem 3rem", maxWidth: "700px", margin: "0 0 0 2rem" },
  heroEyebrow: { fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: C.lime, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" },
  heroTitle: { fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.01em", margin: "0 0 1.5rem", textTransform: "uppercase" },
  heroLime: { color: C.lime },
  heroSub: { fontSize: "1.1rem", color: C.mutedLight, marginBottom: "2.5rem", lineHeight: 1.6, fontFamily: "'Barlow', sans-serif", fontWeight: 400, maxWidth: "440px" },
  tabs: { display: "flex", gap: "0", borderBottom: `1px solid ${C.cardBorder}`, overflowX: "auto" },
  tab: { padding: "1rem 1.75rem", border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "0.85rem", whiteSpace: "nowrap", letterSpacing: "0.12em", textTransform: "uppercase", borderBottom: "2px solid transparent", background: "transparent" },
  tabActive: { color: C.lime, borderBottom: `2px solid ${C.lime}` },
  tabInactive: { color: C.muted },
  content: { maxWidth: "960px", margin: "0 auto", padding: "2.5rem 2rem" },
  card: { background: C.card, border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "1.5rem", marginBottom: "1rem" },
  label: { fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, marginBottom: "0.5rem", display: "block", fontFamily: "'Barlow Condensed', sans-serif" },
  input: { width: "100%", background: "#0f0f0f", border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "0.75rem 1rem", color: C.white, fontFamily: "'Barlow', sans-serif", fontSize: "1rem", boxSizing: "border-box", marginBottom: "1rem" },
  select: { width: "100%", background: "#0f0f0f", border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "0.75rem 1rem", color: C.white, fontFamily: "'Barlow', sans-serif", fontSize: "1rem", boxSizing: "border-box", marginBottom: "1rem", cursor: "pointer" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" },
  statCard: { background: "#0f0f0f", border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "1.25rem", textAlign: "center" },
  statNum: { fontSize: "2.4rem", fontWeight: 900, color: C.lime, letterSpacing: "-0.02em", fontFamily: "'Barlow Condensed', sans-serif" },
  statLabel: { fontSize: "0.7rem", color: C.muted, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", marginTop: "0.25rem", fontFamily: "'Barlow Condensed', sans-serif" },
  mealResult: { background: "#0f0f0f", border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "1.5rem", whiteSpace: "pre-wrap", fontSize: "0.95rem", lineHeight: 1.7, color: C.white, marginTop: "1rem", fontFamily: "'Barlow', sans-serif" },
  workoutDay: { background: "#0f0f0f", border: `1px solid ${C.cardBorder}`, borderRadius: "4px", padding: "1rem 1.25rem", marginBottom: "0.5rem" },
  tag: { display: "inline-block", background: `${C.lime}18`, color: C.lime, borderRadius: "2px", padding: "0.15rem 0.6rem", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", marginRight: "0.5rem", fontFamily: "'Barlow Condensed', sans-serif" },
  progressBar: { height: "6px", background: C.cardBorder, borderRadius: "2px", overflow: "hidden", marginTop: "0.5rem" },
  progressFill: { height: "100%", background: C.lime, borderRadius: "2px", transition: "width 0.8s ease" },
  authBox: { maxWidth: "440px", margin: "3rem auto", padding: "2.5rem", background: C.card, border: `1px solid ${C.cardBorder}`, borderRadius: "4px" },
  divider: { display: "flex", alignItems: "center", gap: "1rem", margin: "1.25rem 0", color: C.muted, fontSize: "0.8rem", fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "0.1em", textTransform: "uppercase" },
  dividerLine: { flex: 1, height: "1px", background: C.cardBorder },
  successBanner: { background: "#0d1a00", border: `1px solid ${C.lime}44`, borderRadius: "4px", padding: "1rem 1.25rem", color: C.lime, fontSize: "0.95rem", marginBottom: "1rem" },
  loadingDot: { display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: C.lime, margin: "0 3px", animation: "bounce 1.2s infinite" },
  sectionTitle: { fontSize: "2rem", fontWeight: 900, marginBottom: "0.25rem", letterSpacing: "-0.01em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" },
  sectionSub: { color: C.mutedLight, marginBottom: "2rem", fontFamily: "'Barlow', sans-serif", fontSize: "0.95rem" },
  dot: { width: "6px", height: "6px", borderRadius: "50%", background: C.lime, display: "inline-block", flexShrink: 0 },
};

function LoadingDots() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <style>{`@keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}`}</style>
      {[0,1,2].map(i => <span key={i} style={{...s.loadingDot, animationDelay:`${i*0.16}s`}} />)}
    </div>
  );
}

function Eyebrow({ label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
      <span style={s.dot} />
      <span style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: C.lime, fontFamily: "'Barlow Condensed', sans-serif" }}>{label}</span>
    </div>
  );
}

function AuthScreen() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleMagicLink() {
    if (!email) return;
    setLoading(true); setError("");
    const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.href } });
    setLoading(false);
    if (error) setError(error.message); else setSent(true);
  }

  async function handleGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: window.location.href } });
    if (error) setError(error.message);
  }

  return (
    <div style={s.authBox}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ ...s.logo, fontSize: "1.8rem", marginBottom: "0.75rem" }}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
        <Eyebrow label="Member Access" />
        <p style={{ color: C.muted, fontSize: "0.9rem", fontFamily: "'Barlow', sans-serif", marginTop: "0.5rem" }}>Your AI transformation platform</p>
      </div>
      {sent ? (
        <div style={s.successBanner}>Magic link sent to <strong>{email}</strong>. Check your inbox.</div>
      ) : (
        <>
          <button onClick={handleGoogle} style={{ ...s.btnOutline, width: "100%", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
          <div style={s.divider}><div style={s.dividerLine} />or<div style={s.dividerLine} /></div>
          <label style={s.label}>Email address</label>
          <input style={s.input} type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleMagicLink()} />
          {error && <p style={{ color: "#ff4444", fontSize: "0.85rem", marginTop: "-0.5rem", marginBottom: "0.75rem" }}>{error}</p>}
          <button onClick={handleMagicLink} disabled={loading} style={{ ...s.btn, width: "100%", padding: "0.9rem" }}>
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
        </>
      )}
      <p style={{ textAlign: "center", color: C.muted, fontSize: "0.75rem", marginTop: "1.5rem", fontFamily: "'Barlow', sans-serif" }}>
        $19/month · Cancel anytime · Founding members: free lifetime access
      </p>
    </div>
  );
}

function MealPlanGenerator() {
  const [form, setForm] = useState({ calories: "2000", goal: "fat loss", diet: "no restrictions", meals: "3" });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function update(k, v) { setForm(f => ({ ...f, [k]: v })); }

  async function generate() {
    setLoading(true); setResult("");
    const prompt = `Create a detailed 1-day meal plan for someone with these specs:\n- Daily calories: ${form.calories} kcal\n- Goal: ${form.goal}\n- Diet: ${form.diet}\n- Number of meals: ${form.meals}\n\nFormat it clearly with meal names, times, foods, macros (protein/carbs/fat) per meal and a daily total. Keep it practical and realistic. Use plain text, no markdown symbols.`;
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, messages: [{ role: "user", content: prompt }] }),
      });
      const data = await res.json();
      setResult(data.content?.[0]?.text || "Something went wrong. Try again.");
    } catch { setResult("Error generating plan. Please try again."); }
    setLoading(false);
  }

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Eyebrow label="AI Powered" />
        <h2 style={s.sectionTitle}>Meal Plan Generator</h2>
        <p style={s.sectionSub}>Get a personalised meal plan built for your exact goals.</p>
      </div>
      <div style={s.card}>
        <div style={s.grid2}>
          <div><label style={s.label}>Daily calories</label><input style={s.input} type="number" value={form.calories} onChange={e => update("calories", e.target.value)} /></div>
          <div><label style={s.label}>Number of meals</label><select style={s.select} value={form.meals} onChange={e => update("meals", e.target.value)}>{["2","3","4","5","6"].map(n => <option key={n} value={n}>{n} meals</option>)}</select></div>
          <div><label style={s.label}>Goal</label><select style={s.select} value={form.goal} onChange={e => update("goal", e.target.value)}>{["fat loss","muscle gain","maintenance","body recomposition"].map(g => <option key={g} value={g}>{g.charAt(0).toUpperCase()+g.slice(1)}</option>)}</select></div>
          <div><label style={s.label}>Dietary preference</label><select style={s.select} value={form.diet} onChange={e => update("diet", e.target.value)}>{["no restrictions","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d => <option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}</select></div>
        </div>
        <button onClick={generate} disabled={loading} style={{ ...s.btn, width: "100%", marginTop: "0.5rem", padding: "0.9rem" }}>
          {loading ? "Generating plan..." : "Generate My Meal Plan"}
        </button>
      </div>
      {loading && <LoadingDots />}
      {result && <div style={s.mealResult}>{result}</div>}
    </div>
  );
}

const WORKOUTS = {
  "Fat Loss": { days: [
    { day: "Monday", focus: "HIIT + Core", exercises: ["Burpees 4x15","Mountain Climbers 4x30s","Jump Squats 3x20","Plank 3x45s","Russian Twists 3x20"] },
    { day: "Tuesday", focus: "Upper Body", exercises: ["Push-ups 4x15","Dumbbell Rows 4x12","Shoulder Press 3x12","Tricep Dips 3x15","Bicep Curls 3x12"] },
    { day: "Wednesday", focus: "Active Recovery", exercises: ["30 min brisk walk","Light stretching 20 min","Foam rolling 10 min"] },
    { day: "Thursday", focus: "Lower Body", exercises: ["Goblet Squats 4x15","Romanian Deadlifts 4x12","Lunges 3x12 each","Glute Bridges 4x20","Calf Raises 3x25"] },
    { day: "Friday", focus: "Full Body HIIT", exercises: ["Kettlebell Swings 4x20","Box Jumps 3x15","Battle Ropes 3x30s","Sled Pushes 4x20m","Med Ball Slams 3x15"] },
  ]},
  "Muscle Gain": { days: [
    { day: "Monday", focus: "Chest & Triceps", exercises: ["Bench Press 4x8","Incline Dumbbell Press 3x10","Cable Flyes 3x12","Tricep Pushdowns 4x12","Skull Crushers 3x10"] },
    { day: "Tuesday", focus: "Back & Biceps", exercises: ["Deadlifts 4x6","Pull-ups 4x8","Barbell Rows 3x10","Face Pulls 3x15","Hammer Curls 4x12"] },
    { day: "Wednesday", focus: "Rest / Cardio", exercises: ["20 min walk or bike","Mobility work 15 min"] },
    { day: "Thursday", focus: "Legs", exercises: ["Squats 4x8","Leg Press 4x12","Romanian Deadlifts 3x10","Leg Curls 3x12","Leg Extensions 3x15"] },
    { day: "Friday", focus: "Shoulders & Abs", exercises: ["Overhead Press 4x8","Lateral Raises 4x15","Front Raises 3x12","Shrugs 3x15","Cable Crunches 4x15"] },
  ]},
};

function WorkoutBuilder() {
  const [goal, setGoal] = useState("Fat Loss");
  const [expanded, setExpanded] = useState(null);
  const plan = WORKOUTS[goal];

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Eyebrow label="5-Day Programme" />
        <h2 style={s.sectionTitle}>Workout Builder</h2>
        <p style={s.sectionSub}>Your training programme, built for your goal. No trainer. No confusion.</p>
      </div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {Object.keys(WORKOUTS).map(g => (
          <button key={g} onClick={() => setGoal(g)} style={{ ...s.tab, ...(goal === g ? s.tabActive : s.tabInactive) }}>{g}</button>
        ))}
      </div>
      {plan.days.map((d, i) => (
        <div key={i} style={s.workoutDay}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => setExpanded(expanded === i ? null : i)}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <span style={{ fontWeight: 900, fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>{d.day}</span>
              <span style={s.tag}>{d.focus}</span>
            </div>
            <span style={{ color: C.lime, fontSize: "1.3rem", fontWeight: 300 }}>{expanded === i ? "−" : "+"}</span>
          </div>
          {expanded === i && (
            <ul style={{ margin: "0.75rem 0 0.25rem", padding: "0.75rem 0 0 1rem", borderTop: `1px solid ${C.cardBorder}`, lineHeight: 2.2 }}>
              {d.exercises.map((ex, j) => <li key={j} style={{ fontSize: "0.95rem", color: C.mutedLight, fontFamily: "'Barlow', sans-serif" }}>{ex}</li>)}
            </ul>
          )}
        </div>
      ))}
      <div style={{ ...s.card, marginTop: "1.5rem", background: `${C.lime}06`, border: `1px solid ${C.lime}22`, borderLeft: `3px solid ${C.lime}`, borderRadius: "0 4px 4px 0" }}>
        <p style={{ color: C.lime, fontWeight: 800, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", margin: "0 0 0.5rem", fontFamily: "'Barlow Condensed', sans-serif" }}>Pro tip</p>
        <p style={{ color: C.mutedLight, margin: 0, lineHeight: 1.6, fontSize: "0.95rem", fontFamily: "'Barlow', sans-serif" }}>Progressive overload is key — increase weight or reps by 2-5% each week. Track your lifts in the Progress tab to see your strength curve.</p>
      </div>
    </div>
  );
}

function ProgressDashboard() {
  const [entries, setEntries] = useState([
    { date: "Apr 1", weight: 88, calories: 2200, workouts: 4 },
    { date: "Apr 8", weight: 87.2, calories: 2100, workouts: 5 },
    { date: "Apr 15", weight: 86.1, calories: 2050, workouts: 4 },
    { date: "Apr 22", weight: 85.3, calories: 2000, workouts: 5 },
  ]);
  const [newWeight, setNewWeight] = useState("");
  const [newCals, setNewCals] = useState("");

  function addEntry() {
    if (!newWeight) return;
    const today = new Date().toLocaleDateString("en-AU", { month: "short", day: "numeric" });
    setEntries([...entries, { date: today, weight: parseFloat(newWeight), calories: parseInt(newCals) || 0, workouts: 0 }]);
    setNewWeight(""); setNewCals("");
  }

  const latest = entries[entries.length - 1];
  const first = entries[0];
  const totalLoss = (first.weight - latest.weight).toFixed(1);
  const totalWorkouts = entries.reduce((sum, e) => sum + e.workouts, 0);
  const progressPct = Math.min(100, Math.round((parseFloat(totalLoss) / 10) * 100));

  return (
    <div>
      <div style={{ marginBottom: "2rem" }}>
        <Eyebrow label="Your Results" />
        <h2 style={s.sectionTitle}>Progress Dashboard</h2>
        <p style={s.sectionSub}>Track your transformation week by week. No confusion. Just the system.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { num: `${latest.weight}kg`, label: "Current Weight" },
          { num: `-${totalLoss}kg`, label: "Total Lost" },
          { num: `${totalWorkouts}`, label: "Workouts Done" },
          { num: `${entries.length}`, label: "Weeks Tracked" },
        ].map((stat, i) => (
          <div key={i} style={s.statCard}>
            <div style={s.statNum}>{stat.num}</div>
            <div style={s.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
      <div style={s.card}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <span style={{ fontWeight: 800, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Barlow Condensed', sans-serif" }}>Goal: 10kg Loss</span>
          <span style={{ color: C.lime, fontWeight: 900, fontSize: "1.1rem", fontFamily: "'Barlow Condensed', sans-serif" }}>{progressPct}%</span>
        </div>
        <div style={s.progressBar}><div style={{ ...s.progressFill, width: `${progressPct}%` }} /></div>
      </div>
      <div style={s.card}>
        <h3 style={{ fontWeight: 800, fontSize: "0.75rem", marginBottom: "1rem", letterSpacing: "0.15em", textTransform: "uppercase", color: C.muted, fontFamily: "'Barlow Condensed', sans-serif" }}>Weekly Log</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", fontFamily: "'Barlow', sans-serif" }}>
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
                {["Week","Weight","Calories","Workouts"].map(h => <th key={h} style={{ textAlign: "left", padding: "0.5rem 0.75rem", color: C.muted, fontWeight: 800, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Barlow Condensed', sans-serif" }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
                  <td style={{ padding: "0.65rem 0.75rem", color: C.muted }}>{e.date}</td>
                  <td style={{ padding: "0.65rem 0.75rem", fontWeight: 700, color: C.white }}>{e.weight}kg</td>
                  <td style={{ padding: "0.65rem 0.75rem", color: C.mutedLight }}>{e.calories || "—"}</td>
                  <td style={{ padding: "0.65rem 0.75rem", color: C.mutedLight }}>{e.workouts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "flex-end" }}>
          <div style={{ flex: 1, minWidth: "120px" }}>
            <label style={s.label}>Weight (kg)</label>
            <input style={{ ...s.input, marginBottom: 0 }} type="number" placeholder="85.0" value={newWeight} onChange={e => setNewWeight(e.target.value)} />
          </div>
          <div style={{ flex: 1, minWidth: "120px" }}>
            <label style={s.label}>Calories</label>
            <input style={{ ...s.input, marginBottom: 0 }} type="number" placeholder="2000" value={newCals} onChange={e => setNewCals(e.target.value)} />
          </div>
          <button onClick={addEntry} style={{ ...s.btn, whiteSpace: "nowrap" }}>Log Entry</button>
        </div>
      </div>
    </div>
  );
}

export default function ForgeBodyApp() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("meal");

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => { setSession(data.session); setLoading(false); });
    const { data: listener } = supabase.auth.onAuthStateChange((_e, sess) => setSession(sess));
    return () => listener.subscription.unsubscribe();
  }, []);

  async function signOut() { await supabase.auth.signOut(); setSession(null); }

  if (loading) return <div style={{ ...s.app, display: "flex", alignItems: "center", justifyContent: "center" }}><LoadingDots /></div>;

  return (
    <div style={s.app}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet" />
      <nav style={s.nav}>
        <div style={s.logo}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
        {session && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ color: C.muted, fontSize: "0.8rem", fontFamily: "'Barlow', sans-serif" }}>{session.user.email}</span>
            <button onClick={signOut} style={s.btnOutline}>Sign Out</button>
          </div>
        )}
      </nav>
      {!session ? (
        <>
          <div style={s.hero}>
            <div style={s.heroEyebrow}><span style={s.dot} />Founding Member Offer — Limited Time</div>
            <h1 style={s.heroTitle}>Forge<br />The <span style={s.heroLime}>Body</span><br />You Want.</h1>
            <p style={s.heroSub}>12 weeks. Every session written. Every meal planned. No trainer. No confusion. Just the system.</p>
          </div>
          <AuthScreen />
        </>
      ) : (
        <>
          <div style={s.tabs}>
            {[{ id: "meal", label: "Meal Planner" }, { id: "workout", label: "Workouts" }, { id: "progress", label: "Progress" }].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ ...s.tab, ...(tab === t.id ? s.tabActive : s.tabInactive) }}>{t.label}</button>
            ))}
          </div>
          <div style={s.content}>
            {tab === "meal" && <MealPlanGenerator />}
            {tab === "workout" && <WorkoutBuilder />}
            {tab === "progress" && <ProgressDashboard />}
          </div>
        </>
      )}
    </div>
  );
}
