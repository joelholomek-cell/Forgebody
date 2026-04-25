import { useState, useEffect, useRef } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const C = {
  black:"#0a0a0a", card:"#111111", cardBorder:"#1e1e1e",
  lime:"#CCFF00", white:"#FFFFFF", muted:"#555555", mutedLight:"#888888",
};

const s = {
  app:{ minHeight:"100vh", background:C.black, color:C.white, fontFamily:"'Barlow Condensed','Barlow',sans-serif", paddingBottom:"70px" },
  nav:{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0.85rem 1.25rem", borderBottom:`1px solid ${C.cardBorder}`, background:C.black, position:"sticky", top:0, zIndex:100 },
  logo:{ fontSize:"1.3rem", fontWeight:900, letterSpacing:"0.05em", color:C.white, textTransform:"uppercase" },
  logoSlash:{ color:C.lime },
  bottomNav:{ position:"fixed", bottom:0, left:0, right:0, background:C.card, borderTop:`1px solid ${C.cardBorder}`, display:"flex", zIndex:100, height:"66px" },
  navBtn:{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"3px", border:"none", background:"transparent", cursor:"pointer", padding:"8px 0", fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.6rem", fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase" },
  content:{ maxWidth:"600px", margin:"0 auto", padding:"1.25rem" },
  card:{ background:C.card, border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"1.25rem", marginBottom:"0.75rem" },
  label:{ fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.muted, marginBottom:"0.4rem", display:"block", fontFamily:"'Barlow Condensed',sans-serif" },
  input:{ width:"100%", background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.7rem 0.9rem", color:C.white, fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem" },
  select:{ width:"100%", background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.7rem 0.9rem", color:C.white, fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem", cursor:"pointer" },
  btn:{ background:C.lime, color:C.black, border:"none", borderRadius:"6px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase" },
  btnOutline:{ background:"transparent", color:C.white, border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase" },
  btnSm:{ background:C.lime, color:C.black, border:"none", borderRadius:"4px", padding:"0.45rem 0.9rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.78rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase" },
  tag:{ display:"inline-block", background:`${C.lime}18`, color:C.lime, borderRadius:"3px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  tagGray:{ display:"inline-block", background:`#ffffff10`, color:C.mutedLight, borderRadius:"3px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  sectionTitle:{ fontSize:"1.6rem", fontWeight:900, marginBottom:"0.2rem", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"-0.01em" },
  sectionSub:{ color:C.mutedLight, marginBottom:"1.25rem", fontFamily:"'Barlow',sans-serif", fontSize:"0.88rem" },
  eyebrow:{ fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.lime, marginBottom:"0.35rem", display:"flex", alignItems:"center", gap:"6px", fontFamily:"'Barlow Condensed',sans-serif" },
  dot:{ width:"5px", height:"5px", borderRadius:"50%", background:C.lime, display:"inline-block", flexShrink:0 },
  statGrid:{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"0.6rem", marginBottom:"0.75rem" },
  statCard:{ background:"#0f0f0f", border:`1px solid ${C.cardBorder}`, borderRadius:"6px", padding:"1rem", textAlign:"center" },
  statNum:{ fontSize:"2rem", fontWeight:900, color:C.lime, letterSpacing:"-0.02em", fontFamily:"'Barlow Condensed',sans-serif" },
  statLabel:{ fontSize:"0.62rem", color:C.muted, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"2px", fontFamily:"'Barlow Condensed',sans-serif" },
  progressBar:{ height:"5px", background:C.cardBorder, borderRadius:"3px", overflow:"hidden", marginTop:"0.4rem" },
  progressFill:{ height:"100%", background:C.lime, borderRadius:"3px", transition:"width 0.8s ease" },
  loadingDot:{ display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:C.lime, margin:"0 3px", animation:"bounce 1.2s infinite" },
  divider:{ display:"flex", alignItems:"center", gap:"0.75rem", margin:"1rem 0", color:C.muted, fontSize:"0.75rem", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"0.1em", textTransform:"uppercase" },
  dividerLine:{ flex:1, height:"1px", background:C.cardBorder },
  successBanner:{ background:"#0d1a00", border:`1px solid ${C.lime}44`, borderRadius:"6px", padding:"0.9rem 1.1rem", color:C.lime, fontSize:"0.9rem", marginBottom:"0.75rem" },
};

// ─── MEAL DATABASE 62 meals ──────────────────────────────────────────────────
const MEALS = [
  {id:1,name:"Scrambled eggs & sourdough",cal:420,p:28,c:38,f:14,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:2,name:"Greek yogurt parfait",cal:340,p:22,c:42,f:8,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:3,name:"Oatmeal with banana & peanut butter",cal:480,p:18,c:68,f:14,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
  {id:4,name:"Whey protein smoothie",cal:380,p:35,c:40,f:6,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:5,name:"Avocado toast with poached eggs",cal:520,p:24,c:44,f:26,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:6,name:"Cottage cheese & mixed berries",cal:280,p:26,c:28,f:4,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:7,name:"Protein pancakes with maple syrup",cal:440,p:32,c:48,f:10,meal:"breakfast",diet:["standard","vegetarian"]},
  {id:8,name:"Overnight oats with chia seeds",cal:420,p:20,c:60,f:10,meal:"breakfast",diet:["standard","vegetarian","vegan"]},
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

// ─── FOOD DATABASE for macro tracker ────────────────────────────────────────
const FOODS = [
  {name:"Chicken breast (100g)",cal:165,p:31,c:0,f:3.6},
  {name:"Salmon (100g)",cal:208,p:20,c:0,f:13},
  {name:"Egg (1 large)",cal:72,p:6,c:0.4,f:5},
  {name:"Egg white (1 large)",cal:17,p:3.6,c:0.2,f:0},
  {name:"Greek yogurt (100g)",cal:97,p:9,c:3.6,f:5},
  {name:"Cottage cheese (100g)",cal:98,p:11,c:3.4,f:4.3},
  {name:"Tuna in water (100g)",cal:116,p:26,c:0,f:1},
  {name:"Beef mince 5% fat (100g)",cal:137,p:21,c:0,f:5},
  {name:"Turkey breast (100g)",cal:135,p:30,c:0,f:1},
  {name:"Whey protein (1 scoop 30g)",cal:120,p:24,c:3,f:2},
  {name:"White rice (100g cooked)",cal:130,p:2.7,c:28,f:0.3},
  {name:"Brown rice (100g cooked)",cal:112,p:2.6,c:23,f:0.9},
  {name:"Sweet potato (100g)",cal:86,p:1.6,c:20,f:0.1},
  {name:"Oats (100g dry)",cal:389,p:17,c:66,f:7},
  {name:"Bread white (1 slice)",cal:79,p:2.7,c:15,f:1},
  {name:"Pasta (100g cooked)",cal:131,p:5,c:25,f:1.1},
  {name:"Banana (medium)",cal:105,p:1.3,c:27,f:0.4},
  {name:"Apple (medium)",cal:95,p:0.5,c:25,f:0.3},
  {name:"Broccoli (100g)",cal:34,p:2.8,c:7,f:0.4},
  {name:"Spinach (100g)",cal:23,p:2.9,c:3.6,f:0.4},
  {name:"Avocado (half)",cal:120,p:1.5,c:6,f:11},
  {name:"Almond butter (1 tbsp)",cal:98,p:3.4,c:3,f:9},
  {name:"Olive oil (1 tbsp)",cal:119,p:0,c:0,f:13.5},
  {name:"Milk whole (100ml)",cal:61,p:3.2,c:4.8,f:3.3},
  {name:"Cheddar cheese (30g)",cal:120,p:7.4,c:0.1,f:10},
  {name:"Protein bar (generic)",cal:220,p:20,c:24,f:6},
  {name:"Mixed nuts (30g)",cal:180,p:5,c:6,f:16},
];

// ─── WORKOUT DATABASE ────────────────────────────────────────────────────────
const EXERCISES = {
  chest:[
    {name:"Barbell Bench Press",sets:"4",reps:"6-8",rest:"2-3 min",cue:"Chest to muscle failure"},
    {name:"Incline Dumbbell Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Slight arch, elbows 45°"},
    {name:"Cable Chest Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Full stretch at bottom"},
    {name:"Dips (chest lean)",sets:"3",reps:"10-12",rest:"90 sec",cue:"Lean forward, elbows wide"},
    {name:"Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Full range, chest touches floor"},
    {name:"Pec Deck Machine",sets:"3",reps:"12-15",rest:"60 sec",cue:"Squeeze hard at top"},
  ],
  back:[
    {name:"Deadlift",sets:"4",reps:"4-6",rest:"3 min",cue:"Neutral spine, drive hips forward"},
    {name:"Barbell Row",sets:"4",reps:"6-8",rest:"2 min",cue:"Pull to lower chest, brace core"},
    {name:"Pull-Up / Lat Pulldown",sets:"4",reps:"8-10",rest:"90 sec",cue:"Depress scapula first"},
    {name:"Seated Cable Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Elbows to sides, squeeze lats"},
    {name:"Single-Arm Dumbbell Row",sets:"3",reps:"10-12",rest:"60 sec",cue:"Keep hips square"},
    {name:"Face Pull",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pull to forehead, rotate externally"},
  ],
  shoulders:[
    {name:"Overhead Press (Barbell)",sets:"4",reps:"6-8",rest:"2 min",cue:"Bar path over forehead"},
    {name:"Dumbbell Lateral Raise",sets:"4",reps:"12-15",rest:"60 sec",cue:"Lead with elbows, slight lean"},
    {name:"Arnold Press",sets:"3",reps:"10-12",rest:"90 sec",cue:"Full rotation throughout"},
    {name:"Rear Delt Fly",sets:"3",reps:"15-20",rest:"60 sec",cue:"Slight bend in elbows"},
    {name:"Upright Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Elbows above wrists"},
    {name:"Cable Lateral Raise",sets:"3",reps:"15-20",rest:"45 sec",cue:"Constant tension"},
  ],
  biceps:[
    {name:"Barbell Curl",sets:"4",reps:"8-10",rest:"90 sec",cue:"No elbow sway, full ROM"},
    {name:"Hammer Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Neutral grip, control eccentric"},
    {name:"Incline Dumbbell Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at bottom"},
    {name:"Cable Curl",sets:"3",reps:"12-15",rest:"60 sec",cue:"Constant tension"},
    {name:"Preacher Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Don't use momentum"},
  ],
  triceps:[
    {name:"Close-Grip Bench Press",sets:"4",reps:"8-10",rest:"90 sec",cue:"Elbows tucked, full extension"},
    {name:"Tricep Pushdown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Lock elbows at sides"},
    {name:"Overhead Tricep Extension",sets:"3",reps:"10-12",rest:"75 sec",cue:"Full stretch at top"},
    {name:"Skull Crusher",sets:"3",reps:"10-12",rest:"75 sec",cue:"Lower to forehead slowly"},
    {name:"Diamond Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hands form diamond shape"},
  ],
  quads:[
    {name:"Barbell Back Squat",sets:"4",reps:"6-8",rest:"3 min",cue:"Break parallel, knees out"},
    {name:"Leg Press",sets:"4",reps:"10-12",rest:"2 min",cue:"Full range, don't lock out"},
    {name:"Hack Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"High foot placement for quads"},
    {name:"Leg Extension",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pause at top, slow eccentric"},
    {name:"Bulgarian Split Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"Vertical torso"},
    {name:"Walking Lunges",sets:"3",reps:"12 each",rest:"90 sec",cue:"Long stride, knee doesn't pass toe"},
  ],
  hamstrings:[
    {name:"Romanian Deadlift",sets:"4",reps:"8-10",rest:"2 min",cue:"Push hips back, feel stretch"},
    {name:"Lying Leg Curl",sets:"4",reps:"10-12",rest:"90 sec",cue:"Curl to glutes, slow lower"},
    {name:"Seated Leg Curl",sets:"3",reps:"12-15",rest:"75 sec",cue:"Full ROM"},
    {name:"Good Morning",sets:"3",reps:"10-12",rest:"90 sec",cue:"Slight knee bend, hinge from hip"},
    {name:"Nordic Curl",sets:"3",reps:"6-8",rest:"2 min",cue:"Control the descent"},
  ],
  glutes:[
    {name:"Hip Thrust",sets:"4",reps:"10-12",rest:"90 sec",cue:"Drive through heel, squeeze at top"},
    {name:"Glute Kickback",sets:"3",reps:"15-20",rest:"60 sec",cue:"Don't rotate hips"},
    {name:"Cable Pull-Through",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hinge, not squat"},
    {name:"Sumo Deadlift",sets:"4",reps:"6-8",rest:"2 min",cue:"Wide stance, toes out"},
    {name:"Step-Up",sets:"3",reps:"12 each",rest:"75 sec",cue:"Drive through front heel"},
  ],
  calves:[
    {name:"Standing Calf Raise",sets:"4",reps:"15-20",rest:"60 sec",cue:"Full ROM, pause at top"},
    {name:"Seated Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Different angle targets soleus"},
    {name:"Single-Leg Calf Raise",sets:"3",reps:"12-15 each",rest:"45 sec",cue:"Use wall for balance"},
  ],
  core:[
    {name:"Plank",sets:"3",reps:"45-60 sec",rest:"45 sec",cue:"Neutral spine, squeeze glutes"},
    {name:"Cable Crunch",sets:"3",reps:"15-20",rest:"60 sec",cue:"Crunch abs, don't pull neck"},
    {name:"Hanging Leg Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"No swinging, control lower"},
    {name:"Ab Wheel Rollout",sets:"3",reps:"10-12",rest:"75 sec",cue:"Brace core throughout"},
    {name:"Russian Twist",sets:"3",reps:"20 total",rest:"45 sec",cue:"Rotate from torso"},
    {name:"Decline Sit-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Hands on chest"},
  ],
  hiit:[
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
  ppl:{name:"Push / Pull / Legs",days3:[{label:"Push",muscles:["chest","shoulders","triceps"]},{label:"Pull",muscles:["back","biceps"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]}],days6:[{label:"Push A",muscles:["chest","shoulders","triceps"]},{label:"Pull A",muscles:["back","biceps"]},{label:"Legs A",muscles:["quads","hamstrings","glutes","calves"]},{label:"Push B",muscles:["chest","shoulders","triceps"]},{label:"Pull B",muscles:["back","biceps"]},{label:"Legs B",muscles:["quads","hamstrings","glutes","calves"]}]},
  upper_lower:{name:"Upper / Lower",days4:[{label:"Upper A",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower A",muscles:["quads","hamstrings","glutes","calves","core"]},{label:"Upper B",muscles:["chest","back","shoulders","biceps","triceps"]},{label:"Lower B",muscles:["quads","hamstrings","glutes","calves","core"]}]},
  muscle_group:{name:"Muscle Group",days5:[{label:"Chest & Triceps",muscles:["chest","triceps"]},{label:"Back & Biceps",muscles:["back","biceps"]},{label:"Shoulders",muscles:["shoulders","core"]},{label:"Legs",muscles:["quads","hamstrings","glutes","calves"]},{label:"Arms & Core",muscles:["biceps","triceps","core"]}]},
  full_body:{name:"Full Body / HIIT",days3:[{label:"Full Body A",muscles:["chest","back","quads","core"]},{label:"Full Body B",muscles:["shoulders","hamstrings","glutes","core"]},{label:"HIIT Conditioning",muscles:["hiit"]}]},
};

// ─── SUPPLEMENTS ─────────────────────────────────────────────────────────────
const SUPPLEMENTS = [
  {name:"Creatine Monohydrate",dose:"5g daily",timing:"Any time, consistency matters",goal:["muscle","strength","athletic"],evidence:"A+",desc:"The most researched supplement in existence. Increases strength, power output and muscle mass. No loading phase needed.",cost:"$"},
  {name:"Whey Protein",dose:"25-40g per serve",timing:"Post-workout or between meals",goal:["muscle","strength","fat loss","athletic"],evidence:"A+",desc:"Fast-digesting protein to hit your daily targets. Use if you struggle to get enough protein from food alone.",cost:"$"},
  {name:"Caffeine",dose:"3-6mg per kg bodyweight",timing:"30-60 min pre-workout",goal:["fat loss","athletic","strength","muscle"],evidence:"A",desc:"Proven to improve strength, endurance and fat burning. Coffee works just as well as pre-workout.",cost:"$"},
  {name:"Vitamin D3",dose:"2000-4000 IU daily",timing:"With a meal containing fat",goal:["muscle","strength","fat loss","athletic"],evidence:"A",desc:"Most people are deficient. Critical for testosterone, immune function, mood and bone health. Essential year-round in low-sun climates.",cost:"$"},
  {name:"Omega-3 Fish Oil",dose:"2-3g EPA+DHA daily",timing:"With meals",goal:["muscle","strength","fat loss","athletic"],evidence:"A",desc:"Reduces inflammation, improves recovery, supports heart and brain health. Critical if you don't eat fatty fish 3x/week.",cost:"$"},
  {name:"Magnesium Glycinate",dose:"300-400mg daily",timing:"Before bed",goal:["muscle","strength","fat loss","athletic"],evidence:"B+",desc:"Most people are deficient. Dramatically improves sleep quality, reduces muscle cramps and supports recovery.",cost:"$"},
  {name:"Beta-Alanine",dose:"3.2-6.4g daily",timing:"Pre-workout or split across day",goal:["athletic","strength","muscle"],evidence:"B+",desc:"Buffers lactic acid build-up, improving muscular endurance. Tingling sensation (paraesthesia) is normal and harmless.",cost:"$$"},
  {name:"Citrulline Malate",dose:"6-8g",timing:"30-45 min pre-workout",goal:["muscle","strength","athletic"],evidence:"B+",desc:"Increases nitric oxide, improves blood flow, reduces fatigue and soreness. Better than arginine for pumps.",cost:"$$"},
  {name:"Zinc",dose:"15-30mg daily",timing:"With food, away from iron",goal:["muscle","strength","fat loss"],evidence:"B",desc:"Critical for testosterone production, immune function and protein synthesis. Commonly deficient in athletes.",cost:"$"},
  {name:"Ashwagandha (KSM-66)",dose:"300-600mg daily",timing:"With food, morning or evening",goal:["muscle","strength","fat loss","athletic"],evidence:"B",desc:"Clinically proven to reduce cortisol, increase testosterone, improve strength and reduce anxiety. Use KSM-66 or Sensoril form.",cost:"$$"},
  {name:"Casein Protein",dose:"25-40g",timing:"Before bed",goal:["muscle","strength"],evidence:"A",desc:"Slow-digesting protein that feeds muscles overnight. Ideal if you can't hit protein targets from food.",cost:"$$"},
  {name:"Electrolytes",dose:"1 serving",timing:"During or after training",goal:["athletic","strength","muscle","fat loss"],evidence:"A",desc:"Sodium, potassium and magnesium lost through sweat. Critical for performance, hydration and preventing cramps.",cost:"$"},
];

// ─── HABITS ──────────────────────────────────────────────────────────────────
const DEFAULT_HABITS = [
  {id:"water",label:"Drink 3L water",icon:"💧",category:"nutrition"},
  {id:"protein",label:"Hit protein target",icon:"🥩",category:"nutrition"},
  {id:"sleep",label:"8 hours sleep",icon:"😴",category:"recovery"},
  {id:"steps",label:"10,000 steps",icon:"👟",category:"cardio"},
  {id:"workout",label:"Complete workout",icon:"🏋️",category:"training"},
  {id:"noalcohol",label:"No alcohol",icon:"🚫",category:"mindset"},
  {id:"meditation",label:"10 min meditation",icon:"🧘",category:"mindset"},
  {id:"meal_prep",label:"Meal prepped",icon:"🍱",category:"nutrition"},
  {id:"stretch",label:"Stretch / mobility",icon:"🤸",category:"recovery"},
  {id:"gratitude",label:"Gratitude journal",icon:"📓",category:"mindset"},
];

// ─── UTILS ───────────────────────────────────────────────────────────────────
function LoadingDots() {
  return(
    <div style={{textAlign:"center",padding:"2rem"}}>
      <style>{`@keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}`}</style>
      {[0,1,2].map(i=><span key={i} style={{...s.loadingDot,animationDelay:`${i*0.16}s`}}/>)}
    </div>
  );
}
function Eyebrow({label}){return <div style={s.eyebrow}><span style={s.dot}/>{label}</div>;}
function MacroBar({p,c,f}){
  const total=p+c+f||1;
  return(
    <div style={{display:"flex",height:"6px",borderRadius:"3px",overflow:"hidden",gap:"1px"}}>
      <div style={{flex:p/total,background:"#4ade80"}}/>
      <div style={{flex:c/total,background:"#60a5fa"}}/>
      <div style={{flex:f/total,background:"#f97316"}}/>
    </div>
  );
}

// ─── AUTH ────────────────────────────────────────────────────────────────────
function AuthScreen() {
  const[email,setEmail]=useState("");
  const[sent,setSent]=useState(false);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");

  async function handleMagicLink(){
    if(!email)return;
    setLoading(true);setError("");
    const{error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:window.location.href}});
    setLoading(false);
    if(error)setError(error.message);else setSent(true);
  }
  async function handleGoogle(){
    const{error}=await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.href}});
    if(error)setError(error.message);
  }

  return(
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
              <button onClick={handleMagicLink} disabled={loading} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{loading?"Sending...":"Send Magic Link"}</button>
            </>
          )}
          <p style={{textAlign:"center",color:C.muted,fontSize:"0.72rem",marginTop:"1.25rem",fontFamily:"'Barlow',sans-serif"}}>$19/month · Cancel anytime · PDF buyers: free lifetime access</p>
        </div>
      </div>
    </div>
  );
}

// ─── MEAL PLANNER ────────────────────────────────────────────────────────────
function MealPlanner(){
  const[diet,setDiet]=useState("standard");
  const[targetCal,setTargetCal]=useState(2200);
  const[numMeals,setNumMeals]=useState(4);
  const[plan,setPlan]=useState(null);

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
  }

  return(
    <div style={s.content}>
      <Eyebrow label="62+ Meals"/>
      <h2 style={s.sectionTitle}>Meal Planner</h2>
      <p style={s.sectionSub}>Personalised meals matched to your diet.</p>
      <div style={s.card}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
          <div><label style={s.label}>Target calories</label><input style={s.input} type="number" value={targetCal} onChange={e=>setTargetCal(+e.target.value)}/></div>
          <div><label style={s.label}>Meals per day</label><select style={s.select} value={numMeals} onChange={e=>setNumMeals(+e.target.value)}>{[2,3,4,5,6].map(n=><option key={n} value={n}>{n} meals</option>)}</select></div>
          <div style={{gridColumn:"span 2"}}><label style={s.label}>Diet</label><select style={s.select} value={diet} onChange={e=>setDiet(e.target.value)}>{["standard","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d=><option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}</select></div>
        </div>
        <button onClick={buildPlan} style={{...s.btn,width:"100%",padding:"0.85rem"}}>Build My Meal Plan</button>
      </div>
      {plan&&(
        <>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
            {[{l:"Kcal",v:plan.total.cal},{l:"Protein",v:`${plan.total.p}g`},{l:"Carbs",v:`${plan.total.c}g`},{l:"Fat",v:`${plan.total.f}g`}].map((x,i)=>(
              <div key={i} style={s.statCard}><div style={{...s.statNum,fontSize:"1.3rem"}}>{x.v}</div><div style={s.statLabel}>{x.l}</div></div>
            ))}
          </div>
          {plan.meals.map((meal,i)=>(
            <div key={i} style={{...s.card,marginBottom:"0.5rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.4rem"}}>
                <div><Eyebrow label={meal.slotLabel}/><div style={{fontWeight:800,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.02em"}}>{meal.name}</div></div>
                <div style={{textAlign:"right",flexShrink:0,marginLeft:"0.5rem"}}><div style={{color:C.lime,fontWeight:900,fontSize:"1.1rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{meal.cal}</div><div style={{color:C.muted,fontSize:"0.6rem",fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:"0.08em"}}>KCAL</div></div>
              </div>
              <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"0.4rem"}}>
                <span style={s.tagGray}>P {meal.p}g</span><span style={s.tagGray}>C {meal.c}g</span><span style={s.tagGray}>F {meal.f}g</span>
              </div>
              <MacroBar p={meal.p} c={meal.c} f={meal.f}/>
            </div>
          ))}
          <button onClick={buildPlan} style={{...s.btnOutline,width:"100%",marginTop:"0.25rem"}}>Regenerate Plan</button>
        </>
      )}
    </div>
  );
}

// ─── WORKOUT BUILDER ─────────────────────────────────────────────────────────
function WorkoutBuilder(){
  const[step,setStep]=useState(0);
  const[split,setSplit]=useState("");
  const[days,setDays]=useState("");
  const[level,setLevel]=useState("");
  const[wGoal,setWGoal]=useState("");
  const[program,setProgram]=useState(null);
  const[activeDay,setActiveDay]=useState(0);
  const[expandedEx,setExpandedEx]=useState(null);

  function buildProgram(goal){
    const splitData=SPLITS[split];
    const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k.includes(days))||Object.keys(splitData).filter(k=>k!=="name")[0];
    const template=splitData[daysKey];
    const built=template.map(day=>{
      const exList=[];
      day.muscles.forEach(muscle=>{
        const pool=EXERCISES[muscle]||[];
        const count=goal==="strength"?3:4;
        pool.slice(0,count).forEach(ex=>{
          exList.push({...ex,muscle,sets:level==="beginner"?String(Math.max(2,parseInt(ex.sets)-1)):level==="advanced"?String(parseInt(ex.sets)+1):ex.sets});
        });
      });
      return{...day,exercises:exList};
    });
    setProgram(built);setActiveDay(0);setStep(4);
  }

  if(step===4&&program){
    const day=program[activeDay];
    return(
      <div style={s.content}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <button onClick={()=>{setStep(0);setProgram(null);}} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`}}>← Reset</button>
          <div><Eyebrow label={SPLITS[split]?.name}/><h2 style={{...s.sectionTitle,fontSize:"1.3rem",marginBottom:0}}>{day.label}</h2></div>
        </div>
        <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
          {program.map((d,i)=>(
            <button key={i} onClick={()=>{setActiveDay(i);setExpandedEx(null);}} style={{...s.btnSm,flexShrink:0,background:activeDay===i?C.lime:"transparent",color:activeDay===i?C.black:C.mutedLight,border:activeDay===i?"none":`1px solid ${C.cardBorder}`}}>{d.label}</button>
          ))}
        </div>
        {day.exercises.map((ex,i)=>(
          <div key={i} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer"}} onClick={()=>setExpandedEx(expandedEx===i?null:i)}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <div>
                <div style={{fontWeight:900,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em",marginBottom:"0.3rem"}}>{ex.name}</div>
                <div style={{display:"flex",gap:"0.35rem",flexWrap:"wrap"}}>
                  <span style={s.tag}>{ex.muscle}</span>
                  <span style={s.tagGray}>{ex.sets} sets</span>
                  <span style={s.tagGray}>{ex.reps} reps</span>
                  <span style={s.tagGray}>Rest {ex.rest}</span>
                </div>
              </div>
              <span style={{color:C.lime,fontSize:"1.2rem",marginLeft:"0.5rem"}}>{expandedEx===i?"−":"+"}</span>
            </div>
            {expandedEx===i&&(
              <div style={{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:`1px solid ${C.cardBorder}`,fontSize:"0.85rem",color:C.mutedLight,fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>
                <strong style={{color:C.white}}>Coaching cue:</strong> {ex.cue}
              </div>
            )}
          </div>
        ))}
        <div style={{...s.card,marginTop:"0.5rem",background:`${C.lime}06`,borderLeft:`3px solid ${C.lime}`,borderRadius:"0 6px 6px 0"}}>
          <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Level: {level} · Goal: {wGoal}</p>
          <p style={{color:C.mutedLight,margin:0,lineHeight:1.5,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif"}}>Progressive overload — increase weight or reps by 2-5% each week.</p>
        </div>
      </div>
    );
  }

  return(
    <div style={s.content}>
      <Eyebrow label="Personalised Programme"/>
      <h2 style={s.sectionTitle}>Workout Builder</h2>
      <p style={s.sectionSub}>4 questions. Your exact programme.</p>
      {step===0&&(
        <div>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Choose your training split</label>
          {[{k:"ppl",l:"Push / Pull / Legs",d:"Best for 3-6 days. Classic bodybuilding split."},{k:"upper_lower",l:"Upper / Lower",d:"Best for 4 days. Great for strength & size."},{k:"muscle_group",l:"Muscle Group",d:"Best for 5 days. Dedicated focus per muscle."},{k:"full_body",l:"Full Body / HIIT",d:"Best for 3 days. Fat loss & conditioning."}].map(opt=>(
            <div key={opt.k} onClick={()=>{setSplit(opt.k);setStep(1);}} style={{...s.card,cursor:"pointer",border:split===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}
      {step===1&&(
        <div>
          <button onClick={()=>setStep(0)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Days per week?</label>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0.5rem"}}>
            {[3,4,5,6].map(d=>(
              <button key={d} onClick={()=>{setDays(String(d));setStep(2);}} style={{...s.btn,background:days===String(d)?C.lime:"transparent",color:days===String(d)?C.black:C.white,border:`1px solid ${days===String(d)?C.lime:C.cardBorder}`,padding:"0.85rem"}}>{d} Days</button>
            ))}
          </div>
        </div>
      )}
      {step===2&&(
        <div>
          <button onClick={()=>setStep(1)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Experience level</label>
          {[{k:"beginner",l:"Beginner",d:"Less than 1 year training"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent training"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setLevel(opt.k);setStep(3);}} style={{...s.card,cursor:"pointer",border:level===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}
      {step===3&&(
        <div>
          <button onClick={()=>setStep(2)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.8rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Primary goal</label>
          {[{k:"muscle",l:"Muscle & Size",d:"Hypertrophy focus, moderate reps"},{k:"strength",l:"Strength",d:"Heavy compounds, low reps"},{k:"fat loss",l:"Fat Loss",d:"Higher reps, shorter rest"},{k:"athletic",l:"Athletic Performance",d:"Power, speed & conditioning"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setWGoal(opt.k);buildProgram(opt.k);}} style={{...s.card,cursor:"pointer",border:wGoal===opt.k?`1px solid ${C.lime}`:undefined}}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem"}}>{opt.l}</div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── MACRO TRACKER ───────────────────────────────────────────────────────────
function MacroTracker(){
  const[target,setTarget]=useState({cal:2200,p:180,c:220,f:70});
  const[log,setLog]=useState([]);
  const[search,setSearch]=useState("");
  const[qty,setQty]=useState("100");
  const[unit,setUnit]=useState("g");
  const[showSetup,setShowSetup]=useState(false);

  const filtered=search.length>1?FOODS.filter(f=>f.name.toLowerCase().includes(search.toLowerCase())):[];
  const totals=log.reduce((acc,item)=>({cal:acc.cal+item.cal,p:acc.p+item.p,c:acc.c+item.c,f:acc.f+item.f}),{cal:0,p:0,c:0,f:0});

  function addFood(food){
    const mult=parseFloat(qty)/100;
    setLog(prev=>[...prev,{...food,cal:Math.round(food.cal*mult),p:Math.round(food.p*mult),c:Math.round(food.c*mult),f:Math.round(food.f*mult),qty,unit,id:Date.now()}]);
    setSearch("");setQty("100");
  }
  function removeItem(id){setLog(prev=>prev.filter(i=>i.id!==id));}

  function MacroRing({label,current,target,color}){
    const pct=Math.min(100,Math.round((current/target)*100));
    const r=28,circ=2*Math.PI*r;
    return(
      <div style={{textAlign:"center"}}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={r} fill="none" stroke={C.cardBorder} strokeWidth="5"/>
          <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="5" strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" transform="rotate(-90 36 36)"/>
          <text x="36" y="38" textAnchor="middle" fill={C.white} fontSize="13" fontWeight="900" fontFamily="'Barlow Condensed',sans-serif">{current}g</text>
        </svg>
        <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:C.muted,fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>{label}</div>
        <div style={{fontSize:"0.65rem",color:C.mutedLight,fontFamily:"'Barlow',sans-serif"}}>{pct}%</div>
      </div>
    );
  }

  return(
    <div style={s.content}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.25rem"}}>
        <div><Eyebrow label="Daily Tracking"/><h2 style={s.sectionTitle}>Macro Tracker</h2></div>
        <button onClick={()=>setShowSetup(!showSetup)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginTop:"0.5rem"}}>Targets</button>
      </div>
      <p style={s.sectionSub}>Log your food, hit your macros.</p>

      {showSetup&&(
        <div style={s.card}>
          <label style={{...s.label,fontSize:"0.75rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Set daily targets</label>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
            {[{k:"cal",l:"Calories"},{k:"p",l:"Protein (g)"},{k:"c",l:"Carbs (g)"},{k:"f",l:"Fat (g)"}].map(({k,l})=>(
              <div key={k}><label style={s.label}>{l}</label><input style={s.input} type="number" value={target[k]} onChange={e=>setTarget(t=>({...t,[k]:+e.target.value}))}/></div>
            ))}
          </div>
          <button onClick={()=>setShowSetup(false)} style={{...s.btn,width:"100%"}}>Save Targets</button>
        </div>
      )}

      <div style={s.card}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"}}>
          <div>
            <div style={{...s.statNum,fontSize:"2.2rem"}}>{totals.cal}<span style={{fontSize:"1rem",color:C.muted,fontWeight:400}}> / {target.cal}</span></div>
            <div style={s.statLabel}>Calories today</div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{color:target.cal-totals.cal>0?C.lime:"#f97316",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1.3rem"}}>{target.cal-totals.cal>0?`${target.cal-totals.cal} left`:"Over!"}</div>
            <div style={s.statLabel}>Remaining</div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-around"}}>
          <MacroRing label="Protein" current={totals.p} target={target.p} color="#4ade80"/>
          <MacroRing label="Carbs" current={totals.c} target={target.c} color="#60a5fa"/>
          <MacroRing label="Fat" current={totals.f} target={target.f} color="#f97316"/>
        </div>
      </div>

      <div style={s.card}>
        <label style={{...s.label,marginBottom:"0.6rem"}}>Search & add food</label>
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.6rem"}}>
          <input style={{...s.input,marginBottom:0,flex:1}} placeholder="Search 27+ foods..." value={search} onChange={e=>setSearch(e.target.value)}/>
          <input style={{...s.input,marginBottom:0,width:"70px"}} type="number" value={qty} onChange={e=>setQty(e.target.value)} placeholder="100"/>
        </div>
        {filtered.length>0&&(
          <div style={{background:"#0f0f0f",border:`1px solid ${C.cardBorder}`,borderRadius:"6px",overflow:"hidden",marginBottom:"0.5rem"}}>
            {filtered.slice(0,6).map((food,i)=>(
              <div key={i} onClick={()=>addFood(food)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.65rem 0.9rem",borderBottom:i<Math.min(filtered.length,6)-1?`1px solid ${C.cardBorder}`:"none",cursor:"pointer"}}>
                <div>
                  <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",fontWeight:600}}>{food.name}</div>
                  <div style={{color:C.muted,fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>{food.cal} kcal · P{food.p}g C{food.c}g F{food.f}g</div>
                </div>
                <span style={{color:C.lime,fontSize:"1.2rem",marginLeft:"0.5rem"}}>+</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {log.length>0&&(
        <div style={s.card}>
          <label style={{...s.label,marginBottom:"0.75rem"}}>Today's log</label>
          {log.map((item,i)=>(
            <div key={item.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem 0",borderBottom:i<log.length-1?`1px solid ${C.cardBorder}22`:""}} >
              <div>
                <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",fontWeight:600}}>{item.name}</div>
                <div style={{color:C.muted,fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{item.qty}g · P{item.p} C{item.c} F{item.f}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:"0.6rem"}}>
                <span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{item.cal}</span>
                <button onClick={()=>removeItem(item.id)} style={{background:"transparent",border:"none",color:C.muted,cursor:"pointer",fontSize:"1.1rem",padding:"0"}}>×</button>
              </div>
            </div>
          ))}
          <button onClick={()=>setLog([])} style={{...s.btnOutline,width:"100%",marginTop:"0.75rem",fontSize:"0.78rem",padding:"0.5rem"}}>Clear Log</button>
        </div>
      )}
    </div>
  );
}

// ─── SUPPLEMENT GUIDE ────────────────────────────────────────────────────────
function SupplementGuide(){
  const[goalFilter,setGoalFilter]=useState("all");
  const[expanded,setExpanded]=useState(null);
  const goals=["all","muscle","strength","fat loss","athletic"];
  const filtered=goalFilter==="all"?SUPPLEMENTS:SUPPLEMENTS.filter(s=>s.goal.includes(goalFilter));

  const evidenceColor=e=>e==="A+"||e==="A"?C.lime:e==="B+"?"#60a5fa":"#f97316";

  return(
    <div style={s.content}>
      <Eyebrow label="Evidence-Based"/>
      <h2 style={s.sectionTitle}>Supplement Guide</h2>
      <p style={s.sectionSub}>Only supplements with real evidence. Ranked by impact.</p>

      <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
        {goals.map(g=>(
          <button key={g} onClick={()=>setGoalFilter(g)} style={{...s.btnSm,flexShrink:0,background:goalFilter===g?C.lime:"transparent",color:goalFilter===g?C.black:C.mutedLight,border:goalFilter===g?"none":`1px solid ${C.cardBorder}`,textTransform:"capitalize"}}>{g}</button>
        ))}
      </div>

      {filtered.map((supp,i)=>(
        <div key={i} style={{...s.card,marginBottom:"0.5rem",cursor:"pointer"}} onClick={()=>setExpanded(expanded===i?null:i)}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.35rem",flexWrap:"wrap"}}>
                <span style={{fontWeight:900,fontSize:"1rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em"}}>{supp.name}</span>
                <span style={{...s.tag,background:`${evidenceColor(supp.evidence)}18`,color:evidenceColor(supp.evidence)}}>Evidence {supp.evidence}</span>
                <span style={s.tagGray}>{supp.cost==="$"?"Budget":"Mid-range"}</span>
              </div>
              <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{supp.dose} · {supp.timing}</div>
            </div>
            <span style={{color:C.lime,fontSize:"1.2rem",marginLeft:"0.5rem",flexShrink:0}}>{expanded===i?"−":"+"}</span>
          </div>
          {expanded===i&&(
            <div style={{marginTop:"0.75rem",paddingTop:"0.75rem",borderTop:`1px solid ${C.cardBorder}`,fontSize:"0.88rem",color:C.mutedLight,fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>
              {supp.desc}
            </div>
          )}
        </div>
      ))}

      <div style={{...s.card,marginTop:"0.5rem",background:`${C.lime}06`,borderLeft:`3px solid ${C.lime}`,borderRadius:"0 6px 6px 0"}}>
        <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Start here</p>
        <p style={{color:C.mutedLight,margin:0,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>If you're new to supplements, start with Creatine + Vitamin D3 + Omega-3. These three alone will give you 80% of the benefit at minimal cost.</p>
      </div>
    </div>
  );
}

// ─── MINDSET & HABITS ────────────────────────────────────────────────────────
function MindsetHabits(){
  const today=new Date().toDateString();
  const[checked,setChecked]=useState(()=>{
    try{return JSON.parse(localStorage.getItem(`habits_${today}`))||{};}catch{return{};}
  });
  const[note,setNote]=useState(()=>{
    try{return localStorage.getItem(`note_${today}`)||"";}catch{return"";}
  });
  const[mood,setMood]=useState(()=>{
    try{return localStorage.getItem(`mood_${today}`)||"";}catch{return"";}
  });
  const[streak,setStreak]=useState(0);

  useEffect(()=>{
    localStorage.setItem(`habits_${today}`,JSON.stringify(checked));
  },[checked]);
  useEffect(()=>{
    localStorage.setItem(`note_${today}`,note);
  },[note]);
  useEffect(()=>{
    localStorage.setItem(`mood_${today}`,mood);
    let s=0;
    for(let i=1;i<=30;i++){
      const d=new Date();d.setDate(d.getDate()-i);
      const stored=localStorage.getItem(`habits_${d.toDateString()}`);
      if(stored){const h=JSON.parse(stored);if(Object.values(h).some(v=>v))s++;else break;}
      else break;
    }
    setStreak(s);
  },[mood]);

  function toggle(id){setChecked(prev=>({...prev,[id]:!prev[id]}));}
  const doneCount=Object.values(checked).filter(Boolean).length;
  const pct=Math.round((doneCount/DEFAULT_HABITS.length)*100);

  const moods=["😞","😐","🙂","😊","🔥"];
  const categories=["nutrition","training","recovery","cardio","mindset"];

  return(
    <div style={s.content}>
      <Eyebrow label="Daily Check-in"/>
      <h2 style={s.sectionTitle}>Mindset & Habits</h2>
      <p style={s.sectionSub}>Small daily wins build big results.</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
        <div style={s.statCard}><div style={s.statNum}>{doneCount}<span style={{fontSize:"1rem",color:C.muted}}>/{DEFAULT_HABITS.length}</span></div><div style={s.statLabel}>Done Today</div></div>
        <div style={s.statCard}><div style={s.statNum}>{pct}%</div><div style={s.statLabel}>Complete</div></div>
        <div style={s.statCard}><div style={s.statNum}>{streak}</div><div style={s.statLabel}>Day Streak</div></div>
      </div>

      <div style={s.card}>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
          <span style={{fontWeight:800,fontSize:"0.8rem",letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>Today's Progress</span>
          <span style={{color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif"}}>{pct}%</span>
        </div>
        <div style={s.progressBar}><div style={{...s.progressFill,width:`${pct}%`}}/></div>
      </div>

      <div style={s.card}>
        <label style={{...s.label,marginBottom:"0.75rem",fontSize:"0.72rem",color:C.white}}>How are you feeling today?</label>
        <div style={{display:"flex",gap:"0.6rem",justifyContent:"space-around"}}>
          {moods.map((m,i)=>(
            <button key={i} onClick={()=>setMood(m)} style={{fontSize:"1.8rem",background:mood===m?`${C.lime}22`:"transparent",border:mood===m?`1px solid ${C.lime}`:`1px solid ${C.cardBorder}`,borderRadius:"8px",padding:"0.4rem 0.6rem",cursor:"pointer",transition:"all 0.15s"}}>{m}</button>
          ))}
        </div>
      </div>

      {categories.map(cat=>{
        const catHabits=DEFAULT_HABITS.filter(h=>h.category===cat);
        return(
          <div key={cat} style={s.card}>
            <label style={{...s.label,marginBottom:"0.75rem",fontSize:"0.72rem",color:C.white,textTransform:"capitalize"}}>{cat}</label>
            {catHabits.map(habit=>(
              <div key={habit.id} onClick={()=>toggle(habit.id)} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.6rem 0",borderBottom:`1px solid ${C.cardBorder}22`,cursor:"pointer"}}>
                <div style={{width:"22px",height:"22px",borderRadius:"5px",border:`1.5px solid ${checked[habit.id]?C.lime:C.cardBorder}`,background:checked[habit.id]?C.lime:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.15s"}}>
                  {checked[habit.id]&&<svg width="12" height="12" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke={C.black} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </div>
                <span style={{fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif",color:checked[habit.id]?C.mutedLight:C.white,textDecoration:checked[habit.id]?"line-through":"none",flex:1}}>{habit.label}</span>
                <span style={{fontSize:"1.1rem"}}>{habit.icon}</span>
              </div>
            ))}
          </div>
        );
      })}

      <div style={s.card}>
        <label style={{...s.label,marginBottom:"0.5rem",fontSize:"0.72rem",color:C.white}}>Daily note / reflection</label>
        <textarea style={{...s.input,marginBottom:0,resize:"none",minHeight:"90px",lineHeight:1.5,fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}} placeholder="How did today go? What will you do better tomorrow?" value={note} onChange={e=>setNote(e.target.value)}/>
      </div>

      {pct===100&&(
        <div style={{...s.card,background:`${C.lime}10`,border:`1px solid ${C.lime}44`,textAlign:"center"}}>
          <div style={{fontSize:"2rem",marginBottom:"0.35rem"}}>🔥</div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.1rem",color:C.lime}}>Perfect Day!</div>
          <div style={{color:C.mutedLight,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",marginTop:"0.25rem"}}>Every habit done. This is how champions are built.</div>
        </div>
      )}
    </div>
  );
}

// ─── AI COACH ────────────────────────────────────────────────────────────────
function AICoach(){
  const[messages,setMessages]=useState([{role:"assistant",text:"Hey! I'm your ForgeBody AI coach. Ask me anything — training, nutrition, recovery, supplements, mindset. Let's build the body you want."}]);
  const[input,setInput]=useState("");
  const[loading,setLoading]=useState(false);
  const bottomRef=useRef(null);
  useEffect(()=>{bottomRef.current?.scrollIntoView({behavior:"smooth"});},[messages]);

  const SYSTEM=`You are an expert fitness coach for ForgeBody, a premium fitness transformation app. You specialise in strength training, hypertrophy, fat loss, nutrition, macros, supplementation, recovery and mindset. Be direct, practical and motivating. Keep answers concise but complete. Use bullet points for lists. Never recommend anything dangerous. Always remind users to consult a doctor for medical issues.`;

  async function send(){
    if(!input.trim()||loading)return;
    const userMsg={role:"user",text:input.trim()};
    const newMsgs=[...messages,userMsg];
    setMessages(newMsgs);setInput("");setLoading(true);
    try{
      const res=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,system:SYSTEM,messages:newMsgs.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}))})});
      const data=await res.json();
      setMessages(prev=>[...prev,{role:"assistant",text:data.content?.[0]?.text||"Sorry, try again."}]);
    }catch{setMessages(prev=>[...prev,{role:"assistant",text:"Connection error. Please try again."}]);}
    setLoading(false);
  }

  const suggestions=["Best exercises for bigger shoulders?","How much protein do I need daily?","I only have 30 mins — what should I do?","How do I break a fat loss plateau?","Should I train fasted?"];

  return(
    <div style={{display:"flex",flexDirection:"column",height:"calc(100vh - 130px)"}}>
      <div style={{...s.content,paddingBottom:"0.5rem",flexShrink:0}}>
        <Eyebrow label="AI Powered"/>
        <h2 style={{...s.sectionTitle,marginBottom:0}}>Your Coach</h2>
      </div>
      <div style={{flex:1,overflowY:"auto",padding:"0 1.25rem",display:"flex",flexDirection:"column",gap:"0.75rem"}}>
        {messages.map((m,i)=>(
          <div key={i} style={{display:"flex",justifyContent:m.role==="user"?"flex-end":"flex-start",alignItems:"flex-end",gap:"8px"}}>
            {m.role==="assistant"&&<div style={{width:"28px",height:"28px",borderRadius:"50%",background:`${C.lime}22`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:C.lime,fontWeight:900,fontSize:"0.62rem",fontFamily:"'Barlow Condensed',sans-serif"}}>FB</span></div>}
            <div style={{maxWidth:"80%",background:m.role==="user"?C.lime:C.card,color:m.role==="user"?C.black:C.white,borderRadius:m.role==="user"?"12px 12px 2px 12px":"12px 12px 12px 2px",padding:"0.7rem 0.9rem",fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.55,border:m.role==="assistant"?`1px solid ${C.cardBorder}`:"none",whiteSpace:"pre-wrap"}}>{m.text}</div>
          </div>
        ))}
        {loading&&(
          <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
            <div style={{width:"28px",height:"28px",borderRadius:"50%",background:`${C.lime}22`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><span style={{color:C.lime,fontWeight:900,fontSize:"0.62rem",fontFamily:"'Barlow Condensed',sans-serif"}}>FB</span></div>
            <div style={{background:C.card,border:`1px solid ${C.cardBorder}`,borderRadius:"12px 12px 12px 2px",padding:"0.7rem 1rem"}}>
              <style>{`@keyframes bounce{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}`}</style>
              {[0,1,2].map(i=><span key={i} style={{...s.loadingDot,width:"6px",height:"6px",animationDelay:`${i*0.16}s`}}/>)}
            </div>
          </div>
        )}
        {messages.length===1&&!loading&&(
          <div style={{marginTop:"0.25rem"}}>
            <div style={{...s.label,marginBottom:"0.5rem"}}>Try asking</div>
            {suggestions.map((q,i)=>(
              <button key={i} onClick={()=>setInput(q)} style={{display:"block",width:"100%",textAlign:"left",background:"#0f0f0f",border:`1px solid ${C.cardBorder}`,borderRadius:"8px",padding:"0.65rem 0.9rem",color:C.mutedLight,fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",cursor:"pointer",marginBottom:"0.4rem",lineHeight:1.4}}>{q}</button>
            ))}
          </div>
        )}
        <div ref={bottomRef}/>
      </div>
      <div style={{padding:"0.75rem 1.25rem 0.5rem",borderTop:`1px solid ${C.cardBorder}`,background:C.black,flexShrink:0}}>
        <div style={{display:"flex",gap:"0.5rem",alignItems:"flex-end"}}>
          <textarea style={{...s.input,marginBottom:0,flex:1,resize:"none",minHeight:"44px",maxHeight:"120px",lineHeight:1.4,padding:"0.6rem 0.9rem",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}} placeholder="Ask your coach anything..." value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();}}} rows={1}/>
          <button onClick={send} disabled={loading||!input.trim()} style={{...s.btn,padding:"0.6rem 1rem",flexShrink:0,opacity:loading||!input.trim()?0.5:1}}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.black} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── PROGRESS ────────────────────────────────────────────────────────────────
function Progress({user}){
  const[entries,setEntries]=useState([]);
  const[loading,setLoading]=useState(true);
  const[weight,setWeight]=useState("");
  const[calories,setCalories]=useState("");
  const[workouts,setWorkouts]=useState("");
  const[saving,setSaving]=useState(false);

  useEffect(()=>{
    fetchEntries();
    const ch=supabase.channel("progress").on("postgres_changes",{event:"*",schema:"public",table:"progress_entries",filter:`user_id=eq.${user.id}`},()=>fetchEntries()).subscribe();
    return()=>supabase.removeChannel(ch);
  },[]);

  async function fetchEntries(){
    setLoading(true);
    const{data}=await supabase.from("progress_entries").select("*").eq("user_id",user.id).order("created_at",{ascending:true});
    setEntries(data||[]);setLoading(false);
  }
  async function logEntry(){
    if(!weight)return;setSaving(true);
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
      <Eyebrow label="Real-Time Tracking"/>
      <h2 style={s.sectionTitle}>Progress</h2>
      <p style={s.sectionSub}>Every check-in saved instantly.</p>
      {loading?<LoadingDots/>:(
        <>
          <div style={s.statGrid}>
            {[{n:latest?`${latest.weight}kg`:"—",l:"Current Weight"},{n:totalLoss>0?`-${totalLoss}kg`:"—",l:"Total Lost"},{n:totalWorkouts,l:"Workouts Logged"},{n:entries.length,l:"Check-ins"}].map((x,i)=>(
              <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
            ))}
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
            <label style={{...s.label,fontSize:"0.75rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Log Today</label>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
              <div><label style={s.label}>Weight (kg)</label><input style={s.input} type="number" placeholder="85.0" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
              <div><label style={s.label}>Calories</label><input style={s.input} type="number" placeholder="2000" value={calories} onChange={e=>setCalories(e.target.value)}/></div>
            </div>
            <div><label style={s.label}>Workouts this week</label><input style={s.input} type="number" placeholder="0" value={workouts} onChange={e=>setWorkouts(e.target.value)}/></div>
            <button onClick={logEntry} disabled={saving||!weight} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{saving?"Saving...":"Log Check-in"}</button>
          </div>
          {entries.length>0&&(
            <div style={s.card}>
              <label style={{...s.label,marginBottom:"0.75rem"}}>History</label>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif"}}>
                  <thead><tr style={{borderBottom:`1px solid ${C.cardBorder}`}}>{["Date","Weight","Cal","Sessions"].map(h=><th key={h} style={{textAlign:"left",padding:"0.4rem 0.5rem",color:C.muted,fontWeight:800,fontSize:"0.6rem",textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{h}</th>)}</tr></thead>
                  <tbody>{[...entries].reverse().map((e,i)=>(
                    <tr key={i} style={{borderBottom:`1px solid ${C.cardBorder}22`}}>
                      <td style={{padding:"0.5rem",color:C.muted,fontSize:"0.8rem"}}>{new Date(e.created_at).toLocaleDateString("en-AU",{month:"short",day:"numeric"})}</td>
                      <td style={{padding:"0.5rem",fontWeight:700,color:C.white}}>{e.weight}kg</td>
                      <td style={{padding:"0.5rem",color:C.mutedLight}}>{e.calories||"—"}</td>
                      <td style={{padding:"0.5rem",color:C.mutedLight}}>{e.workouts_this_week||0}</td>
                    </tr>
                  ))}</tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─── PROFILE ─────────────────────────────────────────────────────────────────
function ProfileTab({user,onSignOut}){
  return(
    <div style={s.content}>
      <Eyebrow label="Your Account"/>
      <h2 style={s.sectionTitle}>Profile</h2>
      <div style={s.card}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <div style={{width:"44px",height:"44px",borderRadius:"50%",background:`${C.lime}22`,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{user.email[0].toUpperCase()}</div>
          <div><div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em",fontSize:"0.95rem"}}>{user.email}</div><Eyebrow label="Active Member"/></div>
        </div>
        <button onClick={onSignOut} style={{...s.btnOutline,width:"100%"}}>Sign Out</button>
      </div>
      <div style={s.card}>
        <label style={{...s.label,fontSize:"0.75rem",color:C.white,marginBottom:"0.75rem"}}>Subscription</label>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
          <span style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem"}}>ForgeBody Pro</span><span style={s.tag}>Active</span>
        </div>
        <div style={{color:C.muted,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>$19/month · Cancel anytime</div>
      </div>
      <div style={{...s.card,background:`${C.lime}06`,borderLeft:`3px solid ${C.lime}`,borderRadius:"0 6px 6px 0"}}>
        <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Founding member?</p>
        <p style={{color:C.mutedLight,margin:0,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>Purchased the $27 PDF guide? You get free lifetime access. Email your receipt to support@forgebody.com</p>
      </div>
    </div>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icons={
  meal:(a)=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>,
  workout:(a)=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4v16M18 4v16M1 8h5M18 8h5M1 16h5M18 16h5"/></svg>,
  macros:(a)=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 2a10 10 0 0 1 10 10"/><path d="M12 12l-3-3"/></svg>,
  coach:(a)=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  more:(a)=><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:C.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>,
};

// ─── MORE MENU ───────────────────────────────────────────────────────────────
function MoreMenu({activeSubTab,setActiveSubTab}){
  const items=[
    {id:"progress",label:"Progress Tracker",desc:"Log weight & workouts"},
    {id:"supplements",label:"Supplement Guide",desc:"Evidence-based recs"},
    {id:"habits",label:"Mindset & Habits",desc:"Daily check-in & streaks"},
    {id:"profile",label:"Profile & Account",desc:"Settings & subscription"},
  ];
  if(activeSubTab&&activeSubTab!=="more_menu"){
    return null;
  }
  return(
    <div style={s.content}>
      <Eyebrow label="More Features"/>
      <h2 style={s.sectionTitle}>More</h2>
      <p style={s.sectionSub}>All your tools in one place.</p>
      {items.map(item=>(
        <div key={item.id} onClick={()=>setActiveSubTab(item.id)} style={{...s.card,cursor:"pointer",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.2rem"}}>{item.label}</div>
            <div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div>
          </div>
          <span style={{color:C.lime,fontSize:"1.3rem",marginLeft:"0.75rem"}}>→</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function ForgeBodyApp(){
  const[session,setSession]=useState(null);
  const[loading,setLoading]=useState(true);
  const[tab,setTab]=useState("workout");
  const[subTab,setSubTab]=useState("more_menu");

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{setSession(data.session);setLoading(false);});
    const{data:listener}=supabase.auth.onAuthStateChange((_e,sess)=>setSession(sess));
    return()=>listener.subscription.unsubscribe();
  },[]);

  async function signOut(){await supabase.auth.signOut();setSession(null);}

  function handleTabChange(t){
    setTab(t);
    if(t==="more")setSubTab("more_menu");
  }

  if(loading)return<div style={{...s.app,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:0}}><LoadingDots/></div>;

  return(
    <div style={s.app}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
      {!session?<AuthScreen/>:(
        <>
          <nav style={s.nav}>
            <div style={s.logo}>FORGE<span style={s.logoSlash}>/</span>BODY</div>
            {tab==="more"&&subTab!=="more_menu"&&(
              <button onClick={()=>setSubTab("more_menu")} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`}}>← Back</button>
            )}
          </nav>

          {tab==="meal"&&<MealPlanner/>}
          {tab==="workout"&&<WorkoutBuilder/>}
          {tab==="macros"&&<MacroTracker/>}
          {tab==="coach"&&<AICoach/>}
          {tab==="more"&&(
            <>
              {subTab==="more_menu"&&<MoreMenu activeSubTab={subTab} setActiveSubTab={setSubTab}/>}
              {subTab==="progress"&&<Progress user={session.user}/>}
              {subTab==="supplements"&&<SupplementGuide/>}
              {subTab==="habits"&&<MindsetHabits/>}
              {subTab==="profile"&&<ProfileTab user={session.user} onSignOut={signOut}/>}
            </>
          )}

          <nav style={s.bottomNav}>
            {[
              {id:"meal",label:"Meals"},
              {id:"workout",label:"Training"},
              {id:"macros",label:"Macros"},
              {id:"coach",label:"Coach"},
              {id:"more",label:"More"},
            ].map(t=>(
              <button key={t.id} onClick={()=>handleTabChange(t.id)} style={{...s.navBtn,color:tab===t.id?C.lime:C.muted}}>
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
