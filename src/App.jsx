import { useState, useEffect, useRef } from "react";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "https://zuxsutxzockyqsisunww.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_OANYMyfkEGh6c-ucwZFJjA_Rx-V2Yum";
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const C = {
  black:"#0a0a0a", card:"rgba(255,255,255,0.06)", cardBorder:"rgba(255,255,255,0.1)",
  lime:"#CCFF00", white:"#FFFFFF", muted:"rgba(255,255,255,0.35)", mutedLight:"rgba(255,255,255,0.55)",
  glass:"rgba(255,255,255,0.07)", glassBorder:"rgba(255,255,255,0.12)",
  glassDark:"rgba(0,0,0,0.35)", navBg:"rgba(0,0,0,0.55)",
};

const GLASS_STYLES = `
  .fb-app { background: #0a0a0a; }
  .fb-app::before { content:''; position:fixed; inset:0; background: radial-gradient(ellipse 80% 60% at 15% 10%, rgba(204,255,0,0.13) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 85% 80%, rgba(120,220,0,0.08) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 50% 50%, rgba(180,255,50,0.04) 0%, transparent 70%); pointer-events:none; z-index:0; }
  .fb-content { position:relative; z-index:1; }
  input, select, textarea { color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
  input::placeholder { color: rgba(255,255,255,0.35) !important; }
  input:focus, select:focus, textarea:focus { outline: 1px solid rgba(204,255,0,0.5) !important; }
`;

