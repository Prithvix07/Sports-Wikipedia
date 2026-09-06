/* ==========================================================================
   THE ARENA — Extra Aquatics & Target Articles
   Concise syllabus articles for the remaining aquatic disciplines and the
   target/precision games. Appended to window.ARTICLES.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  /* -------------------------------------------------------------- AQUATICS */
  {
    slug: "diving",
    title: "Diving",
    altNames: "Springboard & Platform",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Diving is an aesthetic aquatic sport \u2014 athletes perform acrobatic somersaults and twists from springboards and platforms before entering the water cleanly and vertically.",
    infobox: [
      ["Invented", "Sweden / Germany (modern gymnastics-diving)"],
      ["Governing body", "World Aquatics (FINA)"],
      ["Format", "Individual & synchronised"],
      ["Heights", "1 m, 3 m springboard \u00B7 10 m platform"],
      ["Judging", "6\u20137 judges, difficulty multiplied"],
      ["Olympic", "Since 1904"],
      ["Common injuries", "Shoulder strain, wrist injuries, concussions, neck strain"]
    ],
    modules: ["m1", "m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Aquatics Championships", "Diving World Cup"],
    keyTerms: ["Somersault", "Twist", "Flagrant entry", "Degree of difficulty", "Reverse dive"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Diving** combines gymnastics with water entry. Divers jump, somersault and twist from a **1 m or 3 m springboard** or a **10 m platform**, judged on approach, take-off, flight form and the near-vertical **entry**. Synchronised diving adds pairs coordination to the same score.` },
      { id: "equipment", title: "The boards & facilities", module: "m4", body: `- **Springboard**: 1 m and 3 m heights, flexible with adjustable fulcrum for rebound.
- **Platform**: fixed 10 m (also 5 m and 7.5 m) rigid boards.
- The pool is deep (5 m+) to guarantee safe entry at 10 m.
- **Degree of difficulty**: each dive carries a number based on position (tuck, pike, straight) and twists \u2014 score = judges' marks (0\u201310) \u00D7 difficulty.
- Synchronised dives score twice: each athlete's mark plus a synchronisation mark.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Take-off**: explosive leg drive converts linear momentum into angular momentum for the somersault \u2014 the tuck tightens the radius and spins faster (conservation of angular momentum).
- **Twists** are started and stopped with momentary asymmetries (a shoulder tilt or arm swing).
- **Entry**: the fully extended body enters through a "hole" \u2014 the hands first, arms together, legs straight; a clean entry makes a near-silent "rip".
- Synchrony requires identical timing of mirrors \u2014 a natural study of motor programmes and rhythm.` },
      { id: "training", title: "Training & safety", module: "m3", body: `- Dry-land training: trampolines, harnesses and spotting belts rehearse dives safely before water.
- Water work starts from 1 m, progressing to 3 m, 5 m and 10 m.
- Depth perception and height adaptation (the "fear phase") need graded desensitisation.
- Core strength, ankle control and shoulder stability are the key conditioning components.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder and wrist strain from high-impact entry; neck strain from pike entries done badly.
- **Head injuries** (concussion from mistimed dives) are the highest concern \u2014 strict spotting rules, no unsupervised reverse dives.
- Prevention: mastering entry at low heights first, safety staff at meets, and rung progression in training.` }
    ]
  },
  {
    slug: "artistic-swimming",
    title: "Artistic Swimming",
    altNames: "Synchronised Swimming",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Artistic swimming is a graceful aquatic discipline \u2014 swimmers perform choreographed figures, lifts and patterns to music, judged on artistry, execution and difficulty.",
    infobox: [
      ["Invented", "Canada / USA (early 20th century)"],
      ["Governing body", "World Aquatics (FINA)"],
      ["Format", "Team, duet, solo & mixed"],
      ["Pool", "Standard pool, 3 m minimum depth"],
      ["Judging", "Technical & free routines"],
      ["Olympic", "Since 1984 (duet & team)"],
      ["Common injuries", "Shoulder strain, nose/ear issues, muscle cramps"]
    ],
    modules: ["m1", "m2", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Aquatics Championships", "World Cup artistic swimming"],
    keyTerms: ["Figures", "Scull", "Eggbeater", "Patterns", "Free routine"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Artistic swimming** (formerly synchronised swimming) blends swimming, gymnastics and dance. Athletes perform **figures** (set body positions and movements), **floating patterns**, lifts and choreographed routines to music. It is judged on technical execution and artistic impression \u2014 a fusion of physiology and performance art.` },
      { id: "skills", title: "Core skills", module: "m2", body: `- **Sculling**: tiny hand movements generate lift and propulsion without the arms breaking the surface \u2014 the fundamental support skill.
- **Eggbeater kick**: the alternating leg kick that keeps the torso high in the water for figures and lifts.
- Figures like the **ballet leg** and **crane** require core control and precise hip flexibility.
- **Patterns**: swimmers synchronise paths and positions as a team \u2014 shared timing to the rhythm of the music.` },
      { id: "judging", title: "Judging & scoring", module: "m4", body: `- **Technical routines**: prescribed elements are scored for execution; required figures listed by code.
- **Free routines**: choreography, difficulty of lifts, and artistic impression (music, interpretation) are judged.
- Each routine has a time limit (e.g. duet free ~3 minutes); penalties for touching the bottom.
- Panels score execution (0\u201310) and artistic merit separately in modern scoring.
- Synchronisation penalties deduct from all athletes who drift off the pattern.` },
      { id: "physiology", title: "Physiology & training", module: "m1", body: `- Breath control: swimmers hold their breath under water for long sequences \u2014 anaerobic power with delicate aerobic base.
- The sport builds full-body muscular endurance; shoulders and core carry the load.
- Training includes land work (dance, gymnastics, weights) plus pool figures and routines.
- Hypoxic training and heat loss management are coached carefully to avoid fainting.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder overuse (sculling strain), ear infections from water, sinus issues and muscle cramps.
- Prevention: earplugs/nose clips, proper pool temperature, warm-up, and strength balance for the shoulders.
- Care: rest and shoulder rehab after overuse; never train through vestibular (dizziness) symptoms.` }
    ]
  },
  {
    slug: "open-water",
    title: "Open Water Swimming",
    altNames: "10 km Marathon Swim",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Open water swimming races in lakes, seas and rivers rather than pools \u2014 the Olympic 10 km marathon swim demands navigation, feeding and weather judgement.",
    infobox: [
      ["Invented", "Long-distance swimming tradition, UK/France"],
      ["Governing body", "World Aquatics (FINA)"],
      ["Format", "Individual & relay \u00B7 5\u201310 km standard"],
      ["Course", "Buoyed loop or point-to-point"],
      ["Olympic", "10 km since 2008"],
      ["Common injuries", "Shoulder overuse, hypothermia, sunburn, jellyfish stings"]
    ],
    modules: ["m1", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games (10 km)", "Open Water World Series", "English Channel swims"],
    keyTerms: ["Navigation", "Feeding pontoon", "Sighting", "Cold water", "Pack swimming"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Open water swimming** is racing in natural waters \u2014 oceans, lakes, rivers and channels. The Olympic 10 km marathon swim is swum by solo athletes navigating buoys in a pack. It is one of sport's great tests of endurance, thermal tolerance and self-reliance.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Course**: buoyed loops (e.g. 4 \u00D7 2.5 km) or point-to-point; officials on boats and kayaks patrol.
- **Feeding**: swimmers pause at feeding stations (floating pontoons or fixed platforms) to drink/eat; coaches pass bottles.
- **Navigation**: sighting buoys and swimming the straightest line saves minutes \u2014 drafting the pack is allowed.
- Touching a boat or leaning on a buoy is a foul; stopping to rest on objects is prohibited.
- Water temperature limits and wetsuit rules depend on the race (wetsuits in cold-water events).` },
      { id: "physiology", title: "Physiology & strategy", module: "m3", body: `- **Pacing**: a 10 km swim is ~2 hours at race pace \u2014 predominantly aerobic with periodic surges.
- **Drafting**: swimming on a rival's hip can save up to 5% of energy \u2014 a key race skill.
- Feeding strategy: consistent carbohydrate intake every loop prevents bonking.
- Cold water: peripheral vasoconstriction and heat loss limit performance \u2014 acclimatisation and neoprene decisions matter.
- Race tactics: the pack surges at buoys; winning rests on the final sprint to the finish.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder overuse (swimmer's shoulder); hypothermia in cold events; sunburn, blisters and marine hazards (jellyfish).
- Prevention: acclimatisation, proper hydration/fuel, swimmer's sunscreen, wetsuit checks, and medical support at events \u2014 never swim open water alone in training.` }
    ]
  },
  {
    slug: "surfing",
    title: "Surfing",
    altNames: null,
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Surfing is riding ocean waves on a board \u2014 judged on the quality, power and flow of manoeuvres performed on each wave \u2014 now an Olympic sport.",
    infobox: [
      ["Invented", "Polynesia / Peru (ancient wave riding)"],
      ["Governing body", "ISA (International Surfing Association)"],
      ["Format", "Individual heats, judged"],
      ["Board", "Shortboard ~2 m \u00B7 longboard variants"],
      ["Judging", "Best scoring waves in a heat"],
      ["Olympic", "Summer since Tokyo 2020"],
      ["Common injuries", "Surfer's ear, shoulder strain, rip-current incidents"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "ISA World Surfing Games", "World Surf League (WSL)"],
    keyTerms: ["Take-off", "Cutback", "Aerial", "Rip current", "Barrel"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Surfing** is riding the energy of ocean waves on a board. In heats of 20\u201335 minutes, judges score each surfer's best two waves on commitment, difficulty, power and flow of manoeuvres \u2014 the barrel (riding inside the breaking wave) and the aerial are the modern scoring peaks.` },
      { id: "judging", title: "Rules & judging", module: "m4", body: `- Heats (2\u20133 surfers) run on priority: the surfer with priority owns the next wave \u2014 interference penalties apply.
- **Scoring**: judges award 0\u201310 for each ridden wave; the two best rides count (numeric priority in the WSL).
- Criteria: commitment and degree of difficulty, innovative modern manoeuvres, combination of major manoeuvres, speed, power and flow.
- Interference (dropping in on another surfer's wave) costs a heavy penalty.
- Event formats: round-robin heats into knockout quarterfinals and finals.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Take-off**: the pop-up \u2014 from prone to stance in under a second \u2014 uses the arms as levers to rotate the body into the wave face.
- **Trimming** keeps the board on the steep section of the wave \u2014 weight shifts shift the centre of gravity over the rail.
- **Cutbacks** redirect momentum back toward the pocket; bottom turns set up everything.
- **Paddling** is the engine: 70% of a session is paddling to catch waves \u2014 an upper-body endurance workout.` },
      { id: "psychology", title: "The psychology of the ocean", module: "m5", body: `- **Wave selection** is a strategic decision: patience for a good wave beats paddling for every one.
- Managing fear: rip currents and heavy waves demand arousal control and calm risk assessment.
- The "stoke" culture \u2014 respect for other surfers, the ocean and etiquette \u2014 is a genuine sociology of a sporting community.
- Mental imagery of future waves and manoeuvre rehearsal is used by elite competitors.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- **Surfer's ear**: bony growths in the ear canal from repeated cold water \u2014 earplugs help.
- Shoulder strain from paddling; fin cuts; and the leading ocean danger \u2014 **rip currents** (swim across the current, not against it).
- Prevention: knowing the beach breaks, surf within ability, wear a leash, and always surf with others.` }
    ]
  },
  {
    slug: "canoe-sprint",
    title: "Canoe Sprint",
    altNames: "Canoeing & Kayaking",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Canoe sprint is flat-water racing in kayaks and canoes \u2014 single and team boats over 200\u20131000 m, demanding explosive paddle power and precise technique.",
    infobox: [
      ["Invented", "Indigenous cultures / UK (modern sport)"],
      ["Governing body", "ICF"],
      ["Format", "Individual, pairs, fours"],
      ["Distance", "200 m, 500 m, 1000 m"],
      ["Boats", "Kayak (K) seated \u00B7 Canoe (C) kneeling single-blade"],
      ["Olympic", "Summer since 1936"],
      ["Common injuries", "Shoulder strain, wrist strain, back pain"]
    ],
    modules: ["m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "ICF Canoe Sprint World Championships", "Asian Games"],
    keyTerms: ["Paddle stroke", "Catch", "Pull phase", "Exit", "Lane rope"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Canoe sprint** races kayaks (K \u2014 seated, double-bladed paddle) and canoes (C \u2014 kneeling, single-bladed paddle) over 200 m, 500 m and 1000 m lanes. Crews include singles, pairs (K2/C2) and fours (K4). It is pure paddling speed and power on flat water \u2014 one of the most technical Olympic sports.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- Races run in buoyed lanes over flat water; no wash-riding or crossing lane lines.
- Boats must be within the class weight/size rules \u2014 steerage and hulls inspected at events.
- Rounds: heats, semi-finals and finals; the fastest advance.
- False starts and overtaking rules are enforced by officials; a boat crossing the finish line wins on hull.
- Sprint events use staggered lane starts (the 'rolling start' for longer distances in some rules).` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **The paddle stroke** (kayak): catch, power phase, exit, recovery \u2014 the blade locks into the water as the torso rotates, not the arms alone.
- **Canoe stroke**: the single-blade J-stroke; the kneeling posture frees the torso for powerful rotation.
- Force: the blade is the lever, the body the motor \u2014 trunk rotation delivers more power than the arms can.
- Cadence and glide: high stroke rates (120+ in sprints) with clean blade entry are the speed secret.
- Balance: the canoe's narrow hull requires constant edge control \u2014 proprioception under pressure.` },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Erg training** (paddling ergometers) builds sport-specific cardio and technique out of the water.
- Strength: pulling work (lat, back) and core stabilisation protect the power stroke.
- Interval training over 200\u20131000 m matches the race formats; long distance builds the base.
- Technique breakdown: video analysis of catch and exit is routine at elite level.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder overuse and wrist strain from the repetitive stroke; lower-back pain from prolonged seated/kneeling posture.
- Prevention: pull strength, core work, paddle-size fit, and posture checks.
- Care: R.I.C.E. for acute strain; a wrist that clicks under load needs a technique review before harder training.` }
    ]
  },
  {
    slug: "rowing",
    title: "Rowing",
    altNames: null,
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Rowing propels a boat with oars \u2014 sculling (two oars) and sweep (one oar) events over 2000 m, an endurance sport of pure rhythm and power.",
    infobox: [
      ["Invented", "England (17th\u201319th century boat racing)"],
      ["Governing body", "World Rowing (FISA)"],
      ["Format", "Individual (single) to eights"],
      ["Distance", "2000 m standard"],
      ["Boats", "1x, 2x, 4x, 2-, 4-, 8+ (coxed)"],
      ["Olympic", "Since 1900"],
      ["Common injuries", "Back pain, rib stress fractures, knee overuse"]
    ],
    modules: ["m1", "m2", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Rowing Championships", "Henley Royal Regatta", "Asian Games"],
    keyTerms: ["Catch", "Drive", "Finish", "Recovery", "Ratio"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rowing** is the oldest Olympic endurance sport: athletes push against the water through oars in strict rhythm. **Sculling** uses two oars, **sweep** uses one; crews range from singles to the eight-oared boat. The 2000 m course is rowed in heats of ~5\u20136 minutes.` },
      { id: "equipment", title: "Boats & equipment", module: "m4", body: `- **Boat classes**: 1x (single scull), 2x, 2-, 4x, 4- and 8+ (eight with coxswain).
- The **oar** is a lever pivoting on the rigger; blade shapes vary (smoothie, macon).
- **Sliding seat** lets the legs do the work \u2014 the legs drive the slide, so rowing is half a squat test.
- Cox (in coxed boats) steers and calls the race; in small boats the rower steers with a rudder by foot.
- Boats are weighed and classified by event rules; lightweights are phased out of the Olympic programme.` },
      { id: "technique", title: "The rowing stroke", module: "m2", body: `- **Catch**: blade sinks perpendicular as the legs begin; the drive sequence is legs, back, arms.
- **Drive**: legs push the seat back, torso opens, arms pull to the chest \u2014 one continuous kinetic chain.
- **Finish**: oar exits with a tap-down; **recovery** \u2014 hands away, body over, slide \u2014 is twice as slow as the drive (the ratio).
- **Rhythm**: the slide's smooth return is as important as the drive's power \u2014 the boat speed is not constant but a rhythmic flow.
- Timing matters most in team boats: eight bladders must move as one complete rowing machine.` },
      { id: "training", title: "Training & physiology", module: "m3", body: `- **Ergometer** (erg) sessions are the year-round conditioner \u2014 2000 m tests are the fitness benchmark.
- Rowing is mostly aerobic (60\u201370% for 5\u20136 minute races) with a powerful anaerobic kick.
- Training mix: long steady-state meters, intervals on the erg, and technical water sessions.
- Strength work: legs (squats), back and core; flexibility protects the long stroke range.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Lower-back pain** from the spine's loaded flexion at the catch; rib stress fractures from high loads; knee and wrist overuse.
- Prevention: core stability, progressive loading, technique (keep the back in a neutral lift), and load management on the erg.
- Care: R.I.C.E. and rest for acute back strain; a rib pain that persists needs medical imaging.` }
    ]
  },
  {
    slug: "sailing",
    title: "Sailing",
    altNames: "Yachting",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Sailing races boats with sails over wind-driven courses \u2014 tactical positioning, boat handling and reading the wind decide between near-identical machines.",
    infobox: [
      ["Invented", "Netherlands / England (modern yachting)"],
      ["Governing body", "World Sailing"],
      ["Format", "Fleet racing, match racing, mixed formats"],
      ["Courses", "Windward-leeward triangles"],
      ["Boats", "Dinghies, keelboats, foiling classes"],
      ["Olympic", "Summer since 1900"],
      ["Common injuries", "Shoulder strain, hand abrasions, sun exposure"]
    ],
    modules: ["m2", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "America's Cup", "World Sailing championships", "SailGP"],
    keyTerms: ["Tack", "Gybe", "Windward", "Start line", "Right of way"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Sailing** is racing yachts and dinghies across water using the wind. Race strategy balances boat speed, wind shifts and currents. Modern classes range from the solo Laser/ILCA dinghy to America's Cup foiling monsters \u2014 yet the fundamentals of points of sail and right of way are the same.` },
      { id: "rules", title: "Rules of the race", module: "m4", body: `- **Right of way**: a starboard-tack boat (wind on its right) has priority over port-tack; the leeward (downwind) boat holds right of way over windward.
- **Start**: fleets start behind a line between a committee boat and a pin; barging over early is penalised.
- **Course**: windward-leeward legs \u2014 round the top mark, hoist the spinnaker downwind, repeat.
- Penalty turns: a rule-breaker does a 360\u00B0 (or 720\u00B0) turn; protests are decided on the water or in the jury room.
- Match racing is one-on-one \u2014 the leader controls the other's start.` },
      { id: "technique", title: "Technique & strategy", module: "m2", body: `- **Points of sail**: close-hauled (into the wind), reaching and running \u2014 each changes sail trim and boat angle.
- **Tacking** turns the bow through the wind; **gybing** turns the stern through it \u2014 both are moments of maximum risk and trim change.
- **Wind shifts**: sailing into an increase lifts the course \u2014 the winner reads the shifts minutes ahead.
- Weight placement (hiking/trapeze) offsets the heeling force \u2014 a live lesson in balance and moments.
- Boat speed is pure sail trim: tell-tales show the airflow over the sail \u2014 smooth flow = speed.` },
      { id: "psychology", title: "The thinking sport", module: "m5", body: `- Sailing is decision density: rule application, wind play and risk (when to gybe) under pressure.
- Long races need sustained concentration and team communication in crews.
- **Match racing** is a psychological duel \u2014 baiting and controlling the opponent's moves.
- The offshore tradition \u2014 solo circumnavigations \u2014 is endurance psychology at its extreme.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Shoulder and hand strain from sheets and winches; abrasions and sunburn; risk of capsizing and cold water exposure.
- Prevention: lifejackets/PFDs, harnesses in the cockpit, weather forecasting, and crew safety drills.
- Care: cold-water immersion protocol; hypothermia first aid and re-warming.` }
    ]
  },
  {
    slug: "windsurfing",
    title: "Windsurfing",
    altNames: "Sailboarding",
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Windsurfing is sailing on a board with a free-rotating sail \u2014 the athlete holds the boom and balances over the board, surfing wind and waves at speed.",
    infobox: [
      ["Invented", "USA / France (1960s)"],
      ["Governing body", "World Sailing / PWA"],
      ["Format", "Individual racing, slalom, freestyle"],
      ["Board", "~2.3\u20133 m, finned hull"],
      ["Rig", "Sail, mast, boom \u2014 foot-steered"],
      ["Olympic", "Summer since 1984"],
      ["Common injuries", "Shoulder strain, knee strain, rig-induced bruises"]
    ],
    modules: ["m1", "m2", "m3"],
    court: null,
    verified: false,
    competitions: ["Olympic Games (iQFoil)", "PWA Slalom & Wave Tours", "Formula Windsurfing events"],
    keyTerms: ["Harness", "Water start", "Planing", "Gybe", "Rig"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Windsurfing** combines sailing and surfing: a mast-and-sail rig is attached to a board, and the rider steers by tilting the rig and shifting weight. On strong wind the board **planes** (rises onto its hull) and can travel far faster than the wind itself.` },
      { id: "equipment", title: "Equipment & setup", module: "m4", body: `- **Board**: ~2.3\u20133 m with daggerboard/fin; sizes chosen for wind strength.
- **Rig**: sail, mast, boom and footstraps; the rig rotates freely around the mast foot.
- **Harness**: a waist hook transfers the pull of the sail to the body \u2014 sparing the arms.
- **Uphaul/waters start**: beginners right the rig from the water with the uphaul rope; advanced riders water-start directly.
- Classes: slalom (speed), formula, wave and freestyle variants \u2014 each with equipment rules.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Steering by tilt**: tipping the rig toward you turns downwind; away turns upwind \u2014 the mast becomes a control lever.
- **Planing**: beyond ~15 knots the board lifts off the hull; the rider moves feet over the straps and harnesses the power.
- The **gybe** on a plane \u2014 the powered turn downwind \u2014 is the sport's signature skill.
- Balance uses the rig as a counterweight; the harness redirects sail force through the hips rather than the arms.
- Fitness: isometric strength for the arms, core and knee flexion as the rider absorbs the rig's pull.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Shoulder and knee strain from rig control; bruises from the boom and board; harness misuse strains the back.
- Water hazards: cold water, currents and offshore winds \u2014 never sail beyond swimming limits without backup.
- Prevention: proper harness fit and hook placement, boards-away protocol on land, and weather planning.` }
    ]
  },
  {
    slug: "wakeboarding",
    title: "Wakeboarding",
    altNames: null,
    category: "aquatics",
    emoji: "\u{1F3CA}",
    lede: "Wakeboarding is towed board riding \u2014 a rider is pulled across the water on a directional board, using boat wakes as ramps for jumps, rotations and grabs.",
    infobox: [
      ["Invented", "USA / Australia (1980s)"],
      ["Governing body", "IWWF"],
      ["Format", "Individual \u00B7 judged tricks & cable course"],
      ["Boat", "Purpose-built wake boat / cable system"],
      ["Board", "Directional, fins & bindings"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Knee injuries, shoulder strain, concussions"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["IWWF Wakeboard World Championships", "WWA wakeboard tour", "Cable wake events"],
    keyTerms: ["Wake", "Edging", "Inverts", "Roastbeef grabs", "Cable system"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Wakeboarding** rides a single directional board while towed by a motorboat or a **cable system**. The rider uses the boat's wake as a ramp, launching jumps, inverts and grabbed spins in judged runs \u2014 a mix of surfing, skateboarding and waterskiing.` },
      { id: "equipment", title: "Equipment & setup", module: "m4", body: `- **Board**: ~130\u2013150 cm, with a rocker profile and fins; bindings fixed to the deck.
- **Rope & handle**: the tow rope is kept short (wake riding at ~18\u201322 m); the boat houses are set to build a clean wake.
- **Cable systems**: overhead cables pull riders over lakes without a boat.
- Safety: PFDs, helmets, and spotter-boat protocols are mandatory in organised use.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Edging**: pressuring the heel-side or toe-side rail cuts across the wake \u2014 the boost into a jump comes from the pre-load and release.
- **The jump**: carving up the wake transfers edge pressure into upward lift \u2014 the rope angle converts speed into height.
- **Inverts** (ole flips) rotate the board over the head \u2014 momentum about the rider's long axis.
- Grabs and spins add style \u2014 airborne control is body awareness at its core.
- Falls happen at speed \u2014 learning to release the handle (skip the rope) is the first safety skill.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Knee injuries (MCL/ACL) from hard landings; shoulder strain from rope pulls; head hits from falls.
- Prevention: helmet use, correct bindings, shallow-water avoidance, courteous boat-to-rider signals, and progressive trick learning.
- Care: any head-strike means stopping the session and following concussion return protocols.` }
    ]
  },
  /* --------------------------------------------------------------- TARGET */
  {
    slug: "darts",
    title: "Darts",
    altNames: null,
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Darts is a precision throwing game \u2014 players throw small missiles at a segmented board to reduce 501 down to exactly zero, finishing on a double.",
    infobox: [
      ["Invented", "England (medieval pub roots)"],
      ["Governing body", "PDC / WDF"],
      ["Format", "Individual & pairs \u00B7 legs and sets"],
      ["Board", "35.6 cm \u00D7 45.7 cm oche 2.37 m"],
      ["Scoring", "501 down, double-out finish"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Shoulder strain, wrist strain, elbow overuse"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["PDC World Darts Championship", "Premier League Darts", "WDF World Championships"],
    keyTerms: ["Oche", "Bullseye", "Double", "Checkout", "Ton"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Darts** is played by throwing from a fixed line (the **oche**, 2.37 m) at a circular board numbered 1\u201320 with a bullseye at the centre. Players in a leg race from **501 down to zero**, and must finish on a **double** \u2014 the precision mathematics of the game.` },
      { id: "board", title: "The board & scoring", module: "m4", body: `- **Board**: numbered segments; the **triple ring** (the wire ring at two-thirds radius) trebles, the **double ring** (outer) doubles.
- The bullseye: outer (25, the "single bull") and inner (50).
- **Scoring**: each turn is three darts; a maximum turn of 180 (three treble 20s) is "a ton 80".
- **Checkout**: the final dart must land on a double or the bullseye; going above zero or reaching one (impossible to finish) busts the turn.
- Oche: throw line 2.37 m from the board face, board bull 1.73 m above the floor.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Legs**: first to reach zero wins the leg; **sets** are best-of-legs, matches best-of-sets.
- Alternate throwing order every leg; in pairs, teammates alternate.
- Referees call scores and verify checkouts; disputes go to the board's score checker (the marker).
- Throwing outside the turn, or touching the board, is a foul.
- Tournament draws are seeded; doubles/drawn checkouts decide the winner.` },
      { id: "technique", title: "Technique & psychology", module: "m2", body: `- The throw is a pendulum: shoulder fixed, elbow stable, wrist snap controls release \u2014 a pure lever action with minimal body movement.
- Aiming: pick a specific sector; the eyes and brain compute the parabola of the dart's flight.
- **Consistency** beats power: repeat the same stance, grip and follow-through every throw.
- Psychology: pressure checkouts ("dartitis" \u2014 the yips) make darts a famous study of arousal and routine.
- Strategy: leave favourite checkouts (D20, D18) and force opponents into doubles they dislike.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder, wrist and elbow strain from repeated throws; eye safety \u2014 never pick up fallen darts while someone is throwing.
- Prevention: warm-up, correct stance, grip care, and a clear throwing lane for spectators.` }
    ]
  },
  {
    slug: "billiards",
    title: "Billiards / Snooker",
    altNames: "Pool, Carom",
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Cue sports \u2014 snooker, pool, billiards and carom \u2014 are precision games of striking balls with a cue on a baize table, blending physics, touch and tactics.",
    infobox: [
      ["Invented", "France / England (English billiards)"],
      ["Governing body", "WPBSA / WCBS"],
      ["Format", "Individual & doubles"],
      ["Table", "6 ft\u201312 ft; snooker 12 \u00D7 6 ft"],
      ["Governing", "Cue, balls, baize, cushions"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Shoulder strain, back strain, eye strain"]
    ],
    modules: ["m2", "m5"],
    court: null,
    verified: false,
    competitions: ["World Snooker Championship", "World 9-Ball Championship", "Carom world titles"],
    keyTerms: ["Cue", "Potting", "Break", "Safety shot", "Cushion"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Cue sports** all strike a cue ball with a tapered cue to pot or hit object balls. **Snooker** ranks 15 reds + colours; **pool** (8-ball, 9-ball) is the fast pocket game; **carom** uses a pocketless table. Every code is a study in projectile physics and positional play.` },
      { id: "table", title: "The table & equipment", module: "m4", body: `- **Snooker table**: 12 \u00D7 6 ft with six pockets; the baize cloth and cushion rebound are calibrated.
- **Cue**: tapered stick up to ~147 cm, with a leather tip (chalked for grip).
- **Balls**: snooker \u2014 1 white, 15 reds and 6 colours; pool \u2014 15 object balls + cue.
- The table's "shot clock" and foul rules are enforced by the referee; the baize is brushed and the cloth re-leveled by specialists.
- Carom tables have no pockets \u2014 three-cushion is the elite discipline.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Snooker**: pot a red (1), then a colour (2\u20137), alternating until reds run, then colours in order; a foul gives the opponent 4+ points and possibly a free ball.
- **8-ball**: players claim stripes or solids by first pot; sink the 8 ball last legally.
- **9-ball**: pot the numbered balls in order, the 9 finishing the rack.
- Touching the cue ball twice ("double hit") or playing with no ball contacting a cushion ("no rail") is a foul.
- Frames/matches are referee-arbitrated; penalty points decide close frames.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- The **line-up**: eyes, cue and ball in one plane; the cue as an extension of the shoulder pivot.
- **English (side spin) and screw back**: applying spin changes the follow-after-contact \u2014 collision plus spin is the physics of position play.
- **Cushion geometry**: the "diamond system" lets players aim caroms and cannons by angles \u2014 angle of incidence equals angle of reflection.
- Tactics: the safety shot (leave no pot) is as valuable as the break.
- Concentration and routine are the psychology \u2014 snooker matches can pass seven hours; mental stamina defines champions.` }
    ]
  },
  {
    slug: "bowls",
    title: "Lawn Bowls",
    altNames: "Bowling",
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Lawn bowls rolls biased (asymmetric-weight) balls toward a small jack on a manicured green \u2014 the curve of every bowl is the sport's beautiful strategy.",
    infobox: [
      ["Invented", "England / Egypt (ancient & Tudor roots)"],
      ["Governing body", "World Bowls"],
      ["Format", "Singles, pairs, triples, fours"],
      ["Green", "31\u201340 m square bowling green"],
      ["Bowl", "Biased (weighted) from 1.3\u20131.5 kg"],
      ["Olympic", "Asian Games sport"],
      ["Common injuries", "Knee strain from the delivery lunge, back strain"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["World Bowls Championships", "Commonwealth Games (lawn bowls)", "Asian Games bowls"],
    keyTerms: ["Jack", "Bias", "End", "Head", "Measure"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Lawn bowls** is played on a square green of tightly mown grass. Players deliver **biased bowls** \u2014 each weighted to curve toward one side \u2014 trying to land closest to the small white **jack**. The biased curve turns every end into a geometry problem.` },
      { id: "green", title: "The green & equipment", module: "m4", body: `- **Green**: 31\u201340 m square, divided into rinks by markers (~4.3\u20135.8 m wide).
- **Bowl**: lignum vitae or composite, 1.3\u20131.5 kg, with an offset bias stamped on the side \u2014 the bias is the whole game.
- **Jack**: the target ball; ends are played in both directions.
- Players bowl from a mat at the head; the standard mat position is fixed by the skip.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Ends**: each player delivers their bowls; the jack is moved to a new position each end.
- **Scoring**: after all bowls are delivered, one shot is awarded for each bowl closer to the jack than the opponent's closest bowl.
- Games run to a target count of shots (e.g. 21) or a set time; the first to the target wins.
- The **skip** directs teammates; the lead delivers first; order is fixed.
- Fouls: foot over the mat (a dead bowl is removed), touching a bowl in motion (a direction-changing offence is a penalty).` },
      { id: "technique", title: "Technique & strategy", module: "m2", body: `- The delivery is a controlled one-foot lunge release \u2014 a mundane-looking but precisely balanced pendulum.
- **Bias / curve**: the bowl curves toward its bias side \u2014 immense greens require wider arcs; the "draw" runs parallel to the jack.
- **Heavy vs light**: overshooting (heavy) can switch the head; the "yard-on" weight is practised by all.
- Tactics: play to the back or the forehand side depending on the head; count the shot before delivering.
- Psychology: bowls medals are decided in the last ends \u2014 patience and steady nerves under the scoreboard.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Knee strain from the repeated delivery lunge; back discomfort from stooping; sun exposure on outdoor greens.
- Prevention: warm-up for the delivery leg, correct lunge technique, hats and hydration outdoors.` }
    ]
  },
  {
    slug: "petanque",
    title: "P\u00E9tanque",
    altNames: "Boules",
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "P\u00E9tanque is French boules \u2014 players toss steel balls as close as possible to a small wooden cochonnet, with pointing and shooting duels on any flat surface.",
    infobox: [
      ["Invented", "France (La Ciotat, 1907)"],
      ["Governing body", "FIPJP"],
      ["Format", "Singles, doubles, triples"],
      ["Court", "Any flat open area (bouledrome)"],
      ["Balls", "Steel ~650\u2013800 g"],
      ["Olympic", "Not an Olympic sport (World Games)"],
      ["Common injuries", "Shoulder strain, knee strain, fall risk outdoors"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["P\u00E9tanque World Championships", "World Games (petanque)", "European championships"],
    keyTerms: ["Cochonnet", "Pointing", "Shooting", "Circle (rond)", "Two-point line"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**P\u00E9tanque** is France's beloved steel-ball game. From a drawn circle (**rond**), players roll or toss boules toward the small wooden **cochonnet** (jack). Each team alternates; the team with a boule closer to the jack than the opponents' best wins the point. It is played anywhere flat.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Both feet inside the **rond** at delivery; the throw is underhand.
- The jack must be thrown 6\u201310 m away (within the two-point line) and remain in play.
- **Pointing** places a boule near the jack; **shooting** knocks out an opponent's boule.
- A game is played to **13 points** (15 in some formats); each point scores one per winning boule closer than the rival's best.
- Teams of 3 play; the boules must be the same team for both players in triples (3 boules each in standard rules).
- Fouls: moving the jack illegally, foot fault, and playing another's boule.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **pointing toss**: a soft underarm parabola with backspin \u2014 the boule lands and stops close; the wrist adds the "carreau-soft" control.
- The **shoot**: a hard, fast throw that arrives flat \u2014 momentum and accuracy decided by the follow-through.
- Steel balls are dense \u2014 700 g projectiles; the release angle trades distance for control.
- Strategy: after taking the point, players "point on" \u2014 placing extra boules to protect the point; teams switch roles (pointer/shooter).` }
    ]
  },
  {
    slug: "tenpin-bowling",
    title: "Ten-Pin Bowling",
    altNames: "Bowling",
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Ten-pin bowling rolls a heavy ball down a 18.3 m lane to knock down ten pins in two attempts \u2014 strikes, spares and the pursuit of the perfect 300 game.",
    infobox: [
      ["Invented", "USA (1900s indoor refinement)"],
      ["Governing body", "IBF / WTBA"],
      ["Format", "Individual & team frames"],
      ["Lane", "18.3 m from foul line to head pin"],
      ["Ball", "6\u20137.25 kg, 3 holes"],
      ["Olympic", "Not currently Olympic"],
      ["Common injuries", "Shoulder strain, knee strain, wrist overuse"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["World Bowling Championships", "PBA Tour", "Asian Games (bowling)"],
    keyTerms: ["Strike", "Spare", "Split", "Hook", "Pocket"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Ten-pin bowling** is played on a polished lane where a heavy ball is rolled to knock down **ten pins** set in a triangle. Each **frame** has two rolls; knocking all ten down first roll is a **strike**, in two a **spare**. A perfect game of twelve strikes scores 300.` },
      { id: "lane", title: "The lane & equipment", module: "m4", body: `- **Lane**: 18.29 m from the foul line to the head pin, 1.05 m wide, oiled to control the ball's hook.
- **Pins**: 38 cm, arranged in a 4\u20133\u20132\u20131 triangle; the pocket (between 1 and 3 or 1 and 2 pins) is the strike entry.
- **Ball**: resin balls 6\u20137.25 kg with two or three finger holes; reactive coverstocks hook more.
- Dexterity: ball-speed, rev rate and lane oil conditions are read between frames.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Strike**: all ten pins down on the first roll \u2014 the frame scores 10 plus the next two rolls.
- **Spare**: all down in two rolls \u2014 10 plus the next roll.
- **Open frame**: total knocked down in two rolls.
- The 10th frame allows bonus rolls for a strike/spare.
- Foul: the toe crossing the foul line = that roll counts zero; the ball must stay on the lane.
- League play uses averages and handicap systems to equalise across abilities.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **approach**: a four-step walk with a pendulum swing \u2014 the ball is never thrown, it is swung.
- **The hook**: revolutionary modern release \u2014 fingers rotate the ball, friction on the oil creates the curved entry into the pocket.
- The pendulum swing converts body momentum to ball speed; release height and rev rate control the break point.
- Aiming: use the lane arrows (dows) not the pins \u2014 a consistent target line beats raw power.
- Psychology: the 300-quest adds pressure-management practice \u2014 routine and calm between frames.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder and elbow strain from the swing; knee pain from the sliding release; wrist overuse from the hook.
- Prevention: correct ball weight/fit, slide practice, warm-up, and listening to elbow/shoulder discomfort.` }
    ]
  },
  {
    slug: "axe-throwing",
    title: "Axe Throwing",
    altNames: null,
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Axe throwing hurls a hatchet at a wooden target's bullseye from a fixed line \u2014 a precise, increasingly popular target sport of rotation and follow-through.",
    infobox: [
      ["Invented", "Canada (timber-culture origins)"],
      ["Governing body", "WATL / IATF"],
      ["Format", "Individual & team matches"],
      ["Target", "Wooden board ~2.13 m high"],
      ["Throw distance", "~4.6 m (league)"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Hand blisters, eye hazards, slip/trip risks"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["WATL World Axe Throwing Championship", "Regional axe leagues"],
    keyTerms: ["Bullseye", "Stick", "Clutch", "Rotation line", "Safety lane"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Axe throwing** scores by sticking a hatchet into rings near a wooden target's bullseye from a marked throwing line (~4.6 m). Each hatchet must complete a half-rotation in flight to stick "clean" \u2014 repeating the exact same throw is the whole game.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- League matches: head-to-head, players alternate; higher total wins, longer formats to set points.
- **Scoring**: bullseye (5) centre ring, clutch (double), kill shot \u2014 outside regions (1\u20134); the "kill shot" target can win a frame instantly (WATL rules).
- A hatchet must stick blade-first to score; bounces and ricochets can award the thrower points in code by line.
- Safety rules: one feeder at a time, walk to retrieve when lanes are called clear, and axes only from the throwing line.
- Officials judge stick quality and safety violations.` },
      { id: "technique", title: "Technique & biophysics", module: "m2", body: `- The throw: overhand, the axe rotates exactly once \u2014 distance to the target dictates the rotation; speed and release point pair.
- **Follow-through**: the axe is thrown for the bullseye, not at it \u2014 pointing at the target after release keeps the plane steady.
- Grip: light but secure; thumb on top; the handle's center of gravity decides the hang time.
- Repeatability beats power: the same stance, arm speed and release angle every throw.
- Safety physics: the arena is barricaded; spectators stand behind the line.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hand blisters and splinters; eye protection recommended at all times \u2014 a bouncing axe is unpredictable.
- Prevention: inspecting handles, dry targets, and never retrieving an axe while others throw; minor injuries get basic first aid (bandage, rinse).` }
    ]
  },
  {
    slug: "horseshoes",
    title: "Horseshoes",
    altNames: null,
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Horseshoes tosses metal U-shaped shoes to ring or lean on a stake 12.2 m away \u2014 a classic lawn target game of arc, spin and control.",
    infobox: [
      ["Invented", "England / USA (fired horseshoe roots)"],
      ["Governing body", "NHPA"],
      ["Format", "Singles & doubles (matches)"],
      ["Pit", "Two stakes 40 ft (12.2 m) apart"],
      ["Shoe", "Metal ~1.1 kg"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "A shoulder/elbow strain, hand fatigue"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["NHPA World Horseshoe Pitchers Championships", "State and regional tournaments"],
    keyTerms: ["Ringer", "Leaner", "Pit", "Dead throw", "Score"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Horseshoes** is played in a sand pit around each of two stakes 12.2 m apart. Players toss horseshoes underhand, scoring **ringers** (the shoe rings the stake), leaners, or closer-than-opponent shoes. It is a classic backyard-and-club target sport.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Ringer**: a shoe completely encircling the stake counts 3 points (measured with calipers).
- A **leaner** in some rules scores 1; the closest shoe to the stake scores 1 if within 6 in.
- Matches to 21 or 40 points; pitchers alternate; shoes must land in the pit or on the stake area.
- A "dead throw" (leaving the pit) scores nothing.
- Fairness: after a tied score, "horseshoe and toed" tie-breaks measure distance to the stake.` },
      { id: "technique", title: "Technique & rules", module: "m2", body: `- The underhand toss imparts one **flip** per half of flight \u2014 the shoe rotates so the toe opens last toward the stake.
- A consistent arc (release angle), spin rate and foot position lock the repeating throw.
- Grip: the horseshoe held between thumb and forefinger; weight transfers through the step.
- Tactics: throwing for ringers when opponent leads, controlled draws when you lead.` }
    ]
  },
  {
    slug: "quoits",
    title: "Quoits",
    altNames: "Ring Toss",
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Quoits is a traditional ring-tossing game \u2014 rings thrown onto or near a peg, played on grass or a court, a frequent P.E. recreation classic.",
    infobox: [
      ["Invented", "England (ancient rings-and-pins roots)"],
      ["Governing body", "Quoit associations"],
      ["Format", "Singles & doubles"],
      ["Court", "Two \u2018pins\u2019 11 m apart (standard code)"],
      ["Ring", "Metal or rubber quoit"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Minor shoulder strain, trips"]
    ],
    modules: ["m2", "m3"],
    court: null,
    verified: false,
    competitions: ["Traditional quoits championships", "School and village fete tournaments"],
    keyTerms: ["Ringer", "Hob", "Pitch", "Go", "Score"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Quoits** is one of the oldest ring games: metal or rubber rings are tossed underhand toward a peg ("hob") fixed in a pit or on grass. Ringing the hob (a ringer) is the top score; closest to it wins the point otherwise. It blends skill, pace and tradition.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Ringers** score highest (commonly 2\u20133 points); the nearest quoit to the hob scores 1.
- Players alternate from the pitch line; quoits must land within the scoring area.
- Games to a target score (e.g. 11 or 21); a "no-pitch" (out of bounds) scores nothing.
- In doubles, teammates share the tossing order.
- Ring handling: the ring should land flat and stay; movement of the ring after the toss is judged.` },
      { id: "skills", title: "Skills & movement", module: "m2", body: `- The ring's flight is an underhand paragraph with one spin \u2014 the release angle steers the flat landing.
- Grip and follow-through repeatability make the good quoits thrower consistent.
- Strategy: when the opponent leads near the hob, you must ring to win; when you lead, play safe draws.
- Accessibility: low-impact, co-ed and cheap \u2014 a perfect recreation-education activity.` }
    ]
  },
  {
    slug: "croquet",
    title: "Croquet",
    altNames: null,
    category: "target",
    emoji: "\u{1F3AF}",
    lede: "Croquet strikes wooden balls through a sequence of hoops on a flat lawn using mallets \u2014 a precision game of angles, roquets and hoop-running tactics.",
    infobox: [
      ["Invented", "Ireland / France (lawn-game roots)"],
      ["Governing body", "WCF"],
      ["Format", "Singles (6\u20138 wickets) & doubles"],
      ["Lawn", "Golf-croquet 14 \u00D7 7 m minimum"],
      ["Ball", "9.2 cm wooden/composite balls"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Back strain from stooping, hand fatigue"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["World Croquet Championship", "World Golf Croquet Championship", "National championships"],
    keyTerms: ["Hoop", "Roqet", "Peg", "Croquet stroke", "Clearances"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Croquet** is a lawn game where players use mallets to drive balls through a course of wire **hoops** in a fixed order. At its richest (association croquet), each turn is a chain \u2014 run a hoop, roquet a live ball, and croquet it to continue the break.` },
      { id: "lawn", title: "The lawn & equipment", module: "m4", body: `- **Lawn**: a flat, closely-mown rectangled; boundary lines marked; two clips show the first uncompleted hoop per ball.
- **Hoops**: 9.5 cm (3\/4 in) wide wire wickets driven into the ground.
- **Ball**: solid 9.2 cm diameter; mallets with cylindrical heads strike it.
- Colors: blue, red, black, yellow (and green, pink, brown, white in 8-player games).
- The **peg** in the centre is the game's finish marker.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Association croquet**: balls pass through hoops in a set order (both directions); the game ends when a player pegs out both their balls through the finishing hoop to the peg.
- **Roquet**: hitting another ball grants a continuation \u2014 the "croquet stroke" placement sets the next shot.
- Each player has one turn per round and loses it on a fault (no hoop, no roquet).
- **Golf croquet** is simpler: both sides race through each hoop; no croquet stroke.
- Officials judge faults; penalty strokes are added for foot faults and mis-strikes.` },
      { id: "technique", title: "Technique & strategy", module: "m2", body: `- The mallet stroke is a pendulum again \u2014 swing through the ball, keep the head still, follow the line with the eyes.
- **Hoop-running angles**: approaching dead-center and long-line; angle shots need precise contact.
- **Break building**: sequence your own balls through hoops while controlling the opponent's \u2014 the opponent is a pawn in association croquet.
- Tactics: leave the opponent ball off the break; run the "pioneer" ball ahead for a triple-peat.
- Psychology: slow, measured lawn games reward patience and azimuth planning.` }
    ]
  }
  ]);
})();