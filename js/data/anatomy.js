/* ==========================================================================
   THE ARENA — Anatomy & Physiology Study Guide (Module I)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module I.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.ANATOMY = {
  intro: "The structural and functional foundations of the human body during exercise. This study guide covers the skeletal, muscular, cardio-respiratory, energy, nervous and endocrine systems, and maps the key bones, joints and muscles to the sports you study. Work through it chapter by chapter \u2014 every unit ends with exam-focus callouts.",
  stats: [
    { value: "206", label: "bones in the adult skeleton" },
    { value: "\u2248 600", label: "skeletal muscles in the body" },
    { value: "~5 L", label: "of blood in the average adult" },
    { value: "24/7", label: "energy \u2014 ATP is constantly regenerated" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "organisation",
    title: "1. The organisation of the body",
    body: `**Anatomy** is the science of body structure; **physiology** is the science of body function. In physical education you study both together: the structure of a muscle explains how it produces force.

**Levels of organisation** (from smallest to largest):
- **Cell** \u2014 the basic living unit (muscle cell, nerve cell, red blood cell).
- **Tissue** \u2014 a group of similar cells working together.
- **Organ** \u2014 two or more tissues forming a structure with a special job (heart, liver, lung).
- **Organ system** \u2014 organs that cooperate (skeletal, muscular, circulatory).
- **Organism** \u2014 the whole living body.

**The four basic tissues**

| Tissue | Function | Example locations |
|---|---|---|
| Epithelial | Covering & lining, secretion, absorption | Skin, lining of mouth, lung air sacs |
| Connective | Support, binding, transport, storage | Bone, cartilage, blood, tendons, fat |
| Muscular | Movement through contraction | Skeletal muscle, heart muscle, gut wall |
| Nervous | Rapid communication & control | Brain, spinal cord, nerves |

>>> exam
Brain-teaser
Which tissue carries messages at speed and which carries oxygen? NERVOUS tissue conducts impulses between the brain and muscles; BLOOD (a connective tissue) transports oxygen and nutrients. These two examples are the most commonly confused in exams.

**Homeostasis** is the maintenance of a stable internal environment (temperature, blood sugar, pH, water). Exercise disturbs homeostasis; the body's regulating systems restore it \u2014 sweating cools you, breathing deepens to remove extra CO\u2082, and the heart speeds up to deliver more oxygen.

>>> exam
Define & apply
Define homeostasis and give one way the body restores it during exercise. Answer: Homeostasis is the maintenance of a relatively constant internal environment. During exercise, increased breathing removes excess carbon dioxide and increased sweating regulates body temperature.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "skeletal",
    title: "2. The skeletal system",
    body: `The skeleton is the framework of the body. An adult has **206 bones**; a baby is born with about 300, some of which fuse as it grows.

**Functions of the skeleton** \u2014 remember the six "S"s:
- **Support** \u2014 holds the body upright and gives shape.
- **Protection** \u2014 the skull shields the brain, the rib-cage shields the heart and lungs, the vertebral column shields the spinal cord.
- **Movement** \u2014 bones act as levers; muscles pull on them at joints.
- **Storage** \u2014 stores calcium, phosphorus and fat (yellow marrow).
- **Blood-cell formation** \u2014 red and white blood cells and platelets are made in red bone marrow (haematopoiesis).
- **Security** of the body's shape and posture.

**Two divisions of the skeleton**

| Division | Bones | Examples |
|---|---|---|
| Axial skeleton | 80 bones \u2014 the central axis | Skull, vertebral column (26), rib cage (24 ribs + sternum) |
| Appendicular skeleton | 126 bones \u2014 the limbs | Shoulder girdle, arms, pelvic girdle, legs |

**Classes of bones by shape**

| Shape | Description | Examples |
|---|---|---|
| Long bones | Longer than wide; shaft (diaphysis) + ends | Femur, humerus, tibia, radius |
| Short bones | Cube-like; allow limited movement | Carpals of wrist, tarsals of ankle |
| Flat bones | Thin, plate-like; protection & muscle attachment | Scapula, sternum, cranium, ribs |
| Irregular bones | Complex shape | Vertebrae, pelvic bones, facial bones |
| Sesamoid bones | Formed inside tendons; reduce friction | Patella (kneecap) |

**Major bones you must place**

| Bone | Body part | Bone | Body part |
|---|---|---|---|
| Femur | Thigh | Radius | Forearm (thumb side) |
| Tibia | Shin (medial lower leg) | Ulna | Forearm (little-finger side) |
| Fibula | Outer lower leg (thin) | Humerus | Upper arm |
| Patella | Knee cap | Clavicle | Collar bone |
| Scapula | Shoulder blade | Cranium | Skull |
| Pelvis (ilium, ischium, pubis) | Hip girdle | Sternum | Breast bone |
| Vertebrae (cervical 7, thoracic 12, lumbar 5, sacrum, coccyx) | Spine | Metacarpals / phalanges | Hand |

>>> exam
Give the count
How many bones are there in an adult human body? Answer: 206. Know the split too \u2014 axial 80, appendicular 126. The adult vertebral column has 26 bones (7 cervical, 12 thoracic, 5 lumbar, 1 sacrum, 1 coccyx).

**Bone and joint involvement per sport** (a favourite exam link)

| Sport | Bones under greatest load | Main joints stressed |
|---|---|---|
| Basketball | Femur, tibia, radius | Ankle, knee, shoulder, wrist |
| Football | Femur, tibia, tarsals | Ankle, knee, hip |
| Weightlifting | Vertebrae, femur, humerus | Knee, elbow, shoulder, spine |
| Gymnastics | Radius, ulna, vertebrae | Wrist, elbow, shoulder |
| Cricket | Humerus, radius/ulna (bowling arm) | Shoulder, elbow, wrist |
| Badminton / Tennis | Humerus, radius | Wrist, elbow, shoulder, knee |`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "joints",
    title: "3. Joints & their classification",
    body: `A **joint (articulation)** is the place where two or more bones meet. Joints are classified either by **structure** (how they are joined) or by **movement** (how much they move).

**Functional classification (by movement)**

| Type | Movement | Example |
|---|---|---|
| Immovable (synarthrosis / fibrous) | No movement | Sutures of the skull |
| Slightly movable (amphiarthrosis / cartilaginous) | Little movement | Joints between vertebrae, pubic symphysis |
| Freely movable (diarthrosis / synovial) | Wide range of movement | Knee, shoulder, elbow, hip |

**The synovial joint** \u2014 the joint that matters in sport. It has:
- A **joint cavity** filled with **synovial fluid**, which lubricates and nourishes.
- **Articular cartilage** on the bone ends (smooth, shock-absorbing).
- A **ligament** outside the joint binding bone to bone.
- A **synovial membrane** lining the capsule and secreting the fluid.

**Types of synovial joints and the movements they allow**

| Joint type | Examples | Movements |
|---|---|---|
| Ball-and-socket | Shoulder, hip | Flexion, extension, abduction, adduction, rotation, circumduction |
| Hinge | Elbow, knee, ankle | Flexion & extension only |
| Pivot | Top of the neck (atlas-axis), radioulnar | Rotation |
| Gliding | Wrist (carpals), ankle (tarsals), spinal facets | Sliding in two directions |
| Saddle | Thumb (carpometacarpal) | Flexion, extension, abduction, adduction, with a thumb's unique opposition |
| Condyloid | Wrist (radiocarpal), knuckles | Flexion, extension, abduction, adduction |

>>> exam
Classify them
How is the knee joint classified and what movement does it mainly allow? Answer: the knee is a freely movable (synovial) hinge joint and chiefly allows flexion and extension. The shoulder is a ball-and-socket joint \u2014 the most mobile joint in the body.

**Movements allowed at joints** \u2014 the vocabulary every exam uses:
- **Flexion** \u2014 decreasing the angle at a joint (bending the elbow).
- **Extension** \u2014 increasing the angle (straightening the elbow).
- **Abduction** \u2014 moving a limb away from the midline.
- **Adduction** \u2014 moving a limb towards the midline.
- **Rotation** \u2014 turning a bone on its own axis.
- **Circumduction** \u2014 moving the limb so its distal end describes a circle (the thigh in a hip circle).
- **Pronation / supination** \u2014 rotating the forearm inwards (palm down) / outwards (palm up).

>>> exam
Quiet, please!
Name the two movements that occur at a hinge joint. Answer: flexion and extension only \u2014 hinge joints do not rotate.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "muscular",
    title: "4. The muscular system",
    body: `There are about **600 skeletal muscles** in the body. Muscles can only **pull**; they never push, so they work in **antagonistic pairs** \u2014 while one shortens (agonist / prime mover), the other lengthens (antagonist).

**Three types of muscle tissue**

| Type | Location | Control | Structure |
|---|---|---|---|
| Skeletal | Attached to bones | Voluntary | Striated (striped) |
| Cardiac | Heart only | Involuntary | Striated, branched, intercalated discs |
| Smooth | Walls of hollow organs (gut, blood vessels) | Involuntary | Non-striated |

**Very important**: all three can contract, but in physical education "muscle" usually means skeletal muscle. Cardiac muscle never tires the way skeletal muscle does because it has abundant mitochondria and a continuous supply of blood.

**Antagonistic pairs to learn**
- **Biceps brachii** (agonist) and **triceps brachii** (antagonist) at the elbow.
- **Hamstrings** (back of thigh) and **quadriceps** (front of thigh) at the knee.
- **Tibialis anterior** and **gastrocnemius / soleus** at the ankle.
- Pectorals and trapezius/rhomboids at the shoulder.

**Types of muscle contraction**

| Contraction | What happens | Example |
|---|---|---|
| Isotonic \u2014 concentric | Muscle shortens as it works | Lifting phase of a biceps curl |
| Isotonic \u2014 eccentric | Muscle lengthens under tension | Lowering phase of a biceps curl; downhill running |
| Isometric | Muscle develops tension with no change in length | Holding a plank, gripping the bar |

>>> exam
Concentrate
What is the difference between an isotonic and an isometric contraction? Answer: isotonic contraction changes the length of the muscle (concentric shortens it, eccentric lengthens it); isometric contraction produces tension without any change in length.

**Muscle groups engaged by sport-specific skills** \u2014 a standard table for exams:

| Skill / activity | Prime movers |
|---|---|
| Sprint start | Gluteals, quadriceps, hamstrings, calf muscles |
| Basketball jump shot | Quadriceps (jump), triceps (arm extension), wrist flexors (follow-through) |
| Football low drive | Rectus femoris & quadriceps (swing), ankle muscles (whip) |
| Bowling / throwing | Rotator cuff, pectorals, latissimus dorsi, triceps |
| Rowing / pulling | Latissimus dorsi, biceps, trapezius, rhomboids |
| Cycling | Quadriceps (down stroke), hamstrings & calf (up stroke) |
| Swimming freestyle | Pectorals, deltoids, latissimus dorsi, triceps |
| Gymnastics tumbling | Abdominals, quadriceps, gastrocnemius |

**Motor unit & fibre types**
- A **motor unit** is one motor neuron plus all the muscle fibres it supplies \u2014 the smallest unit a muscle can recruit.
- **Slow-twitch (Type I) fibres** \u2014 aerobic, fatigue-resistant; good for distance events (marathon).
- **Fast-twitch (Type II) fibres** \u2014 explosive, fatigue quickly; good for sprinting and jumping.

>>> exam
Recruit
Why can a sprinter generate such explosive power but tire quickly? Answer: fast-twitch (Type II) fibres contract rapidly and powerfully but rely on anaerobic energy, so they fatigue within seconds.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "energy",
    title: "5. Energy systems & the ATP story",
    body: `The body's immediate energy currency is **ATP (adenosine triphosphate)**. Muscle cells store only enough ATP for a few seconds of work, so ATP must be continually re-made. Three systems do this.

| System | Fuel / reaction | Speed | Duration | Example events |
|---|---|---|---|---|
| ATP\u2013CP (phosphagen) | Stored creatine phosphate | Instant | 0\u201310 s | 100 m sprint, shot put, long jump, weightlifting lift |
| Anaerobic lactic (glycolytic) | Carbohydrate \u2192 pyruvate \u2192 lactate (no oxygen) | Fast | 10 s\u20132 min | 200\u2013400 m, 100 m swim, fast breaks |
| Aerobic (oxidative) | Carbohydrate & fat + oxygen | Slower | 2 min \u2192 hours | 1500 m, 5 km, marathon, cycling tours |

**Important exam truths**
- All three systems operate **together**, but one dominates depending on intensity and duration.
- The **ATP\u2013CP system** needs no oxygen and makes no waste products \u2014 it recovers quickly (< 3 min rest restores CP stores).
- The **lactic system** produces ATP fast but without oxygen, and the by-product **lactic acid / lactate** builds up, causing fatigue.
- The **aerobic system** produces 2 ATP (carbohydrate) up to 36–38 per glucose \u2014 far more ATP, but only with oxygen.

**EPOC (excess post-exercise oxygen consumption)**: after hard exercise you keep breathing heavily \u2014 the "oxygen debt". The body uses this extra oxygen to re-synthesise ATP and CP, clear lactate, and restore normal body temperature and breathing.

>>> exam
Match the event
Which energy system dominates a 100 m sprint and which dominates a marathon? Answer: the ATP\u2013CP phosphagen system dominates the 100 m sprint; the aerobic (oxidative) system dominates the marathon. Most team games \u2014 basketball, kabaddi, football \u2014 use a mix of all three.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "cardio",
    title: "6. The cardiovascular system",
    body: `The circulatory system delivers oxygen and nutrients and removes carbon dioxide and waste. The **blood** of an average adult is about 5 litres \u2014 roughly 45% cells (red blood cells, white blood cells, platelets) and 55% liquid plasma.

**The heart** is a muscular pump the size of a fist, with four chambers:
- Right **atrium** (+) receives oxygen-poor blood from the body.
- Right **ventricle** pumps it to the lungs via the pulmonary artery.
- Left **atrium** receives oxygen-rich blood from the lungs.
- Left **ventricle** (the strongest chamber) pumps it around the body via the aorta.

**The cardiac cycle**: one complete beat = filling (diastole) + pumping (systole). The pulse is the wave of blood felt each time the left ventricle contracts.

**The blood vessels**

| Vessel | Direction of flow | Features |
|---|---|---|
| Arteries | Carry blood away from the heart | Thick, elastic walls; high pressure |
| Capillaries | Link arteries and veins | One-cell-thick walls; site of exchange |
| Veins | Carry blood to the heart | Valves prevent backflow; low pressure |

**Key measurements to know**

| Term | Formula / meaning | Typical resting value |
|---|---|---|
| Heart rate (HR) | Beats per minute | 60\u2013100 bpm (trained athlete \u2248 40\u201360) |
| Stroke volume (SV) | Blood pumped per beat | ~70 mL |
| Cardiac output (CO) | CO = SV \u00D7 HR | ~5 L/min at rest, rises to 20\u201330 L in athletes |
| Maximum heart rate | HRmax \u2248 220 \u2212 age (rule of thumb) | Varies |
| Blood pressure | Systolic / diastolic | ~120/80 mmHg |

**Adaptations to training**: resting heart rate lowers, stroke volume and cardiac output rise, blood volume and haemoglobin increase, and the heart muscle thickens \u2014 all of which deliver more oxygen to muscles and delay fatigue.

**Pulse sites** used in practical exams: radial (wrist), carotid (neck), brachial (upper arm), temporal, femoral and dorsalis pedis (foot).

>>> exam
Quick calculation
An athlete has a stroke volume of 110 mL and a resting heart rate of 50 bpm. What is the cardiac output? Answer: CO = SV \u00D7 HR = 110 mL \u00D7 50 = 5,500 mL/min = 5.5 L/min.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "respiratory",
    title: "7. The respiratory system",
    body: `Respiration has two meanings to master:
- **External (breathing)**: the mechanical movement of air into and out of the lungs.
- **Internal (cellular)**: the use of oxygen inside the cells to release energy from food.

**Air passage** \u2014 know the order: Nose/mouth \u2192 pharynx \u2192 larynx \u2192 trachea \u2192 bronchi \u2192 bronchioles \u2192 alveoli (air sacs).

**Gaseous exchange** occurs across the thin walls of the **alveoli** and surrounding capillaries: oxygen diffuses into the blood, carbon dioxide diffuses out. The two gases are carried by **haemoglobin** in red blood cells (oxygen chiefly; some CO\u2082 in plasma).

**Breathing in (inspiration)**: the diaphragm flattens and the intercostal muscles lift the ribs \u2014 chest volume increases, pressure inside drops, air rushes in.
**Breathing out (expiration)**: the reverse \u2014 muscles relax, volume decreases, air is pushed out. Forced expiration (blowing hard) uses the abdominal muscles.

**Lung volumes for the exam**

| Term | Description |
|---|---|
| Tidal volume (TV) | Air moved in/out in one normal breath (~500 mL) |
| Inspiratory reserve volume | Extra air forced in after a normal breath |
| Expiratory reserve volume | Extra air forced out after a normal breath |
| Vital capacity (VC) | Maximum air expelled after maximum inspiration = TV + IRV + ERV (~4.5 L) |
| Residual volume | Air always remaining in the lungs (~1.2 L) |

**VO\u2082 max** is the maximum volume of oxygen the body can use per minute \u2014 the best single indicator of aerobic fitness. Trained endurance athletes reach 60\u201380 mL/kg/min; untrained people about 30\u201340.

**Adaptations to training**: increased vital capacity and tidal volume, stronger respiratory muscles, more efficient gas exchange and a greater VO\u2082 max.

>>> exam
Volume check
What is vital capacity? Answer: the maximum volume of air that can be exhaled after the deepest possible inhalation \u2014 tidal volume plus inspiratory and expiratory reserve volumes. It improves with endurance training.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "nervous",
    title: "8. The nervous system & control of movement",
    body: `The nervous system is the body's control and communication network. It is built of **neurons (nerve cells)** and supporting cells.

**Structural divisions**
- **Central nervous system (CNS)**: brain + spinal cord \u2014 the control centre.
- **Peripheral nervous system (PNS)**: all nerves carrying messages to and from the CNS.

**Functional divisions**
- **Sensory (afferent) neurons** \u2014 carry impulses from sense organs to the CNS.
- **Motor (efferent) neurons** \u2014 carry impulses from the CNS to muscles and glands.
- **Interneurons** \u2014 connect neurons within the CNS.

**The reflex arc** \u2014 the fastest path of response (knee jerk, removing the hand from a hot surface): stimulus \u2192 receptor \u2192 sensory neuron \u2192 spinal cord (interneuron) \u2192 motor neuron \u2192 muscle (response).

**How a movement is organised**
1. The **brain** plans the movement (e.g. the motor cortex fires).
2. The signal travels down the spinal cord and out through the PNS.
3. Inside the muscle, the motor neuron's branch meets each muscle fibre at the **neuromuscular junction**.
4. An impulse arrives and the fibre contracts \u2014 one neuron can activate many fibres (a motor unit).
5. **Proprioceptors** (sense organs in muscles, tendons and joints \u2014 muscle spindles and Golgi tendon organs) feed back position and tension, so the movement is refined and coordinated.

**Coordination** depends on the **cerebellum**, which fine-tunes timing and balance. Practice builds **motor learning** \u2014 the movement becomes smoother, faster and more automatic.

>>> exam
Trace the signal
Trace the reflex arc for pulling the hand away from a flame. Answer: heat receptors in the skin \u2192 sensory neuron \u2192 spinal cord interneuron \u2192 motor neuron \u2192 muscle of the arm contracts \u2014 all before the brain is consciously aware.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "endocrine",
    title: "9. The endocrine system & exercise",
    body: `The endocrine system uses **hormones** (chemical messengers carried in the blood) to regulate slow, long-lasting changes \u2014 including everything that happens during sport.

**Major glands and their exercise-related hormones**

| Gland | Hormone | Effect in sport |
|---|---|---|
| Adrenal medulla | Adrenaline (epinephrine) | Prepares for action \u2014 raises heart rate, blood pressure, blood sugar; the "fight-or-flight" hormone |
| Adrenal cortex | Cortisol | Mobilises energy stores during stress; high levels over time break down muscle |
| Pancreas | Insulin & glucagon | Lower / raise blood sugar to balance fuel during exercise |
| Pituitary | Growth hormone (GH) | Stimulates growth and muscle repair |
| Testes / ovaries | Testosterone / oestrogen | Build muscle mass (testosterone), bone strength |
| Thyroid | Thyroxine | Sets the metabolic rate \u2014 how fast energy is used |

**The fight-or-flight response**: on the starting line, adrenaline quickens the pulse, opens the airways, redirects blood from the skin and gut to the muscles, and releases glucose \u2014 this is why athletes get a "nervous" racing heart before the gun.

**Energy balance and hormones during exercise**: blood sugar falls during long exercise \u2014 glucagon releases glucose from the liver; during intense exercise adrenaline and cortisol keep fuel flowing. After exercise, insulin restores glycogen stores.

>>> exam
Adrenaline rush
Which hormone is chiefly responsible for the "ready for action" state before competition, and name two of its effects? Answer: adrenaline. Two effects: it raises heart rate and it increases blood supply to the muscles.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "thermo",
    title: "10. Thermoregulation & body fluids",
    body: `Working muscles produce heat, so the body must keep its core temperature near **37\u00B0C** or performance drops and heat illness can occur.

**How the body loses heat**

| Method | How it works | Example |
|---|---|---|
| Sweating (evaporation) | Sweat evaporates and cools the skin \u2014 the main method during exercise | Running in heat |
| Conduction | Transfer to touching cooler surfaces | Lying on a cool mat |
| Convection | Air/water moving heat away | Running in a breeze |
| Radiation | Heat given off to cooler surroundings | Standing in shade |

**Hydration and performance**: even a 2% loss of body weight in sweat impairs concentration and performance. Fluid (and electrolytes such as sodium and potassium lost in sweat) must be replaced before, during and after activity. Urine colour is a simple hydration check \u2014 light straw means well hydrated.

**Heat disorders in order of severity**: heat cramps \u2192 heat exhaustion (heavy sweating, weakness, headache) \u2192 heat stroke (hot dry skin, confusion, high temperature) \u2014 a medical emergency needing rapid cooling and urgent help.

**In the cold**: shivering generates heat; wearing insulation and keeping the head warm conserve it. Sweating still happens \u2014 wet clothing increases heat loss.

>>> exam
Replace it
Why must a player drink during a match and not only after it? Answer: even a small loss of fluid (about 2% of body weight) lowers concentration and performance. Fluids and electrolytes must be replaced continuously to maintain hydration, blood volume and cooling.`,
    module: "m1"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "11. Quick-revision tables",
    body: `**Ten numbers worth memorising**

| Fact | Value |
|---|---|
| Bones in the adult body | 206 |
| Bones at birth | about 300 |
| Vertebrae in adult spine | 26 |
| Skeletal muscles | about 600 |
| Average blood volume | 5 litres |
| Normal body temperature | ~37\u00B0C |
| Tidal volume | ~500 mL |
| Vital capacity | ~4.5 L |
| Max heart rate (rule of thumb) | 220 \u2212 age |
| Cardiac output at rest | ~5 L/min |

**One-line definitions for the short-answer section**
- **Osteoporosis** \u2014 loss of bone density making bones weak and brittle.
- **Ligament** \u2014 tough band connecting bone to bone.
- **Tendon** \u2014 tough cord connecting muscle to bone (achilles tendon).
- **Cartilage** \u2014 smooth tissue covering joint surfaces; absorbs shock.
- **Synovial fluid** \u2014 the lubricant inside freely movable joints.
- **Proprioception** \u2014 awareness of where a limb is in space.
- **VO\u2082 max** \u2014 the maximum oxygen a person can consume per minute during maximal exercise.

>>> exam
Final check
Name the four tissue types, the three energy systems, the three muscle types and the joints of free movement. Answer: Tissues \u2014 epithelial, connective, muscular, nervous. Energy systems \u2014 ATP\u2013CP, anaerobic lactic, aerobic. Muscle types \u2014 skeletal, cardiac, smooth. Freely movable joints \u2014 the synovial joints (ball-and-socket, hinge, pivot, gliding, saddle, condyloid).`,
    module: "m1"
  }
  ],

  exam: [
    { q: "Differentiate between anatomy and physiology.", a: "Anatomy is the study of the structure of the body; physiology is the study of how those structures function." },
    { q: "Name the functions of the skeleton.", a: "Support, protection, movement, storage of minerals (calcium and phosphorus), blood-cell formation, and maintenance of posture." },
    { q: "Classify joints and give one example of each.", a: "Immovable (fibrous) \u2014 sutures of the skull; slightly movable (cartilaginous) \u2014 joints between vertebrae; freely movable (synovial) \u2014 knee, shoulder, hip." },
    { q: "What is a motor unit?", a: "One motor neuron together with all the muscle fibres it supplies \u2014 the smallest unit of muscle activity." },
    { q: "Explain the ATP\u2013CP energy system.", a: "The phosphagen system resynthesises ATP instantly from stored creatine phosphate, needs no oxygen, produces no waste, and powers explosive efforts up to about 10 seconds (sprints, throws, jumps)." },
    { q: "Define cardiac output and give its formula.", a: "Cardiac output is the volume of blood the heart pumps in one minute. Cardiac output = stroke volume \u00D7 heart rate." },
    { q: "What is VO\u2082 max and why is it important?", a: "VO\u2082 max is the maximum volume of oxygen consumed per minute during maximal exercise \u2014 the best measure of cardiorespiratory endurance fitness." },
    { q: "Describe the gaseous exchange that occurs in the alveoli.", a: "Oxygen diffuses from the air in the alveoli into the blood and binds to haemoglobin; carbon dioxide diffuses from the blood into the alveoli to be breathed out." },
    { q: "What are slow-twitch and fast-twitch fibres?", a: "Slow-twitch (Type I) fibres contract slowly and resist fatigue, suiting endurance events; fast-twitch (Type II) fibres contract fast and strongly but fatigue quickly, suiting sprint and power events." },
    { q: "How does hydration affect performance?", a: "Loss of even about 2% of body weight in fluid impairs concentration, coordination and endurance; replacing fluids and electrolytes before, during and after exercise maintains performance and safety." }
  ]
};