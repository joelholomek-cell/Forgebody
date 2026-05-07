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
    {name:"Barbell Bench Press",sets:"4",reps:"6-8",rest:"2-3 min",cue:"Lower bar to chest, drive up explosively. Elbows 45°, arch naturally.",gif:"bench_press"},
    {name:"Incline Barbell Press",sets:"4",reps:"6-8",rest:"2 min",cue:"Set bench to 30-45°. Bar to upper chest, press up and slightly back.",gif:"incline_press"},
    {name:"Incline Dumbbell Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Slight arch, elbows 45°. Full stretch at bottom, squeeze at top.",gif:"incline_db_press"},
    {name:"Flat Dumbbell Press",sets:"3",reps:"8-12",rest:"90 sec",cue:"Wider ROM than barbell. Touch dumbbells at top, deep stretch at bottom.",gif:"db_press"},
    {name:"Cable Chest Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Slight bend in elbows. Full stretch at start, squeeze hands together.",gif:"cable_fly"},
    {name:"Dumbbell Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Keep slight elbow bend throughout. Feel the chest stretch fully.",gif:"db_fly"},
    {name:"Dips (chest lean)",sets:"3",reps:"10-12",rest:"90 sec",cue:"Lean forward 30°, elbows flare wide. Go deep, drive through chest.",gif:"dips"},
    {name:"Push-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Full range, chest touches floor. Brace core, squeeze glutes.",gif:"pushup"},
    {name:"Decline Bench Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Head lower than hips. Targets lower chest. Control the descent.",gif:"decline_press"},
    {name:"Pec Deck Machine",sets:"3",reps:"12-15",rest:"60 sec",cue:"Elbows at 90°. Squeeze chest hard at peak contraction.",gif:"pec_deck"},
    {name:"Low Cable Fly",sets:"3",reps:"12-15",rest:"60 sec",cue:"Cables from low setting. Sweep arms up and together. Upper chest focus.",gif:"low_cable_fly"},
    {name:"Close-Grip Push-Up",sets:"3",reps:"12-15",rest:"60 sec",cue:"Hands shoulder-width. Targets inner chest and triceps.",gif:"close_pushup"},
    {name:"Chest Press Machine",sets:"3",reps:"10-12",rest:"60 sec",cue:"Great for beginners. Control both directions. Full range.",gif:"chest_machine"},
    {name:"Landmine Press",sets:"3",reps:"10-12 each",rest:"75 sec",cue:"Single arm. Press bar up and forward. Great for upper chest.",gif:"landmine_press"},
  ],
  back:[
    {name:"Deadlift",sets:"4",reps:"4-6",rest:"3 min",cue:"Bar over mid-foot, neutral spine. Drive floor away, hips lock out at top.",gif:"deadlift"},
    {name:"Barbell Row",sets:"4",reps:"6-8",rest:"2 min",cue:"Hinge to 45°. Pull bar to belly button. Squeeze lats hard.",gif:"barbell_row"},
    {name:"Pull-Up",sets:"4",reps:"6-10",rest:"90 sec",cue:"Dead hang start. Depress scapula first. Pull chest to bar.",gif:"pullup"},
    {name:"Lat Pulldown",sets:"4",reps:"10-12",rest:"90 sec",cue:"Slight lean back. Pull elbows to ribs. Slow eccentric.",gif:"lat_pulldown"},
    {name:"Seated Cable Row",sets:"3",reps:"10-12",rest:"90 sec",cue:"Chest up, elbows tight. Pull to lower ribs. Full stretch at front.",gif:"cable_row"},
    {name:"Face Pull",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pull to forehead level. Elbows high. Rotate wrists back.",gif:"face_pull"},
    {name:"Single-Arm Dumbbell Row",sets:"3",reps:"10-12 each",rest:"75 sec",cue:"Flat back, brace on bench. Pull elbow past torso. Full stretch.",gif:"db_row"},
    {name:"T-Bar Row",sets:"4",reps:"8-10",rest:"2 min",cue:"Neutral spine, chest on pad. Drive elbows back. Squeeze at top.",gif:"tbar_row"},
    {name:"Wide-Grip Pull-Up",sets:"3",reps:"6-10",rest:"90 sec",cue:"Wider than shoulder grip. Emphasises lat width. Full hang.",gif:"wide_pullup"},
    {name:"Close-Grip Lat Pulldown",sets:"3",reps:"10-12",rest:"75 sec",cue:"Neutral grip attachment. Pull to chest. Feel lats stretch.",gif:"close_pulldown"},
    {name:"Chest-Supported Row",sets:"3",reps:"10-12",rest:"75 sec",cue:"Chest on angled bench. Removes lower back. Pure back work.",gif:"chest_row"},
    {name:"Meadows Row",sets:"3",reps:"10-12 each",rest:"75 sec",cue:"Staggered stance, landmine setup. Elbow drives back and up.",gif:"meadows_row"},
    {name:"Rack Pull",sets:"3",reps:"6-8",rest:"2 min",cue:"Pins at knee height. Easier than deadlift. Heavy upper back work.",gif:"rack_pull"},
    {name:"Straight-Arm Pulldown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Arms straight, slight elbow bend. Drive bar down to thighs.",gif:"straight_pulldown"},
    {name:"Pendlay Row",sets:"4",reps:"5-6",rest:"2 min",cue:"Bar returns to floor each rep. Explosive pull. Pure power.",gif:"pendlay_row"},
  ],
  shoulders:[
    {name:"Overhead Press",sets:"4",reps:"6-8",rest:"2 min",cue:"Bar from collarbone, press vertically. Lock out fully at top.",gif:"ohp"},
    {name:"Dumbbell Shoulder Press",sets:"3",reps:"8-12",rest:"90 sec",cue:"Start at ear height. Press up and together. Don't fully lock.",gif:"db_ohp"},
    {name:"Dumbbell Lateral Raise",sets:"4",reps:"12-15",rest:"60 sec",cue:"Lead with elbows, pinky up slightly. Raise to shoulder, slow lower.",gif:"lateral_raise"},
    {name:"Cable Lateral Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"Constant tension all the way. Cross body. Control eccentric.",gif:"cable_lateral"},
    {name:"Arnold Press",sets:"3",reps:"10-12",rest:"90 sec",cue:"Start palms in. Rotate as you press. Full rotation throughout.",gif:"arnold_press"},
    {name:"Rear Delt Fly",sets:"3",reps:"15-20",rest:"60 sec",cue:"Bend forward 90°. Arms wide, slight elbow bend. Feel rear delt.",gif:"rear_delt_fly"},
    {name:"Face Pull",sets:"3",reps:"15-20",rest:"60 sec",cue:"High pulley. Pull to forehead. Elbows above hands throughout.",gif:"face_pull"},
    {name:"Upright Row",sets:"3",reps:"10-12",rest:"75 sec",cue:"Narrow grip. Pull to chin, elbows above hands. Pause at top.",gif:"upright_row"},
    {name:"Front Raise",sets:"3",reps:"10-12",rest:"60 sec",cue:"Slight bend in elbows. Raise to eye level. Alternate or together.",gif:"front_raise"},
    {name:"Machine Shoulder Press",sets:"3",reps:"10-12",rest:"75 sec",cue:"Adjust seat so handles are at shoulder height. Full range.",gif:"machine_press"},
    {name:"Cable Y-Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"Low cables. Raise arms in Y shape. Targets all three heads.",gif:"y_raise"},
    {name:"Barbell Shrug",sets:"4",reps:"12-15",rest:"75 sec",cue:"Straight arms. Shrug straight up. Hold 1 sec at top.",gif:"shrug"},
    {name:"Dumbbell Shrug",sets:"3",reps:"12-15",rest:"60 sec",cue:"Full range, deep stretch at bottom. Squeeze traps at top.",gif:"db_shrug"},
    {name:"Reverse Pec Deck",sets:"3",reps:"12-15",rest:"60 sec",cue:"Machine in reverse. Arms wide, squeeze rear delts.",gif:"reverse_pec_deck"},
  ],
  biceps:[
    {name:"Barbell Curl",sets:"4",reps:"8-10",rest:"90 sec",cue:"Elbows pinned to sides. Full extension at bottom, squeeze at top.",gif:"barbell_curl"},
    {name:"Hammer Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Neutral grip throughout. Targets brachialis. Control the descent.",gif:"hammer_curl"},
    {name:"Incline Dumbbell Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Bench at 60°. Arms hang back. Maximum stretch. Curl slowly.",gif:"incline_curl"},
    {name:"Cable Curl",sets:"3",reps:"12-15",rest:"60 sec",cue:"Low pulley. Constant tension. Slow eccentric phase.",gif:"cable_curl"},
    {name:"Concentration Curl",sets:"3",reps:"10-12 each",rest:"60 sec",cue:"Elbow on inner thigh. No swinging. Full squeeze at top.",gif:"concentration_curl"},
    {name:"Preacher Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Upper arm on pad. Full stretch at bottom. Don't lock elbows.",gif:"preacher_curl"},
    {name:"Zottman Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Curl up supinated, lower pronated. Works both heads.",gif:"zottman_curl"},
    {name:"Spider Curl",sets:"3",reps:"10-12",rest:"60 sec",cue:"Chest on incline bench, arms hang. Curl up. Full stretch.",gif:"spider_curl"},
    {name:"Cable Hammer Curl",sets:"3",reps:"12-15",rest:"60 sec",cue:"Rope attachment. Neutral grip. Elbows stay fixed.",gif:"cable_hammer"},
    {name:"EZ-Bar Curl",sets:"4",reps:"8-10",rest:"90 sec",cue:"Easier on wrists than straight bar. Same principles apply.",gif:"ezbar_curl"},
    {name:"Cross-Body Hammer Curl",sets:"3",reps:"10-12 each",rest:"60 sec",cue:"Curl across body. Targets brachialis and brachioradialis.",gif:"cross_hammer"},
    {name:"21s",sets:"3",reps:"21",rest:"90 sec",cue:"7 half reps bottom, 7 top, 7 full. Brutal pump.",gif:"21s"},
  ],
  triceps:[
    {name:"Close-Grip Bench Press",sets:"4",reps:"8-10",rest:"90 sec",cue:"Shoulder-width grip. Elbows tucked. Full extension at top.",gif:"close_grip_bench"},
    {name:"Tricep Pushdown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Elbows pinned to sides. Push to full extension. Control up.",gif:"pushdown"},
    {name:"Overhead Tricep Extension",sets:"3",reps:"10-12",rest:"75 sec",cue:"Arms straight up. Lower behind head. Full stretch at bottom.",gif:"overhead_tri"},
    {name:"Skull Crusher",sets:"3",reps:"10-12",rest:"75 sec",cue:"Lower to forehead slowly. Elbows stay vertical. Drive up.",gif:"skull_crusher"},
    {name:"Rope Pushdown",sets:"3",reps:"12-15",rest:"60 sec",cue:"Spread rope at bottom. Full extension. Constant tension.",gif:"rope_pushdown"},
    {name:"Dips (tricep focus)",sets:"3",reps:"10-15",rest:"90 sec",cue:"Upright torso. Elbows tucked close. Full range.",gif:"tri_dips"},
    {name:"Diamond Push-Up",sets:"3",reps:"12-15",rest:"60 sec",cue:"Hands form diamond shape. Elbows track back. Chest to hands.",gif:"diamond_pushup"},
    {name:"Single-Arm Pushdown",sets:"3",reps:"12-15 each",rest:"60 sec",cue:"One arm at a time. Isolates better. Full extension each rep.",gif:"single_pushdown"},
    {name:"Tate Press",sets:"3",reps:"12-15",rest:"60 sec",cue:"Dumbbells point to ceiling. Lower to chest. Elbows flare.",gif:"tate_press"},
    {name:"JM Press",sets:"3",reps:"8-10",rest:"90 sec",cue:"Hybrid of skull crusher and close-grip. Angle bar to forehead.",gif:"jm_press"},
    {name:"Cable Overhead Extension",sets:"3",reps:"12-15",rest:"60 sec",cue:"Face away from cable. Both hands on rope. Full stretch.",gif:"cable_overhead_tri"},
    {name:"Kickback",sets:"3",reps:"12-15 each",rest:"60 sec",cue:"Hinge forward. Extend arm fully back. Squeeze at extension.",gif:"kickback"},
  ],
  quads:[
    {name:"Barbell Back Squat",sets:"4",reps:"6-8",rest:"3 min",cue:"Break parallel, knees track toes. Drive up through heels.",gif:"back_squat"},
    {name:"Front Squat",sets:"4",reps:"6-8",rest:"3 min",cue:"Bar on front delts. Upright torso. Knees forward. Quad dominant.",gif:"front_squat"},
    {name:"Leg Press",sets:"4",reps:"10-12",rest:"2 min",cue:"Full range, don't lock knees. Feet shoulder-width. Drive through heels.",gif:"leg_press"},
    {name:"Leg Extension",sets:"3",reps:"15-20",rest:"60 sec",cue:"Pause at top, slow 3-sec eccentric. Don't swing.",gif:"leg_extension"},
    {name:"Bulgarian Split Squat",sets:"3",reps:"10-12 each",rest:"90 sec",cue:"Rear foot elevated. Vertical front shin. Drive through heel.",gif:"bulgarian"},
    {name:"Walking Lunges",sets:"3",reps:"12 each",rest:"90 sec",cue:"Long stride, knee almost touches floor. Drive through front heel.",gif:"walking_lunge"},
    {name:"Goblet Squat",sets:"3",reps:"12-15",rest:"75 sec",cue:"Dumbbell at chest. Deep squat, elbows push knees out.",gif:"goblet_squat"},
    {name:"Hack Squat",sets:"3",reps:"10-12",rest:"90 sec",cue:"Feet forward on platform. Full depth. Great quad isolation.",gif:"hack_squat"},
    {name:"Sissy Squat",sets:"3",reps:"12-15",rest:"60 sec",cue:"Hold fixed object. Lean back, knees forward. Extreme quad stretch.",gif:"sissy_squat"},
    {name:"Step-Up",sets:"3",reps:"12 each",rest:"75 sec",cue:"Drive through front heel only. Don't push off back leg.",gif:"step_up"},
    {name:"Box Squat",sets:"4",reps:"6-8",rest:"2 min",cue:"Sit to box, pause briefly, explode up. Builds power.",gif:"box_squat"},
    {name:"Narrow Stance Leg Press",sets:"3",reps:"12-15",rest:"75 sec",cue:"Feet close together. Targets outer quad. Don't lock knees.",gif:"narrow_leg_press"},
    {name:"Cyclist Squat",sets:"3",reps:"12-15",rest:"75 sec",cue:"Heels elevated. Upright torso. Maximum quad activation.",gif:"cyclist_squat"},
  ],
  hamstrings:[
    {name:"Romanian Deadlift",sets:"4",reps:"8-10",rest:"2 min",cue:"Soft knee bend. Push hips back, bar close to legs. Feel stretch.",gif:"rdl"},
    {name:"Lying Leg Curl",sets:"4",reps:"10-12",rest:"90 sec",cue:"Curl to glutes, pause, 3-sec lower. Don't lift hips.",gif:"leg_curl"},
    {name:"Seated Leg Curl",sets:"3",reps:"10-12",rest:"75 sec",cue:"Greater stretch than lying version. Full ROM each rep.",gif:"seated_leg_curl"},
    {name:"Good Morning",sets:"3",reps:"10-12",rest:"90 sec",cue:"Bar on traps. Soft knees. Hinge from hip, feel hamstring stretch.",gif:"good_morning"},
    {name:"Nordic Curl",sets:"3",reps:"6-8",rest:"2 min",cue:"Kneel, feet anchored. Lower body slowly. Pull back up. Brutal.",gif:"nordic_curl"},
    {name:"Stiff-Leg Deadlift",sets:"3",reps:"10-12",rest:"90 sec",cue:"Straighter legs than RDL. More hamstring stretch. Keep back flat.",gif:"sldl"},
    {name:"Glute-Ham Raise",sets:"3",reps:"8-10",rest:"90 sec",cue:"GHD machine. Lower slowly, pull back with hamstrings.",gif:"ghr"},
    {name:"Cable Pull-Through",sets:"3",reps:"12-15",rest:"75 sec",cue:"Rope between legs, hinge forward. Drive hips forward to stand.",gif:"pull_through"},
    {name:"Single-Leg RDL",sets:"3",reps:"10-12 each",rest:"75 sec",cue:"Balance on one leg. Hinge, reach dumbbell to floor. Hip height.",gif:"single_rdl"},
    {name:"Swiss Ball Leg Curl",sets:"3",reps:"10-12",rest:"60 sec",cue:"Hips up, feet on ball. Curl ball toward you. Intense hamstring.",gif:"swiss_curl"},
    {name:"Sumo Romanian Deadlift",sets:"3",reps:"10-12",rest:"90 sec",cue:"Wide stance, toes out. More inner hamstring and adductor.",gif:"sumo_rdl"},
  ],
  glutes:[
    {name:"Hip Thrust",sets:"4",reps:"10-12",rest:"90 sec",cue:"Bar across hips. Drive through heels. Squeeze hard at top.",gif:"hip_thrust"},
    {name:"Barbell Glute Bridge",sets:"3",reps:"12-15",rest:"75 sec",cue:"Shoulders on floor. Drive hips up. Pause and squeeze at top.",gif:"glute_bridge"},
    {name:"Glute Kickback",sets:"3",reps:"15-20",rest:"60 sec",cue:"Cable or machine. Drive heel back and up. Don't rotate hips.",gif:"kickback_glute"},
    {name:"Sumo Deadlift",sets:"4",reps:"6-8",rest:"2 min",cue:"Wide stance, toes out 45°. Pull bar to hips. Squeeze glutes.",gif:"sumo_deadlift"},
    {name:"Step-Up",sets:"3",reps:"12 each",rest:"75 sec",cue:"High box for more glute. Drive heel through. Full extension.",gif:"step_up"},
    {name:"Walking Lunge",sets:"3",reps:"12 each",rest:"90 sec",cue:"Long stride activates glutes more. Drive hips through.",gif:"lunge_glute"},
    {name:"Abduction Machine",sets:"3",reps:"15-20",rest:"60 sec",cue:"Slow and controlled. Feel outer glute. Don't go too heavy.",gif:"abduction"},
    {name:"Cable Kickback",sets:"3",reps:"15-20 each",rest:"60 sec",cue:"Ankle strap. Extend leg back and up. Squeeze glute fully.",gif:"cable_kickback"},
    {name:"Reverse Hyper",sets:"3",reps:"12-15",rest:"75 sec",cue:"Machine or GHD. Swing legs up and back. Lower controlled.",gif:"reverse_hyper"},
    {name:"Curtsy Lunge",sets:"3",reps:"12 each",rest:"75 sec",cue:"Step behind and across. Great for glute med. Stay upright.",gif:"curtsy_lunge"},
    {name:"Frog Pump",sets:"3",reps:"20-25",rest:"60 sec",cue:"Soles of feet together. Drive hips up. Intense glute squeeze.",gif:"frog_pump"},
    {name:"Single-Leg Hip Thrust",sets:"3",reps:"10-12 each",rest:"75 sec",cue:"One leg extended. Drive through grounded heel. Even harder.",gif:"single_hip_thrust"},
  ],
  calves:[
    {name:"Standing Calf Raise",sets:"4",reps:"15-20",rest:"60 sec",cue:"Full ROM. Pause at top, deep stretch at bottom. Slow eccentric.",gif:"standing_calf"},
    {name:"Seated Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Targets soleus. Weight on knees. Full range.",gif:"seated_calf"},
    {name:"Single-Leg Calf Raise",sets:"3",reps:"12-15 each",rest:"45 sec",cue:"Hold for balance. Full stretch. Harder than bilateral.",gif:"single_calf"},
    {name:"Leg Press Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Bottom of platform. Toes pointed. Full range on leg press.",gif:"leg_press_calf"},
    {name:"Donkey Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Bend forward 90°. Weight on lower back. Maximum stretch.",gif:"donkey_calf"},
    {name:"Jump Rope",sets:"3",reps:"60 sec",rest:"30 sec",cue:"Light on feet. Consistent rhythm. Builds explosive calves.",gif:"jump_rope"},
    {name:"Tib Bar Raise",sets:"3",reps:"15-20",rest:"45 sec",cue:"Targets anterior tibialis. Sit, lift toes up. Often neglected.",gif:"tib_raise"},
    {name:"Smith Machine Calf Raise",sets:"3",reps:"15-20",rest:"60 sec",cue:"Heels off edge of plate. Controlled. Good for heavy work.",gif:"smith_calf"},
  ],
  core:[
    {name:"Plank",sets:"3",reps:"45-60 sec",rest:"45 sec",cue:"Neutral spine, squeeze glutes and quads. Don't let hips drop.",gif:"plank"},
    {name:"Cable Crunch",sets:"3",reps:"15-20",rest:"60 sec",cue:"Crunch abs to knees. Don't pull with neck. Range of motion.",gif:"cable_crunch"},
    {name:"Hanging Leg Raise",sets:"3",reps:"12-15",rest:"60 sec",cue:"Dead hang. Raise legs controlled. No swinging.",gif:"hanging_leg_raise"},
    {name:"Ab Wheel Rollout",sets:"3",reps:"10-12",rest:"75 sec",cue:"Brace core hard. Roll out slowly. Pull back with abs.",gif:"ab_wheel"},
    {name:"Russian Twist",sets:"3",reps:"20 total",rest:"45 sec",cue:"Lean back 45°. Rotate from torso, not arms. Add weight.",gif:"russian_twist"},
    {name:"Decline Sit-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Full ROM. Touch chest to knees. Control the descent.",gif:"decline_situp"},
    {name:"Dragon Flag",sets:"3",reps:"6-8",rest:"90 sec",cue:"Bench hold. Lower whole body slowly. Advanced movement.",gif:"dragon_flag"},
    {name:"Dead Bug",sets:"3",reps:"10 each",rest:"60 sec",cue:"Lower back pressed to floor. Opposite arm/leg. Slow.",gif:"dead_bug"},
    {name:"Side Plank",sets:"3",reps:"30-45 sec each",rest:"45 sec",cue:"Hip stacked. Squeeze obliques. Don't let hip drop.",gif:"side_plank"},
    {name:"Hollow Hold",sets:"3",reps:"30-45 sec",rest:"60 sec",cue:"Arms and legs extended. Press lower back to floor. Gymnastic core.",gif:"hollow_hold"},
    {name:"V-Up",sets:"3",reps:"15-20",rest:"60 sec",cue:"Meet hands to feet at top. Control descent. Full range.",gif:"v_up"},
    {name:"Bicycle Crunch",sets:"3",reps:"20 each",rest:"45 sec",cue:"Slow rotation. Elbow to opposite knee. Don't pull neck.",gif:"bicycle_crunch"},
    {name:"Landmine Rotation",sets:"3",reps:"10 each",rest:"60 sec",cue:"Rotate barbell side to side. Core stays braced. Athletic movement.",gif:"landmine_rotation"},
    {name:"Cable Woodchop",sets:"3",reps:"12 each",rest:"60 sec",cue:"High to low or low to high. Rotate through torso, not arms.",gif:"woodchop"},
    {name:"Toes-to-Bar",sets:"3",reps:"8-12",rest:"75 sec",cue:"Dead hang. Raise toes to bar. Control descent.",gif:"toes_to_bar"},
  ],
  hiit:[
    {name:"Burpee",sets:"4",reps:"15",rest:"45 sec",cue:"Explosive jump at top. Full push-up at bottom. Fast pace.",gif:"burpee"},
    {name:"Box Jump",sets:"4",reps:"10",rest:"60 sec",cue:"Soft landing, hips back. Full hip extension at top. Step down.",gif:"box_jump"},
    {name:"Mountain Climber",sets:"3",reps:"30 sec",rest:"30 sec",cue:"Hips down, fast feet. Drive knees to chest alternately.",gif:"mountain_climber"},
    {name:"Jump Squat",sets:"4",reps:"15",rest:"45 sec",cue:"Land softly, full squat. Explode from bottom. Arms assist.",gif:"jump_squat"},
    {name:"Kettlebell Swing",sets:"4",reps:"20",rest:"60 sec",cue:"Hip hinge power. Snap hips forward. Bell floats to chest height.",gif:"kb_swing"},
    {name:"Sprint Intervals",sets:"6",reps:"20 sec",rest:"40 sec",cue:"Max effort each sprint. Full recovery. Speed work.",gif:"sprint"},
    {name:"Jumping Lunge",sets:"3",reps:"12 each",rest:"60 sec",cue:"Explosive switch. Land softly. Keep chest up throughout.",gif:"jump_lunge"},
    {name:"Kettlebell Clean",sets:"4",reps:"10 each",rest:"75 sec",cue:"Hike bell back, drive hips. Rotate wrist, catch at shoulder.",gif:"kb_clean"},
    {name:"Battle Ropes",sets:"4",reps:"30 sec",rest:"30 sec",cue:"Alternate waves. Hips drive power. Keep waves consistent.",gif:"battle_ropes"},
    {name:"Tuck Jump",sets:"3",reps:"10",rest:"60 sec",cue:"Jump and pull knees to chest. Soft landing. Great conditioning.",gif:"tuck_jump"},
    {name:"Plank to Push-Up",sets:"3",reps:"10",rest:"60 sec",cue:"Alternate forearm to hand plank. Core stays stable.",gif:"plank_pushup"},
    {name:"High Knees",sets:"4",reps:"30 sec",rest:"30 sec",cue:"Drive knees to hip height. Pump arms. Fast pace.",gif:"high_knees"},
    {name:"Lateral Bound",sets:"3",reps:"10 each",rest:"60 sec",cue:"Explosive side jump. Stick landing. Builds lateral power.",gif:"lateral_bound"},
    {name:"Kettlebell Goblet Squat",sets:"3",reps:"15",rest:"60 sec",cue:"Bell at chest. Deep squat. Drive knees out. Upright torso.",gif:"kb_goblet"},
  ],
};

// ─── EXERCISE IMAGES ─────────────────────────────────────────────────────────
const EXERCISE_IMAGES={
  "Barbell Bench Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bench_Press_-_Medium_Grip/1.jpg"},
  "Incline Barbell Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Incline_Bench_Press_-_Medium_Grip/1.jpg"},
  "Incline Dumbbell Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Press/1.jpg"},
  "Flat Dumbbell Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bench_Press/1.jpg"},
  "Cable Chest Fly":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Chest_Press/1.jpg"},
  "Dumbbell Fly":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Dumbbell_Flyes/1.jpg"},
  "Dips (chest lean)":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Chest_Version/1.jpg"},
  "Push-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Up_Wide/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Push-Up_Wide/1.jpg"},
  "Decline Bench Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Decline_Bench_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Decline_Bench_Press/1.jpg"},
  "Low Cable Fly":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Fly/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Fly/1.jpg"},
  "Close-Grip Push-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up_off_of_a_Dumbbell/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Push-Up_off_of_a_Dumbbell/1.jpg"},
  "Chest Press Machine":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Press_Machine/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Chest_Press_Machine/1.jpg"},
  "Landmine Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Landmine_Press/1.jpg"},
  "Deadlift":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Deadlift/1.jpg"},
  "Barbell Row":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bent_Over_Row/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Bent_Over_Row/1.jpg"},
  "Pull-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Pullups/1.jpg"},
  "Lat Pulldown":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Lat_Pulldown/1.jpg"},
  "Seated Cable Row":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Row/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Seated_Row/1.jpg"},
  "Face Pull":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Face_Pull/1.jpg"},
  "Single-Arm Dumbbell Row":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Row/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_One-Arm_Row/1.jpg"},
  "T-Bar Row":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/T-Bar_Row_with_Handle/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/T-Bar_Row_with_Handle/1.jpg"},
  "Wide-Grip Pull-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Pullup/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Wide-Grip_Pullup/1.jpg"},
  "Close-Grip Lat Pulldown":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Lat_Pulldown/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Close-Grip_Lat_Pulldown/1.jpg"},
  "Rack Pull":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rack_Pull/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Rack_Pull/1.jpg"},
  "Straight-Arm Pulldown":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Pulldown/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Straight-Arm_Pulldown/1.jpg"},
  "Overhead Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Seated_Overhead_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Seated_Overhead_Press/1.jpg"},
  "Dumbbell Shoulder Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Overhead_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Overhead_Press/1.jpg"},
  "Dumbbell Lateral Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lateral_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lateral_Raise/1.jpg"},
  "Cable Lateral Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lateral_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lateral_Raise/1.jpg"},
  "Arnold Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Arnold_Dumbbell_Press/1.jpg"},
  "Rear Delt Fly":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bent_Over_Dumbbell_Rear_Delt_Raise/1.jpg"},
  "Upright Row":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Upright_Row/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Upright_Row/1.jpg"},
  "Front Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Front_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Front_Raise/1.jpg"},
  "Barbell Shrug":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Shrug/1.jpg"},
  "Dumbbell Shrug":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Shrug/1.jpg"},
  "Barbell Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Curl/1.jpg"},
  "Hammer Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Hammer_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Hammer_Curl/1.jpg"},
  "Incline Dumbbell Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Incline_Dumbbell_Curl/1.jpg"},
  "Cable Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Curl/1.jpg"},
  "Concentration Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Concentration_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Concentration_Curl/1.jpg"},
  "Preacher Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Preacher_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Preacher_Curl/1.jpg"},
  "Zottman Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Zottman_Curl/1.jpg"},
  "EZ-Bar Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/EZ-Bar_Curl/1.jpg"},
  "Close-Grip Bench Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Close-Grip_Bench_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Close-Grip_Bench_Press/1.jpg"},
  "Tricep Pushdown":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lying_Triceps_Extension/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Lying_Triceps_Extension/1.jpg"},
  "Overhead Tricep Extension":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Triceps_Extension/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Seated_Triceps_Extension/1.jpg"},
  "Skull Crusher":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lying_Triceps_Extension/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lying_Triceps_Extension/1.jpg"},
  "Rope Pushdown":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Incline_Triceps_Extension/1.jpg"},
  "Dips (tricep focus)":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dips_-_Triceps_Version/1.jpg"},
  "Diamond Push-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Clock_Push-Up/1.jpg"},
  "Kickback":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Kickback/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Kickback/1.jpg"},
  "Barbell Back Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Full_Squat/1.jpg"},
  "Front Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Front_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Front_Squat/1.jpg"},
  "Leg Press":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Press/1.jpg"},
  "Leg Extension":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Extensions/1.jpg"},
  "Bulgarian Split Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bulgarian_Split_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Bulgarian_Split_Squat/1.jpg"},
  "Walking Lunges":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Walking_Lunge/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Walking_Lunge/1.jpg"},
  "Goblet Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Goblet_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Goblet_Squat/1.jpg"},
  "Hack Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hack_Squat/1.jpg"},
  "Step-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Step_Ups/1.jpg"},
  "Box Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Box_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Box_Squat/1.jpg"},
  "Romanian Deadlift":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Romanian_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Romanian_Deadlift/1.jpg"},
  "Lying Leg Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Leg_Curl/1.jpg"},
  "Seated Leg Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Curl/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Leg_Curl/1.jpg"},
  "Good Morning":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Good_Morning/1.jpg"},
  "Nordic Curl":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lying_Lifting/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Lying_Lifting/1.jpg"},
  "Stiff-Leg Deadlift":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Stiff-Leg_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Stiff-Leg_Deadlift/1.jpg"},
  "Single-Leg RDL":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Single_Leg_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Single_Leg_Deadlift/1.jpg"},
  "Sumo Romanian Deadlift":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/1.jpg"},
  "Hip Thrust":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg"},
  "Barbell Glute Bridge":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge/1.jpg"},
  "Glute Kickback":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge_One_Leg/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Glute_Bridge_One_Leg/1.jpg"},
  "Sumo Deadlift":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Sumo_Deadlift/1.jpg"},
  "Abduction Machine":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Thigh_Abductor/1.jpg"},
  "Cable Kickback":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Hip_Adduction/1.jpg"},
  "Curtsy Lunge":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunge/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Lunge/1.jpg"},
  "Single-Leg Hip Thrust":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Hip_Thrust/1.jpg"},
  "Standing Calf Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises/1.jpg"},
  "Seated Calf Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Seated_Calf_Raise/1.jpg"},
  "Single-Leg Calf Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Calf_Raises/1.jpg"},
  "Donkey Calf Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Donkey_Calf_Raises/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Donkey_Calf_Raises/1.jpg"},
  "Plank":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Plank/1.jpg"},
  "Cable Crunch":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Crunch/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kneeling_Cable_Crunch/1.jpg"},
  "Hanging Leg Raise":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Hanging_Leg_Raise/1.jpg"},
  "Ab Wheel Rollout":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Roller/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Ab_Roller/1.jpg"},
  "Russian Twist":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Russian_Twist/1.jpg"},
  "Decline Sit-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Decline_Crunch/1.jpg"},
  "Dead Bug":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg-Hip_Raise/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lying_Leg-Hip_Raise/1.jpg"},
  "Side Plank":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Plank/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Side_Plank/1.jpg"},
  "V-Up":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V_Up/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/V_Up/1.jpg"},
  "Bicycle Crunch":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bicycling/1.jpg"},
  "Cable Woodchop":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Woodchoppers/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Cable_Woodchoppers/1.jpg"},
  "Burpee":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Air_Bike/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Air_Bike/1.jpg"},
  "Box Jump":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump/1.jpg"},
  "Mountain Climber":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climber/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Mountain_Climber/1.jpg"},
  "Jump Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Jump_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Jump_Squat/1.jpg"},
  "Kettlebell Swing":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Double_Windmill/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Double_Windmill/1.jpg"},
  "Sprint Intervals":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Sprint/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Bench_Sprint/1.jpg"},
  "Jumping Lunge":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Jump_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Barbell_Jump_Squat/1.jpg"},
  "Kettlebell Clean":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Double_Windmill/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Kettlebell_Double_Windmill/1.jpg"},
  "Battle Ropes":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Battling_Ropes/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Battling_Ropes/1.jpg"},
  "Tuck Jump":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Box_Jump/1.jpg"},
  "High Knees":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Sprint/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Lunge_Sprint/1.jpg"},
  "Kettlebell Goblet Squat":{img0:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Goblet_Squat/0.jpg",img1:"https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/Dumbbell_Goblet_Squat/1.jpg"},
};

