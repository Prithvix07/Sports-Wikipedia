/* ==========================================================================
   THE ARENA — Sports Training & Conditioning Study Guide (Module III)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module III.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.TRAINING = {
  intro: "Principles and methods of building fitness and peak sporting performance. This guide covers the training principles, the components of physical fitness, periodisation, conditioning methods and recovery \u2014 each applied to the sports you play and are examined on.",
  stats: [
    { value: "5", label: "training principles" },
    { value: "6", label: "components of physical fitness" },
    { value: "3", label: "periodisation cycles (micro\u2013meso\u2013macro)" },
    { value: "5", label: "major training methods" },
    { value: "3", label: "energy systems trained" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "why-train",
    title: "1. Why we train: adaptation & the training load",
    body: `Training is **planned, repeated physical work** that forces the body to adapt. The body does not get fit by accident \u2014 it responds to a **specific stimulus** and then resists the next session more easily. That process is called **adaptation**.

**The training-load equation**

> Training load = frequency \u00d7 intensity \u00d7 duration \u00d7 (type of activity)

- **Frequency** \u2014 how many sessions per week.
- **Intensity** \u2014 how hard each session is (% of maximum heart rate, % of 1-rep max, pace).
- **Duration** \u2014 how long each session lasts (time or distance).
- **Type** \u2014 the mode of activity (running, lifting, swimming, games).

**What adaptation gives the athlete**
- Stronger and larger muscles (\u2014 strength and power athletic body).
- A more efficient cardiorespiratory system (a bigger stroke volume, lower resting heart rate).
- Faster recovery between bouts of work.
- Better fuel economy \u2014 the trained body uses fat and glycogen more efficiently.

**The supercompensation curve** \u2014 the exam favourite:
- Training applies **fatigue** \u2192 performance drops.
- During **recovery**, the body rebuilds higher than the starting level (supercompensation).
- The next session should land at or near the **peak of the curve**; leaving it too late loses the gain (reversibility), too early causes overtraining/cumulative fatigue.

>>> exam
Define the pair
What is supercompensation? Answer: the process whereby the body, after a training stimulus and sufficient recovery, rebuilds its energy stores and capacities to a level slightly above the pre-training baseline, producing a temporary performance gain. Training timed to the supercompensation peak gives the greatest improvement.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "principles",
    title: "2. The principles of training",
    body: `The principles are the rules of effective training. Examiner question: \u201cname and explain any four.\u201d

| Principle | Meaning | Coaching example |
|---|---|---|
| **Overload** | The body only adapts to a load greater than it is used to. | Run further/faster, lift more, add resistance. |
| **Progression** | Overload must be increased gradually to keep forcing adaptation. | Add 5\u201310% per week, not double the volume overnight. |
| **Specificity** | Training must match the demands of the sport. | A sprinter does speed work, not long slow jogging. |
| **Reversibility** | \u201cUse it or lose it\u201d \u2014 detraining reverses gains, quickly for cardio, slower for muscular size. | Two weeks off noticeably drops endurance; a complete break weakens strength. |
| **Variance** | A varied stimulus keeps motivation high and avoids dominance plateaus. | Rotate methods \u2014 interval one day, circuit another, weights another. |
| **Moderation / individuality** | Programmes fit the age, sex, maturity, injury history and goals of each athlete. | A B.P.Ed student and an elite athlete never share the same load. |

**Two vital supporting ideas**
- **Recovery is part of the programme** \u2014 you train, recover, then adapt. Rest days are planned, not wasted days.
- **Overtraining** \u2014 the opposite and the cost of ignoring progression and recovery: chronic fatigue, sleep disturbance, irritability, poor performance, higher injury and illness risk.

>>> exam
Explain the principle
Explain overload and how it relates to progression. Answer: overload means the stimulus must exceed the body's current capacity to trigger adaptation; progression means that as fitness rises, the load must keep rising at a controlled rate so adaptation continues without injury or overtraining.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "warmup-cooldown",
    title: "3. Warm-up, conditioning & cool-down",
    body: `**Warm-up** \u2014 gradually raise body temperature, heart rate and joint mobility so the body is ready for harder work.

**The modern warm-up pattern**
1. **General phase** (5\u201310 min): light aerobic work \u2014 jogging, skipping, biking. Raises core temperature and blood flow.
2. **Mobility / flexibility phase** (5 min): dynamic stretching of the joints and muscles about to be used.
3. **Specific phase** (5\u201310 min): rehearsal of the exact skills at rising intensity \u2014 passing, shooting, bowling actions, sprints.
4. **Pulse raiser / rehearsal burst**: short acceleration runs or jumps to wake the nervous system before competition.

**Why it matters (the exam list)**
- Raises muscle temperature \u2192 faster, more forceful contractions.
- Increases heart rate and blood flow \u2192 more oxygen to working muscles.
- Improves joint mobility and muscle elasticity \u2192 protection against strains.
- Prepares the mind \u2014 rehearse the plan, raise arousal appropriately.
- May reduce injury risk during the first explosive movements.

**Conditioning** \u2014 the systematic improvement of the fitness components you need for your sport. Each component is trained by its own methods: strength with weights and plyometrics, speed with sprint drills, endurance with continuous and interval work, agility with change-of-direction drills.

**Cool-down** \u2014 5\u201310 minutes of low-intensity work, then static stretching and gentle mobility.
- Gradually lowers heart rate \u2192 avoids sudden drops and dizziness.
- **Removes waste** and begins the recovery process (aides the muscles in returning toward resting state).
- Reduces **delayed onset muscle soreness (DOMS)** severity.
- Static stretching here (not during warm-up) helps restore resting muscle length.

>>> exam
Sequence the session
Put the parts of a complete session in order: warm-up \u2192 main conditioning phase \u2192 cool-down. Justify the warm-up's position. Answer: the warm-up precedes hard work to raise temperature, circulation and joint mobility so the body is ready for intensity and less injury-prone; the cool-down after makes the drop in heart rate gradual and speeds recovery.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "fitness-components",
    title: "4. Components of physical fitness",
    body: `Physical fitness splits into **health-related** and **skill-related** components. Examiners ask you to define each and give a sporting example.

**Health-related components**
- **Strength** \u2014 the maximum force a muscle group can produce (one maximal lift). *Shot-putter, wrestler, gymnast.*
- **Endurance** \u2014 the ability to sustain activity over time. **Cardiovascular (aerobic) endurance**: sustaining rhythm over minutes \u2014 *football midfielder, marathoner, cyclist*. **Muscular endurance**: repeating contractions without fatigue \u2014 *rowing, climbing, sit-up tests*.
- **Flexibility** \u2014 the range of movement at a joint. *Gymnast, taekwondo kick height, bowler's shoulder.*
- **Body composition** \u2014 the proportion of fat mass to lean (fat-free) mass. Shapes the physique for the sport \u2014 *distance runners are lean; rugby forwards carry mass*.

**Skill-related components**
- **Speed** \u2014 the rate of movement \u2014 *100 m sprinter, fast bowler, winger*.
- **Agility** \u2014 the ability to change direction rapidly and accurately \u2014 *kabaddi raider, kho-kho chaser, tennis player*.
- **Balance** \u2014 holding a position (static) or maintaining stability while moving (dynamic) \u2014 *gymnast on the beam, archer, wrestler*.
- **Coordination** \u2014 combining several movements into one smooth action \u2014 *fielding a catch on the run, hockey dribble*.
- **Reaction time** \u2014 the interval between stimulus and response \u2014 *sprint start, goalkeeper save, boxing counter*.
- **Power** \u2014 strength \u00d7 speed \u2014 explosive force in minimal time \u2014 *high jump take-off, shot put, smash*.

**The components are interlinked**: power needs strength and speed; agility needs speed and balance; skill performance needs several components working together.

>>> exam
Classify the pair
Give two health-related and two skill-related fitness components with one sport example each. Answer: health-related \u2014 strength (shot put) and flexibility (gymnastics); skill-related \u2014 agility (kabaddi raiding) and power (high-jump take-off).`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "strength",
    title: "5. Strength: types & training",
    body: `Strength is the foundation of most skills and of injury resistance. Examiners cut it three ways.

**Types of strength**
- **Maximum (static) strength** \u2014 the greatest force a muscle can exert in one maximal contraction. *Weightlifter's 1RM.*
- **Explosive / power strength** \u2014 force applied rapidly \u2014 *jump, throw, smash, punch*. This is power.
- **Strength endurance** \u2014 sustained moderate force over repetitions \u2014 *rowing, wrestling a full match, repeated push-ups*.

**Method of training vs effect**

| Method | Reps \u00d7 sets \u00d7 load | Trains |
|---|---|---|
| Maximum strength work | 1\u20136 reps, high load (85\u2013100% of 1RM) | Neural drive, fibre recruitment |
| Hypertrophy work | 6\u201312 reps, moderate load (70\u201380% 1RM) | Muscle size (cross-sectional area) |
| Strength endurance | 15\u201320+ reps, lower load | Fatigue resistance |
| Power work | 1\u20136 reps, executed explosively | Rate of force development |

**Forms of muscle action** \u2014 a classic exam question:
- **Isotonic (dynamic)** \u2014 the muscle shortens (concentric) or lengthens (eccentric) against a constant load \u2014 *barbell curl, squat*.
- **Isometric (static)** \u2014 tension without a change in length \u2014 *pressing against a wall, holding a handstand, tensing the abdomen*.
- **Isokinetic** \u2014 maximal tension at constant speed, usually on special machines \u2014 *rehabilitation testing and training*.

**Principles to protect your athletes**: warm up before heavy lifts, correct form over ego (loads), full range of movement, progressive overload in small steps, and rest 48 hours between hard sessions for the same muscles.

>>> exam
Define the trio
Distinguish isometric, isotonic and isokinetic contractions. Answer: isometric \u2014 tension with no change in muscle length (holding a position); isotonic \u2014 tension with a change in length through a range against a constant load (lifting a bar); isokinetic \u2014 maximal tension at a constant joint speed, typically on specialised equipment.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "speed-agility",
    title: "6. Speed & agility: training the fast athlete",
    body: `**Speed** is the rate of movement. The sprinter, the fast bowler and the winger buy their speed from three sources:

- **Stride length \u00d7 stride frequency.**
- **Reaction time** \u2014 the brain-to-muscle delay at the start.
- **Technique** \u2014 relaxed shoulders, high knee drive, arm drive, good posture.

**Training speed**
- **Acceleration work**: explosive short sprints (10\u201340 m) from varied starts \u2014 sharpens technique and fast-twitch fibre use.
- **Flying sprints**: max-effort runs over 30\u201360 m \u2014 build top speed.
- **Speed endurance**: repeated sprints with short recovery \u2014 teaches the ATP-CP and lactic systems to hold speed late in a game.
- **Resisted/supported running**: sleds, hills, bands and downhill runs \u2014 overload stride mechanics.
- **Plyometrics**: hops, bounds, box jumps \u2014 explosive stretch-shortening power in one quality and quality basis.

**Agility** is changing direction quickly while staying in control \u2014 the kabaddi raider, the kho-kho chaser, the basketball defender.
- Train with **drills**: T-drill, Illinois agility test, shuttle runs, zig-zag cone drills, reactive tag games.
- Agility rewards **lower-body strength, quick feet and visual scanning**, plus the perception to read an opponent's move and react.

**Practical session design**: start with technique (2\u00d78\u201330 s), then rhythm drills, then full-effort runs on a ratio of roughly 1:5\u20131:10 work-to-recovery so quality stays high.

>>> exam
Choose the drill
Design a speed-and-agility station for a kho-kho chaser. Answer: 3\u00d710 m acceleration sprints from a kneeling start; 8 cone zig-zag runs; 10 s of fast ladder footwork; rest 40\u201360 s between sets; finish with two reactive tag races \u2014 covering acceleration, change of direction, and reaction \u2014 the three demands of the chaser.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "endurance",
    title: "7. Endurance & the energy systems",
    body: `Endurance is sustained work. To train it you must know which **energy system** fuels the event.

**The three energy systems**

| System | Fuels | Duration | Examples |
|---|---|---|---|
| ATP-CP (alactacid) | Stored creatine phosphate, no oxygen needed | 0\u201310 s | Sprint start, shot put, smash |
| Lactic (anaerobic glycolysis) | Carbohydrate without oxygen, produces lactic acid | 10 s \u2013 2 min | 400 m run, repeated attacks |
| Aerobic | Oxygen + carbohydrate + fat | 2 min onward | 5 km run, football match base |

**Method of training vs system**

| Method | Pattern | Trains |
|---|---|---|
| Continuous | Steady, low\u2013moderate intensity, long duration | Aerobic endurance, fat use |
| Interval | Work : rest alternating at set intensity | Matches the event's demand \u2014 short intervals = speed/anaerobic; longer = aerobic |
| Fartlek | \u201cSpeed play\u201d \u2014 mixed bursts within continuous running | Both systems, sport-like variation |
| Circuit | Ring of stations, exercises in rotation | General fitness, strength endurance |
| Repetition | Near-max efforts with near-full recovery | Maximal speed and quality |

**Principles to apply**
- **Specificity**: a marathoner builds the aerobic system; the 400 m runner trains the lactic system hard.
- **Progressive overload**: add volume (distance/time) slowly \u2014 the 10% rule is a safe guide.
- **Interval design = work \u00d7 recovery \u00d7 intensity**: short work (e.g. 30 s) needs recovery long enough (e.g. 2\u20133 min) for sprint quality; continuous work needs far less.

**Aerobic conditioning indicators**: a **lower resting heart rate**, faster recovery pulse after effort, and the ability to train/compete for longer at the same pace.

>>> exam
Apply the method
Which training method suits a 1500 m runner and why? Answer: interval training \u2014 the 1500 m demands near-maximal work just above the lactate threshold, with rest intervals (e.g. 400 m reps at race pace with short jog recovery) that allow high-quality repeats; continuous running builds the aerobic base beneath it.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "flexibility",
    title: "8. Flexibility: types & methods",
    body: `Flexibility is the range of movement (ROM) at a joint or series of joints, limited by muscle length, joint structure, tendons, fat and previous injury.

**Types**
- **Static** \u2014 the range of movement around a joint measured at rest.
- **Dynamic** \u2014 the range of movement used in sport \u2014 *kick height in taekwondo, the full bowling arm circle*.

**Methods of training flexibility**
- **Static stretching** \u2014 ease to the point of mild tension and hold (15\u201330 s) \u2014 best in the cool-down, improves resting muscle length.
- **Dynamic stretching** \u2014 controlled swings within the range \u2014 best in the warm-up, prepares for explosive skills.
- **Ballistic stretching** \u2014 fast bouncing movements \u2014 controversial: can overload the muscle and cause injury; generally avoided for beginners.
- **PNF (proprioceptive neuromuscular facilitation)** \u2014 contract\u2013relax cycles with a partner (hold, contract 6 s, relax, then stretch further) \u2014 the most powerful quick way to increase range, often used in rehabilitation.

**Flexibility training rules**
- Always after a warm-up or in the cool-down — never on cold muscles.
- Stretch to mild tension, never sharp pain.
- Breathe slowly; do not hold your breath.
- Stretch both the mover and the opposite (antagonist) muscles.

**Sporting value**: flexibility protects against muscle strains, improves technique range (leg raises, shoulder clearing in swimming) and reduces DOMS when included after training.

>>> exam
Choose the method
Compare static, dynamic and PNF stretching with one use each. Answer: static \u2014 lengthen resting muscle in the cool-down (hamstrings of a runner); dynamic \u2014 prepare joints and muscles for explosive skill in the warm-up (bowler's arm swings); PNF \u2014 contract-relax partner method for the fastest gains in range, used in rehab and gymnastics.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "periodisation",
    title: "9. Periodisation: micro, meso & macro cycles",
    body: `Periodisation is **planning training in cycles** so the athlete peaks for the competition that matters, and never trains hard all year.

**Macrocycle** — the long-term plan, usually one year (or the season). Contains the preparatory, competitive and transition phases, and one or more mesocycles.

**Mesocycle** — a block of training, typically 3\u20136 weeks, focused on one goal (aerobic base, strength block, speed block). These change the emphasis across the macrocycle.

**Microcycle** — the smallest cycle, typically one week; it arranges sessions (two hard, one moderate, two easy, one rest) so cumulative fatigue never builds beyond recovery.

**The annual plan in order**

| Phase | Goal | Typical content |
|---|---|---|
| Preparatory (off/early season) | Build the base | General conditioning, aerobic volume, strength foundation |
| Pre-competitive | Convert base to sport | Specific drills, speed/power, competition practice |
| Competitive | Peak and maintain | quality sessions, tapers, the competition itself |
| Transition (post-season) | Recover | Active rest, light play, no heavy training |

**Tapering** — a short, planned reduction in training volume (keeping some intensity) in the final 7\u201314 days before a major competition. It allows the athlete to arrive **fresh and fully recovered while keeping sharpness** — the opposite of training too hard on the eve of the event.

>>> exam
Sequence the year
Order the phases of a macrocycle and state the goal of each. Answer: preparatory \u2014 build general fitness base; pre-competitive \u2014 convert base into sport-specific quality; competitive \u2014 hold peak form through the season with tapers for majors; transition \u2014 active rest and recovery before the next cycle.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "methods",
    title: "10. Training methods in detail",
    body: `Each method has a signature pattern and a purpose. Learn the pattern, then the sport that uses it.

**Continuous training** — steady effort, no rest, 20 min onward, moderate intensity (roughly 60\u201480% of max heart rate).
- *Builds: aerobic endurance, fat burning. Uses: distance runners, football pre-season, cycling.*

**Interval training** — prescribed work and rest intervals with measurable intensity.
- *Example: 8 \u00d7 200 m at 90% with 90 s recovery. Builds: the energy system the interval is designed for. Uses: track, swimming, team-sport conditioning.*

**Fartlek training** — \u201cspeed play\u201d: continuous running freely interrupted by fast bursts, hills and recoveries by feel.
- *Builds: aerobic base with anaerobic variety, game-like rhythm. Uses: football, hockey, general pre-season.*

**Circuit training** — 6\u201310 stations of different exercises, completed in rounds; work per station \u2248 30\u201360 s.
- *Builds: general fitness, strength endurance, body composition. Uses: school PE, team conditioning, general health.*

**Weight training** — progressive resistance work (barbells, dumbbells, machines, bodyweight).
- *Builds: strength, power, hypertrophy \u2014 set/reps determine the effect (see the strength chapter). Uses: all sports in the right mix.*

**Repetition / drop-in methods for quality** — near-max efforts with near-full recovery, plus assisted or resisted forms (bands, sleds, parachutes) to overload the pattern.

**Choosing a method** = match the demand of the sport (specificity) + vary the stimulus (variance) + progress safely (overload + progression). A bad session is one that is so taxing it can't be repeated.

>>> exam
Match method to sport
Place the correct method beside each athlete: marathoner, 400 m runner, body-builder. Answer: marathoner \u2014 continuous training (aerobic base, fat use); 400 m runner \u2014 interval/repetition sprint work (lactic system with near-full recovery); body-builder \u2014 weight training with hypertrophy set/reps and progressive overload.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "recovery",
    title: "11. Recovery, rest & tapering",
    body: `Improvement happens during recovery, not during the session itself. Coaches who ignore this end up with overtrained athletes.

**Principles of recovery**
- **Rest** — unplanned activity: sleep and complete rest days. Sleep is the single most powerful recovery tool (hormones, repair, memory).
- **Active recovery** — very light movement (easy jog, swimming, stretching) that flushes waste and keeps blood circulating without new fatigue.
- **Nutrition** — refuel carbohydrate and protein within the recovery window (30\u201360 min after training); rehydrate fully.
- **Recovery techniques** — massage, foam rolling, contrast baths, compression — all assist, none replace sleep and food.

**The signature of full recovery**
- Performance returns to (and exceeds) the pre-session level.
- Resting heart rate and sleep quality return to normal.
- No lingering soreness that disrupts technique.

**Overtraining (staleness)** — the accumulated cost of training with too little recovery: persistent fatigue, mood disturbance, poor sleep, loss of appetite, more illness and injury, and falling performance despite harder training. The cure is rest, lighter load and nutrition.

**Taper** — the planned reduction before a major event: cut volume by 40\u201360% in the final one\u2013two weeks, keep a little intensity, keep skills sharp. Purpose: arrive at the start line fresh and sharp, not flat and heavy.

>>> exam
Justify the taper
Why do elite sprinters reduce volume in the final week before a final? Answer: to remove accumulated fatigue and allow full supercompensation while preserving sharpness with brief high-intensity efforts \u2014 arriving rested, not detrained, at the start line.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "session-design",
    title: "12. Designing a training session in practice",
    body: `The examiner often asks you to \u201cdesign a session.\u201d Use this template and you will structure it cleanly.

**Session skeleton**
1. **Warm-up (10\u201315 min)** — general aerobic pulse-raiser, dynamic mobility, then skill rehearsal at rising intensity.
2. **Main body (fitness focus)** — the conditioning block, matched to the component trained:
   - Strength: 3 \u00d7 8 back squat, push-press, rows, core work.
   - Speed/agility: sprint drills + change-of-direction patterns (short, quality, long recovery).
   - Endurance: intervals or continuous work at the right intensity.
3. **Skill application** — use the fitness gains in a game or sport-specific drill (integration).
4. **Cool-down (5\u201310 min)** — easy jog/walk, then static stretching of the worked muscles.

**Checklist of quality**
- Session fits the cycle (this week's microcycle goal, not a random hard session).
- Overload is one step up, not a leap.
- Work matches the event (specificity).
- Recovery built in \u2014 quality, not grinding.
- Every fitness component touched across the training week, not just one.

**Sample week (team-sport pre-season)**: Mon strength; Tue speed & agility; Wed aerobic interval; Thu yoga / active recovery; Fri quality game-based conditioning; Sat continuous run; Sun rest.

>>> exam
Design the session
Design a 40-minute speed session for a basketball player (5-line answer expected). Answer: warm-up 10 min (jog, dynamic stretches, lay-up rhythm); main 25 min \u2014 6 \u00d7 20 m accelerations (rest 60 s), 6 \u00d7 T-drill agility (rest 90 s), 4 \u00d7 5-s jump-stop changes; cool-down 5 min (jog + static stretch). Total ~40 min, quality kept high by full recovery.`,
    module: "m3"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "13. Quick-revision one-liners",
    body: `**Principles**: Overload (exceed the usual load) \u2192 Progression (raise it gradually) \u2192 Specificity (match the sport) \u2192 Reversibility (use it or lose it) \u2192 Variance (variety beats boredom and plateau) \u2192 Individuality (fit the athlete).

**Session order**: warm-up \u2192 conditioning \u2192 skill application \u2192 cool-down.

**Fitness split**: health-related \u2014 strength, endurance (cardiovascular + muscular), flexibility, body composition; skill-related \u2014 speed, agility, balance, coordination, reaction time, power.

**Strength trio**: isotonic (moving), isometric (held), isokinetic (constant-speed machine). Strength types: maximum, explosive/power, endurance.

**Energy systems**: ATP-CP (0\u201310 s), lactic (10 s\u20132 min), aerobic (2 min+). Train the one the event uses.

**Methods**: Continuous (steady), Interval (work:rest), Fartlek (speed play), Circuit (stations), Weights (resistive), Repetition (near-max +\u2014full recovery), Plyometrics (bounding/jumps).

**Flexibility**: static (lengthen the resting muscle, cool-down), dynamic (prepare, warm-up), ballistic (bouncing \u2014 cautious), PNF (contract-relax, biggest gains).

**Periodisation**: micro (week) \u2192 meso (3\u20136 weeks) \u2192 macro (year/season); phases = preparatory \u2192 pre-competitive \u2192 competitive \u2192 transition.

**Recovery**: sleep, food, water, active rest \u2014 this is where gains are built; overtraining is training without recovery.

**Taper**: cut volume, keep intensity, for 1\u20132 weeks before a major.

**Golden rule**: training load = frequency \u00d7 intensity \u00d7 duration \u00d7 type, progressed safely and recovered properly.

>>> exam
Testing yourself
Try the ten-minute version: write out the five principles, three components of strength, five training methods, three energy systems with their durations, and the four phases of a macrocycle \u2014 then check this chapter. This single exercise covers ~half the usual Module III paper.`,
    module: "m3"
  }
  ],
  exam: [
    { q: "Define training load and name its four factors.", a: "Training load is the total amount of work placed on the body: frequency (how often), intensity (how hard), duration (how long) and type (mode) of activity." },
    { q: "Explain overload, progression and specificity with one example each.", a: "Overload \u2014 the stimulus must exceed current capacity (run further than last week); progression \u2014 increase loads gradually so adaptation continues (add 5\u201310% weekly); specificity \u2014 train the exact demands of the sport (a sprinter runs short fast work, not long slow runs)." },
    { q: "What is reversibility? Give a coaching example.", a: "Reversibility is detraining \u2014 fitness is lost when training stops or drops. Example: two weeks without training noticeably reduces heart-rate recovery and endurance; strength declines more slowly." },
    { q: "Give the components of a complete warm-up and the reasons for each phase.", a: "General aerobic pulse-raiser (raises temperature/circulation), dynamic mobility (increases joint range and prepares for movement patterns), then sport-specific rehearsal at rising intensity (activates the exact skills and nervous system, reducing injury risk in the first explosive efforts)." },
    { q: "Distinguish cardiovascular endurance from muscular endurance.", a: "Cardiovascular endurance is the heart, lungs and circulation sustaining whole-body effort over time (distance running); muscular endurance is a specific muscle group repeating contractions without fatigue (rowing, repeated push-ups)." },
    { q: "Define speed, agility and power with one sport example each.", a: "Speed \u2014 rate of movement (100 m sprinter); agility \u2014 rapid, controlled change of direction (kho-kho chaser); power \u2014 strength \u00d7 speed, explosive force quickly (shot put or high-jump take-off)." },
    { q: "Name the three energy systems and their approximate durations.", a: "ATP-CP (alactacid) about 0\u201310 seconds; lactic (anaerobic glycolysis) about 10 seconds to 2 minutes; aerobic from about 2 minutes onward." },
    { q: "Which method would you choose to raise a footballer's aerobic base and why?", a: "Continuous training \u2014 steady moderate-intensity work over 20+ minutes improves the aerobic system and recovery between bouts; it is supplemented with intervals for match-like speed later." },
    { q: "Compare interval and fartlek training.", a: "Interval uses fixed work:rest patterns at a set intensity (8 \u00d7 200 m with 90 s rest); fartlek is \u2018speed play\u2019 \u2014 continuous running with free bursts and hills, varied by feel; both train the aerobic base with high-intensity variety." },
    { q: "What is periodisation and what are the three cycles?", a: "Periodisation is structuring training into cycles to peak at the right time: microcycle (week), mesocycle (a 3\u20136-week focused block) and macrocycle (the year/season)." },
    { q: "What is a taper and why do athletes use it?", a: "A taper is a planned reduction in training volume (keeping some intensity) in the final 1\u20132 weeks before a major event, so the athlete sheds accumulated fatigue and arrives fresh and sharp rather than flat or heavy." },
    { q: "Define overtraining and state two signs and the first-line remedy.", a: "Overtraining (staleness) is chronic fatigue from training with insufficient recovery. Signs: persistent tiredness, disturbed sleep, irritability, poor performance despite hard training. First line: reduce load, increase rest and nutrition before any other change." }
  ]
};