/* ==========================================================================
   THE ARENA — Health, Nutrition & First Aid Study Guide (Module VI)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module VI.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.HEALTH = {
  intro: "Staying healthy \u2014 eating for sport, preventing injury and giving care. This guide covers sports nutrition and hydration, vitamins and minerals for the athlete, common injuries and their mechanisms, first aid (the emergency sequence, R.I.C.E., the kit, bandaging and CPR), fractures and splinting, environmental conditions, injury prevention, hygiene and lifestyle, posture and adolescent growth, rehabilitation and return to play, and health education \u2014 with an 18-question exam bank.",
  stats: [
    { value: "3", label: "macronutrients" },
    { value: "5", label: "rehabilitation phases" },
    { value: "4", label: "first-aid essentials (DRABC, R.I.C.E., kit, splinting)" },
    { value: "4", label: "environmental dangers (heat, cold, altitude)" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "nutrition",
    title: "1. Sports nutrition: macronutrients, hydration & match-day eating",
    body: `What and when an athlete eats fuels performance, recovery and health. The examiner wants the three macronutrients and how hydration is managed.

**The three macronutrients**

| Nutrient | Role | Sources |
|---|---|---|
| **Carbohydrate** | The primary fuel for exercise \u2014 stored as glycogen; powers the aerobic and anaerobic systems | Bread, rice, pasta, potatoes, fruit, sports drinks |
| **Protein** | Builds and repairs muscle tissue; supports recovery | Meat, fish, eggs, milk, pulses, nuts |
| **Fat** | Concentrated energy for endurance; carries fat-soluble vitamins | Oils, nuts, dairy, fatty fish |

**The balance for an athlete**: higher carbohydrate (roughly 50\u201360% of energy for most sports), moderate protein, moderate fat. Endurance and speed athletes load carbohydrate before the event.

**Carbohydrate (glycogen) loading** \u2014 in the days before an endurance event, the athlete increases carbohydrate so muscle glycogen is maximal. *Marathoners, cyclists.*

**Hydration**
- Water is lost through sweat; even 1\u20132% dehydration lowers performance.
- Drink before, during and after exercise; use **electrolyte** drinks for long or hot sessions to replace sodium lost in sweat.
- **Weigh before and after** \u2014 each kg of weight lost in a session \u2248 1 litre of fluid to replace.

**Match-day eating**
- **Pre-match (2\u20134 hours)**: a carbohydrate meal \u2014 not heavy or fatty.
- **During**: water or sports drink in breaks.
- **After**: carbohydrate + protein within 30\u201360 minutes to refuel and repair.

>>> exam
Balance the plate
Why is carbohydrate the most important fuel for a footballer? Answer: carbohydrate is stored as glycogen and is the primary fuel for the high-intensity running football demands; loading it before the match and replacing it after maintains energy and speed throughout the game and speeds recovery.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "vitamins-minerals",
    title: "2. Vitamins, minerals & the athlete's diet plan",
    body: `Micronutrients do not provide energy, but without them the energy systems fail. The examiner asks for the key vitamins and minerals and their food sources.

**Key vitamins**
- **Vitamin A** \u2014 eyesight, skin and immunity. *Sources*: carrots, green leaves, milk, liver.
- **Vitamin B complex** \u2014 releases energy from food; helps red blood cells. *Sources*: whole grains, pulses, eggs, meat.
- **Vitamin C** \u2014 immune function, wound healing, iron absorption. *Sources*: citrus fruit, amla, tomatoes, cabbage.
- **Vitamin D** \u2014 calcium absorption and bone strength. *Sources*: sunlight, milk, fish oil.
- **Vitamin E** \u2014 protects cells; fat-soluble. *Sources*: nuts, oils, green vegetables.
- **Vitamin K** \u2014 blood clotting. *Sources*: green leafy vegetables.

**Key minerals**
- **Calcium** \u2014 strong bones and teeth, muscle contraction; deficiency risks stress fractures. *Sources*: milk, curd, ragi, green leaves.
- **Iron** \u2014 carries oxygen in haemoglobin; deficiency causes anaemia and early fatigue (common in distance runners). *Sources*: liver, meat, spinach, jaggery.
- **Sodium and potassium (electrolytes)** \u2014 fluid balance, nerves and muscles \u2014 lost in sweat and replaced by electrolyte drinks and food.

**The athlete's diet plan**
- Base every meal on **cereal + pulse** (energy + repair) with vegetables/fruit and milk/curd daily.
- A typical plate: breakfast (porridge/bread + egg/milk + fruit), lunch (rice/roti + dal + vegetables), pre-training (banana or toast), post-training (milk + fruit), dinner (roti + dal + vegetables + curd).
- Keep fried snacks, sugary drinks and junk food occasional, not regular.
- **BMR (basal metabolic rate)** \u2014 the energy the body burns at rest; total daily need = BMR + activity. Athletes need more energy than sedentary people because of training load.

>>> exam
Pick the mineral
Which mineral prevents fatigue in a long-distance runner and why? Answer: iron \u2014 it forms part of haemoglobin which carries oxygen to the muscles; low iron causes anaemia, reduced oxygen delivery and early fatigue. Calcium and vitamin D matter for bone health against stress fractures.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "injuries",
    title: "3. Common sports injuries & their mechanism",
    body: `Exam questions ask you to name the injury, how it happens (mechanism), and the typical site.

**Soft-tissue injuries** (muscles, ligaments, tendons)
- **Strain** \u2014 overstretching or tearing of a **muscle or tendon** (hamstring, groin). Mechanism: explosive effort or overstretch.
- **Sprain** \u2014 stretching or tearing of a **ligament** (ankle inversion, knee). Mechanism: a twist or fall on the joint.
- **Contusion** \u2014 a bruise from a direct blow (impact to the thigh).

**Hard-tissue injuries** (bone)
- **Fracture** \u2014 a break; simple (closed) or compound (through the skin). Mechanism: high impact or fall.
- **Dislocation** \u2014 a bone forced out of joint (shoulder, finger). Mechanism: a strong twist or fall.

**Overuse injuries** (from repetitive load)
- **Tendonitis / tendinopathy** \u2014 inflamed tendon (achilles, patellar, tennis elbow).
- **Stress fracture** \u2014 a small bone crack from repeated loading (shin).
- **Shin splints** \u2014 pain along the tibia from running load.
- Mechanism: repeated, poorly loaded or poorly recovered training.

**Other concerns** \u2014 cramp, blisters, cuts, and head injuries. A blow to the head carries a risk of **concussion** \u2014 an injured player with confusion, dizziness or memory loss must be removed and assessed medically; \u201cclearing\u201d a player too soon is dangerous.

**The examiner also wants prevention**: warm-up, conditioning, correct equipment, technique coaching, and graduated training loads.

>>> exam
Classify the pair
Distinguish a strain from a sprain. Answer: a strain is an injury to a muscle or tendon (tear from overstretch or explosive effort); a sprain is an injury to a ligament (tear from a twist or fall on a joint). Both can be mild, moderate or severe \u2014 grade 1\u20133.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "first-aid",
    title: "4. First aid: the emergency sequence & R.I.C.E.",
    body: `First aid is the immediate care given to an injured athlete before professional help. The examiner wants the acronyms and the emergency sequence.

**The emergency sequence (DRABC or similar)**
1. **D \u2014 Danger**: keep the area and the rescuer safe.
2. **R \u2014 Response**: check if the athlete responds verbally or to touch.
3. **A \u2014 Airway**: clear and open the airway.
4. **B \u2014 Breathing**: check and maintain breathing; begin **CPR** (compressions + rescue breaths) if not breathing.
5. **C \u2014 Circulation**: control any severe bleeding (pressure dressing).
*(Many courses add an early S for Shout for help / call emergency services before the ABC steps.)*

**R.I.C.E. \u2014 for sprains, strains and soft-tissue injuries** \u2014 the exam favourite.
- **R \u2014 Rest**: stop using the injured part.
- **I \u2014 Ice**: apply cold (15\u201320 min, wrapped, every few hours in the first 48 h) to reduce swelling.
- **C \u2014 Compression**: wrap the area to limit swelling.
- **E \u2014 Elevation**: raise the limb above the heart to drain fluid.

**Immobilisation** \u2014 keeping an injured part still:
- Used for **fractures, dislocations and severe sprains** so the injury does not worsen.
- Methods: **splints, slings, bandages, and boards**; immobilise the joint above and below a fracture.
- Do **not** move a casualty with a suspected **spinal injury** except to keep them safe.

**When to call for help (red flags)**: severe pain or deformity, obvious fracture, head injury with confusion/loss of consciousness, breathing difficulty, severe bleeding that won't stop, or an athlete unable to bear weight.

>>> exam
Apply R.I.C.E.
A volleyer twists an ankle. Outline the immediate first aid. Answer: follow DRABC and call/refer if severe, then apply R.I.C.E. \u2014 rest the ankle, apply ice wrapped in a towel for 15\u201320 minutes, compress with a bandage, and elevate the leg; reassess and arrange medical review before return to play.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "first-aid-practice",
    title: "5. First aid in practice: the kit, bandaging & CPR",
    body: `Knowing the theory is half the exam \u2014 the examiner also wants the practical contents and how to use them.

**The first-aid kit \u2014 a school kit should hold:**
- Sterile gauze pads, adhesive bandages of several sizes, and a roller bandage.
- Antiseptic solution or wipes and cotton for cleaning wounds.
- Elastic/compression bandage and a triangular bandage (for slings).
- Scissors, tweezers, adhesive tape, and disposable gloves.
- Instant ice pack / cold spray, antiseptic cream, burn dressing.
- Safety pins, a pocket mask or face shield for CPR, and a first-aid manual.
*(Note: medicines beyond simple antiseptics are given only by trained staff; a kit is restocked and checked regularly.)*

**Bandaging**
- **Roller bandage** \u2014 spiral turns up a limb, anchoring at the narrow end; supports simple coverings.
- **Figure-of-eight** \u2014 crosses over a joint (ankle, elbow, knee) to hold padding and limit movement.
- **Triangular bandage** \u2014 folded into a broad band for slings, or for a head or foot covering.
- Bandages should be firm enough to support but not so tight they cut circulation \u2014 check colour and feeling of the fingers/toes beyond the bandage.

**CPR \u2014 the practical sequence (adult)**
1. Ensure safety; check response and breathing; shout for help.
2. Push hard and fast on the centre of the chest \u2014 **5\u20136 cm deep at 100\u2013120 compressions per minute**, allowing the chest to fully recoil.
3. Alternate **30 compressions : 2 rescue breaths** (with head-tilt, chin-lift and a clean shield).
4. Continue until help arrives, the person responds, or you cannot continue.

>>> exam
Assemble the kit
List six items that belong in a school first-aid kit. Answer: sterile gauze and adhesive bandages; a roller and a triangular bandage; antiseptic wipes or solution and cotton; scissors, tweezers and adhesive tape; an elastic bandage and instant ice pack; disposable gloves and a CPR face mask.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "fractures",
    title: "6. Fractures, dislocations & emergency splinting",
    body: `Bone and joint injuries need recognition and safe handling \u2014 done badly, the first aid makes the injury worse.

**Fractures \u2014 a break in a bone. Classified by:**
- **Skin**: simple (closed, skin intact) vs compound (bone through skin \u2014 at high risk of infection).
- **Line**: transverse, oblique, spiral, greenstick (an incomplete break common in children) and comminuted (more than two pieces).
- **Cause**: traumatic (impact/fall) or stress (repeated load).

**Signs of a fracture**: severe local pain and tenderness, swelling and bruising, deformity or unnatural position, inability to use the limb, grating sensation, and pain on moving or pressing along the bone.

**First aid for a fracture**
- Do **not** try to straighten or push the bone back.
- Control any bleeding around an open fracture with a clean pressure dressing.
- **Splint the limb in the position found**, immobilising the joints above and below the break (a splint, board, newspaper or the unaffected limb can be used).
- Support with a **sling** for arm fractures; keep the casualty still, warm and calm.
- Arrange medical removal \u2014 do not move a casualty with a suspected neck or back injury.

**Dislocation \u2014 a bone forced out of joint.**
- Signs: visible deformity, severe pain, loss of movement, swelling, the joint \u201clooks wrong\u201d.
- First aid: **support the joint in the position found, do not pull or reduce it**, apply ice over a cloth, and refer for medical reduction. Untrained reduction can damage nerves and blood vessels.

>>> exam
Handle the break
What is the first aid for a suspected forearm fracture? Answer: do not straighten it; control any bleeding; immobilise the limb in the position found with a splint covering the joints above and below the break; support the arm in a sling; keep the casualty warm and calm; and arrange medical transport without moving a suspected spine injury.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "environment",
    title: "7. Environmental conditions: heat, cold & acclimatisation",
    body: `The weather can hurt athletes as much as an opponent can. The examiner tests recognition and treatment.

**Heat problems \u2014 from worse to worst:**
- **Dehydration / heat cramps** \u2014 painful muscle spasms from fluid and salt loss; treat with rest in the shade, fluids and gentle stretching.
- **Heat exhaustion** \u2014 heavy sweating, weakness, dizziness, nausea, fast pulse and cool clammy skin; treat by rest in a cool place, fluids, cooling (fan, cold cloths) \u2014 most recover quickly.
- **Heat stroke** \u2014 the **emergency**: body temperature above 40\u00B0C, hot dry skin, confusion, seizures or unconsciousness, breathing fast. **Cool immediately** (ice packs at neck/armpits/groin, cold water, shade) and call for emergency help \u2014 delays can be fatal.

**Cold problems:**
- **Frostbite** \u2014 ice crystals freeze fingers, toes, ears; pain then numbness, pale waxy skin. Warm gently with body heat or warm (not hot) water; never rub; protect the part.
- **Hypothermia** \u2014 body core cools: shivering, then confusion, slurred speech, slow breathing, loss of coordination. Move to shelter, remove wet clothing, warm gradually (blankets, warm sweet drinks if conscious), call for help.

**Acclimatisation** \u2014 allowing the body time to adapt to heat, cold or altitude before full effort:
- Heat: build up exercise in heat over 10\u201314 days, and replace fluids before and after.
- Altitude: arrive early and train lightly at first; the body makes more red blood cells to carry oxygen.

**Reducing risk**: schedule heavy work in the coolest hours, watch the weather, keep fluid available, and stop exercise if warning signs appear.

>>> exam
Spot the emergency
How do you distinguish heat exhaustion from heat stroke? Answer: heat exhaustion \u2014 heavy sweating, weakness and clammy cool skin, treated by rest, shade and fluids; heat stroke \u2014 very high body temperature, hot dry skin, confusion or unconsciousness \u2014 a life-threatening emergency needing immediate cooling and urgent medical help.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "prevention",
    title: "8. Injury prevention: warm-up, taping & conditioning",
    body: `Prevention beats treatment. The examiner lists the precautions and expects sport-specific examples.

**The prevention checklist**
- **Warm-up and cool-down** \u2014 prepare muscles and joints before effort; ease down after.
- **Conditioning** \u2014 strength, flexibility and endurance matched to the sport reduce injury risk (weak muscles tear; tight muscles strain).
- **Correct technique** \u2014 poor technique loads joints wrongly (bad landing in netball, poor bowling action).
- **Appropriate equipment and footwear** \u2014 the right shoes for the surface, protective gear fitted correctly.
- **Taping and bracing** \u2014 support vulnerable joints (ankles, knees, thumbs) with tape or a brace, especially for previous injuries.
- **Progressive training** \u2014 increase load gradually (10% rule), rest and recover, and never train through pain.
- **Surface and environment** \u2014 safe, even grounds; avoid extremes of heat (hydration) and cold.
- **Rules and fair play** \u2014 enforcing safe play protects everyone.

**Taping in practice**: ankles are the most taped joint \u2014 a support wrap restricts excessive inversion without removing normal movement. Taping is an aid, not a substitute for strength and warm-up.

**Coaching duties**: supervise warm-ups, correct technique early, check equipment and ground before play, and never let an injured athlete continue or train through pain.

>>> exam
List the precautions
Give four injury-prevention measures. Answer: a proper warm-up and cool-down; conditioning matched to the sport; correct technique coaching; appropriate fitted equipment and footwear. Add taping for vulnerable joints and progressive training loads.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "lifestyle",
    title: "9. Personal hygiene, lifestyle diseases & wellness",
    body: `Health is not just the absence of injury \u2014 it is the positive state the syllabus calls **wellness**, built on daily habits.

**Personal hygiene in sport**
- **Shower after exercise** and change into clean clothing to prevent skin infections and body odour.
- **Foot care** \u2014 clean, dry feet, fresh socks; prevent athlete's foot and blisters.
- **Equipment hygiene** \u2014 share none (towels, water bottles), clean mats and gear.
- **Sleep and rest** \u2014 the body repairs and hormones balance during sleep.

**Lifestyle diseases** \u2014 chronic conditions linked to inactivity, poor diet, smoking, alcohol and stress.
- **Obesity** \u2014 excess body fat; a risk factor for many diseases.
- **Type 2 diabetes** \u2014 the body's insulin use fails; linked to inactivity and obesity.
- **Hypertension (high blood pressure) and heart disease** \u2014 raised by inactivity, poor diet, smoking.
- **Some cancers and mental ill-health** \u2014 inactivity and stress raise risk.

**Physical activity as medicine**
- Regular exercise lowers blood pressure and blood sugar, controls weight, strengthens heart and bones, reduces stress, and improves mood and sleep.
- **Wellness** \u2014 the balanced model: physical, mental/emotional, social and spiritual well-being, not just the absence of disease.

**Prescription basics**: the common guidance \u2014 around 30 minutes of moderate activity most days, or 150+ minutes weekly, plus strength work, is the protective dose.

>>> exam
Apply the link
How does regular exercise reduce lifestyle disease risk? Answer: it lowers blood pressure and blood sugar, controls body weight and body fat, strengthens the heart and bones, improves blood lipids, and reduces stress \u2014 directly cutting the risk of obesity, type 2 diabetes, hypertension and heart disease.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "posture",
    title: "10. Posture, growth & common adolescent conditions",
    body: `Growth and posture are part of the health module \u2014 schools run posture and growth-screening programmes.

**Good posture**
- Standing: head level, shoulders square and relaxed, chest up, abdomen in, the natural curves of the spine kept, weight evenly over both feet.
- Good posture reduces muscle strain, joint wear and fatigue, and makes movement efficient.

**Common postural defects**
- **Kyphosis** \u2014 round upper back (\u201chump back\u201d); corrected with back-extension exercises and good sitting habits.
- **Lordosis** \u2014 exaggerated inward curve of the lower back; corrected by abdominal and pelvic-tilt exercises.
- **Scoliosis** \u2014 side-to-side curvature of the spine (often found at school screening); professionally assessed \u2014 later-detected cases may need bracing or physiotherapy.
- **Flat foot / fallen arches** \u2014 the arch of the foot drops; managed with arch-supporting footwear and foot-strengthening exercises.
- **Knock knees / bow legs** \u2014 misalignment at the knee; often corrected by growth and exercise; severe cases need expert review.

**Growth and adolescence**
- The **growth spurt** peaks in the early teens; bones lengthen before muscles fully catch up \u2014 adolescents are more prone to overuse injuries and need strength work graduated carefully.
- Common concerns: Osgood-Schlatter (knee pain at the tibia below the kneecap), growing pains, and sports-specialisation stress.
- The school's role: posture checks, growth monitoring, balanced activity, and early referral \u2014 not self-treatment.

>>> exam
Identify the curve
What are kyphosis, lordosis and scoliosis? Answer: kyphosis is an exaggerated outward curve of the upper back (round back); lordosis is an exaggerated inward curve of the lower back; scoliosis is a sideways (lateral) curvature of the spine. Each is corrected or managed with specific exercises and professional assessment.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "rehab",
    title: "11. Rehabilitation & return-to-play protocols",
    body: `Rehabilitation is the planned process of restoring an injured athlete to full, safe function. The examiner wants the phases and the return-to-play decision.

**The rehabilitation phases**
1. **Immediate / protection phase** \u2014 first aid (R.I.C.E.), rest, protect the injured part, reduce pain and swelling.
2. **Recovery / mobility phase** \u2014 regain pain-free range of movement and begin gentle activity.
3. **Strength & conditioning phase** \u2014 rebuild muscle strength, flexibility, power and endurance around the injury.
4. **Sport-specific phase** \u2014 practise the exact movements of the sport, gradually raising intensity.
5. **Return-to-play / full training** \u2014 rejoin training at reduced loads, then competition once cleared.

**Return-to-play protocol** \u2014 the rules that decide when an athlete comes back:
- **Pain-free** full range of movement.
- **Strength and power** equal to the uninjured side (often tested \u2014 \u2265 90%).
- **Sport-specific skills** performed fully and safely.
- **Reaction and confidence** restored (mental readiness matters).
- **Medical / physio clearance** \u2014 no soreness after sessions.
- Return to competition is **gradual** \u2014 never straight to full, aggressive play.

**Why it matters**: premature return risks re-injury (often worse) and can turn an acute injury chronic. Scars and weak tissues need time and progressive loading.

>>> exam
Sequence the return
List the phases of rehabilitation. Answer: immediate protection (R.I.C.E. and rest), recovery of range of motion, strength and conditioning, sport-specific skill work, and finally a gradual graded return to full training and competition after clearance.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "health-education",
    title: "12. Health education & the wellness model",
    body: `The syllabus ends with the wider picture \u2014 what health means, and how education protects it.

**Definition of health (WHO)**
- \u201cHealth is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.\u201d
- **Dimensions of health**: physical (body systems work), mental (thinking, emotions, coping), social (relationships, community), and spiritual (purpose, values).

**Health education**
- The process of teaching people to protect and improve their own health \u2014 knowledge, attitudes and habits.
- **Aim**: to help people make informed choices \u2014 balanced diet, regular exercise, hygiene, rest, avoiding smoking/alcohol, immunization, and early care-seeking.
- **Settings**: schools (health, hygiene and physical education classes), homes, communities, and the health services.

**School health programme**
- Daily inspection for illness and injuries; health check-ups; first-aid provision and trained staff; safe drinking water and clean washrooms; healthy mid-day meals; posture and growth checks; and exercise as part of the daily routine.

**Health agencies and institutions**
- **WHO (World Health Organization)** \u2014 leads global public health norms and responses.
- **UNESCO / UNICEF** \u2014 education and child-welfare programmes support school health.
- **National bodies** \u2014 state health departments, health centres and the school's own health programme.

**The wellness model in practice**: wellness = acting on all four dimensions daily \u2014 eat well, sleep, exercise, manage stress, build relationships, and give back \u2014 not a medical label.

>>> exam
Define the term
Give the WHO definition of health and name its dimensions. Answer: health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity; the dimensions are physical, mental, social and spiritual well-being.`,
    module: "m6"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "13. Quick-revision one-liners",
    body: `**Macros**: carbohydrate (fuel), protein (repair), fat (energy + vitamins). **Hydration**: before, during, after; 1 kg sweat loss \u2248 1 L fluid.

**Vitamins**: A (eyes), B (energy), C (immunity), D (bones), E (protection), K (clotting). **Minerals**: calcium (bones), iron (oxygen/anaemia), sodium-potassium (fluids). **Diet**: cereal + pulse base, veggies, milk, fruit.

**Injuries**: strain = muscle/tendon; sprain = ligament; contusion = bruise; fracture = bone; dislocation = joint out; overuse = tendonitis, stress fracture, shin splints. Concussion = head injury \u2014 assess medically.

**First aid**: DRABC (danger, response, airway, breathing, circulation/CPR). **R.I.C.E.** = rest, ice, compression, elevation. Kit = gauze, bandages, antiseptic, scissors, gloves, ice pack. **CPR** = 30:2, 100\u2013120/min, 5\u20136 cm. Bandages: roller, figure-of-eight, triangular sling. Immobilise fractures (joint above and below); never move a suspected spinal injury.

**Fractures**: simple vs compound; greenstick in children; never straighten; splint in position found.

**Environment**: heat \u2014 cramps \u2192 exhaustion \u2192 **heat stroke (emergency, cool fast)**; cold \u2014 frostbite (warm gently, never rub), hypothermia (warm slowly); acclimatise to heat and altitude.

**Prevention**: warm-up/cool-down, conditioning, technique, equipment, taping, progressive load, safe surface, fair play.

**Lifestyle**: hygiene, sleep, activity. Lifestyle diseases = obesity, type 2 diabetes, hypertension, heart disease. Exercise lowers all.

**Posture**: kyphosis (round back), lordosis (hollow back), scoliosis (side curve), flat foot, knock knees; correct with exercise and screening.

**Rehab**: protection \u2192 mobility \u2192 strength \u2192 sport-specific \u2192 graded return. Clear only when pain-free, strength matches, and skills are safe.

**Health education**: WHO health = physical + mental + social well-being; school health programme covers checks, first aid and hygiene.

**Golden rule**: prevention (warm-up, technique, conditioning) is always better than treatment; never return to play before the injury is fully cleared.

>>> exam
Self-test
Ten-minute recall: name the three macronutrients and one source each; define strain vs sprain; write out DRABC and R.I.C.E.; list six tackles in your first-aid kit; order the five rehab phases; give the WHO definition of health. Then check this chapter.`,
    module: "m6"
  }
  ],
  exam: [
    { q: "Name the three macronutrients and their main sporting role.", a: "Carbohydrate \u2014 the primary fuel, stored as glycogen; protein \u2014 builds and repairs muscle; fat \u2014 concentrated endurance energy and carries vitamins." },
    { q: "How should an athlete hydrate before, during and after a match?", a: "Start well-hydrated; drink small amounts of water or an electrolyte drink during breaks; after the event replace lost fluid (roughly a litre per kg of sweat lost) with water and electrolytes." },
    { q: "What is the recovery window and why does it matter?", a: "The 30\u201360 minutes after exercise, when refuelling carbohydrate and protein most speeds glycogen replacement and muscle repair \u2014 eating in this window accelerates recovery for the next session." },
    { q: "Which two micronutrients matter most for bone and blood health, and why?", a: "Calcium and vitamin D build strong bones (protecting against stress fractures); iron forms haemoglobin that carries oxygen \u2014 low iron causes anaemia and early fatigue." },
    { q: "Distinguish a strain from a sprain with the mechanism of each.", a: "A strain is a tear of a muscle or tendon from overstretch or explosive effort; a sprain is a tear of a ligament from a twist or fall on a joint." },
    { q: "Name four common sports injuries.", a: "Sprain (ligament, e.g. ankle), strain (muscle, e.g. hamstring), contusion (bruise from impact), and fracture (bone break). Others include dislocation, tendonitis and stress fracture." },
    { q: "Write out the emergency sequence for an unconscious athlete.", a: "Danger \u2014 make it safe; check Response; call for help; open the Airway; check Breathing and start CPR if not breathing; control Circulation/bleeding. Continue until help arrives." },
    { q: "What does R.I.C.E. stand for and when is it used?", a: "Rest, Ice, Compression, Elevation \u2014 the immediate care for sprains, strains and other soft-tissue injuries to limit pain, swelling and further damage." },
    { q: "What should a well-stocked first-aid bag contain?", a: "Sterile gauze and assorted adhesive bandages; roller and triangular bandages; antiseptic wipes or solution and cotton; scissors, tweezers and adhesive tape; an elastic bandage and instant ice pack; disposable gloves and a CPR face shield." },
    { q: "Why must a suspected fracture be immobilised?", a: "Immobilising with a splint, sling or board keeps the broken bone from moving, prevents further damage to bone, tissue and nerves, and reduces pain." },
    { q: "How is a dislocation managed at the scene?", a: "Support the joint in the position found, apply ice over a cloth, do not pull or attempt to reduce it, and refer for medical reduction \u2014 untrained reduction can harm nerves and blood vessels." },
    { q: "Distinguish heat exhaustion from heat stroke.", a: "Heat exhaustion \u2014 heavy sweating, weakness and cool clammy skin \u2014 is treated with rest, shade and fluids; heat stroke \u2014 very high temperature with hot dry skin and confusion or unconsciousness \u2014 is a life-threatening emergency needing immediate cooling and urgent medical help." },
    { q: "List four injury-prevention measures.", a: "Warm-up and cool-down; conditioning matched to the sport; correct technique coaching; and properly fitted equipment and footwear. Add taping for vulnerable joints and progressive training loads." },
    { q: "Give two lifestyle diseases and one shared protective factor.", a: "Type 2 diabetes and hypertension (high blood pressure) are lifestyle diseases; regular physical activity reduces the risk of both (and of obesity and heart disease)." },
    { q: "Name three common postural defects and how each is managed.", a: "Kyphosis (round upper back \u2014 extension exercises and good sitting); lordosis (hollow lower back \u2014 abdominal and pelvic-tilt exercises); scoliosis (sideways curve \u2014 professional assessment and physiotherapy). Add flat foot \u2014 supportive footwear and foot-strengthening exercises." },
    { q: "List the phases of rehabilitation in order.", a: "Protection (R.I.C.E., rest); recovery of range of motion; strength and conditioning; sport-specific skills; then a graded return to full training and competition after clearance." },
    { q: "When is an athlete cleared to return to play?", a: "When the injury is pain-free through full range, strength and power match the uninjured side, sport-specific skills are performed safely, and medical clearance is given \u2014 then a gradual return, never straight to full, aggressive play." },
    { q: "Give the WHO definition of health and the aims of health education.", a: "Health is a state of complete physical, mental and social well-being, not merely the absence of disease. Health education aims to teach people the knowledge, attitudes and habits \u2014 diet, exercise, hygiene, sleep and care-seeking \u2014 that let them protect their own health." }
  ]
};