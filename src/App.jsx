import { useState, useEffect } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const COLORS = {
  orange: "#FF6B2B",
  dark: "#0D0D0D",
  card: "#141414",
  border: "#222222",
  muted: "#888888",
  text: "#F5F5F5",
};

const styles = {
  app: { minHeight: "100vh", background: COLORS.dark, color: COLORS.text, fontFamily: "'Barlow', sans-serif" },
  nav: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: `1px solid ${COLORS.border}`, background: COLORS.dark, position: "sticky", top: 0, zIndex: 100 },
  logo: { fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.03em", color: COLORS.text },
  logoAccent: { color: COLORS.orange },
  navRight: { display: "flex", alignItems: "center", gap: "1rem" },
  btn: { background: COLORS.orange, color: "#fff", border: "none", borderRadius: "8px", padding: "0.6rem 1.4rem", fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", letterSpacing: "0.02em" },
  btnOutline: { background: "transparent", color: COLORS.text, border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "0.6rem 1.4rem", fontFamily: "'Barlow', sans-serif", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" },
  hero: { textAlign: "center", padding: "6rem 2rem 4rem", maxWidth: "800px", margin: "0 auto" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 1.5rem" },
  heroSub: { fontSize: "1.15rem", color: COLORS.muted, marginBottom: "2.5rem", lineHeight: 1.6 },
  tabs: { display: "flex", gap: "0.5rem", padding: "1rem 2rem", borderBottom: `1px solid ${COLORS.border}`, overflowX: "auto" },
  tab: { padding: "0.6rem 1.4rem", borderRadius: "8px", border: "none", cursor: "pointer", fontFamily: "'Barlow', sans-serif", fontWeight: 700, fontSize: "0.9rem", whiteSpace: "nowrap", letterSpacing: "0.04em", textTransform: "uppercase" },
  tabActive: { background: COLORS.orange, color: "#fff" },
  tabInactive: { background: "transparent", color: COLORS.muted },
  content: { maxWidth: "960px", margin: "0 auto", padding: "2rem" },
  card: { background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "12px", padding: "1.5rem", marginBottom: "1rem" },
  label: { fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: COLORS.muted, marginBottom: "0.5rem", display: "block" },
  input: { width: "100%", background: "#1a1a1a", border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "0.75rem 1rem", color: COLORS.text, fontFamily: "'Barlow', sans-serif", fontSize: "1rem", boxSizing: "border-box", marginBottom: "1rem" },
  select: { width: "100%", background: "#1a1a1a", border: `1px solid ${COLORS.border}`, borderRadius: "8px", padding: "0.75rem 1rem", color: COLORS.text, fontFamily: "'Barlow', sans-serif", fontSize: "1rem", boxSizing: "border-box", marginBottom: "1rem", cursor: "pointer" },
  grid2: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" },
  statCard: { background: "#1a1a1a", border: `1px solid ${COLORS.border}`, borderRadius: "10px", padding: "1.25rem", textAlign: "center" },
  statNum: { fontSize: "2.2rem", fontWeight: 900, color: COLORS.orange, letterSpacing: "-0.03em" },
  statLabel: { fontSize: "0.8rem", color: COLORS.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "0.25rem" },
  mealResult: { background: "#1a1a1a", border: `1px solid ${COLORS.border}`, borderRadius: "10px", padding: "1.5rem", whiteSpace: "pre-wrap", fontSize: "0.95rem", lineHeight: 1.7, color: COLORS.text, marginTop: "1rem" },
  workoutDay: { background: "#1a1a1a", border: `1px solid ${COLORS.border}`, borderRadius: "10px", padding: "1rem 1.25rem", marginBottom: "0.75rem" },
  tag: { display: "inline-block", background: `${COLORS.orange}22`, color: COLORS.orange, borderRadius: "6px", padding: "0.2rem 0.6rem", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", marginRight: "0.5rem", marginBottom: "0.5rem" },
  progressBar: { height: "8px", background: COLORS.border, borderRadius: "4px", overflow: "hidden", marginTop: "0.5rem" },
  progressFill: { height: "100%", background: COLORS.orange, borderRadius: "4px", transition: "width 0.8s ease" },
  authBox: { maxWidth: "420px", margin: "4rem auto", padding: "2rem", background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: "16px" },
  divider: { display: "flex", alignItems: "center", gap: "1rem", margin: "1.25rem 0", color: COLORS.muted, fontSize: "0.85rem" },
  dividerLine: { flex: 1, height: "1px", background: COLORS.border },
  successBanner: { background: "#0a2a0a", border: "1px solid #1a5c1a", borderRadius: "10px", padding: "1rem 1.25rem", color: "#4caf50", fontSize: "0.95rem", marginBottom: "1rem" },
  loadingDot: { display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: COLORS.orange, margin: "0 3px", animation: "bounce 1.2s infinite" },
};

function LoadingDots() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <style>{`@keyframes bounce { 0%,80%,100%{transform:scale(0)} 40%{transform:scale(1)} }`}</style>
      {[0, 1, 2].map((i) => <span key={i} style={{ ...styles.loadingDot, animationDelay: `${i * 0.16}s` }} />)}
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
    <div style={styles.authBox}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <div style={{ ...styles.logo, fontSize: "2rem", marginBottom: "0.5rem" }}>FORGE<span style={styles.logoAccent}>BODY</span></div>
        <p style={{ color: COLORS.muted, fontSize: "0.95rem" }}>Your AI fitness transformation platform</p>
      </div>
      {sent ? (
        <div style={styles.successBanner}>Magic link sent to <strong>{email}</strong>. Check your inbox and click the link to sign in.</div>
      ) : (
        <>
          <button onClick={handleGoogle} style={{ ...styles.btnOutline, width: "100%", marginBottom: "0.75rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continue with Google
          </button>
          <div style={styles.divider}><div style={styles.dividerLine} />or<div style={styles.dividerLine} /></div>
          <label style={styles.label}>Email address</label>
          <input style={styles.input} type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleMagicLink()} />
          {error && <p style={{ color: "#f44", fontSize: "0.85rem", marginTop: "-0.5rem", marginBottom: "0.75rem" }}>{error}</p>}
          <button onClick={handleMagicLink} disabled={loading} style={{ ...styles.btn, width: "100%" }}>{loading ? "Sending..." : "Send Magic Link"}</button>
        </>
      )}
      <p style={{ textAlign: "center", color: COLORS.muted, fontSize: "0.78rem", marginTop: "1.5rem" }}>$19/month · Cancel anytime · Founding members: free lifetime access</p>
    </div>
  );
}

function MealPlanGenerator() {
  const [form, setForm] = useState({ calories: "2000", goal: "fat loss", diet: "no restrictions", meals: "3" });
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  function update(k, v) { setForm((f) => ({ ...f, [k]: v })); }

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
      <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>AI Meal Plan Generator</h2>
      <p style={{ color: COLORS.muted, marginBottom: "1.5rem" }}>Get a personalised meal plan built for your exact goals.</p>
      <div style={styles.card}>
        <div style={styles.grid2}>
          <div><label style={styles.label}>Daily calories</label><input style={styles.input} type="number" value={form.calories} onChange={(e) => update("calories", e.target.value)} /></div>
          <div><label style={styles.label}>Number of meals</label><select style={styles.select} value={form.meals} onChange={(e) => update("meals", e.target.value)}>{["2","3","4","5","6"].map((n) => <option key={n} value={n}>{n} meals</option>)}</select></div>
          <div><label style={styles.label}>Goal</label><select style={styles.select} value={form.goal} onChange={(e) => update("goal", e.target.value)}>{["fat loss","muscle gain","maintenance","body recomposition"].map((g) => <option key={g} value={g}>{g.charAt(0).toUpperCase()+g.slice(1)}</option>)}</select></div>
          <div><label style={styles.label}>Dietary preference</label><select style={styles.select} value={form.diet} onChange={(e) => update("diet", e.target.value)}>{["no restrictions","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map((d) => <option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}</select></div>
        </div>
        <button onClick={generate} disabled={loading} style={{ ...styles.btn, width: "100%", marginTop: "0.5rem" }}>{loading ? "Generating plan..." : "Generate My Meal Plan"}</button>
      </div>
      {loading && <LoadingDots />}
      {result && <div style={styles.mealResult}>{result}</div>}
    </div>
  );
}

const WORKOUT_TEMPLATES = {
  "Fat Loss": { days: [
    { day: "Monday", focus: "HIIT + Core", exercises: ["Burpees 4x15","Mountain Climbers 4x30s","Jump Squats 3x20","Plank 3x45s","Russian Twists 3x20"] },
    { day: "Tuesday", focus: "Upper Body Strength", exercises: ["Push-ups 4x15","Dumbbell Rows 4x12","Shoulder Press 3x12","Tricep Dips 3x15","Bicep Curls 3x12"] },
    { day: "Wednesday", focus: "Active Recovery", exercises: ["30 min brisk walk","Light stretching 20 min","Foam rolling 10 min"] },
    { day: "Thursday", focus: "Lower Body Strength", exercises: ["Goblet Squats 4x15","Romanian Deadlifts 4x12","Lunges 3x12 each","Glute Bridges 4x20","Calf Raises 3x25"] },
    { day: "Friday", focus: "Full Body HIIT", exercises: ["Kettlebell Swings 4x20","Box Jumps 3x15","Battle Ropes 3x30s","Sled Pushes 4x20m","Med Ball Slams 3x15"] },
  ]},
  "Muscle Gain": { days: [
    { day: "Monday", focus: "Chest & Triceps", exercises: ["Bench Press 4x8","Incline Dumbbell Press 3x10","Cable Flyes 3x12","Tricep Pushdowns 4x12","Skull Crushers 3x10"] },
    { day: "Tuesday", focus: "Back & Biceps", exercises: ["Deadlifts 4x6","Pull-ups 4x8","Barbell Rows 3x10","Face Pulls 3x15","Hammer Curls 4x12"] },
    { day: "Wednesday", focus: "Rest / Light Cardio", exercises: ["20 min walk or bike","Mobility work 15 min"] },
    { day: "Thursday", focus: "Legs", exercises: ["Squats 4x8","Leg Press 4x12","Romanian Deadlifts 3x10","Leg Curls 3x12","Leg Extensions 3x15"] },
    { day: "Friday", focus: "Shoulders & Abs", exercises: ["Overhead Press 4x8","Lateral Raises 4x15","Front Raises 3x12","Shrugs 3x15","Cable Crunches 4x15"] },
  ]},
};

function WorkoutBuilder() {
  const [goal, setGoal] = useState("Fat Loss");
  const [expanded, setExpanded] = useState(null);
  const plan = WORKOUT_TEMPLATES[goal];

  return (
    <div>
      <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Workout Builder</h2>
      <p style={{ color: COLORS.muted, marginBottom: "1.5rem" }}>Your 5-day training programme, built for your goal.</p>
      <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem" }}>
        {Object.keys(WORKOUT_TEMPLATES).map((g) => (
          <button key={g} onClick={() => setGoal(g)} style={{ ...styles.tab, ...(goal === g ? styles.tabActive : styles.tabInactive), border: goal === g ? "none" : `1px solid ${COLORS.border}` }}>{g}</button>
        ))}
      </div>
      {plan.days.map((d, i) => (
        <div key={i} style={styles.workoutDay}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }} onClick={() => setExpanded(expanded === i ? null : i)}>
            <div><span style={{ fontWeight: 800, marginRight: "0.75rem" }}>{d.day}</span><span style={styles.tag}>{d.focus}</span></div>
            <span style={{ color: COLORS.muted, fontSize: "1.2rem" }}>{expanded === i ? "−" : "+"}</span>
          </div>
          {expanded === i && <ul style={{ margin: "0.75rem 0 0", padding: "0 0 0 1.25rem", color: COLORS.muted, lineHeight: 2 }}>{d.exercises.map((ex, j) => <li key={j} style={{ fontSize: "0.95rem" }}>{ex}</li>)}</ul>}
        </div>
      ))}
      <div style={{ ...styles.card, marginTop: "1.5rem", background: `${COLORS.orange}11`, border: `1px solid ${COLORS.orange}44` }}>
        <p style={{ color: COLORS.orange, fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>Pro tip</p>
        <p style={{ color: COLORS.text, margin: "0.5rem 0 0", lineHeight: 1.6, fontSize: "0.95rem" }}>Progressive overload is key — increase weight or reps by 2-5% each week. Track your lifts in the Progress tab to see your strength curve.</p>
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
  const totalWorkouts = entries.reduce((s, e) => s + e.workouts, 0);
  const progressPct = Math.min(100, Math.round((totalLoss / 10) * 100));

  return (
    <div>
      <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.25rem", letterSpacing: "-0.02em" }}>Progress Dashboard</h2>
      <p style={{ color: COLORS.muted, marginBottom: "1.5rem" }}>Track your transformation week by week.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[{ num: `${latest.weight}kg`, label: "Current Weight" }, { num: `-${totalLoss}kg`, label: "Total Lost" }, { num: `${totalWorkouts}`, label: "Workouts Done" }, { num: `${entries.length}`, label: "Weeks Tracked" }].map((s, i) => (
          <div key={i} style={styles.statCard}><div style={styles.statNum}>{s.num}</div><div style={styles.statLabel}>{s.label}</div></div>
        ))}
      </div>
      <div style={styles.card}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
          <span style={{ fontWeight: 700 }}>Goal Progress (10kg loss)</span>
          <span style={{ color: COLORS.orange, fontWeight: 800 }}>{progressPct}%</span>
        </div>
        <div style={styles.progressBar}><div style={{ ...styles.progressFill, width: `${progressPct}%` }} /></div>
      </div>
      <div style={styles.card}>
        <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "1rem", letterSpacing: "0.04em", textTransform: "uppercase", color: COLORS.muted }}>Weekly Log</h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead><tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>{["Week","Weight","Calories","Workouts"].map((h) => <th key={h} style={{ textAlign: "left", padding: "0.5rem 0.75rem", color: COLORS.muted, fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>)}</tr></thead>
            <tbody>{entries.map((e, i) => <tr key={i} style={{ borderBottom: `1px solid ${COLORS.border}22` }}><td style={{ padding: "0.6rem 0.75rem", color: COLORS.muted }}>{e.date}</td><td style={{ padding: "0.6rem 0.75rem", fontWeight: 700 }}>{e.weight}kg</td><td style={{ padding: "0.6rem 0.75rem" }}>{e.calories || "—"}</td><td style={{ padding: "0.6rem 0.75rem" }}>{e.workouts}</td></tr>)}</tbody>
          </table>
        </div>
        <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <input style={{ ...styles.input, flex: "1", minWidth: "120px", marginBottom: 0 }} type="number" placeholder="Weight (kg)" value={newWeight} onChange={(e) => setNewWeight(e.target.value)} />
          <input style={{ ...styles.input, flex: "1", minWidth: "120px", marginBottom: 0 }} type="number" placeholder="Calories" value={newCals} onChange={(e) => setNewCals(e.target.value)} />
          <button onClick={addEntry} style={styles.btn}>Log Entry</button>
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
    const { data: listener } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => listener.subscription.unsubscribe();
  }, []);

  async function signOut() { await supabase.auth.signOut(); setSession(null); }

  if (loading) return <div style={{ ...styles.app, display: "flex", alignItems: "center", justifyContent: "center" }}><LoadingDots /></div>;

  return (
    <div style={styles.app}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      <nav style={styles.nav}>
        <div style={styles.logo}>FORGE<span style={styles.logoAccent}>BODY</span></div>
        {session && <div style={styles.navRight}><span style={{ color: COLORS.muted, fontSize: "0.85rem" }}>{session.user.email}</span><button onClick={signOut} style={styles.btnOutline}>Sign Out</button></div>}
      </nav>
      {!session ? (
        <>
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>Build the body<br /><span style={{ color: COLORS.orange }}>you were made for.</span></h1>
            <p style={styles.heroSub}>AI-powered meal plans, custom workouts, and progress tracking — all in one place. Built for people serious about transformation.</p>
          </div>
          <AuthScreen />
        </>
      ) : (
        <>
          <div style={styles.tabs}>
            {[{ id: "meal", label: "Meal Planner" }, { id: "workout", label: "Workouts" }, { id: "progress", label: "Progress" }].map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ ...styles.tab, ...(tab === t.id ? styles.tabActive : styles.tabInactive) }}>{t.label}</button>
            ))}
          </div>
          <div style={styles.content}>
            {tab === "meal" && <MealPlanGenerator />}
            {tab === "workout" && <WorkoutBuilder />}
            {tab === "progress" && <ProgressDashboard />}
          </div>
        </>
      )}
    </div>
  );
}