const s = {
  app:{ minHeight:"100vh", background:"#0a0a0a", color:C.white, fontFamily:"'Barlow Condensed','Barlow',sans-serif", paddingBottom:"70px", position:"relative" },
  nav:{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0.85rem 1.25rem", borderBottom:"1px solid rgba(255,255,255,0.08)", background:"rgba(0,0,0,0.55)", backdropFilter:"blur(30px)", WebkitBackdropFilter:"blur(30px)", position:"sticky", top:0, zIndex:100 },
  logo:{ fontSize:"1.3rem", fontWeight:900, letterSpacing:"0.05em", color:C.white, textTransform:"uppercase" },
  logoSlash:{ color:C.lime },
  bottomNav:{ position:"fixed", bottom:0, left:0, right:0, background:"rgba(0,0,0,0.65)", backdropFilter:"blur(30px)", WebkitBackdropFilter:"blur(30px)", borderTop:"1px solid rgba(255,255,255,0.1)", display:"flex", zIndex:100, height:"66px" },
  navBtn:{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"3px", border:"none", background:"transparent", cursor:"pointer", padding:"8px 0", fontFamily:"'Barlow Condensed',sans-serif", fontSize:"0.6rem", fontWeight:800, letterSpacing:"0.08em", textTransform:"uppercase" },
  content:{ maxWidth:"600px", margin:"0 auto", padding:"1.25rem", position:"relative", zIndex:1 },
  card:{ background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.12)", borderRadius:"16px", padding:"1.25rem", marginBottom:"0.75rem", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)" },
  label:{ fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,0.5)", marginBottom:"0.4rem", display:"block", fontFamily:"'Barlow Condensed',sans-serif" },
  input:{ width:"100%", background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"10px", padding:"0.7rem 0.9rem", color:"#ffffff", fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)" },
  select:{ width:"100%", background:"rgba(20,20,20,0.8)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:"10px", padding:"0.7rem 0.9rem", color:"#ffffff", fontFamily:"'Barlow',sans-serif", fontSize:"1rem", boxSizing:"border-box", marginBottom:"0.75rem", cursor:"pointer" },
  btn:{ background:C.lime, color:C.black, border:"none", borderRadius:"10px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase", boxShadow:`0 0 20px rgba(204,255,0,0.25)` },
  btnOutline:{ background:"rgba(255,255,255,0.07)", color:C.white, border:"1px solid rgba(255,255,255,0.15)", borderRadius:"10px", padding:"0.75rem 1.4rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:700, fontSize:"0.9rem", cursor:"pointer", letterSpacing:"0.06em", textTransform:"uppercase", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)" },
  btnSm:{ background:"rgba(255,255,255,0.1)", color:C.white, border:"1px solid rgba(255,255,255,0.15)", borderRadius:"8px", padding:"0.45rem 0.9rem", fontFamily:"'Barlow Condensed',sans-serif", fontWeight:800, fontSize:"0.78rem", cursor:"pointer", letterSpacing:"0.08em", textTransform:"uppercase" },
  tag:{ display:"inline-block", background:`rgba(204,255,0,0.15)`, color:C.lime, borderRadius:"6px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", border:"1px solid rgba(204,255,0,0.2)" },
  tagGray:{ display:"inline-block", background:"rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.5)", borderRadius:"6px", padding:"0.15rem 0.5rem", fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.1em", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif" },
  sectionTitle:{ fontSize:"1.6rem", fontWeight:900, marginBottom:"0.2rem", textTransform:"uppercase", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"-0.01em", color:C.white },
  sectionSub:{ color:"rgba(255,255,255,0.45)", marginBottom:"1.25rem", fontFamily:"'Barlow',sans-serif", fontSize:"0.88rem" },
  eyebrow:{ fontSize:"0.65rem", fontWeight:800, letterSpacing:"0.15em", textTransform:"uppercase", color:C.lime, marginBottom:"0.35rem", display:"flex", alignItems:"center", gap:"6px", fontFamily:"'Barlow Condensed',sans-serif" },
  dot:{ width:"5px", height:"5px", borderRadius:"50%", background:C.lime, display:"inline-block", flexShrink:0 },
  statGrid:{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"0.6rem", marginBottom:"0.75rem" },
  statCard:{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"12px", padding:"1rem", textAlign:"center", backdropFilter:"blur(15px)", WebkitBackdropFilter:"blur(15px)" },
  statNum:{ fontSize:"2rem", fontWeight:900, color:C.lime, letterSpacing:"-0.02em", fontFamily:"'Barlow Condensed',sans-serif" },
  statLabel:{ fontSize:"0.62rem", color:"rgba(255,255,255,0.4)", fontWeight:800, textTransform:"uppercase", letterSpacing:"0.1em", marginTop:"2px", fontFamily:"'Barlow Condensed',sans-serif" },
  progressBar:{ height:"5px", background:"rgba(255,255,255,0.1)", borderRadius:"3px", overflow:"hidden", marginTop:"0.4rem" },
  progressFill:{ height:"100%", background:C.lime, borderRadius:"3px", transition:"width 0.8s ease" },
  loadingDot:{ display:"inline-block", width:"7px", height:"7px", borderRadius:"50%", background:C.lime, margin:"0 3px", animation:"bounce 1.2s infinite" },
  divider:{ display:"flex", alignItems:"center", gap:"0.75rem", margin:"1rem 0", color:"rgba(255,255,255,0.25)", fontSize:"0.75rem", fontFamily:"'Barlow Condensed',sans-serif", letterSpacing:"0.1em", textTransform:"uppercase" },
  dividerLine:{ flex:1, height:"1px", background:"rgba(255,255,255,0.1)" },
  successBanner:{ background:"rgba(204,255,0,0.1)", border:"1px solid rgba(204,255,0,0.3)", borderRadius:"10px", padding:"0.9rem 1.1rem", color:C.lime, fontSize:"0.9rem", marginBottom:"0.75rem", backdropFilter:"blur(10px)", WebkitBackdropFilter:"blur(10px)" },
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

// ─── WORKOUT CALENDAR WIDGET ─────────────────────────────────────────────────
function WorkoutCalendar({completedDates}){
  const now=new Date();
  const year=now.getFullYear();
  const month=now.getMonth();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const firstDay=new Date(year,month,1).getDay();
  const monthName=now.toLocaleDateString("en-AU",{month:"long",year:"numeric"});
  const todayDate=now.getDate();
  const completedSet=new Set(completedDates.map(d=>new Date(d).toDateString()));

  const cells=[];
  for(let i=0;i<firstDay;i++)cells.push(null);
  for(let d=1;d<=daysInMonth;d++)cells.push(d);

  return(
    <div style={{...s.card,marginBottom:"1rem"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
        <div><Eyebrow label="Workout Streak"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",color:C.white}}>{monthName}</div></div>
        <div style={{textAlign:"right"}}>
          <div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{completedDates.length}</div>
          <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>Sessions</div>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"3px",marginBottom:"4px"}}>
        {["S","M","T","W","T","F","S"].map((d,i)=><div key={i} style={{textAlign:"center",fontSize:"0.58rem",fontWeight:800,color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",padding:"2px 0"}}>{d}</div>)}
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(7,1fr)",gap:"3px"}}>
        {cells.map((d,i)=>{
          if(!d)return<div key={i}/>;
          const dateStr=new Date(year,month,d).toDateString();
          const done=completedSet.has(dateStr);
          const isToday=d===todayDate;
          return(
            <div key={i} style={{aspectRatio:"1",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.65rem",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",background:done?"rgba(204,255,0,0.85)":isToday?"rgba(204,255,0,0.15)":"rgba(255,255,255,0.04)",color:done?"#000":isToday?C.lime:"rgba(255,255,255,0.35)",border:isToday&&!done?`1px solid rgba(204,255,0,0.4)`:"none",transition:"all 0.2s"}}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── WORKOUT BUILDER ─────────────────────────────────────────────────────────
function RestTimer({seconds,onDone}){
  const[left,setLeft]=useState(seconds);
  useEffect(()=>{
    if(left<=0){onDone();return;}
    const t=setTimeout(()=>setLeft(l=>l-1),1000);
    return()=>clearTimeout(t);
  },[left]);
  const pct=(left/seconds)*100;
  const r=54,circ=2*Math.PI*r;
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",backdropFilter:"blur(20px)",zIndex:200,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.5rem"}}>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.6}}`}</style>
      <div style={{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif"}}>Rest Time</div>
      <div style={{position:"relative",width:"140px",height:"140px"}}>
        <svg width="140" height="140" viewBox="0 0 140 140" style={{transform:"rotate(-90deg)"}}>
          <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6"/>
          <circle cx="70" cy="70" r={r} fill="none" stroke={C.lime} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={circ*(1-pct/100)} strokeLinecap="round" style={{filter:"drop-shadow(0 0 8px rgba(204,255,0,0.6))"}}/>
        </svg>
        <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <div style={{fontSize:"3rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,animation:left<=5?"pulse 1s infinite":"none"}}>{left}</div>
          <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.4)",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>seconds</div>
        </div>
      </div>
      <button onClick={onDone} style={{...s.btnOutline,fontSize:"0.8rem",padding:"0.6rem 1.5rem"}}>Skip Rest</button>
    </div>
  );
}

// Weight/reps modal shown after each set
function SetLogger({ex,setNum,onSave}){
  const[weight,setWeight]=useState("");
  const[reps,setReps]=useState(ex.reps.split("-")[0]);
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",zIndex:199,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
      <div style={{...s.card,width:"100%",maxWidth:"360px",padding:"1.5rem"}}>
        <Eyebrow label={`Set ${setNum} Complete`}/>
        <div style={{fontSize:"1.3rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>{ex.name}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"1rem"}}>
          <div>
            <label style={s.label}>Weight (kg)</label>
            <input style={s.input} type="number" placeholder="e.g. 80" value={weight} onChange={e=>setWeight(e.target.value)}/>
          </div>
          <div>
            <label style={s.label}>Reps done</label>
            <input style={s.input} type="number" value={reps} onChange={e=>setReps(e.target.value)}/>
          </div>
        </div>
        <button onClick={()=>onSave({weight:parseFloat(weight)||0,reps:parseInt(reps)||0})} style={{...s.btn,width:"100%",padding:"0.9rem"}}>
          Save & Rest →
        </button>
      </div>
    </div>
  );
}

function WorkoutBuilder(){
  // Load saved settings from localStorage
  const saved=()=>{try{return JSON.parse(localStorage.getItem("fb_workout_settings"))||{};}catch{return{};}};
  const[step,setStep]=useState(()=>saved().split?4:0);
  const[split,setSplit]=useState(()=>saved().split||"");
  const[days,setDays]=useState(()=>saved().days||"");
  const[level,setLevel]=useState(()=>saved().level||"");
  const[wGoal,setWGoal]=useState(()=>saved().wGoal||"");
  const[program,setProgram]=useState(null);
  const[activeDay,setActiveDay]=useState(0);
  const[mode,setMode]=useState("overview");
  const[exIdx,setExIdx]=useState(0);
  const[completedSets,setCompletedSets]=useState({});
  const[setLogs,setSetLogs]=useState({});
  const[showTimer,setShowTimer]=useState(false);
  const[showLogger,setShowLogger]=useState(false);
  const[timerSecs,setTimerSecs]=useState(60);
  const[pendingSetKey,setPendingSetKey]=useState(null);
  const[completedDates,setCompletedDates]=useState([]);

  useEffect(()=>{
    // Load completed workout dates
    const dates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
    setCompletedDates(dates);
    // Auto-build program if settings saved
    const sv=saved();
    if(sv.split&&sv.days&&sv.level&&sv.wGoal){
      buildProgramWith(sv.split,sv.days,sv.level,sv.wGoal);
    }
  },[]);

  function saveSettings(sp,dy,lv,gol){
    localStorage.setItem("fb_workout_settings",JSON.stringify({split:sp,days:dy,level:lv,wGoal:gol}));
  }

  function buildProgramWith(sp,dy,lv,gol){
    const splitData=SPLITS[sp];
    if(!splitData)return;
    const daysKey=Object.keys(splitData).filter(k=>k!=="name").find(k=>k.includes(dy))||Object.keys(splitData).filter(k=>k!=="name")[0];
    const template=splitData[daysKey];
    const built=template.map(day=>{
      const exList=[];
      day.muscles.forEach(muscle=>{
        const pool=EXERCISES[muscle]||[];
        const count=gol==="strength"?3:4;
        pool.slice(0,count).forEach(ex=>{
          exList.push({...ex,muscle,sets:lv==="beginner"?String(Math.max(2,parseInt(ex.sets)-1)):lv==="advanced"?String(parseInt(ex.sets)+1):ex.sets});
        });
      });
      return{...day,exercises:exList};
    });
    setProgram(built);setActiveDay(0);setStep(4);setMode("overview");
  }

  function buildProgram(gol){
    saveSettings(split,days,level,gol);
    buildProgramWith(split,days,level,gol);
  }

  function startWorkout(){setMode("exercise");setExIdx(0);setCompletedSets({});setSetLogs({});}

  function getRestSecs(restStr){
    if(!restStr)return 60;
    const m=restStr.match(/(\d+)\s*min/);const sec=restStr.match(/(\d+)\s*sec/);
    return m?parseInt(m[1])*60:sec?parseInt(sec[1]):60;
  }

  function completeSet(exI,setI){
    const key=`${exI}-${setI}`;
    setPendingSetKey(key);
    setShowLogger(true);
  }

  function saveSetLog(data){
    const key=pendingSetKey;
    setCompletedSets(prev=>({...prev,[key]:true}));
    setSetLogs(prev=>({...prev,[key]:data}));
    setShowLogger(false);
    const[exI]=key.split("-").map(Number);
    const ex=program[activeDay].exercises[exI];
    setTimerSecs(getRestSecs(ex.rest));
    setShowTimer(true);
  }

  async function finishWorkout(){
    const day=program[activeDay];
    const totalSets=Object.keys(completedSets).length;
    // Save to localStorage for calendar
    const dates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
    dates.push(new Date().toISOString());
    localStorage.setItem("fb_workout_dates",JSON.stringify(dates));
    setCompletedDates(dates);
    // Save to Supabase
    try{
      const{data:{user}}=await supabase.auth.getUser();
      if(user){
        await supabase.from("workout_history").insert({user_id:user.id,day_label:day.label,split:SPLITS[split]?.name,exercises:day.exercises.length,sets_completed:totalSets});
      }
    }catch(e){console.log(e);}
    setMode("done");
  }

  // ── OVERVIEW ──
  if(step===4&&program&&mode==="overview"){
    const day=program[activeDay];
    const totalEx=day.exercises.length;
    const muscles=[...new Set(day.exercises.map(e=>e.muscle))];
    return(
      <div style={{...s.content,paddingBottom:"2rem"}}>
        <style>{`@keyframes gradientSpin{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}${GLASS_STYLES}`}</style>

        <WorkoutCalendar completedDates={completedDates}/>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
          <Eyebrow label={SPLITS[split]?.name}/>
          <button onClick={()=>{localStorage.removeItem("fb_workout_settings");setStep(0);setProgram(null);setSplit("");setDays("");setLevel("");setWGoal("");}} style={{...s.btnSm,background:"rgba(255,255,255,0.08)",color:"rgba(255,255,255,0.5)"}}>Change Split</button>
        </div>

        <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
          {program.map((d,i)=>(
            <button key={i} onClick={()=>{setActiveDay(i);setMode("overview");setCompletedSets({});}} style={{flexShrink:0,padding:"0.5rem 0.9rem",borderRadius:"20px",border:activeDay===i?`1.5px solid ${C.lime}`:`1px solid rgba(255,255,255,0.12)`,background:activeDay===i?`rgba(204,255,0,0.12)`:"rgba(255,255,255,0.05)",color:activeDay===i?C.lime:"rgba(255,255,255,0.45)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.72rem",cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",backdropFilter:"blur(10px)"}}>{d.label}</button>
          ))}
        </div>

        <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.1),rgba(100,180,0,0.05))",border:"1px solid rgba(204,255,0,0.25)",borderRadius:"20px",padding:"1.5rem",marginBottom:"1rem",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(20px)",pointerEvents:"none"}}/>
          <div style={{fontSize:"2.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",lineHeight:1,marginBottom:"0.75rem",color:C.white}}>{day.label}</div>
          <div style={{display:"flex",gap:"1.25rem",marginBottom:"1rem"}}>
            {[{n:totalEx,l:"Exercises"},{n:day.exercises.reduce((a,e)=>a+parseInt(e.sets||3),0),l:"Sets"},{n:`~${Math.round(totalEx*4.5)}m`,l:"Est Time"}].map((x,i)=>(
              <div key={i} style={{textAlign:"center"}}>
                <div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
                <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1.25rem"}}>
            {muscles.map(m=><span key={m} style={s.tag}>{m}</span>)}
          </div>
          <button onClick={startWorkout} style={{...s.btn,width:"100%",padding:"1rem",fontSize:"1rem",borderRadius:"12px"}}>Start Workout →</button>
        </div>

        <div style={{...s.label,marginBottom:"0.75rem"}}>Exercise Overview</div>
        {day.exercises.map((ex,i)=>(
          <div key={i} style={{...s.card,marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"1rem"}}>
            <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontWeight:900,fontSize:"0.85rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{i+1}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:900,fontSize:"0.92rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.02em",color:C.white}}>{ex.name}</div>
              <div style={{display:"flex",gap:"0.35rem",marginTop:"0.25rem",flexWrap:"wrap"}}>
                <span style={s.tag}>{ex.muscle}</span>
                <span style={s.tagGray}>{ex.sets}×{ex.reps}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── EXERCISE MODE ──
  if(step===4&&program&&mode==="exercise"){
    const day=program[activeDay];
    const ex=day.exercises[exIdx];
    const totalSets=parseInt(ex.sets)||3;
    const isLast=exIdx===day.exercises.length-1;

    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",paddingBottom:"80px",position:"relative"}}>
        <style>{`@keyframes gradientSpin{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}${GLASS_STYLES}`}</style>
        <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:"radial-gradient(ellipse 80% 60% at 20% 10%,rgba(204,255,0,0.1) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 80% 80%,rgba(100,200,0,0.07) 0%,transparent 55%)",pointerEvents:"none",zIndex:0}}/>

        {showLogger&&<SetLogger ex={ex} setNum={Object.keys(completedSets).filter(k=>k.startsWith(`${exIdx}-`)).length+1} onSave={saveSetLog}/>}
        {showTimer&&<RestTimer seconds={timerSecs} onDone={()=>{setShowTimer(false);if(!isLast)setExIdx(i=>i+1);else finishWorkout();}}/>}

        <div style={{height:"3px",background:"rgba(255,255,255,0.08)",position:"sticky",top:0,zIndex:50}}>
          <div style={{height:"100%",background:C.lime,width:`${((exIdx)/day.exercises.length)*100}%`,transition:"width 0.4s ease",boxShadow:`0 0 10px rgba(204,255,0,0.5)`}}/>
        </div>

        <div style={{padding:"1rem 1.25rem",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.5rem"}}>
            <button onClick={()=>setMode("overview")} style={s.btnSm}>← Overview</button>
            <span style={{color:"rgba(255,255,255,0.4)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.1em"}}>{exIdx+1} / {day.exercises.length}</span>
          </div>

          {/* Animated gradient border card */}
          <div style={{position:"relative",borderRadius:"20px",padding:"2px",background:"linear-gradient(135deg,#CCFF00,#88ff00,#CCFF00,#aaee00)",backgroundSize:"300% 300%",animation:"gradientSpin 3s ease infinite",marginBottom:"1.25rem",boxShadow:"0 0 30px rgba(204,255,0,0.15)"}}>
            <div style={{background:"rgba(10,10,10,0.95)",borderRadius:"18px",padding:"1.5rem",animation:"fadeIn 0.3s ease",backdropFilter:"blur(20px)"}}>
              <div style={{marginBottom:"0.5rem"}}><Eyebrow label={ex.muscle}/></div>
              <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",lineHeight:1.05,marginBottom:"1rem",color:C.white}}>{ex.name}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",marginBottom:"1.25rem"}}>
                {[{l:"Sets",v:ex.sets},{l:"Reps",v:ex.reps},{l:"Rest",v:ex.rest}].map((x,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,0.06)",borderRadius:"10px",padding:"0.75rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.08)"}}>
                    <div style={{fontSize:"1.2rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.v}</div>
                    <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",marginTop:"3px",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"rgba(204,255,0,0.06)",borderRadius:"10px",padding:"0.85rem",borderLeft:`3px solid ${C.lime}`}}>
                <div style={{fontSize:"0.62rem",color:C.lime,fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.3rem"}}>Coaching Cue</div>
                <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>{ex.cue}</div>
              </div>
            </div>
          </div>

          {/* Set tracker - one at a time */}
          {(()=>{
            const completedCount=Array.from({length:totalSets},(_,i)=>completedSets[`${exIdx}-${i}`]).filter(Boolean).length;
            const currentSet=completedCount;
            const allDone=completedCount===totalSets;
            const log=setLogs[`${exIdx}-${currentSet}`];
            return(
              <div style={s.card}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
                  <div style={{...s.label,marginBottom:0,color:C.white}}>Set {Math.min(currentSet+1,totalSets)} of {totalSets}</div>
                  <div style={{display:"flex",gap:"4px"}}>
                    {Array.from({length:totalSets},(_,i)=>(
                      <div key={i} style={{width:"24px",height:"4px",borderRadius:"2px",background:i<completedCount?C.lime:i===completedCount?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.1)",transition:"background 0.3s"}}/>
                    ))}
                  </div>
                </div>
                {!allDone?(
                  <button onClick={()=>completeSet(exIdx,currentSet)} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"1.25rem",borderRadius:"14px",border:`2px solid rgba(204,255,0,0.4)`,background:"rgba(204,255,0,0.06)",cursor:"pointer",width:"100%",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                    <div style={{width:"40px",height:"40px",borderRadius:"50%",border:`2px solid rgba(204,255,0,0.5)`,background:"rgba(204,255,0,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                      <span style={{fontWeight:900,fontSize:"1.1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{currentSet+1}</span>
                    </div>
                    <div style={{flex:1,textAlign:"left"}}>
                      <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"1rem",textTransform:"uppercase",letterSpacing:"0.05em",color:C.white}}>Complete Set {currentSet+1}</div>
                      <div style={{color:"rgba(255,255,255,0.45)",fontSize:"0.8rem",fontFamily:"'Barlow',sans-serif",marginTop:"2px"}}>{ex.reps} reps · tap when done</div>
                    </div>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={C.lime} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </button>
                ):(
                  <div style={{textAlign:"center",padding:"1rem",color:C.lime,fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.1rem"}}>All {totalSets} sets complete! 🔥</div>
                )}
                {completedCount>0&&(
                  <div style={{marginTop:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"0.75rem"}}>
                    <div style={{...s.label,marginBottom:"0.5rem"}}>Completed sets</div>
                    {Array.from({length:completedCount},(_,i)=>{
                      const lg=setLogs[`${exIdx}-${i}`];
                      return(
                        <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.4rem 0",borderBottom:i<completedCount-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                          <div style={{width:"20px",height:"20px",borderRadius:"50%",background:C.lime,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                            <svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                          <span style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.82rem",textTransform:"uppercase",color:C.lime}}>Set {i+1}</span>
                          {lg?.weight?<span style={{marginLeft:"auto",color:"rgba(255,255,255,0.5)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{lg.weight}kg × {lg.reps}</span>:<span style={{marginLeft:"auto",color:"rgba(255,255,255,0.3)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Done</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })()}

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginTop:"0.5rem"}}>
            <button onClick={()=>exIdx>0&&setExIdx(i=>i-1)} disabled={exIdx===0} style={{...s.btnOutline,opacity:exIdx===0?0.3:1,padding:"0.85rem"}}>← Prev</button>
            <button onClick={()=>{if(isLast)finishWorkout();else{setTimerSecs(getRestSecs(ex.rest));setShowTimer(true);}}} style={{...s.btn,padding:"0.85rem"}}>{isLast?"Finish 🔥":"Next →"}</button>
          </div>
        </div>
      </div>
    );
  }

  // ── DONE ──
  if(step===4&&program&&mode==="done"){
    const day=program[activeDay];
    return(
      <div style={{...s.content,textAlign:"center",paddingTop:"3rem"}}>
        <style>{GLASS_STYLES}</style>
        <div style={{fontSize:"4rem",marginBottom:"1rem"}}>🔥</div>
        <div style={{fontSize:"2.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.lime,marginBottom:"0.5rem"}}>Workout Done!</div>
        <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",marginBottom:"2rem"}}>Every rep counts. You just built a better body.</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.75rem",marginBottom:"2rem"}}>
          {[{n:day.exercises.length,l:"Exercises"},{n:Object.keys(completedSets).length,l:"Sets Done"},{n:"100%",l:"Complete"}].map((x,i)=>(
            <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
          ))}
        </div>
        <WorkoutCalendar completedDates={completedDates}/>
        <button onClick={()=>setMode("overview")} style={{...s.btn,width:"100%",padding:"1rem",marginBottom:"0.75rem"}}>Back to Overview</button>
        <button onClick={()=>{localStorage.removeItem("fb_workout_settings");setStep(0);setProgram(null);setSplit("");setDays("");setLevel("");setWGoal("");}} style={{...s.btnOutline,width:"100%",padding:"1rem"}}>New Workout</button>
      </div>
    );
  }

  // ── SETUP FLOW ──
  return(
    <div style={s.content}>
      <style>{GLASS_STYLES}</style>
      <Eyebrow label="Personalised Programme"/>
      <h2 style={s.sectionTitle}>Workout Builder</h2>
      <p style={s.sectionSub}>4 questions. Your exact programme.</p>
      <div style={{display:"flex",gap:"4px",marginBottom:"1.5rem"}}>
        {[0,1,2,3].map(i=><div key={i} style={{flex:1,height:"3px",borderRadius:"2px",background:step>i?C.lime:step===i?`rgba(204,255,0,0.4)`:"rgba(255,255,255,0.1)",transition:"background 0.3s"}}/>)}
      </div>
      {step===0&&(
        <div>
          <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Choose your training split</label>
          {[{k:"ppl",l:"Push / Pull / Legs",d:"3-6 days · Classic bodybuilding split",icon:"⚡"},{k:"upper_lower",l:"Upper / Lower",d:"4 days · Best for strength & size",icon:"💪"},{k:"muscle_group",l:"Muscle Group",d:"5 days · Dedicated focus per muscle",icon:"🎯"},{k:"full_body",l:"Full Body / HIIT",d:"3 days · Fat loss & conditioning",icon:"🔥"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setSplit(opt.k);setStep(1);}} style={{...s.card,cursor:"pointer",border:`1px solid ${split===opt.k?C.lime:"rgba(255,255,255,0.1)"}`,background:split===opt.k?`rgba(204,255,0,0.08)`:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"1rem",transition:"all 0.15s"}}>
              <span style={{fontSize:"1.5rem",flexShrink:0}}>{opt.icon}</span>
              <div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.2rem",color:C.white}}>{opt.l}</div><div style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div></div>
              <span style={{marginLeft:"auto",color:C.lime,fontSize:"1rem",flexShrink:0}}>→</span>
            </div>
          ))}
        </div>
      )}
      {step===1&&(
        <div>
          <button onClick={()=>setStep(0)} style={{...s.btnSm,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Days per week?</label>
          <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.75rem"}}>
            {[3,4,5,6].map(d=>(
              <button key={d} onClick={()=>{setDays(String(d));setStep(2);}} style={{background:days===String(d)?C.lime:"rgba(255,255,255,0.06)",color:days===String(d)?C.black:C.white,border:`1px solid ${days===String(d)?C.lime:"rgba(255,255,255,0.12)"}`,borderRadius:"14px",padding:"1.25rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.4rem",cursor:"pointer",transition:"all 0.15s",backdropFilter:"blur(10px)"}}>
                {d}<div style={{fontSize:"0.65rem",fontWeight:800,letterSpacing:"0.1em",marginTop:"2px",opacity:0.7}}>DAYS/WEEK</div>
              </button>
            ))}
          </div>
        </div>
      )}
      {step===2&&(
        <div>
          <button onClick={()=>setStep(1)} style={{...s.btnSm,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Experience level</label>
          {[{k:"beginner",l:"Beginner",d:"Less than 1 year training",icon:"🌱"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent training",icon:"⚡"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements",icon:"🔥"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setLevel(opt.k);setStep(3);}} style={{...s.card,cursor:"pointer",border:`1px solid ${level===opt.k?C.lime:"rgba(255,255,255,0.1)"}`,background:level===opt.k?`rgba(204,255,0,0.08)`:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"1rem",transition:"all 0.15s"}}>
              <span style={{fontSize:"1.5rem",flexShrink:0}}>{opt.icon}</span>
              <div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem",color:C.white}}>{opt.l}</div><div style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div></div>
              <span style={{marginLeft:"auto",color:C.lime,fontSize:"1rem",flexShrink:0}}>→</span>
            </div>
          ))}
        </div>
      )}
      {step===3&&(
        <div>
          <button onClick={()=>setStep(2)} style={{...s.btnSm,marginBottom:"1rem"}}>← Back</button>
          <label style={{...s.label,fontSize:"0.85rem",color:C.white,marginBottom:"0.75rem",display:"block"}}>Primary goal</label>
          {[{k:"muscle",l:"Muscle & Size",d:"Hypertrophy focus, moderate reps",icon:"💪"},{k:"strength",l:"Strength",d:"Heavy compounds, low reps",icon:"🏋️"},{k:"fat loss",l:"Fat Loss",d:"Higher reps, shorter rest",icon:"🔥"},{k:"athletic",l:"Athletic Performance",d:"Power, speed & conditioning",icon:"⚡"}].map(opt=>(
            <div key={opt.k} onClick={()=>{setWGoal(opt.k);buildProgram(opt.k);}} style={{...s.card,cursor:"pointer",border:`1px solid ${wGoal===opt.k?C.lime:"rgba(255,255,255,0.1)"}`,background:wGoal===opt.k?`rgba(204,255,0,0.08)`:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"1rem",transition:"all 0.15s"}}>
              <span style={{fontSize:"1.5rem",flexShrink:0}}>{opt.icon}</span>
              <div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.2rem",color:C.white}}>{opt.l}</div><div style={{color:"rgba(255,255,255,0.45)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div></div>
              <span style={{marginLeft:"auto",color:C.lime,fontSize:"1rem",flexShrink:0}}>→</span>
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

// ─── ONBOARDING ──────────────────────────────────────────────────────────────
function Onboarding({user,onComplete}){
  const[step,setStep]=useState(0);
  const[data,setData]=useState({name:"",goal:"",weight:"",unit:"kg",diet:"standard"});
  function update(k,v){setData(d=>({...d,[k]:v}));}
  async function finish(){
    await supabase.from("profiles").upsert({user_id:user.id,...data,onboarded:true});
    onComplete(data);
  }
  const steps=[
    <div key={0}>
      <div style={{textAlign:"center",marginBottom:"2rem"}}>
        <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>👋</div>
        <div style={{fontSize:"1.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",marginBottom:"0.5rem"}}>Welcome to<br/><span style={{color:C.lime}}>ForgeBody</span></div>
        <div style={{color:C.mutedLight,fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem"}}>Let's set up your profile. Takes 60 seconds.</div>
      </div>
      <div style={s.card}>
        <label style={s.label}>What's your name?</label>
        <input style={s.input} placeholder="First name" value={data.name} onChange={e=>update("name",e.target.value)}/>
        <button onClick={()=>data.name&&setStep(1)} style={{...s.btn,width:"100%",padding:"0.9rem",opacity:data.name?1:0.5}}>Continue →</button>
      </div>
    </div>,
    <div key={1}>
      <div style={{marginBottom:"1.25rem"}}><Eyebrow label="Step 2 of 4"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>What's your main goal?</div></div>
      {[{k:"fat loss",l:"Fat Loss",d:"Burn fat, get lean",icon:"🔥"},{k:"muscle",l:"Muscle & Size",d:"Build muscle, get bigger",icon:"💪"},{k:"strength",l:"Strength",d:"Get stronger, lift heavier",icon:"🏋️"},{k:"athletic",l:"Athletic Performance",d:"Speed, power, conditioning",icon:"⚡"}].map(opt=>(
        <div key={opt.k} onClick={()=>{update("goal",opt.k);setStep(2);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.goal===opt.k?C.lime:C.cardBorder}`,display:"flex",alignItems:"center",gap:"1rem"}}>
          <span style={{fontSize:"1.5rem"}}>{opt.icon}</span>
          <div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>{opt.l}</div><div style={{color:C.mutedLight,fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{opt.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={2}>
      <div style={{marginBottom:"1.25rem"}}><Eyebrow label="Step 3 of 4"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>Current bodyweight?</div></div>
      <div style={s.card}>
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem"}}>
          {["kg","lbs"].map(u=><button key={u} onClick={()=>update("unit",u)} style={{flex:1,padding:"0.6rem",borderRadius:"6px",border:`1px solid ${data.unit===u?C.lime:C.cardBorder}`,background:data.unit===u?`${C.lime}15`:"transparent",color:data.unit===u?C.lime:C.mutedLight,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.85rem",cursor:"pointer",textTransform:"uppercase"}}>{u}</button>)}
        </div>
        <input style={s.input} type="number" placeholder={data.unit==="kg"?"e.g. 85":"e.g. 187"} value={data.weight} onChange={e=>update("weight",e.target.value)}/>
        <button onClick={()=>data.weight&&setStep(3)} style={{...s.btn,width:"100%",padding:"0.9rem",opacity:data.weight?1:0.5}}>Continue →</button>
      </div>
    </div>,
    <div key={3}>
      <div style={{marginBottom:"1.25rem"}}><Eyebrow label="Step 4 of 4"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase"}}>Dietary preference?</div></div>
      <div style={s.card}>
        <select style={s.select} value={data.diet} onChange={e=>update("diet",e.target.value)}>
          {["standard","vegetarian","vegan","keto","gluten-free","dairy-free","halal"].map(d=><option key={d} value={d}>{d.charAt(0).toUpperCase()+d.slice(1)}</option>)}
        </select>
        <button onClick={finish} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Let's Forge 🔥</button>
      </div>
    </div>,
  ];
  return(
    <div style={{minHeight:"100vh",background:C.black,padding:"2rem 1.25rem"}}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
      <div style={{maxWidth:"440px",margin:"0 auto"}}>
        <div style={{display:"flex",gap:"4px",marginBottom:"2rem"}}>
          {[0,1,2,3].map(i=><div key={i} style={{flex:1,height:"3px",borderRadius:"2px",background:step>i?C.lime:step===i?`${C.lime}60`:C.cardBorder,transition:"background 0.3s"}}/>)}
        </div>
        {steps[step]}
      </div>
    </div>
  );
}

// ─── WATER TRACKER ───────────────────────────────────────────────────────────
function WaterTracker(){
  const today=new Date().toDateString();
  const[glasses,setGlasses]=useState(()=>{try{return parseInt(localStorage.getItem(`water_${today}`))||0;}catch{return 0;}});
  const goal=8;
  useEffect(()=>{try{localStorage.setItem(`water_${today}`,glasses);}catch{}},[glasses]);
  const pct=Math.min(100,Math.round((glasses/goal)*100));
  return(
    <div style={s.card}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
        <div><Eyebrow label="Hydration"/><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem"}}>Water Intake</div></div>
        <div style={{textAlign:"right"}}><div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{glasses}<span style={{fontSize:"1rem",color:C.muted}}>/{goal}</span></div><div style={{fontSize:"0.6rem",color:C.muted,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>Glasses</div></div>
      </div>
      <div style={{display:"flex",gap:"6px",marginBottom:"0.75rem",flexWrap:"wrap"}}>
        {Array.from({length:goal},(_,i)=>(
          <div key={i} onClick={()=>setGlasses(i+1)} style={{flex:"0 0 calc(12.5% - 6px)",aspectRatio:"1",borderRadius:"8px",background:i<glasses?"#3b82f6":C.cardBorder,border:`1px solid ${i<glasses?"#60a5fa":C.cardBorder}`,cursor:"pointer",transition:"all 0.2s",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill={i<glasses?"#93c5fd":"#333"} stroke="none"><path d="M12 2C6 8 4 12 4 15a8 8 0 0 0 16 0c0-3-2-7-8-13z"/></svg>
          </div>
        ))}
      </div>
      <div style={s.progressBar}><div style={{...s.progressFill,background:"#3b82f6",width:`${pct}%`}}/></div>
      <div style={{display:"flex",gap:"0.5rem",marginTop:"0.75rem"}}>
        <button onClick={()=>setGlasses(g=>Math.min(goal,g+1))} style={{...s.btn,flex:1,padding:"0.65rem"}}>+ Glass</button>
        <button onClick={()=>setGlasses(0)} style={{...s.btnOutline,padding:"0.65rem 1rem",fontSize:"0.78rem"}}>Reset</button>
      </div>
    </div>
  );
}

// ─── 1RM CALCULATOR ──────────────────────────────────────────────────────────
function OneRMCalc(){
  const[weight,setWeight]=useState("");
  const[reps,setReps]=useState("");
  const w=parseFloat(weight),r=parseInt(reps);
  const orm=w&&r&&r>0?Math.round(w*(1+r/30)):null;
  const percentages=[100,95,90,85,80,75,70,65];
  return(
    <div style={s.card}>
      <Eyebrow label="Strength Calculator"/>
      <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.75rem"}}>1 Rep Max Calculator</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.75rem"}}>
        <div><label style={s.label}>Weight lifted</label><input style={s.input} type="number" placeholder="100kg" value={weight} onChange={e=>setWeight(e.target.value)}/></div>
        <div><label style={s.label}>Reps completed</label><input style={s.input} type="number" placeholder="8" value={reps} onChange={e=>setReps(e.target.value)}/></div>
      </div>
      {orm&&(
        <>
          <div style={{textAlign:"center",padding:"1rem",background:"#0f0f0f",borderRadius:"8px",marginBottom:"0.75rem",border:`1px solid ${C.lime}30`}}>
            <div style={{fontSize:"0.65rem",color:C.muted,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.15em",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>Estimated 1RM</div>
            <div style={{fontSize:"3rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{orm}<span style={{fontSize:"1.2rem",color:C.muted}}>kg</span></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"4px"}}>
            {percentages.map(p=>(
              <div key={p} style={{background:"#0f0f0f",border:`1px solid ${C.cardBorder}`,borderRadius:"6px",padding:"0.5rem",textAlign:"center"}}>
                <div style={{fontSize:"0.95rem",fontWeight:900,color:p===100?C.lime:C.white,fontFamily:"'Barlow Condensed',sans-serif"}}>{Math.round(orm*p/100)}</div>
                <div style={{fontSize:"0.58rem",color:C.muted,fontWeight:800,textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>{p}%</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── BODY MEASUREMENTS ───────────────────────────────────────────────────────
function BodyMeasurements({user}){
  const[entries,setEntries]=useState([]);
  const[form,setForm]=useState({chest:"",waist:"",hips:"",arms:"",thighs:"",neck:""});
  const[saving,setSaving]=useState(false);
  const[loading,setLoading]=useState(true);

  useEffect(()=>{
    supabase.from("measurements").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(10).then(({data})=>{setEntries(data||[]);setLoading(false);});
  },[]);

  async function save(){
    const vals=Object.fromEntries(Object.entries(form).filter(([,v])=>v).map(([k,v])=>[k,parseFloat(v)]));
    if(!Object.keys(vals).length)return;
    setSaving(true);
    await supabase.from("measurements").insert({user_id:user.id,...vals});
    const{data}=await supabase.from("measurements").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(10);
    setEntries(data||[]);setForm({chest:"",waist:"",hips:"",arms:"",thighs:"",neck:""});setSaving(false);
  }

  const fields=["chest","waist","hips","arms","thighs","neck"];
  const latest=entries[0];
  const prev=entries[1];

  return(
    <div style={s.content}>
      <Eyebrow label="Body Stats"/>
      <h2 style={s.sectionTitle}>Measurements</h2>
      <p style={s.sectionSub}>Track every inch of your transformation.</p>
      {latest&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
          {fields.map(f=>latest[f]?(
            <div key={f} style={s.statCard}>
              <div style={{...s.statNum,fontSize:"1.4rem"}}>{latest[f]}<span style={{fontSize:"0.75rem",color:C.muted}}>cm</span></div>
              {prev&&prev[f]&&<div style={{fontSize:"0.65rem",color:latest[f]<prev[f]?C.lime:"#f97316",fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif"}}>{latest[f]<prev[f]?"▼":"▲"} {Math.abs(latest[f]-prev[f]).toFixed(1)}</div>}
              <div style={s.statLabel}>{f}</div>
            </div>
          ):null)}
        </div>
      )}
      <div style={s.card}>
        <label style={{...s.label,color:C.white,marginBottom:"0.75rem",fontSize:"0.75rem"}}>Log measurements (cm)</label>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem"}}>
          {fields.map(f=>(
            <div key={f}><label style={s.label}>{f.charAt(0).toUpperCase()+f.slice(1)}</label><input style={s.input} type="number" placeholder="cm" value={form[f]} onChange={e=>setForm(prev=>({...prev,[f]:e.target.value}))}/></div>
          ))}
        </div>
        <button onClick={save} disabled={saving} style={{...s.btn,width:"100%",padding:"0.85rem"}}>{saving?"Saving...":"Save Measurements"}</button>
      </div>
      {loading?<LoadingDots/>:entries.length>0&&(
        <div style={s.card}>
          <label style={{...s.label,marginBottom:"0.75rem"}}>History</label>
          {entries.slice(0,5).map((e,i)=>(
            <div key={i} style={{borderBottom:`1px solid ${C.cardBorder}22`,paddingBottom:"0.5rem",marginBottom:"0.5rem"}}>
              <div style={{color:C.muted,fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif",marginBottom:"0.25rem"}}>{new Date(e.created_at).toLocaleDateString("en-AU",{month:"short",day:"numeric",year:"numeric"})}</div>
              <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap"}}>
                {fields.map(f=>e[f]?<span key={f} style={s.tagGray}>{f}: {e[f]}cm</span>:null)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── WORKOUT HISTORY ─────────────────────────────────────────────────────────
function WorkoutHistory({user}){
  const[history,setHistory]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    supabase.from("workout_history").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(20).then(({data})=>{setHistory(data||[]);setLoading(false);});
  },[]);
  const totalSessions=history.length;
  const thisWeek=history.filter(h=>{const d=new Date(h.created_at);const now=new Date();return(now-d)/(1000*60*60*24)<=7;}).length;
  return(
    <div style={s.content}>
      <Eyebrow label="Training Log"/>
      <h2 style={s.sectionTitle}>Workout History</h2>
      <p style={s.sectionSub}>Every session you've ever completed.</p>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[{n:totalSessions,l:"Total Sessions"},{n:thisWeek,l:"This Week"},{n:history.length>0?Math.round(history.reduce((a,h)=>a+(h.exercises||0),0)/history.length):0,l:"Avg Exercises"}].map((x,i)=>(
          <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
        ))}
      </div>
      {loading?<LoadingDots/>:history.length===0?(
        <div style={{...s.card,textAlign:"center",padding:"2rem"}}>
          <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>🏋️</div>
          <div style={{color:C.mutedLight,fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem"}}>No workouts logged yet. Complete a workout to see your history here.</div>
        </div>
      ):history.map((h,i)=>(
        <div key={i} style={s.card}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
            <div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1rem",marginBottom:"0.25rem"}}>{h.day_label||"Workout"}</div>
              <div style={{color:C.muted,fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>{new Date(h.created_at).toLocaleDateString("en-AU",{weekday:"short",month:"short",day:"numeric"})}</div>
            </div>
            <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",justifyContent:"flex-end"}}>
              <span style={s.tagGray}>{h.exercises||0} exercises</span>
              <span style={s.tagGray}>{h.sets_completed||0} sets</span>
            </div>
          </div>
          {h.split&&<div style={{marginTop:"0.5rem"}}><span style={s.tag}>{h.split}</span></div>}
        </div>
      ))}
    </div>
  );
}

// ─── NUTRITION TIPS ──────────────────────────────────────────────────────────
const ARTICLES=[
  {title:"Protein: How Much Do You Actually Need?",cat:"Nutrition",read:"3 min",content:"The most common recommendation is 0.8g per kg of bodyweight, but for people training to build muscle or lose fat, the research consistently shows 1.6-2.2g per kg is optimal. If you weigh 80kg, that's 128-176g of protein daily. Spread it across 3-5 meals for best results. Chicken, fish, eggs, Greek yogurt and protein shakes are your best friends.",emoji:"🥩"},
  {title:"Why You're Not Losing Fat (And How to Fix It)",cat:"Fat Loss",read:"4 min",content:"If fat loss has stalled, there are three likely culprits: you're eating more than you think (track everything for a week), you've adapted to your deficit (take a 1-2 week diet break at maintenance), or you're not sleeping enough (under 7 hours dramatically increases hunger hormones). Fix these three and fat loss will resume.",emoji:"🔥"},
  {title:"Progressive Overload: The Only Rule That Matters",cat:"Training",read:"3 min",content:"Progressive overload means doing more over time — more weight, more reps, more sets, or shorter rest. If you lifted 60kg for 8 reps last week, aim for 62.5kg or 9 reps this week. Track your lifts. Without progression, your body has no reason to change. This is the single most important principle in all of training.",emoji:"📈"},
  {title:"Sleep: The Most Underrated Performance Tool",cat:"Recovery",read:"3 min",content:"During deep sleep, your body releases 70% of its daily growth hormone — the primary driver of muscle repair and fat burning. Under 7 hours and cortisol spikes, testosterone drops, hunger hormones increase, and recovery suffers. Prioritise 7-9 hours. No supplement comes close to what proper sleep does for your body composition.",emoji:"😴"},
  {title:"Creatine: The Only Supplement You Actually Need",cat:"Supplements",read:"2 min",content:"Creatine monohydrate is the most researched sports supplement in history. It works by replenishing ATP (your muscles' energy currency) faster, allowing you to do 1-2 more reps per set. Over months, this compounds into significantly more muscle. 5g per day, any time, no loading phase. Buy the cheapest unflavoured powder you can find — they're all identical.",emoji:"⚡"},
  {title:"The Truth About Carbs and Fat Loss",cat:"Nutrition",read:"3 min",content:"Carbs don't make you fat — excess calories do. Carbs are your primary fuel source for high-intensity training. Cut them too low and your performance crashes, muscle is lost, and you feel terrible. A moderate deficit of 300-500 calories below maintenance, with adequate protein, will produce consistent fat loss regardless of carb intake.",emoji:"🍚"},
  {title:"How to Break Through a Strength Plateau",cat:"Training",read:"4 min",content:"Plateaus happen when your body adapts. Solutions: deload for a week (drop to 60% of normal volume), change rep ranges (if you've been doing 8-10, try 4-6 or 12-15), change exercise variation (swap barbell bench for dumbbell), add a tempo (3 seconds down, 1 second up). Most importantly, ensure sleep and nutrition are dialled in before blaming the programme.",emoji:"💪"},
  {title:"Meal Timing: Does It Actually Matter?",cat:"Nutrition",read:"2 min",content:"The short answer: much less than you think. Total daily protein and calories matter far more than when you eat them. However, there is benefit to consuming 20-40g protein within 2 hours post-workout to maximise muscle protein synthesis. Pre-workout, eat whatever gives you energy — usually a moderate-carb meal 1-2 hours before is ideal.",emoji:"⏰"},
];

function NutritionTips(){
  const[selected,setSelected]=useState(null);
  const[catFilter,setCatFilter]=useState("All");
  const cats=["All",...new Set(ARTICLES.map(a=>a.cat))];
  const filtered=catFilter==="All"?ARTICLES:ARTICLES.filter(a=>a.cat===catFilter);
  if(selected){
    const a=ARTICLES[selected];
    return(
      <div style={s.content}>
        <button onClick={()=>setSelected(null)} style={{...s.btnSm,background:"transparent",color:C.mutedLight,border:`1px solid ${C.cardBorder}`,marginBottom:"1.25rem"}}>← Back</button>
        <div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>{a.emoji}</div>
        <span style={s.tag}>{a.cat}</span>
        <h2 style={{fontSize:"1.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.01em",margin:"0.5rem 0 0.25rem"}}>{a.title}</h2>
        <div style={{color:C.muted,fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif",marginBottom:"1.25rem"}}>{a.read} read</div>
        <div style={{...s.card,fontFamily:"'Barlow',sans-serif",fontSize:"0.95rem",lineHeight:1.75,color:C.mutedLight}}>{a.content}</div>
      </div>
    );
  }
  return(
    <div style={s.content}>
      <Eyebrow label="Learn"/>
      <h2 style={s.sectionTitle}>Nutrition & Training</h2>
      <p style={s.sectionSub}>Evidence-based articles to level up your knowledge.</p>
      <div style={{display:"flex",gap:"0.4rem",overflowX:"auto",marginBottom:"1rem",paddingBottom:"4px"}}>
        {cats.map(c=><button key={c} onClick={()=>setCatFilter(c)} style={{...s.btnSm,flexShrink:0,background:catFilter===c?C.lime:"transparent",color:catFilter===c?C.black:C.mutedLight,border:catFilter===c?"none":`1px solid ${C.cardBorder}`}}>{c}</button>)}
      </div>
      {filtered.map((a,i)=>(
        <div key={i} onClick={()=>setSelected(ARTICLES.indexOf(a))} style={{...s.card,cursor:"pointer",display:"flex",gap:"1rem",alignItems:"center"}}>
          <span style={{fontSize:"2rem",flexShrink:0}}>{a.emoji}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.92rem",marginBottom:"0.25rem",lineHeight:1.2}}>{a.title}</div>
            <div style={{display:"flex",gap:"0.4rem",alignItems:"center"}}><span style={s.tag}>{a.cat}</span><span style={{color:C.muted,fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{a.read} read</span></div>
          </div>
          <span style={{color:C.lime,flexShrink:0}}>→</span>
        </div>
      ))}
    </div>
  );
}

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icons={
  home:(a)=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?"rgba(204,255,0,0.2)":"none"} stroke={a?C.lime:"rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  meal:(a)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:"rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  macros:(a)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:"rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>,
  coach:(a)=><svg width="20" height="20" viewBox="0 0 24 24" fill={a?"rgba(204,255,0,0.15)":"none"} stroke={a?C.lime:"rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  profile:(a)=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={a?C.lime:"rgba(255,255,255,0.4)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
};

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────
function HomeScreen({profile,user,onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const totalWorkouts=completedDates.length;
  const thisWeek=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=7).length;
  const memberSince=user?.created_at?new Date(user.created_at).toLocaleDateString("en-AU",{month:"short",year:"numeric"}):"—";
  const hour=new Date().getHours();
  const greetText=hour<12?"Good morning":hour<17?"Good afternoon":"Good evening";
  return(
    <div style={s.content}>
      <div style={{marginBottom:"1.5rem"}}>
        <div style={{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>{greetText}</div>
        <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.white,lineHeight:1}}>
          {profile?.name||"Athlete"} <span style={{color:C.lime}}>🔥</span>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[{n:totalWorkouts,l:"Workouts"},{n:thisWeek,l:"This Week"},{n:memberSince,l:"Member Since"}].map((x,i)=>(
          <div key={i} style={s.statCard}>
            <div style={{...s.statNum,fontSize:i===2?"0.9rem":"2rem"}}>{x.n}</div>
            <div style={s.statLabel}>{x.l}</div>
          </div>
        ))}
      </div>
      <div onClick={()=>onNavigate("workout")} style={{background:"linear-gradient(135deg,rgba(204,255,0,0.12),rgba(100,180,0,0.06))",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"20px",padding:"1.5rem",marginBottom:"0.75rem",cursor:"pointer",backdropFilter:"blur(20px)",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-20px",right:"-20px",width:"100px",height:"100px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(20px)",pointerEvents:"none"}}/>
        <Eyebrow label={settings.split?"Your Programme":"Start Here"}/>
        <div style={{fontSize:"1.6rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.5rem",lineHeight:1}}>
          {settings.split?"Continue Training":"Set Up Your Programme"}
        </div>
        <div style={{color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",marginBottom:"1rem"}}>
          {settings.split?`${(settings.split||"").replace("_"," ").toUpperCase()} · ${settings.days} days/week · ${settings.level}`:"Choose your split, level and goal"}
        </div>
        <div style={{...s.btn,display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.7rem 1.25rem",fontSize:"0.85rem"}}>
          {settings.split?"Start Workout →":"Build My Programme →"}
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[
          {label:"Meal Planner",desc:"Build today's meals",icon:"🍽️",tab:"meal"},
          {label:"AI Coach",desc:"Ask anything",icon:"💬",tab:"coach"},
          {label:"Macro Tracker",desc:"Log your food",icon:"📊",tab:"macros"},
          {label:"Supplements",desc:"What to take",icon:"💊",sub:"supplements"},
        ].map((item,i)=>(
          <div key={i} onClick={()=>item.tab?onNavigate(item.tab):onNavigate("more",item.sub)} style={{...s.card,cursor:"pointer",padding:"1rem"}}>
            <span style={{fontSize:"1.5rem",display:"block",marginBottom:"0.4rem"}}>{item.icon}</span>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white,marginBottom:"0.15rem"}}>{item.label}</div>
            <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div>
          </div>
        ))}
      </div>
      <WorkoutCalendar completedDates={completedDates}/>
    </div>
  );
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────────
function Sidebar({open,onClose,user,profile,onNavigate,onSignOut}){
  const[trainingOpen,setTrainingOpen]=useState(false);
  if(!open)return null;
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  function resetTraining(){localStorage.removeItem("fb_workout_settings");onClose();onNavigate("workout");}
  return(
    <>
      <div onClick={onClose} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",backdropFilter:"blur(8px)",zIndex:200}}/>
      <div style={{position:"fixed",top:0,left:0,bottom:0,width:"280px",background:"rgba(10,10,10,0.96)",backdropFilter:"blur(40px)",borderRight:"1px solid rgba(255,255,255,0.1)",zIndex:201,overflowY:"auto"}}>
        <div style={{padding:"1.25rem",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{fontSize:"1.1rem",fontWeight:900,letterSpacing:"0.05em",color:C.white,textTransform:"uppercase"}}>FORGE<span style={{color:C.lime}}>/</span>BODY</div>
          <button onClick={onClose} style={{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",width:"32px",height:"32px",color:"rgba(255,255,255,0.6)",cursor:"pointer",fontSize:"1.1rem",display:"flex",alignItems:"center",justifyContent:"center"}}>×</button>
        </div>
        <div style={{padding:"1.25rem",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
          <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
            <div style={{width:"42px",height:"42px",borderRadius:"50%",background:"rgba(204,255,0,0.15)",border:"1px solid rgba(204,255,0,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.1rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",flexShrink:0}}>
              {(profile?.name||user?.email||"A")[0].toUpperCase()}
            </div>
            <div>
              <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.95rem",color:C.white}}>{profile?.name||"Athlete"}</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>{user?.email}</div>
            </div>
          </div>
        </div>
        <div style={{padding:"0.75rem 0"}}>
          {[
            {label:"Workout History",icon:"🗓️",action:()=>{onNavigate("more","history");onClose();}},
            {label:"Body Measurements",icon:"📏",action:()=>{onNavigate("more","measurements");onClose();}},
            {label:"Progress Tracker",icon:"📈",action:()=>{onNavigate("more","progress");onClose();}},
            {label:"Supplement Guide",icon:"💊",action:()=>{onNavigate("more","supplements");onClose();}},
            {label:"Nutrition Articles",icon:"📚",action:()=>{onNavigate("more","articles");onClose();}},
            {label:"Mindset & Habits",icon:"🧠",action:()=>{onNavigate("more","habits");onClose();}},
          ].map((item,i)=>(
            <button key={i} onClick={item.action} style={{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.85rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontSize:"1.2rem",flexShrink:0}}>{item.icon}</span>
              <span style={{fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.04em"}}>{item.label}</span>
            </button>
          ))}
          <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"0.5rem",paddingTop:"0.5rem"}}>
            <button onClick={()=>setTrainingOpen(!trainingOpen)} style={{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.85rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontSize:"1.2rem"}}>⚙️</span>
              <span style={{fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.04em",flex:1}}>Training Settings</span>
              <span style={{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"}}>{trainingOpen?"▲":"▼"}</span>
            </button>
            {trainingOpen&&(
              <div style={{padding:"0 1.25rem 0.75rem"}}>
                {settings.split?(
                  <>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",marginBottom:"0.75rem"}}>
                      {[{l:"Split",v:(settings.split||"").replace("_"," ")},{l:"Days",v:settings.days},{l:"Level",v:settings.level},{l:"Goal",v:settings.wGoal}].map((x,i)=>x.v?(
                        <div key={i} style={{background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"0.5rem 0.75rem"}}>
                          <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
                          <div style={{fontSize:"0.82rem",fontWeight:800,color:C.white,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"capitalize"}}>{x.v}</div>
                        </div>
                      ):null)}
                    </div>
                    <button onClick={resetTraining} style={{...s.btnOutline,width:"100%",fontSize:"0.8rem",padding:"0.6rem"}}>Change Programme →</button>
                  </>
                ):(
                  <button onClick={()=>{onNavigate("workout");onClose();}} style={{...s.btn,width:"100%",fontSize:"0.8rem",padding:"0.6rem"}}>Set Up Programme →</button>
                )}
              </div>
            )}
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"0.5rem",paddingTop:"0.5rem"}}>
            <button onClick={()=>{onNavigate("more","profile-sub");onClose();}} style={{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.85rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontSize:"1.2rem"}}>💳</span>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.04em"}}>Subscription</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginTop:"1px"}}>$19/month · Active</div>
              </div>
              <span style={s.tag}>Pro</span>
            </button>
            <button style={{display:"flex",alignItems:"center",gap:"0.75rem",width:"100%",padding:"0.85rem 1.25rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left"}}>
              <span style={{fontSize:"1.2rem"}}>💬</span>
              <span style={{fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:"rgba(255,255,255,0.8)",letterSpacing:"0.04em"}}>Support</span>
            </button>
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"0.5rem",padding:"0.75rem 1.25rem"}}>
            <button onClick={onSignOut} style={{...s.btnOutline,width:"100%",fontSize:"0.85rem",color:"rgba(255,100,100,0.8)",borderColor:"rgba(255,100,100,0.2)"}}>Sign Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

// ─── PROFILE TAB ─────────────────────────────────────────────────────────────
function ProfileTab({user,onSignOut,onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const thisWeek=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=7).length;
  const thisMonth=completedDates.filter(d=>(new Date()-new Date(d))/(1000*60*60*24)<=30).length;
  const memberSince=user?.created_at?new Date(user.created_at).toLocaleDateString("en-AU",{month:"long",year:"numeric"}):"—";
  const avgPerWeek=completedDates.length>0?Math.round(completedDates.length/Math.max(1,Math.ceil((new Date()-new Date(completedDates[0]))/(1000*60*60*24*7)))):0;
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
      <Eyebrow label="Your Profile"/>
      <h2 style={s.sectionTitle}>Profile</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem",marginBottom:"0.75rem"}}>
        {[{n:completedDates.length,l:"Total Workouts"},{n:thisWeek,l:"This Week"},{n:thisMonth,l:"This Month"},{n:avgPerWeek||"—",l:"Avg / Week"}].map((x,i)=>(
          <div key={i} style={s.statCard}><div style={s.statNum}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
        ))}
      </div>
      <div style={s.card}>
        <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
          <div style={{width:"46px",height:"46px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:"1.2rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",flexShrink:0}}>
            {user.email[0].toUpperCase()}
          </div>
          <div>
            <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.03em",fontSize:"0.9rem",color:C.white}}>{user.email}</div>
            <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>Member since {memberSince}</div>
          </div>
        </div>
        <div style={{...s.card,background:"rgba(204,255,0,0.07)",borderColor:"rgba(204,255,0,0.2)",padding:"0.85rem",marginBottom:"0.75rem"}}>
          <div style={{fontSize:"0.65rem",color:C.lime,fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>ForgeBody Pro · $19/month · Active</div>
        </div>
        <button onClick={onSignOut} style={{...s.btnOutline,width:"100%",color:"rgba(255,100,100,0.8)",borderColor:"rgba(255,100,100,0.2)"}}>Sign Out</button>
      </div>
      <div style={{...s.card,background:"rgba(204,255,0,0.04)",borderColor:"rgba(204,255,0,0.15)"}}>
        <p style={{color:C.lime,fontWeight:800,fontSize:"0.65rem",letterSpacing:"0.15em",textTransform:"uppercase",margin:"0 0 0.35rem",fontFamily:"'Barlow Condensed',sans-serif"}}>Founding Member?</p>
        <p style={{color:"rgba(255,255,255,0.45)",margin:0,fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>Bought the $27 PDF guide? Email your receipt to support@forgebody.com for free lifetime access.</p>
      </div>
      <div style={{...s.label,marginBottom:"0.75rem",marginTop:"0.25rem"}}>Quick Access</div>
      {items.map(item=>(
        <div key={item.id} onClick={()=>onNavigate("more",item.id)} style={{...s.card,cursor:"pointer",display:"flex",alignItems:"center",gap:"1rem",padding:"1rem 1.25rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.3rem",flexShrink:0}}>{item.icon}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white,marginBottom:"0.15rem"}}>{item.label}</div>
            <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>{item.desc}</div>
          </div>
          <span style={{color:C.lime,fontSize:"1rem"}}>→</span>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function ForgeBodyApp(){
  const[session,setSession]=useState(null);
  const[loading,setLoading]=useState(true);
  const[tab,setTab]=useState("home");
  const[subTab,setSubTab]=useState(null);
  const[profile,setProfile]=useState(null);
  const[showOnboarding,setShowOnboarding]=useState(false);
  const[sidebarOpen,setSidebarOpen]=useState(false);

  useEffect(()=>{
    supabase.auth.getSession().then(({data})=>{
      setSession(data.session);
      if(data.session)checkProfile(data.session.user);
      setLoading(false);
    });
    const{data:listener}=supabase.auth.onAuthStateChange((_e,sess)=>{
      setSession(sess);
      if(sess)checkProfile(sess.user);
    });
    return()=>listener.subscription.unsubscribe();
  },[]);

  async function checkProfile(user){
    const{data}=await supabase.from("profiles").select("*").eq("user_id",user.id).single();
    if(!data||!data.onboarded)setShowOnboarding(true);
    else setProfile(data);
  }

  async function signOut(){await supabase.auth.signOut();setSession(null);setProfile(null);}

  function navigate(t,sub=null){setTab(t);setSubTab(sub);setSidebarOpen(false);}
  function handleTabChange(t){setTab(t);setSubTab(null);}

  if(loading)return<div style={{...s.app,display:"flex",alignItems:"center",justifyContent:"center",paddingBottom:0}}><LoadingDots/></div>;
  if(session&&showOnboarding)return<Onboarding user={session.user} onComplete={p=>{setProfile(p);setShowOnboarding(false);}}/>;

  const showBack=subTab&&tab==="more";

  return(
    <div style={s.app}>
      <style>{GLASS_STYLES}</style>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
      {!session?<AuthScreen/>:(
        <>
          <Sidebar open={sidebarOpen} onClose={()=>setSidebarOpen(false)} user={session.user} profile={profile} onNavigate={navigate} onSignOut={signOut}/>
          <nav style={s.nav}>
            {showBack
              ?<button onClick={()=>setSubTab(null)} style={s.btnSm}>← Back</button>
              :<button onClick={()=>setSidebarOpen(true)} style={{background:"transparent",border:"none",cursor:"pointer",padding:"4px",display:"flex",flexDirection:"column",gap:"5px"}}>
                <div style={{width:"20px",height:"2px",background:"rgba(255,255,255,0.6)",borderRadius:"1px"}}/>
                <div style={{width:"14px",height:"2px",background:"rgba(255,255,255,0.6)",borderRadius:"1px"}}/>
                <div style={{width:"20px",height:"2px",background:"rgba(255,255,255,0.6)",borderRadius:"1px"}}/>
              </button>
            }
            <button onClick={()=>handleTabChange("home")} style={{background:"transparent",border:"none",cursor:"pointer",...s.logo}}>
              FORGE<span style={s.logoSlash}>/</span>BODY
            </button>
            <div style={{width:"44px",textAlign:"right"}}>
              {profile?.name&&<span style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{profile.name.split(" ")[0]}</span>}
            </div>
          </nav>

          {tab==="home"&&<HomeScreen profile={profile} user={session.user} onNavigate={navigate}/>}
          {tab==="meal"&&<MealPlanner/>}
          {tab==="workout"&&<WorkoutBuilder/>}
          {tab==="macros"&&<MacroTracker/>}
          {tab==="coach"&&<AICoach/>}
          {tab==="profile"&&<ProfileTab user={session.user} onSignOut={signOut} onNavigate={navigate}/>}
          {tab==="more"&&(
            <>
              {subTab==="progress"&&<Progress user={session.user}/>}
              {subTab==="measurements"&&<BodyMeasurements user={session.user}/>}
              {subTab==="history"&&<WorkoutHistory user={session.user}/>}
              {subTab==="supplements"&&<SupplementGuide/>}
              {subTab==="habits"&&<MindsetHabits/>}
              {subTab==="articles"&&<NutritionTips/>}
            </>
          )}

          <nav style={s.bottomNav}>
            <button onClick={()=>handleTabChange("home")} style={{...s.navBtn,color:tab==="home"?C.lime:"rgba(255,255,255,0.35)"}}>
              {Icons.home(tab==="home")}<span>Home</span>
            </button>
            <button onClick={()=>handleTabChange("meal")} style={{...s.navBtn,color:tab==="meal"?C.lime:"rgba(255,255,255,0.35)"}}>
              {Icons.meal(tab==="meal")}<span>Meals</span>
            </button>
            <button onClick={()=>handleTabChange("workout")} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",border:"none",background:"transparent",cursor:"pointer",padding:"0",position:"relative",top:"-10px"}}>
              <div style={{background:tab==="workout"?C.lime:"rgba(255,255,255,0.08)",border:`2px solid ${tab==="workout"?C.lime:"rgba(255,255,255,0.15)"}`,borderRadius:"50%",width:"54px",height:"54px",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:tab==="workout"?"0 0 24px rgba(204,255,0,0.5)":"none",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                <span style={{fontSize:"0.52rem",fontWeight:900,letterSpacing:"0.04em",color:tab==="workout"?C.black:"rgba(255,255,255,0.6)",fontFamily:"'Barlow Condensed',sans-serif",textAlign:"center",lineHeight:1.1,textTransform:"uppercase"}}>FORGE<br/>/BODY</span>
              </div>
              <span style={{fontSize:"0.55rem",fontWeight:800,letterSpacing:"0.08em",textTransform:"uppercase",color:tab==="workout"?C.lime:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>Train</span>
            </button>
            <button onClick={()=>handleTabChange("coach")} style={{...s.navBtn,color:tab==="coach"?C.lime:"rgba(255,255,255,0.35)"}}>
              {Icons.coach(tab==="coach")}<span>Coach</span>
            </button>
            <button onClick={()=>handleTabChange("profile")} style={{...s.navBtn,color:tab==="profile"?C.lime:"rgba(255,255,255,0.35)"}}>
              {Icons.profile(tab==="profile")}<span>Profile</span>
            </button>
          </nav>
        </>
      )}
    </div>
  );
}