function ExerciseAnimation({exName,muscle}){
  const imgs=EXERCISE_IMAGES[exName];
  const[opacity,setOpacity]=useState(0);
  const[loaded0,setLoaded0]=useState(false);
  const[loaded1,setLoaded1]=useState(false);
  const[error,setError]=useState(false);

  useEffect(()=>{
    if(!imgs)return;
    setOpacity(0);setLoaded0(false);setLoaded1(false);setError(false);
    // 4 equal parts at 500ms each = 2 second full cycle
    // opacity 0 = show img0, opacity 1 = show img1
    // Smooth CSS transition handles the crossfade between
    const t=setInterval(()=>setOpacity(o=>o===0?1:0),1000);
    return()=>clearInterval(t);
  },[exName]);

  const muscleColors={chest:"rgba(239,68,68,0.15)",back:"rgba(59,130,246,0.15)",shoulders:"rgba(168,85,247,0.15)",biceps:"rgba(34,197,94,0.15)",triceps:"rgba(251,146,60,0.15)",quads:"rgba(236,72,153,0.15)",hamstrings:"rgba(20,184,166,0.15)",glutes:"rgba(251,191,36,0.15)",calves:"rgba(99,102,241,0.15)",core:"rgba(204,255,0,0.15)",hiit:"rgba(239,68,68,0.15)"};
  const mc=muscleColors[muscle]||"rgba(204,255,0,0.15)";

  if(!imgs||error){
    return(
      <div style={{display:"flex",justifyContent:"center",marginBottom:"0.75rem"}}>
        <div style={{background:mc,border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"0.75rem 1.5rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>💪</span>
          <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.85rem",color:"rgba(255,255,255,0.6)"}}>{muscle}</span>
        </div>
      </div>
    );
  }

  const bothLoaded=loaded0&&loaded1;

  return(
    <div style={{display:"flex",justifyContent:"center",marginBottom:"0.75rem"}}>
      <div style={{background:mc,backdropFilter:"blur(15px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",overflow:"hidden",position:"relative",width:"100%",maxWidth:"280px",aspectRatio:"4/3"}}>
        {!bothLoaded&&<div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",zIndex:2}}><div style={{width:"24px",height:"24px",borderRadius:"50%",border:"2px solid rgba(204,255,0,0.3)",borderTopColor:"#CCFF00",animation:"spin 0.8s linear infinite"}}/></div>}
        <img src={imgs.img0} alt={exName} onLoad={()=>setLoaded0(true)} onError={()=>setError(true)}
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:bothLoaded?1-opacity:0,transition:"opacity 1000ms ease-in-out"}}/>
        <img src={imgs.img1} alt={exName} onLoad={()=>setLoaded1(true)} onError={()=>setError(true)}
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:bothLoaded?opacity:0,transition:"opacity 1000ms ease-in-out"}}/>
        <div style={{position:"absolute",bottom:"6px",right:"8px",background:"rgba(0,0,0,0.6)",borderRadius:"6px",padding:"2px 7px",fontSize:"0.6rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",color:"rgba(255,255,255,0.7)",fontFamily:"'Barlow Condensed',sans-serif",zIndex:3}}>{muscle}</div>
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    </div>
  );
}

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
// ─── PRICING FIRST AUTH ──────────────────────────────────────────────────────
// Shows pricing FIRST then captures email — removes friction from funnel
function PricingFirstAuth({onSignedIn,onBack}){
  const[step,setStep]=useState("pricing"); // pricing | auth
  const[email,setEmail]=useState("");
  const[sent,setSent]=useState(false);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState("");
  const[selectedPlan,setSelectedPlan]=useState("monthly");

  const PLANS=[
    {id:"monthly",label:"Monthly",price:"$19",period:"/month",badge:"Most Popular",stripe:"https://buy.stripe.com/8x2cN5eIl3jA2tF6lA0Jq00",saving:null},
    {id:"annual",label:"Annual",price:"$10",period:"/month",badge:"Save 47%",stripe:"https://buy.stripe.com/fZubJ12ZDdYe5FR25k0Jq02",saving:"Billed $120/year"},
    {id:"lifetime",label:"Lifetime",price:"$199",period:"once",badge:"Best Value",stripe:"https://buy.stripe.com/dRm14ncAd1bs3xJeS60Jq03",saving:"Pay once, own forever"},
  ];

  async function handleGoogle(){
    setLoading(true);setError("");
    const redirectTo=window.location.origin+window.location.pathname;
    const{error}=await supabase.auth.signInWithOAuth({provider:"google",options:{redirectTo,queryParams:{access_type:"offline",prompt:"consent"}}});
    if(error){setError(error.message);setLoading(false);}
  }
  async function handleMagic(){
    if(!email)return;setLoading(true);setError("");
    const redirectTo=window.location.origin+window.location.pathname;
    const{error}=await supabase.auth.signInWithOtp({email,options:{emailRedirectTo:redirectTo}});
    setLoading(false);
    if(error)setError(error.message);else setSent(true);
  }

  if(step==="pricing"){
    const plan=PLANS.find(p=>p.id===selectedPlan);
    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",padding:"1.5rem 1.25rem",position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 40% at 50% 0%,rgba(204,255,0,0.08) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{maxWidth:"440px",margin:"0 auto",position:"relative",zIndex:1}}>

          {/* Back */}
          <button onClick={onBack} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.82rem",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"1.5rem",padding:0,display:"flex",alignItems:"center",gap:"0.4rem"}}>← Back</button>

          {/* Header */}
          <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
            <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.35rem"}}>7-day free trial · No card needed</div>
            <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:1}}>Choose Your Plan</div>
          </div>

          {/* Plans */}
          <div style={{display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"1.25rem"}}>
            {[
              {id:"monthly",label:"Monthly",price:"$19",period:"/month",badge:"Most Popular",saving:"Billed monthly · Cancel anytime",color:"rgba(204,255,0,0.08)",border:"rgba(204,255,0,0.35)",accent:"#CCFF00",icon:"🔥",stripe:"https://buy.stripe.com/8x2cN5eIl3jA2tF6lA0Jq00"},
              {id:"annual",label:"Annual",price:"$10",period:"/month",badge:"Save 47%",saving:"Billed $120/year · Best ROI",color:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.35)",accent:"#60a5fa",icon:"⚡",stripe:"https://buy.stripe.com/fZubJ12ZDdYe5FR25k0Jq02"},
              {id:"lifetime",label:"Lifetime",price:"$199",period:"once",badge:"Own Forever",saving:"Pay once · Never pay again",color:"rgba(251,191,36,0.08)",border:"rgba(251,191,36,0.35)",accent:"#fbbf24",icon:"👑",stripe:"https://buy.stripe.com/dRm14ncAd1bs3xJeS60Jq03"},
            ].map(p=>(
              <div key={p.id} onClick={()=>setSelectedPlan(p.id)} style={{background:selectedPlan===p.id?p.color:"rgba(255,255,255,0.04)",backdropFilter:"blur(20px)",border:`2px solid ${selectedPlan===p.id?p.border:"rgba(255,255,255,0.08)"}`,borderRadius:"20px",padding:"1.1rem 1.25rem",cursor:"pointer",position:"relative",overflow:"hidden",transition:"all 0.2s",boxShadow:selectedPlan===p.id?`0 0 24px ${p.accent}20`:"none"}}>
                {selectedPlan===p.id&&<div style={{position:"absolute",top:"-15px",right:"-15px",width:"60px",height:"60px",borderRadius:"50%",background:p.color,filter:"blur(15px)",pointerEvents:"none"}}/>}
                <div style={{position:"absolute",top:"-1px",right:"16px",background:selectedPlan===p.id?p.accent:"rgba(255,255,255,0.1)",color:selectedPlan===p.id?"#000":"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"0.1em",padding:"3px 10px",borderRadius:"0 0 8px 8px"}}>{p.badge}</div>
                <div style={{display:"flex",alignItems:"center",gap:"1rem"}}>
                  <div style={{width:"44px",height:"44px",borderRadius:"12px",background:selectedPlan===p.id?`${p.accent}20`:"rgba(255,255,255,0.05)",border:`1px solid ${selectedPlan===p.id?p.border:"rgba(255,255,255,0.1)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.3rem"}}>{p.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1rem",color:"#fff",letterSpacing:"0.03em"}}>{p.label}</div>
                    <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginTop:"1px"}}>{p.saving}</div>
                  </div>
                  <div style={{textAlign:"right",flexShrink:0}}>
                    <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.8rem",color:selectedPlan===p.id?p.accent:"#fff",lineHeight:1}}>{p.price}</div>
                    <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>{p.period}</div>
                  </div>
                </div>
                {selectedPlan===p.id&&(
                  <div style={{marginTop:"0.85rem",paddingTop:"0.85rem",borderTop:`1px solid ${p.border}40`}}>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.35rem"}}>
                      {["AI workouts","Meal plans","Macro tracker","AI coach 24/7","Progress tracking","Personal bests"].map((f,i)=>(
                        <div key={i} style={{display:"flex",alignItems:"center",gap:"0.4rem"}}>
                          <span style={{color:p.accent,fontSize:"0.72rem",flexShrink:0}}>✓</span>
                          <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif"}}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* What's included */}
          <div style={{background:"rgba(255,255,255,0.04)",borderRadius:"14px",padding:"1rem 1.1rem",marginBottom:"1.25rem"}}>
            {["AI personalised workout programme","58+ meal plans with full recipes","Macro & calorie tracker","AI coach available 24/7","Progress tracking & personal bests","Cancel anytime — no contracts"].map((f,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.65rem",padding:"0.3rem 0",borderBottom:i<5?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <span style={{color:"#CCFF00",fontSize:"0.85rem",flexShrink:0}}>✓</span>
                <span style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.65)",fontFamily:"'Barlow',sans-serif"}}>{f}</span>
              </div>
            ))}
          </div>

          <button onClick={()=>setStep("auth")} style={{width:"100%",padding:"1.1rem",background:"#CCFF00",color:"#000",border:"none",borderRadius:"14px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",boxShadow:"0 0 40px rgba(204,255,0,0.3)",marginBottom:"0.6rem"}}>
            Start Free Trial →
          </button>
          <p style={{textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>7 days free · No credit card · Cancel anytime</p>
        </div>
      </div>
    );
  }

  // Auth step
  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1.5rem",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 10%,rgba(204,255,0,0.12) 0%,transparent 55%)",pointerEvents:"none"}}/>
      <div style={{width:"100%",maxWidth:"400px",position:"relative",zIndex:1}}>
        <button onClick={()=>setStep("pricing")} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.82rem",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"1.5rem",padding:0}}>← Back</button>
        <div style={{textAlign:"center",marginBottom:"1.5rem"}}>
          <div style={{fontSize:"1.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",marginBottom:"0.35rem",lineHeight:1}}>One Last Step</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.88rem",fontFamily:"'Barlow',sans-serif"}}>Create your free account to get started</div>
        </div>
        <div style={{background:"rgba(255,255,255,0.06)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"1.5rem"}}>
          {sent?(
            <div style={{textAlign:"center",padding:"1rem 0"}}>
              <div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>📬</div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",marginBottom:"0.5rem"}}>Check Your Email</div>
              <div style={{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>We sent a link to <strong style={{color:"#fff"}}>{email}</strong><br/>Click it to start your free trial.</div>
            </div>
          ):(
            <>
              <button onClick={handleGoogle} disabled={loading} style={{width:"100%",padding:"0.9rem",background:"#fff",color:"#000",border:"none",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.9rem",cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase",marginBottom:"1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.6rem"}}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <div style={{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"1rem"}}>
                <div style={{flex:1,height:"1px",background:"rgba(255,255,255,0.1)"}}/>
                <span style={{color:"rgba(255,255,255,0.3)",fontSize:"0.78rem",fontFamily:"'Barlow',sans-serif"}}>or</span>
                <div style={{flex:1,height:"1px",background:"rgba(255,255,255,0.1)"}}/>
              </div>
              <input style={{...s.input,marginBottom:"0.75rem"}} type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handleMagic()}/>
              {error&&<p style={{color:"#ff6b6b",fontSize:"0.82rem",marginBottom:"0.6rem",fontFamily:"'Barlow',sans-serif"}}>{error}</p>}
              <button onClick={handleMagic} disabled={loading||!email} style={{width:"100%",padding:"0.9rem",background:"#CCFF00",color:"#000",border:"none",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.9rem",cursor:"pointer",opacity:!email?0.5:1,letterSpacing:"0.06em",textTransform:"uppercase"}}>
                {loading?"Sending...":"Get My Free Trial →"}
              </button>
              <p style={{textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:"0.72rem",marginTop:"0.85rem",fontFamily:"'Barlow',sans-serif"}}>
                No password needed · No credit card · Cancel anytime
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

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
// ─── FAQ SECTION (proper component - no hooks in maps) ────────────────────────
const FAQ_DATA=[
  {q:"Is the 7-day trial really free?",a:"100% free. No credit card required. Full access to every feature for 7 days. After that it's $19/month — cancel anytime before then and you pay nothing."},
  {q:"How is this different from other fitness apps?",a:"Most apps give you generic workouts. ForgeBody asks 4 questions and builds your exact programme — your split, your goal, your level. Then it plans your meals, tracks your macros and gives you a real AI coach that knows your programme."},
  {q:"Can I cancel anytime?",a:"Yes. Cancel with one tap in the app. No contracts, no cancellation fees, no questions asked."},
  {q:"Do I need a gym membership?",a:"No. ForgeBody works for gym training, home workouts, or both. Just tell it your equipment during setup."},
  {q:"How does the AI coach work?",a:"Powered by Claude AI. It knows your exact programme, goal and level. Ask anything about training, nutrition, recovery or mindset and get a personalised answer instantly."},
  {q:"What happens to my data if I cancel?",a:"Your progress, workouts and personal bests are saved. If you come back your history is still there."},
];
function FAQItem({faq}){
  const[open,setOpen]=useState(false);
  return(
    <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(15px)",border:`1px solid ${open?"rgba(204,255,0,0.2)":"rgba(255,255,255,0.08)"}`,borderRadius:"14px",marginBottom:"0.5rem",overflow:"hidden",transition:"border 0.2s"}}>
      <button onClick={()=>setOpen(!open)} style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",padding:"1rem 1.1rem",background:"transparent",border:"none",cursor:"pointer",textAlign:"left",gap:"0.75rem"}}>
        <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.92rem",textTransform:"uppercase",color:C.white,letterSpacing:"0.03em"}}>{faq.q}</span>
        <span style={{color:C.lime,fontSize:"1.4rem",flexShrink:0,transition:"transform 0.25s",transform:open?"rotate(45deg)":"rotate(0deg)",lineHeight:1}}>+</span>
      </button>
      {open&&<div style={{padding:"0 1.1rem 1rem",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",lineHeight:1.7}}>{faq.a}</div>}
    </div>
  );
}
function FAQSection(){
  return <div style={{padding:"0 1.25rem"}}>{FAQ_DATA.map((faq,i)=><FAQItem key={i} faq={faq}/>)}</div>;
}

// ─── SOCIAL PROOF COUNTER ─────────────────────────────────────────────────────
function getTimeBasedCount(){
  const h=new Date().getHours();
  if(h>=1&&h<5)return 142;
  if(h>=5&&h<7)return 487;
  if(h>=7&&h<10)return 2156;
  if(h>=10&&h<12)return 1423;
  if(h>=12&&h<14)return 1087;
  if(h>=14&&h<17)return 834;
  if(h>=17&&h<20)return 2634;
  if(h>=20&&h<22)return 1456;
  return 623;
}

function SocialProofBar(){
  const[count,setCount]=useState(()=>getTimeBasedCount());
  useEffect(()=>{
    // Drift by 1-3 every 45 seconds — feels real not fake
    const t=setInterval(()=>{
      const base=getTimeBasedCount();
      setCount(prev=>{
        const drift=Math.floor(Math.random()*5)-2; // -2 to +2
        const next=prev+drift;
        // Keep within 8% of base
        if(next>base*1.08||next<base*0.92)return base;
        return next;
      });
    },45000);
    return()=>clearInterval(t);
  },[]);
  return(
    <div style={{background:"rgba(204,255,0,0.06)",border:"1px solid rgba(204,255,0,0.15)",borderRadius:"12px",padding:"0.65rem 1rem",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",marginBottom:"0.75rem"}}>
      <div style={{display:"flex"}}>
        {["🧑","👩","👨","🧑","👩"].map((e,i)=><span key={i} style={{fontSize:"1rem",marginLeft:i>0?"-4px":"0"}}>{e}</span>)}
      </div>
      <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.82rem",textTransform:"uppercase",letterSpacing:"0.06em",color:C.lime}}>{count.toLocaleString()}</span>
      <span style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.78rem",color:"rgba(255,255,255,0.45)"}}>members training right now</span>
    </div>
  );
}

// ─── EXIT INTENT POPUP ────────────────────────────────────────────────────────
function ExitIntentPopup({onClaim,onDismiss}){
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.88)",backdropFilter:"blur(20px)",zIndex:700,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
      <div style={{width:"100%",maxWidth:"380px",background:"rgba(18,18,18,0.98)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"24px",padding:"2rem 1.75rem",textAlign:"center",position:"relative"}}>
        <button onClick={onDismiss} style={{position:"absolute",top:"1rem",right:"1rem",background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",fontSize:"1.3rem",cursor:"pointer",lineHeight:1}}>×</button>
        <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>⏰</div>
        <div style={{fontSize:"1.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.4rem",lineHeight:1}}>Wait — Don't Miss<br/>Your Free Trial</div>
        <div style={{color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"1.25rem"}}>You get 7 days completely free. No credit card. Cancel with one tap. Nothing to lose.</div>
        <div style={{background:"rgba(204,255,0,0.08)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"12px",padding:"0.85rem",marginBottom:"1.25rem"}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",textTransform:"uppercase",color:C.lime}}>Free for 7 days</div>
          <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.78rem"}}>Then just $19/month · Cancel anytime</div>
        </div>
        <button onClick={onClaim} style={{width:"100%",padding:"1rem",background:C.lime,color:"#000",border:"none",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.95rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"0.5rem"}}>
          Start My Free Trial →
        </button>
        <button onClick={onDismiss} style={{background:"transparent",border:"none",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif",fontSize:"0.78rem",cursor:"pointer"}}>
          No thanks, I'll pay full price later
        </button>
      </div>
    </div>
  );
}

// ─── FULL RUNNING FEATURE ────────────────────────────────────────────────────
function RunFeature(){
  const[tab,setTab]=useState("log"); // log | history | goals | pbs
  const[runs,setRuns]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_runs")||"[]");}catch{return[];}});
  const[unit,setUnit]=useState(()=>localStorage.getItem("fb_run_unit")||"km");

  // Log form state
  const[dist,setDist]=useState("");
  const[hours,setHours]=useState("");
  const[mins,setMins]=useState("");
  const[secs,setSecs]=useState("");
  const[type,setType]=useState("easy");
  const[notes,setNotes]=useState("");
  const[saved,setSaved]=useState(false);

  // Goals
  const[goals,setGoals]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_run_goals")||"{}");}catch{return{};}});

  function getTotalMins(){return(parseInt(hours||0)*60)+(parseInt(mins||0))+(parseInt(secs||0)/60);}
  function getPace(distance,totalMins){if(!distance||!totalMins)return 0;return totalMins/distance;}
  function formatPace(pace){if(!pace||!isFinite(pace)||pace<=0)return"—";const m=Math.floor(pace);const s=Math.round((pace-m)*60);return`${m}:${s.toString().padStart(2,"0")}`;}
  function formatTime(totalMins){if(!totalMins)return"—";const h=Math.floor(totalMins/60);const m=Math.floor(totalMins%60);const s=Math.round((totalMins*60)%60);if(h>0)return`${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;return`${m}:${s.toString().padStart(2,"0")}`;}
  function getSpeedKph(distance,totalMins){if(!distance||!totalMins)return 0;return(distance/(totalMins/60));}

  function getPaceZone(pace){
    // pace = min/km
    if(pace<=3.5)return{zone:"Race Pace",color:"#ef4444",desc:"Max effort"};
    if(pace<=4.2)return{zone:"Threshold",color:"#f97316",desc:"Hard but sustainable"};
    if(pace<=5.0)return{zone:"Tempo",color:"#fbbf24",desc:"Comfortably hard"};
    if(pace<=6.0)return{zone:"Aerobic",color:"#22c55e",desc:"Conversational"};
    return{zone:"Easy",color:"#60a5fa",desc:"Recovery pace"};
  }

  function saveRun(){
    const totalMins=getTotalMins();
    if(!dist||totalMins<=0)return;
    const distance=parseFloat(dist);
    const pace=getPace(distance,totalMins);
    const speed=getSpeedKph(distance,totalMins);
    const calories=Math.round(totalMins*8.5); // rough estimate
    const run={
      id:Date.now(),distance,time:totalMins,unit,pace,speed,calories,
      type,notes,date:new Date().toISOString(),
    };
    const updated=[run,...runs];
    setRuns(updated);
    localStorage.setItem("fb_runs",JSON.stringify(updated));

    // Check PBs
    checkRunPBs(run,runs);

    setDist("");setHours("");setMins("");setSecs("");setNotes("");setSaved(true);
    setTimeout(()=>{setSaved(false);},2500);
  }

  function checkRunPBs(newRun,existingRuns){
    const pbs=JSON.parse(localStorage.getItem("fb_run_pbs")||"{}");
    let newPB=false;
    // Best pace PB
    if(!pbs.bestPace||newRun.pace<pbs.bestPace){pbs.bestPace=newRun.pace;newPB=true;}
    // Distance PBs for common distances
    const distances=[1,3,5,10,21.1,42.2];
    distances.forEach(d=>{
      const tolerance=d*0.02; // 2% tolerance
      if(Math.abs(newRun.distance-d)<=tolerance){
        const key=`dist_${d}`;
        if(!pbs[key]||newRun.pace<pbs[key]){pbs[key]=newRun.pace;newPB=true;}
      }
    });
    // Longest run PB
    if(!pbs.longest||newRun.distance>pbs.longest){pbs.longest=newRun.distance;newPB=true;}
    localStorage.setItem("fb_run_pbs",JSON.stringify(pbs));
  }

  function deleteRun(id){const updated=runs.filter(r=>r.id!==id);setRuns(updated);localStorage.setItem("fb_runs",JSON.stringify(updated));}

  // Stats
  const totalDist=runs.reduce((a,r)=>a+(r.distance||0),0);
  const totalTime=runs.reduce((a,r)=>a+(r.time||0),0);
  const totalCals=runs.reduce((a,r)=>a+(r.calories||0),0);
  const bestPace=runs.filter(r=>r.pace>0).length?Math.min(...runs.filter(r=>r.pace>0).map(r=>r.pace)):0;
  const longestRun=runs.length?Math.max(...runs.map(r=>r.distance)):0;
  const thisWeekRuns=runs.filter(r=>{const d=new Date(r.date);const now=new Date();const weekStart=new Date(now);weekStart.setDate(now.getDate()-now.getDay());return d>=weekStart;});
  const thisWeekDist=thisWeekRuns.reduce((a,r)=>a+(r.distance||0),0);

  const RUN_TYPES=[
    {id:"easy",label:"Easy Run",icon:"🌿",color:"#60a5fa"},
    {id:"tempo",label:"Tempo",icon:"⚡",color:"#fbbf24"},
    {id:"intervals",label:"Intervals",icon:"🔥",color:"#ef4444"},
    {id:"long",label:"Long Run",icon:"🏃",color:"#a855f7"},
    {id:"race",label:"Race",icon:"🏁",color:"#f97316"},
    {id:"recovery",label:"Recovery",icon:"💆",color:"#22c55e"},
  ];

  const currentPace=getPace(parseFloat(dist)||0,getTotalMins());
  const currentZone=currentPace>0?getPaceZone(currentPace):null;

  return(
    <div style={s.content}>
      <Eyebrow label="Cardio"/>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
        <h2 style={{...s.sectionTitle,marginBottom:0}}>Run Tracker</h2>
        <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
          <span style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em"}}>Units:</span>
          <div style={{display:"flex",background:"rgba(255,255,255,0.06)",borderRadius:"8px",overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)"}}>
            {["km","mi"].map(u=>(
              <button key={u} onClick={()=>{setUnit(u);localStorage.setItem("fb_run_unit",u);}} style={{padding:"0.3rem 0.65rem",background:unit===u?C.lime:"transparent",color:unit===u?"#000":"rgba(255,255,255,0.5)",border:"none",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.72rem",textTransform:"uppercase"}}>{u}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:"0.4rem",marginBottom:"1rem"}}>
        {[{id:"log",label:"Log",icon:"➕"},{id:"history",label:"History",icon:"📋"},{id:"pbs",label:"PBs",icon:"🏆"},{id:"goals",label:"Goals",icon:"🎯"}].map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{padding:"0.55rem 0.25rem",background:tab===t.id?"rgba(204,255,0,0.1)":"rgba(255,255,255,0.04)",border:`1px solid ${tab===t.id?"rgba(204,255,0,0.3)":"rgba(255,255,255,0.08)"}`,borderRadius:"10px",color:tab===t.id?C.lime:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.72rem",textTransform:"uppercase",cursor:"pointer",letterSpacing:"0.04em"}}>
            <div style={{fontSize:"1rem",marginBottom:"2px"}}>{t.icon}</div>
            {t.label}
          </button>
        ))}
      </div>

      {/* STATS BAR - always visible */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem",marginBottom:"0.75rem"}}>
        {[
          {n:`${thisWeekDist.toFixed(1)}`,l:`This Week (${unit})`,icon:"📅"},
          {n:`${totalDist.toFixed(1)}`,l:`Total ${unit}`,icon:"🗺️"},
          {n:bestPace>0?formatPace(bestPace):"—",l:`Best Pace`,icon:"⚡"},
        ].map((x,i)=>(
          <div key={i} style={{...s.card,textAlign:"center",padding:"0.75rem 0.4rem",marginBottom:0}}>
            <div style={{fontSize:"1.1rem",marginBottom:"0.2rem"}}>{x.icon}</div>
            <div style={{fontSize:"1.3rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
            <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1.3}}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* LOG TAB */}
      {tab==="log"&&(
        <div>
          {/* Run type selector */}
          <div style={{...s.card,marginBottom:"0.75rem"}}>
            <label style={{...s.label,marginBottom:"0.6rem",display:"block"}}>Run Type</label>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.4rem"}}>
              {RUN_TYPES.map(rt=>(
                <button key={rt.id} onClick={()=>setType(rt.id)} style={{padding:"0.6rem 0.4rem",background:type===rt.id?`${rt.color}20`:"rgba(255,255,255,0.04)",border:`1px solid ${type===rt.id?rt.color:"rgba(255,255,255,0.08)"}`,borderRadius:"10px",cursor:"pointer",textAlign:"center"}}>
                  <div style={{fontSize:"1.1rem",marginBottom:"2px"}}>{rt.icon}</div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.65rem",textTransform:"uppercase",color:type===rt.id?rt.color:"rgba(255,255,255,0.4)"}}>{rt.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Distance + Time */}
          <div style={s.card}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",marginBottom:"0.75rem"}}>
              <div>
                <label style={s.label}>Distance ({unit})</label>
                <input type="number" step="0.01" placeholder={`e.g. 5.00`} value={dist} onChange={e=>setDist(e.target.value)} style={{...s.input,marginBottom:0,fontSize:"1.1rem",fontWeight:700}}/>
              </div>
              <div>
                <label style={s.label}>Time</label>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"4px"}}>
                  {[{v:hours,set:setHours,ph:"0",l:"h"},{v:mins,set:setMins,ph:"25",l:"m"},{v:secs,set:setSecs,ph:"00",l:"s"}].map((f,i)=>(
                    <div key={i} style={{position:"relative"}}>
                      <input type="number" min="0" placeholder={f.ph} value={f.v} onChange={e=>f.set(e.target.value)} style={{...s.input,marginBottom:0,padding:"0.6rem 0.4rem",paddingRight:"1.2rem",fontSize:"0.9rem",textAlign:"center"}}/>
                      <span style={{position:"absolute",right:"4px",top:"50%",transform:"translateY(-50%)",fontSize:"0.62rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800}}>{f.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live pace indicator */}
            {currentPace>0&&currentZone&&(
              <div style={{background:`${currentZone.color}15`,border:`1px solid ${currentZone.color}40`,borderRadius:"12px",padding:"0.75rem 1rem",marginBottom:"0.75rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.5rem",color:currentZone.color,lineHeight:1}}>{formatPace(currentPace)}<span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",marginLeft:"4px"}}>min/{unit}</span></div>
                  <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif"}}>{getSpeedKph(parseFloat(dist),getTotalMins()).toFixed(1)} km/h</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.85rem",color:currentZone.color,textTransform:"uppercase"}}>{currentZone.zone}</div>
                  <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>{currentZone.desc}</div>
                </div>
              </div>
            )}

            <input style={{...s.input,marginBottom:"0.75rem"}} placeholder="Notes (optional — route, how you felt...)" value={notes} onChange={e=>setNotes(e.target.value)}/>
            <button onClick={saveRun} disabled={!dist||getTotalMins()<=0} style={{...s.btn,width:"100%",padding:"1rem",opacity:dist&&getTotalMins()>0?1:0.4,fontSize:"0.95rem"}}>
              {saved?"Run Saved! 🎉 Great work!":"Save Run →"}
            </button>
          </div>

          {/* Pace zone guide */}
          <div style={s.card}>
            <label style={{...s.label,marginBottom:"0.6rem",display:"block"}}>Pace Zones</label>
            {[
              {zone:"Easy",range:"6:00+",color:"#60a5fa",desc:"Recovery & base building"},
              {zone:"Aerobic",range:"5:00–6:00",color:"#22c55e",desc:"Conversational pace"},
              {zone:"Tempo",range:"4:10–5:00",color:"#fbbf24",desc:"Comfortably hard"},
              {zone:"Threshold",range:"3:30–4:10",color:"#f97316",desc:"Race day effort"},
              {zone:"Race Pace",range:"<3:30",color:"#ef4444",desc:"Maximum effort"},
            ].map((z,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.4rem 0",borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <div style={{width:"10px",height:"10px",borderRadius:"50%",background:z.color,flexShrink:0,boxShadow:`0 0 6px ${z.color}60`}}/>
                <div style={{flex:1,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.8rem",color:"rgba(255,255,255,0.7)"}}>{z.zone}</div>
                <div style={{fontSize:"0.75rem",color:z.color,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800}}>{z.range}</div>
                <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",textAlign:"right",maxWidth:"100px"}}>{z.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HISTORY TAB */}
      {tab==="history"&&(
        <div>
          {runs.length===0?(
            <div style={{...s.card,textAlign:"center",padding:"2.5rem"}}>
              <div style={{fontSize:"3rem",marginBottom:"0.75rem"}}>🏃</div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem"}}>No runs logged yet</div>
              <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>Log your first run in the Log tab.</div>
            </div>
          ):(
            <>
              {/* Weekly summary */}
              <div style={{...s.card,marginBottom:"0.75rem"}}>
                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.75rem"}}>
                  {[
                    {n:runs.length,l:"Total Runs",icon:"🏃"},
                    {n:`${totalDist.toFixed(1)}${unit}`,l:"Total Distance",icon:"🗺️"},
                    {n:Math.round(totalTime/60)+"h "+Math.round(totalTime%60)+"m",l:"Total Time",icon:"⏱️"},
                    {n:`${totalCals.toLocaleString()} kcal`,l:"Calories Burned",icon:"🔥"},
                  ].map((x,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem"}}>
                      <span style={{fontSize:"1.2rem"}}>{x.icon}</span>
                      <div>
                        <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",color:C.white,lineHeight:1}}>{x.n}</div>
                        <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em"}}>{x.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {runs.map((run,i)=>{
                const rt=RUN_TYPES.find(r=>r.id===run.type)||RUN_TYPES[0];
                const zone=run.pace>0?getPaceZone(run.pace):null;
                return(
                  <div key={run.id||i} style={{...s.card,marginBottom:"0.5rem",position:"relative"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"0.85rem",marginBottom:run.notes?"0.5rem":"0"}}>
                      <div style={{width:"40px",height:"40px",borderRadius:"12px",background:`${rt.color}15`,border:`1px solid ${rt.color}30`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.2rem"}}>{rt.icon}</div>
                      <div style={{flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.2rem"}}>
                          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.9rem",color:C.white}}>{run.distance.toFixed(2)}{run.unit}</div>
                          {zone&&<div style={{background:`${zone.color}20`,border:`1px solid ${zone.color}30`,borderRadius:"4px",padding:"1px 6px",fontSize:"0.58rem",fontWeight:800,textTransform:"uppercase",color:zone.color,fontFamily:"'Barlow Condensed',sans-serif"}}>{zone.zone}</div>}
                        </div>
                        <div style={{display:"flex",gap:"0.75rem",flexWrap:"wrap"}}>
                          <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>⏱ {formatTime(run.time)}</span>
                          <span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>🏃 {formatPace(run.pace)} /km</span>
                          {run.calories>0&&<span style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>🔥 {run.calories} kcal</span>}
                        </div>
                      </div>
                      <div style={{textAlign:"right",flexShrink:0}}>
                        <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{new Date(run.date).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}</div>
                        <button onClick={()=>deleteRun(run.id)} style={{background:"transparent",border:"none",color:"rgba(255,100,100,0.4)",cursor:"pointer",fontSize:"1rem",padding:"0.15rem",marginTop:"0.2rem"}}>×</button>
                      </div>
                    </div>
                    {run.notes&&<div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",fontStyle:"italic",paddingTop:"0.4rem",borderTop:"1px solid rgba(255,255,255,0.05)"}}>{run.notes}</div>}
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}

      {/* PBs TAB */}
      {tab==="pbs"&&(()=>{
        const pbs=JSON.parse(localStorage.getItem("fb_run_pbs")||"{}");
        const distancePBs=[
          {key:"dist_1",label:"1km",icon:"🟢"},
          {key:"dist_3",label:"3km",icon:"🟡"},
          {key:"dist_5",label:"5km",icon:"🟠"},
          {key:"dist_10",label:"10km",icon:"🔴"},
          {key:"dist_21.1",label:"Half Marathon",icon:"🏅"},
          {key:"dist_42.2",label:"Marathon",icon:"🏆"},
        ];
        return(
          <div>
            <div style={s.card}>
              <label style={{...s.label,color:C.white,marginBottom:"0.75rem",display:"block"}}>Distance PBs</label>
              {distancePBs.map((d,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.65rem 0",borderBottom:i<distancePBs.length-1?"1px solid rgba(255,255,255,0.06)":"none"}}>
                  <span style={{fontSize:"1.2rem",flexShrink:0}}>{d.icon}</span>
                  <div style={{flex:1,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.88rem",color:C.white}}>{d.label}</div>
                  <div style={{textAlign:"right"}}>
                    {pbs[d.key]?(
                      <>
                        <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",color:C.lime}}>{formatPace(pbs[d.key])}<span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)",marginLeft:"3px"}}>min/km</span></div>
                      </>
                    ):(
                      <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif"}}>Not set yet</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={s.card}>
              <label style={{...s.label,color:C.white,marginBottom:"0.75rem",display:"block"}}>Other Records</label>
              {[
                {label:"Longest Run",value:pbs.longest?`${pbs.longest.toFixed(2)} ${unit}`:"Not set",icon:"🗺️"},
                {label:"Best Pace (any distance)",value:pbs.bestPace?`${formatPace(pbs.bestPace)} min/km`:"Not set",icon:"⚡"},
              ].map((r,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.65rem 0",borderBottom:i<1?"1px solid rgba(255,255,255,0.06)":"none"}}>
                  <span style={{fontSize:"1.3rem"}}>{r.icon}</span>
                  <div style={{flex:1,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.85rem",color:C.white}}>{r.label}</div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.95rem",color:r.value==="Not set"?"rgba(255,255,255,0.25)":C.lime}}>{r.value}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* GOALS TAB */}
      {tab==="goals"&&(()=>{
        const[localGoals,setLocalGoals]=useState(goals);
        const[goalSaved,setGoalSaved]=useState(false);
        function saveGoals(){localStorage.setItem("fb_run_goals",JSON.stringify(localGoals));setGoals(localGoals);setGoalSaved(true);setTimeout(()=>setGoalSaved(false),2000);}
        const weeklyProgress=(thisWeekDist/((localGoals.weeklyDist||0)*1)).toFixed(1);
        return(
          <div>
            {localGoals.weeklyDist>0&&(
              <div style={{...s.card,marginBottom:"0.75rem"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem"}}>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.88rem",color:C.white}}>Weekly Goal</div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.88rem",color:C.lime}}>{thisWeekDist.toFixed(1)} / {localGoals.weeklyDist} {unit}</div>
                </div>
                <div style={s.progressBar}><div style={{...s.progressFill,width:`${Math.min(100,Math.round((thisWeekDist/(localGoals.weeklyDist||1))*100))}%`}}/></div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",marginTop:"0.35rem"}}>{Math.round((thisWeekDist/(localGoals.weeklyDist||1))*100)}% complete this week</div>
              </div>
            )}
            <div style={s.card}>
              <label style={{...s.label,color:C.white,marginBottom:"0.75rem",display:"block"}}>Set Your Running Goals</label>
              {[
                {k:"weeklyDist",l:`Weekly Distance (${unit})`,ph:"20",icon:"📅"},
                {k:"weeklyRuns",l:"Weekly Runs",ph:"3",icon:"🏃"},
                {k:"targetPace",l:`Target Pace (min/${unit})`,ph:"5.30",icon:"⚡"},
                {k:"goalRace",l:"Goal Race Distance",ph:"5km, 10km, Half...",icon:"🏁",text:true},
              ].map(({k,l,ph,icon,text})=>(
                <div key={k} style={{marginBottom:"0.85rem"}}>
                  <label style={{...s.label,marginBottom:"0.35rem",display:"flex",alignItems:"center",gap:"0.4rem"}}><span>{icon}</span>{l}</label>
                  <input type={text?"text":"number"} step="0.01" placeholder={ph} value={localGoals[k]||""} onChange={e=>setLocalGoals(p=>({...p,[k]:e.target.value}))} style={{...s.input,marginBottom:0}}/>
                </div>
              ))}
              <button onClick={saveGoals} style={{...s.btn,width:"100%",padding:"0.9rem"}}>{goalSaved?"Goals Saved ✓":"Save Goals"}</button>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

// ─── MACRO SETTINGS ───────────────────────────────────────────────────────────
function MacroSettings(){
  const[targets,setTargets]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_macro_targets")||"{}");}catch{return{};}});
  const[saved,setSaved]=useState(false);
  function update(k,v){setTargets(p=>({...p,[k]:parseInt(v)||0}));}
  function save(){localStorage.setItem("fb_macro_targets",JSON.stringify(targets));setSaved(true);setTimeout(()=>setSaved(false),2000);}
  return(
    <div style={s.content}>
      <Eyebrow label="Nutrition Settings"/>
      <h2 style={s.sectionTitle}>Custom Macro Targets</h2>
      <p style={s.sectionSub}>Override the auto-calculated targets with your own.</p>
      <div style={s.card}>
        {[
          {k:"cal",l:"Daily Calories",icon:"🔥",unit:"kcal",color:"#fb923c"},
          {k:"p",l:"Protein",icon:"🥩",unit:"g",color:"#60a5fa"},
          {k:"c",l:"Carbohydrates",icon:"🍚",unit:"g",color:"#fbbf24"},
          {k:"f",l:"Fats",icon:"🥑",unit:"g",color:"#34d399"},
        ].map(({k,l,icon,unit:u,color})=>(
          <div key={k} style={{marginBottom:"1rem"}}>
            <label style={{...s.label,marginBottom:"0.4rem",display:"flex",alignItems:"center",gap:"0.4rem"}}><span>{icon}</span>{l} <span style={{color:"rgba(255,255,255,0.3)"}}>({u})</span></label>
            <div style={{display:"flex",alignItems:"center",gap:"0.75rem"}}>
              <input type="number" value={targets[k]||""} onChange={e=>update(k,e.target.value)} style={{...s.input,marginBottom:0,flex:1,borderColor:color+"40"}} placeholder="0"/>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",color,minWidth:"50px",textAlign:"right"}}>{targets[k]||0}{u}</div>
            </div>
          </div>
        ))}
        <button onClick={save} style={{...s.btn,width:"100%",padding:"0.9rem",marginTop:"0.25rem"}}>{saved?"Saved ✓":"Save Targets"}</button>
      </div>
      <div style={{...s.card,background:"rgba(255,255,255,0.03)"}}>
        <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.5rem"}}>💡 Tip</div>
        <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6}}>Your targets were auto-calculated from your goal and bodyweight during onboarding. Only change these if you have specific targets from a nutritionist or coach.</div>
      </div>
    </div>
  );
}

// ─── SHARE WORKOUT CARD ───────────────────────────────────────────────────────
function ShareWorkoutCard({workoutName,sets,calories,duration}){
  const[shared,setShared]=useState(false);
  async function share(){
    const text=`Just crushed ${workoutName} on ForgeBody 💪\n${sets} sets · ~${calories} kcal · ${duration} min\nTry it free → forgebody.fit`;
    try{
      if(navigator.share){await navigator.share({title:"ForgeBody Workout",text});}
      else{await navigator.clipboard.writeText(text);}
      setShared(true);setTimeout(()=>setShared(false),2000);
    }catch(e){}
  }
  return(
    <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.08),rgba(150,220,0,0.03))",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"16px",padding:"1rem 1.1rem",marginBottom:"0.75rem"}}>
      <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.5rem"}}>Share Your Workout</div>
      <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1rem",color:C.white,marginBottom:"0.25rem"}}>{workoutName}</div>
      <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.75rem"}}>{sets} sets · ~{calories} kcal · {duration} min</div>
      <button onClick={share} style={{...s.btnGlass,width:"100%",padding:"0.65rem",fontSize:"0.82rem"}}>
        {shared?"Copied to clipboard! 📋":"Share to Instagram / WhatsApp 📤"}
      </button>
    </div>
  );
}

// ─── WORKOUT HISTORY SCREEN ───────────────────────────────────────────────────
function WorkoutHistoryScreen({user}){
  const[history,setHistory]=useState([]);
  const[loading,setLoading]=useState(true);
  useEffect(()=>{
    async function load(){
      try{
        const{data}=await supabase.from("workout_history").select("*").eq("user_id",user.id).order("created_at",{ascending:false}).limit(50);
        setHistory(data||[]);
      }catch(e){}
      setLoading(false);
    }
    load();
  },[user.id]);
  return(
    <div style={s.content}>
      <Eyebrow label="Training Log"/>
      <h2 style={s.sectionTitle}>Workout History</h2>
      <p style={s.sectionSub}>Every session you've ever completed.</p>
      {loading?(
        <div style={{textAlign:"center",padding:"2rem"}}><LoadingDots/></div>
      ):history.length===0?(
        <div style={{...s.card,textAlign:"center",padding:"2.5rem"}}>
          <div style={{fontSize:"2.5rem",marginBottom:"0.75rem"}}>🏋️</div>
          <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem"}}>No workouts yet</div>
          <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>Complete your first workout to see it here.</div>
        </div>
      ):(
        <>
          <div style={{...s.card,background:"rgba(204,255,0,0.06)",borderColor:"rgba(204,255,0,0.2)",marginBottom:"0.75rem",display:"flex",gap:"1.5rem",justifyContent:"center"}}>
            {[{n:history.length,l:"Sessions"},{n:history.reduce((a,w)=>a+(w.sets_completed||0),0),l:"Total Sets"},{n:[...new Set(history.map(w=>w.split))].length,l:"Splits"}].map((x,i)=>(
              <div key={i} style={{textAlign:"center"}}>
                <div style={{fontSize:"1.8rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
                <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
              </div>
            ))}
          </div>
          {history.map((w,i)=>(
            <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"0.85rem",marginBottom:"0.5rem"}}>
              <div style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(204,255,0,0.08)",border:"1px solid rgba(204,255,0,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.1rem"}}>💪</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.9rem",color:C.white}}>{w.day_label||"Workout"}</div>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>{w.exercises} exercises · {w.sets_completed} sets · {w.split}</div>
              </div>
              <div style={{textAlign:"right",flexShrink:0}}>
                <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>{new Date(w.created_at).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}</div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

// ─── WORKOUT NOTES ────────────────────────────────────────────────────────────
function WorkoutNotes({workoutKey}){
  const storageKey=`fb_note_${workoutKey}`;
  const[note,setNote]=useState(()=>localStorage.getItem(storageKey)||"");
  const[saved,setSaved]=useState(false);
  function save(){localStorage.setItem(storageKey,note);setSaved(true);setTimeout(()=>setSaved(false),2000);}
  return(
    <div style={s.card}>
      <div style={{...s.label,marginBottom:"0.5rem",color:C.white}}>Session Notes</div>
      <textarea
        value={note}
        onChange={e=>setNote(e.target.value)}
        placeholder="How did this session feel? Any PRs, injuries, energy levels..."
        style={{width:"100%",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",padding:"0.75rem",color:"rgba(255,255,255,0.8)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",lineHeight:1.6,resize:"none",outline:"none",minHeight:"80px",boxSizing:"border-box"}}
      />
      <button onClick={save} style={{...s.btnGlass,width:"100%",marginTop:"0.5rem",padding:"0.6rem"}}>{saved?"Saved ✓":"Save Note"}</button>
    </div>
  );
}

function LandingPage({onSignIn,onSelectPlan,onLogoTap}){
  const[slide,setSlide]=useState(0);
  const[isDragging,setIsDragging]=useState(false);
  const[dragStartX,setDragStartX]=useState(0);
  const[dragOffset,setDragOffset]=useState(0);
  const[showExitIntent,setShowExitIntent]=useState(false);

  // Fire ViewContent when landing page loads
  useEffect(()=>{
    try{if(window.fbq)window.fbq('track','ViewContent');}catch(e){}
    // Exit intent — show after 30s if user hasn't converted
    const dismissed=localStorage.getItem("fb_exit_dismissed");
    if(!dismissed){
      const t=setTimeout(()=>setShowExitIntent(true),30000);
      return()=>clearTimeout(t);
    }
  },[]);

  function handleCTAClick(){
    try{if(window.fbq)window.fbq('track','Lead');}catch(e){}
    onSelectPlan();
  }

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

        {showExitIntent&&<ExitIntentPopup onClaim={()=>{setShowExitIntent(false);handleCTAClick();}} onDismiss={()=>{setShowExitIntent(false);localStorage.setItem("fb_exit_dismissed","true");}}/>}

        {/* Hero section */}
        <div style={{padding:"2rem 1.25rem 0"}}>

          <SocialProofBar/>

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
          <button onClick={handleCTAClick} style={{width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",marginBottom:"0.6rem",background:C.lime,color:"#000",border:"none",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 0 40px rgba(204,255,0,0.35)",transition:"all 0.2s"}}>
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

        {/* More testimonials */}
        <div style={{padding:"0 1.25rem 1.5rem"}}>
          {[
            {quote:"Lost 8kg in 10 weeks. The meal plans actually taste good and the workouts adjust to my schedule. Worth every cent.",name:"Sarah M., Brisbane"},
            {quote:"I've tried every fitness app. This is the first one that actually feels like it knows me. The AI coach is insane.",name:"Marcus T., Sydney"},
            {quote:"Cancelled my PT after 2 weeks. Saving $480/month and making better progress. No brainer.",name:"James K., Melbourne"},
          ].map((t,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem"}}>
              <div style={{display:"flex",gap:"1px",marginBottom:"0.5rem"}}>{[...Array(5)].map((_,j)=><span key={j} style={{color:"#fbbf24",fontSize:"1rem"}}>★</span>)}</div>
              <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",color:"rgba(255,255,255,0.65)",lineHeight:1.6,fontStyle:"italic",marginBottom:"0.5rem"}}>"{t.quote}"</div>
              <div style={{fontSize:"0.7rem",fontWeight:800,color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.08em"}}>— {t.name}</div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div style={{padding:"0 1.25rem 1.5rem"}}>
          <div style={{textAlign:"center",marginBottom:"1rem"}}>
            <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.4rem"}}>How we compare</div>
            <div style={{fontSize:"1.6rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>ForgeBody vs The Rest</div>
          </div>
          <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",overflow:"hidden"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
              {["Feature","ForgeBody","PT","Other Apps"].map((h,i)=>(
                <div key={i} style={{padding:"0.75rem 0.5rem",textAlign:"center",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.72rem",textTransform:"uppercase",letterSpacing:"0.06em",color:i===1?C.lime:"rgba(255,255,255,0.4)",background:i===1?"rgba(204,255,0,0.05)":"transparent"}}>{h}</div>
              ))}
            </div>
            {[
              ["Price","$19/mo","$150/hr","$15-30/mo"],
              ["Personalised","✅","✅","❌"],
              ["Meal Plans","✅","❌","❌"],
              ["AI Coach 24/7","✅","❌","❌"],
              ["Free Trial","7 days","❌","7 days"],
              ["Progress Track","✅","Sometimes","Basic"],
              ["Cancel anytime","✅","Contract","✅"],
            ].map((row,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",borderBottom:i<6?"1px solid rgba(255,255,255,0.05)":"none"}}>
                {row.map((cell,j)=>(
                  <div key={j} style={{padding:"0.6rem 0.5rem",textAlign:"center",fontFamily:j===0?"'Barlow Condensed',sans-serif":"'Barlow',sans-serif",fontWeight:j===0?800:400,fontSize:"0.78rem",color:j===1?C.white:j===0?"rgba(255,255,255,0.6)":"rgba(255,255,255,0.35)",background:j===1?"rgba(204,255,0,0.03)":"transparent",textTransform:j===0?"uppercase":"none",letterSpacing:j===0?"0.06em":"normal"}}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{padding:"0 1.25rem 1.5rem"}}>
          <div style={{textAlign:"center",marginBottom:"1rem"}}>
            <div style={{fontSize:"1.6rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>Questions Answered</div>
          </div>
          <FAQSection/>
        </div>

        {/* Final CTA */}
        <div style={{padding:"0 1.25rem"}}>
          <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.1),rgba(150,220,0,0.05))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"24px",padding:"2rem 1.5rem",textAlign:"center",position:"relative",overflow:"hidden",marginBottom:"1rem"}}>
            <div style={{position:"absolute",top:"-30px",right:"-30px",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(204,255,0,0.08)",filter:"blur(25px)",pointerEvents:"none"}}/>
            <div style={{fontSize:"2rem",marginBottom:"0.75rem"}}>🔥</div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.6rem",letterSpacing:"-0.02em",color:C.white,marginBottom:"0.4rem",lineHeight:1}}>Ready to Forge<br/>Your Body?</div>
            <div style={{color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",marginBottom:"1.5rem",lineHeight:1.5}}>Join ForgeBody. Train smarter.<br/>Cancel anytime. 7 days free.</div>
            <button onClick={handleCTAClick} style={{width:"100%",padding:"1.1rem",fontSize:"1rem",borderRadius:"14px",background:C.lime,color:"#000",border:"none",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,cursor:"pointer",letterSpacing:"0.08em",textTransform:"uppercase",boxShadow:"0 0 30px rgba(204,255,0,0.3)"}}>
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
    try{if(window.fbq)window.fbq('track','StartTrial',{value:19,currency:'AUD',predicted_ltv:114});}catch(e){}
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

  // Fire Meta Subscribe pixel event
  useEffect(()=>{
    try{
      if(window.fbq){
        window.fbq('track','Subscribe',{value:19,currency:'AUD'});
        window.fbq('track','Purchase',{value:19,currency:'AUD'});
      }
    }catch(e){}
  },[]);
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
  const[data,setData]=useState({name:"",goal:"muscle",weight:"",unit:"kg",diet:"standard",split:"ppl",days:"4",level:"intermediate",duration:"60"});
  function upd(k,v){setData(d=>({...d,[k]:v}));}
  async function finish(){
    localStorage.setItem("fb_workout_settings",JSON.stringify({split:data.split,days:data.days,level:data.level,wGoal:data.goal,duration:data.duration||"60"}));
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
      <Eyebrow label="Step 2 of 6"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Primary goal?</div>
      {[{k:"fat loss",l:"Fat Loss",d:"Burn fat, get lean",i:"🔥"},{k:"muscle",l:"Muscle & Size",d:"Build muscle, get bigger",i:"💪"},{k:"strength",l:"Strength",d:"Get stronger, lift heavier",i:"🏋️"},{k:"athletic",l:"Athletic",d:"Speed, power, conditioning",i:"⚡"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("goal",o.k);setStep(2);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.goal===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.goal===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={2} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 3 of 6"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Training split?</div>
      {[{k:"ppl",l:"Push / Pull / Legs",d:"3-6 days · Classic bodybuilding",i:"⚡"},{k:"upper_lower",l:"Upper / Lower",d:"4 days · Strength & size",i:"💪"},{k:"muscle_group",l:"Muscle Group",d:"5 days · Dedicated per muscle",i:"🎯"},{k:"full_body",l:"Full Body / HIIT",d:"3 days · Fat loss & conditioning",i:"🔥"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("split",o.k);setStep(3);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.split===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.split===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={3} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 4 of 6"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Experience level?</div>
      {[{k:"beginner",l:"Beginner",d:"Less than 1 year",i:"🌱"},{k:"intermediate",l:"Intermediate",d:"1-3 years consistent",i:"⚡"},{k:"advanced",l:"Advanced",d:"3+ years, knows all movements",i:"🔥"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("level",o.k);setStep(4);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.level===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.level===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span><div><div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div><div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div></div>
        </div>
      ))}
    </div>,
    <div key={4} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 5 of 6"/><div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1.25rem"}}>Last details</div>
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
        <button onClick={()=>setStep(5)} style={{...s.btn,width:"100%",padding:"0.9rem"}}>Continue →</button>
      </div>
    </div>,
    <div key={5} style={{animation:"fadeUp 0.3s ease"}}>
      <Eyebrow label="Step 6 of 6"/>
      <div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.5rem"}}>How long do you train?</div>
      <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem",marginBottom:"1.25rem"}}>We'll build your workout to fit your schedule.</div>
      {[{k:"30",l:"30 Minutes",d:"Quick & efficient · 3 exercises",i:"⚡"},{k:"45",l:"45 Minutes",d:"Solid session · 4 exercises",i:"💪"},{k:"60",l:"60 Minutes",d:"Full workout · 5 exercises",i:"🏋️"},{k:"90",l:"90 Minutes",d:"Serious training · 6 exercises",i:"🔥"},{k:"120",l:"2 Hours",d:"Full volume · 8 exercises",i:"👑"}].map(o=>(
        <div key={o.k} onClick={()=>{upd("duration",o.k);}} style={{...s.card,cursor:"pointer",border:`1px solid ${data.duration===o.k?C.lime:"rgba(255,255,255,0.1)"}`,background:data.duration===o.k?"rgba(204,255,0,0.08)":s.card.background,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
          <span style={{fontSize:"1.5rem"}}>{o.i}</span>
          <div style={{flex:1}}>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{o.l}</div>
            <div style={{color:"rgba(255,255,255,0.4)",fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div>
          </div>
          {data.duration===o.k&&<div style={{width:"20px",height:"20px",borderRadius:"50%",background:C.lime,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}
        </div>
      ))}
      <button onClick={finish} disabled={!data.duration} style={{...s.btn,width:"100%",padding:"0.9rem",marginTop:"0.75rem",opacity:data.duration?1:0.5}}>Let's Forge 🔥</button>
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

      {/* Live member counter */}
      <SocialProofBar/>

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

      {/* 12-WEEK PROGRAMME CARD */}
      <ProgrammeHomeCard onNavigate={onNavigate}/>

      {/* STREAK PROTECTION */}
      <StreakProtectionAlert streak={streak} onNavigate={onNavigate}/>

      {/* COACH CHECK-IN */}
      <CoachCheckIn/>

      {/* PROGRESSIVE OVERLOAD */}
      <ProgressiveOverloadCard onStartWorkout={()=>onNavigate("tab","train")}/>

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
  const[showCreator,setShowCreator]=useState(false);
  const[customWorkouts,setCustomWorkouts]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_custom_workouts")||"[]");}catch{return[];}});

  function saveAndGo(goal){
    const newSettings={split,days,level,wGoal:goal,duration:settings.duration||"60"};
    localStorage.setItem("fb_workout_settings",JSON.stringify(newSettings));
    setSettings(newSettings);
    if(onSetupComplete)onSetupComplete(newSettings);
  }

  function deleteCustomWorkout(id){
    const updated=customWorkouts.filter(w=>w.id!==id);
    setCustomWorkouts(updated);
    localStorage.setItem("fb_custom_workouts",JSON.stringify(updated));
  }

  if(showCreator){
    return <CustomWorkoutCreator onCancel={()=>setShowCreator(false)} onSave={(w)=>{setCustomWorkouts(prev=>[...prev,w]);setShowCreator(false);onStartWorkout(0,w);}}/>;
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

      {/* Custom workouts section */}
      <div style={{marginTop:"0.75rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.6rem"}}>
          <div style={{...s.label,marginBottom:0,color:C.white}}>My Custom Workouts</div>
          <button onClick={()=>setShowCreator(true)} style={{...s.btn,padding:"0.45rem 0.9rem",fontSize:"0.75rem",borderRadius:"8px"}}>+ Create</button>
        </div>
        {customWorkouts.length===0?(
          <div onClick={()=>setShowCreator(true)} style={{...s.card,cursor:"pointer",textAlign:"center",padding:"1.5rem",borderStyle:"dashed",borderColor:"rgba(204,255,0,0.2)",background:"rgba(204,255,0,0.03)"}}>
            <div style={{fontSize:"1.5rem",marginBottom:"0.35rem"}}>➕</div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.lime,marginBottom:"0.2rem"}}>Create Custom Workout</div>
            <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.75rem",fontFamily:"'Barlow',sans-serif"}}>Build your own routine from our exercise library</div>
          </div>
        ):customWorkouts.map((w,i)=>(
          <div key={w.id||i} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
            <div style={{width:"36px",height:"36px",borderRadius:"10px",background:"rgba(204,255,0,0.1)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontSize:"1rem"}}>💪</span>
            </div>
            <div style={{flex:1,cursor:"pointer"}} onClick={()=>onStartWorkout(0,w)}>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.9rem",color:C.white}}>{w.name}</div>
              <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>{w.exercises?.length||0} exercises · {[...new Set(w.muscles||[])].slice(0,3).join(", ")}</div>
            </div>
            <div style={{display:"flex",gap:"0.4rem"}}>
              <button onClick={()=>onStartWorkout(0,w)} style={{...s.btn,padding:"0.4rem 0.75rem",fontSize:"0.72rem",borderRadius:"8px"}}>Start</button>
              <button onClick={()=>deleteCustomWorkout(w.id)} style={{...s.btnGlass,padding:"0.4rem 0.6rem",fontSize:"0.72rem",borderRadius:"8px",color:"rgba(255,100,100,0.6)",borderColor:"rgba(255,100,100,0.15)"}}>×</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── WORKOUT SESSION ─────────────────────────────────────────────────────────
function WorkoutSession({dayIndex,onDone,customWorkout=null}){
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");
  const splitData=customWorkout?{name:"Custom Workout"}:SPLITS[settings.split||"ppl"];
  const daysKey=customWorkout?null:Object.keys(splitData).filter(k=>k!=="name").find(k=>k===`days${settings.days||"4"}`)||Object.keys(splitData).filter(k=>k!=="name")[0];
  const template=customWorkout?null:(splitData[daysKey]||[]);
  const dayIdx=customWorkout?0:(dayIndex!==undefined?dayIndex:new Date().getDay()%(template?.length||1));
  const day=customWorkout||template[dayIdx];
  const level=settings.level||"intermediate";
  const goal=settings.wGoal||"muscle";

  // Duration-based exercise count
  const savedDuration=parseInt(settings.duration||"60");
  const[duration,setDuration]=useState(savedDuration);
  const[showDurationPicker,setShowDurationPicker]=useState(false);

  function getExerciseCount(dur){
    if(dur<=30)return 3;
    if(dur<=45)return 4;
    if(dur<=60)return 5;
    if(dur<=90)return 6;
    return 8;
  }
  function getSetCount(dur,base){
    const n=parseInt(base)||3;
    if(dur<=30)return Math.max(2,n-1);
    if(dur>=90)return n+1;
    return n;
  }

  function getGoalReps(baseReps){
    if(goal==="strength")return"3-5";
    if(goal==="fat loss")return"15-20";
    if(goal==="athletic")return"8-12";
    return baseReps;
  }
  function getLevelSets(sets){
    const n=parseInt(sets)||3;
    if(level==="beginner")return Math.max(2,n-1);
    if(level==="advanced")return n+1;
    return n;
  }
  function getGoalRest(baseRest){
    if(goal==="strength")return"3-5 min";
    if(goal==="fat loss")return"30-45 sec";
    if(goal==="athletic")return"60 sec";
    return baseRest;
  }

  // Exercise GIF descriptions (CSS animated)
  const EXERCISE_CUES={
    "Barbell Bench Press":"Lie flat, grip slightly wider than shoulders. Lower bar to chest, press up explosively.",
    "Deadlift":"Feet hip-width, bar over mid-foot. Hinge hips back, drive through floor, lock out at top.",
    "Barbell Back Squat":"Bar on traps, feet shoulder-width. Break parallel, knees track toes, drive up through heels.",
    "Overhead Press":"Bar at collarbone, core tight. Press vertically, lock out overhead, lower controlled.",
    "Pull-Up / Lat Pulldown":"Depress scapula first. Pull elbows to ribs, squeeze lats at bottom, control the ascent.",
    "Romanian Deadlift":"Soft knee bend. Push hips back, feel hamstring stretch, drive hips forward to stand.",
    "Hip Thrust":"Bar across hips, upper back on bench. Drive through heels, squeeze glutes hard at top.",
    "Dumbbell Lateral Raise":"Slight forward lean, lead with elbows. Raise to shoulder height, slow lower.",
    "default":"Focus on full range of motion. Control the eccentric. Breathe out on the effort.",
  };

  function buildExercises(day,dur){
    if(customWorkout&&customWorkout.exercises){return customWorkout.exercises;}
    const exCount=getExerciseCount(dur);
    const result=[];
    day.muscles.forEach(muscle=>{
      const pool=EXERCISES[muscle]||[];
      // Advanced gets harder exercises (later in pool), beginner gets easier (earlier)
      const offset=level==="advanced"?Math.min(2,pool.length-exCount):0;
      pool.slice(offset,offset+Math.ceil(exCount/day.muscles.length)+1).forEach(ex=>{
        if(result.length<exCount){
          const sets=String(getLevelSets(getSetCount(dur,ex.sets)));
          result.push({...ex,muscle,sets,reps:getGoalReps(ex.reps),rest:getGoalRest(ex.rest)});
        }
      });
    });
    return result.slice(0,exCount);
  }

  const[exercises,setExercises]=useState(()=>buildExercises(day,savedDuration));
  const[mode,setMode]=useState("overview");
  const[exIdx,setExIdx]=useState(0);
  const[completedSets,setCompletedSets]=useState({});
  const[setLogs,setSetLogs]=useState({});
  const[showTimer,setShowTimer]=useState(false);
  const[showLogger,setShowLogger]=useState(false);
  const[timerSecs,setTimerSecs]=useState(60);
  const[pendingKey,setPendingKey]=useState(null);
  const[showPBCelebration,setShowPBCelebration]=useState(null);
  const[showQuit,setShowQuit]=useState(false);
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");

  function getRest(r){if(!r)return 60;const m=r.match(/(\d+)\s*min/),sec=r.match(/(\d+)\s*sec/);return m?parseInt(m[1])*60:sec?parseInt(sec[1]):60;}

  function completeSet(eI,sI){setPendingKey(`${eI}-${sI}`);setShowLogger(true);}

  function saveLog(data){
    const k=pendingKey;
    const newCompletedSets={...completedSets,[k]:true};
    setCompletedSets(newCompletedSets);
    setSetLogs(p=>({...p,[k]:data}));
    setShowLogger(false);
    const[eI]=k.split("-").map(Number);
    const ex=exercises[eI];
    if(data.weight>0&&data.reps>0){
      const{isNew}=savePB(ex.name,data.weight,data.reps);
      if(isNew){setShowPBCelebration({exName:ex.name,weight:data.weight,reps:data.reps});return;}
    }
    const totalSetsForEx=parseInt(ex.sets)||3;
    const doneCount=Array.from({length:totalSetsForEx},(_,i)=>newCompletedSets[`${eI}-${i}`]).filter(Boolean).length;
    if(doneCount<totalSetsForEx){setTimerSecs(getRest(ex.rest));setShowTimer(true);}
  }

  async function finishWorkout(){
    const dates=[...completedDates,new Date().toISOString()];
    localStorage.setItem("fb_workout_dates",JSON.stringify(dates));
    try{const{data:{user}}=await supabase.auth.getUser();if(user)await supabase.from("workout_history").insert({user_id:user.id,day_label:day.label||(customWorkout?.name||"Custom"),split:splitData.name,exercises:exercises.length,sets_completed:Object.keys(completedSets).length});}catch(e){}
    setMode("done");
  }

  // Duration picker modal
  const DurationPicker=()=>(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",zIndex:400,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"480px",background:"rgba(20,20,20,0.98)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px 24px 0 0",padding:"1.5rem 1.5rem 2.5rem"}}>
        <div style={{width:"40px",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.2)",margin:"0 auto 1.25rem"}}/>
        <div style={{fontSize:"1.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"1rem"}}>Change Duration</div>
        {[{k:30,l:"30 Minutes",d:"Quick session · 3 exercises"},{k:45,l:"45 Minutes",d:"Solid workout · 4 exercises"},{k:60,l:"60 Minutes",d:"Full session · 5 exercises"},{k:90,l:"90 Minutes",d:"Serious training · 6 exercises"},{k:120,l:"2 Hours",d:"Max volume · 8 exercises"}].map(o=>(
          <div key={o.k} onClick={()=>{setDuration(o.k);setExercises(buildExercises(day,o.k));setShowDurationPicker(false);setExIdx(0);setCompletedSets({});setSetLogs({});}} style={{display:"flex",alignItems:"center",gap:"1rem",padding:"0.85rem 1rem",marginBottom:"0.4rem",borderRadius:"12px",border:`1px solid ${duration===o.k?"rgba(204,255,0,0.4)":"rgba(255,255,255,0.08)"}`,background:duration===o.k?"rgba(204,255,0,0.08)":"rgba(255,255,255,0.03)",cursor:"pointer"}}>
            <div style={{flex:1}}>
              <div style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.92rem",color:C.white}}>{o.l}</div>
              <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>{o.d}</div>
            </div>
            {duration===o.k&&<div style={{width:"20px",height:"20px",borderRadius:"50%",background:C.lime,display:"flex",alignItems:"center",justifyContent:"center"}}><svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}
          </div>
        ))}
        <button onClick={()=>setShowDurationPicker(false)} style={{...s.btnGlass,width:"100%",marginTop:"0.5rem"}}>Cancel</button>
      </div>
    </div>
  );

  // Exercise visual card (liquid glass with animation + YouTube)
  function ExerciseVisual({ex}){
    const cue=EXERCISE_CUES[ex.name]||EXERCISE_CUES["default"];
    const muscleColors={chest:"rgba(239,68,68,0.3)",back:"rgba(59,130,246,0.3)",shoulders:"rgba(168,85,247,0.3)",biceps:"rgba(34,197,94,0.3)",triceps:"rgba(251,146,60,0.3)",quads:"rgba(236,72,153,0.3)",hamstrings:"rgba(20,184,166,0.3)",glutes:"rgba(251,191,36,0.3)",calves:"rgba(99,102,241,0.3)",core:"rgba(204,255,0,0.3)",hiit:"rgba(239,68,68,0.3)"};
    const mc=muscleColors[ex.muscle]||"rgba(204,255,0,0.3)";
    return(
      <div style={{background:`linear-gradient(135deg,${mc},rgba(255,255,255,0.03))`,border:"1px solid rgba(255,255,255,0.1)",borderRadius:"16px",padding:"1rem 1.1rem",marginBottom:"0.75rem",backdropFilter:"blur(15px)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
          <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif"}}>How to do it</div>
          <span style={{...s.tag,fontSize:"0.58rem"}}>{ex.muscle}</span>
        </div>
        {/* Animated illustration */}
        <ExerciseAnimation exName={ex.name} muscle={ex.muscle}/>
        <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.7)",fontFamily:"'Barlow',sans-serif",lineHeight:1.6,marginBottom:"0.75rem"}}>{cue}</div>
        <a href={`https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name+' exercise form tutorial')}`} target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(255,0,0,0.1)",border:"1px solid rgba(255,0,0,0.2)",borderRadius:"8px",padding:"0.5rem 0.75rem",textDecoration:"none"}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff4444"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          <span style={{fontSize:"0.75rem",fontWeight:800,color:"rgba(255,100,100,0.9)",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"0.06em"}}>Watch Demo on YouTube</span>
        </a>
      </div>
    );
  }

  if(mode==="overview"){
    return(
      <div style={s.content}>
        {showDurationPicker&&<DurationPicker/>}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
          <button onClick={onDone} style={s.btnSm}>← Back</button>
          <Eyebrow label={splitData.name}/>
        </div>

        {/* Duration badge */}
        <div style={{display:"flex",justifyContent:"center",marginBottom:"0.75rem"}}>
          <button onClick={()=>setShowDurationPicker(true)} style={{display:"flex",alignItems:"center",gap:"0.5rem",background:"rgba(204,255,0,0.08)",border:"1px solid rgba(204,255,0,0.25)",borderRadius:"20px",padding:"0.4rem 1rem",cursor:"pointer"}}>
            <span style={{fontSize:"0.85rem"}}>⏱️</span>
            <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.78rem",textTransform:"uppercase",letterSpacing:"0.08em",color:C.lime}}>{duration} min session</span>
            <span style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>tap to change</span>
          </button>
        </div>

        <div style={{...s.cardLime,position:"relative",overflow:"hidden",marginBottom:"1rem"}}>
          <div style={{position:"absolute",top:"-15px",right:"-15px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.1)",filter:"blur(15px)",pointerEvents:"none"}}/>
          <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.5rem",lineHeight:1}}>{day.label||day.name||"Custom Workout"}</div>
          <div style={{display:"flex",gap:"1.25rem",marginBottom:"0.75rem"}}>
            {[{n:exercises.length,l:"Exercises"},{n:exercises.reduce((a,e)=>a+parseInt(e.sets||3),0),l:"Sets"},{n:`${duration}m`,l:"Duration"}].map((x,i)=>(
              <div key={i}><div style={{fontSize:"1.6rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div><div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div></div>
            ))}
          </div>
          {day.muscles&&<div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",marginBottom:"1rem"}}>{[...new Set(day.muscles)].map(m=><span key={m} style={s.tag}>{m}</span>)}</div>}
          <button onClick={()=>setMode("exercise")} style={{...s.btn,width:"100%",padding:"0.9rem",borderRadius:"12px"}}>Start Workout →</button>
        </div>

        <WarmUpGenerator muscles={day.muscles||[]}/>

        <div style={s.label}>Exercise Plan</div>
        {exercises.map((ex,i)=>(
          <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
            <div style={{width:"30px",height:"30px",borderRadius:"8px",background:"rgba(204,255,0,0.1)",border:"1px solid rgba(204,255,0,0.18)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <span style={{fontWeight:900,fontSize:"0.82rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{i+1}</span>
            </div>
            <div style={{flex:1}}>
              <div style={{fontWeight:900,fontSize:"0.9rem",fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white}}>{ex.name}</div>
              <div style={{display:"flex",gap:"0.3rem",marginTop:"0.2rem"}}><span style={s.tag}>{ex.muscle}</span><span style={s.tagGray}>{ex.sets}×{ex.reps}</span><span style={s.tagGray}>{ex.rest}</span></div>
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

    const QUIT_QUOTES=["Champions don't quit when it gets hard.","The pain you feel today is the strength you'll feel tomorrow.","You didn't come this far to only come this far.","Every rep you skip is a rep your competition is doing.","The only workout you regret is the one you didn't finish.","Quitting is permanent. Rest is temporary.","Your future self is watching. Don't let them down.","Iron never lies. Push through.","The last few reps are where the real gains happen.","One more set. That's all. Then decide."];

    const QuitModal=({onConfirm,onStay})=>{
      const[qIdx,setQIdx]=useState(()=>Math.floor(Math.random()*QUIT_QUOTES.length));
      useEffect(()=>{const t=setInterval(()=>setQIdx(i=>(i+1)%QUIT_QUOTES.length),3000);return()=>clearInterval(t);},[]);
      return(
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",backdropFilter:"blur(20px)",zIndex:400,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"}}>
          <div style={{width:"100%",maxWidth:"360px",background:"rgba(255,255,255,0.07)",backdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"24px",padding:"2rem",textAlign:"center"}}>
            <div style={{fontSize:"2.5rem",marginBottom:"1rem"}}>💪</div>
            <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"1.4rem",color:C.white,marginBottom:"0.5rem",lineHeight:1}}>Are You Sure?</div>
            <div style={{fontSize:"0.75rem",fontWeight:800,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"1.25rem"}}>{exIdx+1} of {exercises.length} exercises · {Object.keys(completedSets).length} sets done</div>
            <div style={{background:"rgba(204,255,0,0.06)",border:"1px solid rgba(204,255,0,0.18)",borderRadius:"14px",padding:"1.1rem",marginBottom:"1.5rem",minHeight:"70px",display:"flex",alignItems:"center",justifyContent:"center"}}>
              <div style={{fontFamily:"'Barlow',sans-serif",fontSize:"0.92rem",color:"rgba(255,255,255,0.7)",lineHeight:1.55,fontStyle:"italic"}}>"{QUIT_QUOTES[qIdx]}"</div>
            </div>
            <button onClick={onStay} style={{...s.btn,width:"100%",padding:"1rem",fontSize:"0.95rem",borderRadius:"12px",marginBottom:"0.6rem"}}>Keep Going 🔥</button>
            <button onClick={onConfirm} style={{width:"100%",padding:"0.85rem",fontSize:"0.85rem",borderRadius:"12px",background:"rgba(255,60,60,0.1)",border:"1px solid rgba(255,60,60,0.25)",color:"rgba(255,100,100,0.8)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer"}}>Yes, Quit Workout</button>
          </div>
        </div>
      );
    };

    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",paddingBottom:"80px",position:"relative"}}>
        {showDurationPicker&&<DurationPicker/>}
        <div style={{position:"fixed",inset:0,background:"radial-gradient(ellipse 80% 55% at 15% 5%,rgba(204,255,0,0.09) 0%,transparent 55%)",pointerEvents:"none",zIndex:0}}/>
        {showLogger&&<SetLogger ex={ex} setNum={completedCount+1} onSave={saveLog}/>}
        {showPBCelebration&&<ConfettiCelebration exName={showPBCelebration.exName} weight={showPBCelebration.weight} reps={showPBCelebration.reps} onDone={()=>{const[eI]=pendingKey.split("-").map(Number);setShowPBCelebration(null);setTimerSecs(getRest(exercises[eI].rest));setShowTimer(true);}}/>}
        {showTimer&&<RestTimer seconds={timerSecs} onDone={()=>setShowTimer(false)}/>}
        {showQuit&&<QuitModal onConfirm={()=>{setShowQuit(false);onDone();}} onStay={()=>setShowQuit(false)}/>}

        <div style={{height:"3px",background:"rgba(255,255,255,0.07)",position:"sticky",top:0,zIndex:50}}>
          <div style={{height:"100%",background:C.lime,width:`${(exIdx/exercises.length)*100}%`,transition:"width 0.4s ease",boxShadow:"0 0 8px rgba(204,255,0,0.5)"}}/>
        </div>

        <div style={{padding:"1rem 1.25rem",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"}}>
            <button onClick={()=>setMode("overview")} style={s.btnSm}>← Overview</button>
            <div style={{display:"flex",alignItems:"center",gap:"0.5rem"}}>
              <button onClick={()=>setShowDurationPicker(true)} style={{...s.btnSm,background:"rgba(204,255,0,0.08)",borderColor:"rgba(204,255,0,0.2)",color:C.lime}}>⏱ {duration}m</button>
              <span style={{color:"rgba(255,255,255,0.35)",fontSize:"0.78rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,letterSpacing:"0.1em"}}>{exIdx+1}/{exercises.length}</span>
            </div>
            <button onClick={()=>setShowQuit(true)} style={{background:"rgba(255,60,60,0.1)",border:"1px solid rgba(255,60,60,0.25)",borderRadius:"8px",padding:"0.4rem 0.85rem",color:"rgba(255,100,100,0.9)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.75rem",cursor:"pointer",letterSpacing:"0.06em",textTransform:"uppercase"}}>Quit</button>
          </div>

          {/* Exercise card with liquid glass */}
          <div style={{position:"relative",borderRadius:"20px",padding:"2px",background:"linear-gradient(135deg,#CCFF00,#88ff00,#CCFF00,#aaee00)",backgroundSize:"300% 300%",animation:"gradSpin 3s ease infinite",marginBottom:"1rem",boxShadow:"0 0 24px rgba(204,255,0,0.12)"}}>
            <div style={{background:"rgba(8,8,8,0.97)",borderRadius:"18px",padding:"1.5rem",backdropFilter:"blur(20px)"}}>
              <Eyebrow label={ex.muscle}/>
              <div style={{fontSize:"1.9rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",lineHeight:1.05,marginBottom:"1rem",color:C.white}}>{ex.name}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.65rem",marginBottom:"1rem"}}>
                {[{l:"Sets",v:ex.sets},{l:"Reps",v:ex.reps},{l:"Rest",v:ex.rest}].map((x,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,0.05)",borderRadius:"10px",padding:"0.7rem",textAlign:"center",border:"1px solid rgba(255,255,255,0.07)"}}>
                    <div style={{fontSize:"1.1rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.v}</div>
                    <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.35)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.1em",marginTop:"3px",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
                  </div>
                ))}
              </div>
              <div style={{background:"rgba(204,255,0,0.05)",borderRadius:"10px",padding:"0.8rem",borderLeft:`3px solid ${C.lime}`,marginBottom:"0.75rem"}}>
                <div style={{fontSize:"0.6rem",color:C.lime,fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.25rem"}}>Coaching Cue</div>
                <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>{ex.cue}</div>
              </div>
            </div>
          </div>

          {/* Exercise visual + YouTube */}
          <ExerciseVisual ex={ex}/>

          {/* Set tracker */}
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
                {Array.from({length:completedCount},(_,i)=>{const lg=setLogs[`${exIdx}-${i}`];return(<div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.3rem 0"}}><div style={{width:"18px",height:"18px",borderRadius:"50%",background:C.lime,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="9" height="9" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div><span style={{fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",fontSize:"0.8rem",textTransform:"uppercase",color:C.lime}}>Set {i+1}</span>{lg?.weight?<span style={{marginLeft:"auto",color:"rgba(255,255,255,0.4)",fontSize:"0.75rem",fontFamily:"'Barlow Condensed',sans-serif"}}>{lg.weight}kg × {lg.reps}</span>:null}</div>);})}
              </div>
            )}
          </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.7rem",marginTop:"0.5rem"}}>
            <button onClick={()=>exIdx>0&&setExIdx(i=>i-1)} disabled={exIdx===0} style={{...s.btnGlass,opacity:exIdx===0?0.3:1,padding:"0.85rem"}}>← Prev</button>
            <button onClick={()=>{if(!allDone){alert(`Complete all ${totalSets} sets first!`);return;}if(isLast){finishWorkout();}else{setExIdx(i=>i+1);}}} style={{...s.btn,padding:"0.85rem",opacity:allDone?1:0.4,cursor:allDone?"pointer":"not-allowed"}}>{isLast?"Finish 🔥":"Next →"}</button>
          </div>
        </div>
      </div>
    );
  }

  if(mode==="done"){
    const setsCompleted=Object.keys(completedSets).length;
    const weight=parseFloat(JSON.parse(localStorage.getItem("fb_profile")||"{}").weight||80);
    const calsBurned=Math.round(setsCompleted*5*(weight/80));
    return(
      <div style={{...s.content,textAlign:"center",paddingTop:"2rem"}}>
        <div style={{fontSize:"4rem",marginBottom:"0.75rem"}}>🔥</div>
        <div style={{fontSize:"2.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",letterSpacing:"-0.02em",color:C.lime,marginBottom:"0.35rem",lineHeight:1}}>Workout Done!</div>
        <div style={{color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",fontSize:"0.9rem",marginBottom:"1.5rem"}}>Every rep counts. You just built a better body.</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.6rem",marginBottom:"0.65rem"}}>
          {[{n:exercises.length,l:"Exercises",icon:"🏋️"},{n:setsCompleted,l:"Sets Done",icon:"✅"},{n:`~${calsBurned}`,l:"Kcal Burned",icon:"🔥"},{n:`${duration}m`,l:"Duration",icon:"⏱️"}].map((x,i)=>(
            <div key={i} style={{...s.card,display:"flex",alignItems:"center",gap:"0.6rem",textAlign:"left",padding:"0.9rem",marginBottom:0}}>
              <span style={{fontSize:"1.3rem"}}>{x.icon}</span>
              <div><div style={{...s.statNum,fontSize:"1.5rem"}}>{x.n}</div><div style={s.statLabel}>{x.l}</div></div>
            </div>
          ))}
        </div>
        <div style={{background:"linear-gradient(135deg,rgba(251,146,60,0.12),rgba(239,68,68,0.06))",border:"1px solid rgba(251,146,60,0.25)",borderRadius:"18px",padding:"1.1rem",marginBottom:"0.65rem"}}>
          <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#fb923c",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.35rem"}}>🔥 Calories Burned</div>
          <div style={{fontSize:"2.5rem",fontWeight:900,color:"#fb923c",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1,marginBottom:"0.2rem"}}>{calsBurned} <span style={{fontSize:"1rem",color:"rgba(255,255,255,0.4)"}}>kcal</span></div>
          <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>Based on {setsCompleted} sets · {weight}kg bodyweight</div>
        </div>
        <WorkoutCalendar completedDates={JSON.parse(localStorage.getItem("fb_workout_dates")||"[]")}/>
        <ShareWorkoutCard workoutName={day?.label||customWorkout?.name||"Workout"} sets={setsCompleted} calories={calsBurned} duration={duration}/>
        <WorkoutNotes workoutKey={`${new Date().toISOString().split('T')[0]}_${day?.label||"custom"}`}/>
        <button onClick={onDone} style={{...s.btn,width:"100%",padding:"1rem",marginTop:"0.65rem",borderRadius:"14px"}}>Back to Training 💪</button>
      </div>
    );
  }
}


// ─── CUSTOM WORKOUT CREATOR ──────────────────────────────────────────────────
function CustomWorkoutCreator({onSave,onCancel}){
  const[name,setName]=useState("");
  const[selectedExercises,setSelectedExercises]=useState([]);
  const[search,setSearch]=useState("");
  const[customEx,setCustomEx]=useState("");
  const[muscle,setMuscle]=useState("chest");
  const ALL_MUSCLES=Object.keys(EXERCISES);
  const ALL_EX=Object.entries(EXERCISES).flatMap(([muscle,exs])=>exs.map(ex=>({...ex,muscle})));
  const filtered=search.length>1?ALL_EX.filter(e=>e.name.toLowerCase().includes(search.toLowerCase())):[];

  function addExercise(ex){
    if(selectedExercises.find(e=>e.name===ex.name))return;
    setSelectedExercises(prev=>[...prev,{...ex,customSets:"3",customReps:ex.reps,customRest:ex.rest||"90 sec"}]);
    setSearch("");
  }
  function addCustom(){
    if(!customEx.trim())return;
    addExercise({name:customEx.trim(),muscle,sets:"3",reps:"8-12",rest:"90 sec",cue:"Focus on form and full range of motion."});
    setCustomEx("");
  }
  function updateEx(i,field,val){setSelectedExercises(prev=>{const u=[...prev];u[i]={...u[i],[field]:val};return u;});}
  function removeEx(i){setSelectedExercises(prev=>prev.filter((_,j)=>j!==i));}

  function save(){
    if(!name||selectedExercises.length===0)return;
    const workout={id:Date.now(),name,exercises:selectedExercises.map(e=>({...e,sets:e.customSets||e.sets,reps:e.customReps||e.reps,rest:e.customRest||e.rest})),muscles:[...new Set(selectedExercises.map(e=>e.muscle))],label:name,createdAt:new Date().toISOString()};
    const saved=JSON.parse(localStorage.getItem("fb_custom_workouts")||"[]");
    saved.push(workout);
    localStorage.setItem("fb_custom_workouts",JSON.stringify(saved));
    onSave(workout);
  }

  return(
    <div style={s.content}>
      <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem"}}>
        <button onClick={onCancel} style={s.btnSm}>← Back</button>
        <Eyebrow label="Custom Workout"/>
      </div>
      <h2 style={s.sectionTitle}>Create Workout</h2>
      <div style={s.card}>
        <label style={s.label}>Workout name</label>
        <input style={s.input} placeholder="e.g. My Chest Day" value={name} onChange={e=>setName(e.target.value)}/>
      </div>

      {/* Search exercises */}
      <div style={s.card}>
        <label style={s.label}>Add exercises</label>
        <input style={{...s.input,marginBottom:"0.5rem"}} placeholder="Search exercises..." value={search} onChange={e=>setSearch(e.target.value)}/>
        {filtered.length>0&&(
          <div style={{background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"10px",overflow:"hidden",marginBottom:"0.5rem"}}>
            {filtered.slice(0,6).map((ex,i)=>(
              <div key={i} onClick={()=>addExercise(ex)} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.65rem 0.9rem",borderBottom:i<Math.min(filtered.length,6)-1?"1px solid rgba(255,255,255,0.06)":"none",cursor:"pointer"}}>
                <div>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.85rem",color:C.white}}>{ex.name}</div>
                  <div style={{color:"rgba(255,255,255,0.35)",fontSize:"0.7rem",fontFamily:"'Barlow',sans-serif"}}>{ex.muscle} · {ex.sets}×{ex.reps}</div>
                </div>
                <span style={{color:C.lime,fontSize:"1.2rem"}}>+</span>
              </div>
            ))}
          </div>
        )}

        {/* Add custom exercise */}
        <div style={{borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:"0.75rem"}}>
          <label style={s.label}>Add custom exercise</label>
          <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"}}>
            <input style={{...s.input,marginBottom:0,flex:1}} placeholder="Exercise name" value={customEx} onChange={e=>setCustomEx(e.target.value)}/>
            <select style={{...s.select,marginBottom:0,width:"120px"}} value={muscle} onChange={e=>setMuscle(e.target.value)}>
              {ALL_MUSCLES.map(m=><option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <button onClick={addCustom} disabled={!customEx.trim()} style={{...s.btnGlass,width:"100%",opacity:customEx.trim()?1:0.5}}>+ Add Custom Exercise</button>
        </div>
      </div>

      {/* Selected exercises */}
      {selectedExercises.length>0&&(
        <div style={s.card}>
          <label style={{...s.label,color:C.white,marginBottom:"0.75rem"}}>Your workout ({selectedExercises.length} exercises)</label>
          {selectedExercises.map((ex,i)=>(
            <div key={i} style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"0.85rem",marginBottom:"0.5rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
                <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white}}>{ex.name}</div>
                <button onClick={()=>removeEx(i)} style={{background:"transparent",border:"none",color:"rgba(255,100,100,0.6)",cursor:"pointer",fontSize:"1.1rem"}}>×</button>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.4rem"}}>
                {[{l:"Sets",k:"customSets",ph:"3"},{l:"Reps",k:"customReps",ph:"8-12"},{l:"Rest",k:"customRest",ph:"90 sec"}].map(f=>(
                  <div key={f.k}>
                    <label style={s.label}>{f.l}</label>
                    <input style={{...s.input,marginBottom:0,padding:"0.45rem 0.6rem",fontSize:"0.85rem"}} value={ex[f.k]||""} placeholder={f.ph} onChange={e=>updateEx(i,f.k,e.target.value)}/>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button onClick={save} disabled={!name||selectedExercises.length===0} style={{...s.btn,width:"100%",padding:"0.9rem",marginTop:"0.5rem",opacity:name&&selectedExercises.length>0?1:0.5}}>
            Save Workout 💪
          </button>
        </div>
      )}
    </div>
  );
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
      const res=await fetch("/api/chat",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          system:SYSTEM,
          messages:newMsgs.map(m=>({role:m.role==="assistant"?"assistant":"user",content:m.text}))
        })
      });
      if(!res.ok){
        const err=await res.json().catch(()=>({}));
        throw new Error(err.error||`Status ${res.status}`);
      }
      const data=await res.json();
      const reply=data.content?.[0]?.text;
      if(!reply)throw new Error("Empty response");
      setMessages(prev=>[...prev,{role:"assistant",text:reply}]);
    }catch(e){
      console.error("AI Coach error:",e);
      setMessages(prev=>[...prev,{role:"assistant",text:`Error: ${e.message}. Please try again.`}]);
    }
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
// ─── STREAK PROTECTION ───────────────────────────────────────────────────────
function StreakProtectionAlert({streak,onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const today=new Date().toDateString();
  const trainedToday=completedDates.some(c=>new Date(c).toDateString()===today);
  const dismissed=localStorage.getItem("fb_streak_dismissed")===today;
  const[show,setShow]=useState(!trainedToday&&streak>=3&&!dismissed);

  if(!show)return null;

  return(
    <div style={{position:"relative",background:"linear-gradient(135deg,rgba(251,146,60,0.12),rgba(239,68,68,0.06))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(251,146,60,0.3)",borderRadius:"20px",padding:"1.1rem 1.25rem",marginBottom:"0.75rem",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-20px",right:"-20px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(251,146,60,0.15)",filter:"blur(20px)",pointerEvents:"none"}}/>
      <button onClick={()=>{setShow(false);localStorage.setItem("fb_streak_dismissed",today);}} style={{position:"absolute",top:"0.75rem",right:"0.75rem",background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"50%",width:"24px",height:"24px",color:"rgba(255,255,255,0.5)",cursor:"pointer",fontSize:"0.8rem",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2}}>×</button>
      <div style={{display:"flex",alignItems:"center",gap:"0.85rem"}}>
        <div style={{width:"48px",height:"48px",borderRadius:"14px",background:"rgba(251,146,60,0.15)",border:"1px solid rgba(251,146,60,0.3)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.5rem"}}>🔥</div>
        <div style={{flex:1}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1rem",color:"#fb923c",letterSpacing:"0.02em",lineHeight:1,marginBottom:"0.25rem"}}>
            Don't lose your {streak}-day streak!
          </div>
          <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.4}}>Log a workout today to keep it alive. Even 10 minutes counts.</div>
        </div>
      </div>
      <button onClick={()=>{setShow(false);onNavigate("tab","train");}} style={{...s.btn,width:"100%",padding:"0.75rem",marginTop:"0.85rem",fontSize:"0.85rem",background:"rgba(251,146,60,0.2)",border:"1px solid rgba(251,146,60,0.4)",color:"#fb923c"}}>
        Start Quick Workout →
      </button>
    </div>
  );
}

// ─── WEEKLY SUMMARY ───────────────────────────────────────────────────────────
function WeeklyRecap({onNavigate}){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const runs=JSON.parse(localStorage.getItem("fb_runs")||"[]");
  const now=new Date();
  const dayOfWeek=now.getDay();
  const startOfWeek=new Date(now);startOfWeek.setDate(now.getDate()-dayOfWeek);startOfWeek.setHours(0,0,0,0);
  const endOfLastWeek=new Date(startOfWeek);endOfLastWeek.setDate(startOfWeek.getDate()-1);
  const startOfLastWeek=new Date(endOfLastWeek);startOfLastWeek.setDate(endOfLastWeek.getDate()-6);startOfLastWeek.setHours(0,0,0,0);
  const isSunday=dayOfWeek===0;

  const thisWeekWorkouts=completedDates.filter(d=>{const dt=new Date(d);return dt>=startOfWeek&&dt<=now;}).length;
  const lastWeekWorkouts=completedDates.filter(d=>{const dt=new Date(d);return dt>=startOfLastWeek&&dt<=endOfLastWeek;}).length;
  const thisWeekRuns=runs.filter(r=>{const dt=new Date(r.date);return dt>=startOfWeek&&dt<=now;});
  const thisWeekDist=thisWeekRuns.reduce((a,r)=>a+(r.distance||0),0);

  let streak=0;
  for(let i=0;i<30;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))streak++;else if(i>0)break;}

  const pbs=Object.values(getPBs());
  const recentPBs=pbs.filter(p=>(now-new Date(p.date))/(1000*60*60*24)<=7).length;

  const macroLogs=JSON.parse(localStorage.getItem("fb_macro_log")||"{}");
  const macroTarget=JSON.parse(localStorage.getItem("fb_macro_targets")||"{}");
  const thisWeekMacroDays=Object.keys(macroLogs).filter(d=>new Date(d)>=startOfWeek).length;

  if(!isSunday&&thisWeekWorkouts===0&&streak<3)return null;

  const getMessage=()=>{
    const count=isSunday?lastWeekWorkouts:thisWeekWorkouts;
    if(count>=5)return"Absolute beast mode this week. Your future self thanks you. 🔥";
    if(count>=3)return"Solid week. Consistency is how champions are built.";
    if(count>=1)return"You showed up. That's more than most. Keep going.";
    return"New week, fresh start. Let's make it count. 💪";
  };

  return(
    <div style={{background:"linear-gradient(135deg,rgba(204,255,0,0.09),rgba(150,220,0,0.04))",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-20px",right:"-20px",width:"90px",height:"90px",borderRadius:"50%",background:"rgba(204,255,0,0.07)",filter:"blur(20px)",pointerEvents:"none"}}/>
      <Eyebrow label={isSunday?"Weekly Recap 📋":"This Week So Far"}/>
      <div style={{fontSize:"1.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.85rem",lineHeight:1}}>
        {isSunday?`Week of ${startOfLastWeek.toLocaleDateString("en-AU",{month:"short",day:"numeric"})}`:`${now.toLocaleDateString("en-AU",{weekday:"long",month:"short",day:"numeric"})}`}
      </div>

      <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"0.5rem",marginBottom:"0.85rem"}}>
        {[
          {n:isSunday?lastWeekWorkouts:thisWeekWorkouts,l:"Workouts",icon:"🏋️",color:C.lime},
          {n:`${streak}`,l:"Day Streak 🔥",icon:"",color:"#fb923c"},
          {n:thisWeekDist>0?`${thisWeekDist.toFixed(1)}km`:"—",l:"Km Run",icon:"🏃",color:"#60a5fa"},
          {n:recentPBs>0?recentPBs:"—",l:"New PBs",icon:"🏆",color:"#fbbf24"},
        ].map((x,i)=>(
          <div key={i} style={{background:"rgba(0,0,0,0.3)",backdropFilter:"blur(10px)",borderRadius:"14px",padding:"0.85rem",border:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",gap:"0.6rem"}}>
            <div style={{flex:1}}>
              <div style={{fontSize:"1.6rem",fontWeight:900,color:x.color,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
              <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'Barlow Condensed',sans-serif",marginTop:"2px"}}>{x.l}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.55,marginBottom:"0.85rem",fontStyle:"italic"}}>"{getMessage()}"</div>

      {macroTarget.cal>0&&(
        <div style={{background:"rgba(0,0,0,0.2)",borderRadius:"12px",padding:"0.7rem 0.85rem",marginBottom:"0.85rem",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif"}}>🍽️ Nutrition tracked</span>
          <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.9rem",color:C.lime}}>{thisWeekMacroDays}/7 days</span>
        </div>
      )}

      <button onClick={()=>onNavigate("sidebar","history")} style={{...s.btnSm,width:"100%",padding:"0.6rem",textAlign:"center",background:"rgba(204,255,0,0.08)",borderColor:"rgba(204,255,0,0.2)",color:C.lime}}>View Full History →</button>
    </div>
  );
}

// ─── 12-WEEK TRANSFORMATION PROGRAMME ───────────────────────────────────────

// Exercises with media grouped by level and muscle group
const PROG_EXERCISES={
  beginner:{
    push:["Push-Up","Incline Dumbbell Press","Flat Dumbbell Press","Dumbbell Fly","Dips (chest lean)","Overhead Press","Dumbbell Lateral Raise","Close-Grip Push-Up"],
    pull:["Lat Pulldown","Seated Cable Row","Dumbbell Row","Face Pull","Barbell Curl","Hammer Curl","Cable Row"],
    legs:["Goblet Squat","Leg Press","Romanian Deadlift","Leg Extension","Leg Curl","Standing Calf Raise","Walking Lunge","Glute Bridge"],
    full:["Push-Up","Goblet Squat","Dumbbell Row","Romanian Deadlift","Plank","Glute Bridge","Walking Lunge"]
  },
  intermediate:{
    push:["Barbell Bench Press","Incline Barbell Press","Incline Dumbbell Press","Cable Chest Fly","Overhead Press","Dumbbell Lateral Raise","Skull Crusher","Tricep Pushdown"],
    pull:["Barbell Row","Pull-Up","Lat Pulldown","Seated Cable Row","Face Pull","Barbell Curl","Hammer Curl","Preacher Curl"],
    legs:["Barbell Back Squat","Romanian Deadlift","Leg Press","Leg Extension","Leg Curl","Hip Thrust","Standing Calf Raise","Bulgarian Split Squat"],
    full:["Barbell Bench Press","Barbell Back Squat","Barbell Row","Overhead Press","Romanian Deadlift","Pull-Up"]
  },
  advanced:{
    push:["Barbell Bench Press","Incline Barbell Press","Flat Dumbbell Press","Cable Chest Fly","Overhead Press","Cable Lateral Raise","Close-Grip Bench Press","Skull Crusher","Rope Pushdown"],
    pull:["Deadlift","Barbell Row","Pull-Up","Lat Pulldown","Seated Cable Row","Face Pull","Preacher Curl","Barbell Curl","Spider Curl"],
    legs:["Barbell Back Squat","Romanian Deadlift","Leg Press","Hip Thrust","Leg Extension","Leg Curl","Nordic Curl","Standing Calf Raise","Bulgarian Split Squat"],
    full:["Deadlift","Barbell Bench Press","Barbell Back Squat","Barbell Row","Overhead Press","Pull-Up"]
  }
};

const PROG_SETS={beginner:"3",intermediate:"4",advanced:"5"};
const PROG_REPS={
  beginner:{compound:"10-12",isolation:"12-15"},
  intermediate:{compound:"8-10",isolation:"10-12"},
  advanced:{compound:"6-8",isolation:"8-10"}
};

// Build a week's sessions from exercise lists
function buildSessions(days,level,goal,weekNum){
  const ex=PROG_EXERCISES[level]||PROG_EXERCISES.intermediate;
  const sets=PROG_SETS[level];
  // Increase sets in later phases
  const phaseBonus=weekNum<=4?0:weekNum<=8?1:2;
  const setsNum=Math.min(5,parseInt(sets)+phaseBonus);
  const reps=PROG_REPS[level];

  const SPLITS={
    3:[
      {label:"Push",exList:ex.push.slice(0,5)},
      {label:"Pull",exList:ex.pull.slice(0,5)},
      {label:"Legs",exList:ex.legs.slice(0,5)},
    ],
    4:[
      {label:"Push A",exList:ex.push.slice(0,5)},
      {label:"Pull A",exList:ex.pull.slice(0,5)},
      {label:"Legs",exList:ex.legs.slice(0,5)},
      {label:"Push B",exList:[...ex.push.slice(2,5),...ex.push.slice(5,7)]},
    ],
    5:[
      {label:"Chest",exList:ex.push.slice(0,5)},
      {label:"Back",exList:ex.pull.slice(0,5)},
      {label:"Shoulders",exList:[...ex.push.slice(5,9)]},
      {label:"Legs",exList:ex.legs.slice(0,5)},
      {label:"Arms",exList:[...ex.pull.slice(4,7),...ex.push.slice(6,9)]},
    ]
  };

  const split=SPLITS[days]||SPLITS[4];
  return split.slice(0,days).map((s,i)=>({
    day:`Day ${i+1}`,
    label:s.label,
    exercises:s.exList.filter(Boolean).slice(0,5).map(name=>({
      name,
      sets:String(setsNum),
      reps:["Push-Up","Pull-Up","Dips (chest lean)"].includes(name)?reps.isolation:reps.compound
    }))
  }));
}

// AI generates tips/mindset — we build the structure
function buildProgramme(config,aiData){
  const weeks=[];
  for(let w=1;w<=12;w++){
    const phase=w<=4?"Foundation":w<=8?"Build":"Peak";
    const aiWeek=aiData?.weeks?.[w-1]||{};
    weeks.push({
      week:w,phase,
      tip:aiWeek.tip||`Week ${w}: ${phase} focus. Push harder than last week.`,
      mindset:aiWeek.mindset||"Show up. Do the work. Trust the process.",
      sessions:buildSessions(config.days,config.level,config.goal,w)
    });
  }
  return{
    name:aiData?.name||`${config.goal==="muscle"?"Muscle Builder":config.goal==="fatloss"?"Fat Furnace":"Athletic Edge"}`,
    tagline:aiData?.tagline||"Your personalised 12-week transformation",
    weeks
  };
}

function ProgrammeSetup({onStart}){
  const[goal,setGoal]=useState("muscle");
  const[days,setDays]=useState(4);
  const[equipment,setEquipment]=useState("gym");
  const[level,setLevel]=useState("intermediate");
  const[generating,setGenerating]=useState(false);
  const[genStep,setGenStep]=useState(0);
  const[error,setError]=useState("");

  const GOALS=[
    {id:"muscle",icon:"💪",name:"Build Muscle",desc:"Add size and strength",color:"rgba(204,255,0,0.1)",accent:"#CCFF00"},
    {id:"fatloss",icon:"🔥",name:"Burn Fat",desc:"Lose fat, keep muscle",color:"rgba(239,68,68,0.1)",accent:"#f87171"},
    {id:"athletic",icon:"⚡",name:"Athletic Performance",desc:"Speed, power, conditioning",color:"rgba(59,130,246,0.1)",accent:"#60a5fa"},
  ];

  const GEN_STEPS=["Starting...","Building Foundation (weeks 1-4)...","Building Build Phase (weeks 5-8)...","Building Peak Phase (weeks 9-12)...","Finalising your programme..."];

  async function generate(){
    setGenerating(true);setError("");setGenStep(0);
    try{
      const cfg={goal,days,equipment,level};
      const goalLabel=goal==="muscle"?"Build Muscle":goal==="fatloss"?"Burn Fat":"Athletic Performance";
      const equipLabel=equipment==="gym"?"Full gym (barbells, cables, dumbbells, machines)":"Home (dumbbells and bodyweight only)";
      const levelDesc={
        beginner:"Beginner (0-1 years). Basic compound movements only. 3 sets. 10-12 reps. No Olympic lifts.",
        intermediate:"Intermediate (1-3 years). Compound and isolation. 4 sets. 8-10 reps. Moderate intensity.",
        advanced:"Advanced (3+ years). High intensity. 5 sets. 6-8 reps. Advanced techniques and tempos."
      }[level];
      const sys="You are an elite personal trainer. Return ONLY raw valid JSON starting with {. No markdown. No backticks. No text before or after the JSON.";

      // ─── PHASE 1: Foundation weeks 1-4 ───────────────────────────────
      setGenStep(1);
      const r1=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:sys,messages:[{role:"user",content:`Create weeks 1-4 (Foundation phase) for a ${goalLabel} programme.
${days} days/week, ${equipLabel}, ${levelDesc}

Return raw JSON: {"name":"...","tagline":"...","weeks":[{"week":1,"phase":"Foundation","theme":"4 word theme","tip":"specific coaching tip","mindset":"short quote","sessions":[{"day":"Day 1","label":"Push","focus":"chest triceps","exercises":[{"name":"Barbell Bench Press","sets":"3","reps":"10-12","rest":"90 sec","cue":"coaching cue"}]}]}]}

Rules: 4 weeks, ${days} sessions each, 4-5 exercises per session, Foundation = learn movements moderate volume, each week slightly harder, only ${equipLabel} exercises, ${levelDesc}`}]})});
      if(!r1.ok)throw new Error("Phase 1 failed");
      const d1=await r1.json();
      const t1=(d1.content?.[0]?.text||"").replace(/```json|```/gi,"").trim();
      const p1=JSON.parse(t1.slice(t1.indexOf("{"),t1.lastIndexOf("}")+1));
      if(!p1.weeks?.length)throw new Error("Phase 1 empty");
      setGenStep(2);

      // ─── PHASE 2: Build weeks 5-8 — sees phase 1 ─────────────────────
      const lastW1=p1.weeks[p1.weeks.length-1];
      const r2=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:sys,messages:[{role:"user",content:`Continue a ${goalLabel} programme with weeks 5-8 (Build phase).
${days} days/week, ${equipLabel}, ${levelDesc}

The user just finished Foundation. Their final week had:
${JSON.stringify(lastW1.sessions?.map(s=>({label:s.label,exercises:s.exercises?.map(e=>e.name+' '+e.sets+'x'+e.reps)})))}

Now create weeks 5-8. INCREASE volume and intensity. Rotate exercise variations. Progress from where they left off.

Return raw JSON: {"weeks":[{"week":5,"phase":"Build","theme":"...","tip":"...","mindset":"...","sessions":[{"day":"Day 1","label":"...","focus":"...","exercises":[{"name":"...","sets":"4","reps":"8-10","rest":"75 sec","cue":"..."}]}]}]}

Rules: exactly 4 weeks numbered 5-8, ${days} sessions each, more volume than phase 1, rotate exercises, only ${equipLabel}`}]})});
      if(!r2.ok)throw new Error("Phase 2 failed");
      const d2=await r2.json();
      const t2=(d2.content?.[0]?.text||"").replace(/```json|```/gi,"").trim();
      const p2=JSON.parse(t2.slice(t2.indexOf("{"),t2.lastIndexOf("}")+1));
      if(!p2.weeks?.length)throw new Error("Phase 2 empty");
      setGenStep(3);

      // ─── PHASE 3: Peak weeks 9-12 — sees phase 2 ─────────────────────
      const lastW2=p2.weeks[p2.weeks.length-1];
      const r3=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({system:sys,messages:[{role:"user",content:`Create weeks 9-12 (Peak phase) for a ${goalLabel} programme.
${days} days/week, ${equipLabel}, ${levelDesc}

The user just completed Build phase. Their last build week:
${JSON.stringify(lastW2.sessions?.map(s=>({label:s.label,exercises:s.exercises?.map(e=>e.name+' '+e.sets+'x'+e.reps)})))}

Create weeks 9-12. Maximum intensity. Week 11 = hardest week ever. Week 12 = slight taper/test week.

Return raw JSON: {"weeks":[{"week":9,"phase":"Peak","theme":"...","tip":"...","mindset":"...","sessions":[{"day":"Day 1","label":"...","focus":"...","exercises":[{"name":"...","sets":"5","reps":"6-8","rest":"60 sec","cue":"..."}]}]}]}

Rules: exactly 4 weeks numbered 9-12, ${days} sessions each, maximum intensity, peak in week 11, deload week 12, only ${equipLabel}`}]})});
      if(!r3.ok)throw new Error("Phase 3 failed");
      const d3=await r3.json();
      const t3=(d3.content?.[0]?.text||"").replace(/```json|```/gi,"").trim();
      const p3=JSON.parse(t3.slice(t3.indexOf("{"),t3.lastIndexOf("}")+1));
      if(!p3.weeks?.length)throw new Error("Phase 3 empty");
      setGenStep(4);

      // Merge all phases
      const allWeeks=[...p1.weeks,...p2.weeks,...p3.weeks];
      allWeeks.forEach((w,i)=>w.week=i+1);
      const programme={name:p1.name||goalLabel,tagline:p1.tagline||"Your personalised transformation",weeks:allWeeks};
      setGenStep(5);
      setTimeout(()=>onStart({...cfg,programme,generatedAt:new Date().toISOString()}),500);

    }catch(e){
      console.error("Generation error:",e);
      // Fallback to built programme
      const programme=buildProgramme({goal,days,equipment,level},null);
      onStart({goal,days,equipment,level,programme,generatedAt:new Date().toISOString()});
    }
    setGenerating(false);
  }

  if(generating){
    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 30%,rgba(204,255,0,0.07) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1,textAlign:"center",width:"100%",maxWidth:"380px"}}>
          <div style={{fontSize:"4rem",marginBottom:"1.5rem"}}>🤖</div>
          <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",marginBottom:"0.5rem",lineHeight:1}}>Building Your<br/><span style={{color:"#CCFF00"}}>Programme</span></div>
          <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"2.5rem",lineHeight:1.6}}>AI-personalised for your exact goal,<br/>level and schedule.</div>

          {/* Step progress */}
          <div style={{background:"rgba(255,255,255,0.05)",borderRadius:"16px",padding:"1.25rem",marginBottom:"1.5rem"}}>
            {GEN_STEPS.map((step,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",padding:"0.5rem 0",borderBottom:i<GEN_STEPS.length-1?"1px solid rgba(255,255,255,0.05)":"none"}}>
                <div style={{width:"20px",height:"20px",borderRadius:"50%",background:i<genStep?"rgba(204,255,0,0.2)":i===genStep?"rgba(204,255,0,0.1)":"rgba(255,255,255,0.06)",border:`1px solid ${i<genStep?"rgba(204,255,0,0.5)":i===genStep?"rgba(204,255,0,0.3)":"rgba(255,255,255,0.08)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"0.65rem"}}>
                  {i<genStep?"✓":i===genStep?"⟳":""}
                </div>
                <span style={{fontSize:"0.82rem",fontFamily:"'Barlow',sans-serif",color:i<genStep?"rgba(255,255,255,0.6)":i===genStep?"#fff":"rgba(255,255,255,0.2)",transition:"color 0.3s"}}>{step}</span>
              </div>
            ))}
          </div>
          <LoadingDots/>
        </div>
      </div>
    );
  }

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",padding:"1.5rem 1.25rem 3rem",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 40% at 50% 0%,rgba(204,255,0,0.07) 0%,transparent 60%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:"440px",margin:"0 auto",position:"relative",zIndex:1}}>
        <div style={{marginBottom:"2rem",textAlign:"center"}}>
          <div style={{fontSize:"0.68rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.5rem"}}>AI-Personalised For You</div>
          <div style={{fontSize:"2.8rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:0.9,marginBottom:"0.5rem"}}>12-WEEK<br/><span style={{color:"#CCFF00"}}>PROGRAMME</span></div>
          <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>Answer 4 questions. We build your exact plan.</div>
        </div>

        {/* Goal */}
        <div style={{marginBottom:"1.25rem"}}>
          <div style={{...s.label,marginBottom:"0.6rem",color:"rgba(255,255,255,0.6)"}}>What's your goal?</div>
          {GOALS.map(g=>(
            <div key={g.id} onClick={()=>setGoal(g.id)} style={{display:"flex",alignItems:"center",gap:"1rem",background:goal===g.id?g.color:"rgba(255,255,255,0.04)",backdropFilter:"blur(15px)",border:`2px solid ${goal===g.id?g.accent:"rgba(255,255,255,0.08)"}`,borderRadius:"18px",padding:"1rem 1.1rem",cursor:"pointer",marginBottom:"0.5rem",transition:"all 0.2s"}}>
              <div style={{width:"44px",height:"44px",borderRadius:"12px",background:g.color,border:`1px solid ${g.accent}40`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.3rem"}}>{g.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.95rem",color:"#fff"}}>{g.name}</div>
                <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif"}}>{g.desc}</div>
              </div>
              {goal===g.id&&<div style={{width:"22px",height:"22px",borderRadius:"50%",background:g.accent,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><svg width="10" height="10" viewBox="0 0 12 12"><polyline points="2,6 5,9 10,3" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>}
            </div>
          ))}
        </div>

        {/* Days */}
        <div style={{marginBottom:"1.25rem"}}>
          <div style={{...s.label,marginBottom:"0.6rem",color:"rgba(255,255,255,0.6)"}}>Days per week?</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.5rem"}}>
            {[{n:3,desc:"Focused"},{n:4,desc:"Optimal"},{n:5,desc:"Intense"}].map(d=>(
              <button key={d.n} onClick={()=>setDays(d.n)} style={{padding:"1rem 0.5rem",background:days===d.n?"rgba(204,255,0,0.1)":"rgba(255,255,255,0.04)",border:`2px solid ${days===d.n?"#CCFF00":"rgba(255,255,255,0.08)"}`,borderRadius:"14px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                <div style={{fontSize:"1.8rem",fontWeight:900,color:days===d.n?"#CCFF00":"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{d.n}</div>
                <div style={{fontSize:"0.65rem",color:days===d.n?"rgba(204,255,0,0.6)":"rgba(255,255,255,0.25)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",marginTop:"3px"}}>{d.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Equipment */}
        <div style={{marginBottom:"1.25rem"}}>
          <div style={{...s.label,marginBottom:"0.6rem",color:"rgba(255,255,255,0.6)"}}>Where do you train?</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
            {[{id:"gym",icon:"🏋️",label:"Gym",desc:"Full equipment"},{id:"home",icon:"🏠",label:"Home",desc:"Dumbbells & bodyweight"}].map(e=>(
              <button key={e.id} onClick={()=>setEquipment(e.id)} style={{padding:"1.1rem",background:equipment===e.id?"rgba(204,255,0,0.08)":"rgba(255,255,255,0.04)",border:`2px solid ${equipment===e.id?"#CCFF00":"rgba(255,255,255,0.08)"}`,borderRadius:"14px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                <div style={{fontSize:"1.8rem",marginBottom:"0.25rem"}}>{e.icon}</div>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.88rem",color:equipment===e.id?"#CCFF00":"rgba(255,255,255,0.5)"}}>{e.label}</div>
                <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif",marginTop:"2px"}}>{e.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Level */}
        <div style={{marginBottom:"1.5rem"}}>
          <div style={{...s.label,marginBottom:"0.6rem",color:"rgba(255,255,255,0.6)"}}>Experience level?</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.5rem"}}>
            {[{id:"beginner",icon:"🌱",label:"Beginner",desc:"0-1 years"},{id:"intermediate",icon:"💪",label:"Intermediate",desc:"1-3 years"},{id:"advanced",icon:"👑",label:"Advanced",desc:"3+ years"}].map(l=>(
              <button key={l.id} onClick={()=>setLevel(l.id)} style={{padding:"0.9rem 0.4rem",background:level===l.id?"rgba(204,255,0,0.08)":"rgba(255,255,255,0.04)",border:`2px solid ${level===l.id?"#CCFF00":"rgba(255,255,255,0.08)"}`,borderRadius:"14px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",backdropFilter:"blur(10px)"}}>
                <div style={{fontSize:"1.4rem",marginBottom:"0.2rem"}}>{l.icon}</div>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.68rem",color:level===l.id?"#CCFF00":"rgba(255,255,255,0.4)",letterSpacing:"0.04em"}}>{l.label}</div>
                <div style={{fontSize:"0.6rem",color:"rgba(255,255,255,0.2)",fontFamily:"'Barlow',sans-serif",marginTop:"2px"}}>{l.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {error&&<div style={{background:"rgba(255,60,60,0.08)",border:"1px solid rgba(255,60,60,0.2)",borderRadius:"10px",padding:"0.75rem 1rem",marginBottom:"0.75rem",fontSize:"0.82rem",color:"rgba(255,100,100,0.9)",fontFamily:"'Barlow',sans-serif"}}>{error}</div>}

        <button onClick={generate} style={{width:"100%",padding:"1.1rem",background:"#CCFF00",color:"#000",border:"none",borderRadius:"14px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",boxShadow:"0 0 40px rgba(204,255,0,0.2)",marginBottom:"0.75rem"}}>
          Generate My Programme →
        </button>
        <p style={{textAlign:"center",color:"rgba(255,255,255,0.2)",fontSize:"0.72rem",fontFamily:"'Barlow',sans-serif"}}>AI-personalised · Progressive overload built in · Takes ~10 seconds</p>
      </div>
    </div>
  );
}

function ProgrammeScreen({onStartWorkout}){
  const[config,setConfig]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_programme_config")||"null");}catch{return null;}});
  const[currentWeek,setCurrentWeek]=useState(()=>parseInt(localStorage.getItem("fb_programme_week")||"1"));
  const[currentDay,setCurrentDay]=useState(()=>parseInt(localStorage.getItem("fb_programme_day")||"0"));
  const[completedSessions,setCompletedSessions]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_programme_completed")||"[]");}catch{return[];}});
  const[showDay,setShowDay]=useState(null);
  const[showComplete,setShowComplete]=useState(false);

  function startProgramme(cfg){
    localStorage.setItem("fb_programme_config",JSON.stringify(cfg));
    localStorage.setItem("fb_programme_week","1");
    localStorage.setItem("fb_programme_day","0");
    setConfig(cfg);setCurrentWeek(1);setCurrentDay(0);
  }

  function markSessionDone(weekNum,dayIdx){
    const key=`w${weekNum}d${dayIdx}`;
    if(completedSessions.includes(key))return;
    const updated=[...completedSessions,key];
    setCompletedSessions(updated);
    localStorage.setItem("fb_programme_completed",JSON.stringify(updated));
    const prog=config?.programme;
    const weekData=prog?.weeks?.[weekNum-1];
    const totalSessions=weekData?.sessions?.length||config?.days||4;
    if(dayIdx<totalSessions-1){
      const next=dayIdx+1;setCurrentDay(next);
      localStorage.setItem("fb_programme_day",String(next));
    }else if(weekNum<12){
      const nextWk=weekNum+1;setCurrentWeek(nextWk);setCurrentDay(0);
      localStorage.setItem("fb_programme_week",String(nextWk));
      localStorage.setItem("fb_programme_day","0");
    }else{setShowComplete(true);}
    setShowDay(null);
  }

  function resetProgramme(){
    ["fb_programme_config","fb_programme_week","fb_programme_day","fb_programme_completed"].forEach(k=>localStorage.removeItem(k));
    setConfig(null);setCurrentWeek(1);setCurrentDay(0);setCompletedSessions([]);setShowComplete(false);
  }

  if(!config)return <ProgrammeSetup onStart={startProgramme}/>;

  const prog=config?.programme;
  const GOAL_STYLES={
    muscle:{accent:"#CCFF00",color:"rgba(204,255,0,0.1)",border:"rgba(204,255,0,0.25)"},
    fatloss:{accent:"#f87171",color:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.25)"},
    athletic:{accent:"#60a5fa",color:"rgba(59,130,246,0.1)",border:"rgba(59,130,246,0.25)"},
  };
  const GS=GOAL_STYLES[config?.goal]||GOAL_STYLES.muscle;
  const totalSessions=12*(config?.days||4);
  const completedCount=completedSessions.length;
  const progressPct=Math.round((completedCount/totalSessions)*100);
  const currentWeekData=prog?.weeks?.[currentWeek-1];
  const workouts=currentWeekData?.sessions||buildSessions(config?.days||4,config?.level||"intermediate",config?.goal||"muscle",currentWeek);
  const todayWorkout=workouts[currentDay];

  // Certificate
  if(showComplete){
    const profile=JSON.parse(localStorage.getItem("fb_profile")||"{}");
    const completedAt=new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"});
    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",position:"relative",textAlign:"center"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 50% 30%,rgba(204,255,0,0.1) 0%,transparent 60%)",pointerEvents:"none"}}/>
        <div style={{position:"relative",zIndex:1,width:"100%",maxWidth:"380px"}}>
          <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(30px)",border:"1px solid rgba(204,255,0,0.25)",borderRadius:"24px",padding:"2rem 1.5rem",marginBottom:"1.25rem",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:"-40px",left:"-40px",width:"140px",height:"140px",borderRadius:"50%",background:"rgba(204,255,0,0.06)",filter:"blur(30px)",pointerEvents:"none"}}/>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",textTransform:"uppercase",letterSpacing:"0.1em",color:"rgba(255,255,255,0.25)",marginBottom:"1.25rem"}}>FORGE<span style={{color:"#CCFF00"}}>/</span>BODY</div>
            <div style={{fontSize:"0.7rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"1rem"}}>Certificate of Completion</div>
            <div style={{fontSize:"4rem",marginBottom:"0.75rem"}}>🏆</div>
            <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.25rem"}}>This certifies that</div>
            <div style={{fontSize:"2.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:1,marginBottom:"0.25rem"}}>{profile.name||"Athlete"}</div>
            <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginBottom:"1rem"}}>has successfully completed</div>
            <div style={{background:GS.color,border:`1px solid ${GS.border}`,borderRadius:"12px",padding:"0.75rem",marginBottom:"1rem"}}>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1.1rem",color:"#fff"}}>{prog?.name||"12-Week Programme"}</div>
              <div style={{fontSize:"0.75rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif"}}>{config?.days*12} sessions · {config?.level} · {config?.equipment}</div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"0.5rem",marginBottom:"1rem"}}>
              {[{n:"12",l:"Weeks"},{n:config?.days*12,l:"Sessions"},{n:"100%",l:"Complete"}].map((x,i)=>(
                <div key={i} style={{background:"rgba(0,0,0,0.3)",borderRadius:"10px",padding:"0.6rem"}}>
                  <div style={{fontSize:"1.4rem",fontWeight:900,color:"#CCFF00",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
                  <div style={{fontSize:"0.58rem",color:"rgba(255,255,255,0.3)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
                </div>
              ))}
            </div>
            <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.2)",fontFamily:"'Barlow',sans-serif"}}>Completed {completedAt}</div>
          </div>
          <button onClick={async()=>{const text=`I just completed the ForgeBody 12-Week ${prog?.name||"Programme"}! 💪🏆
${config?.days*12} sessions. Zero excuses.
Start yours free → forgebody.fit`;try{if(navigator.share)await navigator.share({title:"ForgeBody Certificate",text});else await navigator.clipboard.writeText(text);}catch(e){}}} style={{width:"100%",padding:"0.9rem",background:"rgba(255,255,255,0.07)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer",color:"#fff",marginBottom:"0.5rem"}}>Share My Achievement 📤</button>
          <button onClick={resetProgramme} style={{width:"100%",padding:"1rem",background:"#CCFF00",color:"#000",border:"none",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.95rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer"}}>Start New Programme →</button>
        </div>
      </div>
    );
  }

  // Day detail view
  if(showDay!==null){
    const dayW=workouts[showDay];
    const sessionKey=`w${currentWeek}d${showDay}`;
    const isDone=completedSessions.includes(sessionKey);
    // Get exercise media if available
    const allExercises=Object.values(EXERCISES).flat();
    return(
      <div style={{minHeight:"100vh",background:"#0a0a0a",padding:"1.5rem 1.25rem 4rem",position:"relative"}}>
        <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 80% 40% at 15% 5%,${GS.color} 0%,transparent 55%)`,pointerEvents:"none"}}/>
        <div style={{maxWidth:"440px",margin:"0 auto",position:"relative",zIndex:1}}>
          <button onClick={()=>setShowDay(null)} style={{...s.btnSm,marginBottom:"1.25rem"}}>← Back</button>
          <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.35rem"}}>Week {currentWeek} · {currentWeekData?.phase||"Foundation"}</div>
          <div style={{fontSize:"2.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",marginBottom:"0.2rem",lineHeight:1}}>{dayW?.label}</div>
          <div style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"1.5rem"}}>{dayW?.exercises?.length} exercises · {config?.level}</div>

          {dayW?.exercises?.map((ex,i)=>{
            const matchEx=allExercises.find(e=>e.name===ex.name);
            return(
              <div key={i} style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(15px)",border:"1px solid rgba(255,255,255,0.09)",borderRadius:"18px",padding:"1rem 1.1rem",marginBottom:"0.6rem",display:"flex",alignItems:"center",gap:"0.9rem"}}>
                {matchEx?.gif?(
                  <div style={{width:"52px",height:"52px",borderRadius:"12px",overflow:"hidden",background:"rgba(255,255,255,0.06)",flexShrink:0}}>
                    <ExerciseGif exercise={matchEx} size={52}/>
                  </div>
                ):(
                  <div style={{width:"52px",height:"52px",borderRadius:"12px",background:`${GS.color}`,border:`1px solid ${GS.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",color:GS.accent}}>{i+1}</div>
                )}
                <div style={{flex:1}}>
                  <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.92rem",color:"#fff",marginBottom:"0.25rem"}}>{ex.name}</div>
                  <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
                    <span style={s.tag}>{ex.sets} sets</span>
                    <span style={s.tagGray}>{ex.reps} reps</span>
                  </div>
                </div>
              </div>
            );
          })}

          {!isDone?(
            <button onClick={()=>markSessionDone(currentWeek,showDay)} style={{width:"100%",padding:"1.1rem",background:GS.accent,color:GS.accent==="#CCFF00"?"#000":"#fff",border:"none",borderRadius:"14px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",boxShadow:`0 0 30px ${GS.accent}25`,marginTop:"1rem"}}>
              Mark Session Complete ✓
            </button>
          ):(
            <div style={{textAlign:"center",padding:"1rem",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.9rem",marginTop:"1rem"}}>✓ Session Complete</div>
          )}
        </div>
      </div>
    );
  }

  // Main programme view — FLAGSHIP
  const phase=currentWeekData?.phase||"Foundation";
  const weekTip=currentWeekData?.tip||"";
  const mindset=currentWeekData?.mindset||"";

  return(
    <div style={{minHeight:"100vh",background:"#0a0a0a",padding:"0 0 5rem",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:`radial-gradient(ellipse 100% 35% at 50% 0%,${GS.color} 0%,transparent 50%)`,pointerEvents:"none"}}/>

      <div style={{maxWidth:"440px",margin:"0 auto",padding:"1.5rem 1.25rem 0",position:"relative",zIndex:1}}>

        {/* Header */}
        <div style={{marginBottom:"1.25rem"}}>
          <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.4rem"}}>12-Week Transformation</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <div>
              <div style={{fontSize:"2.2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:0.95,letterSpacing:"-0.5px"}}>{prog?.name||"Your Programme"}</div>
              <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginTop:"4px"}}>{prog?.tagline||""}</div>
            </div>
            <button onClick={resetProgramme} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",padding:"0.35rem 0.65rem",color:"rgba(255,255,255,0.3)",cursor:"pointer",fontSize:"0.62rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",flexShrink:0}}>Reset</button>
          </div>
        </div>

        {/* Overall progress */}
        <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",border:`1px solid ${GS.border}`,borderRadius:"20px",padding:"1.1rem 1.25rem",marginBottom:"0.75rem"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"}}>
            <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif"}}>Overall Progress</div>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",color:GS.accent}}>{progressPct}%</div>
          </div>
          <div style={{height:"5px",background:"rgba(255,255,255,0.08)",borderRadius:"3px",overflow:"hidden",marginBottom:"8px"}}>
            <div style={{height:"100%",width:`${progressPct}%`,background:`linear-gradient(90deg,${GS.accent},${GS.accent}bb)`,borderRadius:"3px",transition:"width 0.6s ease",boxShadow:`0 0 8px ${GS.accent}50`}}/>
          </div>
          <div style={{display:"flex",justifyContent:"space-between"}}>
            <span style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{completedCount} of {totalSessions} sessions</span>
            <span style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif"}}>{totalSessions-completedCount} to go</span>
          </div>
        </div>

        {/* Phase + week */}
        <div style={{display:"flex",gap:"0.5rem",marginBottom:"0.75rem",alignItems:"stretch"}}>
          <div style={{background:GS.color,border:`1px solid ${GS.border}`,borderRadius:"14px",padding:"0.75rem 1rem",flex:1}}>
            <div style={{fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"3px"}}>{phase} Phase</div>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.2rem",textTransform:"uppercase",color:"#fff",lineHeight:1}}>Week {currentWeek}</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginTop:"3px"}}>of 12 weeks</div>
          </div>
          <div style={{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"0.75rem 1rem",flex:1}}>
            <div style={{fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"3px"}}>This Week</div>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.2rem",color:"#fff",lineHeight:1}}>{workouts.filter((_,i)=>completedSessions.includes(`w${currentWeek}d${i}`)).length}/{workouts.length}</div>
            <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginTop:"3px"}}>sessions done</div>
          </div>
        </div>

        {/* Today's session — hero */}
        <div style={{background:`linear-gradient(145deg,${GS.color},rgba(0,0,0,0.4))`,backdropFilter:"blur(20px)",border:`1px solid ${GS.border}`,borderRadius:"22px",padding:"1.3rem",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:"-25px",right:"-25px",width:"90px",height:"90px",borderRadius:"50%",background:GS.color,filter:"blur(20px)",pointerEvents:"none"}}/>
          <div style={{display:"flex",alignItems:"center",gap:"6px",marginBottom:"10px"}}>
            <div style={{width:"6px",height:"6px",borderRadius:"50%",background:GS.accent,boxShadow:`0 0 6px ${GS.accent}`}}/>
            <div style={{fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif"}}>Today's Session</div>
          </div>
          <div style={{fontSize:"2rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:1,marginBottom:"4px",letterSpacing:"-0.3px"}}>{todayWorkout?.label||"Rest Day"}</div>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",marginBottom:"1rem"}}>{todayWorkout?.exercises?.length||0} exercises · Week {currentWeek}, Session {currentDay+1}</div>
          <button onClick={()=>setShowDay(currentDay)} style={{width:"100%",padding:"0.95rem",background:GS.accent,color:GS.accent==="#CCFF00"?"#000":"#fff",border:"none",borderRadius:"12px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.92rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer",position:"relative",zIndex:1}}>
            {completedSessions.includes(`w${currentWeek}d${currentDay}`)?"View Next Session →":"Start Session →"}
          </button>
        </div>

        {/* Sessions this week */}
        <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"8px"}}>This Week's Sessions</div>
        {workouts.map((workout,i)=>{
          const sessionKey=`w${currentWeek}d${i}`;
          const isDone=completedSessions.includes(sessionKey);
          const isCurrent=i===currentDay&&!isDone;
          return(
            <div key={i} onClick={()=>setShowDay(i)} style={{display:"flex",alignItems:"center",gap:"0.75rem",background:isCurrent?`${GS.color}`:isDone?"rgba(255,255,255,0.03)":"rgba(255,255,255,0.04)",border:`1px solid ${isCurrent?GS.border:isDone?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.07)"}`,borderRadius:"14px",padding:"0.85rem 1rem",marginBottom:"0.4rem",cursor:"pointer",transition:"all 0.15s"}}>
              <div style={{width:"30px",height:"30px",borderRadius:"8px",background:isDone?`${GS.accent}20`:isCurrent?`${GS.accent}15`:"rgba(255,255,255,0.06)",border:`1px solid ${isDone?GS.accent:isCurrent?GS.accent+"50":"rgba(255,255,255,0.08)"}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                {isDone?<span style={{color:GS.accent,fontSize:"0.75rem",fontWeight:900}}>✓</span>:<span style={{color:isDone||isCurrent?GS.accent:"rgba(255,255,255,0.2)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.8rem"}}>{i+1}</span>}
              </div>
              <div style={{flex:1}}>
                <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.9rem",color:isDone?"rgba(255,255,255,0.35)":"#fff",textDecoration:isDone?"line-through":"none"}}>{workout.label}</div>
                <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.25)",fontFamily:"'Barlow',sans-serif"}}>{workout.exercises?.length} exercises</div>
              </div>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.62rem",textTransform:"uppercase",letterSpacing:"0.08em",color:isCurrent?GS.accent:isDone?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.1)"}}>{isCurrent?"TODAY →":isDone?"DONE":""}</div>
            </div>
          );
        })}

        {/* Week tip */}
        {weekTip&&(
          <div style={{background:"rgba(255,255,255,0.04)",backdropFilter:"blur(15px)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"18px",padding:"1rem 1.1rem",marginTop:"0.75rem"}}>
            <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"6px"}}>💡 Week {currentWeek} Focus</div>
            <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Barlow',sans-serif",lineHeight:1.65}}>{weekTip}</div>
          </div>
        )}

        {/* Mindset */}
        {mindset&&(
          <div style={{background:"rgba(168,85,247,0.06)",border:"1px solid rgba(168,85,247,0.18)",borderRadius:"18px",padding:"1rem 1.1rem",marginTop:"0.65rem"}}>
            <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"#c084fc",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"6px"}}>🧠 Mindset</div>
            <div style={{fontSize:"0.88rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.65,fontStyle:"italic"}}>"{mindset}"</div>
          </div>
        )}

        {/* 12-week grid */}
        <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.2)",fontFamily:"'Barlow Condensed',sans-serif",margin:"1rem 0 8px"}}>12-Week Overview</div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(12,1fr)",gap:"4px",marginBottom:"6px"}}>
          {Array.from({length:12},(_,i)=>{
            const wk=i+1;
            const wkDays=config?.days||4;
            const wkDone=Array.from({length:wkDays},(_,d)=>completedSessions.includes(`w${wk}d${d}`)).every(Boolean);
            const wkCurrent=wk===currentWeek;
            return(
              <div key={i} onClick={()=>{setCurrentWeek(wk);setCurrentDay(0);}} style={{aspectRatio:"1",borderRadius:"6px",background:wkDone?GS.accent:wkCurrent?`${GS.accent}20`:"rgba(255,255,255,0.06)",border:`1px solid ${wkCurrent?GS.accent:wkDone?"transparent":"rgba(255,255,255,0.06)"}`,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all 0.15s"}}>
                <span style={{fontSize:"0.55rem",fontWeight:900,color:wkDone?"#000":wkCurrent?GS.accent:"rgba(255,255,255,0.25)",fontFamily:"'Barlow Condensed',sans-serif"}}>{wk}</span>
              </div>
            );
          })}
        </div>
        <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.2)",fontFamily:"'Barlow',sans-serif",textAlign:"center",marginBottom:"0.5rem"}}>Tap any week to navigate</div>
      </div>
    </div>
  );
}

// Home screen hero card
function ProgrammeHomeCard({onNavigate}){
  const config=JSON.parse(localStorage.getItem("fb_programme_config")||"null");
  const currentWeek=parseInt(localStorage.getItem("fb_programme_week")||"1");
  const currentDay=parseInt(localStorage.getItem("fb_programme_day")||"0");
  const completedSessions=JSON.parse(localStorage.getItem("fb_programme_completed")||"[]");

  const GOAL_STYLES={
    muscle:{accent:"#CCFF00",color:"rgba(204,255,0,0.08)",border:"rgba(204,255,0,0.2)",icon:"💪"},
    fatloss:{accent:"#f87171",color:"rgba(239,68,68,0.08)",border:"rgba(239,68,68,0.2)",icon:"🔥"},
    athletic:{accent:"#60a5fa",color:"rgba(59,130,246,0.08)",border:"rgba(59,130,246,0.2)",icon:"⚡"},
  };

  if(!config){
    return(
      <div onClick={()=>onNavigate("sidebar","programme")} style={{background:"linear-gradient(135deg,rgba(204,255,0,0.08),rgba(0,0,0,0.3))",backdropFilter:"blur(20px)",border:"1px solid rgba(204,255,0,0.2)",borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem",cursor:"pointer",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-20px",right:"-20px",width:"80px",height:"80px",borderRadius:"50%",background:"rgba(204,255,0,0.06)",filter:"blur(20px)",pointerEvents:"none"}}/>
        <div style={{fontSize:"0.6rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"6px"}}>New Feature</div>
        <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1.4rem",color:"#fff",lineHeight:1,marginBottom:"6px"}}>12-Week<br/><span style={{color:"#CCFF00"}}>AI Programme</span></div>
        <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"1rem",lineHeight:1.5}}>Claude builds your personalised programme. 84 sessions. Progressive overload. Your goal.</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(204,255,0,0.08)",border:"1px solid rgba(204,255,0,0.15)",borderRadius:"10px",padding:"0.65rem 0.85rem"}}>
          <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"0.82rem",textTransform:"uppercase",letterSpacing:"0.06em",color:"#CCFF00"}}>Generate My Programme</span>
          <span style={{color:"#CCFF00",fontSize:"1.1rem"}}>→</span>
        </div>
      </div>
    );
  }

  const GS=GOAL_STYLES[config?.goal]||GOAL_STYLES.muscle;
  const prog=config?.programme;
  const totalSessions=12*(config?.days||4);
  const completedCount=completedSessions.length;
  const progressPct=Math.round((completedCount/totalSessions)*100);
  const currentWeekData=prog?.weeks?.[currentWeek-1];
  const workouts=currentWeekData?.sessions||buildSessions(config?.days||4,config?.level||"intermediate",config?.goal||"muscle",currentWeek);
  const todayWorkout=workouts[currentDay];
  const sessionDone=completedSessions.includes(`w${currentWeek}d${currentDay}`);

  return(
    <div onClick={()=>onNavigate("sidebar","programme")} style={{background:`linear-gradient(145deg,${GS.color},rgba(0,0,0,0.5))`,backdropFilter:"blur(20px)",border:`1px solid ${GS.border}`,borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem",cursor:"pointer",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-25px",right:"-25px",width:"90px",height:"90px",borderRadius:"50%",background:GS.color,filter:"blur(25px)",pointerEvents:"none"}}/>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.85rem",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontSize:"0.58rem",fontWeight:800,letterSpacing:"0.15em",textTransform:"uppercase",color:GS.accent,fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"3px"}}>12-Week Programme</div>
          <div style={{fontSize:"1.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",lineHeight:1}}>{GS.icon} {prog?.name||"Your Programme"}</div>
          <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif",marginTop:"3px"}}>Week {currentWeek} · {sessionDone?"Next up":"Today"}: {todayWorkout?.label}</div>
        </div>
        <div style={{background:`${GS.accent}18`,border:`1px solid ${GS.accent}35`,borderRadius:"10px",padding:"0.4rem 0.65rem",textAlign:"center",flexShrink:0}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.4rem",color:GS.accent,lineHeight:1}}>{progressPct}%</div>
          <div style={{fontSize:"0.55rem",color:"rgba(255,255,255,0.3)",fontWeight:800,textTransform:"uppercase",fontFamily:"'Barlow Condensed',sans-serif"}}>Done</div>
        </div>
      </div>

      <div style={{height:"4px",background:"rgba(255,255,255,0.07)",borderRadius:"2px",overflow:"hidden",marginBottom:"0.85rem",position:"relative",zIndex:1}}>
        <div style={{height:"100%",width:`${progressPct}%`,background:`linear-gradient(90deg,${GS.accent},${GS.accent}bb)`,borderRadius:"2px",transition:"width 0.5s ease",boxShadow:`0 0 6px ${GS.accent}50`}}/>
      </div>

      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,0,0,0.2)",borderRadius:"12px",padding:"0.7rem 0.9rem",position:"relative",zIndex:1}}>
        <div>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.85rem",color:"#fff"}}>{todayWorkout?.exercises?.length} exercises · {config?.level}</div>
          <div style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",marginTop:"1px"}}>Tap to open your programme</div>
        </div>
        <div style={{color:GS.accent,fontSize:"1.2rem",flexShrink:0}}>→</div>
      </div>
    </div>
  );
}

// ─── PROGRESSIVE OVERLOAD ENGINE ─────────────────────────────────────────────
function ProgressiveOverloadCard({onStartWorkout}){
  const pbs=getPBs();
  const settings=JSON.parse(localStorage.getItem("fb_workout_settings")||"{}");

  // Get the key lifts based on their split
  const KEY_LIFTS={
    ppl:["Barbell Bench Press","Barbell Row","Barbell Back Squat","Overhead Press","Romanian Deadlift"],
    upper_lower:["Barbell Bench Press","Barbell Row","Barbell Back Squat","Overhead Press","Deadlift"],
    muscle_group:["Barbell Bench Press","Deadlift","Barbell Back Squat","Overhead Press","Barbell Row"],
    full_body:["Barbell Back Squat","Deadlift","Overhead Press","Barbell Bench Press","Barbell Row"],
  };

  const lifts=KEY_LIFTS[settings.split||"ppl"];
  const suggestions=lifts.map(name=>{
    const pb=pbs[name];
    if(!pb)return null;
    const nextWeight=Math.ceil(pb.weight/2.5)*2.5+2.5; // next 2.5kg increment
    const daysSince=Math.round((Date.now()-new Date(pb.date))/(1000*60*60*24));
    return{name,currentWeight:pb.weight,currentReps:pb.reps,nextWeight,daysSince};
  }).filter(Boolean).slice(0,3);

  if(suggestions.length===0)return null;

  return(
    <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-15px",right:"-15px",width:"70px",height:"70px",borderRadius:"50%",background:"rgba(99,102,241,0.1)",filter:"blur(15px)",pointerEvents:"none"}}/>
      <Eyebrow label="Progressive Overload 📈"/>
      <div style={{fontSize:"1.1rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.25rem",lineHeight:1}}>Time to Level Up</div>
      <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"1rem"}}>Based on your recent personal bests</div>

      {suggestions.map((s_,i)=>(
        <div key={i} style={{background:"rgba(0,0,0,0.25)",borderRadius:"14px",padding:"0.85rem",marginBottom:"0.5rem",border:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:"0.85rem"}}>
          <div style={{width:"42px",height:"42px",borderRadius:"12px",background:"rgba(99,102,241,0.12)",border:"1px solid rgba(99,102,241,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"1.1rem"}}>💪</div>
          <div style={{flex:1}}>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.85rem",color:C.white,lineHeight:1,marginBottom:"0.25rem"}}>{s_.name}</div>
            <div style={{fontSize:"0.72rem",color:"rgba(255,255,255,0.35)",fontFamily:"'Barlow',sans-serif"}}>
              Last: {s_.currentWeight}kg × {s_.currentReps} reps · {s_.daysSince}d ago
            </div>
          </div>
          <div style={{textAlign:"right",flexShrink:0}}>
            <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1.1rem",color:C.lime,lineHeight:1}}>{s_.nextWeight}kg</div>
            <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>Try this</div>
          </div>
        </div>
      ))}

      <button onClick={()=>onStartWorkout()} style={{...s.btn,width:"100%",padding:"0.75rem",marginTop:"0.35rem",fontSize:"0.85rem"}}>
        Start Today's Workout →
      </button>
    </div>
  );
}

// ─── COACH CHECK-IN ───────────────────────────────────────────────────────────
function CoachCheckIn(){
  const storageKey="fb_checkin_"+new Date().toISOString().slice(0,7); // monthly
  const[done,setDone]=useState(()=>!!localStorage.getItem(storageKey));
  const[selected,setSelected]=useState(null);

  const OPTIONS=[
    {id:"great",icon:"🔥",label:"Crushing it",color:"rgba(204,255,0,0.15)",border:"rgba(204,255,0,0.4)",text:C.lime},
    {id:"good",icon:"💪",label:"Making progress",color:"rgba(59,130,246,0.12)",border:"rgba(59,130,246,0.3)",text:"#60a5fa"},
    {id:"okay",icon:"😐",label:"Getting there",color:"rgba(251,191,36,0.12)",border:"rgba(251,191,36,0.3)",text:"#fbbf24"},
    {id:"hard",icon:"😤",label:"Finding it tough",color:"rgba(239,68,68,0.1)",border:"rgba(239,68,68,0.25)",text:"#f87171"},
  ];

  if(done)return null;

  return(
    <div style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"20px",padding:"1.25rem",marginBottom:"0.75rem",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:"-15px",left:"-15px",width:"70px",height:"70px",borderRadius:"50%",background:"rgba(168,85,247,0.08)",filter:"blur(15px)",pointerEvents:"none"}}/>
      <Eyebrow label="Monthly Check-In"/>
      <div style={{fontSize:"1.1rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.25rem",lineHeight:1}}>How's your programme feeling?</div>
      <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginBottom:"1rem"}}>Your feedback helps us improve your plan.</div>

      {!selected?(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"}}>
          {OPTIONS.map(o=>(
            <button key={o.id} onClick={()=>setSelected(o)} style={{background:o.color,border:`1px solid ${o.border}`,borderRadius:"14px",padding:"0.85rem 0.5rem",cursor:"pointer",textAlign:"center",transition:"all 0.2s"}}>
              <div style={{fontSize:"1.5rem",marginBottom:"0.3rem"}}>{o.icon}</div>
              <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.78rem",textTransform:"uppercase",color:o.text}}>{o.label}</div>
            </button>
          ))}
        </div>
      ):(
        <div style={{textAlign:"center",padding:"0.75rem 0"}}>
          <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>{selected.icon}</div>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"1rem",color:C.white,marginBottom:"0.35rem"}}>Thanks for sharing!</div>
          <div style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",marginBottom:"0.85rem",lineHeight:1.5}}>
            {selected.id==="great"?"You're killing it. Keep the intensity up.":selected.id==="good"?"Progress takes time. You're doing exactly right.":selected.id==="okay"?"Check in with the AI coach — it can adjust your plan.":"Talk to the AI coach. It can make this easier for you."}
          </div>
          <button onClick={()=>{localStorage.setItem(storageKey,selected.id);setDone(true);}} style={{...s.btn,padding:"0.75rem 2rem",fontSize:"0.85rem"}}>Got it 💪</button>
        </div>
      )}
    </div>
  );
}

// ─── BADGES ──────────────────────────────────────────────────────────────────
function BadgesScreen(){
  const completedDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const pbs=Object.values(getPBs());
  const measurements=JSON.parse(localStorage.getItem("fb_measurements")||"[]");
  const photos=JSON.parse(localStorage.getItem("fb_progress_photos")||"[]");
  const meals=JSON.parse(localStorage.getItem("fb_meal_log")||"{}");
  const water=JSON.parse(localStorage.getItem("fb_water_log")||"{}");
  const runs=JSON.parse(localStorage.getItem("fb_runs")||"[]");
  const total=completedDates.length;
  const profile=JSON.parse(localStorage.getItem("fb_profile")||"{}");
  const totalRunDist=runs.reduce((a,r)=>a+(r.distance||0),0);

  let streak=0;
  for(let i=0;i<365;i++){const d=new Date();d.setDate(d.getDate()-i);if(completedDates.some(c=>new Date(c).toDateString()===d.toDateString()))streak++;else if(i>0)break;}

  const mealDays=Object.keys(meals).length;
  const waterDays=Object.keys(water).length;
  const hasWeight=profile.weight>0;

  const CATEGORIES=[
    {
      name:"💪 Workout Warrior",
      badges:[
        {id:"first",icon:"🌱",name:"First Rep",desc:"Complete your first workout",unlocked:total>=1,rarity:"common"},
        {id:"w3",icon:"🔥",name:"Warming Up",desc:"3 workouts done",unlocked:total>=3,rarity:"common"},
        {id:"w5",icon:"💪",name:"High Five",desc:"5 workouts done",unlocked:total>=5,rarity:"common"},
        {id:"w10",icon:"⚡",name:"10 Strong",desc:"10 workouts done",unlocked:total>=10,rarity:"rare"},
        {id:"w25",icon:"🎯",name:"Committed",desc:"25 workouts done",unlocked:total>=25,rarity:"rare"},
        {id:"w50",icon:"🏅",name:"Halfway Beast",desc:"50 workouts done",unlocked:total>=50,rarity:"epic"},
        {id:"w100",icon:"🏆",name:"Century Club",desc:"100 workouts done",unlocked:total>=100,rarity:"epic"},
        {id:"w250",icon:"👑",name:"Elite Athlete",desc:"250 workouts done",unlocked:total>=250,rarity:"legendary"},
        {id:"w500",icon:"💎",name:"Unstoppable",desc:"500 workouts done",unlocked:total>=500,rarity:"legendary"},
      ]
    },
    {
      name:"🔥 Streak Master",
      badges:[
        {id:"s3",icon:"🌡️",name:"Heating Up",desc:"3-day streak",unlocked:streak>=3,rarity:"common"},
        {id:"s7",icon:"🔥",name:"On Fire",desc:"7-day streak",unlocked:streak>=7,rarity:"common"},
        {id:"s14",icon:"🌊",name:"Two Week Beast",desc:"14-day streak",unlocked:streak>=14,rarity:"rare"},
        {id:"s21",icon:"⚡",name:"21 Day Habit",desc:"21-day streak",unlocked:streak>=21,rarity:"rare"},
        {id:"s30",icon:"🔱",name:"Iron Will",desc:"30-day streak",unlocked:streak>=30,rarity:"epic"},
        {id:"s60",icon:"🌟",name:"Diamond Mindset",desc:"60-day streak",unlocked:streak>=60,rarity:"epic"},
        {id:"s100",icon:"💎",name:"Legend",desc:"100-day streak",unlocked:streak>=100,rarity:"legendary"},
        {id:"s365",icon:"🌌",name:"One Full Year",desc:"365-day streak",unlocked:streak>=365,rarity:"legendary"},
      ]
    },
    {
      name:"🏋️ Strength Gains",
      badges:[
        {id:"pb1",icon:"🎯",name:"First PB",desc:"Set your first personal best",unlocked:pbs.length>=1,rarity:"common"},
        {id:"pb3",icon:"📈",name:"Trending Up",desc:"Set 3 personal bests",unlocked:pbs.length>=3,rarity:"common"},
        {id:"pb5",icon:"💪",name:"Strength Builder",desc:"Set 5 personal bests",unlocked:pbs.length>=5,rarity:"rare"},
        {id:"pb10",icon:"🔨",name:"Iron Forged",desc:"Set 10 personal bests",unlocked:pbs.length>=10,rarity:"rare"},
        {id:"pb20",icon:"👑",name:"Record Breaker",desc:"Set 20 personal bests",unlocked:pbs.length>=20,rarity:"epic"},
        {id:"pb50",icon:"🌟",name:"Strength Legend",desc:"Set 50 personal bests",unlocked:pbs.length>=50,rarity:"legendary"},
      ]
    },
    {
      name:"🍽️ Nutrition Champion",
      badges:[
        {id:"meal1",icon:"🥗",name:"First Meal Log",desc:"Log your first meal day",unlocked:mealDays>=1,rarity:"common"},
        {id:"meal7",icon:"🍱",name:"Meal Prep Master",desc:"Log meals for 7 days",unlocked:mealDays>=7,rarity:"rare"},
        {id:"meal30",icon:"👨‍🍳",name:"Nutrition Ninja",desc:"Log meals for 30 days",unlocked:mealDays>=30,rarity:"epic"},
        {id:"water1",icon:"💧",name:"Hydrated",desc:"Track water for first time",unlocked:waterDays>=1,rarity:"common"},
        {id:"water7",icon:"🌊",name:"Water World",desc:"Track water for 7 days",unlocked:waterDays>=7,rarity:"rare"},
        {id:"water30",icon:"🐋",name:"Deep Waters",desc:"Track water for 30 days",unlocked:waterDays>=30,rarity:"epic"},
      ]
    },
    {
      name:"📊 Progress Tracker",
      badges:[
        {id:"weight1",icon:"⚖️",name:"Weigh In",desc:"Log your first weight",unlocked:hasWeight,rarity:"common"},
        {id:"measure1",icon:"📏",name:"Body Check",desc:"Log first measurements",unlocked:measurements.length>=1,rarity:"common"},
        {id:"photo1",icon:"📸",name:"Before Shot",desc:"Take your first progress photo",unlocked:photos.length>=1,rarity:"common"},
        {id:"photo4",icon:"🎞️",name:"Monthly Tracker",desc:"4 progress photos taken",unlocked:photos.length>=4,rarity:"rare"},
        {id:"photo12",icon:"🎬",name:"Year in Review",desc:"12 progress photos taken",unlocked:photos.length>=12,rarity:"epic"},
        {id:"measure6",icon:"🔬",name:"Body Scientist",desc:"Log measurements 6 times",unlocked:measurements.length>=6,rarity:"epic"},
      ]
    },
    {
      name:"🏃 Road Runner",
      badges:[
        {id:"run1",icon:"👟",name:"First Run",desc:"Log your first run",unlocked:runs.length>=1,rarity:"common"},
        {id:"run5",icon:"🏃",name:"5 Runs Done",desc:"Log 5 runs",unlocked:runs.length>=5,rarity:"common"},
        {id:"run10",icon:"🌟",name:"10 Runs Strong",desc:"Log 10 runs",unlocked:runs.length>=10,rarity:"rare"},
        {id:"run25",icon:"⚡",name:"25 Runs",desc:"Log 25 runs",unlocked:runs.length>=25,rarity:"rare"},
        {id:"run50",icon:"🏅",name:"50 Runs",desc:"Log 50 runs",unlocked:runs.length>=50,rarity:"epic"},
        {id:"run100",icon:"🏆",name:"Century Runner",desc:"Log 100 runs",unlocked:runs.length>=100,rarity:"legendary"},
        {id:"dist10",icon:"🗺️",name:"10km Club",desc:"Run 10km total",unlocked:totalRunDist>=10,rarity:"common"},
        {id:"dist50",icon:"🌍",name:"50km Club",desc:"Run 50km total",unlocked:totalRunDist>=50,rarity:"rare"},
        {id:"dist100",icon:"💯",name:"100km Club",desc:"Run 100km total",unlocked:totalRunDist>=100,rarity:"epic"},
        {id:"dist500",icon:"🌏",name:"500km Legend",desc:"Run 500km total",unlocked:totalRunDist>=500,rarity:"legendary"},
        {id:"sub30",icon:"⏱️",name:"Sub-30 5km",desc:"Run 5km in under 30 min",unlocked:(()=>{const pb=JSON.parse(localStorage.getItem("fb_run_pbs")||"{}");return pb["dist_5"]&&pb["dist_5"]<6;})(),rarity:"epic"},
        {id:"sub25",icon:"🚀",name:"Sub-25 5km",desc:"Run 5km in under 25 min",unlocked:(()=>{const pb=JSON.parse(localStorage.getItem("fb_run_pbs")||"{}");return pb["dist_5"]&&pb["dist_5"]<5;})(),rarity:"legendary"},
        {id:"marathon",icon:"🏁",name:"Marathoner",desc:"Complete a marathon distance",unlocked:runs.some(r=>r.distance>=42),rarity:"legendary"},
        {id:"halfmarathon",icon:"🎖️",name:"Half Marathoner",desc:"Complete a half marathon",unlocked:runs.some(r=>r.distance>=21),rarity:"epic"},
      ]
    },
    {
      name:"🎖️ Special Achievements",
      badges:[
        {id:"earlybird",icon:"🌅",name:"Early Bird",desc:"Complete a workout before 7am",unlocked:completedDates.some(d=>new Date(d).getHours()<7),rarity:"rare"},
        {id:"nightowl",icon:"🦉",name:"Night Owl",desc:"Complete a workout after 9pm",unlocked:completedDates.some(d=>new Date(d).getHours()>=21),rarity:"rare"},
        {id:"weekend",icon:"🏖️",name:"No Days Off",desc:"Train on a weekend",unlocked:completedDates.some(d=>[0,6].includes(new Date(d).getDay())),rarity:"common"},
        {id:"comeback",icon:"🔄",name:"Comeback King",desc:"Return after missing 7+ days",unlocked:(()=>{for(let i=1;i<completedDates.length;i++){const gap=new Date(completedDates[i])-new Date(completedDates[i-1]);if(gap>7*86400000)return true;}return false;})(),rarity:"rare"},
        {id:"fullbody",icon:"🫀",name:"Full Body Day",desc:"Train every muscle group",unlocked:total>=10,rarity:"epic"},
        {id:"anniversary",icon:"🎂",name:"One Month In",desc:"Member for 30+ days",unlocked:(()=>{const joined=profile.created_at||localStorage.getItem("fb_joined");if(!joined)return false;return(Date.now()-new Date(joined))>30*86400000;})(),rarity:"epic"},
      ]
    },
  ];

  const allBadges=CATEGORIES.flatMap(c=>c.badges);
  const unlocked=allBadges.filter(b=>b.unlocked).length;
  const RARITY_COLORS={common:"rgba(255,255,255,0.15)",rare:"rgba(59,130,246,0.3)",epic:"rgba(168,85,247,0.3)",legendary:"rgba(251,191,36,0.3)"};
  const RARITY_TEXT={common:"rgba(255,255,255,0.4)",rare:"#60a5fa",epic:"#c084fc",legendary:"#fbbf24"};

  return(
    <div style={s.content}>
      <Eyebrow label="Achievements"/>
      <h2 style={s.sectionTitle}>Badges & Achievements</h2>
      <p style={s.sectionSub}>Level up your fitness game. Earn every badge.</p>

      {/* Overall progress */}
      <div style={{...s.card,background:"rgba(204,255,0,0.06)",borderColor:"rgba(204,255,0,0.2)",marginBottom:"0.75rem"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"}}>
          <div>
            <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>Total Progress</div>
            <div style={{fontSize:"2rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{unlocked}<span style={{fontSize:"1rem",color:"rgba(255,255,255,0.3)"}}>/{allBadges.length}</span></div>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{fontSize:"0.62rem",fontWeight:800,letterSpacing:"0.12em",textTransform:"uppercase",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow Condensed',sans-serif",marginBottom:"0.2rem"}}>Level</div>
            <div style={{fontSize:"1.1rem",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,color:C.white}}>
              {unlocked===0?"Rookie":unlocked<5?"Beginner":unlocked<10?"Athlete":unlocked<20?"Warrior":unlocked<30?"Champion":unlocked<40?"Legend":"God Mode 🔥"}
            </div>
          </div>
        </div>
        <div style={s.progressBar}><div style={{...s.progressFill,width:`${Math.round((unlocked/allBadges.length)*100)}%`}}/></div>
        <div style={{display:"flex",justifyContent:"space-between",marginTop:"0.4rem"}}>
          <div style={{fontSize:"0.7rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{allBadges.length-unlocked} badges remaining</div>
          <div style={{fontSize:"0.7rem",color:C.lime,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase"}}>{Math.round((unlocked/allBadges.length)*100)}%</div>
        </div>
      </div>

      {/* Rarity legend */}
      <div style={{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"}}>
        {Object.entries(RARITY_TEXT).map(([r,col])=>(
          <div key={r} style={{display:"flex",alignItems:"center",gap:"4px",background:"rgba(255,255,255,0.05)",borderRadius:"8px",padding:"3px 8px"}}>
            <div style={{width:"6px",height:"6px",borderRadius:"50%",background:col}}/>
            <span style={{fontSize:"0.62rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",color:col,fontFamily:"'Barlow Condensed',sans-serif"}}>{r}</span>
          </div>
        ))}
      </div>

      {/* Categories */}
      {CATEGORIES.map((cat,ci)=>(
        <div key={ci} style={{marginBottom:"1.25rem"}}>
          <div style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,textTransform:"uppercase",fontSize:"0.88rem",color:C.white,marginBottom:"0.5rem",letterSpacing:"0.04em"}}>{cat.name} <span style={{color:"rgba(255,255,255,0.3)",fontWeight:400}}>· {cat.badges.filter(b=>b.unlocked).length}/{cat.badges.length}</span></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.5rem"}}>
            {cat.badges.map((badge,i)=>(
              <div key={i} style={{background:badge.unlocked?RARITY_COLORS[badge.rarity]:"rgba(255,255,255,0.03)",border:`1px solid ${badge.unlocked?RARITY_TEXT[badge.rarity]+"60":"rgba(255,255,255,0.06)"}`,borderRadius:"14px",padding:"0.75rem 0.5rem",textAlign:"center",opacity:badge.unlocked?1:0.4,transition:"all 0.2s",position:"relative",overflow:"hidden"}}>
                {badge.unlocked&&<div style={{position:"absolute",top:"4px",right:"4px",width:"10px",height:"10px",borderRadius:"50%",background:RARITY_TEXT[badge.rarity],boxShadow:`0 0 6px ${RARITY_TEXT[badge.rarity]}`}}/>}
                <div style={{fontSize:"1.6rem",marginBottom:"0.3rem"}}>{badge.unlocked?badge.icon:"🔒"}</div>
                <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.68rem",color:badge.unlocked?C.white:"rgba(255,255,255,0.3)",lineHeight:1.2,marginBottom:"0.2rem"}}>{badge.name}</div>
                <div style={{fontSize:"0.62rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",lineHeight:1.3}}>{badge.desc}</div>
                {badge.unlocked&&<div style={{fontSize:"0.58rem",fontWeight:800,textTransform:"uppercase",color:RARITY_TEXT[badge.rarity],fontFamily:"'Barlow Condensed',sans-serif",marginTop:"0.3rem",letterSpacing:"0.06em"}}>{badge.rarity}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
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
        window.location.href="https://billing.stripe.com/p/login/8x2cN5eIl3jA2tF6lA0Jq00";
        setShow(false);
      }
    }catch(e){
      window.location.href="https://billing.stripe.com/p/login/8x2cN5eIl3jA2tF6lA0Jq00";
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
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",zIndex:500,display:"flex",alignItems:"flex-end",justifyContent:"center",padding:"0"}}>
          <div style={{width:"100%",maxWidth:"480px",maxHeight:"90vh",overflowY:"auto",borderRadius:"24px 24px 0 0",background:"rgba(20,20,20,0.98)",backdropFilter:"blur(30px)",WebkitBackdropFilter:"blur(30px)",border:"1px solid rgba(255,255,255,0.12)",borderBottom:"none",padding:"1.5rem 1.5rem 2rem"}}>

            {step==="retain"&&(
              <div style={{position:"relative"}}>
                <div style={{width:"40px",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.2)",margin:"0 auto 1.25rem"}}/>
                <div style={{position:"absolute",top:"-30px",right:"-15px",width:"100px",height:"100px",borderRadius:"50%",background:"rgba(204,255,0,0.06)",filter:"blur(20px)",pointerEvents:"none"}}/>

                <div style={{textAlign:"center",marginBottom:"1.25rem"}}>
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

                <button onClick={()=>setShow(false)} style={{...s.btn,width:"100%",padding:"0.9rem",marginBottom:"0.5rem"}}>
                  Keep My Subscription 🔥
                </button>
                <button onClick={()=>setStep("confirm")} style={{width:"100%",padding:"0.9rem",background:"transparent",border:"1px solid rgba(255,60,60,0.25)",borderRadius:"12px",color:"rgba(255,100,100,0.6)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer"}}>
                  I still want to cancel
                </button>
              </div>
            )}

            {step==="confirm"&&(
              <div>
                <div style={{width:"40px",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.2)",margin:"0 auto 1.25rem"}}/>
                <div style={{textAlign:"center",marginBottom:"1.25rem"}}>
                  <div style={{fontSize:"2.5rem",marginBottom:"0.5rem"}}>⚠️</div>
                  <div style={{fontSize:"1.4rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:C.white,marginBottom:"0.35rem",lineHeight:1}}>Are you sure?</div>
                  <div style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.45)",fontFamily:"'Barlow',sans-serif",lineHeight:1.5}}>You'll lose access to everything you've built.</div>
                </div>

                <div style={{background:"rgba(255,255,255,0.04)",borderRadius:"12px",padding:"1rem",marginBottom:"1.25rem"}}>
                  {["All your personal bests","Your workout history","Your progress photos","Your meal plans","AI coach access"].map((item,i)=>(
                    <div key={i} style={{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.3rem 0",borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none"}}>
                      <span style={{color:"rgba(255,60,60,0.7)",fontSize:"0.85rem"}}>✕</span>
                      <span style={{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif"}}>{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={()=>setStep("retain")} style={{...s.btn,width:"100%",padding:"0.9rem",marginBottom:"0.5rem"}}>
                  Keep My Subscription 🔥
                </button>
                <button onClick={handleCancel} style={{width:"100%",padding:"0.9rem",background:"transparent",border:"1px solid rgba(255,60,60,0.25)",borderRadius:"12px",color:"rgba(255,100,100,0.6)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,fontSize:"0.88rem",letterSpacing:"0.06em",textTransform:"uppercase",cursor:"pointer"}}>
                  Yes, Cancel My Subscription
                </button>
              </div>
            )}

            {step==="loading"&&(
              <div style={{textAlign:"center",padding:"2rem"}}>
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

// ─── FIRST TIME USER FLOW ────────────────────────────────────────────────────
function FirstTimeFlow({onDone}){
  const[step,setStep]=useState(0);
  const STEPS=[
    {icon:"🏋️",title:"Your Workout Plan",desc:"Go to the Train tab — your personalised workout is ready. Pick your split, start a session and log every set.",action:"Show me Training"},
    {icon:"🍽️",title:"Your Meal Plan",desc:"Go to the Nutrition tab — your daily meal plan is built around your goal and diet. Swap meals you don't like.",action:"Show me Nutrition"},
    {icon:"📊",title:"Track Your Macros",desc:"Log your food daily in the Macro Tracker. Hit your protein target every day and you WILL see results.",action:"Got it"},
    {icon:"🤖",title:"Meet Your AI Coach",desc:"Tap the AI Coach anytime — ask about your programme, nutrition, recovery or mindset. It knows your exact setup.",action:"Let's Go 🔥"},
  ];
  const step_=STEPS[step];
  return(
    <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.92)",backdropFilter:"blur(20px)",zIndex:600,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      <div style={{width:"100%",maxWidth:"480px",background:"rgba(18,18,18,0.99)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"28px 28px 0 0",padding:"2rem 1.75rem 3rem"}}>
        <div style={{display:"flex",gap:"6px",marginBottom:"1.5rem"}}>
          {STEPS.map((_,i)=><div key={i} style={{flex:1,height:"3px",borderRadius:"2px",background:i<=step?"#CCFF00":"rgba(255,255,255,0.1)",transition:"background 0.3s"}}/>)}
        </div>
        <div style={{textAlign:"center",marginBottom:"1.75rem"}}>
          <div style={{fontSize:"3.5rem",marginBottom:"1rem"}}>{step_.icon}</div>
          <div style={{fontSize:"1.6rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",color:"#fff",marginBottom:"0.5rem",lineHeight:1}}>{step_.title}</div>
          <div style={{fontSize:"0.95rem",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow',sans-serif",lineHeight:1.65}}>{step_.desc}</div>
        </div>
        <button onClick={()=>{if(step<STEPS.length-1){setStep(s=>s+1);}else{localStorage.setItem("fb_onboarded_flow","true");onDone();}}} style={{width:"100%",padding:"1rem",background:"#CCFF00",color:"#000",border:"none",borderRadius:"14px",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:900,fontSize:"1rem",letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",marginBottom:"0.75rem"}}>
          {step_.action} →
        </button>
        <button onClick={()=>{localStorage.setItem("fb_onboarded_flow","true");onDone();}} style={{width:"100%",padding:"0.75rem",background:"transparent",border:"none",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",fontSize:"0.85rem",cursor:"pointer"}}>
          Skip intro
        </button>
      </div>
    </div>
  );
}

// ─── MILESTONE CELEBRATIONS ───────────────────────────────────────────────────
function MilestoneAlert({milestone,onDone}){
  useEffect(()=>{const t=setTimeout(onDone,4000);return()=>clearTimeout(t);},[]);
  return(
    <div onClick={onDone} style={{position:"fixed",top:"1.5rem",left:"50%",transform:"translateX(-50%)",zIndex:600,width:"calc(100% - 2.5rem)",maxWidth:"400px",background:"linear-gradient(135deg,rgba(204,255,0,0.15),rgba(150,220,0,0.08))",backdropFilter:"blur(30px)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"20px",padding:"1.1rem 1.25rem",display:"flex",alignItems:"center",gap:"1rem",boxShadow:"0 8px 40px rgba(204,255,0,0.15)",animation:"slideDown 0.4s ease",cursor:"pointer"}}>
      <style>{`@keyframes slideDown{from{transform:translateX(-50%) translateY(-20px);opacity:0}to{transform:translateX(-50%) translateY(0);opacity:1}}`}</style>
      <div style={{fontSize:"2rem",flexShrink:0}}>{milestone.icon}</div>
      <div>
        <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.92rem",color:"#CCFF00",marginBottom:"0.2rem"}}>{milestone.title}</div>
        <div style={{fontSize:"0.8rem",color:"rgba(255,255,255,0.6)",fontFamily:"'Barlow',sans-serif"}}>{milestone.desc}</div>
      </div>
    </div>
  );
}

function useMilestones(){
  const[milestone,setMilestone]=useState(null);
  useEffect(()=>{
    const shown=JSON.parse(localStorage.getItem("fb_milestones_shown")||"[]");
    const dates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
    const workoutCount=dates.length;

    // Check streak broken — if had streak yesterday but not today
    const yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);
    const today=new Date().toDateString();
    const trainedToday=dates.some(d=>new Date(d).toDateString()===today);
    const trainedYesterday=dates.some(d=>new Date(d).toDateString()===yesterday.toDateString());
    const streakBrokenKey="streak_broken_"+today;
    if(!trainedToday&&trainedYesterday&&!shown.includes(streakBrokenKey)){
      // Check if had a streak of 3+
      let streak=0;
      for(let i=1;i<10;i++){const d=new Date();d.setDate(d.getDate()-i);if(dates.some(c=>new Date(c).toDateString()===d.toDateString()))streak++;else break;}
      if(streak>=3){
        localStorage.setItem("fb_milestones_shown",JSON.stringify([...shown,streakBrokenKey]));
        // Trigger streak broken email
        const user=JSON.parse(localStorage.getItem("fb_profile")||"{}");
        if(user.email){
          fetch("/api/email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"streak_broken",email:user.email,name:user.name||"Athlete"})}).catch(()=>{});
        }
      }
    }
    const MILESTONES=[
      {id:"first_workout",check:()=>workoutCount>=1,icon:"🎉",title:"First Workout Done!",desc:"You started. That's the hardest part."},
      {id:"three_workouts",check:()=>workoutCount>=3,icon:"🔥",title:"3 Workouts Complete!",desc:"Consistency is building. Keep going."},
      {id:"five_workouts",check:()=>workoutCount>=5,icon:"💪",title:"5 Workouts Strong!",desc:"You're in the top 20% of users already."},
      {id:"ten_workouts",check:()=>workoutCount>=10,icon:"🏆",title:"10 Workout Milestone!",desc:"Double digits. You're officially a habit."},
      {id:"twenty_workouts",check:()=>workoutCount>=20,icon:"👑",title:"20 Workouts!",desc:"This is who you are now. Unstoppable."},
    ];
    for(const m of MILESTONES){
      if(!shown.includes(m.id)&&m.check()){
        setMilestone(m);
        localStorage.setItem("fb_milestones_shown",JSON.stringify([...shown,m.id]));
        break;
      }
    }
  },[]);
  return{milestone,clearMilestone:()=>setMilestone(null)};
}

// ─── BODY TRANSFORMATION TIMELINE ────────────────────────────────────────────
function TransformationTimeline({user}){
  const[weights,setWeights]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_weight_entries")||"[]");}catch{return[];}});
  const[photos,setPhotos]=useState(()=>{try{return JSON.parse(localStorage.getItem("fb_progress_photos")||"[]");}catch{return[];}});
  const workoutDates=JSON.parse(localStorage.getItem("fb_workout_dates")||"[]");
  const pbs=getPBs();
  const pbCount=Object.keys(pbs).length;

  const startWeight=weights[0]?.weight;
  const currentWeight=weights[weights.length-1]?.weight;
  const weightChange=startWeight&&currentWeight?currentWeight-startWeight:null;

  return(
    <div style={{...s.content}}>
      <Eyebrow label="Your Journey"/>
      <h2 style={s.sectionTitle}>Transformation Timeline</h2>
      <p style={s.sectionSub}>Everything you've built since day one.</p>

      {/* Stats overview */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0.55rem",marginBottom:"0.75rem"}}>
        {[
          {n:workoutDates.length,l:"Workouts",icon:"🏋️"},
          {n:pbCount,l:"Personal Bests",icon:"🏆"},
          {n:photos.length,l:"Progress Photos",icon:"📸"},
        ].map((x,i)=>(
          <div key={i} style={{...s.card,textAlign:"center",padding:"0.9rem 0.5rem",marginBottom:0}}>
            <div style={{fontSize:"1.3rem",marginBottom:"0.25rem"}}>{x.icon}</div>
            <div style={{fontSize:"1.6rem",fontWeight:900,color:"#CCFF00",fontFamily:"'Barlow Condensed',sans-serif",lineHeight:1}}>{x.n}</div>
            <div style={{fontSize:"0.65rem",color:"rgba(255,255,255,0.4)",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.08em",fontFamily:"'Barlow Condensed',sans-serif"}}>{x.l}</div>
          </div>
        ))}
      </div>

      {/* Weight change */}
      {weightChange!==null&&(
        <div style={{...s.card,marginBottom:"0.75rem",textAlign:"center"}}>
          <Eyebrow label="Weight Change"/>
          <div style={{fontSize:"2.5rem",fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",color:weightChange<=0?"#CCFF00":"#f97316",lineHeight:1}}>
            {weightChange>0?"+":""}{weightChange.toFixed(1)}kg
          </div>
          <div style={{fontSize:"0.78rem",color:"rgba(255,255,255,0.4)",fontFamily:"'Barlow',sans-serif",marginTop:"0.25rem"}}>
            {startWeight}kg → {currentWeight}kg
          </div>
        </div>
      )}

      {/* Timeline */}
      <div style={s.card}>
        <Eyebrow label="Timeline"/>
        {workoutDates.length===0&&photos.length===0&&weights.length===0?(
          <div style={{textAlign:"center",padding:"1.5rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif",fontSize:"0.88rem"}}>
            Complete your first workout to start your timeline 💪
          </div>
        ):(
          <div style={{position:"relative",paddingLeft:"1.5rem"}}>
            <div style={{position:"absolute",left:"6px",top:0,bottom:0,width:"2px",background:"rgba(255,255,255,0.08)",borderRadius:"2px"}}/>
            {[
              ...workoutDates.map(d=>({type:"workout",date:d,icon:"🏋️",label:"Workout completed"})),
              ...photos.map(p=>({type:"photo",date:p.date,icon:"📸",label:"Progress photo taken"})),
              ...weights.map(w=>({type:"weight",date:w.date,icon:"⚖️",label:`Logged ${w.weight}kg`})),
            ].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,15).map((event,i)=>(
              <div key={i} style={{display:"flex",alignItems:"center",gap:"0.75rem",paddingBottom:"0.85rem",position:"relative"}}>
                <div style={{position:"absolute",left:"-1.5rem",width:"14px",height:"14px",borderRadius:"50%",background:"rgba(204,255,0,0.2)",border:"2px solid rgba(204,255,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.5rem",flexShrink:0}}/>
                <div style={{flex:1,background:"rgba(255,255,255,0.04)",borderRadius:"10px",padding:"0.6rem 0.75rem"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <span style={{fontSize:"0.85rem"}}>{event.icon} <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:800,textTransform:"uppercase",fontSize:"0.82rem",color:"rgba(255,255,255,0.8)"}}>{event.label}</span></span>
                    <span style={{fontSize:"0.68rem",color:"rgba(255,255,255,0.3)",fontFamily:"'Barlow',sans-serif"}}>{new Date(event.date).toLocaleDateString("en-AU",{day:"numeric",month:"short"})}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
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
            {label:"12-Week Programme",icon:"📋",id:"programme"},
            {label:"Personal Bests",icon:"🏆",id:"pbs"},
            {label:"Strength Charts",icon:"💹",id:"strength"},
            {label:"Run Tracker",icon:"🏃",id:"runs"},
            {label:"Workout History",icon:"🗓️",id:"history"},
            {label:"Custom Macro Targets",icon:"🎯",id:"macros"},
            {label:"Transformation Timeline",icon:"📈",id:"transformation"},
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
            <a href="https://wa.me/61493434408?text=Hi%20Joel%2C%20I%20need%20some%20help%20with%20ForgeBody%20please!" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"0.6rem",width:"100%",padding:"0.6rem 0",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.04em",textDecoration:"none",borderBottom:"1px solid rgba(255,255,255,0.06)"}}><span style={{fontSize:"1rem"}}>💬</span>Support (via WhatsApp)</a>
            <a href="https://wa.me/61493434408?text=Hi%20Joel!%20Here's%20my%20feedback%20on%20ForgeBody%3A%20" target="_blank" rel="noopener noreferrer" style={{display:"flex",alignItems:"center",gap:"0.6rem",width:"100%",padding:"0.6rem 0",color:"rgba(255,255,255,0.5)",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.04em",textDecoration:"none"}}><span style={{fontSize:"1rem"}}>💡</span>Send Feedback (via WhatsApp)</a>
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
  const[customWorkoutData,setCustomWorkoutData]=useState(null);
  const[showFirstTimeFlow,setShowFirstTimeFlow]=useState(false);
  function startWorkout(dayIdx,customW=null){setWorkoutDayIndex(dayIdx);setCustomWorkoutData(customW||null);setInWorkout(true);}
  const{milestone,clearMilestone}=useMilestones();
  const[installPrompt,setInstallPrompt]=useState(null);
  const[showInstallBanner,setShowInstallBanner]=useState(false);
  const[logoTaps,setLogoTaps]=useState(0);

  useEffect(()=>{
    // Track referral code on first visit
    const params=new URLSearchParams(window.location.search);
    const ref=params.get("ref");
    if(ref&&!localStorage.getItem("fb_ref_code")){
      localStorage.setItem("fb_ref_code",ref);
    }
    // Android/Chrome install prompt
    window.addEventListener('beforeinstallprompt',(e)=>{
      e.preventDefault();
      setInstallPrompt(e);
      setTimeout(()=>{
        if(!localStorage.getItem("fb_install_dismissed"))setShowInstallBanner(true);
      },15000);
    });
    // iOS Safari detection — show manual instructions
    const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
    const isSafari=/safari/i.test(navigator.userAgent)&&!/chrome/i.test(navigator.userAgent);
    const isStandalone=window.navigator.standalone===true;
    if(isIOS&&isSafari&&!isStandalone&&!localStorage.getItem("fb_install_dismissed")){
      setTimeout(()=>setShowInstallBanner(true),15000);
    }
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

  async function sendEmail(type,email,name){
    try{
      await fetch("/api/email",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({type,email,name})
      });
    }catch(e){console.error("Email failed:",e);}
  }

  async function saveSubscription(uid){
    const plan=localStorage.getItem("fb_pending_plan")||"monthly";
    const{error}=await supabase.from("profiles")
      .update({subscribed:true,plan,subscribed_at:new Date().toISOString()})
      .eq("user_id",uid);
    if(error){
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

      // Send welcome email once on first login
      if(!localStorage.getItem("fb_welcome_sent")){
        localStorage.setItem("fb_welcome_sent","true");
        sendEmail("welcome",user.email,data.name||"");
      }

      // Day 3 check-in
      if(data.subscribed_at&&!localStorage.getItem("fb_day3_sent")){
        const daysSince=Math.floor((Date.now()-new Date(data.subscribed_at))/(1000*60*60*24));
        if(daysSince>=3){
          localStorage.setItem("fb_day3_sent","true");
          sendEmail("day3",user.email,data.name||"");
        }
      }

      // Week 1 celebration
      if(data.subscribed_at&&!localStorage.getItem("fb_week1_sent")){
        const daysSince=Math.floor((Date.now()-new Date(data.subscribed_at))/(1000*60*60*24));
        if(daysSince>=7){
          localStorage.setItem("fb_week1_sent","true");
          sendEmail("week1",user.email,data.name||"");
        }
      }

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
    if(!session){
      return(
        <div style={{background:"#0a0a0a",minHeight:"100vh"}}>
          <style>{GLASS}</style>
          <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700;800;900&family=Barlow:wght@400;600;700&display=swap" rel="stylesheet"/>
          <PricingFirstAuth onSignedIn={()=>setPage("plans")} onBack={()=>setPage("landing")}/>
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
        <Onboarding user={session.user} onComplete={p=>{setProfile(p);setShowOnboarding(false);setShowSubscription(true);if(!localStorage.getItem("fb_onboarded_flow"))setShowFirstTimeFlow(true);}}/>
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

      {milestone&&<MilestoneAlert milestone={milestone} onDone={clearMilestone}/>}
      {showFirstTimeFlow&&<FirstTimeFlow onDone={()=>{setShowFirstTimeFlow(false);localStorage.setItem("fb_onboarded_flow","true");}}/>}

      {/* PWA install banner - works on iOS and Android */}
      {showInstallBanner&&(
        <div style={{position:"fixed",bottom:"80px",left:"1rem",right:"1rem",background:"rgba(10,10,10,0.97)",border:"1px solid rgba(204,255,0,0.3)",borderRadius:"16px",padding:"1rem",zIndex:300,backdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0,0,0,0.5)"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"}}>
            <div style={{display:"flex",alignItems:"center",gap:"0.6rem"}}>
              <div style={{width:"32px",height:"32px",borderRadius:"8px",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"}}>💪</div>
              <div style={{fontWeight:900,fontFamily:"'Barlow Condensed',sans-serif",textTransform:"uppercase",fontSize:"0.88rem",color:C.white}}>Add to Home Screen</div>
            </div>
            <button onClick={()=>{setShowInstallBanner(false);localStorage.setItem("fb_install_dismissed","true");}} style={{width:"28px",height:"28px",background:"rgba(255,255,255,0.1)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"50%",color:"rgba(255,255,255,0.7)",cursor:"pointer",fontSize:"0.9rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,lineHeight:1}}>✕</button>
          </div>
          {installPrompt?(
            <button onClick={async()=>{await installPrompt.prompt();setShowInstallBanner(false);}} style={{...s.btn,width:"100%",padding:"0.75rem",fontSize:"0.85rem",borderRadius:"10px"}}>
              Install App →
            </button>
          ):(
            <div>
              {[
                {n:"1",icon:"⬆️",text:"Tap the Share button in Safari"},
                {n:"2",icon:"➕",text:'Select "Add to Home Screen"'},
                {n:"3",icon:"✅",text:'Tap "Add" — done!'},
              ].map((step,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"0.65rem",padding:"0.35rem 0",borderTop:i>0?"1px solid rgba(255,255,255,0.05)":"none"}}>
                  <div style={{width:"20px",height:"20px",borderRadius:"50%",background:"rgba(204,255,0,0.12)",border:"1px solid rgba(204,255,0,0.25)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontSize:"0.65rem",fontWeight:900,color:C.lime,fontFamily:"'Barlow Condensed',sans-serif"}}>{step.n}</div>
                  <span style={{fontSize:"0.82rem",color:"rgba(255,255,255,0.55)",fontFamily:"'Barlow',sans-serif"}}>{step.icon} {step.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {inWorkout?(
        <WorkoutSession dayIndex={workoutDayIndex} customWorkout={customWorkoutData} onDone={()=>{setInWorkout(false);setCustomWorkoutData(null);setTab("train");}}/>
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

          {sidePanel?.screen==="programme"&&<ProgrammeScreen onStartWorkout={startWorkout}/>}
          {sidePanel?.screen==="pbs"&&<PBHistory/>}
          {sidePanel?.screen==="strength"&&<StrengthCharts/>}
          {sidePanel?.screen==="runs"&&<RunFeature/>}
          {sidePanel?.screen==="history"&&<WorkoutHistoryScreen user={session.user}/>}
          {sidePanel?.screen==="macros"&&<MacroSettings/>}
          {sidePanel?.screen==="restday"&&<RestDayContent/>}
          {sidePanel?.screen==="photos"&&<ProgressPhotos/>}
          {sidePanel?.screen==="schedule"&&<WorkoutSchedule/>}
          {sidePanel?.screen==="transformation"&&<TransformationTimeline user={session?.user}/>}
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
