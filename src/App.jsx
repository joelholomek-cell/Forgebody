import { useState, useEffect, useRef } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const C = {
  black:"#0a0a0a",
  lime:"#CCFF00",
  white:"#FFFFFF",
  glass:"rgba(255,255,255,0.07)",
  glassBorder:"rgba(255,255,255,0.11)",
  muted:"rgba(255,255,255,0.35)",
  mutedLight:"rgba(255,255,255,0.55)",
};

const GLASS = `
  body{background:#0a0a0a;margin:0}
  .fb-bg::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse 80% 55% at 10% 5%,rgba(204,255,0,0.13) 0%,transparent 55%),radial-gradient(ellipse 60% 45% at 90% 85%,rgba(120,220,0,0.08) 0%,transparent 50%);pointer-events:none;z-index:0}
  input,select,textarea{color:#fff!important;-webkit-text-fill-color:#fff!important}
  input::placeholder,textarea::placeholder{color:rgba(255,255,255,0.3)!important}
  select option{background:#111;color:#fff}
  *{box-sizing:border-box}
  @keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}
  @keyframes gradSpin{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
  @keyframes slideIn{from{transform:translateX(-100%)}to{transform:translateX(0)}}
`;

const s = {
  app:{ minHeight:"100vh", background:"#0a0a0a", color:C.white, fontFamily:"'Barlow Condensed','Barlow',sans-serif", paddingBottom:"72px", position:"relative", zIndex:1 },
  nav:{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0.85rem 1.25rem", borderBottom:"1px solid rgba(255,255,255,0.07)", background:"rgba(0,0,0,0.6)", backdropFilter:"blur(30px)", WebkitBackdropFilter:"blur(30px)", position:"sticky", top:0, zIndex:100 },
  logo:{ fontSize:"1.25rem", fontWeight:900, letterSpacing:"0.06em", color:C.white, textTransform:"uppercase", background:"none", border:"none", cursor:"pointer", fontFamily:"'Barlow Condensed',sans-serif", padding:0 },
  logoSlash:{ color:C.lime },
  bottomNav:{ position:"fixed", bottom:0, left:0, right:0, background:"rgba(0,0,0,0.7)", backdropFilter:"blur(30px)", WebkitBackdropFilter:"blur(30px)", borderTop:"1px solid rgba(255,255,255,0.08)", display:"flex", zIndex:100, height:"68px" },
  navBtn:{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"3px", border:"none", background:"transparent", cursor:"pointer", padding:"8px 4px", fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.58rem", fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase" },
  content:{ maxWidth:"600px", margin:"0 auto", padding:"1.25rem", position:"relative", zIndex:1 },
  card:{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.11)", borderRadius:"18px", padding:"1.25rem", marginBottom:"0.75rem", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" },
  cardLime:{ background:"linear-gradient(135deg,rgba(204,255,0,0.1),rgba(150,220,0,0.05))", border:"1px solid rgba(204,255,0,0.25)", borderRadius:"18px", padding:"1.25rem", marginBottom:"0.75rem", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" },
  label:{ fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:"0.4rem", display:"block", fontFamily:"'Barlow Condensed',sans-serif" },
  input:{ width:"100%", background:"rgba(255,255,255,0.09)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:"12px", padding:"0.75rem 1rem", color:"#fff", fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem" },
  select:{ width:"100%", background:"rgba(15,15,15,0.9)", border:"1px solid rgba(255,255,255,0.14)", borderRadius:"12px", padding:"0.75rem 1rem", color:"#fff", fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem", cursor:"pointer" },
  btn:{ background:C.lime, color:"#000", border:"none", borderRadius:"12px", padding:"0.8rem 1.5rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:"0 0 20px rgba(204,255,0,0.2)" },
  btnGlass:{ background:"rgba(255,255,255,0.08)", color:C.white, border:"1px solid rgba(255,255,255,0.14)", borderRadius:"12px", padding:"0.8rem 1.5rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)" },
  btnSm:{ background:"rgba(255,255,255,0.1)", color:C.white, border:"1px solid rgba(255,255,255,0.12)", borderRadius:"8px", padding:"0.4rem 0.85rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.75rem", cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase" },
  tag:{ display:"inline-block", background:"rgba(204,255,0,0.14)", color:C.lime, borderRadius:"6px", padding:"0.15rem 0.55rem", fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", border:"1px solid rgba(204,255,0,0.2)" },
  tagGray:{ display:"inline-block", background:"rgba(255,255,255,0.07)", color:"rgba(255,255,255,0.5)", borderRadius:"6px", padding:"0.15rem 0.55rem", fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  sectionTitle:{ fontSize:"1.6rem", fontWeight:900, marginBottom:"0.2rem", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"-0.01em", color:C.white },
  sectionSub:{ color:"rgba(255,255,255,0.4)", marginBottom:"1.25rem", fontFamily:"'Barlow',sans-serif", fontSize:"0.88rem" },
  eyebrow:{ fontSize:"0.62rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.lime, marginBottom:"0.35rem", display:"flex", alignItems:"center", gap:"5px", fontFamily:"'Barlow Condensed',sans-serif" },
  dot:{ width:"4px", height:"4px", borderRadius:"50%", background:C.lime, display:"inline-block", flexShrink:0 },
  statCard:{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.09)", borderRadius:"14px", padding:"1rem", textAlign:"center", backdropFilter:"blur(15px)", WebkitBackdropFilter:"blur(15px)" },
  statNum:{ fontSize:"2rem", fontWeight:900, color:C.lime, letterSpacing:"-0.02em", fontFamily:"'Barlow Condensed',sans-serif", lineHeight:1 },
  statLabel:{ fontSize:"0.58rem", color:"rgba(255,255,255,0.38)", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"3px", fontFamily:"'Barlow Condensed',sans-serif" },
  progressBar:{ height:"4px", background:"rgba(255,255,255,0.08)", borderRadius:"2px", overflow:"hidden", marginTop:"0.4rem" },
  progressFill:{ height:"100%", background:C.lime, borderRadius:"2px", transition:"width 0.8s ease" },
  loadingDot:{ display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:C.lime, margin:"0 3px", animation:"bounce 1.2s infinite" },
  divider:{ display:"flex", alignItems:"center", gap:"0.75rem", margin:"1rem 0", color:"rgba(255,255,255,0.2)", fontSize:"0.72rem", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"0.1em", textTransform:"uppercase" },
  dividerLine:{ flex:1, height:"1px", background:"rgba(255,255,255,0.08)" },
  successBanner:{ background:"rgba(204,255,0,0.09)", border:"1px solid rgba(204,255,0,0.28)", borderRadius:"12px", padding:"0.9rem 1.1rem", color:C.lime, fontSize:"0.9rem", marginBottom:"0.75rem" },
};

// ─── MEALS DATA ──────────────────────────────────────────────────────────────
const MEALS=[
  {id:1,name:"Scrambled eggs & sourdough",cal:420,p:28,c:38,f:14,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:2,name:"Greek yogurt parfait",cal:340,p:22,c:42,f:8,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:3,name:"Oatmeal with banana & peanut butter",cal:480,p:18,c:68,f:14,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:4,name:"Whey protein smoothie",cal:380,p:35,c:40,f:6,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:5,name:"Avocado toast with poached eggs",cal:520,p:24,c:44,f:26,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:6,name:"Cottage cheese & mixed berries",cal:280,p:26,c:28,f:4,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:7,name:"Protein pancakes",cal:440,p:32,c:48,f:10,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:8,name:"Overnight oats with chia",cal:420,p:20,c:60,f:10,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:9,name:"Egg white omelette & spinach",cal:300,p:30,c:10,f:8,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:10,name:"Smoked salmon bagel",cal:540,p:32,c:58,f:16,meal:"breakfast",diet:["standard"]},
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
  {id:30,name:"Keto chicken lettuce wraps",cal:380,p:34,c:8,f:22,meal:"lunch",diet:["standard","keto","halal","gluten-free"]},
  {id:31,name:"Vegan lentil dhal & rice",cal:520,p:22,c:78,f:8,meal:"lunch",diet:["vegan","vegetarian","halal","gluten-free"]},
  {id:32,name:"Beef & broccoli bowl",cal:560,p:42,c:48,f:16,meal:"lunch",diet:["standard","halal","gluten-free"]},
  {id:33,name:"Grilled salmon & asparagus",cal:520,p:42,c:24,f:28,meal:"dinner",diet:["standard","gluten-free"]},
  {id:34,name:"Chicken thighs & roasted veg",cal:560,p:44,c:32,f:24,meal:"dinner",diet:["standard","halal","gluten-free"]},
  {id:35,name:"Lean beef mince & pasta",cal:640,p:42,c:68,f:18,meal:"dinner",diet:["standard","halal"]},
  {id:36,name:"Baked cod & sweet potato mash",cal:480,p:38,c:48,f:10,meal:"dinner",diet:["standard","gluten-free"]},
  {id:37,name:"Lamb kofta & tabbouleh",cal:620,p:38,c:42,f:28,meal:"dinner",diet:["standard","halal"]},
  {id:38,name:"Chicken stir-fry & egg noodles",cal:580,p:40,c:60,f:14,meal:"dinner",diet:["standard","halal"]},
  {id:39,name:"Vegan black bean tacos",cal:500,p:22,c:72,f:12,meal:"dinner",diet:["vegan","vegetarian"]},
  {id:40,name:"Prawn fried rice",cal:520,p:34,c:62,f:12,meal:"dinner",diet:["standard","gluten-free"]},
  {id:41,name:"Beef burger & sweet potato fries",cal:720,p:44,c:68,f:26,meal:"dinner",diet:["standard","halal"]},
  {id:42,name:"Turkey meatballs & zucchini noodles",cal:440,p:40,c:22,f:18,meal:"dinner",diet:["standard","gluten-free"]},
  {id:43,name:"Tofu & vegetable curry & rice",cal:540,p:22,c:70,f:14,meal:"dinner",diet:["vegan","vegetarian","gluten-free"]},
  {id:44,name:"Grilled chicken & quinoa salad",cal:500,p:44,c:42,f:14,meal:"dinner",diet:["standard","halal","gluten-free"]},
  {id:45,name:"Vegan lentil bolognese & pasta",cal:560,p:26,c:82,f:8,meal:"dinner",diet:["vegan","vegetarian"]},
  {id:46,name:"Chicken shawarma & rice",cal:640,p:46,c:62,f:18,meal:"dinner",diet:["standard","halal"]},
  {id:47,name:"Greek yogurt & honey",cal:180,p:14,c:22,f:4,meal:"snack",diet:["standard","vegetarian","gluten-free"]},
  {id:48,name:"Protein bar",cal:220,p:20,c:24,f:6,meal:"snack",diet:["standard","vegetarian"]},
  {id:49,name:"Apple & almond butter",cal:240,p:6,c:32,f:10,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:50,name:"Handful of mixed nuts",cal:200,p:6,c:8,f:18,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free","keto"]},
  {id:51,name:"Hard boiled eggs x2",cal:160,p:12,c:1,f:10,meal:"snack",diet:["standard","vegetarian","keto","gluten-free"]},
  {id:52,name:"Tuna on crackers",cal:200,p:20,c:16,f:5,meal:"snack",diet:["standard"]},
  {id:53,name:"Edamame",cal:160,p:14,c:12,f:6,meal:"snack",diet:["standard","vegetarian","vegan","gluten-free"]},
  {id:54,name:"Casein protein shake",cal:200,p:24,c:10,f:4,meal:"snack",diet:["standard","vegetarian"]},
  {id:55,name:"Vegan protein ball x2",cal:240,p:14,c:28,f:8,meal:"snack",diet:["vegan","vegetarian","gluten-free"]},
  {id:56,name:"Beef jerky",cal:160,p:22,c:8,f:4,meal:"snack",diet:["standard","halal","gluten-free","keto"]},
  {id:57,name:"Rice cakes & cottage cheese",cal:180,p:14,c:22,f:3,meal:"snack",diet:["standard","vegetarian"]},
  {id:58,name:"Chocolate milk",cal:280,p:14,c:38,f:6,meal:"snack",diet:["standard","vegetarian"]},
];

const FOODS=[
  {name:"Chicken breast (100g)",cal:165,p:31,c:0,f:4},{name:"Salmon (100g)",cal:208,p:20,c:0,f:13},
  {name:"Egg (1 large)",cal:72,p:6,c:0,f:5},{name:"Greek yogurt (100g)",cal:97,p:9,c:4,f:5},
  {name:"White rice (100g cooked)",cal:130,p:3,c:28,f:0},{name:"Sweet potato (100g)",cal:86,p:2,c:20,f:0},
  {name:"Oats (100g dry)",cal:389,p:17,c:66,f:7},{name:"Banana (medium)",cal:105,p:1,c:27,f:0},
  {name:"Whey protein (1 scoop)",cal:120,p:24,c:3,f:2},{name:"Avocado (half)",cal:120,p:2,c:6,f:11},
  {name:"Tuna in water (100g)",cal:116,p:26,c:0,f:1},{name:"Beef mince 5% (100g)",cal:137,p:21,c:0,f:5},
  {name:"Bread white (1 slice)",cal:79,p:3,c:15,f:1},{name:"Cheddar (30g)",cal:120,p:7,c:0,f:10},
  {name:"Mixed nuts (30g)",cal:180,p:5,c:6,f:16},{name:"Protein bar",cal:220,p:20,c:24,f:6},
  {name:"Brown rice (100g cooked)",cal:112,p:3,c:23,f:1},{name:"Pasta (100g cooked)",cal:131,p:5,c:25,f:1},
  {name:"Broccoli (100g)",cal:34,p:3,c:7,f:0},{name:"Spinach (100g)",cal:23,p:3,c:4,f:0},
  {name:"Milk whole (100ml)",cal:61,p:3,c:5,f:3},{name:"Cottage cheese (100g)",cal:98,p:11,c:3,f:4},
  {name:"Turkey breast (100g)",cal:135,p:30,c:0,f:1},{name:"Olive oil (1 tbsp)",cal:119,p:0,c:0,f:14},
  {name:"Almond butter (1 tbsp)",cal:98,p:3,c:3,f:9},{name:"Apple (medium)",cal:95,p:0,c:25,f:0},
  {name:"Egg white (1 large)",cal:17,p:4,c:0,f:0},
];

const EXERCISES={
  chest:[
    {name:"Barbell Bench Press",sets:"4",reps:"6-8",rest:"2-3 min",cue:"Chest to muscle failure"},
    {name:"Incline Dumbbell Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Slight arch, elbows 45°"},
    {name:"Cable Chest Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Full stretch at bottom"},
    {name:"Dips (chest lean)",sets:"3",reps:"10-12",rest:"90 sec",cue:"Lean forward, elbows wide"},
    {name:"Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Full range, chest touches floor"},
  ],
  back:[
    {name:"Deadlift",sets:"4",reps:"4-6",rest:"3 min",cue:"Neutral spine, drive hips forward"},
    {name:"Barbell Row",sets:"4",reps:"6-8",rest:"2 min",cue:"Pull to lower chest, brace core"},
    {name:"Pull-Up / Lat Pulldown",sets:"4",reps:"8-10",rest:"90 sec",cue:"Depress scapula first"},
    {name:"Seated Cable Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Elbows to sides, squeeze lats"},
    {name:"Face Pull",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pull to forehead, rotate externally"},
  ],
  shoulders:[
    {name:"Overhead Press",sets:"4",reps:"6-8",rest:"2 min",cue:"Bar path over forehead"},
    {name:"Dumbbell Lateral Raise",sets:"4",reps:"12-15",rest:"60 sec",cue:"Lead with elbows, slight lean"},
    {name:"Arnold Press",sets:"3",reps:"10-12",rest:"90 sec",cue:"Full rotation throughout"},
    {name:"Rear Delt Fly",sets:"3",reps:"15-20",rest:"60 sec",cue:"Slight bend in elbows"},
    {name:"Cable Lateral Raise",sets:"3",reps:"15-20",rest:"45 sec",cue:"Constant tension"},
  ],
  biceps:[
    {name:"Barbell Curl",sets:"4",reps:"8-10",rest:"90 sec",cue:"No elbow sway, full ROM"},
    {name:"Hammer Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Neutral grip, control eccentric"},
    {name:"Incline Dumbbell Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at bottom"},
    {name:"Cable Curl",sets:"3",reps:"12-15",rest:"60 sec",cue:"Constant tension"},
  ],
  triceps:[
    {name:"Close-Grip Bench Press",sets:"4",reps:"8-10",rest:"90 sec",cue:"Elbows tucked, full extension"},
    {name:"Tricep Pushdown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Lock elbows at sides"},
    {name:"Overhead Tricep Extension",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at top"},
    {name:"Skull Crusher",sets:"3",reps:"10-12",rest:"75 sec",cue:"Lower to forehead slowly"},
  ],
  quads:[
    {name:"Barbell Back Squat",sets:"4",reps:"6-8",rest:"3 min",cue:"Break parallel, knees out"},
    {name:"Leg Press",sets:"4",reps:"10-12",rest:"2 min",cue:"Full range, don't lock out"},
    {name:"Leg Extension",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pause at top, slow eccentric"},
    {name:"Bulgarian Split Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"Vertical torso"},
    {name:"Walking Lunges",sets:"3",reps:"12 each",rest:"90 sec",cue:"Long stride"},
  ],
  hamstrings:[
    {name:"Romanian Deadlift",sets:"4",reps:"8-10",rest:"2 min",cue:"Push hips back, feel stretch"},
    {name:"Lying Leg Curl",sets:"4",reps:"10-12",rest:"90 sec",cue:"Curl to glutes, slow lower"},
    {name:"Good Morning",sets:"3",reps:"10-12",rest:"90 sec",cue:"Slight knee bend, hinge from hip"},
    {name:"Nordic Curl",sets:"3",reps:"6-8",rest:"2 min",cue:"Control the descent"},
  ],
  glutes:[
    {name:"Hip Thrust",sets:"4",reps:"10-12",rest:"90 sec",cue:"Drive through heel, squeeze at top"},
    {name:"Glute Kickback",sets:"3",reps:"15-20",rest:"60 sec",cue:"Don't rotate hips"},
    {name:"Sumo Deadlift",sets:"4",reps:"6-8",rest:"2 min",cue:"Wide stance, toes out"},
    {name:"Step-Up",sets:"3",reps:"12 each",rest:"75 sec",cue:"Drive through front heel"},
  ],
  calves:[
    {name:"Standing Calf Raise",sets:"4",reps:"15-20",rest:"60 sec",cue:"Full ROM, pause at top"},
    {name:"Seated Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Targets soleus"},
    {name:"Single-Leg Calf Raise",sets:"3",reps:"12-15 each",rest:"45 sec",cue:"Use wall for balance"},
  ],
  core:[
    {name:"Plank",sets:"3",reps:"45-60 sec",rest:"45 sec",cue:"Neutral spine, squeeze glutes"},
    {name:"Cable Crunch",sets:"3",reps:"15-20",rest:"60 sec",cue:"Crunch abs, don't pull neck"},
    {name:"Hanging Leg Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"No swinging, control lower"},
    {name:"Ab Wheel Rollout",sets:"3",reps:"10-12",rest:"75 sec",cue:"Brace core throughout"},
    {name:"Russian Twist",sets:"3",reps:"20 total",rest:"45 sec",cue:"Rotate from torso"},
  ],
  hiit:[
    {name:"Burpee",sets:"4",reps:"15",rest:"45 sec",cue:"Explosive jump at top"},
    {name:"Box Jump",sets:"4",reps:"10",rest:"60 sec",cue:"Soft landing, hips back"},
    {name:"Mountain Climber",sets:"3",reps:"30 sec",rest:"30 sec",cue:"Hips down, fast feet"},
    {name:"Jump Squat",sets:"4",reps:"15",rest:"45 sec",cue:"Land softly, full squat"},
    {name:"Kettlebell Swing",sets:"4",reps:"20",rest:"60 sec",cue:"Hip hinge, snap hips"},
    {name:"Sprint Intervals",sets:"6",reps:"20 sec",rest:"40 sec",cue:"Max effort each sprint"},
  ],
};

const SPLITS={
  ppl:{name:"Push / Pull / Legs",days3:[{label:"Push",muscles:["chest","shoulders","triceps"]},{label:"Pull",muscles:["back","biceps"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]}],days6:[{label:"Push A",muscles:["chest","shoulders","triceps"]},{label:"Pull A",muscles:["back","biceps"]},{label:"Legs A",muscles:["quads","hamstrings","glutes","calves"]},{label:"Push B",muscles:["chest","shoulders","triceps"]},{label:"Pull B",muscles:["back","biceps"]},{label:"Legs B",muscles:["quads","hamstrings","glutes","calves"]}]},
  upper_lower:{name:"Upper / Lower",days4:[{label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]}]},
  muscle_group:{name:"Muscle Group",days5:[{label:"Chest & Triceps",muscles:["chest","triceps"]},{label:"Back & Biceps",muscles:["back","biceps"]},{label:"Shoulders & Core",muscles:["shoulders","core"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},{label:"Arms",muscles:["biceps","triceps","core"]}]},
  full_body:{name:"Full Body / HIIT",days3:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT",muscles:["hiit"]}]},
};

const QUOTES=[
  "The body achieves what the mind believes.",
  "One more rep. Always one more.",
  "Pain is temporary. Results are permanent.",
  "You don't find willpower. You build it.",
  "Strong is a choice you make every day.",
  "The only bad workout is the one you didn't do.",
  "Champions train. Legends grind.",
  "Discipline beats motivation every time.",
  "Your future self is watching. Don't let them down.",
  "Iron never lies.",
];

const SUPPLEMENTS=[
  {name:"Creatine Monohydrate",dose:"5g daily",timing:"Any time",goal:["muscle","strength","athletic"],evidence:"A+",cost:"$",desc:"Most researched supplement. Increases strength, power and muscle mass. No loading phase needed."},
  {name:"Whey Protein",dose:"25-40g per serve",timing:"Post-workout or between meals",goal:["muscle","strength","fat loss"],evidence:"A+",cost:"$",desc:"Fast-digesting protein to hit your daily targets. Use if you struggle to get enough from food."},
  {name:"Caffeine",dose:"3-6mg per kg bodyweight",timing:"30-60 min pre-workout",goal:["fat loss","athletic","strength"],evidence:"A",cost:"$",desc:"Proven to improve strength, endurance and fat burning. Coffee works just as well as pre-workout."},
  {name:"Vitamin D3",dose:"2000-4000 IU daily",timing:"With a fat-containing meal",goal:["muscle","strength","fat loss"],evidence:"A",cost:"$",desc:"Most people are deficient. Critical for testosterone, immune function and bone health."},
  {name:"Omega-3 Fish Oil",dose:"2-3g EPA+DHA daily",timing:"With meals",goal:["muscle","strength","fat loss"],evidence:"A",cost:"$",desc:"Reduces inflammation, improves recovery, supports heart and brain health."},
  {name:"Magnesium Glycinate",dose:"300-400mg daily",timing:"Before bed",goal:["muscle","strength","fat loss"],evidence:"B+",cost:"$",desc:"Dramatically improves sleep quality, reduces muscle cramps and supports recovery."},
  {name:"Beta-Alanine",dose:"3.2-6.4g daily",timing:"Pre-workout or split across day",goal:["athletic","strength"],evidence:"B+",cost:"$$",desc:"Buffers lactic acid, improving muscular endurance. Tingling is normal and harmless."},
  {name:"Ashwagandha (KSM-66)",dose:"300-600mg daily",timing:"With food",goal:["muscle","strength","fat loss"],evidence:"B",cost:"$$",desc:"Reduces cortisol, increases testosterone, improves strength and reduces anxiety."},
];

const HABITS_DEFAULT=[
  {id:"water",label:"Drink 3L water",icon:"💧",cat:"nutrition"},
  {id:"protein",label:"Hit protein target",icon:"🥩",cat:"nutrition"},
  {id:"sleep",label:"8 hours sleep",icon:"😴",cat:"recovery"},
  {id:"steps",label:"10,000 steps",icon:"👟",cat:"cardio"},
  {id:"workout",label:"Complete workout",icon:"🏋️",cat:"training"},
  {id:"noalcohol",label:"No alcohol",icon:"🚫",cat:"mindset"},
  {id:"meditation",label:"10 min meditation",icon:"🧘",cat:"mindset"},
  {id:"meal_prep",label:"Meal prepped",icon:"🍱",cat:"nutrition"},
  {id:"stretch",label:"Stretch / mobility",icon:"🤸",cat:"recovery"},
  {id:"gratitude",label:"Gratitude journal",icon:"📓",cat:"mindset"},
];

const ARTICLES=[
  {title:"How Much Protein Do You Actually Need?",cat:"Nutrition",read:"3 min",emoji:"🥩",content:"For muscle building or fat loss, research consistently shows 1.6-2.2g per kg of bodyweight is optimal. At 80kg that's 128-176g daily. Spread it across 3-5 meals. Chicken, fish, eggs, Greek yogurt and protein shakes are your best sources."},
  {title:"Why You're Not Losing Fat",cat:"Fat Loss",read:"4 min",emoji:"🔥",content:"Three likely culprits: you're eating more than you think (track everything for a week), you've adapted to your deficit (take a 1-2 week diet break), or you're not sleeping enough (under 7 hours increases hunger hormones dramatically). Fix these three first."},
  {title:"Progressive Overload: The Only Rule That Matters",cat:"Training",read:"3 min",emoji:"📈",content:"Progressive overload means doing more over time. If you lifted 60kg for 8 reps last week, aim for 62.5kg or 9 reps this week. Track your lifts. Without progression, your body has no reason to change. This is the single most important principle in all of training."},
  {title:"Sleep: The Most Underrated Tool",cat:"Recovery",read:"3 min",emoji:"😴",content:"During deep sleep your body releases 70% of its daily growth hormone. Under 7 hours and cortisol spikes, testosterone drops, hunger hormones increase. Prioritise 7-9 hours. No supplement comes close to what proper sleep does for body composition."},
  {title:"Creatine: The Only Supplement You Need",cat:"Supplements",read:"2 min",emoji:"⚡",content:"The most researched sports supplement in history. It replenishes ATP faster, letting you do 1-2 more reps per set. Over months this compounds into significantly more muscle. 5g per day, any time, no loading phase. Buy the cheapest powder — they're identical."},
  {title:"The Truth About Carbs and Fat Loss",cat:"Nutrition",read:"3 min",emoji:"🍚",content:"Carbs don't make you fat — excess calories do. Carbs are your primary fuel for high-intensity training. Cut them too low and performance crashes, muscle is lost. A deficit of 300-500 calories below maintenance with adequate protein will produce consistent fat loss."},
  {title:"Breaking Through a Plateau",cat:"Training",read:"4 min",emoji:"💪",content:"Deload for a week at 60% volume, change rep ranges, swap exercise variations, or add a tempo. Most importantly ensure sleep and nutrition are dialled in before blaming the programme. Plateaus are adaptation — they mean you need a new stimulus."},
  {title:"Meal Timing: Does It Matter?",cat:"Nutrition",read:"2 min",emoji:"⏰",content:"Much less than you think. Total daily protein and calories matter far more than when you eat them. However, 20-40g protein within 2 hours post-workout does maximise muscle protein synthesis. Pre-workout, eat a moderate-carb meal 1-2 hours before."},
];

// ─── UTILS ───────────────────────────────────────────────────────────────────
function LoadingDots(){
  return(<div style={{textAlign:"center",padding:"2rem"}}>{[0,1,2].map(i=><span key={i} style={{...s.loadingDot,animationDelay:`${i*0.16}s`}}/>)}</div>);
}
function Eyebrow({label}){return <div style={s.eyebrow}><span style={s.dot}/>{label}</div>;}
function MacroBar({p,c,f}){
  const t=p+c+f||1;
  return(<div style={{display:"flex",height:"4px",borderRadius:"2px",overflow:"hidden",gap:"1px",marginTop:"4px"}}>
    <div style={{flex:p/t,background:"#4ade80"}}/><div style={{flex:c/t,background:"#60a5fa"}}/><div style={{flex:f/t,background:"#f97316"}}/>
  </div>);
}

// ─── AUTH ────────────────────────────────────────────────────────────────────
// ─── STRIPE CONFIG ───────────────────────────────────────────────────────────
const STRIPE_PK = "pk_live_51TQLoGHrJvzDNLarEklQ7XCJtNtfjEY7NeUtXGKRi2wGBQ277jRaPlH1oQl0QuVo9qRpxiDMcRCbNmryCRZ9zwmd00s3QAiryC";
const STRIPE_LINKS = {
  monthly:  "https://buy.stripe.com/8x2cN5eIl3jA2tF6lA0Jq00",
  sixmonth: "https://buy.stripe.com/dRmeVd6bPcUa3xJ9xM0Jq01",
  annual:   "https://buy.stripe.com/fZubJ12ZDdYe5FR25k0Jq02",
  lifetime: "https://buy.stripe.com/dRm14ncAd1bs3xJeS60Jq03",
};

// ─── AUTH SCREEN ─────────────────────────────────────────────────────────────
function AuthScreen({onSubscribe,preselectedPlan}){
  const[email,setEmail]=useState("");
  const[sent,setSent]=useState(false);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");

  async function handleMagic(){
    if(!email)return;setLoading(true);setError("");
    const redirectTo=window.location.origin+window.location.pathname;
    const{error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:redirectTo}});
    setLoading(false);
    if(error)setError(error.message);else setSent(true);
  }
  async function handleGoogle(){
    const redirectTo=window.location.origin+window.location.pathname;
    const{error}=await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo,queryParams:{access_type:"offline",prompt:"consent"}}});
    if(error)setError(error.message);
  }

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1.5rem",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 10%,rgba(204,255,0,0.12) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div style={{width:"100%",maxWidth:"400px",position:"relative",zIndex:1}}>
        <div style={{textAlign:"center",marginBottom:"2rem"}}>
          <div style={{...s.logo,fontSize:"2rem",marginBottom:"0.75rem",display:"block",cursor:"default",fontFamily:"'Barlow Condensed',sans-serif"}}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
          <Eyebrow label={preselectedPlan?"One last step — create your account":"Sign in to your account"}/>
          {preselectedPlan&&<div style={{...s.tag,marginTop:"0.5rem",display:"inline-block"}}>Plan selected: {preselectedPlan}</div>}
          <p style={{color:"rgba(255,255,255,0.4)",fontSize:"0.88rem",fontFamily:"Barlow,sans-serif",marginTop:"0.75rem"}}>
            {preselectedPlan?"Create your account to complete checkout":"Welcome back"}
          </p>
        </div>
        <div style={s.card}>
          {sent?(
            <div style={s.successBanner}>
              ✅ Magic link sent to <strong>{email}</strong>.<br/>
              <span style={{fontSize:"0.82rem",opacity:0.8}}>Check your inbox and click the link — it will open the app.</span>
            </div>
          ):(
            <>
              <button onClick={handleGoogle} style={{...s.btnGlass,width:"100%",marginBottom:"0.75rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"}}>
                <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <div style={s.divider}><div style={s.dividerLine}/>or email<div style={s.dividerLine}/></div>
              <label style={s.label}>Email address</label>
              <input style={s.input} type="email" placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleMagic()}/>
              {error&&<p style={{color:"#ff6b6b",fontSize:"0.82rem",marginTop:"-0.4rem",marginBottom:"0.6rem",fontFamily:"Barlow,sans-serif"}}>{error}</p>}
              <button onClick={handleMagic} disabled={loading||!email} style={{...s.btn,width:"100%",padding:"0.9rem",opacity:!email?0.5:1}}>
                {loading?"Sending link...":"Send Magic Link"}
              </button>
              <p style={{textAlign:"center",color:"rgba(255,255,255,0.3)",fontSize:"0.72rem",marginTop:"1rem",fontFamily:"Barlow,sans-serif"}}>
                We'll email you a secure sign-in link. No password needed.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── LANDING PAGE ────────────────────────────────────────────────────────────
function LandingPage({onSignIn,onSelectPlan,onLogoTap}){
  const[slide,setSlide]=useState(0);
  const[isDragging,setIsDragging]=useState(false);
  const[dragStartX,setDragStartX]=useState(0);
  const[dragOffset,setDragOffset]=useState(0);

  const slides=[
    {icon:"🏋️",title:"Train Smarter",sub:"Personalised workout programmes built around your split, level and goal. Every set tracked.",detail:"PPL · Upper/Lower · Muscle Group · HIIT",color:"rgba(204,255,0,0.09)",accent:C.lime,stats:[{n:"80+",l:"Exercises"},{n:"4",l:"Splits"},{n:"∞",l:"Workouts"}]},
    {icon:"🍽️",title:"Eat Right",sub:"AI meal plans with real ingredients and step-by-step cooking instructions for your diet.",detail:"58+ meals · Full macros · Shopping lists",color:"rgba(59,130,246,0.09)",accent:"#60a5fa",stats:[{n:"58+",l:"Meals"},{n:"7",l:"Diets"},{n:"100%",l:"Macro tracked"}]},
    {icon:"🤖",title:"AI Coach 24/7",sub:"Your personal expert coach in your pocket. Ask anything. Get science-backed answers instantly.",detail:"Training · Nutrition · Recovery · Mindset",color:"rgba(168,85,247,0.09)",accent:"#c084fc",stats:[{n:"24/7",l:"Available"},{n:"∞",l:"Questions"},{n:"0s",l:"Wait"}]},
    {icon:"📈",title:"Track Everything",sub:"Body weight, measurements, macros, workouts and habits — all synced in real time.",detail:"Live Supabase sync · Calendar · Streaks",color:"rgba(251,146,60,0.09)",accent:"#fb923c",stats:[{n:"6",l:"Measurements"},{n:"10",l:"Habits"},{n:"Live",l:"Sync"}]},
    {icon:"📚",title:"12-Week Programme",sub:"A complete science-backed transformation course included with every plan. Sessions written. Meals planned.",detail:"Progressive overload · Periodisation · Nutrition",color:"rgba(34,197,94,0.09)",accent:"#4ade80",stats:[{n:"12",l:"Weeks"},{n:"84",l:"Sessions"},{n:"100%",l:"Written"}]},
  ];

  const total=slides.length;
  function goTo(i){setSlide(Math.max(0,Math.min(total-1,i)));setDragOffset(0);}
  function onTouchStart(e){setIsDragging(true);setDragStartX(e.touches[0].clientX);}
  function onTouchMove(e){if(!isDragging)return;setDragOffset(e.touches[0].clientX-dragStartX);}
  function onTouchEnd(){if(dragOffset<-60&&slide<total-1)goTo(slide+1);else if(dragOffset>60&&slide>0)goTo(slide-1);else setDragOffset(0);setIsDragging(false);}
  function onMouseDown(e){setIsDragging(true);setDragStartX(e.clientX);}
  function onMouseMove(e){if(!isDragging)return;setDragOffset(e.clientX-dragStartX);}
  function onMouseUp(){if(dragOffset<-60&&slide<total-1)goTo(slide+1);else if(dragOffset>60&&slide>0)goTo(slide-1);else setDragOffset(0);setIsDragging(false);}

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",overflowX:"hidden",position:"relative"}}>
      <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse 80% 55% at 10% 5%,rgba(204,255,0,0.13) 0%,transparent 55%),radial-gradient(ellipse 60% 45% at 90% 85%,rgba(120,220,0,0.07) 0%,transparent 50%)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:"480px",margin:"0 auto",padding:"0 0 5rem"}}>

        {/* Nav */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.25rem 0"}}>
          <div onClick={onLogoTap} style={{fontSize:"1.3rem",fontWeight:900,letterSpacing:"0.06em",color:C.white,textTransform:"uppercase",fontFamily:"Barlow Condensed,sans-serif",cursor:"default",userSelect:"none"}}>FORGE<span style={{color:C.lime}}>/</span>BODY</div>
          <button onClick={onSignIn} style={{...s.btnSm,background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.12)",color:"rgba(255,255,255,0.7)"}}>Sign In</button>
        </div>

        {/* Free trial banner */}
        <div style={{margin:"1rem 1.25rem 0",background:"linear-gradient(135deg,rgba(204,255,0,0.15),rgba(150,255,0,0.08))",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"14px",padding:"0.85rem 1.1rem",display:"flex",alignItems:"center",gap:"0.75rem",backdropFilter:"blur(10px)"}}>
          <span style={{fontSize:"1.3rem",flexShrink:0}}>🎁</span>
          <div>
            <div style={{fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.lime,letterSpacing:"0.05em"}}>7-Day Free Trial</div>
            <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.55)",fontFamily:"Barlow,sans-serif"}}>Try everything free. Cancel anytime before day 7.</div>
          </div>
        </div>

        {/* Hero */}
        <div style={{padding:"1.75rem 1.25rem 1.25rem"}}>
          <div style={{...s.tag,marginBottom:"0.75rem",display:"inline-block"}}>AI Fitness Platform</div>
          <h1 style={{fontSize:"clamp(3rem,11vw,5rem)",fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",letterSpacing:"-0.03em",lineHeight:0.92,color:C.white,marginBottom:"1rem"}}>
            Forge The<br/>Body You<br/><span style={{color:C.lime}}>Want.</span>
          </h1>
          <p style={{color:"rgba(255,255,255,0.45)",fontFamily:"Barlow,sans-serif",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"0.75rem"}}>
            AI-powered workouts, personalised meal plans, and a 24/7 coach. No trainer. No confusion. Just results.
          </p>

          {/* Value props - liquid glass pills */}
          <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",marginBottom:"1.5rem"}}>
            {[
              {icon:"📅",text:"7-day free trial — cancel anytime"},
              {icon:"📚",text:"12-week science-backed programme included"},
              {icon:"🤖",text:"AI coach, meal plans & workout builder"},
            ].map((v,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"0.65rem 0.9rem",backdropFilter:"blur(10px)"}}>
                <span style={{fontSize:"1rem",flexShrink:0}}>{v.icon}</span>
                <span style={{color:"rgba(255,255,255,0.7)",fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem"}}>{v.text}</span>
              </div>
            ))}
          </div>

          <button onClick={onSelectPlan} style={{...s.btn,width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",marginBottom:"0.6rem"}}>
            Start Free Trial →
          </button>
          <button onClick={onSignIn} style={{...s.btnGlass,width:"100%",padding:"0.85rem",fontSize:"0.85rem"}}>
            Already a member? Sign In
          </button>
        </div>

        {/* Swipeable feature cards */}
        <div style={{marginBottom:"1.25rem"}}>
          <div style={{padding:"0 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
            <div style={{...s.label,marginBottom:0,color:"rgba(255,255,255,0.4)"}}>Swipe to explore features</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.25)",fontFamily:"Barlow,sans-serif"}}>{slide+1}/{total}</div>
          </div>
          <div style={{overflow:"hidden",touchAction:"pan-y"}}
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          >
            <div style={{display:"flex",transition:isDragging?"none":"transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",transform:`translateX(calc(-${slide*100}% + ${dragOffset}px))`,willChange:"transform",userSelect:"none"}}>
              {slides.map((sl,i)=>(
                <div key={i} style={{minWidth:"100%",padding:"0 1.25rem"}}>
                  <div style={{background:`linear-gradient(135deg,${sl.color},rgba(255,255,255,0.03))`,border:`1px solid ${sl.accent}28`,borderRadius:"24px",padding:"1.75rem",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",overflow:"hidden",cursor:"grab"}}>
                    <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:`${sl.accent}12`,filter:"blur(30px)",pointerEvents:"none"}}/>
                    <div style={{fontSize:"2.8rem",marginBottom:"0.9rem"}}>{sl.icon}</div>
                    <div style={{fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",fontSize:"1.7rem",color:C.white,letterSpacing:"-0.02em",lineHeight:1,marginBottom:"0.55rem"}}>{sl.title}</div>
                    <div style={{color:"rgba(255,255,255,0.55)",fontFamily:"Barlow,sans-serif",fontSize:"0.9rem",lineHeight:1.55,marginBottom:"0.55rem"}}>{sl.sub}</div>
                    <div style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.08em",color:sl.accent,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",marginBottom:"1.25rem"}}>{sl.detail}</div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem"}}>
                      {sl.stats.map((stat,j)=>(
                        <div key={j} style={{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"0.65rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"}}>
                          <div style={{fontSize:"1.3rem",fontWeight:900,color:sl.accent,fontFamily:"Barlow Condensed,sans-serif",lineHeight:1}}>{stat.n}</div>
                          <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"Barlow Condensed,sans-serif",marginTop:"2px"}}>{stat.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{display:"flex",gap:"6px",justifyContent:"center",marginTop:"0.85rem"}}>
            {slides.map((_,i)=><div key={i} onClick={()=>goTo(i)} style={{height:"4px",borderRadius:"2px",background:i===slide?C.lime:"rgba(255,255,255,0.18)",width:i===slide?24:6,transition:"all 0.3s ease",cursor:"pointer"}}/>)}
          </div>
        </div>

        {/* Social proof */}
        <div style={{padding:"0 1.25rem 1.25rem"}}>
          <div style={{...s.card,textAlign:"center",padding:"1.5rem"}}>
            <div style={{display:"flex",justifyContent:"center",gap:"0.2rem",marginBottom:"0.5rem"}}>{[...Array(5)].map((_,i)=><span key={i} style={{color:"#fbbf24",fontSize:"1rem"}}>★</span>)}</div>
            <div style={{fontFamily:"Barlow,sans-serif",fontSize:"0.9rem",color:"rgba(255,255,255,0.55)",lineHeight:1.55,fontStyle:"italic",marginBottom:"0.5rem"}}>"Finally an app that gives me workouts AND tells me what to eat. The AI coach knows my programme."</div>
            <div style={{fontSize:"0.7rem",fontWeight:800,color:"rgba(255,255,255,0.3)",fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",letterSpacing:"0.08em"}}>— ForgeBody Member</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{padding:"0 1.25rem"}}>
          <button onClick={onSelectPlan} style={{...s.btn,width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",marginBottom:"0.5rem"}}>
            See Plans & Start Free Trial →
          </button>
          <p style={{textAlign:"center",color:"rgba(255,255,255,0.22)",fontSize:"0.72rem",fontFamily:"Barlow,sans-serif"}}>7-day free trial · Cancel anytime · No contracts</p>
        </div>
      </div>
    </div>
  );
}

// ─── SUBSCRIPTION WALL ───────────────────────────────────────────────────────
function SubscriptionWall({user,onBack,onSubscribed}){
  const[slide,setSlide]=useState(1);
  const[isDragging,setIsDragging]=useState(false);
  const[dragStartX,setDragStartX]=useState(0);
  const[dragOffset,setDragOffset]=useState(0);
  const[loading,setLoading]=useState(false);

  const plans=[
    {id:"monthly",label:"Monthly",price:"$19",period:"/ month",billing:"Billed monthly · Cancel anytime",trial:"7-day free trial",badge:null,highlight:false,link:STRIPE_LINKS.monthly,features:["Full app access","7-day free trial","Cancel anytime"]},
    {id:"sixmonth",label:"6 Months",price:"$84",period:"upfront",billing:"$14/month · Billed once every 6 months",trial:"7-day free trial",priceNote:"Save $30 vs monthly",badge:"Popular",highlight:true,link:STRIPE_LINKS.sixmonth,features:["Full app access","7-day free trial","Save $30 total"]},
    {id:"annual",label:"Annual",price:"$120",period:"/ year",billing:"$10/month · Billed once annually",trial:"7-day free trial",priceNote:"Save $108 vs monthly",badge:"Best Value",highlight:true,link:STRIPE_LINKS.annual,features:["Full app access","7-day free trial","Save $108 total"]},
    {id:"lifetime",label:"Lifetime",price:"$199",period:"one time",billing:"Pay once. Access forever.",trial:null,priceNote:"Never pay again",badge:"🔥 Lifetime",highlight:false,link:STRIPE_LINKS.lifetime,features:["Full app access","No subscription ever","All future updates free"]},
  ];

  const total=plans.length;
  function goTo(i){setSlide(Math.max(0,Math.min(total-1,i)));setDragOffset(0);}
  function onTouchStart(e){setIsDragging(true);setDragStartX(e.touches[0].clientX);}
  function onTouchMove(e){if(!isDragging)return;setDragOffset(e.touches[0].clientX-dragStartX);}
  function onTouchEnd(){if(dragOffset<-60&&slide<total-1)goTo(slide+1);else if(dragOffset>60&&slide>0)goTo(slide-1);else setDragOffset(0);setIsDragging(false);}
  function onMouseDown(e){setIsDragging(true);setDragStartX(e.clientX);}
  function onMouseMove(e){if(!isDragging)return;setDragOffset(e.clientX-dragStartX);}
  function onMouseUp(){if(dragOffset<-60&&slide<total-1)goTo(slide+1);else if(dragOffset>60&&slide>0)goTo(slide-1);else setDragOffset(0);setIsDragging(false);}

  function selectPlan(plan){
    // Save plan choice + user id so we can mark subscribed on return
    localStorage.setItem("fb_pending_plan",plan.id);
    localStorage.setItem("fb_pending_user",user?.id||"");
    // Build Stripe URL with email pre-filled so Stripe knows who they are
    const email=user?.email||"";
    const returnUrl=window.location.origin+window.location.pathname+"?payment=success";
    const stripeUrl=`${plan.link}?prefilled_email=${encodeURIComponent(email)}&client_reference_id=${encodeURIComponent(user?.id||"")}`;
    window.location.href=stripeUrl;
  }

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",overflowX:"hidden",position:"relative"}}>
      <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse 80% 55% at 10% 5%,rgba(204,255,0,0.12) 0%,transparent 55%)",pointerEvents:"none",zIndex:0}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:"480px",margin:"0 auto",padding:"0 0 3rem"}}>

        {/* Header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.25rem 0"}}>
          <button onClick={onBack} style={{...s.btnSm,background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button>
          <div style={{fontSize:"1.2rem",fontWeight:900,letterSpacing:"0.06em",color:C.white,textTransform:"uppercase",fontFamily:"Barlow Condensed,sans-serif"}}>FORGE<span style={{color:C.lime}}>/</span>BODY</div>
          <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",textAlign:"right",maxWidth:"80px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{user?.email?.split("@")[0]||""}</div>
        </div>

        {/* Hero */}
        <div style={{padding:"1.5rem 1.25rem 1rem",textAlign:"center"}}>
          <div style={{fontSize:"2.2rem",marginBottom:"0.4rem"}}>🔥</div>
          <h2 style={{fontSize:"2rem",fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1,letterSpacing:"-0.02em"}}>Choose Your Plan</h2>
          <p style={{color:"rgba(255,255,255,0.4)",fontFamily:"Barlow,sans-serif",fontSize:"0.85rem",marginBottom:"0.75rem"}}>Swipe to compare · All subscriptions include a 7-day free trial</p>
          {/* Value reminder */}
          <div style={{background:"rgba(204,255,0,0.07)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"12px",padding:"0.75rem 1rem",textAlign:"left",marginBottom:"0.25rem"}}>
            <div style={{fontSize:"0.72rem",fontWeight:800,color:C.lime,fontFamily:"Barlow Condensed,sans-serif",letterSpacing:"0.1em",textTransform:"uppercase",marginBottom:"0.35rem"}}>What's included in every plan</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:"0.35rem"}}>
              {["AI Coach 24/7","Meal Plans + Recipes","Workout Builder","Macro Tracker","12-Week Programme","Progress Tracking","Supplement Guide","Habit Tracker"].map((f,i)=>(
                <span key={i} style={{fontSize:"0.72rem",background:"rgba(255,255,255,0.07)",color:"rgba(255,255,255,0.6)",borderRadius:"20px",padding:"0.2rem 0.6rem",fontFamily:"Barlow,sans-serif"}}>{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Swipeable plan cards */}
        <div style={{overflow:"hidden",touchAction:"pan-y",marginBottom:"0.75rem"}}
          onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
        >
          <div style={{display:"flex",transition:isDragging?"none":"transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",transform:`translateX(calc(-${slide*100}% + ${dragOffset}px))`,willChange:"transform",userSelect:"none"}}>
            {plans.map((p,i)=>(
              <div key={p.id} style={{minWidth:"100%",padding:"0 1.25rem"}}>
                <div style={{
                  background:p.highlight?"linear-gradient(135deg,rgba(204,255,0,0.09),rgba(150,220,0,0.04))":"rgba(255,255,255,0.06)",
                  border:`2px solid ${p.highlight?"rgba(204,255,0,0.4)":p.id==="lifetime"?"rgba(251,191,36,0.3)":"rgba(255,255,255,0.1)"}`,
                  borderRadius:"24px",padding:"1.75rem",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
                  position:"relative",overflow:"hidden",cursor:"grab",
                  boxShadow:p.highlight?"0 0 40px rgba(204,255,0,0.07)":p.id==="lifetime"?"0 0 30px rgba(251,191,36,0.07)":"none",
                }}>
                  {/* Glow */}
                  <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:p.highlight?"rgba(204,255,0,0.07)":p.id==="lifetime"?"rgba(251,191,36,0.07)":"rgba(255,255,255,0.03)",filter:"blur(30px)",pointerEvents:"none"}}/>

                  {/* Badge */}
                  {p.badge&&(
                    <div style={{position:"absolute",top:"16px",right:"16px",background:p.id==="lifetime"?"#fbbf24":C.lime,color:"#000",fontSize:"0.6rem",fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",letterSpacing:"0.1em",textTransform:"uppercase",padding:"4px 10px",borderRadius:"20px"}}>{p.badge}</div>
                  )}

                  {/* Price */}
                  <div style={{marginBottom:"1rem"}}>
                    <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:p.highlight?C.lime:p.id==="lifetime"?"#fbbf24":"rgba(255,255,255,0.45)",fontFamily:"Barlow Condensed,sans-serif",marginBottom:"0.35rem"}}>{p.label}</div>
                    <div style={{display:"flex",alignItems:"flex-end",gap:"0.35rem",marginBottom:"0.2rem"}}>
                      <div style={{fontSize:"3.8rem",fontWeight:900,color:p.highlight?C.lime:p.id==="lifetime"?"#fbbf24":C.white,fontFamily:"Barlow Condensed,sans-serif",lineHeight:1,letterSpacing:"-0.03em"}}>{p.price}</div>
                      <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"Barlow,sans-serif",fontSize:"0.85rem",paddingBottom:"0.5rem"}}>{p.period}</div>
                    </div>
                    <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"Barlow,sans-serif"}}>{p.billing}</div>
                    {p.trial&&<div style={{fontSize:"0.75rem",fontWeight:800,color:C.lime,fontFamily:"Barlow Condensed,sans-serif",letterSpacing:"0.06em",marginTop:"0.3rem"}}>🎁 {p.trial} included</div>}
                    {p.priceNote&&<div style={{fontSize:"0.75rem",fontWeight:800,color:"#4ade80",fontFamily:"Barlow Condensed,sans-serif",letterSpacing:"0.06em",marginTop:"0.15rem"}}>💰 {p.priceNote}</div>}
                  </div>

                  {/* Features */}
                  <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:"0.9rem",marginBottom:"1.25rem"}}>
                    {["AI Meal Planner + recipes","Personalised workout builder","AI coach 24/7","Macro & calorie tracker","Progress & body tracking","Habit & mindset tools","Supplement guide","12-week science programme",...p.features].map((f,j)=>(
                      <div key={j} style={{display:"flex",gap:"0.55rem",alignItems:"center",padding:"0.28rem 0"}}>
                        <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" fill={p.highlight?"rgba(204,255,0,0.12)":p.id==="lifetime"?"rgba(251,191,36,0.1)":"rgba(255,255,255,0.07)"} stroke={p.highlight?"rgba(204,255,0,0.25)":p.id==="lifetime"?"rgba(251,191,36,0.25)":"rgba(255,255,255,0.1)"} strokeWidth="1"/><polyline points="4,8 7,11 12,5" fill="none" stroke={p.highlight?C.lime:p.id==="lifetime"?"#fbbf24":"rgba(255,255,255,0.45)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{color:j<8?"rgba(255,255,255,0.52)":"rgba(255,255,255,0.75)",fontFamily:"Barlow,sans-serif",fontSize:"0.82rem",fontWeight:j>=8?600:400}}>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button onClick={()=>selectPlan(p)} style={{
                    ...s.btn,width:"100%",padding:"1rem",fontSize:"0.95rem",
                    background:p.highlight?C.lime:p.id==="lifetime"?"#fbbf24":"rgba(255,255,255,0.1)",
                    color:p.highlight||p.id==="lifetime"?"#000":C.white,
                    border:p.highlight||p.id==="lifetime"?"none":"1px solid rgba(255,255,255,0.15)",
                    boxShadow:p.highlight?"0 0 24px rgba(204,255,0,0.25)":p.id==="lifetime"?"0 0 24px rgba(251,191,36,0.2)":"none",
                  }}>
                    {p.id==="lifetime"?"Get Lifetime Access →":p.trial?`Start Free Trial →`:"Get Started →"}
                  </button>
                  {p.trial&&<div style={{textAlign:"center",fontSize:"0.7rem",color:"rgba(255,255,255,0.28)",fontFamily:"Barlow,sans-serif",marginTop:"0.5rem"}}>Free for 7 days, then {p.price} {p.period}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{display:"flex",gap:"6px",justifyContent:"center",marginBottom:"0.75rem"}}>
          {plans.map((_,i)=><div key={i} onClick={()=>goTo(i)} style={{height:"4px",borderRadius:"2px",background:i===slide?C.lime:"rgba(255,255,255,0.18)",width:i===slide?24:6,transition:"all 0.3s ease",cursor:"pointer"}}/>)}
        </div>

        {/* Plan selector pills */}
        <div style={{display:"flex",gap:"0.4rem",padding:"0 1.25rem",marginBottom:"1.25rem"}}>
          {plans.map((p,i)=>(
            <button key={p.id} onClick={()=>goTo(i)} style={{flex:1,padding:"0.5rem 0.25rem",borderRadius:"10px",border:`1px solid ${i===slide?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.1)"}`,background:i===slide?"rgba(204,255,0,0.08)":"transparent",color:i===slide?C.lime:"rgba(255,255,255,0.35)",fontFamily:"Barlow Condensed,sans-serif",fontWeight:800,fontSize:"0.65rem",cursor:"pointer",textTransform:"uppercase",letterSpacing:"0.04em",transition:"all 0.2s"}}>
              {p.label}
            </button>
          ))}
        </div>

        <p style={{textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"0.7rem",fontFamily:"Barlow,sans-serif",padding:"0 1.25rem"}}>
          Secure payment via Stripe · Instant access · Cancel anytime
        </p>
      </div>
    </div>
  );
}

// ─── PAYMENT SUCCESS ─────────────────────────────────────────────────────────
function PaymentSuccess({onContinue}){
  const[count,setCount]=useState(5);
  useEffect(()=>{
    if(count<=0){onContinue();return;}
    const t=setTimeout(()=>setCount(c=>c-1),1000);
    return()=>clearTimeout(t);
  },[count]);
  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative",textAlign:"center"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 40%,rgba(204,255,0,0.15) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:"400px",width:"100%"}}>
        {/* Animated checkmark */}
        <div style={{width:"90px",height:"90px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"2px solid rgba(204,255,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem",boxShadow:"0 0 40px rgba(204,255,0,0.2)"}}>
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none">
            <polyline points="10,25 20,35 40,15" stroke={C.lime} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" style={{strokeDasharray:60,strokeDashoffset:0,animation:"none"}}/>
          </svg>
        </div>
        <div style={{fontSize:"2.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.lime,marginBottom:"0.5rem",lineHeight:1}}>
          Payment Successful!
        </div>
        <div style={{color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"2rem"}}>
          Welcome to ForgeBody. Your transformation starts now.
        </div>
        {/* What they unlocked */}
        <div style={{...s.card,textAlign:"left",marginBottom:"1.5rem"}}>
          <div style={{...s.label,color:C.lime,marginBottom:"0.75rem"}}>You now have access to</div>
          {[
            {icon:"🏋️",text:"Personalised workout programme"},
            {icon:"🍽️",text:"AI meal plans with recipes"},
            {icon:"🤖",text:"AI coaching chat 24/7"},
            {icon:"📈",text:"Full progress tracking"},
            {icon:"📚",text:"12-week science programme"},
          ].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:"0.75rem",alignItems:"center",padding:"0.4rem 0",borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <span style={{fontSize:"1.1rem"}}>{item.icon}</span>
              <span style={{color:"rgba(255,255,255,0.65)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>{item.text}</span>
            </div>
          ))}
        </div>
        <button onClick={onContinue} style={{...s.btn,width:"100%",padding:"1rem",fontSize:"1rem",borderRadius:"14px",marginBottom:"0.5rem"}}>
          Enter ForgeBody →
        </button>
        <div style={{color:"rgba(255,255,255,0.25)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>
          Auto-continuing in {count}s...
        </div>
      </div>
    </div>
  );
}

// ─── ONBOARDING ──────────────────────────────────────────────────────────────
function Onboarding({user,onComplete}){
  const[step,setStep]=useState(0);
  const[data,setData]=useState({name:"",goal:"muscle",weight:"",unit:"kg",diet:"standard",split:"ppl",days:"4",level:"intermediate"});
  function upd(k,v){setData(d=>({...d,[k]:v}));}
  async function finish(){
    localStorage.setItem("fb_workout_settings",JSON.stringify({split:data.split,days:data.days,level:data.level,wGoal:data.goal}));
    await supabase.from("profiles").upsert({user_id:user.id,name:data.name,goal:data.goal,weight:parseFloat(data.weight)||null,unit:data.unit,diet:data.diet,onboarded:true});
    onComplete(data);
  }
  const steps=[
    <div key={0} style={{animation:"fadeUp 0.3s ease"}}>
      <div style={{textAlign:"center",marginBottom:"2rem"}}>
        <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>👋</div>
        <div style={{fontSize:"1.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>Welcome to<br/><span style={{color:C.lime}}>ForgeBody</span></div>
        <p style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginTop:"0.5rem"}}>Let's set up your profile. Takes 60 seconds.</p>
      </div>
      <label style={s.label}>What's your name?</label>
      <input style={s.input} placeholder="First name" value={data.name} onChange={e=>upd("name",e.target.value)}/>
      <button onClick={()=>data.name&&setStep(1)} style={{...s.btn,width:"100%",padding:"0.9rem",opacity:data.name?1:0.5}}>Continue →</button>
    </div>,
    <div key={1} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 2 of 5"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Primary goal?</div>
      {[{k:"fat loss",l:"Fat Loss",d:"Burn fat, get lean",i:"🔥"},{k:"muscle",l:"Muscle & Size",d:"Build muscle, get bigger",i:"💪"},{k:"strength",l:"Strength",d:"Get stronger, lift heavier",i:"🏋️"},{k:"athletic",l:"Athletic",d:"Speed, power, conditioning",i:"⚡"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("goal",o.k);setStep(2);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.goal===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.goal===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={2} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 3 of 5"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Training split?</div>
      {[{k:"ppl",l:"Push / Pull / Legs",d:"3-6 days · Classic bodybuilding",i:"⚡"},{k:"upper_lower",l:"Upper / Lower",d:"4 days · Strength & size",i:"💪"},{k:"muscle_group",l:"Muscle Group",d:"5 days · Dedicated per muscle",i:"🎯"},{k:"full_body",l:"Full Body / HIIT",d:"3 days · Fat loss & conditioning",i:"🔥"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("split",o.k);setStep(3);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.split===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.split===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={3} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 4 of 5"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Experience level?</div>
      {[{k:"beginner",l:"Beginner",d:"Less than 1 year",i:"🌱"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent",i:"⚡"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements",i:"🔥"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("level",o.k);setStep(4);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.level===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.level===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={4} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 5 of 5"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Last details</div>
      <div style={s.card}>
        <label style={s.label}>Bodyweight</label>
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem"}}>
          {["kg","lbs"].map(u=><button key={u} onClick={()=>upd("unit",u)} style={{flex:1,padding:"0.55rem",borderRadius:"8px",border:`1px solid ${data.unit===u?C.lime:"rgba(255,255,255,0.12)"}`,background:data.unit===u?"rgba(204,255,0,0.12)":"transparent",color:data.unit===u?C.lime:C.muted,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.85rem",cursor:"pointer",textTransform:"uppercase"}}>{u}</button>)}
        </div>
        <input style={s.input} type="number" placeholder={data.unit==="kg"?"e.g. 85":"e.g. 187"} value={data.weight} onChange={e=>upd("weight",e.target.value)}/>
        <label style={s.label}>Dietary preference</label>
        <select style={s.select} value={data.diet} onChange={e=>upd("diet",e.target.value)}>
          {["standard","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d=><option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}
        </select>
        <button onClick={finish} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Let's Forge 🔥</button>
      </div>
    </div>,
  ];
  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",padding:"2rem 1.25rem",position:"relative"}}>
      <style>{GLASS}</style>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 10%,rgba(204,255,0,0.1) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:"440px",margin:"0 auto",position:"relative",zIndex:1}}>
        <div style={{display:"flex",gap:"4px",marginBottom:"2rem"}}>
          {[0,1,2,3,4].map(i=><div key={i} style={{flex:1,height:"3px",borderRadius:"2px",background:step>i?C.lime:step===i?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.1)",transition:"background 0.3s"}}/>)}
        </div>
        {steps[step]}
        {step>0&&<button onClick={()=>setStep(s=>s-1)} style={{...s.btnSm,marginTop:"1rem",background:"transparent",color:"rgba(255,255,255,0.35)"}}>← Back</button>}
      </div>
    </div>
  );
}

// ─── WORKOUT CALENDAR ────────────────────────────────────────────────────────
function WorkoutCalendar({completedDates,compact=false}){
  const now=new Date(),year=now.getFullYear(),month=now.getMonth();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const firstDay=new Date(year,month,1).getDay();
  const monthName=now.toLocaleDateString("en-AU",{month:"long",year:"numeric"});
  const todayDate=now.getDate();
  const doneSet=new Set(completedDates.map(d=>new Date(d).toDateString()));
  const cells=[];
  for(let i=0;i<firstDay;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++)cells.push(d);
  return(
    <div style={{...s.card,marginBottom:compact?"0":"0.75rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"}}>
        <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white}}>{monthName}</div>
        <div style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1.1rem"}}>{completedDates.length} <span style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em"}}>sessions</span></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"2px",marginBottom:"3px"}}>
        {["S","M","T","W","T","F","S"].map((d,i)=><div key={i} style={{textAlign:"center",fontSize:"0.55rem",fontWeight:800,color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow Condensed',sans-serif",paddingBottom:"2px"}}>{d}</div>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"2px"}}>
        {cells.map((d,i)=>{
          if(!d)return<div key={i}/>;
          const done=doneSet.has(new Date(year,month,d).toDateString());
          const isToday=d===todayDate;
          return(<div key={i} style={{aspectRatio:"1",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.6rem",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",background:done?"rgba(204,255,0,0.85)":isToday?"rgba(204,255,0,0.14)":"rgba(255,255,255,0.04)",color:done?"#000":isToday?C.lime:"rgba(255,255,255,0.3)",border:isToday&&!done?"1px solid rgba(204,255,0,0.35)":"none",transition:"all 0.2s"}}>{d}</div>);
        })}
      </div>
    </div>
  );
}

// ─── REST TIMER ──────────────────────────────────────────────────────────────
function RestTimer({seconds,onDone}){
  const[left,setLeft]=useState(seconds);
  useEffect(()=>{if(left<=0){onDone();return;}const t=setTimeout(()=>setLeft(l=>l-1),1000);return()=>clearTimeout(t);},[left]);
  const pct=(left/seconds)*100,r=54,circ=2*Math.PI*r;
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",backdropFilter:"blur(20px)",zIndex:300,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem"}}>
      <div style={{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow Condensed',sans-serif"}}>Rest Time</div>
      <div style={{position:"relative",width:"140px",height:"140px"}}>
        <svg width="140" height="140" viewBox="0 0 140 140" style={{transform:"rotate(-90deg)"}}>
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
          <circle cx="70" cy="70" r={r} fill="none" stroke={C.lime} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" style={{filter:"drop-shadow(0 0 8px rgba(204,255,0,0.5))"}}/>
        </svg>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <div style={{fontSize:"3rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,animation:left<=5?"pulse 1s infinite":"none"}}>{left}</div>
          <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>seconds</div>
        </div>
      </div>
      <button onClick={onDone} style={{...s.btnGlass,fontSize:"0.82rem",padding:"0.6rem 1.5rem"}}>Skip Rest</button>
    </div>
  );
}

function SetLogger({ex,setNum,onSave}){
  const[weight,setWeight]=useState("");
  const[reps,setReps]=useState(ex.reps.split("-")[0]||"8");
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",zIndex:299,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
      <div style={{...s.card,width:"100%",maxWidth:"360px",padding:"1.5rem"}}>
        <Eyebrow label={`Set ${setNum} Complete`}/>
        <div style={{fontSize:"1.3rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>{ex.name}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"1rem"}}>
          <div><label style={s.label}>Weight (kg)</label><input style={s.input} type="number" placeholder="e.g. 80" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
          <div><label style={s.label}>Reps done</label><input style={s.input} type="number" value={reps} onChange={e=>setReps(e.target.value)}/></div>
        </div>
        <button onClick={()=>onSave({weight:parseFloat(weight)||0,reps:parseInt(reps)||0})} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Save & Rest →</button>
      </div>
    </div>
  );
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({profile,user,onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const totalWorkouts=completedDates.length;
  const thisWeek=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=7).length;
  const streak=()=>{let s=0;for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))s++;else if(i>0)break;}return s;};
  const currentStreak=streak();
  const quote=QUOTES[new Date().getDay()%QUOTES.length];
  const hour=new Date().getHours();
  const greet=hour<12?"Good morning":hour<17?"Good afternoon":"Good evening";
  return(
    <div style={{...s.content,paddingBottom:"1rem"}}>
      {/* Greeting */}
      <div style={{marginBottom:"1.25rem"}}>
        <div style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif"}}>{greet}</div>
        <div style={{fontSize:"2.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.white,lineHeight:1}}>{profile?.name||"Athlete"} <span style={{color:C.lime}}>🔥</span></div>
      </div>

      {/* Stats row */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
        {[{n:totalWorkouts,l:"Workouts"},{n:thisWeek,l:"This Week"},{n:`${currentStreak}🔥`,l:"Streak"}].map((x,i)=>(
          <div key={i} style={s.statCard}>
            <div style={{...s.statNum,fontSize:"1.6rem"}}>{x.n}</div>
            <div style={s.statLabel}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* Quote card */}
      <div style={{...s.card,background:"rgba(204,255,0,0.06)",borderColor:"rgba(204,255,0,0.18)",marginBottom:"0.75rem"}}>
        <div style={{...s.eyebrow,marginBottom:"0.4rem"}}><span style={s.dot}/>Daily Motivation</div>
        <div style={{fontSize:"1rem",fontWeight:700,color:C.white,fontFamily:"'Barlow',sans-serif",lineHeight:1.5,fontStyle:"italic"}}>"{quote}"</div>
      </div>

      {/* Today's workout CTA */}
      <div onClick={()=>onNavigate("train")} style={{...s.cardLime,cursor:"pointer",position:"relative",overflow:"hidden",marginBottom:"0.75rem"}}>
        <div style={{position:"absolute",top:"-20px",right:"-20px",width:"90px",height:"90px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(18px)",pointerEvents:"none"}}/>
        <Eyebrow label={settings.split?`${(settings.split||"").replace("_"," ").toUpperCase()} · ${settings.level}`:"Set Up Programme"}/>
        <div style={{fontSize:"1.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1}}>
          {settings.split?"Today's Workout":"Start Training"}
        </div>
        <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.82rem",marginBottom:"1rem"}}>
          {settings.split?`${settings.wGoal||"Your programme"} · ${settings.days} days/week`:"Choose your split, level and goal to begin"}
        </div>
        <div style={{...s.btn,display:"inline-flex",padding:"0.65rem 1.2rem",fontSize:"0.85rem",borderRadius:"10px"}}>
          {settings.split?"Start Workout →":"Build Programme →"}
        </div>
      </div>

      {/* Quick actions */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.55rem",marginBottom:"0.75rem"}}>
        {[
          {label:"Meal Planner",desc:"Today's meals",icon:"🍽️",tab:"meal"},
          {label:"AI Coach",desc:"Ask anything",icon:"💬",tab:"coach"},
          {label:"Macro Tracker",desc:"Log food",icon:"📊",tab:"meal",sub:"macros"},
          {label:"Supplements",desc:"What to take",icon:"💊",sub:"supplements"},
        ].map((item,i)=>(
          <div key={i} onClick={()=>item.sub&&!item.tab?onNavigate("sidebar",item.sub):item.tab==="meal"&&item.sub?onNavigate("macros"):onNavigate(item.tab)} style={{...s.card,cursor:"pointer",padding:"0.9rem",marginBottom:0}}>
            <span style={{fontSize:"1.4rem",display:"block",marginBottom:"0.35rem"}}>{item.icon}</span>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.85rem",color:C.white,marginBottom:"0.1rem"}}>{item.label}</div>
            <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Calendar */}
      <WorkoutCalendar completedDates={completedDates}/>
    </div>
  );
}

// ─── TRAIN TAB ───────────────────────────────────────────────────────────────
function TrainScreen({onStartWorkout,onSetupComplete}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const[settings,setSettings]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");}catch{return{};}});
  const[setupStep,setSetupStep]=useState(0);
  const[split,setSplit]=useState(settings.split||"");
  const[days,setDays]=useState(settings.days||"");
  const[level,setLevel]=useState(settings.level||"");
  const[wGoal,setWGoal]=useState(settings.wGoal||"");

  function saveAndGo(goal){
    const newSettings={split,days,level,wGoal:goal};
    localStorage.setItem("fb_workout_settings",JSON.stringify(newSettings));
    setSettings(newSettings);
    if(onSetupComplete)onSetupComplete(newSettings);
  }

  // If no settings, show inline setup
  if(!settings.split){
    return(
      <div style={s.content}>
        <Eyebrow label="Training"/>
        <h2 style={s.sectionTitle}>Train</h2>
        <p style={s.sectionSub}>Set up your programme once. Train forever.</p>
        <div style={{display:"flex",gap:"4px",marginBottom:"1.5rem"}}>
          {[0,1,2,3].map(i=><div key={i} style={{flex:1,height:"3px",borderRadius:"2px",background:setupStep>i?C.lime:setupStep===i?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.1)",transition:"background 0.3s"}}/>)}
        </div>
        {setupStep===0&&(
          <div>
            <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Choose your training split</label>
            {[{k:"ppl",l:"Push / Pull / Legs",d:"3-6 days · Classic bodybuilding split",i:"⚡"},{k:"upper_lower",l:"Upper / Lower",d:"4 days · Best for strength & size",i:"💪"},{k:"muscle_group",l:"Muscle Group",d:"5 days · Dedicated focus per muscle",i:"🎯"},{k:"full_body",l:"Full Body / HIIT",d:"3 days · Fat loss & conditioning",i:"🔥"}].map(o=>(
              <div key={o.k} onClick={()=>{setSplit(o.k);setSetupStep(1);}} style={{...s.card,cursor:"pointer",border:`1px solid ${split===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:split===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
                <span style={{fontSize:"1.4rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,fontSize:"1rem"}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div><span style={{marginLeft:"auto",color:C.lime}}>→</span>
              </div>
            ))}
          </div>
        )}
        {setupStep===1&&(
          <div>
            <button onClick={()=>setSetupStep(0)} style={{...s.btnSm,marginBottom:"1rem",background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button>
            <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Days per week?</label>
            <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.75rem"}}>
              {[3,4,5,6].map(d=>(
                <button key={d} onClick={()=>{setDays(String(d));setSetupStep(2);}} style={{background:days===String(d)?C.lime:"rgba(255,255,255,0.06)",color:days===String(d)?"#000":C.white,border:`1px solid ${days===String(d)?C.lime:"rgba(255,255,255,0.12)"}`,borderRadius:"14px",padding:"1.25rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.4rem",cursor:"pointer"}}>
                  {d}<div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.1em",marginTop:"2px",opacity:0.7,textTransform:"uppercase"}}>Days/week</div>
                </button>
              ))}
            </div>
          </div>
        )}
        {setupStep===2&&(
          <div>
            <button onClick={()=>setSetupStep(1)} style={{...s.btnSm,marginBottom:"1rem",background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button>
            <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Experience level?</label>
            {[{k:"beginner",l:"Beginner",d:"Less than 1 year training",i:"🌱"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent",i:"⚡"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements",i:"🔥"}].map(o=>(
              <div key={o.k} onClick={()=>{setLevel(o.k);setSetupStep(3);}} style={{...s.card,cursor:"pointer",border:`1px solid ${level===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:level===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
                <span style={{fontSize:"1.4rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div><span style={{marginLeft:"auto",color:C.lime}}>→</span>
              </div>
            ))}
          </div>
        )}
        {setupStep===3&&(
          <div>
            <button onClick={()=>setSetupStep(2)} style={{...s.btnSm,marginBottom:"1rem",background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button>
            <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Primary goal?</label>
            {[{k:"muscle",l:"Muscle & Size",d:"Hypertrophy, moderate reps",i:"💪"},{k:"strength",l:"Strength",d:"Heavy compounds, low reps",i:"🏋️"},{k:"fat loss",l:"Fat Loss",d:"Higher reps, shorter rest",i:"🔥"},{k:"athletic",l:"Athletic Performance",d:"Power, speed & conditioning",i:"⚡"}].map(o=>(
              <div key={o.k} onClick={()=>{setWGoal(o.k);saveAndGo(o.k);}} style={{...s.card,cursor:"pointer",border:`1px solid ${wGoal===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:wGoal===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
                <span style={{fontSize:"1.4rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div><span style={{marginLeft:"auto",color:C.lime}}>→</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  const splitData=SPLITS[settings.split];
  const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k.includes(settings.days||"4"))||Object.keys(splitData).filter(k=>k!=="name")[0];
  const template=splitData[daysKey];
  const todayIdx=new Date().getDay()%template.length;

  return(
    <div style={s.content}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem"}}>
        <Eyebrow label="Training"/>
        <button onClick={()=>{localStorage.removeItem("fb_workout_settings");setSettings({});setSetupStep(0);setSplit("");setDays("");setLevel("");setWGoal("");}} style={{...s.btnSm,background:"transparent",color:"rgba(255,255,255,0.35)"}}>Change →</button>
      </div>
      <h2 style={s.sectionTitle}>Train</h2>
      <div style={{...s.cardLime,position:"relative",overflow:"hidden",marginBottom:"0.75rem"}}>
        <div style={{position:"absolute",top:"-15px",right:"-15px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(15px)",pointerEvents:"none"}}/>
        <Eyebrow label="Today"/>
        <div style={{fontSize:"1.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1}}>{template[todayIdx].label}</div>
        <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"}}>{template[todayIdx].muscles.map(m=><span key={m} style={s.tag}>{m}</span>)}</div>
        <button onClick={()=>onStartWorkout(todayIdx)} style={{...s.btn,padding:"0.85rem 1.5rem"}}>Start Today's Workout →</button>
      </div>
      <div style={{...s.label,marginBottom:"0.6rem"}}>This Week's Programme</div>
      {template.map((day,i)=>(
        <div key={i} onClick={()=>onStartWorkout(i)} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem",cursor:"pointer",border:i===todayIdx?"1px solid rgba(204,255,0,0.3)":s.card.border,background:i===todayIdx?"rgba(204,255,0,0.06)":s.card.background}}>
          <div style={{width:"32px",height:"32px",borderRadius:"8px",background:i===todayIdx?"rgba(204,255,0,0.15)":"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <span style={{fontWeight:900,fontSize:"0.85rem",color:i===todayIdx?C.lime:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif"}}>{i+1}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{fontWeight:900,fontSize:"0.92rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{day.label}</div>
            <div style={{display:"flex",gap:"0.3rem",marginTop:"0.2rem",flexWrap:"wrap"}}>{day.muscles.slice(0,3).map(m=><span key={m} style={s.tagGray}>{m}</span>)}</div>
          </div>
          {i===todayIdx&&<span style={s.tag}>Today</span>}
        </div>
      ))}
      <WorkoutCalendar completedDates={completedDates}/>
    </div>
  );
}

// ─── WORKOUT SESSION ─────────────────────────────────────────────────────────
function WorkoutSession({dayIndex,onDone}){
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const splitData=SPLITS[settings.split||"ppl"];
  const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k.includes(settings.days||"4"))||Object.keys(splitData).filter(k=>k!=="name")[0];
  const template=splitData[daysKey];
  const dayIdx=dayIndex!==undefined?dayIndex:new Date().getDay()%template.length;
  const day=template[dayIdx];
  const level=settings.level||"intermediate";

  const exercises=day.muscles.reduce((acc,muscle)=>{
    const pool=EXERCISES[muscle]||[];
    const count=settings.wGoal==="strength"?3:4;
    pool.slice(0,count).forEach(ex=>{
      acc.push({...ex,muscle,sets:level==="beginner"?String(Math.max(2,parseInt(ex.sets)-1)):level==="advanced"?String(parseInt(ex.sets)+1):ex.sets});
    });
    return acc;
  },[]);

  const[mode,setMode]=useState("overview");
  const[exIdx,setExIdx]=useState(0);
  const[completedSets,setCompletedSets]=useState({});
  const[setLogs,setSetLogs]=useState({});
  const[showTimer,setShowTimer]=useState(false);
  const[showLogger,setShowLogger]=useState(false);
  const[timerSecs,setTimerSecs]=useState(60);
  const[pendingKey,setPendingKey]=useState(null);
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");

  function getRest(r){if(!r)return 60;const m=r.match(/(\d+)\s*min/),sec=r.match(/(\d+)\s*sec/);return m?parseInt(m[1])*60:sec?parseInt(sec[1]):60;}

  function completeSet(eI,sI){setPendingKey(`${eI}-${sI}`);setShowLogger(true);}

  function saveLog(data){
    const k=pendingKey;
    setCompletedSets(p=>({...p,[k]:true}));
    setSetLogs(p=>({...p,[k]:data}));
    setShowLogger(false);
    const[eI]=k.split("-").map(Number);
    setTimerSecs(getRest(exercises[eI].rest));
    setShowTimer(true);
  }

  async function finishWorkout(){
    const dates=[...completedDates,new Date().toISOString()];
    localStorage.setItem("fb_workout_dates",JSON.stringify(dates));
    try{
      const{data:{user}}=await supabase.auth.getUser();
      if(user)await supabase.from("workout_history").insert({user_id:user.id,day_label:day.label,split:splitData.name,exercises:exercises.length,sets_completed:Object.keys(completedSets).length});
    }catch(e){}
    setMode("done");
  }

  if(mode==="overview"){
    return(
      <div style={s.content}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
          <button onClick={onDone} style={s.btnSm}>← Back</button>
          <Eyebrow label={splitData.name}/>
        </div>
        <div style={{...s.cardLime,position:"relative",overflow:"hidden",marginBottom:"1rem"}}>
          <div style={{position:"absolute",top:"-15px",right:"-15px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(15px)",pointerEvents:"none"}}/>
          <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.5rem",lineHeight:1}}>{day.label}</div>
          <div style={{display:"flex",gap:"1.25rem",marginBottom:"0.75rem"}}>
            {[{n:exercises.length,l:"Exercises"},{n:exercises.reduce((a,e)=>a+parseInt(e.sets||3),0),l:"Sets"},{n:`~${Math.round(exercises.length*4.5)}m`,l:"Est"}].map((x,i)=>(
              <div key={i}><div style={{fontSize:"1.6rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div><div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div></div>
            ))}
          </div>
          <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"}}>{[...new Set(exercises.map(e=>e.muscle))].map(m=><span key={m} style={s.tag}>{m}</span>)}</div>
          <button onClick={()=>setMode("exercise")} style={{...s.btn,width:"100%",padding:"0.9rem",borderRadius:"12px"}}>Start Workout →</button>
        </div>
        <div style={s.label}>Exercise Overview</div>
        {exercises.map((ex,i)=>(
          <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
            <div style={{width:"30px",height:"30px",borderRadius:"8px",background:"rgba(204,255,0,0.1)",border:"1px solid rgba(204,255,0,0.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontWeight:900,fontSize:"0.82rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{i+1}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:900,fontSize:"0.9rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{ex.name}</div>
              <div style={{display:"flex",gap:"0.3rem",marginTop:"0.2rem"}}><span style={s.tag}>{ex.muscle}</span><span style={s.tagGray}>{ex.sets}×{ex.reps}</span></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if(mode==="exercise"){
    const ex=exercises[exIdx];
    const totalSets=parseInt(ex.sets)||3;
    const completedCount=Array.from({length:totalSets},(_,i)=>completedSets[`${exIdx}-${i}`]).filter(Boolean).length;
    const allDone=completedCount===totalSets;
    const isLast=exIdx===exercises.length-1;
    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",paddingBottom:"80px",position:"relative"}}>
        <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 5%,rgba(204,255,0,0.09) 0%,transparent 55%)",pointerEvents:"none",zIndex:0}}/>
        {showLogger&&<SetLogger ex={ex} setNum={completedCount+1} onSave={saveLog}/>}
        {showTimer&&<RestTimer seconds={timerSecs} onDone={()=>{setShowTimer(false);if(!isLast)setExIdx(i=>i+1);else finishWorkout();}}/>}
        <div style={{height:"3px",background:"rgba(255,255,255,0.07)",position:"sticky",top:0,zIndex:50}}>
          <div style={{height:"100%",background:C.lime,width:`${(exIdx/exercises.length)*100}%`,transition:"width 0.4s ease",boxShadow:"0 0 8px rgba(204,255,0,0.5)"}}/>
        </div>
        <div style={{padding:"1rem 1.25rem",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"}}>
            <button onClick={()=>setMode("overview")} style={s.btnSm}>← Overview</button>
            <span style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.1em"}}>{exIdx+1} / {exercises.length}</span>
          </div>
          {/* Animated gradient border */}
          <div style={{position:"relative",borderRadius:"20px",padding:"2px",background:"linear-gradient(135deg,#CCFF00,#88ff00,#CCFF00,#aaee00)",backgroundSize:"300% 300%",animation:"gradSpin 3s ease infinite",marginBottom:"1.25rem",boxShadow:"0 0 24px rgba(204,255,0,0.12)"}}>
            <div style={{background:"rgba(8,8,8,0.97)",borderRadius:"18px",padding:"1.5rem",animation:"fadeUp 0.3s ease",backdropFilter:"blur(20px)"}}>
              <Eyebrow label={ex.muscle}/>
              <div style={{fontSize:"1.9rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",lineHeight:1.05,marginBottom:"1rem",color:C.white}}>{ex.name}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.65rem",marginBottom:"1.1rem"}}>
                {[{l:"Sets",v:ex.sets},{l:"Reps",v:ex.reps},{l:"Rest",v:ex.rest}].map((x,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,0.05)",borderRadius:"10px",padding:"0.7rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.07)"}}>
                    <div style={{fontSize:"1.1rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.v}</div>
                    <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",marginTop:"3px",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"rgba(204,255,0,0.05)",borderRadius:"10px",padding:"0.8rem",borderLeft:`3px solid ${C.lime}`}}>
                <div style={{fontSize:"0.6rem",color:C.lime,fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>Coaching Cue</div>
                <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>{ex.cue}</div>
              </div>
            </div>
          </div>
          {/* Set tracker - one at a time */}
          <div style={s.card}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
              <div style={{...s.label,marginBottom:0,color:C.white}}>Set {Math.min(completedCount+1,totalSets)} of {totalSets}</div>
              <div style={{display:"flex",gap:"3px"}}>{Array.from({length:totalSets},(_,i)=><div key={i} style={{width:"22px",height:"3px",borderRadius:"2px",background:i<completedCount?C.lime:i===completedCount?"rgba(204,255,0,0.35)":"rgba(255,255,255,0.08)",transition:"background 0.3s"}}/>)}</div>
            </div>
            {!allDone?(
              <button onClick={()=>completeSet(exIdx,completedCount)} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"1.1rem",borderRadius:"14px",border:"1.5px solid rgba(204,255,0,0.35)",background:"rgba(204,255,0,0.05)",cursor:"pointer",width:"100%"}}>
                <div style={{width:"38px",height:"38px",borderRadius:"50%",border:"2px solid rgba(204,255,0,0.45)",background:"rgba(204,255,0,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <span style={{fontWeight:900,fontSize:"1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{completedCount+1}</span>
                </div>
                <div style={{flex:1,textAlign:"left"}}>
                  <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.95rem",textTransform:"uppercase",letterSpacing:"0.05em",color:C.white}}>Complete Set {completedCount+1}</div>
                  <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem",fontFamily:"'Barlow',sans-serif",marginTop:"2px"}}>{ex.reps} reps · tap when done</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </button>
            ):(
              <div style={{textAlign:"center",padding:"0.85rem",color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>All {totalSets} sets done! 🔥</div>
            )}
            {completedCount>0&&(
              <div style={{marginTop:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:"0.75rem"}}>
                <div style={{...s.label,marginBottom:"0.4rem"}}>Completed</div>
                {Array.from({length:completedCount},(_,i)=>{
                  const lg=setLogs[`${exIdx}-${i}`];
                  return(<div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.3rem 0"}}>
                    <div style={{width:"18px",height:"18px",borderRadius:"50%",background:C.lime,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <svg width="9" height="9" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.8rem",textTransform:"uppercase",color:C.lime}}>Set {i+1}</span>
                    {lg?.weight?<span style={{marginLeft:"auto",color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{lg.weight}kg × {lg.reps}</span>:null}
                  </div>);
                })}
              </div>
            )}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.7rem",marginTop:"0.5rem"}}>
            <button onClick={()=>exIdx>0&&setExIdx(i=>i-1)} disabled={exIdx===0} style={{...s.btnGlass,opacity:exIdx===0?0.3:1,padding:"0.85rem"}}>← Prev</button>
            <button onClick={()=>{if(isLast)finishWorkout();else{setTimerSecs(getRest(ex.rest));setShowTimer(true);}}} style={{...s.btn,padding:"0.85rem"}}>{isLast?"Finish 🔥":"Next →"}</button>
          </div>
        </div>
      </div>
    );
  }

  if(mode==="done"){
    return(
      <div style={{...s.content,textAlign:"center",paddingTop:"3rem"}}>
        <div style={{fontSize:"4rem",marginBottom:"1rem"}}>🔥</div>
        <div style={{fontSize:"2.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.lime,marginBottom:"0.5rem"}}>Workout Done!</div>
        <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",marginBottom:"2rem"}}>Every rep counts. You just built a better body.</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"1.5rem"}}>
          {[{n:exercises.length,l:"Exercises"},{n:Object.keys(completedSets).length,l:"Sets Done"},{n:"100%",l:"Complete"}].map((x,i)=>(
            <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
          ))}
        </div>
        <WorkoutCalendar completedDates={JSON.parse(localStorage.getItem("fb_workout_dates")||"[]")}/>
        <button onClick={onDone} style={{...s.btn,width:"100%",padding:"1rem",marginTop:"0.5rem"}}>Back to Training</button>
      </div>
    );
  }
}

// ─── MEAL PLANNER ────────────────────────────────────────────────────────────
const MEAL_DETAILS={
  1:{ingredients:["3 large eggs","2 slices sourdough bread","1 tbsp butter","Salt & pepper","Optional: chives"],prep:"Crack eggs into bowl, whisk. Heat butter in pan over medium heat. Add eggs, stir gently until just set. Toast sourdough. Serve eggs on toast, season well.",time:"8 min"},
  2:{ingredients:["200g Greek yogurt (full fat)","1 tbsp honey","30g granola","50g mixed berries","1 tsp chia seeds"],prep:"Spoon yogurt into bowl. Layer with granola and berries. Drizzle with honey and top with chia seeds. Eat immediately to keep crunch.",time:"5 min"},
  3:{ingredients:["80g rolled oats","250ml milk or water","1 ripe banana","2 tbsp peanut butter","1 tsp cinnamon","1 tsp honey"],prep:"Cook oats in milk/water on stovetop or microwave 2-3 min. Slice banana on top. Add peanut butter and drizzle honey. Sprinkle cinnamon.",time:"5 min"},
  4:{ingredients:["1 scoop whey protein","200ml milk","1 banana","1 tbsp almond butter","Handful of ice","Optional: 1 tbsp oats"],prep:"Add all ingredients to blender. Blend on high 30-45 seconds until smooth. Drink immediately or store in fridge up to 2 hours.",time:"3 min"},
  5:{ingredients:["2 slices sourdough","1 ripe avocado","2 eggs","Lemon juice","Red chilli flakes","Salt & pepper"],prep:"Toast bread. Poach eggs 3-4 min in simmering water with splash of vinegar. Mash avocado with lemon, salt, chilli. Spread on toast, top with poached eggs.",time:"12 min"},
  6:{ingredients:["200g low-fat cottage cheese","100g mixed berries","1 tsp honey","Optional: mint leaves"],prep:"Spoon cottage cheese into bowl. Top with berries. Drizzle honey. Eat immediately. High protein, low calorie — great for fat loss.",time:"3 min"},
  7:{ingredients:["2 eggs","1 scoop protein powder","50ml milk","1 tsp vanilla","Cooking spray","Maple syrup"],prep:"Blend eggs, protein powder, milk and vanilla. Cook like regular pancakes on medium heat 2-3 min each side. Stack and drizzle with maple syrup.",time:"15 min"},
  8:{ingredients:["80g rolled oats","200ml milk","1 tbsp chia seeds","1 tsp honey","50g mixed berries","1 tbsp almond butter"],prep:"Mix oats, chia, milk and honey in jar. Refrigerate overnight (min 4 hours). In morning, top with berries and almond butter. No cooking needed.",time:"5 min (night before)"},
  16:{ingredients:["200g chicken breast","Mixed salad leaves","1 tomato","1/2 cucumber","1/4 red onion","Olive oil","Lemon juice","Salt & pepper"],prep:"Season chicken with salt, pepper, garlic powder. Grill or pan-fry 6-7 min each side until cooked through. Slice and serve over salad with olive oil and lemon dressing.",time:"20 min"},
  17:{ingredients:["1 can tuna in water","150g cooked brown rice","1/2 avocado","Soy sauce","Sesame seeds","Spring onions","Sriracha (optional)"],prep:"Cook rice per packet instructions. Drain tuna. Build bowl: rice base, tuna, sliced avocado. Drizzle soy sauce and sriracha. Top with sesame seeds and spring onions.",time:"15 min"},
  20:{ingredients:["200g chicken breast","150g sweet potato","1 tbsp olive oil","Paprika, garlic powder","Salt & pepper","Broccoli (optional)"],prep:"Dice sweet potato, toss in olive oil and seasoning, roast at 200°C for 25 min. Season chicken, pan-fry 6-7 min each side. Serve together with steamed broccoli.",time:"35 min"},
  33:{ingredients:["200g salmon fillet","1 bunch asparagus","1 tbsp olive oil","Lemon","Garlic","Salt & pepper"],prep:"Preheat oven 200°C. Place salmon and asparagus on baking tray. Drizzle olive oil, add crushed garlic, season. Bake 15-18 min until salmon flakes. Squeeze lemon to finish.",time:"20 min"},
  35:{ingredients:["150g lean beef mince","100g pasta","1 tin crushed tomatoes","1 onion","2 garlic cloves","Italian herbs","Parmesan"],prep:"Cook pasta. Fry onion and garlic, add mince until browned. Add tomatoes and herbs, simmer 15 min. Toss with pasta. Top with parmesan.",time:"30 min"},
};

function getDefaultPrep(meal){
  const preps={
    breakfast:`Prepare ingredients fresh. Aim to eat within 30 minutes of waking for best energy levels.`,
    lunch:`Meal prep tip: prepare in bulk on Sunday for the week. Store in airtight containers in the fridge up to 4 days.`,
    dinner:`Allow ingredients to reach room temperature before cooking for more even results. Season throughout cooking, not just at the end.`,
    snack:`Keep pre-portioned and ready to grab. This prevents overeating and makes hitting your macros easier.`,
  };
  return preps[meal.meal]||"Prepare fresh and enjoy.";
}

function MealPlanner(){
  const profile=JSON.parse(localStorage.getItem("fb_profile")||"{}");
  const[diet,setDiet]=useState(profile.diet||"standard");
  const[targetCal,setTargetCal]=useState(2200);
  const[numMeals,setNumMeals]=useState(4);
  const[plan,setPlan]=useState(null);
  const[expandedMeal,setExpandedMeal]=useState(null);

  function buildPlan(){
    const slots=numMeals===2?["breakfast","dinner"]:numMeals===3?["breakfast","lunch","dinner"]:numMeals===4?["breakfast","lunch","dinner","snack"]:numMeals===5?["breakfast","lunch","dinner","snack","snack"]:["breakfast","lunch","dinner","snack","snack","snack"];
    const counts={};slots.forEach(m=>counts[m]=(counts[m]||0)+1);
    const result=[];let tCal=0,tP=0,tC=0,tF=0;
    for(const[slot,count] of Object.entries(counts)){
      const pool=MEALS.filter(m=>m.meal===slot&&m.diet.includes(diet));
      const shuffled=[...pool].sort(()=>Math.random()-0.5);
      for(let i=0;i<count;i++){
        const meal=shuffled[i%Math.max(1,shuffled.length)];
        if(meal){result.push({...meal,slotLabel:slot==="snack"&&count>1?`Snack ${i+1}`:`${slot.charAt(0).toUpperCase()+slot.slice(1)}`});tCal+=meal.cal;tP+=meal.p;tC+=meal.c;tF+=meal.f;}
      }
    }
    setPlan({meals:result,total:{cal:tCal,p:tP,c:tC,f:tF}});
    setExpandedMeal(null);
  }

  return(
    <div style={s.content}>
      <Eyebrow label="58+ Meals"/><h2 style={s.sectionTitle}>Meal Planner</h2><p style={s.sectionSub}>Personalised meals with full ingredients and instructions.</p>
      <div style={s.card}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
          <div><label style={s.label}>Target calories</label><input style={s.input} type="number" value={targetCal} onChange={e=>setTargetCal(+e.target.value)}/></div>
          <div><label style={s.label}>Meals per day</label><select style={s.select} value={numMeals} onChange={e=>setNumMeals(+e.target.value)}>{[2,3,4,5,6].map(n=><option key={n} value={n}>{n} meals</option>)}</select></div>
          <div style={{gridColumn:"span 2"}}><label style={s.label}>Diet</label><select style={s.select} value={diet} onChange={e=>setDiet(e.target.value)}>{["standard","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d=><option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}</select></div>
        </div>
        <button onClick={buildPlan} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Build My Meal Plan</button>
      </div>

      {plan&&(
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.45rem",marginBottom:"0.75rem"}}>
            {[{l:"Kcal",v:plan.total.cal},{l:"Protein",v:`${plan.total.p}g`},{l:"Carbs",v:`${plan.total.c}g`},{l:"Fat",v:`${plan.total.f}g`}].map((x,i)=>(
              <div key={i} style={s.statCard}><div style={{...s.statNum,fontSize:"1.2rem"}}>{x.v}</div><div style={s.statLabel}>{x.l}</div></div>
            ))}
          </div>

          {plan.meals.map((meal,i)=>{
            const details=MEAL_DETAILS[meal.id];
            const isOpen=expandedMeal===i;
            return(
              <div key={i} style={{...s.card,marginBottom:"0.6rem"}}>
                <div onClick={()=>setExpandedMeal(isOpen?null:i)} style={{cursor:"pointer"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.4rem"}}>
                    <div style={{flex:1,marginRight:"0.5rem"}}>
                      <Eyebrow label={meal.slotLabel}/>
                      <div style={{fontWeight:900,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,lineHeight:1.15}}>{meal.name}</div>
                    </div>
                    <div style={{textAlign:"right",flexShrink:0}}>
                      <div style={{color:C.lime,fontWeight:900,fontSize:"1.1rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{meal.cal}</div>
                      <div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.55rem",fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.08em"}}>KCAL</div>
                    </div>
                  </div>
                  <div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap",marginBottom:"0.35rem"}}>
                    <span style={s.tagGray}>P {meal.p}g</span><span style={s.tagGray}>C {meal.c}g</span><span style={s.tagGray}>F {meal.f}g</span>
                    {details?.time&&<span style={{...s.tagGray}}>⏱ {details.time}</span>}
                  </div>
                  <MacroBar p={meal.p} c={meal.c} f={meal.f}/>
                  <div style={{color:C.lime,fontSize:"0.7rem",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.08em",marginTop:"0.5rem",textAlign:"right"}}>{isOpen?"▲ Hide":"▼ Ingredients & Instructions"}</div>
                </div>

                {isOpen&&(
                  <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"0.75rem",paddingTop:"0.75rem",animation:"fadeUp 0.2s ease"}}>
                    {details?(
                      <>
                        <div style={{marginBottom:"0.75rem"}}>
                          <div style={{...s.label,color:C.lime,marginBottom:"0.5rem"}}>🛒 Ingredients</div>
                          {details.ingredients.map((ing,j)=>(
                            <div key={j} style={{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.35rem 0",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
                              <div style={{width:"6px",height:"6px",borderRadius:"50%",background:C.lime,flexShrink:0}}/>
                              <span style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.7)"}}>{ing}</span>
                            </div>
                          ))}
                        </div>
                        <div>
                          <div style={{...s.label,color:C.lime,marginBottom:"0.5rem"}}>👨‍🍳 How to Make</div>
                          <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",lineHeight:1.65}}>{details.prep}</div>
                        </div>
                      </>
                    ):(
                      <div>
                        <div style={{...s.label,color:C.lime,marginBottom:"0.5rem"}}>💡 Prep Note</div>
                        <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",lineHeight:1.65}}>{getDefaultPrep(meal)}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{...s.card,background:"rgba(204,255,0,0.05)",borderColor:"rgba(204,255,0,0.15)"}}>
            <div style={{...s.label,color:C.lime,marginBottom:"0.35rem"}}>🛒 Full Shopping List</div>
            <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",lineHeight:1.6}}>
              {plan.meals.map(m=>MEAL_DETAILS[m.id]?.ingredients).filter(Boolean).flat().filter((v,i,a)=>a.indexOf(v)===i).join(" · ")||"Tap each meal above to see its ingredients."}
            </div>
          </div>

          <button onClick={buildPlan} style={{...s.btnGlass,width:"100%",marginTop:"0.25rem"}}>Regenerate Plan</button>
        </>
      )}
    </div>
  );
}

// ─── MACRO TRACKER ───────────────────────────────────────────────────────────
function MacroTracker(){
  const[target,setTarget]=useState({cal:2200,p:180,c:220,f:70});
  const[log,setLog]=useState([]);const[search,setSearch]=useState("");const[qty,setQty]=useState("100");const[showSetup,setShowSetup]=useState(false);
  const filtered=search.length>1?FOODS.filter(f=>f.name.toLowerCase().includes(search.toLowerCase())):[];
  const totals=log.reduce((acc,item)=>({cal:acc.cal+item.cal,p:acc.p+item.p,c:acc.c+item.c,f:acc.f+item.f}),{cal:0,p:0,c:0,f:0});
  function addFood(food){const mult=parseFloat(qty)/100;setLog(prev=>[...prev,{...food,cal:Math.round(food.cal*mult),p:Math.round(food.p*mult),c:Math.round(food.c*mult),f:Math.round(food.f*mult),qty,id:Date.now()}]);setSearch("");setQty("100");}
  function Ring({val,max,color,label}){
    const pct=Math.min(100,Math.round((val/max)*100));const r=26,circ=2*Math.PI*r;
    return(<div style={{textAlign:"center"}}><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4"/><circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" transform="rotate(-90 32 32)"/><text x="32" y="36" textAnchor="middle" fill={C.white} fontSize="11" fontWeight="900" fontFamily="'Barlow Condensed',sans-serif">{val}g</text></svg><div style={{fontSize:"0.58rem",fontWeight:800,textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>{label}</div><div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif"}}>{pct}%</div></div>);
  }
  return(
    <div style={s.content}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.25rem"}}>
        <div><Eyebrow label="Daily Tracking"/><h2 style={s.sectionTitle}>Macros</h2></div>
        <button onClick={()=>setShowSetup(!showSetup)} style={{...s.btnSm,marginTop:"0.5rem"}}>Targets</button>
      </div>
      <p style={s.sectionSub}>Log your food, hit your macros.</p>
      {showSetup&&(
        <div style={s.card}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
            {[{k:"cal",l:"Calories"},{k:"p",l:"Protein (g)"},{k:"c",l:"Carbs (g)"},{k:"f",l:"Fat (g)"}].map(({k,l})=>(
              <div key={k}><label style={s.label}>{l}</label><input style={s.input} type="number" value={target[k]} onChange={e=>setTarget(t=>({...t,[k]:+e.target.value}))}/></div>
            ))}
          </div>
          <button onClick={()=>setShowSetup(false)} style={{...s.btn,width:"100%"}}>Save</button>
        </div>
      )}
      <div style={s.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <div><div style={{...s.statNum,fontSize:"2rem"}}>{totals.cal}<span style={{fontSize:"0.9rem",color:"rgba(255,255,255,0.3)",fontWeight:400}}> / {target.cal}</span></div><div style={s.statLabel}>Calories today</div></div>
          <div style={{textAlign:"right"}}><div style={{color:target.cal-totals.cal>0?C.lime:"#f97316",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1.2rem"}}>{target.cal-totals.cal>0?`${target.cal-totals.cal} left`:"Over!"}</div><div style={s.statLabel}>Remaining</div></div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}><Ring val={totals.p} max={target.p} color="#4ade80" label="Protein"/><Ring val={totals.c} max={target.c} color="#60a5fa" label="Carbs"/><Ring val={totals.f} max={target.f} color="#f97316" label="Fat"/></div>
      </div>
      <div style={s.card}>
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.6rem"}}>
          <input style={{...s.input,marginBottom:0,flex:1}} placeholder="Search food..." value={search} onChange={e=>setSearch(e.target.value)}/>
          <input style={{...s.input,marginBottom:0,width:"65px"}} type="number" value={qty} onChange={e=>setQty(e.target.value)} placeholder="100"/>
        </div>
        {filtered.length>0&&(
          <div style={{background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",overflow:"hidden",marginBottom:"0.5rem"}}>
            {filtered.slice(0,5).map((food,i)=>(
              <div key={i} onClick={()=>addFood(food)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.6rem 0.9rem",borderBottom:i<Math.min(filtered.length,5)-1?"1px solid rgba(255,255,255,0.06)":"none",cursor:"pointer"}}>
                <div><div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",color:C.white,fontWeight:600}}>{food.name}</div><div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{food.cal} kcal · P{food.p}g C{food.c}g F{food.f}g</div></div>
                <span style={{color:C.lime,fontSize:"1.2rem",marginLeft:"0.5rem"}}>+</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {log.length>0&&(
        <div style={s.card}>
          <label style={{...s.label,marginBottom:"0.6rem"}}>Today's log</label>
          {log.map((item,i)=>(
            <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.45rem 0",borderBottom:i<log.length-1?"1px solid rgba(255,255,255,0.05)":""}}>
              <div><div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",fontWeight:600,color:C.white}}>{item.name}</div><div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{item.qty}g · P{item.p} C{item.c} F{item.f}</div></div>
              <div style={{display:"flex",alignItems:"center",gap:"0.6rem"}}><span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{item.cal}</span><button onClick={()=>setLog(prev=>prev.filter(x=>x.id!==item.id))} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:"1rem",padding:0}}>×</button></div>
            </div>
          ))}
          <button onClick={()=>setLog([])} style={{...s.btnGlass,width:"100%",marginTop:"0.75rem",fontSize:"0.78rem",padding:"0.5rem"}}>Clear Log</button>
        </div>
      )}
    </div>
  );
}

// ─── AI COACH ────────────────────────────────────────────────────────────────
function AICoach(){
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const userContext=settings.split?`User: Goal=${settings.wGoal}, Split=${settings.split}, Level=${settings.level}, Days/week=${settings.days}, Workouts done=${completedDates.length}.`:"New user, no programme set yet.";
  const SYSTEM=`You are ForgeBody AI — an expert personal fitness coach. Be direct, motivating and practical. ${userContext} Specialise in: strength training, hypertrophy, fat loss, nutrition, macros, supplements, recovery, mindset. Use bullet points for 3+ items. Give specific numbers. Reference user's goal when relevant. Never recommend anything dangerous. For injuries, recommend seeing a doctor.`;
  const[messages,setMessages]=useState([{role:"assistant",text:`Hey! I'm your ForgeBody AI coach 🔥\n\n${settings.wGoal?`I can see you're training for ${settings.wGoal} on a ${(settings.split||"").replace("_"," ")} split. `:""}Ask me anything about training, nutrition, recovery or mindset.`}]);
  const[input,setInput]=useState("");
  const[loading,setLoading]=useState(false);
  const[cat,setCat]=useState("training");
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages,loading]);

  const CATS={
    training:["What should I focus on today?","Best exercises for chest?","How do I build bigger arms?","How do I improve my squat?","What is progressive overload?"],
    nutrition:["How much protein do I need?","What should I eat before training?","Best foods for muscle growth?","Should I eat carbs at night?","How do I calculate my calories?"],
    recovery:["How sore is too sore?","Should I train every day?","How important is sleep for gains?","What is a deload week?","How do I prevent injury?"],
    mindset:["How do I stay consistent?","I missed a week — what now?","How do I beat a plateau?","How long until I see results?","How do I stay motivated?"],
  };

  async function send(text){
    const msg=text||input.trim();
    if(!msg||loading)return;
    const userMsg={role:"user",text:msg};
    const newMsgs=[...messages,userMsg];
    setMessages(newMsgs);setInput("");setLoading(true);
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:SYSTEM,messages:newMsgs.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}))})});
      const data=await res.json();
      setMessages(prev=>[...prev,{role:"assistant",text:data.content?.[0]?.text||"Sorry, try again."}]);
    }catch{setMessages(prev=>[...prev,{role:"assistant",text:"Connection error. Please try again."}]);}
    setLoading(false);
  }

  return(
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 140px)"}}>
      <div style={{...s.content,paddingBottom:"0.5rem",flexShrink:0}}><Eyebrow label="AI Powered"/><h2 style={{...s.sectionTitle,marginBottom:0}}>Your Coach</h2></div>
      <div style={{flex:1,overflowY:"auto",padding:"0 1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",alignItems:"flex-end",gap:"7px"}}>
            {m.role==="assistant"&&<div style={{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(204,255,0,0.15)",border:"1px solid rgba(204,255,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:C.lime,fontWeight:900,fontSize:"0.58rem",fontFamily:"'Barlow Condensed',sans-serif"}}>FB</span></div>}
            <div style={{maxWidth:"82%",background:m.role==="user"?C.lime:s.card.background,color:m.role==="user"?"#000":C.white,borderRadius:m.role==="user"?"14px 14px 2px 14px":"14px 14px 14px 2px",padding:"0.75rem 0.95rem",fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.55,border:m.role==="assistant"?"1px solid rgba(255,255,255,0.1)":"none",whiteSpace:"pre-wrap",backdropFilter:m.role==="assistant"?"blur(10px)":"none",WebkitBackdropFilter:m.role==="assistant"?"blur(10px)":"none"}}>{m.text}</div>
          </div>
        ))}
        {loading&&(
          <div style={{display:"flex",alignItems:"center",gap:"7px"}}>
            <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(204,255,0,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:C.lime,fontWeight:900,fontSize:"0.58rem",fontFamily:"'Barlow Condensed',sans-serif"}}>FB</span></div>
            <div style={{...s.card,padding:"0.7rem 1rem"}}>{[0,1,2].map(i=><span key={i} style={{...s.loadingDot,width:"6px",height:"6px",animationDelay:`${i*0.16}s`}}/>)}</div>
          </div>
        )}
        {messages.length<=1&&!loading&&(
          <div style={{marginTop:"0.25rem"}}>
            <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"0.75rem",paddingBottom:"2px"}}>
              {Object.keys(CATS).map(c=><button key={c} onClick={()=>setCat(c)} style={{...s.btnSm,flexShrink:0,background:cat===c?C.lime:"rgba(255,255,255,0.07)",color:cat===c?"#000":"rgba(255,255,255,0.5)",border:"none",textTransform:"capitalize",fontSize:"0.7rem",padding:"0.35rem 0.8rem"}}>{c}</button>)}
            </div>
            {CATS[cat].map((q,i)=><button key={i} onClick={()=>send(q)} style={{display:"block",width:"100%",textAlign:"left",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"0.7rem 0.95rem",color:"rgba(255,255,255,0.65)",fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",cursor:"pointer",marginBottom:"0.4rem",lineHeight:1.4}}>{q}</button>)}
          </div>
        )}
        <div ref={bottomRef}/>
      </div>
      <div style={{padding:"0.75rem 1.25rem 0.5rem",borderTop:"1px solid rgba(255,255,255,0.08)",background:"rgba(0,0,0,0.5)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",flexShrink:0}}>
        <div style={{display:"flex",gap:"0.5rem",alignItems:"flex-end"}}>
          <textarea style={{...s.input,marginBottom:0,flex:1,resize:"none",minHeight:"44px",maxHeight:"120px",lineHeight:1.4,padding:"0.6rem 0.9rem",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}} placeholder="Ask your coach anything..." value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} rows={1}/>
          <button onClick={()=>send()} disabled={loading||!input.trim()} style={{...s.btn,padding:"0.6rem 1rem",flexShrink:0,opacity:loading||!input.trim()?0.5:1}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
function Progress({user}){
  const[entries,setEntries]=useState([]);const[loading,setLoading]=useState(true);
  const[weight,setWeight]=useState("");const[calories,setCalories]=useState("");const[workouts,setWorkouts]=useState("");const[saving,setSaving]=useState(false);
  useEffect(()=>{
    fetchEntries();
    const ch=supabase.channel("progress").on("postgres_changes",{event:"*",schema:"public",table:"progress_entries",filter:`user_id=eq.${user.id}`},()=>fetchEntries()).subscribe();
    return()=>supabase.removeChannel(ch);
  },[]);
  async function fetchEntries(){setLoading(true);const{data}=await supabase.from("progress_entries").select("*").eq("user_id",user.id).order("created_at",{ascending:true});setEntries(data||[]);setLoading(false);}
  async function logEntry(){if(!weight)return;setSaving(true);await supabase.from("progress_entries").insert({user_id:user.id,weight:parseFloat(weight),calories:parseInt(calories)||null,workouts_this_week:parseInt(workouts)||0});setWeight("");setCalories("");setWorkouts("");setSaving(false);}
  const latest=entries[entries.length-1],first=entries[0];
  const totalLoss=latest&&first?(first.weight-latest.weight).toFixed(1):0;
  const totalWorkouts=entries.reduce((s,e)=>s+(e.workouts_this_week||0),0);
  const progressPct=Math.min(100,Math.round((parseFloat(totalLoss)/10)*100));
  return(
    <div style={s.content}>
      <Eyebrow label="Real-Time"/><h2 style={s.sectionTitle}>Progress</h2><p style={s.sectionSub}>Every check-in saved instantly.</p>
      {loading?<LoadingDots/>:(
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
            {[{n:latest?`${latest.weight}kg`:"—",l:"Current Weight"},{n:totalLoss>0?`-${totalLoss}kg`:"—",l:"Total Lost"},{n:totalWorkouts,l:"Workouts Logged"},{n:entries.length,l:"Check-ins"}].map((x,i)=>(
              <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
            ))}
          </div>
          {entries.length>0&&(<div style={s.card}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}><span style={{fontWeight:800,fontSize:"0.8rem",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",color:C.white}}>Goal: 10kg Loss</span><span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{progressPct}%</span></div><div style={s.progressBar}><div style={{...s.progressFill,width:`${progressPct}%`}}/></div></div>)}
          <div style={s.card}>
            <label style={{...s.label,color:C.white,marginBottom:"0.75rem",fontSize:"0.75rem",display:"block"}}>Log Today</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
              <div><label style={s.label}>Weight (kg)</label><input style={s.input} type="number" placeholder="85.0" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
              <div><label style={s.label}>Calories</label><input style={s.input} type="number" placeholder="2000" value={calories} onChange={e=>setCalories(e.target.value)}/></div>
            </div>
            <div><label style={s.label}>Workouts this week</label><input style={s.input} type="number" placeholder="0" value={workouts} onChange={e=>setWorkouts(e.target.value)}/></div>
            <button onClick={logEntry} disabled={saving||!weight} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{saving?"Saving...":"Log Check-in"}</button>
          </div>
          {entries.length>0&&(<div style={s.card}><label style={{...s.label,marginBottom:"0.75rem"}}>History</label><div style={{overflowX:"auto"}}><table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif"}}><thead><tr style={{borderBottom:"1px solid rgba(255,255,255,0.08)"}}>{["Date","Weight","Cal","Sessions"].map(h=><th key={h} style={{textAlign:"left",padding:"0.4rem 0.5rem",color:"rgba(255,255,255,0.3)",fontWeight:800,fontSize:"0.6rem",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{h}</th>)}</tr></thead><tbody>{[...entries].reverse().map((e,i)=><tr key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.04)"}}><td style={{padding:"0.5rem",color:"rgba(255,255,255,0.35)",fontSize:"0.8rem"}}>{new Date(e.created_at).toLocaleDateString("en-AU",{month:"short",day:"numeric"})}</td><td style={{padding:"0.5rem",fontWeight:700,color:C.white}}>{e.weight}kg</td><td style={{padding:"0.5rem",color:"rgba(255,255,255,0.45)"}}>{e.calories||"—"}</td><td style={{padding:"0.5rem",color:"rgba(255,255,255,0.45)"}}>{e.workouts_this_week||0}</td></tr>)}</tbody></table></div></div>)}
        </>
      )}
    </div>
  );
}

// ─── BODY MEASUREMENTS ───────────────────────────────────────────────────────
function BodyMeasurements({user}){
  const[entries,setEntries]=useState([]);const[form,setForm]=useState({chest:"",waist:"",hips:"",arms:"",thighs:"",neck:""});const[saving,setSaving]=useState(false);const[loading,setLoading]=useState(true);
  useEffect(()=>{supabase.from("measurements").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(10).then(({data})=>{setEntries(data||[]);setLoading(false);});}, []);
  async function save(){const vals=Object.fromEntries(Object.entries(form).filter(([,v])=>v).map(([k,v])=>[k,parseFloat(v)]));if(!Object.keys(vals).length)return;setSaving(true);await supabase.from("measurements").insert({user_id:user.id,...vals});const{data}=await supabase.from("measurements").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(10);setEntries(data||[]);setForm({chest:"",waist:"",hips:"",arms:"",thighs:"",neck:""});setSaving(false);}
  const fields=["chest","waist","hips","arms","thighs","neck"];const latest=entries[0];const prev=entries[1];
  return(
    <div style={s.content}>
      <Eyebrow label="Body Stats"/><h2 style={s.sectionTitle}>Measurements</h2><p style={s.sectionSub}>Track every inch of your transformation.</p>
      {latest&&(<div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>{fields.map(f=>latest[f]?(<div key={f} style={s.statCard}><div style={{...s.statNum,fontSize:"1.3rem"}}>{latest[f]}<span style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)"}}>cm</span></div>{prev&&prev[f]&&<div style={{fontSize:"0.6rem",color:latest[f]<prev[f]?C.lime:"#f97316",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif"}}>{latest[f]<prev[f]?"▼":"▲"} {Math.abs(latest[f]-prev[f]).toFixed(1)}</div>}<div style={s.statLabel}>{f}</div></div>):null)}</div>)}
      <div style={s.card}>
        <label style={{...s.label,color:C.white,marginBottom:"0.75rem",fontSize:"0.75rem",display:"block"}}>Log measurements (cm)</label>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>{fields.map(f=>(<div key={f}><label style={s.label}>{f.charAt(0).toUpperCase()+f.slice(1)}</label><input style={s.input} type="number" placeholder="cm" value={form[f]} onChange={e=>setForm(p=>({...p,[f]:e.target.value}))}/></div>))}</div>
        <button onClick={save} disabled={saving} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{saving?"Saving...":"Save Measurements"}</button>
      </div>
      {loading?<LoadingDots/>:entries.length>0&&(<div style={s.card}><label style={{...s.label,marginBottom:"0.75rem"}}>History</label>{entries.slice(0,5).map((e,i)=>(<div key={i} style={{borderBottom:"1px solid rgba(255,255,255,0.05)",paddingBottom:"0.5rem",marginBottom:"0.5rem"}}><div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif",marginBottom:"0.2rem"}}>{new Date(e.created_at).toLocaleDateString("en-AU",{month:"short",day:"numeric",year:"numeric"})}</div><div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>{fields.map(f=>e[f]?<span key={f} style={s.tagGray}>{f}: {e[f]}cm</span>:null)}</div></div>))}</div>)}
    </div>
  );
}

// ─── WORKOUT HISTORY ─────────────────────────────────────────────────────────
function WorkoutHistory({user}){
  const[history,setHistory]=useState([]);const[loading,setLoading]=useState(true);
  useEffect(()=>{supabase.from("workout_history").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(20).then(({data})=>{setHistory(data||[]);setLoading(false);});}, []);
  const totalSessions=history.length;const thisWeek=history.filter(h=>(new Date()-new Date(h.created_at))/(1000*60*60*24)<=7).length;
  return(
    <div style={s.content}>
      <Eyebrow label="Training Log"/><h2 style={s.sectionTitle}>Workout History</h2><p style={s.sectionSub}>Every session you've ever completed.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>{[{n:totalSessions,l:"Total"},{n:thisWeek,l:"This Week"},{n:history.length>0?Math.round(history.reduce((a,h)=>a+(h.exercises||0),0)/history.length):0,l:"Avg Exercises"}].map((x,i)=>(<div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>))}</div>
      {loading?<LoadingDots/>:history.length===0?(<div style={{...s.card,textAlign:"center",padding:"2rem"}}><div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>🏋️</div><div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem"}}>No workouts logged yet. Complete a workout to see your history here.</div></div>):history.map((h,i)=>(<div key={i} style={s.card}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.2rem",color:C.white}}>{h.day_label||"Workout"}</div><div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{new Date(h.created_at).toLocaleDateString("en-AU",{weekday:"short",month:"short",day:"numeric"})}</div></div><div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap",justifyContent:"flex-end"}}><span style={s.tagGray}>{h.exercises||0} ex</span><span style={s.tagGray}>{h.sets_completed||0} sets</span></div></div>{h.split&&<div style={{marginTop:"0.4rem"}}><span style={s.tag}>{h.split}</span></div>}</div>))}
    </div>
  );
}

// ─── SUPPLEMENT GUIDE ────────────────────────────────────────────────────────
function SupplementGuide(){
  const[goalFilter,setGoalFilter]=useState("all");const[expanded,setExpanded]=useState(null);
  const filtered=goalFilter==="all"?SUPPLEMENTS:SUPPLEMENTS.filter(s=>s.goal.includes(goalFilter));
  const eColor=e=>e==="A+"||e==="A"?C.lime:e==="B+"?"#60a5fa":"#f97316";
  return(
    <div style={s.content}>
      <Eyebrow label="Evidence-Based"/><h2 style={s.sectionTitle}>Supplements</h2><p style={s.sectionSub}>Only what actually works, ranked by evidence.</p>
      <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
        {["all","muscle","strength","fat loss","athletic"].map(g=><button key={g} onClick={()=>setGoalFilter(g)} style={{...s.btnSm,flexShrink:0,background:goalFilter===g?C.lime:"rgba(255,255,255,0.07)",color:goalFilter===g?"#000":C.muted,border:"none",textTransform:"capitalize"}}>{g}</button>)}
      </div>
      {filtered.map((sup,i)=>(
        <div key={i} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer"}} onClick={()=>setExpanded(expanded===i?null:i)}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem",flexWrap:"wrap"}}><span style={{fontWeight:900,fontSize:"0.95rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{sup.name}</span><span style={{...s.tag,background:`${eColor(sup.evidence)}15`,color:eColor(sup.evidence),borderColor:`${eColor(sup.evidence)}20`}}>Evidence {sup.evidence}</span></div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem",fontFamily:"'Barlow',sans-serif"}}>{sup.dose} · {sup.timing}</div>
            </div>
            <span style={{color:C.lime,fontSize:"1.1rem",marginLeft:"0.5rem"}}>{expanded===i?"−":"+"}</span>
          </div>
          {expanded===i&&<div style={{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.07)",fontSize:"0.88rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>{sup.desc}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── MINDSET & HABITS ────────────────────────────────────────────────────────
function MindsetHabits(){
  const today=new Date().toDateString();
  const[checked,setChecked]=useState(()=>{try{return JSON.parse(localStorage.getItem(`habits_${today}`))||{};}catch{return{};}});
  const[note,setNote]=useState(()=>{try{return localStorage.getItem(`note_${today}`)||"";}catch{return "";}});
  const[mood,setMood]=useState(()=>{try{return localStorage.getItem(`mood_${today}`)||"";}catch{return "";}});
  useEffect(()=>{try{localStorage.setItem(`habits_${today}`,JSON.stringify(checked));}catch{}},[checked]);
  useEffect(()=>{try{localStorage.setItem(`note_${today}`,note);}catch{}},[note]);
  useEffect(()=>{try{localStorage.setItem(`mood_${today}`,mood);}catch{}},[mood]);
  function toggle(id){setChecked(p=>({...p,[id]:!p[id]}));}
  const doneCount=Object.values(checked).filter(Boolean).length;
  const pct=Math.round((doneCount/HABITS_DEFAULT.length)*100);
  const cats=["nutrition","training","recovery","cardio","mindset"];
  return(
    <div style={s.content}>
      <Eyebrow label="Daily Check-in"/><h2 style={s.sectionTitle}>Mindset & Habits</h2><p style={s.sectionSub}>Small daily wins build big results.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>{[{n:`${doneCount}/${HABITS_DEFAULT.length}`,l:"Done Today"},{n:`${pct}%`,l:"Complete"},{n:"3",l:"Day Streak"}].map((x,i)=>(<div key={i} style={s.statCard}><div style={{...s.statNum,fontSize:"1.5rem"}}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>))}</div>
      <div style={s.card}><div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}><span style={{fontWeight:800,fontSize:"0.8rem",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",color:C.white}}>Today's Progress</span><span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{pct}%</span></div><div style={s.progressBar}><div style={{...s.progressFill,width:`${pct}%`}}/></div></div>
      <div style={s.card}><label style={{...s.label,color:C.white,marginBottom:"0.75rem",fontSize:"0.72rem"}}>How are you feeling?</label><div style={{display:"flex",gap:"0.5rem",justifyContent:"space-around"}}>{["😞","😐","🙂","😊","🔥"].map((m,i)=><button key={i} onClick={()=>setMood(m)} style={{fontSize:"1.7rem",background:mood===m?"rgba(204,255,0,0.15)":"transparent",border:`1px solid ${mood===m?C.lime:"rgba(255,255,255,0.1)"}`,borderRadius:"10px",padding:"0.4rem 0.55rem",cursor:"pointer"}}>{m}</button>)}</div></div>
      {cats.map(cat=>{const catHabits=HABITS_DEFAULT.filter(h=>h.cat===cat);return(<div key={cat} style={s.card}><label style={{...s.label,color:C.white,marginBottom:"0.75rem",fontSize:"0.72rem",textTransform:"capitalize"}}>{cat}</label>{catHabits.map(habit=>(<div key={habit.id} onClick={()=>toggle(habit.id)} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.55rem 0",borderBottom:"1px solid rgba(255,255,255,0.04)",cursor:"pointer"}}><div style={{width:"20px",height:"20px",borderRadius:"5px",border:`1.5px solid ${checked[habit.id]?C.lime:"rgba(255,255,255,0.15)"}`,background:checked[habit.id]?C.lime:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>{checked[habit.id]&&<svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}</div><span style={{fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",color:checked[habit.id]?"rgba(255,255,255,0.35)":C.white,textDecoration:checked[habit.id]?"line-through":"none",flex:1}}>{habit.label}</span><span style={{fontSize:"14px"}}>{habit.icon}</span></div>))}</div>);})}
      <div style={s.card}><label style={{...s.label,color:C.white,marginBottom:"0.5rem",fontSize:"0.72rem"}}>Daily note / reflection</label><textarea style={{...s.input,marginBottom:0,resize:"none",minHeight:"80px",lineHeight:1.5,fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}} placeholder="How did today go? What will you do better tomorrow?" value={note} onChange={e=>setNote(e.target.value)}/></div>
      {pct===100&&<div style={{...s.card,background:"rgba(204,255,0,0.08)",borderColor:"rgba(204,255,0,0.3)",textAlign:"center"}}><div style={{fontSize:"2rem",marginBottom:"0.35rem"}}>🔥</div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.1rem",color:C.lime}}>Perfect Day!</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",marginTop:"0.25rem"}}>Every habit done. This is how champions are built.</div></div>}
    </div>
  );
}

// ─── WATER & 1RM ─────────────────────────────────────────────────────────────
function WaterTracker(){
  const today=new Date().toDateString();
  const[glasses,setGlasses]=useState(()=>{try{return parseInt(localStorage.getItem(`water_${today}`))||0;}catch{return 0;}});
  const goal=8;
  useEffect(()=>{try{localStorage.setItem(`water_${today}`,glasses);}catch{}},[glasses]);
  return(
    <div style={s.card}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"}}>
        <div><Eyebrow label="Hydration"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>Water Intake</div></div>
        <div style={{textAlign:"right"}}><div style={{fontSize:"1.7rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{glasses}<span style={{fontSize:"0.9rem",color:"rgba(255,255,255,0.3)"}}>/{goal}</span></div><div style={s.statLabel}>Glasses</div></div>
      </div>
      <div style={{display:"flex",gap:"5px",marginBottom:"0.6rem",flexWrap:"wrap"}}>
        {Array.from({length:goal},(_,i)=>(<div key={i} onClick={()=>setGlasses(i+1)} style={{flex:"0 0 calc(12.5% - 5px)",aspectRatio:"1",borderRadius:"8px",background:i<glasses?"rgba(59,130,246,0.7)":"rgba(255,255,255,0.06)",border:`1px solid ${i<glasses?"rgba(96,165,250,0.5)":"rgba(255,255,255,0.08)"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill={i<glasses?"#93c5fd":"rgba(255,255,255,0.2)"} stroke="none"><path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z"/></svg>
        </div>))}
      </div>
      <div style={{...s.progressBar,background:"rgba(59,130,246,0.15)"}}><div style={{...s.progressFill,background:"#3b82f6",width:`${Math.min(100,(glasses/goal)*100)}%`}}/></div>
      <div style={{display:"flex",gap:"0.5rem",marginTop:"0.6rem"}}>
        <button onClick={()=>setGlasses(g=>Math.min(goal,g+1))} style={{...s.btn,flex:1,padding:"0.6rem"}}>+ Glass</button>
        <button onClick={()=>setGlasses(0)} style={{...s.btnGlass,padding:"0.6rem 0.9rem",fontSize:"0.78rem"}}>Reset</button>
      </div>
    </div>
  );
}

function OneRMCalc(){
  const[weight,setWeight]=useState("");const[reps,setReps]=useState("");
  const w=parseFloat(weight),r=parseInt(reps);
  const orm=w&&r&&r>0?Math.round(w*(1+r/30)):null;
  const percentages=[100,95,90,85,80,75,70,65];
  return(
    <div style={s.card}>
      <Eyebrow label="Strength Calculator"/>
      <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white,marginBottom:"0.75rem"}}>1 Rep Max Calculator</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.75rem"}}>
        <div><label style={s.label}>Weight lifted</label><input style={s.input} type="number" placeholder="100kg" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
        <div><label style={s.label}>Reps completed</label><input style={s.input} type="number" placeholder="8" value={reps} onChange={e=>setReps(e.target.value)}/></div>
      </div>
      {orm&&(<>
        <div style={{textAlign:"center",padding:"0.85rem",background:"rgba(204,255,0,0.06)",borderRadius:"12px",marginBottom:"0.6rem",border:"1px solid rgba(204,255,0,0.18)"}}>
          <div style={s.statLabel}>Estimated 1RM</div>
          <div style={{fontSize:"2.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{orm}<span style={{fontSize:"1.1rem",color:"rgba(255,255,255,0.4)"}}>kg</span></div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"4px"}}>
          {percentages.map(p=>(<div key={p} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"0.45rem",textAlign:"center"}}>
            <div style={{fontSize:"0.9rem",fontWeight:900,color:p===100?C.lime:C.white,fontFamily:"'Barlow Condensed',sans-serif"}}>{Math.round(orm*p/100)}</div>
            <div style={{fontSize:"0.55rem",color:"rgba(255,255,255,0.3)",fontWeight:800,textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>{p}%</div>
          </div>))}
        </div>
      </>)}
    </div>
  );
}

// ─── NUTRITION TIPS ──────────────────────────────────────────────────────────
function NutritionTips(){
  const[selected,setSelected]=useState(null);const[catFilter,setCatFilter]=useState("All");
  const cats=["All",...new Set(ARTICLES.map(a=>a.cat))];
  const filtered=catFilter==="All"?ARTICLES:ARTICLES.filter(a=>a.cat===catFilter);
  if(selected!==null){const a=ARTICLES[selected];return(<div style={s.content}><button onClick={()=>setSelected(null)} style={{...s.btnSm,marginBottom:"1.25rem",background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button><div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>{a.emoji}</div><span style={s.tag}>{a.cat}</span><h2 style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",margin:"0.5rem 0 0.25rem",color:C.white}}>{a.title}</h2><div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif",marginBottom:"1.25rem"}}>{a.read} read</div><div style={{...s.card,fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",lineHeight:1.75,color:"rgba(255,255,255,0.55)"}}>{a.content}</div></div>);}
  return(
    <div style={s.content}>
      <Eyebrow label="Learn"/><h2 style={s.sectionTitle}>Nutrition & Training</h2><p style={s.sectionSub}>Evidence-based articles to level up your knowledge.</p>
      <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>{cats.map(c=><button key={c} onClick={()=>setCatFilter(c)} style={{...s.btnSm,flexShrink:0,background:catFilter===c?C.lime:"rgba(255,255,255,0.07)",color:catFilter===c?"#000":C.muted,border:"none"}}>{c}</button>)}</div>
      {filtered.map((a,i)=>(<div key={i} onClick={()=>setSelected(ARTICLES.indexOf(a))} style={{...s.card,cursor:"pointer",display:"flex",gap:"1rem",alignItems:"center"}}><span style={{fontSize:"1.8rem",flexShrink:0}}>{a.emoji}</span><div style={{flex:1}}><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",marginBottom:"0.2rem",lineHeight:1.2,color:C.white}}>{a.title}</div><div style={{display:"flex",gap:"0.35rem",alignItems:"center"}}><span style={s.tag}>{a.cat}</span><span style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{a.read} read</span></div></div><span style={{color:C.lime,flexShrink:0}}>→</span></div>))}
    </div>
  );
}

// ─── PROFILE TAB ─────────────────────────────────────────────────────────────
function ProfileTab({user,profile,onSignOut,onNavigate,onUpdateSettings}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const thisWeek=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=7).length;
  const thisMonth=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=30).length;
  const memberSince=user?.created_at?new Date(user.created_at).toLocaleDateString("en-AU",{month:"long",year:"numeric"}):"—";
  const[showTraining,setShowTraining]=useState(false);
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const items=[
    {id:"progress",label:"Progress Tracker",desc:"Weight & workout log",icon:"📈"},
    {id:"measurements",label:"Body Measurements",desc:"Track every inch",icon:"📏"},
    {id:"history",label:"Workout History",desc:"Every session logged",icon:"🗓️"},
    {id:"supplements",label:"Supplement Guide",desc:"Evidence-based recs",icon:"💊"},
    {id:"habits",label:"Mindset & Habits",desc:"Daily streaks",icon:"🧠"},
    {id:"articles",label:"Nutrition & Tips",desc:"Learn the science",icon:"📚"},
  ];
  return(
    <div style={s.content}>
      <Eyebrow label="Your Profile"/><h2 style={s.sectionTitle}>Profile</h2>
      {/* Stats */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[{n:completedDates.length,l:"Total Workouts"},{n:thisWeek,l:"This Week"},{n:thisMonth,l:"This Month"},{n:"—",l:"Hours Trained"}].map((x,i)=>(<div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>))}
      </div>
      {/* Account */}
      <div style={s.card}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.22)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",flexShrink:0}}>{(profile?.name||user.email||"A")[0].toUpperCase()}</div>
          <div>
            <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em",fontSize:"0.9rem",color:C.white}}>{profile?.name||user.email}</div>
            <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>Member since {memberSince}</div>
          </div>
        </div>
        <div style={{background:"rgba(204,255,0,0.07)",border:"1px solid rgba(204,255,0,0.18)",borderRadius:"10px",padding:"0.7rem",marginBottom:"0.75rem"}}>
          <div style={{fontSize:"0.62rem",color:C.lime,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>ForgeBody Pro · $19/month · Active</div>
        </div>
        <button onClick={onSignOut} style={{...s.btnGlass,width:"100%",color:"rgba(255,100,100,0.8)",borderColor:"rgba(255,100,100,0.15)"}}>Sign Out</button>
      </div>
      {/* Training settings */}
      <div style={s.card}>
        <button onClick={()=>setShowTraining(!showTraining)} style={{display:"flex",alignItems:"center",width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0}}>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white,flex:1,textAlign:"left"}}>Training Settings</div>
          <span style={{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"}}>{showTraining?"▲":"▼"}</span>
        </button>
        {showTraining&&(
          <div style={{marginTop:"0.75rem"}}>
            {settings.split&&(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginBottom:"0.75rem"}}>
                {[{l:"Split",v:(settings.split||"").replace("_"," ")},{l:"Days/week",v:settings.days},{l:"Level",v:settings.level},{l:"Goal",v:settings.wGoal}].map((x,i)=>x.v?(<div key={i} style={{background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"0.5rem 0.75rem"}}><div style={{fontSize:"0.55rem",color:"rgba(255,255,255,0.3)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div><div style={{fontSize:"0.85rem",fontWeight:800,color:C.white,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"capitalize"}}>{x.v}</div></div>):null)}
              </div>
            )}
            <button onClick={()=>{localStorage.removeItem("fb_workout_settings");onUpdateSettings();}} style={{...s.btnGlass,width:"100%",fontSize:"0.8rem",padding:"0.6rem"}}>Change Programme →</button>
          </div>
        )}
      </div>
      {/* Founding member */}
      <div style={{...s.card,background:"rgba(204,255,0,0.04)",borderColor:"rgba(204,255,0,0.12)"}}>
        <p style={{color:C.lime,fontWeight:800,fontSize:"0.62rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Founding Member?</p>
        <p style={{color:"rgba(255,255,255,0.4)",margin:0,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>Bought the $27 PDF? Email your receipt to support@forgebody.com for free lifetime access.</p>
      </div>
      <div style={{...s.label,marginBottom:"0.75rem",marginTop:"0.25rem"}}>Quick Access</div>
      {items.map(item=>(<div key={item.id} onClick={()=>onNavigate("sidebar",item.id)} style={{...s.card,cursor:"pointer",display:"flex",alignItems:"center",gap:"1rem",padding:"1rem 1.25rem",marginBottom:"0.5rem"}}><span style={{fontSize:"1.3rem",flexShrink:0}}>{item.icon}</span><div style={{flex:1}}><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white,marginBottom:"0.1rem"}}>{item.label}</div><div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div></div><span style={{color:C.lime,fontSize:"0.95rem"}}>→</span></div>))}
    </div>
  );
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
function Sidebar({open,onClose,user,profile,onNavigate,onSignOut}){
  if(!open)return null;
  return(
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",backdropFilter:"blur(8px)",zIndex:200}}/>
      <div style={{position:"fixed",top:0,left:0,bottom:0,width:"275px",background:"rgba(8,8,8,0.97)",backdropFilter:"blur(40px)",borderRight:"1px solid rgba(255,255,255,0.08)",zIndex:201,overflowY:"auto",animation:"slideIn 0.25s ease"}}>
        <div style={{padding:"1.1rem 1.25rem",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{fontSize:"1.1rem",fontWeight:900,letterSpacing:"0.06em",color:C.white,textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",width:"30px",height:"30px",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
        </div>
        {user&&<div style={{padding:"1.1rem 1.25rem",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:"0.75rem"}}>
          <div style={{width:"38px",height:"38px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.22)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1rem",flexShrink:0}}>{(profile?.name||user.email||"A")[0].toUpperCase()}</div>
          <div><div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.85rem",color:C.white}}>{profile?.name||"Athlete"}</div><div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{user.email}</div></div>
        </div>}
        <div style={{padding:"0.5rem 0"}}>
          {[
            {label:"Workout History",icon:"🗓️",id:"history"},
            {label:"Body Measurements",icon:"📏",id:"measurements"},
            {label:"Progress Tracker",icon:"📈",id:"progress"},
            {label:"Supplement Guide",icon:"💊",id:"supplements"},
            {label:"Nutrition Articles",icon:"📚",id:"articles"},
            {label:"Mindset & Habits",icon:"🧠",id:"habits"},
            {label:"1RM Calculator",icon:"⚖️",id:"calculator"},
          ].map((item,i)=>(
            <button key={i} onClick={()=>{onNavigate("sidebar",item.id);onClose();}} style={{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.8rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",borderBottom:"1px solid rgba(255,255,255,0.04)"}}>
              <span style={{fontSize:"1.15rem",flexShrink:0}}>{item.icon}</span>
              <span style={{fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:"rgba(255,255,255,0.75)",letterSpacing:"0.04em"}}>{item.label}</span>
            </button>
          ))}
          <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",marginTop:"0.5rem",padding:"0.75rem 1.25rem 0"}}>
            <div style={{...s.tag,marginBottom:"0.5rem"}}>Subscription</div>
            <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.75rem"}}>ForgeBody Pro · $19/month · Active</div>
            <button style={{display:"flex",alignItems:"center",gap:"0.6rem",width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:"0.6rem 0",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.04em"}}><span style={{fontSize:"1rem"}}>💬</span>Support</button>
            <button onClick={onSignOut} style={{...s.btnGlass,width:"100%",marginTop:"0.5rem",fontSize:"0.82rem",color:"rgba(255,100,100,0.75)",borderColor:"rgba(255,100,100,0.15)"}}>Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── BOTTOM NAV ICONS ────────────────────────────────────────────────────────
function NavIcon({tab,active}){
  const stroke=active?C.lime:"rgba(255,255,255,0.4)";const fill=active?"rgba(204,255,0,0.15)":"none";
  if(tab==="home")return<svg width="22" height="22" viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
  if(tab==="meal")return<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>;
  if(tab==="coach")return<svg width="22" height="22" viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
  if(tab==="profile")return<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
  return null;
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function ForgeBodyApp(){
  const[session,setSession]=useState(null);
  const[loading,setLoading]=useState(true);
  const[tab,setTab]=useState("home");
  const[sidePanel,setSidePanel]=useState(null);
  const[profile,setProfile]=useState(null);
  const[showOnboarding,setShowOnboarding]=useState(false);
  const[showSubscription,setShowSubscription]=useState(false);
  const[page,setPage]=useState("landing");
  const[showSuccess,setShowSuccess]=useState(false);
  const[sidebarOpen,setSidebarOpen]=useState(false);
  const[workoutDayIndex,setWorkoutDayIndex]=useState(undefined);
  const[inWorkout,setInWorkout]=useState(false);
  const[logoTaps,setLogoTaps]=useState(0);

  // Secret dev bypass — tap logo 7 times on landing page
  function handleLogoTap(){
    const next=logoTaps+1;
    setLogoTaps(next);
    if(next>=7){
      localStorage.setItem("fb_dev_bypass","true");
      setPage("signin");
      setLogoTaps(0);
    }
  }

  // Payment success — mark user as subscribed automatically
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    if(params.get("payment")==="success"||params.get("session_id")){
      setShowSuccess(true);
      window.history.replaceState({},"",window.location.pathname);
      // Mark subscribed in Supabase if we have a session
      supabase.auth.getSession().then(async({data})=>{
        if(data.session){
          const plan=localStorage.getItem("fb_pending_plan")||"monthly";
          await supabase.from("profiles").upsert({
            user_id:data.session.user.id,
            subscribed:true,
            plan,
            subscribed_at:new Date().toISOString(),
          },{onConflict:"user_id"});
          localStorage.removeItem("fb_pending_plan");
          localStorage.removeItem("fb_pending_user");
          setShowSubscription(false); // clear paywall
        }
      });
    }
  },[]);

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{
      setSession(data.session);
      if(data.session)checkProfile(data.session.user);
      else{
        // Check dev bypass
        if(localStorage.getItem("fb_dev_bypass")==="true")setPage("signin");
        else setPage("landing");
      }
      setLoading(false);
    });
    const{data:listener}=supabase.auth.onAuthStateChange((_e,sess)=>{
      if(sess){setSession(sess);checkProfile(sess.user);}
      else{setSession(null);setPage("landing");}
    });
    return()=>listener.subscription.unsubscribe();
  },[]);

  async function checkProfile(user){
    try{
      const{data}=await supabase.from("profiles").select("*").eq("user_id",user.id).single();
      if(!data||!data.onboarded){setShowOnboarding(true);setPage("app");return;}
      setProfile(data);
      // Dev bypass skips subscription check
      const devBypass=localStorage.getItem("fb_dev_bypass")==="true";
      if(!data.subscribed&&!devBypass)setShowSubscription(true);
      setPage("app");
    }catch(e){setShowOnboarding(true);setPage("app");}
  }

  async function signOut(){
    await supabase.auth.signOut();
    setSession(null);setProfile(null);
    setPage("landing");setShowSubscription(false);setShowOnboarding(false);
    localStorage.removeItem("fb_dev_bypass");
  }
  function navigate(t,sub=null){setSidebarOpen(false);if(sub){setSidePanel({screen:sub});setTab("sidebar");}else{setTab(t);setSidePanel(null);}}
  function startWorkout(dayIdx){setWorkoutDayIndex(dayIdx);setInWorkout(true);}

  if(loading)return<div style={{...s.app,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:0}}><style>{GLASS}</style><LoadingDots/></div>;

  // Payment success screen
  if(showSuccess){
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <PaymentSuccess onContinue={()=>{setShowSuccess(false);if(session)setPage("app");else setPage("signin");}}/>
      </div>
    );
  }

  // Landing page
  if(page==="landing"){
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <LandingPage onSignIn={()=>setPage("signin")} onSelectPlan={()=>setPage("plans")} onLogoTap={handleLogoTap}/>
      </div>
    );
  }

  // Plans page — requires sign in first
  if(page==="plans"){
    // If not signed in, go to sign in first, remember they want plans after
    if(!session){
      return(
        <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
          <style>{GLASS}</style>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
          <AuthScreen preselectedPlan="plans" onSignedIn={()=>setPage("plans")}/>
        </div>
      );
    }
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <SubscriptionWall user={session.user} onBack={()=>setPage("landing")} onSubscribed={()=>{setShowSubscription(false);setPage("app");}}/>
      </div>
    );
  }

  // Sign in page
  if(page==="signin"||(!session&&page!=="landing"&&page!=="plans")){
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <AuthScreen preselectedPlan={localStorage.getItem("fb_pending_plan")}/>
      </div>
    );
  }

  // Onboarding
  if(session&&showOnboarding){
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <Onboarding user={session.user} onComplete={p=>{setProfile(p);setShowOnboarding(false);setShowSubscription(true);}}/>
      </div>
    );
  }

  // Subscription gate
  if(session&&showSubscription){
    return(
      <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
        <style>{GLASS}</style>
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
        <SubscriptionWall user={session.user} onBack={signOut} onSubscribed={()=>setShowSubscription(false)}/>
      </div>
    );
  }

  return(
    <div style={s.app} className="fb-bg">
      <style>{GLASS}</style>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>

      <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} user={session.user} profile={profile} onNavigate={navigate} onSignOut={signOut}/>

      {inWorkout?(
        <WorkoutSession dayIndex={workoutDayIndex} onDone={()=>{setInWorkout(false);setTab("train");}}/>
      ):(
        <>
          <nav style={s.nav}>
            <button onClick={()=>setSidebarOpen(true)} style={{background:"transparent",border:"none",cursor:"pointer",padding:"6px",display:"flex",flexDirection:"column",gap:"5px",flexShrink:0}}>
              <div style={{width:"20px",height:"2px",background:"#ffffff",borderRadius:"1px"}}/>
              <div style={{width:"14px",height:"2px",background:"#ffffff",borderRadius:"1px"}}/>
              <div style={{width:"20px",height:"2px",background:"#ffffff",borderRadius:"1px"}}/>
            </button>
            <button onClick={()=>{setTab("home");setSidePanel(null);setInWorkout(false);}} style={s.logo}>
              FORGE<span style={s.logoSlash}>/</span>BODY
            </button>
            <div style={{width:"44px",textAlign:"right"}}>
              {sidePanel
                ?<button onClick={()=>{setSidePanel(null);setTab("home");}} style={{...s.btnSm,padding:"0.3rem 0.6rem",fontSize:"0.65rem",background:"transparent",color:"rgba(255,255,255,0.4)"}}>← Back</button>
                :<span style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{profile?.name?.split(" ")[0]||""}</span>
              }
            </div>
          </nav>

          {tab==="home"&&!sidePanel&&<HomeScreen profile={profile} user={session.user} onNavigate={navigate}/>}
          {tab==="meal"&&!sidePanel&&<MealPlanner/>}
          {tab==="macros"&&!sidePanel&&<MacroTracker/>}
          {tab==="coach"&&!sidePanel&&<AICoach/>}
          {tab==="train"&&!sidePanel&&<TrainScreen onStartWorkout={startWorkout} onSetupComplete={()=>{}}/>}
          {tab==="profile"&&!sidePanel&&<ProfileTab user={session.user} profile={profile} onSignOut={signOut} onNavigate={navigate} onUpdateSettings={()=>{setTab("train");setSidePanel(null);}}/>}

          {sidePanel?.screen==="progress"&&<Progress user={session.user}/>}
          {sidePanel?.screen==="measurements"&&<BodyMeasurements user={session.user}/>}
          {sidePanel?.screen==="history"&&<WorkoutHistory user={session.user}/>}
          {sidePanel?.screen==="supplements"&&<SupplementGuide/>}
          {sidePanel?.screen==="habits"&&<MindsetHabits/>}
          {sidePanel?.screen==="articles"&&<NutritionTips/>}
          {sidePanel?.screen==="calculator"&&<div style={s.content}><OneRMCalc/><WaterTracker/></div>}

          <nav style={s.bottomNav}>
            <button onClick={()=>{setTab("home");setSidePanel(null);}} style={{...s.navBtn,color:tab==="home"&&!sidePanel?C.lime:"rgba(255,255,255,0.38)"}}>
              <NavIcon tab="home" active={tab==="home"&&!sidePanel}/><span>Home</span>
            </button>
            <button onClick={()=>{setTab("meal");setSidePanel(null);}} style={{...s.navBtn,color:tab==="meal"&&!sidePanel?C.lime:"rgba(255,255,255,0.38)"}}>
              <NavIcon tab="meal" active={tab==="meal"&&!sidePanel}/><span>Meals</span>
            </button>
            <button onClick={()=>{setTab("train");setSidePanel(null);}} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",padding:"0",position:"relative",top:"-12px"}}>
              <div style={{background:(tab==="train"||inWorkout)?C.lime:"rgba(255,255,255,0.07)",border:`2px solid ${(tab==="train"||inWorkout)?C.lime:"rgba(255,255,255,0.14)"}`,borderRadius:"50%",width:"56px",height:"56px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:(tab==="train"||inWorkout)?"0 0 24px rgba(204,255,0,0.45)":"0 4px 20px rgba(0,0,0,0.5)",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                <span style={{fontSize:"0.5rem",fontWeight:900,letterSpacing:"0.05em",color:(tab==="train"||inWorkout)?"#000":"rgba(255,255,255,0.55)",fontFamily:"'Barlow Condensed',sans-serif",textAlign:"center",lineHeight:1.1,textTransform:"uppercase"}}>FORGE<br/>/BODY</span>
              </div>
              <span style={{fontSize:"0.54rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",color:(tab==="train"||inWorkout)?C.lime:"rgba(255,255,255,0.38)",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>Train</span>
            </button>
            <button onClick={()=>{setTab("coach");setSidePanel(null);}} style={{...s.navBtn,color:tab==="coach"&&!sidePanel?C.lime:"rgba(255,255,255,0.38)"}}>
              <NavIcon tab="coach" active={tab==="coach"&&!sidePanel}/><span>Coach</span>
            </button>
            <button onClick={()=>{setTab("profile");setSidePanel(null);}} style={{...s.navBtn,color:tab==="profile"&&!sidePanel?C.lime:"rgba(255,255,255,0.38)"}}>
              <NavIcon tab="profile" active={tab==="profile"&&!sidePanel}/><span>Profile</span>
            </button>
          </nav>
        </>
      )}
    </div>
  );
}
