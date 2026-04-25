import { useState, useEffect, useRef } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const C = {
  black: "#0a0a0a", card: "#111111", cardBorder: "#1e1e1e",
  lime: "#CCFF00", white: "#FFFFFF", muted: "#555555", mutedLight: "#888888",
};

const s = {
  app: { minHeight:"100vh", background:C.black, color:C.white, fontFamily:"'Barlow Condensed','Barlow',sans-serif", paddingBottom:"70px" },
  nav: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0.85rem 1.25rem", borderBottom:`1px solid ${C.cardBorder}`, background:C.black, position:"sticky", top:0, zIndex:100 },
  logo: { fontSize:"1.3rem", fontWeight:900, letterSpacing:"0.05em", color:C.white, textTransform:"uppercase" },
  logoSlash: { color:C.lime },
  bottomNav: { position:"fixed", bottom:0, left:0, right:0, background:C.card, borderTop:`1px solid ${C.cardBorder}`, display:"flex", zIndex:100, height:"66px" },
  navBtn: { flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"3px", border:"none", background:"transparent", cursor:"pointer", padding:"8px 0", fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase" },
  content: { maxWidth:"600px", margin:"0 auto", padding:"1.25rem" },
  card: { background:C.card, border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"1.25rem", marginBottom:"0.75rem" },
  label: { fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.4rem", display:"block", fontFamily:"'Barlow Condensed',sans-serif" },
  input: { width:"100%", background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.7rem 0.9rem", color:C.white, fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem" },
  select: { width:"100%", background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.7rem 0.9rem", color:C.white, fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem", cursor:"pointer" },
  btn: { background:C.lime, color:C.black, border:"none", borderRadius:"6px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase" },
  btnOutline: { background:"transparent", color:C.white, border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase" },
  btnSm: { background:C.lime, color:C.black, border:"none", borderRadius:"4px", padding:"0.45rem 0.9rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.78rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase" },
  tag: { display:"inline-block", background:`${C.lime}18`, color:C.lime, borderRadius:"3px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  tagGray: { display:"inline-block", background:`#ffffff10`, color:C.mutedLight, borderRadius:"3px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  sectionTitle: { fontSize:"1.6rem", fontWeight:900, marginBottom:"0.2rem", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"-0.01em" },
  sectionSub: { color:C.mutedLight, marginBottom:"1.25rem", fontFamily:"'Barlow',sans-serif", fontSize:"0.88rem" },
  eyebrow: { fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.lime, marginBottom:"0.35rem", display:"flex", alignItems:"center", gap:"6px", fontFamily:"'Barlow Condensed',sans-serif" },
  dot: { width:"5px", height:"5px", borderRadius:"50%", background:C.lime, display:"inline-block", flexShrink:0 },
  statGrid: { display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"0.6rem", marginBottom:"0.75rem" },
  statCard: { background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"1rem", textAlign:"center" },
  statNum: { fontSize:"2rem", fontWeight:900, color:C.lime, letterSpacing:"-0.02em", fontFamily:"'Barlow Condensed',sans-serif" },
  statLabel: { fontSize:"0.62rem", color:C.muted, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"2px", fontFamily:"'Barlow Condensed',sans-serif" },
  progressBar: { height:"5px", background:C.cardBorder, borderRadius:"3px", overflow:"hidden", marginTop:"0.4rem" },
  progressFill: { height:"100%", background:C.lime, borderRadius:"3px", transition:"width 0.8s ease" },
  loadingDot: { display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:C.lime, margin:"0 3px", animation:"bounce 1.2s infinite" },
  divider: { display:"flex", alignItems:"center", gap:"0.75rem", margin:"1rem 0", color:C.muted, fontSize:"0.75rem", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"0.1em", textTransform:"uppercase" },
  dividerLine: { flex:1, height:"1px", background:C.cardBorder },
  successBanner: { background:"#0d1a00", border:`1px solid ${C.lime}44`, borderRadius:"6px", padding:"0.9rem 1.1rem", color:C.lime, fontSize:"0.9rem", marginBottom:"0.75rem" },
};

// ─── MEAL DATABASE 60+ meals ─────────────────────────────────────────────────
const MEALS = [
  {id:1,name:"Scrambled eggs & sourdough",cal:420,p:28,c:38,f:14,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:2,name:"Greek yogurt parfait",cal:340,p:22,c:42,f:8,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:3,name:"Oatmeal with banana & peanut butter",cal:480,p:18,c:68,f:14,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:4,name:"Whey protein smoothie",cal:380,p:35,c:40,f:6,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:5,name:"Avocado toast with poached eggs",cal:520,p:24,c:44,f:26,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:6,name:"Cottage cheese & mixed berries",cal:280,p:26,c:28,f:4,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:7,name:"Protein pancakes with maple syrup",cal:440,p:32,c:48,f:10,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:8,name:"Overnight oats with chia",cal:420,p:20,c:60,f:10,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:9,name:"Egg white omelette with spinach",cal:300,p:30,c:10,f:8,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:10,name:"Smoked salmon bagel with cream cheese",cal:540,p:32,c:58,f:16,meal:"breakfast",diet:["standard"]},
  {id:11,name:"Keto egg & bacon cups",cal:320,p:26,c:4,f:22,meal:"breakfast",diet:["standard","keto"]},
  {id:12,name:"Vegan protein smoothie bowl",cal:400,p:28,c:52,f:10,meal:"breakfast",diet:["vegan","vegetarian"]},
  {id:13,name:"Rice cakes with almond butter",cal:350,p:12,c:48,f:12,meal:"breakfast",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:14,name:"Halal chicken sausage & eggs",cal:460,p:38,c:12,f:22,meal:"breakfast",diet:["standard","halal"]},
  {id:15,name:"Peanut butter banana toast",cal:460,p:16,c:58,f:16,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:16,name:"Grilled chicken salad",cal:420,p:40,c:18,f:18,meal:"lunch",diet:["standard","halal","gluten-free"]},
  {id:17,name:"Tuna & brown rice bowl",cal:480,p:38,c:52,f:8,meal:"lunch",diet:["standard","gluten-free"]},
  {id:18,name:"Turkey & avocado wrap",cal:520,p:36,c:54,f:14,meal:"lunch",diet:["standard"]},
  {id:19,name:"Quinoa power bowl",cal:500,p:22,c:62,f:16,meal:"lunch",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:20,name:"Chicken breast & sweet potato",cal:560,p:44,c:60,f:8,meal:"lunch",diet:["standard","halal","gluten-free"]},
  {id:21,name:"Salmon fillet & jasmine rice",cal:580,p:42,c:50,f:18,meal:"lunch",diet:["standard","gluten-free"]},
  {id:22,name:"Red lentil soup & bread",cal:360,p:20,c:52,f:6,meal:"lunch",diet:["standard","vegetarian","vegan","halal"]},
  {id:23,name:"Beef stir-fry & noodles",cal:620,p:38,c:64,f:18,meal:"lunch",diet:["standard","halal"]},
  {id:24,name:"Chickpea buddha bowl",cal:520,p:20,c:68,f:16,meal:"lunch",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:25,name:"Prawn & avocado salad",cal:380,p:30,c:16,f:20,meal:"lunch",diet:["standard","gluten-free"]},
  {id:26,name:"Chicken caesar wrap",cal:540,p:38,c:50,f:18,meal:"lunch",diet:["standard","halal"]},
  {id:27,name:"Tofu stir-fry & brown rice",cal:480,p:24,c:60,f:14,meal:"lunch",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:28,name:"Greek salad with grilled chicken",cal:440,p:38,c:20,f:22,meal:"lunch",diet:["standard","gluten-free"]},
  {id:29,name:"Burrito bowl",cal:620,p:36,c:72,f:16,meal:"lunch",diet:["standard","vegetarian","halal"]},
  {id:30,name:"Tuna nicoise salad",cal:420,p:36,c:22,f:18,meal:"lunch",diet:["standard","gluten-free"]},
  {id:31,name:"Keto chicken lettuce wraps",cal:380,p:34,c:8,f:22,meal:"lunch",diet:["standard","keto","halal","gluten-free"]},
  {id:32,name:"Vegan lentil dhal & rice",cal:520,p:22,c:78,f:8,meal:"lunch",diet:["vegan","vegetarian","halal","gluten-free"]},
  {id:33,name:"Beef & broccoli bowl",cal:560,p:42,c:48,f:16,meal:"lunch",diet:["standard","halal","gluten-free"]},
  {id:34,name:"Smoked salmon & avocado rice bowl",cal:580,p:36,c:52,f:22,meal:"lunch",diet:["standard","gluten-free","dairy-free"]},
  {id:35,name:"Grilled salmon & asparagus",cal:520,p:42,c:24,f:28,meal:"dinner",diet:["standard","gluten-free","dairy-free"]},
  {id:36,name:"Chicken thighs & roasted veg",cal:560,p:44,c:32,f:24,meal:"dinner",diet:["standard","halal","gluten-free"]},
  {id:37,name:"Lean beef mince & pasta",cal:640,p:42,c:68,f:18,meal:"dinner",diet:["standard","halal"]},
  {id:38,name:"Baked cod & sweet potato mash",cal:480,p:38,c:48,f:10,meal:"dinner",diet:["standard","gluten-free","dairy-free"]},
  {id:39,name:"Lamb kofta & tabbouleh",cal:620,p:38,c:42,f:28,meal:"dinner",diet:["standard","halal"]},
  {id:40,name:"Chicken stir-fry & egg noodles",cal:580,p:40,c:60,f:14,meal:"dinner",diet:["standard","halal"]},
  {id:41,name:"Vegan black bean tacos",cal:500,p:22,c:72,f:12,meal:"dinner",diet:["vegan","vegetarian"]},
  {id:42,name:"Prawn fried rice",cal:520,p:34,c:62,f:12,meal:"dinner",diet:["standard","gluten-free"]},
  {id:43,name:"Beef burger & sweet potato fries",cal:720,p:44,c:68,f:26,meal:"dinner",diet:["standard","halal"]},
  {id:44,name:"Turkey meatballs & zucchini noodles",cal:440,p:40,c:22,f:18,meal:"dinner",diet:["standard","gluten-free"]},
  {id:45,name:"Tofu & vegetable curry & rice",cal:540,p:22,c:70,f:14,meal:"dinner",diet:["vegan","vegetarian","gluten-free"]},
  {id:46,name:"Grilled chicken & quinoa salad",cal:500,p:44,c:42,f:14,meal:"dinner",diet:["standard","halal","gluten-free"]},
  {id:47,name:"Pork tenderloin & roasted potatoes",cal:580,p:42,c:52,f:16,meal:"dinner",diet:["standard","gluten-free","dairy-free"]},
  {id:48,name:"Vegan lentil bolognese & pasta",cal:560,p:26,c:82,f:8,meal:"dinner",diet:["vegan","vegetarian"]},
  {id:49,name:"Tuna steak & Asian slaw",cal:460,p:44,c:28,f:18,meal:"dinner",diet:["standard","gluten-free","dairy-free"]},
  {id:50,name:"Chicken shawarma & rice",cal:640,p:46,c:62,f:18,meal:"dinner",diet:["standard","halal"]},
  // Snacks
  {id:51,name:"Greek yogurt & honey",cal:180,p:14,c:22,f:4,meal:"snack",diet:["standard","vegetarian","gluten-free"]},
  {id:52,name:"Protein bar",cal:220,p:20,c:24,f:6,meal:"snack",diet:["standard","vegetarian"]},
  {id:53,name:"Apple & almond butter",cal:240,p:6,c:32,f:10,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:54,name:"Handful of mixed nuts",cal:200,p:6,c:8,f:18,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free","keto"]},
  {id:55,name:"Rice cakes & cottage cheese",cal:180,p:14,c:22,f:3,meal:"snack",diet:["standard","vegetarian"]},
  {id:56,name:"Hard boiled eggs x2",cal:160,p:12,c:1,f:10,meal:"snack",diet:["standard","vegetarian","keto","gluten-free"]},
  {id:57,name:"Tuna on crackers",cal:200,p:20,c:16,f:5,meal:"snack",diet:["standard","dairy-free"]},
  {id:58,name:"Edamame",cal:160,p:14,c:12,f:6,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:59,name:"Casein protein shake",cal:200,p:24,c:10,f:4,meal:"snack",diet:["standard","vegetarian"]},
  {id:60,name:"Vegan protein ball x2",cal:240,p:14,c:28,f:8,meal:"snack",diet:["vegan","vegetarian","gluten-free"]},
  {id:61,name:"Beef jerky",cal:160,p:22,c:8,f:4,meal:"snack",diet:["standard","halal","gluten-free","keto","dairy-free"]},
  {id:62,name:"Chocolate milk",cal:280,p:14,c:38,f:6,meal:"snack",diet:["standard","vegetarian"]},
];

// ─── WORKOUT DATABASE ────────────────────────────────────────────────────────
const EXERCISES = {
  chest: [
    {name:"Barbell Bench Press",sets:"4",reps:"6-8",rest:"2-3 min",cue:"Chest to muscle failure"},
    {name:"Incline Dumbbell Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Slight arch, elbows 45°"},
    {name:"Cable Chest Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Full stretch at bottom"},
    {name:"Dips (chest lean)",sets:"3",reps:"10-12",rest:"90 sec",cue:"Lean forward, elbows wide"},
    {name:"Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Full range, chest touches floor"},
    {name:"Pec Deck Machine",sets:"3",reps:"12-15",rest:"60 sec",cue:"Squeeze hard at top"},
  ],
  back: [
    {name:"Deadlift",sets:"4",reps:"4-6",rest:"3 min",cue:"Neutral spine, drive hips forward"},
    {name:"Barbell Row",sets:"4",reps:"6-8",rest:"2 min",cue:"Pull to lower chest, brace core"},
    {name:"Pull-Up / Lat Pulldown",sets:"4",reps:"8-10",rest:"90 sec",cue:"Depress scapula first"},
    {name:"Seated Cable Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Elbows to sides, squeeze lats"},
    {name:"Single-Arm Dumbbell Row",sets:"3",reps:"10-12",rest:"60 sec",cue:"Keep hips square"},
    {name:"Face Pull",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pull to forehead, rotate externally"},
  ],
  shoulders: [
    {name:"Overhead Press (Barbell)",sets:"4",reps:"6-8",rest:"2 min",cue:"Bar path over forehead"},
    {name:"Dumbbell Lateral Raise",sets:"4",reps:"12-15",rest:"60 sec",cue:"Lead with elbows, slight lean"},
    {name:"Arnold Press",sets:"3",reps:"10-12",rest:"90 sec",cue:"Full rotation throughout"},
    {name:"Rear Delt Fly",sets:"3",reps:"15-20",rest:"60 sec",cue:"Slight bend in elbows"},
    {name:"Upright Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Elbows above wrists"},
    {name:"Cable Lateral Raise",sets:"3",reps:"15-20",rest:"45 sec",cue:"Constant tension"},
  ],
  biceps: [
    {name:"Barbell Curl",sets:"4",reps:"8-10",rest:"90 sec",cue:"No elbow sway, full ROM"},
    {name:"Hammer Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Neutral grip, control eccentric"},
    {name:"Incline Dumbbell Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at bottom"},
    {name:"Cable Curl",sets:"3",reps:"12-15",rest:"60 sec",cue:"Constant tension"},
    {name:"Preacher Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Don't use momentum"},
  ],
  triceps: [
    {name:"Close-Grip Bench Press",sets:"4",reps:"8-10",rest:"90 sec",cue:"Elbows tucked, full extension"},
    {name:"Tricep Pushdown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Lock elbows at sides"},
    {name:"Overhead Tricep Extension",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at top"},
    {name:"Skull Crusher",sets:"3",reps:"10-12",rest:"75 sec",cue:"Lower to forehead slowly"},
    {name:"Diamond Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hands form diamond shape"},
  ],
  quads: [
    {name:"Barbell Back Squat",sets:"4",reps:"6-8",rest:"3 min",cue:"Break parallel, knees out"},
    {name:"Leg Press",sets:"4",reps:"10-12",rest:"2 min",cue:"Full range, don't lock out"},
    {name:"Hack Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"High foot placement for quads"},
    {name:"Leg Extension",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pause at top, slow eccentric"},
    {name:"Bulgarian Split Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"Vertical torso"},
    {name:"Walking Lunges",sets:"3",reps:"12 each",rest:"90 sec",cue:"Long stride, knee doesn't pass toe"},
  ],
  hamstrings: [
    {name:"Romanian Deadlift",sets:"4",reps:"8-10",rest:"2 min",cue:"Push hips back, feel stretch"},
    {name:"Lying Leg Curl",sets:"4",reps:"10-12",rest:"90 sec",cue:"Curl to glutes, slow lower"},
    {name:"Seated Leg Curl",sets:"3",reps:"12-15",rest:"75 sec",cue:"Full ROM"},
    {name:"Good Morning",sets:"3",reps:"10-12",rest:"90 sec",cue:"Slight knee bend, hinge from hip"},
    {name:"Nordic Curl",sets:"3",reps:"6-8",rest:"2 min",cue:"Control the descent"},
  ],
  glutes: [
    {name:"Hip Thrust",sets:"4",reps:"10-12",rest:"90 sec",cue:"Drive through heel, squeeze at top"},
    {name:"Glute Kickback",sets:"3",reps:"15-20",rest:"60 sec",cue:"Don't rotate hips"},
    {name:"Cable Pull-Through",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hinge, not squat"},
    {name:"Sumo Deadlift",sets:"4",reps:"6-8",rest:"2 min",cue:"Wide stance, toes out"},
    {name:"Step-Up",sets:"3",reps:"12 each",rest:"75 sec",cue:"Drive through front heel"},
  ],
  calves: [
    {name:"Standing Calf Raise",sets:"4",reps:"15-20",rest:"60 sec",cue:"Full ROM, pause at top"},
    {name:"Seated Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Different angle targets soleus"},
    {name:"Single-Leg Calf Raise",sets:"3",reps:"12-15 each",rest:"45 sec",cue:"Use wall for balance"},
  ],
  core: [
    {name:"Plank",sets:"3",reps:"45-60 sec",rest:"45 sec",cue:"Neutral spine, squeeze glutes"},
    {name:"Cable Crunch",sets:"3",reps:"15-20",rest:"60 sec",cue:"Crunch abs, don't pull neck"},
    {name:"Hanging Leg Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"No swinging, control lower"},
    {name:"Ab Wheel Rollout",sets:"3",reps:"10-12",rest:"75 sec",cue:"Brace core throughout"},
    {name:"Russian Twist",sets:"3",reps:"20 total",rest:"45 sec",cue:"Rotate from torso"},
    {name:"Decline Sit-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hands on chest"},
  ],
  hiit: [
    {name:"Burpee",sets:"4",reps:"15",rest:"45 sec",cue:"Explosive jump at top"},
    {name:"Box Jump",sets:"4",reps:"10",rest:"60 sec",cue:"Soft landing, hips back"},
    {name:"Mountain Climber",sets:"3",reps:"30 sec",rest:"30 sec",cue:"Hips down, fast feet"},
    {name:"Jump Squat",sets:"4",reps:"15",rest:"45 sec",cue:"Land softly, full squat"},
    {name:"Kettlebell Swing",sets:"4",reps:"20",rest:"60 sec",cue:"Hip hinge, snap hips"},
    {name:"Battle Ropes",sets:"3",reps:"30 sec",rest:"30 sec",cue:"Alternating waves"},
    {name:"Sprint Intervals",sets:"6",reps:"20 sec",rest:"40 sec",cue:"Max effort each sprint"},
  ],
};

const SPLITS = {
  ppl: {
    name:"Push / Pull / Legs",
    days3: [
      {label:"Push",muscles:["chest","shoulders","triceps"]},
      {label:"Pull",muscles:["back","biceps"]},
      {label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},
    ],
    days6: [
      {label:"Push A",muscles:["chest","shoulders","triceps"]},
      {label:"Pull A",muscles:["back","biceps"]},
      {label:"Legs A",muscles:["quads","hamstrings","glutes","calves"]},
      {label:"Push B",muscles:["chest","shoulders","triceps"]},
      {label:"Pull B",muscles:["back","biceps"]},
      {label:"Legs B",muscles:["quads","hamstrings","glutes","calves"]},
    ],
  },
  upper_lower: {
    name:"Upper / Lower",
    days4: [
      {label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},
      {label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},
      {label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},
      {label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]},
    ],
  },
  muscle_group: {
    name:"Muscle Group",
    days5: [
      {label:"Chest & Triceps",muscles:["chest","triceps"]},
      {label:"Back & Biceps",muscles:["back","biceps"]},
      {label:"Shoulders",muscles:["shoulders","core"]},
      {label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},
      {label:"Arms & Core",muscles:["biceps","triceps","core"]},
    ],
  },
  full_body: {
    name:"Full Body / HIIT",
    days3: [
      {label:"Full Body A",muscles:["chest","back","quads","core"]},
      {label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},
      {label:"HIIT Conditioning",muscles:["hiit"]},
    ],
  },
};

function LoadingDots() {
  return (
    <div style={{textAlign:"center",padding:"2rem"}}>
      <style>{`@keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}`}</style>
      {[0,1,2].map(i=><span key={i} style={{...s.loadingDot,animationDelay:`${i*0.16}s`}}/>)}
    </div>
  );
}

function Eyebrow({label}) {
  return <div style={s.eyebrow}><span style={s.dot}/>{label}</div>;
}

// ─── AUTH ────────────────────────────────────────────────────────────────────
function AuthScreen() {
  const [email,setEmail]=useState("");
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  async function handleMagicLink() {
    if(!email)return;
    setLoading(true);setError("");
    const{error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:window.location.href}});
    setLoading(false);
    if(error)setError(error.message);else setSent(true);
  }

  async function handleGoogle() {
    const{error}=await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});
    if(error)setError(error.message);
  }

  return (
    <div style={{minHeight:"100vh",background:C.black,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
      <div style={{width:"100%",maxWidth:"400px"}}>
        <div style={{textAlign:"center",marginBottom:"2rem"}}>
          <div style={{...s.logo,fontSize:"2rem",marginBottom:"0.75rem"}}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
          <Eyebrow label="Member Access"/>
          <p style={{color:C.muted,fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif",marginTop:"0.5rem"}}>Your AI transformation platform</p>
        </div>
        <div style={s.card}>
          {sent?(
            <div style={s.successBanner}>Magic link sent to <strong>{email}</strong>. Check your inbox.</div>
          ):(
            <>
              <button onClick={handleGoogle} style={{...s.btnOutline,width:"100%",marginBottom:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"}}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <div style={s.divider}><div style={s.dividerLine}/>or<div style={s.dividerLine}/></div>
              <label style={s.label}>Email address</label>
              <input style={s.input} type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleMagicLink()}/>
              {error&&<p style={{color:"#ff4444",fontSize:"0.82rem",marginTop:"-0.4rem",marginBottom:"0.6rem"}}>{error}</p>}
              <button onClick={handleMagicLink} disabled={loading} style={{...s.btn,width:"100%",padding:"0.85rem"}}>
                {loading?"Sending...":"Send Magic Link"}
              </button>
            </>
          )}
          <p style={{textAlign:"center",color:C.muted,fontSize:"0.72rem",marginTop:"1.25rem",fontFamily:"'Barlow',sans-serif"}}>
            $19/month · Cancel anytime · PDF buyers: free lifetime access
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MEAL PLANNER ────────────────────────────────────────────────────────────
function MealPlanner() {
  const[goal,setGoal]=useState("all");
  const[diet,setDiet]=useState("standard");
  const[targetCal,setTargetCal]=useState(2200);
  const[numMeals,setNumMeals]=useState(4);
  const[plan,setPlan]=useState(null);

  function buildPlan() {
    const mealSlots = numMeals===2?["breakfast","dinner"]:numMeals===3?["breakfast","lunch","dinner"]:numMeals===4?["breakfast","lunch","dinner","snack"]:numMeals===5?["breakfast","lunch","dinner","snack","snack"]:["breakfast","lunch","dinner","snack","snack","snack"];
    const slotCounts={breakfast:0,lunch:0,dinner:0,snack:0};
    mealSlots.forEach(m=>slotCounts[m]++);
    const result=[];
    let totalCal=0,totalP=0,totalC=0,totalF=0;
    for(const[slot,count] of Object.entries(slotCounts)){
      if(!count)continue;
      const pool=MEALS.filter(m=>m.meal===slot&&m.diet.includes(diet));
      const shuffled=[...pool].sort(()=>Math.random()-0.5);
      for(let i=0;i<count;i++){
        const meal=shuffled[i%shuffled.length]||pool[0];
        if(meal){result.push({...meal,slotLabel:slot==="snack"&&count>1?`Snack ${i+1}`:`${slot.charAt(0).toUpperCase()+slot.slice(1)}`});totalCal+=meal.cal;totalP+=meal.p;totalC+=meal.c;totalF+=meal.f;}
      }
    }
    setPlan({meals:result,total:{cal:totalCal,p:totalP,c:totalC,f:totalF}});
  }

  return (
    <div style={s.content}>
      <Eyebrow label="AI Powered"/>
      <h2 style={s.sectionTitle}>Meal Planner</h2>
      <p style={s.sectionSub}>Personalised meals matched to your goal and diet.</p>
      <div style={s.card}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
          <div>
            <label style={s.label}>Daily calories</label>
            <input style={s.input} type="number" value={targetCal} onChange={e=>setTargetCal(+e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Meals per day</label>
            <select style={s.select} value={numMeals} onChange={e=>setNumMeals(+e.target.value)}>
              {[2,3,4,5,6].map(n=><option key={n} value={n}>{n} meals</option>)}
            </select>
          </div>
          <div>
            <label style={s.label}>Goal</label>
            <select style={s.select} value={goal} onChange={e=>setGoal(e.target.value)}>
              <option value="all">Any goal</option>
              <option value="fat loss">Fat loss</option>
              <option value="muscle">Muscle gain</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div>
            <label style={s.label}>Diet</label>
            <select style={s.select} value={diet} onChange={e=>setDiet(e.target.value)}>
              {["standard","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d=><option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}
            </select>
          </div>
        </div>
        <button onClick={buildPlan} style={{...s.btn,width:"100%",padding:"0.85rem"}}>Build My Meal Plan</button>
      </div>

      {plan&&(
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
            {[{l:"Calories",v:plan.total.cal},{l:"Protein",v:`${plan.total.p}g`},{l:"Carbs",v:`${plan.total.c}g`},{l:"Fat",v:`${plan.total.f}g`}].map((s2,i)=>(
              <div key={i} style={s.statCard}>
                <div style={{...s.statNum,fontSize:"1.4rem"}}>{s2.v}</div>
                <div style={s.statLabel}>{s2.l}</div>
              </div>
            ))}
          </div>
          {plan.meals.map((meal,i)=>(
            <div key={i} style={{...s.card,marginBottom:"0.5rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.4rem"}}>
                <div>
                  <div style={s.eyebrow}><span style={s.dot}/>{meal.slotLabel}</div>
                  <div style={{fontWeight:800,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.02em"}}>{meal.name}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{color:C.lime,fontWeight:900,fontSize:"1.1rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{meal.cal}</div>
                  <div style={{color:C.muted,fontSize:"0.65rem",fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.08em"}}>KCAL</div>
                </div>
              </div>
              <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap"}}>
                <span style={s.tagGray}>P: {meal.p}g</span>
                <span style={s.tagGray}>C: {meal.c}g</span>
                <span style={s.tagGray}>F: {meal.f}g</span>
              </div>
            </div>
          ))}
          <button onClick={buildPlan} style={{...s.btnOutline,width:"100%",marginTop:"0.5rem"}}>Regenerate Plan</button>
        </>
      )}
    </div>
  );
}

// ─── WORKOUT BUILDER ─────────────────────────────────────────────────────────
function WorkoutBuilder() {
  const[step,setStep]=useState(0);
  const[split,setSplit]=useState("");
  const[days,setDays]=useState("");
  const[level,setLevel]=useState("");
  const[workoutGoal,setWorkoutGoal]=useState("");
  const[program,setProgram]=useState(null);
  const[activeDay,setActiveDay]=useState(null);
  const[expandedEx,setExpandedEx]=useState(null);

  function buildProgram() {
    const splitData=SPLITS[split];
    if(!splitData)return;
    const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k.includes(days))||Object.keys(splitData).find(k=>k!=="name");
    const template=splitData[daysKey];
    if(!template)return;
    const multiplier=level==="beginner"?0.7:level==="advanced"?1.2:1;
    const built=template.map(day=>{
      const exList=[];
      day.muscles.forEach(muscle=>{
        const pool=(EXERCISES[muscle]||[]);
        const pick=muscle==="hiit"?pool:pool.slice(0,workoutGoal==="strength"?3:workoutGoal==="fat loss"?4:3);
        pick.forEach(ex=>{
          exList.push({
            ...ex,
            muscle,
            sets:level==="beginner"?String(Math.max(2,parseInt(ex.sets)-1)):level==="advanced"?String(parseInt(ex.sets)+1):ex.sets,
          });
        });
      });
      return{...day,exercises:exList};
    });
    setProgram(built);
    setActiveDay(0);
    setStep(4);
  }

  if(step===4&&program){
    const day=program[activeDay];
    return(
      <div style={s.content}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <button onClick={()=>{setStep(0);setProgram(null);}} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`}}>← Back</button>
          <div>
            <Eyebrow label={SPLITS[split]?.name}/>
            <h2 style={{...s.sectionTitle,fontSize:"1.4rem",marginBottom:0}}>{day.label}</h2>
          </div>
        </div>

        <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
          {program.map((d,i)=>(
            <button key={i} onClick={()=>{setActiveDay(i);setExpandedEx(null);}} style={{...s.btnSm,flexShrink:0,background:activeDay===i?C.lime:"transparent",color:activeDay===i?C.black:C.mutedLight,border:activeDay===i?"none":`1px solid ${C.cardBorder}`}}>
              {d.label}
            </button>
          ))}
        </div>

        {day.exercises.map((ex,i)=>(
          <div key={i} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer"}} onClick={()=>setExpandedEx(expandedEx===i?null:i)}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontWeight:900,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em",marginBottom:"0.25rem"}}>{ex.name}</div>
                <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
                  <span style={s.tag}>{ex.muscle}</span>
                  <span style={s.tagGray}>{ex.sets} sets</span>
                  <span style={s.tagGray}>{ex.reps} reps</span>
                  <span style={s.tagGray}>Rest {ex.rest}</span>
                </div>
              </div>
              <span style={{color:C.lime,fontSize:"1.2rem",fontWeight:300,marginLeft:"0.5rem"}}>{expandedEx===i?"−":"+"}</span>
            </div>
            {expandedEx===i&&(
              <div style={{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:`1px solid ${C.cardBorder}`}}>
                <div style={{fontSize:"0.85rem",color:C.mutedLight,fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>
                  <strong style={{color:C.white}}>Coaching cue:</strong> {ex.cue}
                </div>
              </div>
            )}
          </div>
        ))}
        <div style={{...s.card,marginTop:"0.75rem",background:`${C.lime}06`,borderLeft:`3px solid ${C.lime}`,borderRadius:"0 6px 6px 0"}}>
          <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Level: {level} · Goal: {workoutGoal}</p>
          <p style={{color:C.mutedLight,margin:0,lineHeight:1.5,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif"}}>Progressive overload — increase weight or reps by 2-5% each week to keep driving results.</p>
        </div>
      </div>
    );
  }

  return(
    <div style={s.content}>
      <Eyebrow label="Personalised Programme"/>
      <h2 style={s.sectionTitle}>Workout Builder</h2>
      <p style={s.sectionSub}>Answer 4 questions. Get your exact programme.</p>

      {step===0&&(
        <div style={s.card}>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"1rem"}}>Choose your training split</label>
          {[{k:"ppl",l:"Push / Pull / Legs",d:"Best for 3-6 days/week. Classic bodybuilding split."},{k:"upper_lower",l:"Upper / Lower",d:"Best for 4 days/week. Great strength & size."},{k:"muscle_group",l:"Muscle Group",d:"Best for 5 days/week. Dedicated focus per muscle."},{k:"full_body",l:"Full Body / HIIT",d:"Best for 3 days/week. Fat loss & conditioning."}].map(opt=>(
            <div key={opt.k} onClick={()=>{setSplit(opt.k);setStep(1);}} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer",border:split===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}

      {step===1&&(
        <div style={s.card}>
          <button onClick={()=>setStep(0)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"1rem"}}>How many days per week?</label>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem"}}>
            {[3,4,5,6].map(d=>(
              <button key={d} onClick={()=>{setDays(String(d));setStep(2);}} style={{...s.btn,background:days===String(d)?C.lime:"transparent",color:days===String(d)?C.black:C.white,border:`1px solid ${days===String(d)?C.lime:C.cardBorder}`,padding:"0.85rem"}}>
                {d} Days
              </button>
            ))}
          </div>
        </div>
      )}

      {step===2&&(
        <div style={s.card}>
          <button onClick={()=>setStep(1)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"1rem"}}>Experience level</label>
          {[{k:"beginner",l:"Beginner",d:"Less than 1 year training"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent training"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setLevel(opt.k);setStep(3);}} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer",border:level===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}

      {step===3&&(
        <div style={s.card}>
          <button onClick={()=>setStep(2)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"1rem"}}>Primary goal</label>
          {[{k:"muscle",l:"Muscle & Size",d:"Hypertrophy focus, moderate reps"},{k:"strength",l:"Strength",d:"Heavy compounds, low reps"},{k:"fat loss",l:"Fat Loss",d:"Higher reps, shorter rest"},{k:"athletic",l:"Athletic Performance",d:"Power, speed & conditioning"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setWorkoutGoal(opt.k);buildProgram();}} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer",border:workoutGoal===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
function Progress({user}) {
  const[entries,setEntries]=useState([]);
  const[loading,setLoading]=useState(true);
  const[weight,setWeight]=useState("");
  const[calories,setCalories]=useState("");
  const[workouts,setWorkouts]=useState("");
  const[saving,setSaving]=useState(false);

  useEffect(()=>{
    fetchEntries();
    const channel=supabase.channel("progress-changes").on("postgres_changes",{event:"*",schema:"public",table:"progress_entries",filter:`user_id=eq.${user.id}`},()=>fetchEntries()).subscribe();
    return()=>supabase.removeChannel(channel);
  },[]);

  async function fetchEntries() {
    setLoading(true);
    const{data}=await supabase.from("progress_entries").select("*").eq("user_id",user.id).order("created_at",{ascending:true});
    setEntries(data||[]);
    setLoading(false);
  }

  async function logEntry() {
    if(!weight)return;
    setSaving(true);
    await supabase.from("progress_entries").insert({user_id:user.id,weight:parseFloat(weight),calories:parseInt(calories)||null,workouts_this_week:parseInt(workouts)||0});
    setWeight("");setCalories("");setWorkouts("");setSaving(false);
  }

  const latest=entries[entries.length-1];
  const first=entries[0];
  const totalLoss=latest&&first?(first.weight-latest.weight).toFixed(1):0;
  const totalWorkouts=entries.reduce((s,e)=>s+(e.workouts_this_week||0),0);
  const progressPct=Math.min(100,Math.round((parseFloat(totalLoss)/10)*100));

  return(
    <div style={s.content}>
      <Eyebrow label="Live Tracking"/>
      <h2 style={s.sectionTitle}>Progress</h2>
      <p style={s.sectionSub}>Real-time updates every time you log.</p>

      {loading?<LoadingDots/>:(
        <>
          <div style={s.statGrid}>
            <div style={s.statCard}><div style={s.statNum}>{latest?`${latest.weight}kg`:"—"}</div><div style={s.statLabel}>Current Weight</div></div>
            <div style={s.statCard}><div style={s.statNum}>{totalLoss>0?`-${totalLoss}kg`:"—"}</div><div style={s.statLabel}>Total Lost</div></div>
            <div style={s.statCard}><div style={s.statNum}>{totalWorkouts}</div><div style={s.statLabel}>Workouts Logged</div></div>
            <div style={s.statCard}><div style={s.statNum}>{entries.length}</div><div style={s.statLabel}>Check-ins</div></div>
          </div>

          {entries.length>0&&(
            <div style={s.card}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
                <span style={{fontWeight:800,fontSize:"0.8rem",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>Goal: 10kg Loss</span>
                <span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{progressPct}%</span>
              </div>
              <div style={s.progressBar}><div style={{...s.progressFill,width:`${progressPct}%`}}/></div>
            </div>
          )}

          <div style={s.card}>
            <label style={{...s.label,marginBottom:"0.75rem",fontSize:"0.75rem",color:C.white}}>Log Today's Check-in</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
              <div><label style={s.label}>Weight (kg)</label><input style={s.input} type="number" placeholder="85.0" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
              <div><label style={s.label}>Calories eaten</label><input style={s.input} type="number" placeholder="2000" value={calories} onChange={e=>setCalories(e.target.value)}/></div>
            </div>
            <div><label style={s.label}>Workouts this week</label><input style={s.input} type="number" placeholder="0" value={workouts} onChange={e=>setWorkouts(e.target.value)}/></div>
            <button onClick={logEntry} disabled={saving||!weight} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{saving?"Saving...":"Log Check-in"}</button>
          </div>

          {entries.length>0&&(
            <div style={s.card}>
              <label style={{...s.label,marginBottom:"0.75rem"}}>History</label>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif"}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${C.cardBorder}`}}>
                      {["Date","Weight","Cal","Workouts"].map(h=><th key={h} style={{textAlign:"left",padding:"0.4rem 0.5rem",color:C.muted,fontWeight:800,fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {[...entries].reverse().map((e,i)=>(
                      <tr key={i} style={{borderBottom:`1px solid ${C.cardBorder}22`}}>
                        <td style={{padding:"0.5rem",color:C.muted,fontSize:"0.8rem"}}>{new Date(e.created_at).toLocaleDateString("en-AU",{month:"short",day:"numeric"})}</td>
                        <td style={{padding:"0.5rem",fontWeight:700,color:C.white}}>{e.weight}kg</td>
                        <td style={{padding:"0.5rem",color:C.mutedLight}}>{e.calories||"—"}</td>
                        <td style={{padding:"0.5rem",color:C.mutedLight}}>{e.workouts_this_week||0}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── BOTTOM NAV ICONS ────────────────────────────────────────────────────────
const Icons = {
  meal: (active)=>(
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l19-9-9 19-2-8-8-2z"/>
    </svg>
  ),
  workout: (active)=>(
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v16M18 4v16M1 8h5M18 8h5M1 16h5M18 16h5"/>
    </svg>
  ),
  progress: (active)=>(
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  profile: (active)=>(
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
};

// ─── PROFILE TAB ─────────────────────────────────────────────────────────────
function ProfileTab({user,onSignOut}) {
  return(
    <div style={s.content}>
      <Eyebrow label="Your Account"/>
      <h2 style={s.sectionTitle}>Profile</h2>
      <div style={s.card}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"50%",background:`${C.lime}22`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>
            {user.email[0].toUpperCase()}
          </div>
          <div>
            <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em"}}>{user.email}</div>
            <div style={s.eyebrow}><span style={s.dot}/>Active Member</div>
          </div>
        </div>
        <button onClick={onSignOut} style={{...s.btnOutline,width:"100%"}}>Sign Out</button>
      </div>
      <div style={s.card}>
        <label style={{...s.label,fontSize:"0.75rem",color:C.white,marginBottom:"0.75rem"}}>Your Subscription</label>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
          <span style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem"}}>ForgeBody Pro</span>
          <span style={s.tag}>Active</span>
        </div>
        <div style={{color:C.muted,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>$19/month · Cancel anytime</div>
      </div>
      <div style={{...s.card,background:`${C.lime}06`,borderLeft:`3px solid ${C.lime}`,borderRadius:"0 6px 6px 0"}}>
        <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Founding member?</p>
        <p style={{color:C.mutedLight,margin:0,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>If you purchased the PDF guide for $27, you get free lifetime access. Email us your receipt at support@forgebody.com</p>
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function ForgeBodyApp() {
  const[session,setSession]=useState(null);
  const[loading,setLoading]=useState(true);
  const[tab,setTab]=useState("workout");

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{setSession(data.session);setLoading(false);});
    const{data:listener}=supabase.auth.onAuthStateChange((_e,sess)=>setSession(sess));
    return()=>listener.subscription.unsubscribe();
  },[]);

  async function signOut(){await supabase.auth.signOut();setSession(null);}

  if(loading)return<div style={{...s.app,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:0}}><LoadingDots/></div>;

  return(
    <div style={s.app}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
      {!session?(
        <AuthScreen/>
      ):(
        <>
          <nav style={s.nav}>
            <div style={s.logo}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
            <div style={s.eyebrow}><span style={s.dot}/>Pro</div>
          </nav>

          {tab==="meal"&&<MealPlanner/>}
          {tab==="workout"&&<WorkoutBuilder/>}
          {tab==="progress"&&<Progress user={session.user}/>}
          {tab==="profile"&&<ProfileTab user={session.user} onSignOut={signOut}/>}

          <nav style={s.bottomNav}>
            {[
              {id:"meal",label:"Meals"},
              {id:"workout",label:"Training"},
              {id:"progress",label:"Progress"},
              {id:"profile",label:"Profile"},
            ].map(t=>(
              <button key={t.id} onClick={()=>setTab(t.id)} style={{...s.navBtn,color:tab===t.id?C.lime:C.muted}}>
                {Icons[t.id](tab===t.id)}
                {t.label}
              </button>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
