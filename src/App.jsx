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

// ─── SPLITS DATA ─────────────────────────────────────────────────────────────
const SPLITS={
  ppl:{
    name:"Push / Pull / Legs",
    days3:[{label:"Push",muscles:["chest","shoulders","triceps"]},{label:"Pull",muscles:["back","biceps"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]}],
    days4:[{label:"Push",muscles:["chest","shoulders","triceps"]},{label:"Pull",muscles:["back","biceps"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},{label:"Push B",muscles:["chest","shoulders","triceps"]}],
    days5:[{label:"Push A",muscles:["chest","shoulders","triceps"]},{label:"Pull A",muscles:["back","biceps"]},{label:"Legs A",muscles:["quads","hamstrings","glutes","calves"]},{label:"Push B",muscles:["chest","triceps"]},{label:"Pull B",muscles:["back","biceps"]}],
    days6:[{label:"Push A",muscles:["chest","shoulders","triceps"]},{label:"Pull A",muscles:["back","biceps"]},{label:"Legs A",muscles:["quads","hamstrings","glutes","calves"]},{label:"Push B",muscles:["chest","shoulders","triceps"]},{label:"Pull B",muscles:["back","biceps"]},{label:"Legs B",muscles:["quads","hamstrings","glutes","calves"]}],
  },
  upper_lower:{
    name:"Upper / Lower",
    days3:[{label:"Upper",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]}],
    days4:[{label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]}],
    days5:[{label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Full Body",muscles:["chest","back","quads","core"]}],
    days6:[{label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper C",muscles:["chest","back","shoulders"]},{label:"Lower C",muscles:["quads","hamstrings","glutes","core"]}],
  },
  muscle_group:{
    name:"Muscle Group",
    days3:[{label:"Push",muscles:["chest","shoulders","triceps"]},{label:"Pull",muscles:["back","biceps"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]}],
    days4:[{label:"Chest & Triceps",muscles:["chest","triceps"]},{label:"Back & Biceps",muscles:["back","biceps"]},{label:"Shoulders & Core",muscles:["shoulders","core"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]}],
    days5:[{label:"Chest & Triceps",muscles:["chest","triceps"]},{label:"Back & Biceps",muscles:["back","biceps"]},{label:"Shoulders & Core",muscles:["shoulders","core"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},{label:"Arms",muscles:["biceps","triceps","core"]}],
    days6:[{label:"Chest",muscles:["chest"]},{label:"Back",muscles:["back"]},{label:"Shoulders & Core",muscles:["shoulders","core"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},{label:"Biceps & Triceps",muscles:["biceps","triceps"]},{label:"Full Body",muscles:["chest","back","quads","core"]}],
  },
  full_body:{
    name:"Full Body / HIIT",
    days3:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT",muscles:["hiit"]}],
    days4:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"HIIT A",muscles:["hiit"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT B",muscles:["hiit"]}],
    days5:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"HIIT A",muscles:["hiit"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT B",muscles:["hiit"]},{label:"Full Body C",muscles:["chest","back","hamstrings","core"]}],
    days6:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"HIIT A",muscles:["hiit"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT B",muscles:["hiit"]},{label:"Full Body C",muscles:["chest","back","hamstrings","core"]},{label:"HIIT C",muscles:["hiit"]}],
  },
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
    {icon:"🏋️",title:"Train Smarter",sub:"Personalised programmes built around your split, level and goal. Every set tracked. Every rep counted.",detail:"PPL · Upper/Lower · Muscle Group · HIIT",color:"rgba(204,255,0,0.1)",accent:C.lime,stats:[{n:"80+",l:"Exercises"},{n:"4",l:"Splits"},{n:"∞",l:"Workouts"}]},
    {icon:"🍽️",title:"Eat Right",sub:"AI meal plans with real ingredients and step-by-step cooking instructions. Built for your diet.",detail:"58+ meals · Full macros · Shopping lists",color:"rgba(59,130,246,0.1)",accent:"#60a5fa",stats:[{n:"58+",l:"Meals"},{n:"7",l:"Diets"},{n:"100%",l:"Macro tracked"}]},
    {icon:"🤖",title:"AI Coach 24/7",sub:"Your personal expert coach in your pocket. Ask anything. Get science-backed answers instantly.",detail:"Training · Nutrition · Recovery · Mindset",color:"rgba(168,85,247,0.1)",accent:"#c084fc",stats:[{n:"24/7",l:"Available"},{n:"∞",l:"Questions"},{n:"0s",l:"Wait"}]},
    {icon:"📈",title:"Track Everything",sub:"Body weight, measurements, macros, workouts and habits synced in real time.",detail:"Live sync · Calendar · Streaks · PBs",color:"rgba(251,146,60,0.1)",accent:"#fb923c",stats:[{n:"6",l:"Metrics"},{n:"10",l:"Habits"},{n:"Live",l:"Sync"}]},
    {icon:"📚",title:"12-Week Programme",sub:"A complete science-backed transformation course included with every plan. Sessions written. Meals planned.",detail:"Progressive overload · Periodisation · Nutrition",color:"rgba(34,197,94,0.1)",accent:"#4ade80",stats:[{n:"12",l:"Weeks"},{n:"84",l:"Sessions"},{n:"Free",l:"Included"}]},
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
      <style>{`
        @keyframes heroGlow{0%,100%{opacity:0.6}50%{opacity:1}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
      `}</style>

      {/* Background orbs */}
      <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:0,overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-20%",left:"-20%",width:"70%",height:"70%",borderRadius:"50%",background:"radial-gradient(circle,rgba(204,255,0,0.15) 0%,transparent 70%)",animation:"heroGlow 4s ease-in-out infinite"}}/>
        <div style={{position:"absolute",bottom:"-10%",right:"-10%",width:"50%",height:"50%",borderRadius:"50%",background:"radial-gradient(circle,rgba(100,200,0,0.1) 0%,transparent 70%)",animation:"heroGlow 4s ease-in-out infinite",animationDelay:"2s"}}/>
        <div style={{position:"absolute",top:"40%",right:"10%",width:"30%",height:"30%",borderRadius:"50%",background:"radial-gradient(circle,rgba(204,255,0,0.06) 0%,transparent 70%)"}}/>
      </div>

      <div style={{position:"relative",zIndex:1,maxWidth:"480px",margin:"0 auto",padding:"0 0 5rem"}}>

        {/* Nav */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1.25rem 1.25rem 0"}}>
          <div onClick={onLogoTap} style={{fontSize:"1.4rem",fontWeight:900,letterSpacing:"0.06em",color:C.white,textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",cursor:"default",userSelect:"none"}}>
            FORGE<span style={{color:C.lime}}>/</span>BODY
          </div>
          <button onClick={onSignIn} style={{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"20px",padding:"0.4rem 1rem",color:"rgba(255,255,255,0.8)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.78rem",cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase"}}>Sign In</button>
        </div>

        {/* Hero section */}
        <div style={{padding:"2rem 1.25rem 0"}}>

          {/* Badge pill */}
          <div style={{display:"inline-flex",alignItems:"center",gap:"6px",background:"rgba(204,255,0,0.1)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.25)",borderRadius:"20px",padding:"5px 14px",marginBottom:"1.5rem"}}>
            <div style={{width:"6px",height:"6px",borderRadius:"50%",background:C.lime,boxShadow:`0 0 8px ${C.lime}`}}/>
            <span style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>AI Fitness Platform</span>
          </div>

          {/* Headline */}
          <div style={{marginBottom:"1.5rem"}}>
            <div style={{fontSize:"clamp(4rem,14vw,6.5rem)",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.03em",lineHeight:0.88,color:C.white}}>
              <div>FORGE</div>
              <div>THE BODY</div>
              <div style={{
                background:"linear-gradient(135deg,#CCFF00,#aaff00,#CCFF00)",
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                animation:"shimmer 3s linear infinite",
                filter:"drop-shadow(0 0 20px rgba(204,255,0,0.4))",
              }}>YOU WANT.</div>
            </div>
          </div>

          {/* Subheadline */}
          <p style={{color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif",fontSize:"1.05rem",lineHeight:1.65,marginBottom:"0.75rem"}}>
            The AI fitness app that replaces your $150/hr personal trainer.
          </p>

          {/* Price comparison card - GLASS */}
          <div style={{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"20px",padding:"1.1rem 1.25rem",marginBottom:"1.75rem"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"0.75rem",alignItems:"center"}}>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"1.8rem",fontWeight:900,color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,textDecoration:"line-through"}}>$150</div>
                <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.3)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"3px"}}>Per PT session</div>
              </div>
              <div style={{textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"1.2rem"}}>→</div>
              <div style={{textAlign:"center"}}>
                <div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>$19</div>
                <div style={{fontSize:"0.62rem",color:C.lime,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"3px"}}>Per month</div>
              </div>
            </div>
            <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"0.85rem",paddingTop:"0.75rem",textAlign:"center",color:"rgba(255,255,255,0.45)",fontSize:"0.8rem",fontFamily:"'Barlow',sans-serif"}}>
              Same results. No appointment. No awkward small talk.
            </div>
          </div>

          {/* Free trial banner - GLASS */}
          <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.12),rgba(150,255,0,0.06))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"16px",padding:"0.9rem 1.1rem",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"0.85rem"}}>
            <div style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(204,255,0,0.15)",border:"1px solid rgba(204,255,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem"}}>🎁</div>
            <div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.lime,letterSpacing:"0.05em",marginBottom:"0.15rem"}}>7-Day Free Trial — No Card Needed</div>
              <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif"}}>Try everything free. Cancel anytime. Zero risk.</div>
            </div>
          </div>

          {/* CTAs */}
          <button onClick={onSelectPlan} style={{width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",marginBottom:"0.6rem",background:C.lime,color:"#000",border:"none",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 0 40px rgba(204,255,0,0.35)",transition:"all 0.2s"}}>
            Start Free Trial →
          </button>
          <button onClick={onSignIn} style={{width:"100%",padding:"0.9rem",fontSize:"0.85rem",borderRadius:"14px",background:"rgba(255,255,255,0.07)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.13)",color:"rgba(255,255,255,0.7)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase"}}>
            Already a member? Sign In
          </button>
        </div>

        {/* Social proof — glass card */}
        <div style={{padding:"1.75rem 1.25rem 0"}}>
          <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"1.25rem"}}>
            <div style={{display:"flex",gap:"1px",marginBottom:"0.5rem"}}>{[...Array(5)].map((_,i)=><span key={i} style={{color:"#fbbf24",fontSize:"1.1rem"}}>★</span>)}</div>
            <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",color:"rgba(255,255,255,0.65)",lineHeight:1.6,fontStyle:"italic",marginBottom:"0.6rem"}}>"Cancelled my PT and switched to ForgeBody. Saved $600 a month and I'm in better shape than ever."</div>
            <div style={{fontSize:"0.7rem",fontWeight:800,color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.08em"}}>— ForgeBody Member</div>
          </div>
        </div>

        {/* What you get — glass feature grid */}
        <div style={{padding:"1.75rem 1.25rem 0"}}>
          <div style={{textAlign:"center",marginBottom:"1.25rem"}}>
            <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.4rem"}}>Everything included</div>
            <div style={{fontSize:"1.6rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,letterSpacing:"-0.01em"}}>One App.<br/>Everything You Need.</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
            {[
              {icon:"🏋️",title:"Smart Workouts",desc:"Your split, your level. Every rep tracked.",color:"rgba(204,255,0,0.08)",border:"rgba(204,255,0,0.15)"},
              {icon:"🍽️",title:"Meal Plans",desc:"58+ meals with ingredients & macros.",color:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.15)"},
              {icon:"🤖",title:"AI Coach 24/7",desc:"Expert answers on training & nutrition.",color:"rgba(168,85,247,0.08)",border:"rgba(168,85,247,0.15)"},
              {icon:"📚",title:"12-Week Plan",desc:"Science-backed programme included free.",color:"rgba(34,197,94,0.08)",border:"rgba(34,197,94,0.15)"},
              {icon:"📈",title:"Track Progress",desc:"Weight charts, PBs & streaks.",color:"rgba(251,146,60,0.08)",border:"rgba(251,146,60,0.15)"},
              {icon:"💊",title:"Supplements",desc:"Evidence-based guide. No BS.",color:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.15)"},
              {icon:"🧠",title:"Mindset & Habits",desc:"Daily check-ins & habit streaks.",color:"rgba(99,102,241,0.08)",border:"rgba(99,102,241,0.15)"},
              {icon:"🏆",title:"Personal Bests",desc:"Auto-detect PBs. Celebrate every one.",color:"rgba(251,191,36,0.08)",border:"rgba(251,191,36,0.15)"},
            ].map((item,i)=>(
              <div key={i} style={{background:`linear-gradient(135deg,${item.color},rgba(255,255,255,0.03))`,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:`1px solid ${item.border}`,borderRadius:"18px",padding:"1.1rem",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:"-10px",right:"-10px",width:"40px",height:"40px",borderRadius:"50%",background:item.color,filter:"blur(12px)",pointerEvents:"none"}}/>
                <div style={{fontSize:"1.7rem",marginBottom:"0.5rem"}}>{item.icon}</div>
                <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white,marginBottom:"0.3rem",lineHeight:1.1}}>{item.title}</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.38)",fontFamily:"'Barlow',sans-serif",lineHeight:1.45}}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Swipeable deep-dive cards */}
        <div style={{paddingTop:"2rem",marginBottom:"1.25rem"}}>
          <div style={{padding:"0 1.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem"}}>
            <div style={{fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif"}}>Explore features</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.2)",fontFamily:"'Barlow',sans-serif"}}>{slide+1}/{total}</div>
          </div>
          <div style={{overflow:"hidden",touchAction:"pan-y"}}
            onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp} onMouseLeave={onMouseUp}
          >
            <div style={{display:"flex",transition:isDragging?"none":"transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",transform:`translateX(calc(-${slide*100}% + ${dragOffset}px))`,willChange:"transform",userSelect:"none"}}>
              {slides.map((sl,i)=>(
                <div key={i} style={{minWidth:"100%",padding:"0 1.25rem"}}>
                  <div style={{background:`linear-gradient(135deg,${sl.color},rgba(255,255,255,0.03))`,border:`1px solid ${sl.accent}28`,borderRadius:"24px",padding:"1.75rem",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",position:"relative",overflow:"hidden",cursor:"grab"}}>
                    <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:`${sl.accent}15`,filter:"blur(30px)",pointerEvents:"none"}}/>
                    <div style={{fontSize:"2.8rem",marginBottom:"0.9rem"}}>{sl.icon}</div>
                    <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.7rem",color:C.white,letterSpacing:"-0.02em",lineHeight:1,marginBottom:"0.55rem"}}>{sl.title}</div>
                    <div style={{color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",lineHeight:1.55,marginBottom:"0.55rem"}}>{sl.sub}</div>
                    <div style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.08em",color:sl.accent,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"1.25rem"}}>{sl.detail}</div>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem"}}>
                      {sl.stats.map((stat,j)=>(
                        <div key={j} style={{background:"rgba(0,0,0,0.3)",borderRadius:"12px",padding:"0.65rem",textAlign:"center",backdropFilter:"blur(10px)",border:"1px solid rgba(255,255,255,0.06)"}}>
                          <div style={{fontSize:"1.3rem",fontWeight:900,color:sl.accent,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{stat.n}</div>
                          <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>{stat.l}</div>
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

        {/* Second testimonial */}
        <div style={{padding:"0 1.25rem 1.5rem"}}>
          <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"1.25rem"}}>
            <div style={{display:"flex",gap:"1px",marginBottom:"0.5rem"}}>{[...Array(5)].map((_,i)=><span key={i} style={{color:"#fbbf24",fontSize:"1.1rem"}}>★</span>)}</div>
            <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",color:"rgba(255,255,255,0.65)",lineHeight:1.6,fontStyle:"italic",marginBottom:"0.6rem"}}>"The AI coach actually knows my programme. It's like having a PT in my pocket but way cheaper."</div>
            <div style={{fontSize:"0.7rem",fontWeight:800,color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.08em"}}>— ForgeBody Member</div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{padding:"0 1.25rem"}}>
          <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.1),rgba(150,220,0,0.05))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"24px",padding:"2rem 1.5rem",textAlign:"center",position:"relative",overflow:"hidden",marginBottom:"1rem"}}>
            <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(25px)",pointerEvents:"none"}}/>
            <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>🔥</div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.6rem",letterSpacing:"-0.02em",color:C.white,marginBottom:"0.4rem",lineHeight:1}}>Ready to Forge<br/>Your Body?</div>
            <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",marginBottom:"1.5rem",lineHeight:1.5}}>Join ForgeBody. Train smarter.<br/>Cancel anytime. 7 days free.</div>
            <button onClick={onSelectPlan} style={{width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",background:C.lime,color:"#000",border:"none",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 0 30px rgba(204,255,0,0.3)"}}>
              Start Free Trial →
            </button>
          </div>
          <p style={{textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>7-day free trial · Cancel anytime · No contracts</p>
        </div>

      </div>
    </div>
  );
}

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
function PaymentSuccess({onContinue,onAlreadyPaid}){
  const[count,setCount]=useState(8);
  useEffect(()=>{
    const t=setInterval(()=>setCount(c=>{
      if(c<=1){clearInterval(t);setTimeout(onContinue,100);return 0;}
      return c-1;
    }),1000);
    return()=>clearInterval(t);
  },[]);
  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative",textAlign:"center"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 40%,rgba(204,255,0,0.15) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,maxWidth:"400px",width:"100%"}}>
        <div style={{width:"90px",height:"90px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"2px solid rgba(204,255,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 1.5rem",boxShadow:"0 0 40px rgba(204,255,0,0.2)"}}>
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none"><polyline points="10,25 20,35 40,15" stroke="#CCFF00" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{fontSize:"2.4rem",fontWeight:900,fontFamily:"Barlow Condensed,sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:"#CCFF00",marginBottom:"0.5rem",lineHeight:1}}>Payment Successful!</div>
        <div style={{color:"rgba(255,255,255,0.5)",fontFamily:"Barlow,sans-serif",fontSize:"0.95rem",lineHeight:1.6,marginBottom:"1.5rem"}}>Welcome to ForgeBody. Your transformation starts now.</div>
        <div style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.11)",borderRadius:"18px",padding:"1.25rem",marginBottom:"1.25rem",backdropFilter:"blur(20px)",textAlign:"left"}}>
          <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"#CCFF00",marginBottom:"0.75rem",fontFamily:"Barlow Condensed,sans-serif"}}>You now have access to</div>
          {[{icon:"🏋️",text:"Personalised workout programme"},{icon:"🍽️",text:"AI meal plans with recipes"},{icon:"🤖",text:"AI coaching chat 24/7"},{icon:"📈",text:"Full progress tracking"},{icon:"📚",text:"12-week science programme"}].map((item,i)=>(
            <div key={i} style={{display:"flex",gap:"0.75rem",alignItems:"center",padding:"0.4rem 0",borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <span style={{fontSize:"1.1rem"}}>{item.icon}</span>
              <span style={{color:"rgba(255,255,255,0.65)",fontFamily:"Barlow,sans-serif",fontSize:"0.88rem"}}>{item.text}</span>
            </div>
          ))}
        </div>
        <button onClick={onContinue} style={{background:"#CCFF00",color:"#000",border:"none",borderRadius:"12px",padding:"1rem",fontFamily:"Barlow Condensed,sans-serif",fontWeight:800,fontSize:"1rem",cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",width:"100%",marginBottom:"0.5rem",boxShadow:"0 0 20px rgba(204,255,0,0.2)"}}>
          Enter ForgeBody →
        </button>
        <div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.75rem",fontFamily:"Barlow,sans-serif",marginBottom:"1.25rem"}}>Auto-continuing in {count}s...</div>
        <button onClick={onAlreadyPaid} style={{background:"transparent",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"0.65rem 1rem",color:"rgba(255,255,255,0.3)",fontSize:"0.78rem",fontFamily:"Barlow,sans-serif",cursor:"pointer",width:"100%"}}>
          Having trouble accessing the app? Tap here
        </button>
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
    // Auto-calculate macro targets from onboarding
    const w=parseFloat(data.weight)||80;
    const isLoss=data.goal==="fat loss";const isBulk=data.goal==="muscle"||data.goal==="bulk";
    const cal=isLoss?Math.round(w*28):isBulk?Math.round(w*35):Math.round(w*31);
    const p=Math.round(w*2.2);const f=Math.round(cal*0.25/9);const c=Math.round((cal-p*4-f*9)/4);
    localStorage.setItem("fb_macro_targets",JSON.stringify({cal,p,c,f}));
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

// ─── PB HELPERS ──────────────────────────────────────────────────────────────
function getPBs(){try{return JSON.parse(localStorage.getItem("fb_pbs")||"{}");}catch{return{};}}
function savePB(exName,weight,reps){
  const pbs=getPBs();
  const key=exName.toLowerCase().replace(/\s+/g,"_");
  const est=Math.round(weight*(1+reps/30));
  const prev=pbs[key];
  const isNew=!prev||est>prev.est;
  if(isNew){
    pbs[key]={name:exName,weight,reps,est,date:new Date().toISOString()};
    localStorage.setItem("fb_pbs",JSON.stringify(pbs));
  }
  return{isNew,prev,current:{weight,reps,est}};
}

// Confetti burst component
function ConfettiCelebration({exName,weight,reps,onDone}){
  const canvasRef=useRef(null);
  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const ctx=canvas.getContext("2d");
    canvas.width=window.innerWidth;canvas.height=window.innerHeight;
    const pieces=Array.from({length:120},()=>({
      x:Math.random()*canvas.width,y:-20,
      w:6+Math.random()*8,h:6+Math.random()*8,
      r:Math.random()*Math.PI*2,
      vx:(Math.random()-0.5)*6,vy:3+Math.random()*4,
      vr:(Math.random()-0.5)*0.2,
      color:["#CCFF00","#ffffff","#88ff00","#ffdd00","#ff88cc"][Math.floor(Math.random()*5)],
      opacity:1,
    }));
    let frame;
    function draw(){
      ctx.clearRect(0,0,canvas.width,canvas.height);
      pieces.forEach(p=>{
        p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;p.opacity=Math.max(0,p.opacity-0.008);
        ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.globalAlpha=p.opacity;
        ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
      });
      if(pieces.some(p=>p.opacity>0))frame=requestAnimationFrame(draw);
    }
    draw();
    const t=setTimeout(onDone,3500);
    return()=>{cancelAnimationFrame(frame);clearTimeout(t);};
  },[]);
  return(
    <div style={{position:"fixed",inset:0,zIndex:400,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.88)",backdropFilter:"blur(10px)"}}>
      <canvas ref={canvasRef} style={{position:"absolute",inset:0,pointerEvents:"none"}}/>
      <div style={{position:"relative",zIndex:1,textAlign:"center",padding:"2rem"}}>
        <div style={{fontSize:"4rem",marginBottom:"0.75rem"}}>🏆</div>
        <div style={{fontSize:"1.1rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>New Personal Best!</div>
        <div style={{fontSize:"2.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.white,lineHeight:1,marginBottom:"0.5rem"}}>{exName}</div>
        <div style={{fontSize:"3.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",color:C.lime,lineHeight:1,marginBottom:"0.25rem"}}>{weight}kg × {reps}</div>
        <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",marginBottom:"2rem"}}>Estimated 1RM: {Math.round(weight*(1+reps/30))}kg</div>
        <button onClick={onDone} style={{...s.btn,padding:"0.85rem 2rem",fontSize:"0.95rem",borderRadius:"12px"}}>Let's Go 🔥</button>
      </div>
    </div>
  );
}

// PB History page
function PBHistory(){
  const pbs=getPBs();
  const entries=Object.values(pbs).sort((a,b)=>new Date(b.date)-new Date(a.date));
  return(
    <div style={s.content}>
      <Eyebrow label="Strength Records"/>
      <h2 style={s.sectionTitle}>Personal Bests</h2>
      <p style={s.sectionSub}>Your all-time max lifts. Keep pushing.</p>
      {entries.length===0?(
        <div style={{...s.card,textAlign:"center",padding:"2.5rem"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>🏋️</div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem"}}>No PBs yet</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>Complete a workout and log your weights to start tracking personal bests.</div>
        </div>
      ):entries.map((pb,i)=>(
        <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <div style={{width:"42px",height:"42px",borderRadius:"10px",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
            <span style={{fontSize:"1.3rem"}}>🏆</span>
          </div>
          <div style={{flex:1}}>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.92rem",color:C.white,marginBottom:"0.2rem"}}>{pb.name}</div>
            <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
              <span style={s.tag}>{pb.weight}kg × {pb.reps}</span>
              <span style={s.tagGray}>Est. 1RM: {pb.est}kg</span>
            </div>
          </div>
          <div style={{textAlign:"right",flexShrink:0}}>
            <div style={{color:"rgba(255,255,255,0.3)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{new Date(pb.date).toLocaleDateString("en-AU",{month:"short",day:"numeric"})}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SetLogger({ex,setNum,onSave}){
  const[weight,setWeight]=useState("");
  const[reps,setReps]=useState(ex.reps.split("-")[0]||"8");
  // Show previous PB for this exercise
  const pbs=getPBs();
  const key=ex.name.toLowerCase().replace(/\s+/g,"_");
  const prevPB=pbs[key];
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",zIndex:299,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
      <div style={{...s.card,width:"100%",maxWidth:"360px",padding:"1.5rem"}}>
        <Eyebrow label={`Set ${setNum} Complete`}/>
        <div style={{fontSize:"1.3rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.5rem"}}>{ex.name}</div>
        {prevPB&&(
          <div style={{background:"rgba(204,255,0,0.06)",border:"1px solid rgba(204,255,0,0.15)",borderRadius:"10px",padding:"0.6rem 0.85rem",marginBottom:"0.85rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
            <span style={{fontSize:"0.9rem"}}>🏆</span>
            <div>
              <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>Your PB</div>
              <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Barlow',sans-serif"}}>{prevPB.weight}kg × {prevPB.reps} reps · Est. 1RM {prevPB.est}kg</div>
            </div>
          </div>
        )}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"1rem"}}>
          <div><label style={s.label}>Weight (kg)</label><input style={s.input} type="number" placeholder="e.g. 80" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
          <div><label style={s.label}>Reps done</label><input style={s.input} type="number" value={reps} onChange={e=>setReps(e.target.value)}/></div>
        </div>
        {weight&&reps&&prevPB&&Math.round(parseFloat(weight)*(1+parseInt(reps)/30))>prevPB.est&&(
          <div style={{background:"rgba(204,255,0,0.1)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"10px",padding:"0.6rem",textAlign:"center",marginBottom:"0.75rem"}}>
            <span style={{fontSize:"0.82rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}}>🔥 New PB incoming!</span>
          </div>
        )}
        <button onClick={()=>onSave({weight:parseFloat(weight)||0,reps:parseInt(reps)||0})} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Save & Rest →</button>
      </div>
    </div>
  );
}

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({profile,user,onNavigate}){
  const now=new Date();
  const hour=now.getHours();
  const greet=hour<12?"Good morning":hour<17?"Good afternoon":"Good evening";
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const macroLog=JSON.parse(localStorage.getItem("fb_macros_"+now.toDateString())||"[]");
  const macroTargets=JSON.parse(localStorage.getItem("fb_macro_targets")||'{"cal":2200,"p":180,"c":220,"f":70}');
  const water=parseInt(localStorage.getItem("water_"+now.toDateString())||"0");
  const totalWorkouts=completedDates.length;
  const thisWeek=completedDates.filter(d=>(now-new Date(d))/86400000<=7).length;
  const streak=(()=>{let s=0;for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))s++;else if(i>0)break;}return s;})();
  const todayDone=completedDates.some(d=>new Date(d).toDateString()===now.toDateString());
  const splitData=settings.split?SPLITS[settings.split]:null;
  const daysKey=splitData?Object.keys(splitData).filter(k=>k!=="name").find(k=>k===`days${settings.days||"4"}`)||Object.keys(splitData).filter(k=>k!=="name")[0]:null;
  const template=daysKey?splitData[daysKey]:null;
  const todayWorkout=template?template[now.getDay()%template.length]:null;
  const totalCal=macroLog.reduce((a,x)=>a+(x.cal||0),0);
  const calLeft=Math.max(0,macroTargets.cal-totalCal);
  const totalP=macroLog.reduce((a,x)=>a+(x.p||0),0);
  const pLeft=Math.max(0,macroTargets.p-totalP);
  const quote=QUOTES[now.getDay()%QUOTES.length];
  const pbs=Object.values(getPBs()).sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,2);

  return(
    <div style={{padding:"1.5rem 1.25rem 1rem",position:"relative",zIndex:1,maxWidth:"600px",margin:"0 auto"}}>

      {/* Greeting */}
      <div style={{marginBottom:"1.5rem",paddingTop:"0.5rem"}}>
        <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif"}}>{greet}</div>
        <div style={{fontSize:"3.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.03em",color:C.white,lineHeight:0.9,
          background:"linear-gradient(135deg,#ffffff,rgba(255,255,255,0.8))",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"
        }}>{profile?.name||"Athlete"}</div>
        <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginTop:"0.4rem"}}>{todayDone?"You crushed it today. 🔥":"Ready to build. Let's go. 💪"}</div>
      </div>

      {/* TODAY WORKOUT — hero card */}
      <div onClick={()=>onNavigate("train")} style={{background:"linear-gradient(135deg,rgba(204,255,0,0.13),rgba(150,220,0,0.05))",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"22px",padding:"1.4rem",marginBottom:"0.65rem",cursor:"pointer",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-20px",right:"-20px",width:"100px",height:"100px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(20px)",pointerEvents:"none"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"}}>
          <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",display:"flex",alignItems:"center",gap:"5px"}}>
            <span style={{width:"5px",height:"5px",borderRadius:"50%",background:C.lime,display:"inline-block"}}/>
            {todayDone?"Completed ✓":"Today's Training"}
          </div>
          {todayDone&&<div style={{background:"rgba(204,255,0,0.2)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"20px",padding:"2px 10px",fontSize:"0.62rem",fontWeight:800,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.06em"}}>DONE ✓</div>}
        </div>
        <div style={{fontSize:"1.9rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.white,lineHeight:1,marginBottom:"0.5rem"}}>
          {todayWorkout?todayWorkout.label:settings.split?"Rest Day":"Set Up Programme"}
        </div>
        {todayWorkout&&<div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap",marginBottom:"0.85rem"}}>{todayWorkout.muscles.slice(0,4).map(m=><span key={m} style={{...s.tag,fontSize:"0.6rem"}}>{m}</span>)}</div>}
        <div style={{background:todayDone?"rgba(255,255,255,0.1)":C.lime,color:todayDone?"rgba(255,255,255,0.6)":"#000",borderRadius:"10px",padding:"0.65rem 1.25rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",display:"inline-block",boxShadow:todayDone?"none":"0 0 20px rgba(204,255,0,0.3)"}}>
          {todayDone?"Train Again →":todayWorkout?"Start Workout →":"Build Programme →"}
        </div>
      </div>

      {/* STATS ROW */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.55rem",marginBottom:"0.65rem"}}>
        {[{n:totalWorkouts,l:"Workouts"},{n:thisWeek,l:"This Week"},{n:streak+"🔥",l:"Streak"}].map((x,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.08)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"16px",padding:"0.9rem",textAlign:"center",boxShadow:"0 4px 20px rgba(0,0,0,0.2)"}}>
            <div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,textShadow:"0 0 20px rgba(204,255,0,0.4)"}}>{x.n}</div>
            <div style={{fontSize:"0.58rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"4px"}}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* NUTRITION DASHBOARD */}
      <div onClick={()=>onNavigate("macros")} style={{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"22px",padding:"1.25rem",marginBottom:"0.65rem",cursor:"pointer"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.9rem"}}>
          <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",display:"flex",alignItems:"center",gap:"5px"}}><span style={{width:"4px",height:"4px",borderRadius:"50%",background:C.lime,display:"inline-block"}}/>Today's Nutrition</div>
          <span style={{fontSize:"0.7rem",fontWeight:800,color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.06em"}}>Log food →</span>
        </div>
        <div style={{display:"flex",gap:"1rem",alignItems:"center",marginBottom:"0.9rem"}}>
          <div style={{flexShrink:0}}>
            {(()=>{
              const pct=Math.min(100,Math.round((totalCal/macroTargets.cal)*100));
              const r=30,circ=2*Math.PI*r;
              return(
                <svg width="76" height="76" viewBox="0 0 76 76">
                  <circle cx="38" cy="38" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="5"/>
                  <circle cx="38" cy="38" r={r} fill="none" stroke={C.lime} strokeWidth="5"
                    strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)}
                    strokeLinecap="round" transform="rotate(-90 38 38)"
                    style={{filter:"drop-shadow(0 0 6px rgba(204,255,0,0.5))"}}/>
                  <text x="38" y="34" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="900" fontFamily="Barlow Condensed,sans-serif">{totalCal}</text>
                  <text x="38" y="47" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="Barlow Condensed,sans-serif">KCAL</text>
                </svg>
              );
            })()}
          </div>
          <div style={{flex:1,display:"flex",flexDirection:"column",gap:"0.4rem"}}>
            {[{l:"Kcal left",v:calLeft,c:C.lime},{l:"Protein left",v:pLeft+"g",c:"#4ade80"}].map((x,i)=>(
              <div key={i} style={{background:"rgba(255,255,255,0.05)",borderRadius:"10px",padding:"0.45rem 0.65rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:"0.6rem",fontWeight:800,textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.08em"}}>{x.l}</span>
                <span style={{fontSize:"1rem",fontWeight:900,color:x.c,fontFamily:"'Barlow Condensed',sans-serif"}}>{x.v}</span>
              </div>
            ))}
          </div>
        </div>
        {[{l:"Protein",k:"p",c:"#4ade80"},{l:"Carbs",k:"c",c:"#60a5fa"},{l:"Fat",k:"f",c:"#f97316"}].map((m,i)=>{
          const val=macroLog.reduce((a,x)=>a+(x[m.k]||0),0);
          const tgt=macroTargets[m.k];
          const pct=Math.min(100,Math.round((val/tgt)*100));
          return(
            <div key={i} style={{marginBottom:i<2?"0.35rem":0}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:"3px"}}>
                <span style={{fontSize:"0.6rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif"}}>{m.l}</span>
                <span style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif"}}>{val}g/{tgt}g</span>
              </div>
              <div style={{height:"4px",background:"rgba(255,255,255,0.07)",borderRadius:"2px",overflow:"hidden"}}>
                <div style={{height:"100%",width:pct+"%",background:m.c,borderRadius:"2px",transition:"width 1s ease"}}/>
              </div>
            </div>
          );
        })}
      </div>

      {/* WATER + AI COACH */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.65rem"}}>
        <div onClick={()=>onNavigate("sidebar","calculator")} style={{background:"rgba(59,130,246,0.08)",backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",border:"1px solid rgba(59,130,246,0.18)",borderRadius:"18px",padding:"1rem",cursor:"pointer"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.4rem"}}>
            <span style={{fontSize:"1.3rem"}}>💧</span>
            <span style={{fontSize:"1.1rem",fontWeight:900,color:"#60a5fa",fontFamily:"'Barlow Condensed',sans-serif"}}>{water}/8</span>
          </div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.85rem",color:C.white,marginBottom:"0.4rem"}}>Water</div>
          <div style={{height:"4px",background:"rgba(255,255,255,0.07)",borderRadius:"2px",overflow:"hidden",marginBottom:"0.3rem"}}>
            <div style={{height:"100%",width:Math.min(100,(water/8)*100)+"%",background:"#3b82f6",borderRadius:"2px"}}/>
          </div>
          <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{water>=8?"Goal hit! 🎉":8-water+" glasses to go"}</div>
        </div>
        <div onClick={()=>onNavigate("coach")} style={{background:"rgba(168,85,247,0.08)",backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",border:"1px solid rgba(168,85,247,0.18)",borderRadius:"18px",padding:"1rem",cursor:"pointer"}}>
          <span style={{fontSize:"1.3rem",display:"block",marginBottom:"0.4rem"}}>🤖</span>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.85rem",color:C.white,marginBottom:"0.2rem"}}>AI Coach</div>
          <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",lineHeight:1.4}}>Ask me anything. 24/7.</div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.65rem"}}>
        {[
          {icon:"🍽️",label:"Meal Planner",desc:"Build today's meals",color:"rgba(251,146,60,0.08)",border:"rgba(251,146,60,0.15)",action:()=>onNavigate("meal")},
          {icon:"📊",label:"Log Macros",desc:"Track your food",color:"rgba(96,165,250,0.08)",border:"rgba(96,165,250,0.15)",action:()=>onNavigate("macros")},
          {icon:"📈",label:"Progress",desc:"Log your weight",color:"rgba(74,222,128,0.08)",border:"rgba(74,222,128,0.15)",action:()=>onNavigate("sidebar","progress")},
          {icon:"🧠",label:"Habits",desc:"Daily check-in",color:"rgba(204,255,0,0.06)",border:"rgba(204,255,0,0.15)",action:()=>onNavigate("sidebar","habits")},
        ].map((item,i)=>(
          <div key={i} onClick={item.action} style={{background:`linear-gradient(135deg,${item.color},rgba(255,255,255,0.02))`,backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",border:`1px solid ${item.border}`,borderRadius:"18px",padding:"1rem",cursor:"pointer"}}>
            <span style={{fontSize:"1.3rem",display:"block",marginBottom:"0.4rem"}}>{item.icon}</span>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.82rem",color:C.white,marginBottom:"0.15rem"}}>{item.label}</div>
            <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* MOTIVATION */}
      <div style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"18px",padding:"1.1rem",marginBottom:"0.65rem"}}>
        <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.45rem",display:"flex",alignItems:"center",gap:"5px"}}>
          <span style={{width:"4px",height:"4px",borderRadius:"50%",background:C.lime,display:"inline-block"}}/>Daily Motivation
        </div>
        <div style={{fontSize:"1rem",fontWeight:700,color:"rgba(255,255,255,0.7)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6,fontStyle:"italic"}}>"{quote}"</div>
      </div>

      {/* PBs */}
      {pbs.length>0&&(
        <div style={{background:"rgba(251,191,36,0.06)",backdropFilter:"blur(15px)",WebkitBackdropFilter:"blur(15px)",border:"1px solid rgba(251,191,36,0.15)",borderRadius:"18px",padding:"1.1rem",marginBottom:"0.65rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"}}>
            <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"#fbbf24",fontFamily:"'Barlow Condensed',sans-serif",display:"flex",alignItems:"center",gap:"5px"}}><span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#fbbf24",display:"inline-block"}}/>Personal Bests</div>
            <button onClick={()=>onNavigate("sidebar","pbs")} style={{background:"rgba(251,191,36,0.12)",border:"1px solid rgba(251,191,36,0.2)",borderRadius:"6px",padding:"2px 8px",color:"#fbbf24",fontSize:"0.62rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,cursor:"pointer",textTransform:"uppercase",letterSpacing:"0.06em"}}>See all</button>
          </div>
          {pbs.map((pb,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.35rem 0",borderBottom:i<pbs.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
              <span style={{fontSize:"0.95rem"}}>🏆</span>
              <div style={{flex:1,fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.8rem",color:C.white}}>{pb.name}</div>
              <span style={{background:"rgba(251,191,36,0.15)",border:"1px solid rgba(251,191,36,0.2)",borderRadius:"6px",padding:"2px 7px",fontSize:"0.65rem",fontWeight:800,color:"#fbbf24",fontFamily:"'Barlow Condensed',sans-serif"}}>{pb.weight}kg×{pb.reps}</span>
            </div>
          ))}
        </div>
      )}

      {/* WEEKLY RECAP */}
      <WeeklyRecap onNavigate={onNavigate}/>

      {/* CALENDAR */}
      <WorkoutCalendar completedDates={completedDates}/>
      <div style={{height:"1rem"}}/>
    </div>
  );
}


// ─── TRAIN TAB ───────────────────────────────────────────────────────────────
function TrainScreen({onStartWorkout,onSetupComplete,onNavigate}){
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
  const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k===`days${settings.days||"4"}`)||Object.keys(splitData).filter(k=>k!=="name")[0];
  const template=splitData[daysKey];
  const todayIdx=new Date().getDay()%template.length;

  return(
    <div style={s.content}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem"}}>
        <Eyebrow label="Training"/>
        <button onClick={()=>{localStorage.removeItem("fb_workout_settings");setSettings({});setSetupStep(0);setSplit("");setDays("");setLevel("");setWGoal("");}} style={{...s.btnSm,background:"transparent",color:"rgba(255,255,255,0.35)"}}>Change →</button>
      </div>
      <h2 style={s.sectionTitle}>Train</h2>
      {/* Check if today is a scheduled rest day */}
      {(()=>{
        const trainingDays=JSON.parse(localStorage.getItem("fb_training_days")||"null");
        const todayIsRestDay=trainingDays&&!trainingDays.includes(new Date().getDay());
        if(todayIsRestDay)return(
          <div style={{...s.card,background:"rgba(59,130,246,0.07)",borderColor:"rgba(59,130,246,0.2)",marginBottom:"0.75rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.5rem"}}>
              <span style={{fontSize:"1.5rem"}}>😴</span>
              <div>
                <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",color:C.white}}>Scheduled Rest Day</div>
                <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>Recovery is part of the programme</div>
              </div>
            </div>
            <button onClick={()=>onNavigate("sidebar","restday")} style={{...s.btnGlass,width:"100%",fontSize:"0.85rem",padding:"0.65rem"}}>View Recovery Routine →</button>
          </div>
        );
        return null;
      })()}

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
  const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k===`days${settings.days||"4"}`)||Object.keys(splitData).filter(k=>k!=="name")[0];
  const template=splitData[daysKey];
  const dayIdx=dayIndex!==undefined?dayIndex:new Date().getDay()%template.length;
  const day=template[dayIdx];
  const level=settings.level||"intermediate";
  const goal=settings.wGoal||"muscle";

  // Goal-based rep ranges
  function getGoalReps(baseReps){
    if(goal==="strength")return"3-5";
    if(goal==="fat loss")return"15-20";
    if(goal==="athletic")return"8-12";
    return baseReps; // muscle = use default
  }
  function getGoalSets(baseSets){
    const base=parseInt(baseSets)||3;
    if(goal==="strength")return String(base+1); // more sets, fewer reps
    if(goal==="fat loss")return String(Math.max(2,base-1)); // fewer sets, more reps
    return String(base);
  }
  function getLevelSets(sets){
    const n=parseInt(sets)||3;
    if(level==="beginner")return String(Math.max(2,n-1));
    if(level==="advanced")return String(n+1);
    return String(n);
  }
  function getGoalRest(baseRest){
    if(goal==="strength")return"3-5 min";
    if(goal==="fat loss")return"30-45 sec";
    if(goal==="athletic")return"60 sec";
    return baseRest;
  }

  function buildExercises(day){
    const exCount=goal==="strength"?3:goal==="fat loss"?5:4;
    return day.muscles.reduce((acc,muscle)=>{
      const pool=EXERCISES[muscle]||[];
      pool.slice(0,exCount).forEach(ex=>{
        const sets=getLevelSets(getGoalSets(ex.sets));
        const reps=getGoalReps(ex.reps);
        const rest=getGoalRest(ex.rest);
        acc.push({...ex,muscle,sets,reps,rest});
      });
      return acc;
    },[]);
  }

  const[exercises,setExercises]=useState(()=>buildExercises(day));

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

  const[showPBCelebration,setShowPBCelebration]=useState(null);
  const[showQuit,setShowQuit]=useState(false); // {exName,weight,reps}

  function saveLog(data){
    const k=pendingKey;
    const newCompletedSets={...completedSets,[k]:true};
    setCompletedSets(newCompletedSets);
    setSetLogs(p=>({...p,[k]:data}));
    setShowLogger(false);
    const[eI]=k.split("-").map(Number);
    const ex=exercises[eI];
    // Check for PB
    if(data.weight>0&&data.reps>0){
      const{isNew}=savePB(ex.name,data.weight,data.reps);
      if(isNew){
        setShowPBCelebration({exName:ex.name,weight:data.weight,reps:data.reps});
        return;
      }
    }
    // Check if all sets for this exercise are now done
    const totalSetsForEx=parseInt(ex.sets)||3;
    const doneCount=Array.from({length:totalSetsForEx},(_,i)=>newCompletedSets[`${eI}-${i}`]).filter(Boolean).length;
    const allExSets=doneCount===totalSetsForEx;
    // Only show rest timer if not the last set (more sets remaining)
    if(!allExSets){
      setTimerSecs(getRest(ex.rest));
      setShowTimer(true);
    }
    // If all sets done, just stay on screen - Next Exercise button will be active
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
        <WarmUpGenerator muscles={[...new Set(exercises.map(e=>e.muscle))]}/>
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
            <button onClick={()=>{
              const pool=(EXERCISES[ex.muscle]||[]).filter(e=>e.name!==ex.name);
              if(pool.length===0)return;
              const next=pool[Math.floor(Math.random()*pool.length)];
              setExercises(prev=>{const updated=[...prev];updated[i]={...next,muscle:ex.muscle,sets:ex.sets,reps:ex.reps,rest:ex.rest};return updated;});
            }} style={{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",padding:"0.35rem 0.6rem",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:"0.7rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",flexShrink:0}}>Swap</button>
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

    const QUIT_QUOTES=[
      "Champions don't quit when it gets hard. They quit when they're done.",
      "The pain you feel today is the strength you'll feel tomorrow.",
      "You didn't come this far to only come this far.",
      "Every rep you skip is a rep your competition is doing.",
      "The only workout you regret is the one you didn't finish.",
      "Quitting is permanent. Rest is temporary.",
      "Your future self is watching. Don't let them down.",
      "Iron never lies. Push through.",
      "The last few reps are where the real gains happen.",
      "One more set. That's all. Then decide.",
    ];

    const QuitModal=({onConfirm,onStay})=>{
      const[qIdx,setQIdx]=useState(()=>Math.floor(Math.random()*QUIT_QUOTES.length));
      useEffect(()=>{
        const t=setInterval(()=>setQIdx(i=>(i+1)%QUIT_QUOTES.length),3000);
        return()=>clearInterval(t);
      },[]);
      return(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
          <div style={{width:"100%",maxWidth:"360px"}}>
            {/* Glass card */}
            <div style={{background:"rgba(255,255,255,0.07)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px",padding:"2rem",textAlign:"center",marginBottom:"0.75rem"}}>
              <div style={{fontSize:"2.5rem",marginBottom:"1rem"}}>💪</div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.4rem",color:C.white,letterSpacing:"-0.01em",marginBottom:"0.5rem",lineHeight:1}}>
                Are You Sure?
              </div>
              <div style={{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"1.25rem"}}>
                {exIdx+1} of {exercises.length} exercises · {Object.keys(completedSets).length} sets done
              </div>
              {/* Cycling motivation quote */}
              <div style={{background:"rgba(204,255,0,0.06)",border:"1px solid rgba(204,255,0,0.18)",borderRadius:"14px",padding:"1.1rem",marginBottom:"1.5rem",minHeight:"70px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.7)",lineHeight:1.55,fontStyle:"italic",transition:"opacity 0.5s ease"}}>
                  "{QUIT_QUOTES[qIdx]}"
                </div>
              </div>
              {/* Dot indicators */}
              <div style={{display:"flex",gap:"4px",justifyContent:"center",marginBottom:"1.5rem"}}>
                {QUIT_QUOTES.map((_,i)=>(
                  <div key={i} style={{width:i===qIdx?16:5,height:"4px",borderRadius:"2px",background:i===qIdx?C.lime:"rgba(255,255,255,0.15)",transition:"all 0.3s"}}/>
                ))}
              </div>
              {/* Keep going button */}
              <button onClick={onStay} style={{...s.btn,width:"100%",padding:"1rem",fontSize:"0.95rem",borderRadius:"12px",marginBottom:"0.6rem"}}>
                Keep Going 🔥
              </button>
              {/* Quit button */}
              <button onClick={onConfirm} style={{width:"100%",padding:"0.85rem",fontSize:"0.85rem",borderRadius:"12px",background:"rgba(255,60,60,0.1)",backdropFilter:"blur(10px)",border:"1px solid rgba(255,60,60,0.25)",color:"rgba(255,100,100,0.8)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer"}}>
                Yes, Quit Workout
              </button>
            </div>
          </div>
        </div>
      );
    };

    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",paddingBottom:"80px",position:"relative"}}>
        <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 5%,rgba(204,255,0,0.09) 0%,transparent 55%)",pointerEvents:"none",zIndex:0}}/>
        {showLogger&&<SetLogger ex={ex} setNum={completedCount+1} onSave={saveLog}/>}
        {showPBCelebration&&<ConfettiCelebration exName={showPBCelebration.exName} weight={showPBCelebration.weight} reps={showPBCelebration.reps} onDone={()=>{
          const[eI]=pendingKey.split("-").map(Number);
          setShowPBCelebration(null);
          setTimerSecs(getRest(exercises[eI].rest));
          setShowTimer(true);
        }}/>}
        {showTimer&&<RestTimer seconds={timerSecs} onDone={()=>{setShowTimer(false);}}/>}
        {showQuit&&<QuitModal onConfirm={()=>{setShowQuit(false);onDone();}} onStay={()=>setShowQuit(false)}/>}
        <div style={{height:"3px",background:"rgba(255,255,255,0.07)",position:"sticky",top:0,zIndex:50}}>
          <div style={{height:"100%",background:C.lime,width:`${(exIdx/exercises.length)*100}%`,transition:"width 0.4s ease",boxShadow:"0 0 8px rgba(204,255,0,0.5)"}}/>
        </div>
        <div style={{padding:"1rem 1.25rem",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"}}>
            <button onClick={()=>setMode("overview")} style={s.btnSm}>← Overview</button>
            <span style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.1em"}}>{exIdx+1} / {exercises.length}</span>
            <button onClick={()=>setShowQuit(true)} style={{background:"rgba(255,60,60,0.1)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",border:"1px solid rgba(255,60,60,0.25)",borderRadius:"8px",padding:"0.4rem 0.85rem",color:"rgba(255,100,100,0.9)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.75rem",cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase"}}>Quit</button>
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
              <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name+' exercise proper form tutorial')}`} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",marginTop:"0.75rem",background:"rgba(255,0,0,0.1)",border:"1px solid rgba(255,0,0,0.2)",borderRadius:"10px",padding:"0.65rem",textDecoration:"none",backdropFilter:"blur(10px)"}}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff4444"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                <span style={{fontSize:"0.78rem",fontWeight:800,color:"rgba(255,100,100,0.9)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}}>Watch Demo</span>
              </a>
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
            <button onClick={()=>{
              if(!allDone){
                alert(`Complete all ${totalSets} sets before moving on!`);
                return;
              }
              if(isLast){finishWorkout();}
              else{setExIdx(i=>i+1);}
            }} style={{...s.btn,padding:"0.85rem",opacity:allDone?1:0.4,cursor:allDone?"pointer":"not-allowed"}}>{isLast?"Finish 🔥":"Next Exercise →"}</button>
          </div>
        </div>
      </div>
    );
  }

  if(mode==="done"){
    // Estimate calories burned: avg 5 kcal per set for compound, 3 for isolation
    const setsCompleted=Object.keys(completedSets).length;
    const weight=parseFloat(JSON.parse(localStorage.getItem("fb_profile")||"{}").weight||80);
    const calsBurned=Math.round(setsCompleted*5*(weight/80));
    const duration=Math.round(exercises.length*4.5);
    return(
      <div style={{...s.content,textAlign:"center",paddingTop:"2rem"}}>
        {/* Hero */}
        <div style={{fontSize:"4rem",marginBottom:"0.75rem"}}>🔥</div>
        <div style={{fontSize:"2.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.lime,marginBottom:"0.35rem",lineHeight:1}}>Workout Done!</div>
        <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",marginBottom:"1.5rem"}}>Every rep counts. You just built a better body.</div>

        {/* Stats grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem",marginBottom:"0.65rem"}}>
          {[
            {n:exercises.length,l:"Exercises",icon:"🏋️"},
            {n:setsCompleted,l:"Sets Done",icon:"✅"},
            {n:`~${calsBurned}`,l:"Kcal Burned",icon:"🔥"},
            {n:`~${duration}m`,l:"Duration",icon:"⏱️"},
          ].map((x,i)=>(
            <div key={i} style={{...s.statCard,display:"flex",alignItems:"center",gap:"0.6rem",textAlign:"left",padding:"0.9rem"}}>
              <span style={{fontSize:"1.3rem"}}>{x.icon}</span>
              <div>
                <div style={{...s.statNum,fontSize:"1.5rem"}}>{x.n}</div>
                <div style={s.statLabel}>{x.l}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Calorie burn card */}
        <div style={{background:"linear-gradient(135deg,rgba(251,146,60,0.12),rgba(239,68,68,0.06))",border:"1px solid rgba(251,146,60,0.25)",borderRadius:"18px",padding:"1.1rem",marginBottom:"0.65rem",backdropFilter:"blur(15px)"}}>
          <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#fb923c",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.35rem"}}>🔥 Calories Burned</div>
          <div style={{fontSize:"2.5rem",fontWeight:900,color:"#fb923c",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,marginBottom:"0.2rem"}}>{calsBurned} <span style={{fontSize:"1rem",color:"rgba(255,255,255,0.4)"}}>kcal</span></div>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>Based on {setsCompleted} sets · {weight}kg bodyweight</div>
        </div>

        <WorkoutCalendar completedDates={JSON.parse(localStorage.getItem("fb_workout_dates")||"[]")}/>
        <button onClick={onDone} style={{...s.btn,width:"100%",padding:"1rem",marginTop:"0.65rem",borderRadius:"14px"}}>Back to Training 💪</button>
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
  const TODAY=new Date().toDateString();
  const profile=JSON.parse(localStorage.getItem("fb_profile")||"{}");
  const[diet,setDiet]=useState(()=>{
    const saved=localStorage.getItem("fb_meal_diet");
    return saved||profile.diet||"standard";
  });
  const[targetCal,setTargetCal]=useState(()=>parseInt(localStorage.getItem("fb_meal_cal"))||2200);
  const[numMeals,setNumMeals]=useState(()=>parseInt(localStorage.getItem("fb_meal_count"))||4);
  const[plan,setPlan]=useState(()=>{
    try{const p=localStorage.getItem(`fb_meal_plan_${TODAY}`);return p?JSON.parse(p):null;}catch{return null;}
  });
  const[expandedMeal,setExpandedMeal]=useState(null);
  const[showCustom,setShowCustom]=useState(false);
  const[customMeal,setCustomMeal]=useState({name:"",cal:"",p:"",c:"",f:""});

  // Save settings on change
  useEffect(()=>{localStorage.setItem("fb_meal_diet",diet);},[diet]);
  useEffect(()=>{localStorage.setItem("fb_meal_cal",targetCal);},[targetCal]);
  useEffect(()=>{localStorage.setItem("fb_meal_count",numMeals);},[numMeals]);

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
    const newPlan={meals:result,total:{cal:tCal,p:tP,c:tC,f:tF}};
    setPlan(newPlan);
    localStorage.setItem(`fb_meal_plan_${TODAY}`,JSON.stringify(newPlan));
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

      {/* Custom meal creator */}
      <div style={{...s.card,marginTop:"0.75rem"}}>
        <button onClick={()=>setShowCustom(!showCustom)} style={{display:"flex",alignItems:"center",width:"100%",background:"transparent",border:"none",cursor:"pointer",padding:0}}>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white,flex:1,textAlign:"left"}}>+ Add Custom Meal</div>
          <span style={{color:"rgba(255,255,255,0.4)"}}>{showCustom?"▲":"▼"}</span>
        </button>
        {showCustom&&(
          <div style={{marginTop:"0.75rem"}}>
            <input style={s.input} placeholder="Meal name" value={customMeal.name} onChange={e=>setCustomMeal(p=>({...p,name:e.target.value}))}/>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem"}}>
              {["cal","p","c","f"].map(k=>(
                <div key={k}><label style={s.label}>{k==="cal"?"Kcal":k==="p"?"Protein":k==="c"?"Carbs":"Fat"}</label>
                <input style={{...s.input,marginBottom:0}} type="number" placeholder="0" value={customMeal[k]} onChange={e=>setCustomMeal(p=>({...p,[k]:e.target.value}))}/></div>
              ))}
            </div>
            <button onClick={()=>{
              if(!customMeal.name)return;
              const newMeal={id:Date.now(),name:customMeal.name,cal:parseInt(customMeal.cal)||0,p:parseInt(customMeal.p)||0,c:parseInt(customMeal.c)||0,f:parseInt(customMeal.f)||0,meal:"lunch",diet:["standard","vegetarian","vegan","keto","halal","gluten-free"],custom:true};
              const saved=JSON.parse(localStorage.getItem("fb_custom_meals")||"[]");
              saved.push(newMeal);
              localStorage.setItem("fb_custom_meals",JSON.stringify(saved));
              MEALS.push(newMeal);
              setCustomMeal({name:"",cal:"",p:"",c:"",f:""});
              setShowCustom(false);
            }} style={{...s.btn,width:"100%",marginTop:"0.75rem"}}>Save Meal</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MACRO TRACKER ───────────────────────────────────────────────────────────
function MacroTracker(){
  const TODAY=new Date().toDateString();
  const[target,setTarget]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("fb_macro_targets"))||{cal:2200,p:180,c:220,f:70};}catch{return{cal:2200,p:180,c:220,f:70};}
  });
  const[log,setLog]=useState(()=>{
    try{return JSON.parse(localStorage.getItem(`fb_macros_${TODAY}`))||[];}catch{return[];}
  });
  const[search,setSearch]=useState("");const[qty,setQty]=useState("100");const[showSetup,setShowSetup]=useState(false);

  // Persist log daily
  useEffect(()=>{
    localStorage.setItem(`fb_macros_${TODAY}`,JSON.stringify(log));
  },[log]);
  // Persist targets
  useEffect(()=>{
    localStorage.setItem("fb_macro_targets",JSON.stringify(target));
  },[target]);

  const filtered=search.length>1?FOODS.filter(f=>f.name.toLowerCase().includes(search.toLowerCase())):[];
  const totals=log.reduce((acc,item)=>({cal:acc.cal+item.cal,p:acc.p+item.p,c:acc.c+item.c,f:acc.f+item.f}),{cal:0,p:0,c:0,f:0});
  function addFood(food){const mult=parseFloat(qty)/100;setLog(prev=>[...prev,{...food,cal:Math.round(food.cal*mult),p:Math.round(food.p*mult),c:Math.round(food.c*mult),f:Math.round(food.f*mult),qty,id:Date.now()}]);setSearch("");setQty("100");}
  function Ring({val,max,color,label}){
    const pct=Math.min(100,Math.round((val/max)*100));const r=26,circ=2*Math.PI*r;
    return(<div style={{textAlign:"center"}}><svg width="64" height="64" viewBox="0 0 64 64"><circle cx="32" cy="32" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4"/><circle cx="32" cy="32" r={r} fill="none" stroke={color} strokeWidth="4" strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" transform="rotate(-90 32 32)"/><text x="32" y="36" textAnchor="middle" fill={C.white} fontSize="11" fontWeight="900" fontFamily="Barlow Condensed,sans-serif">{val}g</text></svg><div style={{fontSize:"0.58rem",fontWeight:800,textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"Barlow Condensed,sans-serif",marginTop:"2px"}}>{label}</div><div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.25)",fontFamily:"Barlow,sans-serif"}}>{pct}%</div></div>);
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
  const[messages,setMessages]=useState(()=>{
    try{
      const saved=localStorage.getItem("fb_coach_history");
      if(saved)return JSON.parse(saved);
    }catch{}
    return [{role:"assistant",text:`Hey! I'm your ForgeBody AI coach 🔥\n\n${settings.wGoal?`I can see you're training for ${settings.wGoal} on a ${(settings.split||"").replace("_"," ")} split. `:""}Ask me anything about training, nutrition, recovery or mindset.`}];
  });
  const[input,setInput]=useState("");
  const[loading,setLoading]=useState(false);
  const[cat,setCat]=useState("training");
  const bottomRef=useRef(null);

  // Persist chat history (last 20 messages)
  useEffect(()=>{
    try{localStorage.setItem("fb_coach_history",JSON.stringify(messages.slice(-20)));}catch{}
  },[messages]);

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
      const res=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:SYSTEM,messages:newMsgs.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}))})});
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
function WeightChart({entries}){
  if(entries.length<2)return null;
  const vals=entries.map(e=>e.weight).filter(Boolean);
  if(vals.length<2)return null;
  const min=Math.min(...vals)-2,max=Math.max(...vals)+2;
  const W=320,H=120,PAD=10;
  const pts=vals.map((v,i)=>{
    const x=PAD+(i/(vals.length-1))*(W-PAD*2);
    const y=H-PAD-((v-min)/(max-min))*(H-PAD*2);
    return[x,y];
  });
  const path="M"+pts.map(([x,y])=>`${x},${y}`).join(" L");
  const fill="M"+pts.map(([x,y])=>`${x},${y}`).join(" L")+` L${pts[pts.length-1][0]},${H} L${pts[0][0]},${H} Z`;
  const first=vals[0],last=vals[vals.length-1],diff=(first-last).toFixed(1);
  return(
    <div style={{...s.card,marginBottom:"0.75rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
        <div><Eyebrow label="Weight Trend"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>Body Weight</div></div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:"1.5rem",fontWeight:900,color:parseFloat(diff)>0?C.lime:"#f97316",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{parseFloat(diff)>0?"-":"+​"}{Math.abs(diff)}kg</div>
          <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>Total Change</div>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto",display:"block"}}>
        <defs>
          <linearGradient id="wgrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.25"/>
            <stop offset="100%" stopColor="#CCFF00" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d={fill} fill="url(#wgrad)"/>
        <path d={path} fill="none" stroke="#CCFF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {pts.map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3" fill="#CCFF00" opacity={i===0||i===pts.length-1?1:0.5}/>
        ))}
        <text x={pts[0][0]} y={H-1} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">{vals[0]}kg</text>
        <text x={pts[pts.length-1][0]} y={H-1} textAnchor="middle" fill="#CCFF00" fontSize="8">{vals[vals.length-1]}kg</text>
      </svg>
    </div>
  );
}
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
          <WeightChart entries={entries}/>
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

// ─── WEEKLY RECAP ────────────────────────────────────────────────────────────
function WeeklyRecap({onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const now=new Date();
  const dayOfWeek=now.getDay(); // 0=Sun
  const isSunday=dayOfWeek===0;
  const startOfWeek=new Date(now);startOfWeek.setDate(now.getDate()-dayOfWeek);startOfWeek.setHours(0,0,0,0);
  const endOfLastWeek=new Date(startOfWeek);endOfLastWeek.setDate(startOfWeek.getDate()-1);
  const startOfLastWeek=new Date(endOfLastWeek);startOfLastWeek.setDate(endOfLastWeek.getDate()-6);startOfLastWeek.setHours(0,0,0,0);

  const thisWeekWorkouts=completedDates.filter(d=>{const dt=new Date(d);return dt>=startOfWeek&&dt<=now;}).length;
  const lastWeekWorkouts=completedDates.filter(d=>{const dt=new Date(d);return dt>=startOfLastWeek&&dt<=endOfLastWeek;}).length;

  // Streak
  let streak=0;
  for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))streak++;else if(i>0)break;}

  const pbs=Object.values(getPBs());
  const recentPBs=pbs.filter(p=>(now-new Date(p.date))/(1000*60*60*24)<=7).length;

  if(!isSunday&&thisWeekWorkouts===0)return null;

  return(
    <div style={{...s.card,background:"linear-gradient(135deg,rgba(204,255,0,0.09),rgba(150,220,0,0.04))",borderColor:"rgba(204,255,0,0.2)",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-20px",right:"-20px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(20px)",pointerEvents:"none"}}/>
      <Eyebrow label={isSunday?"Weekly Recap 📋":"This Week So Far"}/>
      <div style={{fontSize:"1.3rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.75rem",lineHeight:1}}>
        {isSunday?`Week of ${startOfLastWeek.toLocaleDateString("en-AU",{month:"short",day:"numeric"})}`:`${now.toLocaleDateString("en-AU",{month:"short",day:"numeric"})} Week`}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
        {[{n:isSunday?lastWeekWorkouts:thisWeekWorkouts,l:"Workouts",icon:"🏋️"},{n:`${streak}🔥`,l:"Streak",icon:""},{n:recentPBs>0?recentPBs:"—",l:"New PBs",icon:"🏆"}].map((x,i)=>(
          <div key={i} style={{background:"rgba(0,0,0,0.25)",borderRadius:"12px",padding:"0.75rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.07)"}}>
            <div style={{fontSize:"1.5rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
            <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"3px"}}>{x.l}</div>
          </div>
        ))}
      </div>
      {lastWeekWorkouts>0&&isSunday&&<div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.75rem"}}>
        {lastWeekWorkouts>=4?"Incredible week. You showed up and delivered.":lastWeekWorkouts>=2?"Solid effort last week. Keep building.":"Every week is a fresh start. Make this one count."}
      </div>}
      <button onClick={()=>onNavigate("sidebar","history")} style={{...s.btnSm,width:"100%",padding:"0.6rem",textAlign:"center"}}>View Full History →</button>
    </div>
  );
}

// ─── BADGES ──────────────────────────────────────────────────────────────────
function BadgesScreen(){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const pbs=Object.values(getPBs());
  const total=completedDates.length;
  let streak=0;
  for(let i=0;i<365;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))streak++;else if(i>0)break;}

  const BADGES=[
    {id:"first",icon:"🌱",name:"First Rep",desc:"Complete your first workout",unlocked:total>=1},
    {id:"week",icon:"🔥",name:"On Fire",desc:"7-day workout streak",unlocked:streak>=7},
    {id:"ten",icon:"💪",name:"10 Strong",desc:"Complete 10 workouts",unlocked:total>=10},
    {id:"month",icon:"📅",name:"30 Day Warrior",desc:"Complete 30 workouts",unlocked:total>=30},
    {id:"fifty",icon:"⚡",name:"Elite 50",desc:"Complete 50 workouts",unlocked:total>=50},
    {id:"century",icon:"🏆",name:"Century Club",desc:"Complete 100 workouts",unlocked:total>=100},
    {id:"pb1",icon:"🎯",name:"Personal Best",desc:"Set your first PB",unlocked:pbs.length>=1},
    {id:"pb5",icon:"🏋️",name:"Strength Builder",desc:"Set 5 personal bests",unlocked:pbs.length>=5},
    {id:"pb10",icon:"👑",name:"Record Breaker",desc:"Set 10 personal bests",unlocked:pbs.length>=10},
    {id:"streak14",icon:"🌊",name:"Unstoppable",desc:"14-day streak",unlocked:streak>=14},
    {id:"streak30",icon:"🔱",name:"Iron Will",desc:"30-day streak",unlocked:streak>=30},
    {id:"streak100",icon:"💎",name:"Legend",desc:"100-day streak",unlocked:streak>=100},
  ];

  const unlocked=BADGES.filter(b=>b.unlocked).length;

  return(
    <div style={s.content}>
      <Eyebrow label="Achievements"/>
      <h2 style={s.sectionTitle}>Badges</h2>
      <p style={s.sectionSub}>Earn badges by hitting milestones.</p>
      <div style={{...s.card,background:"rgba(204,255,0,0.06)",borderColor:"rgba(204,255,0,0.2)",marginBottom:"0.75rem",textAlign:"center",padding:"1.25rem"}}>
        <div style={{fontSize:"2.5rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{unlocked}<span style={{fontSize:"1.2rem",color:"rgba(255,255,255,0.4)"}}>/{BADGES.length}</span></div>
        <div style={s.statLabel}>Badges Earned</div>
        <div style={{...s.progressBar,marginTop:"0.75rem"}}><div style={{...s.progressFill,width:`${Math.round((unlocked/BADGES.length)*100)}%`}}/></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem"}}>
        {BADGES.map((badge,i)=>(
          <div key={i} style={{...s.card,padding:"1rem",textAlign:"center",opacity:badge.unlocked?1:0.4,border:`1px solid ${badge.unlocked?"rgba(204,255,0,0.3)":"rgba(255,255,255,0.08)"}`,background:badge.unlocked?"rgba(204,255,0,0.06)":s.card.background,transition:"all 0.2s",marginBottom:0}}>
            <div style={{fontSize:"2rem",marginBottom:"0.35rem"}}>{badge.icon}</div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.8rem",color:badge.unlocked?C.white:"rgba(255,255,255,0.4)",marginBottom:"0.2rem",lineHeight:1.2}}>{badge.name}</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",lineHeight:1.3}}>{badge.desc}</div>
            {badge.unlocked&&<div style={{...s.tag,fontSize:"0.58rem",marginTop:"0.5rem"}}>Earned ✓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── WARM-UP GENERATOR ───────────────────────────────────────────────────────
const WARMUPS={
  chest:["Arm circles 30 sec","Chest stretch 20 sec each","Push-up negative x5","Band pull-apart x15"],
  back:["Cat-cow x10","Shoulder dislocates x10","Dead hang 20 sec","Band face pull x15"],
  shoulders:["Neck rolls 30 sec","Shoulder circles 30 sec","Wall slides x10","Band pull-apart x15"],
  quads:["Leg swing front-back x10 each","Bodyweight squat x10","Lunge walk x8","Hip circle x10 each"],
  hamstrings:["Standing toe touch x10","Leg swing side-side x10 each","Good morning x10 BW","Hip hinge practice x10"],
  glutes:["Glute bridge x15","Clamshell x12 each","Hip circle x10 each","Walking lunge x8"],
  biceps:["Wrist circles 20 sec","Elbow circles 20 sec","Band curl x12","Forearm stretch 20 sec each"],
  triceps:["Tricep stretch 20 sec each","Arm circles 30 sec","Wall push-up x10","Band pushdown x12"],
  core:["Dead bug x8 each","Bird dog x8 each","Plank 20 sec","Hollow hold 15 sec"],
  hiit:["Jumping jacks x20","High knees 30 sec","Arm swing x20","Bodyweight squat x10"],
};

function WarmUpGenerator({muscles}){
  const[show,setShow]=useState(false);
  const[done,setDone]=useState({});
  const exercises=[];
  const seen=new Set();
  muscles.forEach(m=>{
    (WARMUPS[m]||[]).forEach(ex=>{if(!seen.has(ex)&&exercises.length<8){exercises.push({m,ex});seen.add(ex);}});
  });
  const total=exercises.length;
  const doneCount=Object.values(done).filter(Boolean).length;
  return(
    <div style={{...s.card,marginBottom:"0.75rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <div><Eyebrow label="5 Min Warm-Up"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>Warm-Up Generator</div></div>
        <button onClick={()=>setShow(!show)} style={{...s.btnSm,background:show?"rgba(204,255,0,0.12)":"rgba(255,255,255,0.07)",color:show?C.lime:C.white}}>{show?"Hide":"Show"}</button>
      </div>
      {show&&(
        <div style={{marginTop:"0.75rem"}}>
          {doneCount>0&&<div style={{...s.progressBar,marginBottom:"0.5rem"}}><div style={{...s.progressFill,width:`${Math.round((doneCount/total)*100)}%`}}/></div>}
          {exercises.map((item,i)=>(
            <div key={i} onClick={()=>setDone(p=>({...p,[i]:!p[i]}))} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem 0",borderBottom:i<exercises.length-1?"1px solid rgba(255,255,255,0.05)":"none",cursor:"pointer"}}>
              <div style={{width:"20px",height:"20px",borderRadius:"5px",border:`1.5px solid ${done[i]?C.lime:"rgba(255,255,255,0.15)"}`,background:done[i]?C.lime:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                {done[i]&&<svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <span style={{flex:1,fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif",color:done[i]?"rgba(255,255,255,0.35)":C.white,textDecoration:done[i]?"line-through":"none"}}>{item.ex}</span>
              <span style={s.tagGray}>{item.m}</span>
            </div>
          ))}
          {doneCount===total&&<div style={{textAlign:"center",padding:"0.75rem",color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",marginTop:"0.25rem"}}>Ready to Train! 🔥</div>}
        </div>
      )}
    </div>
  );
}

// ─── REFERRAL SYSTEM ─────────────────────────────────────────────────────────
function ReferralScreen({user}){
  const[copied,setCopied]=useState(false);
  const refCode=(user?.id||"").slice(0,8).toUpperCase();
  const refLink=`${window.location.origin}?ref=${refCode}`;
  function copy(){navigator.clipboard.writeText(refLink).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),2000);});}
  return(
    <div style={s.content}>
      <Eyebrow label="Refer & Earn"/>
      <h2 style={s.sectionTitle}>Referrals</h2>
      <p style={s.sectionSub}>Share ForgeBody. You both win.</p>
      <div style={{...s.card,background:"linear-gradient(135deg,rgba(204,255,0,0.1),rgba(150,220,0,0.05))",borderColor:"rgba(204,255,0,0.25)",textAlign:"center",padding:"2rem",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-20px",right:"-20px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(20px)",pointerEvents:"none"}}/>
        <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>🎁</div>
        <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.4rem",color:C.white,marginBottom:"0.5rem",lineHeight:1}}>Give 1 Month Free</div>
        <div style={{color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",lineHeight:1.6}}>Share your link. When a friend signs up, they get their first month free — and so do you.</div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[{n:"1 Month",l:"Friend gets free"},{n:"1 Month",l:"You get free"}].map((x,i)=>(
          <div key={i} style={s.statCard}><div style={{...s.statNum,fontSize:"1.3rem"}}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
        ))}
      </div>
      <div style={s.card}>
        <label style={s.label}>Your referral link</label>
        <div style={{display:"flex",gap:"0.5rem",alignItems:"center",background:"rgba(0,0,0,0.3)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"0.75rem"}}>
          <div style={{flex:1,fontSize:"0.78rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{refLink}</div>
        </div>
        <button onClick={copy} style={{...s.btn,width:"100%",padding:"0.9rem"}}>{copied?"✅ Copied!":"Copy Referral Link"}</button>
      </div>
      <div style={s.card}>
        <label style={s.label}>Share via</label>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
          <a href={`https://wa.me/?text=Hey!%20Try%20ForgeBody%20-%20AI%20fitness%20app.%20Get%20your%20first%20month%20free%20with%20my%20link%3A%20${encodeURIComponent(refLink)}`} target="_blank" rel="noopener noreferrer" style={{...s.btnGlass,textDecoration:"none",textAlign:"center",display:"block",padding:"0.75rem",fontSize:"0.82rem"}}>💬 WhatsApp</a>
          <a href={`sms:?body=Try%20ForgeBody%20AI%20fitness%20app%21%20First%20month%20free%3A%20${encodeURIComponent(refLink)}`} style={{...s.btnGlass,textDecoration:"none",textAlign:"center",display:"block",padding:"0.75rem",fontSize:"0.82rem"}}>📱 SMS</a>
        </div>
      </div>
    </div>
  );
}

// ─── REST DAY CONTENT ────────────────────────────────────────────────────────
function RestDayContent(){
  const MOBILITY=[
    {name:"Hip Flexor Stretch",duration:"60 sec each",muscle:"Hips",desc:"Kneel on one knee, push hips forward gently. Hold, breathe deep."},
    {name:"Thoracic Rotation",duration:"10 reps each",muscle:"Spine",desc:"Sit cross-legged, rotate torso side to side. Opens the mid-back."},
    {name:"Doorway Chest Stretch",duration:"30 sec each",muscle:"Chest",desc:"Place arm on doorframe at 90°, lean through gently."},
    {name:"Hamstring Stretch",duration:"45 sec each",muscle:"Hamstrings",desc:"Sit with one leg extended, reach toward foot. Keep back flat."},
    {name:"Child's Pose",duration:"60 sec",muscle:"Back/Hips",desc:"Kneel and stretch arms forward, rest forehead down. Full relaxation."},
    {name:"Pigeon Pose",duration:"60 sec each",muscle:"Glutes",desc:"From downward dog, bring one knee forward. Intense hip opener."},
    {name:"Cat-Cow Stretch",duration:"10 reps",muscle:"Spine",desc:"On all fours, arch and round back alternately. Wakes up the spine."},
    {name:"Shoulder Cross Stretch",duration:"30 sec each",muscle:"Shoulders",desc:"Pull one arm across chest, hold with other arm."},
  ];
  const RECOVERY_TIPS=[
    {icon:"😴",title:"Sleep 8+ Hours",desc:"Growth hormone peaks during deep sleep. This is when muscle is actually built."},
    {icon:"💧",title:"Hydrate Hard",desc:"Aim for 3-4L today. Muscles recover faster when well hydrated."},
    {icon:"🍗",title:"Hit Protein",desc:"Still hit your protein target on rest days. Recovery requires amino acids."},
    {icon:"🧊",title:"Cold Shower",desc:"2 minutes cold water reduces inflammation and boosts mood significantly."},
    {icon:"🚶",title:"Light Walk",desc:"15-20 min easy walk increases blood flow and speeds up recovery."},
  ];
  const[doneItems,setDoneItems]=useState({});
  const total=MOBILITY.length;
  const done=Object.values(doneItems).filter(Boolean).length;
  return(
    <div style={s.content}>
      <Eyebrow label="Rest & Recover"/>
      <h2 style={s.sectionTitle}>Rest Day</h2>
      <p style={s.sectionSub}>Recovery is where the gains actually happen.</p>

      {/* Recovery tips */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.55rem",marginBottom:"0.75rem"}}>
        {RECOVERY_TIPS.map((tip,i)=>(
          <div key={i} style={{...s.card,padding:"1rem",marginBottom:0}}>
            <span style={{fontSize:"1.4rem",display:"block",marginBottom:"0.4rem"}}>{tip.icon}</span>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.82rem",color:C.white,marginBottom:"0.2rem"}}>{tip.title}</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",lineHeight:1.4}}>{tip.desc}</div>
          </div>
        ))}
      </div>

      {/* Mobility routine */}
      <div style={s.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
          <div><Eyebrow label="Mobility Routine"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>10 Min Stretch</div></div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"1.4rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{done}/{total}</div>
            <div style={s.statLabel}>Done</div>
          </div>
        </div>
        <div style={s.progressBar}><div style={{...s.progressFill,width:`${Math.round((done/total)*100)}%`}}/></div>
        <div style={{marginTop:"0.75rem"}}>
          {MOBILITY.map((item,i)=>(
            <div key={i} onClick={()=>setDoneItems(p=>({...p,[i]:!p[i]}))} style={{display:"flex",gap:"0.75rem",alignItems:"center",padding:"0.65rem 0",borderBottom:i<MOBILITY.length-1?"1px solid rgba(255,255,255,0.05)":"none",cursor:"pointer"}}>
              <div style={{width:"22px",height:"22px",borderRadius:"6px",border:`1.5px solid ${doneItems[i]?C.lime:"rgba(255,255,255,0.15)"}`,background:doneItems[i]?C.lime:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                {doneItems[i]&&<svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <div style={{flex:1}}>
                <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.88rem",color:doneItems[i]?"rgba(255,255,255,0.35)":C.white,textDecoration:doneItems[i]?"line-through":"none"}}>{item.name}</div>
                <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",marginTop:"1px"}}>{item.duration} · {item.muscle}</div>
              </div>
            </div>
          ))}
        </div>
        {done===total&&<div style={{textAlign:"center",padding:"0.75rem",color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginTop:"0.25rem"}}>Full routine complete! 🔥</div>}
      </div>
    </div>
  );
}

// ─── STRENGTH CHARTS ─────────────────────────────────────────────────────────
function StrengthCharts(){
  const pbs=getPBs();
  const entries=Object.values(pbs);
  const history=JSON.parse(localStorage.getItem("fb_strength_history")||"{}");

  if(entries.length===0){
    return(
      <div style={s.content}>
        <Eyebrow label="Strength Progress"/>
        <h2 style={s.sectionTitle}>Strength Charts</h2>
        <div style={{...s.card,textAlign:"center",padding:"2.5rem"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>📈</div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem"}}>No data yet</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>Complete workouts and log weights to see your strength progress over time.</div>
        </div>
      </div>
    );
  }

  return(
    <div style={s.content}>
      <Eyebrow label="Strength Progress"/>
      <h2 style={s.sectionTitle}>Strength Charts</h2>
      <p style={s.sectionSub}>Your all-time personal bests per exercise.</p>
      {entries.map((pb,i)=>{
        const W=300,H=80,PAD=8;
        const hist=history[pb.name.toLowerCase().replace(/\s+/g,"_")]||[{weight:pb.weight,date:pb.date}];
        const vals=hist.map(h=>h.weight);
        if(vals.length<2)return(
          <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
            <div style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(204,255,0,0.1)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{fontSize:"1.1rem"}}>🏆</span></div>
            <div style={{flex:1}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white}}>{pb.name}</div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>Best: {pb.weight}kg × {pb.reps} · Est 1RM: {pb.est}kg</div>
            </div>
            <span style={s.tag}>{pb.est}kg 1RM</span>
          </div>
        );
        const min=Math.min(...vals)-5,max=Math.max(...vals)+5;
        const pts=vals.map((v,j)=>{const x=PAD+(j/(vals.length-1))*(W-PAD*2);const y=H-PAD-((v-min)/(max-min||1))*(H-PAD*2);return[x,y];});
        const path="M"+pts.map(([x,y])=>`${x},${y}`).join(" L");
        return(
          <div key={i} style={s.card}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white}}>{pb.name}</div>
              <span style={s.tag}>{pb.est}kg 1RM</span>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto",display:"block",marginBottom:"0.4rem"}}>
              <defs><linearGradient id={`g${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={C.lime} stopOpacity="0.2"/><stop offset="100%" stopColor={C.lime} stopOpacity="0"/></linearGradient></defs>
              <path d={path+" L"+pts[pts.length-1][0]+","+H+" L"+pts[0][0]+","+H+" Z"} fill={`url(#g${i})`}/>
              <path d={path} fill="none" stroke={C.lime} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              {pts.map(([x,y],j)=><circle key={j} cx={x} cy={y} r="3" fill={C.lime}/>)}
            </svg>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>Best: {pb.weight}kg × {pb.reps} reps · Set {new Date(pb.date).toLocaleDateString("en-AU",{month:"short",day:"numeric"})}</div>
          </div>
        );
      })}
    </div>
  );
}

// ─── PROGRESS PHOTOS ─────────────────────────────────────────────────────────
function ProgressPhotos(){
  const[photos,setPhotos]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_progress_photos")||"[]");}catch{return[];}});
  const[uploading,setUploading]=useState(false);
  const fileRef=useRef(null);

  function handleFile(e){
    const file=e.target.files?.[0];
    if(!file)return;
    setUploading(true);
    const reader=new FileReader();
    reader.onload=(ev)=>{
      const newPhotos=[...photos,{id:Date.now(),data:ev.target.result,date:new Date().toISOString(),label:new Date().toLocaleDateString("en-AU",{month:"long",year:"numeric"})}];
      setPhotos(newPhotos);
      try{localStorage.setItem("fb_progress_photos",JSON.stringify(newPhotos));}catch(e){alert("Photo too large for storage. Try a smaller image.");}
      setUploading(false);
    };
    reader.readAsDataURL(file);
  }

  function deletePhoto(id){
    const updated=photos.filter(p=>p.id!==id);
    setPhotos(updated);
    localStorage.setItem("fb_progress_photos",JSON.stringify(updated));
  }

  return(
    <div style={s.content}>
      <Eyebrow label="Visual Progress"/>
      <h2 style={s.sectionTitle}>Progress Photos</h2>
      <p style={s.sectionSub}>The most powerful way to see your transformation.</p>

      <input ref={fileRef} type="file" accept="image/*" capture="environment" style={{display:"none"}} onChange={handleFile}/>

      <button onClick={()=>fileRef.current?.click()} disabled={uploading} style={{...s.btn,width:"100%",padding:"1rem",borderRadius:"14px",marginBottom:"0.75rem"}}>
        {uploading?"Saving...":"📸 Add Progress Photo"}
      </button>

      {photos.length===0?(
        <div style={{...s.card,textAlign:"center",padding:"2.5rem"}}>
          <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>📸</div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem"}}>No photos yet</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",lineHeight:1.5}}>Take one monthly. Seeing your transformation is the most powerful motivator there is.</div>
        </div>
      ):(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
          {photos.map((photo,i)=>(
            <div key={photo.id} style={{...s.card,padding:"0.6rem",marginBottom:0,position:"relative"}}>
              <img src={photo.data} alt="Progress" style={{width:"100%",borderRadius:"12px",display:"block",marginBottom:"0.4rem",aspectRatio:"3/4",objectFit:"cover"}}/>
              <div style={{fontSize:"0.72rem",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.2rem"}}>{photo.label}</div>
              <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{new Date(photo.date).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}</div>
              <button onClick={()=>deletePhoto(photo.id)} style={{position:"absolute",top:"0.8rem",right:"0.8rem",background:"rgba(0,0,0,0.6)",border:"none",borderRadius:"50%",width:"24px",height:"24px",color:"rgba(255,255,255,0.6)",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
            </div>
          ))}
        </div>
      )}

      {photos.length>0&&(
        <div style={{...s.card,marginTop:"0.75rem",background:"rgba(204,255,0,0.05)",borderColor:"rgba(204,255,0,0.15)"}}>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>💡 <strong style={{color:C.white}}>Tip:</strong> Take photos monthly, same time of day, same lighting. Front, side, and back views give the best comparison.</div>
        </div>
      )}
    </div>
  );
}

// ─── WORKOUT SCHEDULE ────────────────────────────────────────────────────────
function WorkoutSchedule(){
  const DAYS=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const[selected,setSelected]=useState(()=>{
    try{return JSON.parse(localStorage.getItem("fb_training_days")||"[1,3,5]");}catch{return[1,3,5];}
  });
  function toggle(i){setSelected(p=>p.includes(i)?p.filter(d=>d!==i):[...p,i].sort());}
  function save(){localStorage.setItem("fb_training_days",JSON.stringify(selected));if(onSave)onSave(selected);}
  const nextTraining=DAYS.find((_,i)=>{
    const today=new Date().getDay();
    for(let j=1;j<=7;j++){if(selected.includes((today+j)%7))return true;}
    return false;
  });
  const daysUntilNext=(()=>{
    const today=new Date().getDay();
    for(let j=1;j<=7;j++){if(selected.includes((today+j)%7))return j;}
    return null;
  })();

  return(
    <div style={s.content}>
      <Eyebrow label="Training Schedule"/>
      <h2 style={s.sectionTitle}>Training Days</h2>
      <p style={s.sectionSub}>Choose which days you train each week.</p>

      {daysUntilNext&&(
        <div style={{...s.cardLime,marginBottom:"0.75rem",textAlign:"center"}}>
          <div style={{fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>Next Session</div>
          <div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{DAYS[(new Date().getDay()+daysUntilNext)%7]}</div>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif"}}>in {daysUntilNext} {daysUntilNext===1?"day":"days"}</div>
        </div>
      )}

      <div style={s.card}>
        <label style={{...s.label,color:C.white,marginBottom:"0.75rem",display:"block"}}>Tap to select your training days</label>
        <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"4px",marginBottom:"1rem"}}>
          {DAYS.map((day,i)=>(
            <div key={i} onClick={()=>toggle(i)} style={{aspectRatio:"1",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"2px",background:selected.includes(i)?"rgba(204,255,0,0.85)":"rgba(255,255,255,0.05)",border:`1px solid ${selected.includes(i)?C.lime:"rgba(255,255,255,0.08)"}`,cursor:"pointer",transition:"all 0.2s",boxShadow:selected.includes(i)?"0 0 12px rgba(204,255,0,0.3)":"none"}}>
              <span style={{fontSize:"0.6rem",fontWeight:800,color:selected.includes(i)?"#000":"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>{day.slice(0,1)}</span>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"1rem"}}>
          {selected.map(i=><span key={i} style={s.tag}>{DAYS[i].slice(0,3)}</span>)}
        </div>
        <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.75rem"}}>{selected.length} training days · {7-selected.length} rest days per week</div>
        <button onClick={save} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Save Schedule</button>
      </div>
    </div>
  );
}

// ─── REST DAY ────────────────────────────────────────────────────────────────
// ─── CANCEL FLOW ─────────────────────────────────────────────────────────────
function CancelFlow({user,profile}){
  const[show,setShow]=useState(false);
  const[step,setStep]=useState("retain"); // retain | confirm | loading
  const[reason,setReason]=useState("");

  const REASONS=[
    {id:"price",label:"It's too expensive",offer:"We get it. Switch to our Annual plan — just $10/month billed yearly. That's 47% off."},
    {id:"results",label:"I'm not seeing results",offer:"Let our AI coach build you a new programme today. Results take 6-8 weeks — you're closer than you think."},
    {id:"notusing",label:"I don't use it enough",offer:"Set a 5 min daily reminder. Consistency beats intensity every time. Give it one more week."},
    {id:"complex",label:"It's too complicated",offer:"Start with just the workout tab. One feature. One habit. That's all it takes to begin."},
    {id:"other",label:"Something else",offer:"We'd love to fix whatever's wrong. Message us on WhatsApp and we'll sort it out personally."},
  ];

  async function handleCancel(){
    setStep("loading");
    try{
      const res=await fetch("/api/cancel",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:user.email})});
      const data=await res.json();
      if(data.url){
        window.location.href=data.url;
      }else{
        // Fallback to WhatsApp
        window.open(`https://wa.me/61493434408?text=Hi%20Joel%2C%20I%27d%20like%20to%20cancel%20my%20ForgeBody%20subscription%20please.%20My%20email%20is%20${encodeURIComponent(user.email)}`,"_blank");
        setShow(false);
      }
    }catch(e){
      window.open(`https://wa.me/61493434408?text=Hi%20Joel%2C%20I%27d%20like%20to%20cancel%20my%20ForgeBody%20subscription%20please.%20My%20email%20is%20${encodeURIComponent(user.email)}`,"_blank");
      setShow(false);
    }
  }

  const selectedReason=REASONS.find(r=>r.id===reason);

  return(
    <>
      <button onClick={()=>{setShow(true);setStep("retain");setReason("");}} style={{display:"block",width:"100%",textAlign:"center",color:"rgba(255,100,100,0.5)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif",textDecoration:"underline",cursor:"pointer",background:"transparent",border:"none",padding:"0.5rem 0"}}>
        Cancel subscription
      </button>

      {show&&(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
          <div style={{width:"100%",maxWidth:"400px"}}>

            {step==="retain"&&(
              <div style={{background:"rgba(255,255,255,0.07)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px",padding:"1.75rem",position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(25px)",pointerEvents:"none"}}/>

                <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>😢</div>
                  <div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1}}>Before you go...</div>
                  <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>Help us understand why. We might be able to fix it.</div>
                </div>

                <div style={{marginBottom:"1rem"}}>
                  {REASONS.map(r=>(
                    <div key={r.id} onClick={()=>setReason(r.id)} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.75rem",marginBottom:"0.4rem",borderRadius:"12px",border:`1px solid ${reason===r.id?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.08)"}`,background:reason===r.id?"rgba(204,255,0,0.08)":"rgba(255,255,255,0.03)",cursor:"pointer",transition:"all 0.15s"}}>
                      <div style={{width:"18px",height:"18px",borderRadius:"50%",border:`2px solid ${reason===r.id?C.lime:"rgba(255,255,255,0.2)"}`,background:reason===r.id?C.lime:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {reason===r.id&&<div style={{width:"6px",height:"6px",borderRadius:"50%",background:"#000"}}/>}
                      </div>
                      <span style={{fontSize:"0.88rem",color:reason===r.id?C.white:"rgba(255,255,255,0.6)",fontFamily:"'Barlow',sans-serif"}}>{r.label}</span>
                    </div>
                  ))}
                </div>

                {selectedReason&&(
                  <div style={{background:"rgba(204,255,0,0.08)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"12px",padding:"1rem",marginBottom:"1rem",animation:"fadeUp 0.2s ease"}}>
                    <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.35rem"}}>💡 Our offer</div>
                    <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.75)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>{selectedReason.offer}</div>
                  </div>
                )}

                <button onClick={()=>setStep("confirm")} style={{width:"100%",padding:"0.9rem",background:"rgba(255,60,60,0.1)",border:"1px solid rgba(255,60,60,0.2)",borderRadius:"12px",color:"rgba(255,100,100,0.8)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer",marginBottom:"0.5rem"}}>
                  I still want to cancel
                </button>
                <button onClick={()=>setShow(false)} style={{...s.btn,width:"100%",padding:"0.9rem"}}>
                  Keep My Subscription 🔥
                </button>
              </div>
            )}

            {step==="confirm"&&(
              <div style={{background:"rgba(255,255,255,0.07)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px",padding:"1.75rem"}}>
                <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>⚠️</div>
                  <div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1}}>Are you sure?</div>
                  <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>You'll lose access to all your workouts, meal plans, progress data and AI coaching.</div>
                </div>

                <div style={{background:"rgba(255,255,255,0.04)",borderRadius:"12px",padding:"1rem",marginBottom:"1.25rem"}}>
                  {[
                    "All your personal bests",
                    "Your workout history",
                    "Your progress photos",
                    "Your meal plans",
                    "AI coach access",
                  ].map((item,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.3rem 0",borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
                      <span style={{color:"rgba(255,60,60,0.7)",fontSize:"0.85rem"}}>✕</span>
                      <span style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif"}}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={handleCancel} style={{width:"100%",padding:"0.9rem",background:"rgba(255,60,60,0.1)",border:"1px solid rgba(255,60,60,0.2)",borderRadius:"12px",color:"rgba(255,100,100,0.8)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer",marginBottom:"0.5rem"}}>
                  Yes, Cancel My Subscription
                </button>
                <button onClick={()=>setStep("retain")} style={{...s.btn,width:"100%",padding:"0.9rem"}}>
                  Keep My Subscription 🔥
                </button>
              </div>
            )}

            {step==="loading"&&(
              <div style={{background:"rgba(255,255,255,0.07)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px",padding:"2rem",textAlign:"center"}}>
                <LoadingDots/>
                <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",marginTop:"1rem"}}>Opening cancellation portal...</div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
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
    {id:"pbs",label:"Personal Bests",desc:"Your all-time max lifts",icon:"🏆"},
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
        <button onClick={onSignOut} style={{...s.btnGlass,width:"100%",color:"rgba(255,100,100,0.8)",borderColor:"rgba(255,100,100,0.15)"}}>Sign Out</button>
      </div>

      {/* Subscription management */}
      <div style={s.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>Subscription</div>
          <span style={s.tag}>Active</span>
        </div>
        <div style={{background:"rgba(204,255,0,0.07)",border:"1px solid rgba(204,255,0,0.18)",borderRadius:"10px",padding:"0.85rem",marginBottom:"0.75rem"}}>
          <div style={{fontSize:"1rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem"}}>
            {profile?.plan==="lifetime"?"Lifetime Access":profile?.plan==="annual"?"Annual Plan":profile?.plan==="sixmonth"?"6 Month Bundle":"Monthly Plan"}
          </div>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif"}}>
            {profile?.plan==="lifetime"?"$199 · One time payment · Never expires":profile?.plan==="annual"?"$120/year · Billed annually":profile?.plan==="sixmonth"?"$84 · Billed every 6 months":"$19/month · Billed monthly"}
          </div>
          {profile?.subscribed_at&&<div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",marginTop:"0.25rem"}}>Started {new Date(profile.subscribed_at).toLocaleDateString("en-AU",{month:"long",day:"numeric",year:"numeric"})}</div>}
        </div>

        {/* Upgrade options - only show if not lifetime */}
        {profile?.plan!=="lifetime"&&(
          <div style={{marginBottom:"0.75rem"}}>
            <div style={{...s.label,marginBottom:"0.5rem"}}>Upgrade & Save</div>
            <div style={{display:"flex",flexDirection:"column",gap:"0.4rem"}}>
              {profile?.plan==="monthly"&&(
                <>
                  <button onClick={()=>window.open(`${STRIPE_LINKS.sixmonth}?prefilled_email=${encodeURIComponent(user.email)}`,"_blank")} style={{...s.btnGlass,width:"100%",fontSize:"0.82rem",padding:"0.7rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span>6 Month Bundle</span><span style={{color:C.lime,fontWeight:900}}>$84 · Save $30</span>
                  </button>
                  <button onClick={()=>window.open(`${STRIPE_LINKS.annual}?prefilled_email=${encodeURIComponent(user.email)}`,"_blank")} style={{...s.btnGlass,width:"100%",fontSize:"0.82rem",padding:"0.7rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span>Annual Plan</span><span style={{color:C.lime,fontWeight:900}}>$120 · Save $108</span>
                  </button>
                </>
              )}
              {(profile?.plan==="monthly"||profile?.plan==="sixmonth"||profile?.plan==="annual")&&(
                <button onClick={()=>window.open(`${STRIPE_LINKS.lifetime}?prefilled_email=${encodeURIComponent(user.email)}`,"_blank")} style={{...s.btn,width:"100%",fontSize:"0.82rem",padding:"0.7rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span>🔥 Lifetime Access</span><span style={{fontWeight:900}}>$199 · Never pay again</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Cancel with retention popup */}
        {profile?.plan!=="lifetime"&&<CancelFlow user={user} profile={profile}/>}
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
            {label:"Personal Bests",icon:"🏆",id:"pbs"},
            {label:"Progress Photos",icon:"📸",id:"photos"},
            {label:"Rest Day & Recovery",icon:"😴",id:"restday"},
            {label:"Training Schedule",icon:"📅",id:"schedule"},
            {label:"Badges & Achievements",icon:"🎖️",id:"badges"},
            {label:"Refer a Friend",icon:"🎁",id:"referral"},
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
            <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.75rem"}}>
              ForgeBody {profile?.plan==="lifetime"?"Lifetime — $199 one time":profile?.plan==="annual"?"Annual — $120/year":profile?.plan==="sixmonth"?"6 Month — $84":profile?.plan==="monthly"?"Monthly — $19/month":"Pro"} · Active
            </div>
            <a href="https://wa.me/61493434408?text=Hi%20Joel%2C%20I%20need%20some%20help%20with%20ForgeBody%20please!" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"0.6rem",width:"100%",padding:"0.6rem 0",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.04em",textDecoration:"none"}}><span style={{fontSize:"1rem"}}>💬</span>Support via WhatsApp</a>
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
  const[installPrompt,setInstallPrompt]=useState(null);
  const[showInstallBanner,setShowInstallBanner]=useState(false);
  const[logoTaps,setLogoTaps]=useState(0);

  useEffect(()=>{
    window.addEventListener('beforeinstallprompt',(e)=>{
      e.preventDefault();
      setInstallPrompt(e);
      // Show banner after 30 seconds if not dismissed
      setTimeout(()=>setShowInstallBanner(true),30000);
    });
  },[]);

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

  // Mark payment=success in localStorage so auth listener can handle it
  useEffect(()=>{
    const params=new URLSearchParams(window.location.search);
    if(params.get("payment")==="success"||params.get("session_id")){
      localStorage.setItem("fb_payment_success","true");
      setShowSuccess(true);
      window.history.replaceState({},"",window.location.pathname);
    }
  },[]);

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{
      setSession(data.session);
      if(data.session){
        // If returning from payment, save subscription first
        if(localStorage.getItem("fb_payment_success")==="true"){
          saveSubscription(data.session.user.id).then(()=>checkProfile(data.session.user));
        } else {
          checkProfile(data.session.user);
        }
      } else {
        if(localStorage.getItem("fb_dev_bypass")==="true")setPage("signin");
        else setPage("landing");
      }
      setLoading(false);
    });
    const{data:listener}=supabase.auth.onAuthStateChange((_e,sess)=>{
      if(sess){
        setSession(sess);
        if(localStorage.getItem("fb_payment_success")==="true"){
          saveSubscription(sess.user.id).then(()=>checkProfile(sess.user));
        } else {
          checkProfile(sess.user);
        }
      } else {
        setSession(null);setPage("landing");
      }
    });
    return()=>listener.subscription.unsubscribe();
  },[]);

  async function saveSubscription(uid){
    const plan=localStorage.getItem("fb_pending_plan")||"monthly";
    // Update existing row
    const{error}=await supabase.from("profiles")
      .update({subscribed:true,plan,subscribed_at:new Date().toISOString()})
      .eq("user_id",uid);
    if(error){
      // No row yet — insert
      await supabase.from("profiles").insert({
        user_id:uid,subscribed:true,plan,
        subscribed_at:new Date().toISOString(),onboarded:false
      });
    }
    localStorage.removeItem("fb_payment_success");
    localStorage.removeItem("fb_pending_plan");
    localStorage.removeItem("fb_pending_user");
    setShowSubscription(false);
  }

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
        <PaymentSuccess
          onContinue={()=>{setShowSuccess(false);if(session)setPage("app");else setPage("signin");}}
          onAlreadyPaid={async()=>{
            if(session){
              await saveSubscription(session.user.id);
              const{data}=await supabase.from("profiles").select("*").eq("user_id",session.user.id).single();
              if(data)setProfile(data);
              setShowSubscription(false);
            }
            setShowSuccess(false);
            setPage("app");
          }}
        />
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

          {/* PWA install banner */}
          {showInstallBanner&&installPrompt&&(
            <div style={{position:"fixed",bottom:"80px",left:"1rem",right:"1rem",background:"rgba(10,10,10,0.95)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"16px",padding:"1rem",zIndex:150,backdropFilter:"blur(20px)",display:"flex",alignItems:"center",gap:"0.75rem",boxShadow:"0 8px 32px rgba(0,0,0,0.4)"}}>
              <div style={{width:"40px",height:"40px",borderRadius:"10px",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem"}}>💪</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white,marginBottom:"0.15rem"}}>Add to Home Screen</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>Install ForgeBody for the best experience</div>
              </div>
              <div style={{display:"flex",gap:"0.4rem",flexShrink:0}}>
                <button onClick={()=>setShowInstallBanner(false)} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:"1.2rem",padding:"0.25rem"}}>×</button>
                <button onClick={async()=>{if(installPrompt){await installPrompt.prompt();setShowInstallBanner(false);}}} style={{...s.btn,padding:"0.45rem 0.85rem",fontSize:"0.75rem",borderRadius:"8px"}}>Install</button>
              </div>
            </div>
          )}

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
          {tab==="train"&&!sidePanel&&<TrainScreen onStartWorkout={startWorkout} onSetupComplete={()=>{}} onNavigate={navigate}/>}
          {tab==="profile"&&!sidePanel&&<ProfileTab user={session.user} profile={profile} onSignOut={signOut} onNavigate={navigate} onUpdateSettings={()=>{setTab("train");setSidePanel(null);}}/>}

          {sidePanel?.screen==="pbs"&&<PBHistory/>}
          {sidePanel?.screen==="restday"&&<RestDayContent/>}
          {sidePanel?.screen==="photos"&&<ProgressPhotos/>}
          {sidePanel?.screen==="schedule"&&<WorkoutSchedule/>}
          {sidePanel?.screen==="badges"&&<BadgesScreen/>}
          {sidePanel?.screen==="referral"&&<ReferralScreen user={session.user}/>}
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
