/* ==========================================================================
   THE ARENA — Extra Winter & Adventure Articles
   Concise syllabus articles for the remaining snow/ice disciplines and the
   adventure & extreme sports. Appended to window.ARTICLES.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  /* ---------------------------------------------------------------- WINTER */
  {
    slug: "figure-skating",
    title: "Figure Skating",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Figure skating is artistic performance on ice \u2014 jumps, spins and step sequences scored on technical difficulty and artistic impression, in singles, pairs and dance.",
    infobox: [
      ["Invented", "USA / Canada (figures tradition)"],
      ["Governing body", "ISU"],
      ["Format", "Individual, pairs, dance"],
      ["Rink", "Standard 60 \u00D7 30 m ice rink"],
      ["Scoring", "Technical + program component scores"],
      ["Olympic", "Winter since 1908"],
      ["Common injuries", "Ankle injuries, knee overuse, back strain"]
    ],
    modules: ["m1", "m2", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "ISU World Figure Skating Championships", "Grand Prix series"],
    keyTerms: ["Axel", "Lutz", "Spin", "Combination", "Program components"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Figure skating** fuses athletic jumps and spins with choreographed artistry on ice. Skaters perform a **short program** and a **free skate**, judged on element base values plus *program component scores* for composition, interpretation and skating skills.` },
      { id: "rules", title: "Scoring & elements", module: "m4", body: `- **Jumps**: Axel, Lutz, Flip, Loop, Salchow and Toe loop \u2014 each with a base value and GOE (grade of execution) adjustments.
- **Spins**, step sequences and lifts (in pairs/dance) are scored the same way.
- The short program has required elements; the free skate allows more freedom.
- **Program components**: skating skills, transitions, performance, composition, and interpretation \u2014 six-point scale.
- Deductions: falls, prolonged wrong edges, and music-violating choreography.
- Qualification via entries; final score = TES (technical elements) + PCS.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Jumps** convert linear skating speed into rotational hops: the take-off edge, the air rotation and the landing backward are one motion.
- **Spins** maintain a tight rotation axis \u2014 arms in (smaller radius) increase spin rate (conservation of angular momentum).
- **Edges**: inside and outside edges carve the circles figure skating is built on \u2014 pure edge-control mechanics.
- **Lifts**: pair lifts use leverage and counterbalance \u2014 the throwing partner and the lifting axis.
- Choreography runs to music \u2014 tempo and phrasing interpreted with the body.` },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Off-ice: jumps (plyometrics and ballet), strength and flexibility; on-ice: elements in isolation then full programs.
- Jump repetition is monitored for overload; skaters repeat rotations on harnesses and mats.
- Fitness: aerobic capacity for the 4-minute free skate, explosive power for jumps, and ankle/core stability.
- Recovery: skates fitted and blades sharpened weekly; rest days protect the growing skeleton in juniors.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle sprains and stress fractures from jump landings; knee overuse; back strain from lifts in pairs.
- Prevention: proper boot support, jump-spotting technique, core strengthening, and rest.
- Care: R.I.C.E. for acute sprains; growth-plate injuries in young skaters need paediatric review.` }
    ]
  },
  {
    slug: "speed-skating",
    title: "Speed Skating",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Speed skating races athletes on ice over 500 m to 10,000 m \u2014 long-track lanes, clap skates and the aerodynamic low crouch define the physics of speed on ice.",
    infobox: [
      ["Invented", "Netherlands (frozen-canal origins)"],
      ["Governing body", "ISU"],
      ["Format", "Individual, team pursuit, mass start"],
      ["Rink", "400 m long track, two lanes"],
      ["Skates", "Clap skates (hinged blade)"],
      ["Olympic", "Winter since 1924 (men), 1960 (women)"],
      ["Common injuries", "Knee strain, muscle cramps, falls in pack racing"]
    ],
    modules: ["m1", "m2", "m3"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "World Speed Skating Championships", "World Cup circuit"],
    keyTerms: ["Long track", "Short track", "Clap skate", "Lane change", "Aerodynamic crouch"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Speed skating** is ice racing at up to 60+ km/h. **Long track** races two skaters against the clock on a 400 m oval (500 m to 10,000 m); **short track** is pack racing on a tight 111 m rink with contact, overtakes and drama.` },
      { id: "rules", title: "Rules & formats", module: "m4", body: `- **Long track**: both skaters race the same distance, change lanes each lap with a crossing rule; timing to 1/100 s.
- **Team pursuit**: three-on-three relay-style pushes; the team's third finisher decides.
- **Mass start**: 16 starters, sprints for position; points at intermediate laps.
- **Short track**: pack racing \u2014 overtaking is the strategy; officials rule on blocking and dangerous pushes.
- False starts: one allowed, second is a disqualification in individual events.
- **Records** are set on certified rinks under weather-controlled ice.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **crouch**: hips low, one hand behind the back \u2014 minimised frontal area and centre-of-gravity control.
- **Clap skate**: the hinged blade stays on the ice longer, adding the "push-through" that improved times by seconds.
- The stroke is a lateral push \u2014 force through the blade edge, weight transfer, and an aerodynamic glide.
- Cornering: centripetal force through the lean \u2014 the inside arm or nothing leads the turn.
- Fitness: 1500 m is pacing science; 500 m is pure leg power and starts.` },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Off-ice: cycling, strength and lunge-based drills mirror the skating lunge.
- On-ice: low-intensity distance for technique, race-specific intervals for speed.
- The 10,000 m demands massive aerobic capacity with repeated technique under fatigue.
- Recovery and periodisation: late-season peaking for the world championships.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Knee strain from the prolonged crouch; muscle cramps from lactic work; falls in short-track pack racing (protective gear mandatory).
- Prevention: quad/hamstring balance, mobility, and certified protective equipment in short track.` }
    ]
  },
  {
    slug: "curling",
    title: "Curling",
    altNames: "Chess on Ice",
    category: "winter",
    emoji: "\u26F7",
    lede: "Curling slides granite stones toward a target house on ice while teammates sweep to control curl \u2014 a tactical team sport nicknamed 'chess on ice'.",
    infobox: [
      ["Invented", "Scotland (16th century ponds)"],
      ["Governing body", "World Curling"],
      ["Format", "Team \u00B7 4 per side"],
      ["Rink", "Ice sheet ~44.5 m long"],
      ["Stone", "Granite ~19 kg with handle"],
      ["Olympic", "Winter since 1998 (1998 men/women)"],
      ["Common injuries", "Knee strain, back strain, ice-slip injuries"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (curling)", "World Curling Championships", "Brier / Scottish events"],
    keyTerms: ["House", "Skip", "Delivery", "Sweeping", "Hammer"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Curling** is played by two teams of four sliding **stones** down an ice sheet toward the **house** (concentric rings). Sweepers brush the ice in front of the stone to reduce friction, controlling distance and curl. The team placing stones closest to the centre wins the end.` },
      { id: "ice", title: "The sheet & equipment", module: "m4", body: `- **Sheet**: 44.5 m long, 4.75 m wide, with hog lines, centre line and the house (ring of 3.66 m radius).
- **Stone**: 19.1 kg granite, with a handle; it curls (curves) naturally by its rotation.
- **Brooms**: modern synthetic brushes sweep vigorously.
- **Hack**: the foot anchor at the delivery end; players deliver from a sliding lunge.
- Timing: each stone has 38 seconds to reach the far hog line.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Ends**: each team delivers eight stones (alternating); the closest stone(s) to the centre count 1 point each.
- **Hammer**: the last stone (second end advantage) is given to the loser of the previous end.
- **Free guard zone**: the first four stones of an end may not be removed from play (protection rule).
- Umpire-less etiquette: teams call their own fouls; officials judge hog-line violations.
- Match to 10 ends; a tie goes to an extra end.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- **Delivery**: a slides-out lunge \u2014 the stone released from the slide line with rotation; the release point decides the curl.
- **Sweeping** heats the ice, lowering friction \u2014 a swept stone travels farther and straighter (temperature effects on friction).
- **Curl**: rotation makes the stone veer \u2014 sweeping balances curve against distance.
- Strategy: guard shots, draw shots and take-outs (removing opposing stones) \u2014 the skip reads ice and calls every stone.
- Psychology: quiet concentration between shots; the "hurry hard!" urgency of the closing ends.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Knee and back strain from the sliding delivery; slips on the ice \u2014 gripper footwear mandatory.
- Prevention: warm-up slides, correct broom technique (mainly arm sweeps), proper grip shoes.` }
    ]
  },
  {
    slug: "ice-dancing",
    title: "Ice Dance",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Ice dance is the partnered discipline of figure skating \u2014 couples perform dance programs to music with edge work, lifts and a ban on throws and jumps above one rotation.",
    infobox: [
      ["Invented", "England / USA (dance on ice)"],
      ["Governing body", "ISU"],
      ["Format", "Pairs (ice dance)"],
      ["Rink", "Standard ice rink"],
      ["Scoring", "Rhythm + free dance"],
      ["Olympic", "Winter since 1976"],
      ["Common injuries", "Ankle sprains, knee overuse, lift-related strain"]
    ],
    modules: ["m2", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (ice dance)", "ISU World Championships", "Grand Prix dance events"],
    keyTerms: ["Compulsory dance", "Lift regulation", "Edges", "Close dance hold", "Program components"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Ice dance** pairs a couple in choreographed dancing on ice \u2014 no throws, and jumps above one rotation are banned \u2014 so the emphasis is on **edge quality, close-hold skating, lifts and rhythm**. Programs are danced to music with a compulsory rhythm element per season.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Rhythm dance**: a fixed set of beats/pattern and required elements.
- **Free dance**: full choreography under time limits.
- **Lift rules**: lifts have types (stationary, curve, rotational, reverse) and height restrictions in the rhythm dance.
- The couple must skate in **closed holds** for set portions \u2014 contact rules distinguish dance from pairs skating.
- Jumps over one rotation and lifts above shoulder height in the rhythm dance are penalised.
- Scoring: technical elements + program components (like figure skating).` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Edge work**: deep edges (like the three-turn and the LFO-to-RBO) carry the dance \u2014 mastery of blade-to-ice angle.
- **Close hold**: partner balance and synchronised footwork maintain the frame.
- Lifts use leverage: the lift starts from edge speed, the female pivots over the partner's shoulder line.
- Synchrony: the couple mirrors or contrasts timing to the music \u2014 a physical partnership in rhythm.
- Programs run to full musicality \u2014 interpretation is a scored component.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle sprains and tendinitis from edges; knee overuse from dance patterns; lift-related back strain.
- Prevention: boot support, shoulder and core strength, and careful lift progression.` }
    ]
  },
  {
    slug: "short-track",
    title: "Short Track Speed Skating",
    altNames: "Short Track",
    category: "winter",
    emoji: "\u26F7",
    lede: "Short track speed skating is pack racing on a tight 111 m rink \u2014 overtakes, contact and photo finishes, dominated by Korea, Canada and China.",
    infobox: [
      ["Invented", "Canada / Korea (pack skating)"],
      ["Governing body", "ISU"],
      ["Format", "Individual & relay"],
      ["Rink", "111.12 m ice oval"],
      ["Distances", "500, 1000, 1500 m"],
      ["Olympic", "Winter since 1992"],
      ["Common injuries", "Falls, collisions, ankle and knee injuries"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "ISU Short Track World Championships", "World Cup short-track"],
    keyTerms: ["Pack racing", "Overtake", "Relay push", "Impede", "Photo finish"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Short track** races multiple skaters together on a compact 111.12 m oval. With 4\u20137 skaters touching speeds over 50 km/h, races are won by tactical position, slick overtakes and clean passes \u2014 and decided by photo finish.` },
      { id: "rules", title: "Rules & racing", module: "m4", body: `- Races start from staggered or time-trial draws; officials judge false starts (one allowed).
- **Overtakes**: passing must be clean \u2014 blocking or impeding an overtaking skater is a penalty.
- **Relays**: teams of four, with pushes as teammates exchange \u2014 the final skater on the last exchange finishes.
- Falls: a fall that causes a rival's crash can lead to a disqualification if judged intentional/impenetrable.
- Officials: referees and video review confirm finish line and penalties.
- Distances: 500, 1000, 1500 m and relays.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Tight-tracking**: drafting in the leader's slipstream saves energy; the leader dictates the lane.
- **Overtake lanes**: wide or narrow \u2014 a pass on the inside requires a sharp edge change.
- Cornering: extreme lean with hands on the ice \u2014 centripetal force balances the body.
- The start: explosive first stride \u2014 a 500 m is decided in the first 20 m.
- Fitness: repeated 500 m sprints; lactate tolerance powers the pack pace.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Falls and collisions cause ankle, knee and wrist injuries, and concussions.
- Protection: helmets with full-face shields, neck guards, knee/elbow pads and shin guards are mandatory.
- Barrier care: mats around the rink absorb impacts; any head impact triggers immediate removal protocols.` }
    ]
  },
  {
    slug: "alpine-skiing",
    title: "Alpine Skiing",
    altNames: "Downhill, Slalom",
    category: "winter",
    emoji: "\u26F7",
    lede: "Alpine skiing races down groomed slopes through gates \u2014 from hairpin slalom to 100+ km/h downhill \u2014 testing speed, control and the athletic edge hold.",
    infobox: [
      ["Invented", "Austria / Norway (early skis)"],
      ["Governing body", "FIS"],
      ["Format", "Individual \u00B7 speed & technical"],
      ["Disciplines", "Slalom, GS, Super-G, Downhill, Combined"],
      ["Course", "Gated slopes, varied fall lines"],
      ["Olympic", "Winter since 1936"],
      ["Common injuries", "ACL injuries, shoulder injuries, concussions"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "FIS Alpine World Ski Championships", "FIS World Cup alpine"],
    keyTerms: ["Gates", "Carving", "Schuss", "Fall line", "Salmon"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Alpine skiing** races athletes down gated courses. **Slalom** and **giant slalom** are technical (tight, quick turns); **super-G** and **downhill** are speed events over 100 km/h. Every discipline rewards the carved turn \u2014 the athletic essence of the sport.` },
      { id: "disciplines", title: "Disciplines & rules", module: "m4", body: `- **Slalom**: short, tight gates; two runs, best total time wins.
- **Giant slalom**: wider-spaced gates, higher speeds; two runs.
- **Super-G**: speed discipline, one run, minimum training allowed.
- **Downhill**: the fastest \u2014 2+ minutes down the steepest course; one run.
- **Combined**: one slalom + one super-G run summed.
- Missing a gate (both skis outside) is disqualification; bib order and course setting follow FIS rules.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Carving**: the ski edges into the snow so it turns itself \u2014 the skier leans the body into the hill, rebuilding edge grip.
- **Angulation**: knees and hips angled inward against the outside leg \u2014 the foundation of a carved turn.
- **Dynamic balance**: the centre of mass moves continuously; the ski's radius and speed compatibility set the turn.
- **Schuss**: straight-lining a fall line at speed \u2014 aerodynamics and courage.
- Purpose-built courses: the gates force the fastest line \u2014 a race of precision and mental mapping of the piste.` },
      { id: "training", title: "Training & safety", module: "m3", body: `- Off-season: skiing is built on leg strength, balance boards and dryslope turns.
- On-snow: course training, video analysis of the turn, and dry training for specific gates.
- Fitness: muscular endurance of the legs, explosive power, and strong knees and core.
- Safety: helmets mandatory in competition, race fences and course inspection (the "course report") before every run.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **ACL tears** — the classic alpine ski injury from twisting falls with the ski planted.
- Shoulder dislocations and head injuries from falls \u2014 helmets save lives in downhill.
- Prevention: proper binding release settings, warm-up, technical progression, and never outrunning your ability.` }
    ]
  },
  {
    slug: "cross-country-skiing",
    title: "Cross-Country Skiing",
    altNames: "Nordic Skiing",
    category: "winter",
    emoji: "\u26F7",
    lede: "Cross-country skiing is aerobic skiing across snow terrain \u2014 classic diagonal stride and the skating technique, raced over 10\u201350 km.",
    infobox: [
      ["Invented", "Norway (ancient Nordic travel)"],
      ["Governing body", "FIS"],
      ["Format", "Individual, sprint, team & relay"],
      ["Technique", "Classic & free (skate)"],
      ["Course", "~30 m wide groomed trails, varied terrain"],
      ["Olympic", "Winter since 1924"],
      ["Common injuries", "Shoulder strain, knee overuse, blisters"]
    ],
    modules: ["m1", "m3"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "FIS World Championships", "Vasaloppet (long distance)"],
    keyTerms: ["Diagonal stride", "Skate", "Double pole", "Grooming", "Sprint"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Cross-country skiing** is the aerobic king of winter sports: athletes glide over groomed trails using either the **classic** diagonal stride or the **skate** (V-step) technique. It is Finland's and Norway's national passion and one of the most demanding endurance sports.` },
      { id: "technique", title: "The two techniques", module: "m2", body: `- **Classic**: the diagonal stride \u2014 arms pole and legs glide in a synchronous diagonal rhythm; the grip zone wax or skins grip the track.
- **Skate**: a V-step pushing off each ski on groomed hard track \u2014 faster and more aerobic.
- **Double pole**: arms power both poles together to glide \u2014 a huge upper-body effort.
- **Uphill/downhill**: the classic "herringbone" climb and the tucked descent.
- Biomechanics: the pole plants create propulsion, legs glide \u2014 an efficient full-body machine.` },
      { id: "rules", title: "Formats & rules", module: "m4", body: `- **Individual time trials**: staggered starts, fastest time wins.
- **Sprints**: head-to-head heats of ~1.3 km on a loop \u2014 elimination knockout to the final six.
- **Team sprint and relays**: tag-style exchanges.
- **Mass start (marathon)**: pack racing over 30\u201350 km \u2014 strategy and drafting.
- Lane rules, changing-track etiquette and wavestart formats follow FIS regulations.
- Equipment classes: classic vs skate skis registered by length and binding.` },
      { id: "training", title: "Training & physiology", module: "m3", body: `- The sport is 80%+ aerobic \u2014 VO2 max values rank among the highest in sport.
- Training: endless low-intensity base, threshold intervals, double-pole strength work.
- Poling power and core rotation feed the glide \u2014 upper-body strength work is indispensable.
- Waxing and equipment selection optimise grip/glide for the snow.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder and back strain from poling (double-pole overuse); knee overuse in classic; foot blisters.
- Prevention: strength, correct pole length, technique drills, and gradual volume build-up.` }
    ]
  },
  {
    slug: "ski-jumping",
    title: "Ski Jumping",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Ski jumping launches athletes off a ramp into a 100 m+ glide \u2014 a precise study of aerodynamics, position and the 'V-style' flight technique.",
    infobox: [
      ["Invented", "Norway (19th century ramps)"],
      ["Governing body", "FIS"],
      ["Format", "Individual & team"],
      ["Ramp", "Normal, large & flying hills"],
      ["Flight", "V-style, forward lean"],
      ["Olympic", "Winter since 1924"],
      ["Common injuries", "Landing-related knee injuries, shoulder strain"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games", "FIS Ski Flying World Championships", "FIS World Cup jumping"],
    keyTerms: ["K point", "V-style", "Flight phase", "Telemark landing", "Gate"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Ski jumping** sends athletes off a ramp to fly as far as possible while holding perfect form. Points come from distance and judges' style marks. The **V-style** \u2014 skis spread in a V \u2014 and a forward-tucked body position generate the lift that carries jumpers 100\u2013250 m.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Distance points**: measured at the K point (construction point) and beyond \u2014 large hill point value per metre.
- **Style marks**: five judges score form \u2014 flight position, landing and the **telemark** (one-knee landing).
- **Wind and gate compensation**: in-run gates and wind conditions are calibrated so fairness is preserved.
- A crash in the flight or an uncontrolled landing reduces the score.
- Events: individual normal & large hill, plus team events.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- **In-run**: the crouch tuck \u2014 arms back and minimal frontal area build speed (~25 m/s) down the ramp.
- **Take-off**: at the table, the jumper launches body and skis forward — raising the centre of mass into flight.
- **V-style flight**: the skis spread to ~30\u00B0, arms along the sides, the body leaning; the skis and body form the wing that generates lift and control.
- **Landing**: transition to the telemark \u2014 one leg forward, absorbing the impact.
- Aerodynamics: lift-to-drag balance defines who flies furthest \u2014 a lesson in fluid mechanics.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Hearts in the mouth landings: knee sprains and shoulder impacts at landing; crashes when under-rotated.
- Prevention: certified ramps, helmet and suit layers, telemark-landing practice, and jumping only under supervision and conditions assessment.` }
    ]
  },
  {
    slug: "bobsleigh",
    title: "Bobsleigh",
    altNames: "Bobsled",
    category: "winter",
    emoji: "\u26F7",
    lede: "Bobsleigh is a team race down a banked ice track \u2014 crews push a steerable sled, pile in, and let gravity and track design deliver 120+ km/h runs.",
    infobox: [
      ["Invented", "Switzerland (1890s hotel-sport roots)"],
      ["Governing body", "IBSF"],
      ["Format", "Team \u00B7 2 & 4-man / 2-woman"],
      ["Track", "Ice channel, banked curves"],
      ["Sled", "Steerable steel-framed bobsled"],
      ["Olympic", "Winter since 1924 (men), 2002 (women)"],
      ["Common injuries", "Head injuries (rare but severe), muscle strains from push"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (bobsleigh)", "IBSF World Championships", "World Cup bobsleigh"],
    keyTerms: ["Push phase", "Sled lines", "Banked curve", "Driver", "Brakesman"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Bobsleigh** is the fastest team sled sport: a 2- or 4-person crew pushes a sleek sled from a standing start, jumps aboard, and the driver steers the tightest line down a banked ice track. Runs exceed 1300 m with forces over 5 g in curves.` },
      { id: "track", title: "The track & sled", module: "m4", body: `- **IBSF tracks**: ~1200\u20132600 m, refrigerated ice, with 15\u201320 banked curves.
- **Sled**: steel-framed, fibreglass shell, runners; steerable by a driver's two steering ropes.
- The 4-man sled carries a crew of four, 2-man two; weights are regulated (max team weight limits).
- **Push start**: the crew sprints 50 m alongside and jumps in \u2014 the start is decided in the push.
- Sled design: aerodynamics and runner settings are hot-rodded per track.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Races: 2 runs (4-run in championships); the aggregate time decides.
- The 4-man sled is driven by the **driver**, braked by the **brakesman**; crew order and pushing are fixed.
- Officials control starting gates; push-order and sled weight are checked.
- Falls and crashes: a crew must complete safely; sled damage requires repairs under supervision.
- Weather/ice conditions delay starts for fairness \u2014 track inspection is part of the schedule.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- The **push phase** is a sprint: force applied to the sled converts human power into start speed \u2014 the fastest push wins the run.
- **Steering lines**: the driver cuts the apex of each banked curve to keep the sled on the shortest, highest-speed line.
- Cornering: centripetal force holds the sled in the bank; too slow falls inside, too fast flies high.
- The crew's weight shifts (front/back) fine-tune the runner grip \u2014 collective movement, not just the driver.
- Aerodynamics: the crew tucks into the shell on the straight.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Crashes on banked bobsled tracks can cause severe head and spinal injuries \u2014 helmets and the FIBT sled standards mitigate.
- Muscle strains from the explosive push; cold-exposure.
- Prevention: certified tracks, sled safety audits, and driver training on lower hills.` }
    ]
  },
  {
    slug: "luge",
    title: "Luge",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Luge is the fastest sled on ice \u2014 athletes lie supine (feet-first) on a tiny sled and steer by leg and shoulder pressure, touching 140+ km/h.",
    infobox: [
      ["Invented", "Switzerland (19th century)"],
      ["Governing body", "FIL"],
      ["Format", "Individual & doubles"],
      ["Track", "Banked ice up to 1300 m"],
      ["Posture", "Supine, head back"],
      ["Olympic", "Winter since 1964"],
      ["Common injuries", "Concussion (rare but serious), leg and shoulder strain"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (luge)", "FIL World Championships", "FIL World Cup"],
    keyTerms: ["Supine", "Steering", "Start handles", "Ice runner", "Time trial"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Luge** (French "sled") sends athletes feet-first, face-up, under an oval at 140+ km/h. With no brakes and only body steering \u2014 leg pressure on the runners and shoulder leverage \u2014 it is among the most exposed sports in the Winter Games.` },
      { id: "rules", title: "Rules & racing", module: "m4", body: `- **Individual**: two runs over two days, fastest aggregate time wins.
- **Doubles**: one sled, two athletes; one run per day.
- The **mass start** (new team-race) is a combined 6-athlete relay format for the Olympics.
- Officials check sled weights, runner temperatures and handle positions.
- Starts: from handles with seated launch \u2014 a push of 0.5\u20131 s at the top.
- Photo finish decides hundredths of a second.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- **Streamlining**: the supine position with head tucked low and arms flat gives the smallest drag \u2014 aerodynamics decides speed.
- **Steering**: leg and knee pressure on the runners bends the sled; shoulder leans shift weight over the curves.
- **The curves**: the athlete holds a tight apex line; the sled's runner contact and ice temperature matter.
- Starts: explosive handles pull into the board \u2014 the launch phase is a max-power burst.
- G-force: up to 5\u20136 g pulls through banked curves \u2014 neck and core strength protect the body.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- High-speed crashes risk head injuries \u2014 full-face helmets and the FIL safety sleds are mandatory.
- Leg and neck strain from sustained g; cold exposure on tracks.
- Prevention: certified tracks, run-n-offs zones, and cockpit standards.` }
    ]
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Skeleton is ice sledding head-first, face-down, on a small sled \u2014 the bravest line of the sliding sports, steering with shoulder and toe pressure.",
    infobox: [
      ["Invented", "England (open sled at St. Moritz)"],
      ["Governing body", "IBSF"],
      ["Format", "Individual (heads-down)"],
      ["Track", "Banked ice ~1200\u20131600 m"],
      ["Posture", "Prone, head-first"],
      ["Olympic", "Winter 1928/1948; revived 2002"],
      ["Common injuries", "Concussion risk, shoulder scrapes, neck strain"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (skeleton)", "IBSF World Championships", "World Cup skeleton"],
    keyTerms: ["Head-first", "Starter", "Runners", "Rolls", "Groove"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Skeleton** is the sliding sport of one athlete lying **prone, head-first** on a tiny sled. Athletes sprint, dive and slide at over 130 km/h, steering with the shoulders and toes \u2014 a spectacular and exposed contest decided over four runs.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Four runs** (individual): times summed; the fastest aggregate wins.
- The **push start**: a 30\u201350 m sprint finish time adds into the run time.
- Steering: shoulder pressure tips the runner edge; toe taps steer the curve.
- Track and sled certification: runners, weights and safety harnesses (no covers past hip) are checked.
- Men and women race the same tracks on separate schedules.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- **Prone aerodynamics**: the body is a projectile \u2014 head down, arms tight, chin tucked \u2014 minimal drag is everything.
- **Steering**: a head/chin and shoulder tap presses the sled's edge \u2014 the athlete "impresses" the runner into the ice.
- Curves: the head-first posture lowers the centre of gravity, holding an extreme lean.
- Starts: the chinstrap launch and diving entry must be perfected under pressure.
- g-forces from curves demand strong neck flexors.` },
      { id: "safety", title: "Safety & injuries", module: "m6", body: `- Head-first crashes can be severe \u2014 full-face helmets and run-offs are mandated.
- Shoulder and neck strain from steering under g.
- Prevention: graduated speed on training tracks; certified sleds; no training without supervision.` }
    ]
  },
  {
    slug: "snowboarding",
    title: "Snowboarding",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Snowboarding rides a single board down snow \u2014 freestyle (halfpipe, slopestyle), racing (parallel slalom, snowboard cross) and freeride disciplines at the Olympics.",
    infobox: [
      ["Invented", "USA (1960s Sherman Poppen)"],
      ["Governing body", "FIS / World Snowboard Federation"],
      ["Format", "Individual & team \u00B7 freestyle/race"],
      ["Disciplines", "Halfpipe, slopestyle, parallel, cross"],
      ["Board", "Directional or twin-tip with bindings"],
      ["Olympic", "Winter since 1998"],
      ["Common injuries", "Wrist fractures, ACL injuries, concussions"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (snowboard)", "FIS World Championships", "World Snowboard Tour"],
    keyTerms: ["Carve", "Ollie", "Halfpipe", "Slopestyle", "Switch"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Snowboarding** descends a single board on packed snow. Olympic disciplines split into **freestyle** (halfpipe, slopestyle \u2014 judged aerial tricks), **racing** (parallel slalom, giant slalom) and **snowboard cross** (head-to-head racing down a track with jumps).` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Halfpipe**: judged runs \u2014 amplitude, difficulty, variety and execution of the biggest airs.
- **Slopestyle**: kickers and rails; fall penalties.
- **Parallel events**: two riders race identical courses side by side \u2014 time difference and gates decided (missed gates penalised).
- **Snowboard cross**: elimination heats of 4\u20136 \u2014 clear passes win, contact fouls may disqualify.
- Qualifying and finals formats follow FIS; judged runs use five judges.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Edging**: the board carves on heel and toe edges \u2014 the rider shifts the centre of gravity and presses the edge into the snow.
- **Ollie**: the rider pops the nose off the snow \u2014 the jumping base of all freestyle tricks.
- **Air tricks**: spins and flips use the board's tail to load and release; grabs control the rotation axis.
- **Switch**: riding "backwards" doubles the trick options \u2014 symmetry is a skill category.
- Fitness: leg strength and explosive jumps build the pop; core protects the landing.` },
      { id: "culture", title: "Psychology & culture", module: "m5", body: `- Snowboarding grew from counter-culture roots \u2014 a sociology case of a sport "born in rebellion" gaining Olympics status.
- Freestyle judging rewards creativity: expression of style is scored.
- Risk management: park etiquette, respecting speed limits and terrain park rules.
- Concentration in the halfpipe: every run is a mental choreography of the next trick.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Wrist fractures** (falling on outstretched hands \u2014 wear wrist guards), knee ligament injuries, concussions.
- Prevention: helmets, wrist protection, progressive terrain, and knowing your edge before the jumps.
- Care: R.I.C.E. and immediate head-protocol for whiplash impacts.` }
    ]
  },
  {
    slug: "biathlon",
    title: "Biathlon",
    altNames: null,
    category: "winter",
    emoji: "\u26F7",
    lede: "Biathlon combines cross-country skiing with rifle shooting \u2014 athletes ski laps and stop to shoot prone and standing, with penalties for misses riding on the course.",
    infobox: [
      ["Invented", "Norway / Sweden (military patrol roots)"],
      ["Governing body", "IBU"],
      ["Format", "Individual, sprint, pursuit, relay"],
      ["Course", "Nordic trails + shooting range"],
      ["Rifle", "Small-bore .22, 10 m targets"],
      ["Olympic", "Winter since 1960"],
      ["Common injuries", "Shoulder/back strain, ski overuse"]
    ],
    modules: ["m2", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Winter Games (biathlon)", "IBU World Championships", "Biathlon World Cup"],
    keyTerms: ["Shooting range", "Prone", "Standing", "Penalty loop", "Bonus loop"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Biathlon** pairs cross-country skiing with precision rifle shooting: athletes ski laps, then stop at the range to shoot five targets **prone** and five **standing**. Each miss costs a penalty loop or a minute \u2014 the sport is a high-stakes shift between max-effort skiing and perfect calm marksmanship.` },
      { id: "rules", title: "Formats & scoring", module: "m4", body: `- **Individual**: 20 km, four shooting rounds; each miss adds a penalty minute.
- **Sprint**: 10 km, two shoots; misses run a 150 m penalty loop each.
- **Pursuit**: start times from qualification gaps \u2014 the leader starts first.
- **Mass start**: 30 athletes start together; a miss costs a 25 m penalty loop.
- Relays: each skier two shoots; three spare rounds reload \u2014 further misses mean loop penalties.
- The shooting line: skis must stop within the lane; the rifle is shouldered with the sling only prone.` },
      { id: "skills", title: "Skills & physiology", module: "m3", body: `- **Shooting under fatigue**: heart rate 150+ bpm; athletes regulate breathing and steady the rifle between shots in <30 s.
- **Prone** is steadier (body support) and faster; **standing** is harder and slower.
- The **transition**: skiing tempo is quickly lowered approaching the range — heart-rate management is everything.
- Skiing: the classic race distance for biathlon is classic technique-based (or skate in some formats).
- Fitness: an engineer's blend of aerobic capacity and fine-motor precision under load.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder and back strain from rifle carriage; ski-related overuse in the lower limbs.
- Safety: guns always carried muzzle-forward and discharged only on range commands — a strict safety culture at every level.` }
    ]
  },
  /* ------------------------------------------------------------- ADVENTURE */
  {
    slug: "climbing",
    title: "Sport Climbing",
    altNames: "Bouldering, Lead, Speed",
    category: "adventure",
    emoji: "\u26F3",
    lede: "Sport climbing scales synthetic walls in three Olympic formats \u2014 bouldering (power), lead (endurance) and speed (reaction) \u2014 on certified plastic holds.",
    infobox: [
      ["Invented", "France / USA (indoor climbing boom)"],
      ["Governing body", "IFSC"],
      ["Format", "Individual \u00B7 boulder, lead, speed"],
      ["Route", "Indoor walls, judged formats"],
      ["Safety", "Ropes, harnesses, crash pads"],
      ["Olympic", "Summer since Tokyo 2020"],
      ["Common injuries", "Finger pulley injuries, shoulder strain, ankle sprains"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games (sport climbing)", "IFSC World Championships", "World Cup bouldering/lead/speed"],
    keyTerms: ["Boulder", "Toprope/lead", "Flash", "Crux", "Send"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Sport climbing** competitions take place on artificial walls. **Bouldering**: short powerful problems over mats, no rope. **Lead**: climbing to the top of a tall route while clipping protection. **Speed**: racing a fixed 15 m wall against the clock. The Olympic combined format links all three.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Bouldering**: 4\u20136 problems; tops and zones score; fewer attempts win ties.
- **Lead**: highest hold reached tallies; final placements by height and time.
- **Speed**: a standard 15 m wall; two racers, the fastest to the buzzer wins.
- Judging: attempts, falls, and "zone" versus "top" hold classifications are observed by officials and video.
- Route-setting is deliberate: walls are redefined each event (before each round) to keep difficulty and safety.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Handholds**: the crimp, pinch and jug \u2014 each requires specific finger strength and direction.
- **Footwork**: precise, quiet feet on the edges \u2014 efficient movement overcomes strength.
- **Body position**: hips close to the wall; turning the hip toward the hold extends reach.
- **Static vs dynamic**: technique sequences vs powerful dynos (jumps) — both judged factors.
- Momentum and control: a dyno transfers the body's force to the holds; the two-line safety system keeps it safe.` },
      { id: "training", title: "Training & safety", module: "m3", body: `- Strength: hangboards and campus boards build finger and grip strength gradually.
- Endurance: route repetitions and rep schemes for lead.
- Power: bouldering circuits, plyometrics for dynos.
- Technique: route reading and rehearsal improve the crux-solving.
- Recovery and pulley care are essential \u2014 fingers are the sport's currency; load them progressively.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Pulley injuries** (finger tendons) \u2014 closed-crimp overload; shoulder and elbow strain; ankle sprains from failed dyno landings.
- Prevention: progressive hangboard work, open-hand gripping preference, full warm-up, and crash-pad placement.
- Acute pulley pain = rest, taping and professional review.` }
    ]
  },
  {
    slug: "skateboarding",
    title: "Skateboarding",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Skateboarding rides a wooden board on urethane wheels \u2014 street, park and vert tricks judged on difficulty, execution, flow and originality at the Olympics.",
    infobox: [
      ["Invented", "USA (1950s surf-culture origin)"],
      ["Governing body", "World Skate"],
      ["Format", "Individual \u00B7 street & park judged"],
      ["Board", "Deck ~80 cm, trucks, wheels"],
      ["Tricks", "Ollie, kickflip, slide, grind"],
      ["Olympic", "Summer since Tokyo 2020"],
      ["Common injuries", "Wrist fractures, ankle sprains, concussions"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games (skateboarding)", "World Skate championships", "X Games street & park"],
    keyTerms: ["Ollie", "Kickflip", "Grind", "Slide", "Line"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Skateboarding** is riding and performing tricks on a four-wheeled board. Olympic **street** mixes rails and ledges, **park** runs bowl-shaped terrain. Riders are scored on the difficulty, execution and flow of their runs and best single tricks.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Street**: two 45-second runs + best trick; obstacles (stairs, rails, ledges) are the canvas.
- **Park**: a 45-second run on bowls and transitions; amplitude and line count.
- Scores: five judges, 0\u201310; difficulty, execution, variety, originality and "consistency" panels.
- Falls and bails stop the run timer only in some formats.
- Seeding by qualifying ranks; finals decide the medals.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **ollie** \u2014 the jumping base: pop the tail, slide the front foot up, level the board mid-air.
- **Trick extensions**: kickflips, heelflips and grabs rotate the board around axes with foot flick.
- **Grinds and slides**: the trucks grind a rail while the board maintains balance \u2014 edge and rail contact control.
- Weight and momentum: transitions use centrifugal force up the bowls; the body stays low.
- Physics: pop height, pop timing and weight shift decide every trick.` },
      { id: "culture", title: "Culture & psychology", module: "m5", body: `- Born from surf culture in California, skateboarding grew from outsider subculture to Olympic sport \u2014 a sociology lesson in assimilation.
- Judging rewards style and originality \u2014 "flow" is an aesthetic category of its own.
- Risk-reward psychology: riders choose tricks under the pressure of a 45-second clock.
- Peer respect and street credibility shape the scenes' norms.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Wrist fractures** (falling forward) and ankle sprains; heel bruises; concussions from slams.
- Prevention: skatepark etiquette, helmets, wrist guards for beginners, and progressive trick learning.
- Care: R.I.C.E. and the standard head-injury protocol for any head strike.` }
    ]
  },
  {
    slug: "parkour",
    title: "Parkour / Free Running",
    altNames: "Art du D\u00E9placement",
    category: "adventure",
    emoji: "\u26F3",
    lede: "Parkour is moving efficiently through environments \u2014 vaults, jumps, climbs and rolls \u2014 treating the urban landscape as an obstacle course of movement.",
    infobox: [
      ["Invented", "France (David Belle, 1980s)"],
      ["Governing body", "International Parkour Federation"],
      ["Format", "Individual \u00B7 artistic & speed competitions"],
      ["Environment", "Urban and natural terrain"],
      ["Skills", "Vaults, wall runs, precision jumps"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Ankle sprains, wrist injuries, ACL injuries"]
    ],
    modules: ["m2", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["Parkour World Championships", "Red Bull Art of Motion", "Speed and freestyle jams"],
    keyTerms: ["Vault", "Precision jump", "Wall run", "Roll", "Flow"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Parkour** (free running) treats obstacles as invitations: vault rails, wall-run crevices, precision-balance edges and rolls. Competitions judge speed or artistic expression \u2014 and the discipline's soul is efficient, weightless movement over the environment.` },
      { id: "technique", title: "Core techniques", module: "m2", body: `- **Vaults**: safety vault, kong and speed vault \u2014 the hands and hips guide the body over an obstacle without landing.
- **Precision jump**: controlled landing on a narrow edge \u2014 balance and landing absorption.
- **Wall run**: converting run-up momentum into a vertical push \u2014 leg push-off the wall.
- **The roll**: the impact-dissipating shoulder roll converts landing speed safely.
- **Flow**: linking movements without pause \u2014 rhythm, not individual tricks, is the art.
- Biomechanics: the body is the tool; efficient momentum transfer is the goal.` },
      { id: "rules", title: "Competition & judging", module: "m4", body: `- **Speed format**: complete a course from A to B fastest \u2014 clean and fleet.
- **Artistic format**: judges score creativity, difficulty, flow and control of a choreographed line.
- Safety: competitions set closed routes; soft-landing surfaces used for big drops.
- Officials ensure route legality and enforce safety equipment/spotter rules.` },
      { id: "training", title: "Training & physics", module: "m3", body: `- Conditioning: the fundamentals are landing mechanics — progressive drop heights and roll mastery.
- Strength: legs, core and grip; stamina for long lines.
- Practice structure: technique isolation, trick linking, and simulated routes.
- Risk management: parkour is about control — never attempt beyond rehearsal.` },
      { id: "psychology", title: "Psychology of the traceur", module: "m5", body: `- Fear management is central: breakdowns of the "fear line" vs commitment.
- Spatial intelligence: route reading and creative problem-solving.
- Community culture: respect for the environment and fellow traceurs \u2014 a unique sporting subculture.
- Concentration under physical fatigue defines the amateur-veteran gap.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle sprains and wrist injuries from failed landings; knee injuries (ACL) from poor mechanics.
- Prevention: mastery of the roll and landing, progressive heights, surface inspection, and warm-ups.
- Care: R.I.C.E. and professional assessment for any joint-ache that persists.` }
    ]
  },
  {
    slug: "mountaineering",
    title: "Mountaineering",
    altNames: "Alpinism",
    category: "adventure",
    emoji: "\u26F3",
    lede: "Mountaineering is the art of summiting high peaks \u2014 expedition climbing with ropes, crampons and altitude management, blending alpinism's athleticism with expedition logistics.",
    infobox: [
      ["Invented", "Alps / Europe (18th\u201319th century)"],
      ["Governing body", "UIAA"],
      ["Format", "Expedition \u00B7 alpine routes"],
      ["Terrain", "Rock, ice, snow, high altitude"],
      ["Body", "Technical climbing + hazardous logistics"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Frostbite, altitude sickness, falls, heat injury"]
    ],
    modules: ["m1", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Non-competitive by tradition \u2014 8000 m summits the benchmark"],
    keyTerms: ["Summit", "Base camp", "Acclimatisation", "Crevasse", "Fixed rope"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Mountaineering** pursues high summits through alpine terrain \u2014 snow, ice and rock \u2014 with climbing technique, expedition planning and physiological tolerance of altitude. The 8000 m peaks are climbing's ultimate test, where every decision is life-weighted.` },
      { id: "skills", title: "Core skills", module: "m2", body: `- **Ropework**: belaying, rappelling and crevasse rescue \u2014 rope systems are the mountaineer's safety toolbox.
- **Ice craft**: crampon technique (French and German style) and ice-axe arrests.
- **Rock craft**: the movement vocabulary of the alpine climb \u2014 holds, jams and stemming.
- **Navigation**: map and compass, plus weather and route reading off-grid.
- **Expedition logistics**: base camps, ferrying, fixed ropes and camps position the summit push.` },
      { id: "physiology", title: "High-altitude physiology", module: "m1", body: `- **Acclimatisation**: gradual gain allows the body to adapt \u2014 increased red cell mass raises oxygen-carrying capacity.
- **AMS and HACE**: altitude sickness and cerebral/pulmonary oedema (HAPE/HACE) are life-threatening; descent is the only cure for severe forms.
- Hypoxia, cold and wind chill demand layered insulation and energy management.
- **Frostbite**: tissue freezing from prolonged cold \u2014 prevention via clothing, hydration and circulation.
- Fitness: huge aerobic and strength base built before the expedition.` },
      { id: "safety", title: "Safety & emergencies", module: "m6", body: `- Crevasse falls, rockfall, avalanches and weather are the classic hazards.
- Safety structure: rope systems, avalanche transceivers, weather windows and exit plans.
- **First aid at altitude**: HACE/HAPE recognition (confusion, breathlessness at rest) triggers immediate descent.
- Prevention: expedition planning, partner systems, and honest assessment of summit fever risk.` }
    ]
  },
  {
    slug: "rock-climbing",
    title: "Rock Climbing",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Rock climbing ascends natural rock faces using hands, feet and protective gear \u2014 traditional, sport and free-solo disciplines where route and protection are everything.",
    infobox: [
      ["Invented", "Europe (ancient crag traditions)"],
      ["Governing body", "IFSC / national bodies"],
      ["Format", "Traditional, sport & alpine routes"],
      ["Terrain", "Natural rock: cracks, faces, slabs"],
      ["Protection", "Cams, bolts, nuts, ropes"],
      ["Olympic", "Climbing (indoor) at Olympics"],
      ["Common injuries", "Finger injuries, shoulder strain, ankle sprains from falls"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["IFSC World Cup (outdoor events)", "Classic trad experiences"],
    keyTerms: ["Anchor", "Belay", "Placement", "Crimps", "Redpoint"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rock climbing** ascends cliff faces move by move, relying on strength, technique and protection. **Traditional** (trad) climbing places gear as you go; **sport** climbing uses preset bolts. The discipline is the outdoor heart of the climbing world that indoor competition grew from.` },
      { id: "systems", title: "Safety & systems", module: "m4", body: `- **Belaying**: the climber is protected by a rope through a belay device \u2014 the belayer controls the rope.
- **Anchors**: at the top, multiple bombproof points form the anchor.
- **Pieces**: cams and nuts fit cracks; bolts are cemented for sport routes.
- Climbing ratings (grades) describe difficulty, from 5.0 to 5.15 for routes.
- Fundamentals: the three-point rule (two points of contact always), and never climbing beyond protection casually.` },
      { id: "technique", title: "Movement & biomechanics", module: "m2", body: `- **Footwork**: precise edges and smearing \u2014 the legs do the work; the arms steer.
- **Body positioning**: flagging, stemming and the drop-knee relax the arms and extend reach.
- **Climbing style**: hangboard strength + static control vs dynamic dynos.
- Energy efficiency: rest positions and heel hooks conserve strength.
- The mental map: reading cracks and sequences ahead of the moves.` },
      { id: "training", title: "Training & preparation", module: "m3", body: `- Finger strength (hangboard) with thumb-opposition; lock-offs and crimp practice.
- Endurance: repeated laps and cruxes; core for barn-door protection.
- Route reading and visualization before the attempt; partner trust built through systems.
- Outdoor safety: environmental care (sensitive ecosystems) and ethics of route access.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Finger pulleys**, shoulder overuse, and ankle sprains from falls \u2014 proper fall technique (back-flexed) prevents injury.
- Prevention: rest between hard sessions, open-hand preference, and clean falls.
- Acute finger pain = stop and rehab; never climb through a sharp tendon-pull sensation.` }
    ]
  },
  {
    slug: "bungee",
    title: "Bungee Jumping",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Bungee jumping leaps from a platform or bridge attached to an elastic cord \u2014 a controlled free fall that recoils into a rebound, one of the safest 'extreme' jumps.",
    infobox: [
      ["Invented", "New Zealand (A. J. Hackett, 1980s)"],
      ["Governing body", "NZ/Australia operators"],
      ["Format", "Individual jumps from fixed points"],
      ["Cord", "Elastic shock-cord, load-sheets"],
      ["Height", "30\u2013220 m typical"],
      ["Olympic", "Not a competitive sport"],
      ["Common injuries", "Neck/back strain, eye issues, muscle sprains"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Not a competitive sport \u2014 headline jumps the benchmark"],
    keyTerms: ["Free fall", "Shock cord", "Anchor point", "Rebound", "Fail-safe"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Bungee jumping** is a controlled leap into free fall at the end of an elastic cord \u2014 the cord stretches, arrests the fall and bounces the jumper up in a rebound. From bridges and towers, it offers pure adrenaline with engineered safety.` },
      { id: "physics", title: "Physics & technique", module: "m2", body: `- **Free fall**: gravity accelerates the body until the cord begins to stretch.
- **The stretch**: elastic potential energy stores the fall; the cord decelerates the jumper gently, then rebounds.
- The **anchor point** and cord length are calculated for the jumper's weight \u2014 rebound height is engineered.
- **Fail-safes**: back-up straps and twin cords are measured by the operator; jumpers are weighed and fitted.
- Technique: the "dive" spread-eagle, or the jumpers' jump \u2014 minimal impact on the cord.` },
      { id: "safety", title: "Safety & first aid", module: "m6", body: `- Operator certification, cord-age logging and anchor inspections govern safety.
- Health checks exclude those with heart conditions, pregnancy, and joint/back issues.
- Minor issues: neck and back strain from the stop, eye redness (petechial hemorrhages); major incidents are rare when certified.
- Psychology: fear management and the "leap of commitment".` },
      { id: "psychology", title: "The psychology of the jump", module: "m5", body: `- Facing the void is a textbook test of **fear and arousal**: the decision to jump is a commitment under extreme anticipation.
- Jumpers use breathing, counting and consent-to-jump to control the pre-jump spike.
- The experience models stress inoculation \u2014 the mastery of a feared situation.` }
    ]
  },
  {
    slug: "skydiving",
    title: "Skydiving",
    altNames: "Parachuting",
    category: "adventure",
    emoji: "\u26F3",
    lede: "Skydiving free-falls from aircraft before opening a parachute \u2014 a precise airsport of body flight, formation and canopy control judged at world competitions.",
    infobox: [
      ["Invented", "France (first parachute jump, 1797)"],
      ["Governing body", "FAI"],
      ["Format", "Individual & team \u00B7 formation & style"],
      ["Aircraft", "Jump altitudes 3000\u20134000 m typical"],
      ["Parachute", "Ramped-stabilised ram-air canopy"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Canopy-flight accidents, ankle injuries, bends (rare)"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["World Skydiving Championships (FAI)", "World Cup formation skydiving", "Speed star format"],
    keyTerms: ["Free fall", "Canopy", "Ram-air wing", "Tracking", "Deployment"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Skydiving** leaps from an aircraft, free-falling ~200 km/h before deploying a ram-air **canopy** (a planform wing) for a soft landing. Disciplines span **formation skydiving**, **freeflight**, **style**, **accuracy** and modern **speed skydiving**.` },
      { id: "physics", title: "The physics of free fall", module: "m2", body: `- **Terminal velocity**: drag balances gravity \u2014 between 190\u2013200 km/h in the belly-to-earth position; head-down reaches 400+ km/h.
- **Tracking**: tilting the body exits horizontal flight to move across the sky \u2014 decided by body surface orientation.
- **Canopy flight**: the deployed wing converts altitude into forward flight and landing flare.
- Deployment: a ripcord or handle releases the main, then the reserve system.
- Altitude limits: opening minimums protect deployment; spotter decisions are life-based.` },
      { id: "rules", title: "Rules & judging", module: "m4", body: `- **Formation**: teams build the most grips in the working time; video review validates grips.
- **Style**: a set sequence (turn, backloop) done as fast and cleanly as possible.
- **Accuracy**: landing as close to a target disc as possible after a delayed opening.
- Officials use in-air judges and video; penalties for missed grips.
- Jump aircraft have pilot/spotter duties; loads are timetabled.` },
      { id: "training", title: "Training & safety culture", module: "m3", body: `- Progressive instruction: tandem → AFF (accelerated free fall) → self-sufficiency.
- Ground rehearsals, wind-tunnel (indoor flying) and gear checks every jump.
- Canopy skills: planning, flare timing and emergency procedures are drilled.
- Safety: the sport's culture of checklists and briefings keeps incident rates low.
- Fitness: core control, body-position awareness and leg strength for landings.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Canopy-malfunction incidents are rare but serious \u2014 reserve drills are mandatory.
- Ankle and leg injuries on hard landings; Bends (decompression) possible on clumsy altitude drops.
- Prevention: gear checks, canopy rotation programs, and night/fog capability limits.` }
    ]
  },
  {
    slug: "paragliding",
    title: "Paragliding",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Paragliding flies a foot-launched flexible wing in soaring flight \u2014 pilots run off hills into thermals, ridges and mountain air, open-cockpit flight.",
    infobox: [
      ["Invented", "France / Switzerland (1980s)"],
      ["Governing body", "FAI / CIVL"],
      ["Format", "Individual flights & cross-country"],
      ["Wing", "Non-rigid canopy ~25 m span"],
      ["Altitude", "From ridge to thermic heights"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Landing and turbulence injuries"]
    ],
    modules: ["m2", "m5"],
    court: null,
    verified: false,
    competitions: ["FAI Paragliding World Championships", "Cross-country leagues", "Acro paragliding events"],
    keyTerms: ["Canopy", "Thermal", "Ridge lift", "Sink rate", "Big ears"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Paragliding** is foot-launched flight under a flexible, glider-like canopy. Pilots run off a slope, are lifted by **thermals** (rising warm air) or **ridge lift**, and can cross-country for hundreds of kilometres in the right conditions \u2014 the most accessible form of personal flight.` },
      { id: "equipment", title: "The wing & equipment", module: "m4", body: `- **Canopy**: a non-rigid fabric "wing" ~25 m span with cells that inflate into an aerofoil.
- **Harness**: a seating system with reserve parachute attached.
- **Controls**: brake toggles turn and flare; the speed system adjusts wing pitch.
- **Variometer**: the audio instrument telling the pilot climb or sink rate.
- **Weather**: wind direction, thermal strength and turbulence are the flight environment.` },
      { id: "technique", title: "Flying & physics", module: "m2", body: `- **Launch**: "pull up" and run into the wind until the wing lifts the pilot off.
- **Soaring**: ridge lift on a face or thermals (rings of rising air) sustain altitude changes.
- **Turning**: braking the inside toggle banks the wing; coordinated turns with weight shift.
- **Control**: flare (brake sweep) converts speed to a vertical landing/stall.
- Lift-drag ratio: a paraglider's glide is ~9:1 (nine units forward per one unit down) \u2014 a lesson in aerodynamic efficiency.` },
      { id: "safety", title: "Safety & first aid", module: "m6", body: `- Site assessments, weather briefings, and wing inspection (porosity, lines) precede every flight.
- Serious incidents come from turbulence, collapses and landing surprises \u2014 reserve deployment training is mandatory.
- Prevention: rated wings, licences, strict wind limits, and never flying beyond conditions.` }
    ]
  },
  {
    slug: "hang-gliding",
    title: "Hang Gliding",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Hang gliding pilots fly rigid wings launched on foot \u2014 the h/l frame, prone harness and the sport's grandfather status in modern free flight.",
    infobox: [
      ["Invented", "USA / Germany (rigid-wing pioneers)"],
      ["Governing body", "FAI / CIVL"],
      ["Format", "Individual gliding flights & competitions"],
      ["Wing", "Rigid Dacron-covered frame"],
      ["Launch", "Foot-launched from hills"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Landing impacts, turbulence-related falls"]
    ],
    modules: ["m2", "m5"],
    court: null,
    verified: false,
    competitions: ["FAI Hang Gliding Championships", "Cross-country leagues", "Acrobatic hang gliding"],
    keyTerms: ["Glider frame", "Bar", "Prone harness", "Thermal", "Stall"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Hang gliding** flies a rigid wing under a prone pilot suspended by a harness. It is the ancestor of modern free gliding \u2014 the hills, thermals and cross-country skills land in modern competitions the same way as paragliding.` },
      { id: "equipment", title: "The glider", module: "m4", body: `- **Wing**: an aluminium and Dacron frame, ~12 m span, gliding ratio exceeding 15:1 in modern gliders.
- **Control bar**: pushes/pulls to shift weight \u2014 the wing and body act as the control surface.
- **Harness**: prone position converts the body into an aerofoil \u2014 leg steering via the control bar.
- **Variometer and radio**: instruments and briefings in every flight.
- Rigging takes 20\u201340 minutes on the hill \u2014 a launch-day ritual.` },
      { id: "technique", title: "Flying technique", module: "m2", body: `- **Weight-shift control**: push the bar to climb, pull to dive; banking by shifting weight into a turn.
- **The stall line**: reducing speed until airflow separates \u2014 pilots manage the margin with bar position.
- **Thermals**: circling in rising air \u2014 centring the climb is piloting skill.
- **Landing**: a flare "round-out" holding speed until the feet touch \u2014 the wing stalls at touch-down.
- Physics: lift-to-drag, centre of gravity shifts and the glider's polar \u2014 a flight-physics primer.` },
      { id: "safety", title: "Safety & care", module: "m6", body: `- Pilots fly rated gliders at approved sites under weather limits; instructors check the wing and body before launches.
- Landing impacts and turbulence are the risks; harness and helmet are universal.
- Culture: the sport's accident rate falls sharply on licenced training and site discipline.` }
    ]
  },
  {
    slug: "kite-surfing",
    title: "Kitesurfing",
    altNames: "Kiteboarding",
    category: "adventure",
    emoji: "\u26F3",
    lede: "Kitesurfing rides a board pulled across the water by a large controllable kite \u2014 winds of 12\u201325 knots launch jumps, powered transitions and big-air tricks.",
    infobox: [
      ["Invented", "France / USA (1980s\u201390s)"],
      ["Governing body", "GKA / World Kiteboarding League"],
      ["Format", "Individual \u00B7 racing, freestyle, big air"],
      ["Kite", "Inflatable canopy ~5\u201317 m²"],
      ["Board", "Small planing board (twin-tip)"],
      ["Olympic", "Not yet Olympic (fast growth)"],
      ["Common injuries", "Shoulder strain, knee injuries, kite-impact injuries"]
    ],
    modules: ["m2", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["GKA Freestyle World Cup", "Hydrofoil & course racing", "Big Air tour"],
    keyTerms: ["Kite", "Bar", "Water start", "Jump", "Self-rescue"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kitesurfing** (kiteboarding) is a wake-riding on water powered by a large kite. The rider steers the kite with a bar, uses it to rel power, pops into jumps and spins above the water \u2014 one of the fastest-growing wind sports, raced, freestyled and soared around the world.` },
      { id: "equipment", title: "The kit", module: "m4", body: `- **Kite**: an inflatable canopy (5\u201317 m²) with lines; the **bar** with a depower system.
- **Board**: a twin-tip directional planned at 130\u2013150 cm; riding "both directions" switch allows instant turns.
- **Harness**: a seat harness takes the pull through the body.
- **Safety**: a leash system releases the kite's power (quick-release emergency).
- Wind range: rideable from ~12 knots to 30+ knots.` },
      { id: "technique", title: "Technique & physics", module: "m2", body: `- **Water start**: the board is pointed into the pull; the kite powers the ride up.
- **The jump**: steering the kite up and cutting the board charges the pop; the kite's pull launches the rider.
- **Twintip riding**: switch footing mirrors tricks — symmetrical tricks double the options.
- **Big air**: a kite oversheeted and rider popped for huge jumps — custom big-air helmets and vests grew from this discipline.
- Power/vector: the bar position manages the kite's power; depower stalled in heavy winds.` },
      { id: "safety", title: "Safety & care", module: "m6", body: `- Downwind hazards: kites dragged across the beach, powerlines and rotor-involved accidents — always inspect the site.
- Shoulder and knee strain from the harness and pop; cold-water risk offshore.
- Prevention: certified lessons, bar quick-release drills, spotter use, and self-rescue training.
- Care: R.I.C.E. for sprains; never kite with a shoulder that dislocates.` }
    ]
  },
  {
    slug: "bouldering",
    title: "Bouldering",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "Bouldering climbs short, difficult rock problems without ropes over crash pads \u2014 a power-and-precision discipline now at the heart of Olympic climbing.",
    infobox: [
      ["Invented", "France (Fontainebleau origins)"],
      ["Governing body", "IFSC"],
      ["Format", "Individual \u00B7 power problems"],
      ["Wall", "Indoor walls or outdoor boulders ~4\u20136 m"],
      ["Safety", "Crash pads, spotting"],
      ["Olympic", "Summer (combined) since Tokyo 2020"],
      ["Common injuries", "Finger injuries, wrist strain, ankle/heel bruises from falls"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["IFSC World Cup bouldering", "World Championships bouldering", "Olympic combined"],
    keyTerms: ["Problem", "Top", "Zone", "Flash", "Send"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Bouldering** is rope-free climbing of short, boulder-height problems (4\u20136 m) over **crash pads**. It prizes raw power, precision and creative problem-solving \u2014 and as an Olympic combined discipline it now crowns the world's best on synthetic walls.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Competitors climb 4\u20136 problems in qualifying; each a fresh route set for the event.
- **Top** = reached the final hold; **zone** = the intermediate bonus hold.
- Scoring: more tops win; fewer attempts break ties; zones break further ties.
- Format: 5-minute attempts limited; falls end an attempt.
- Video review confirms tops/zones; route-setters make problems safe and fair.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Crimps and pinches**: finger-strength holds; body tension keeps the core tight.
- **Dynos**: dynamic jumps between holds \u2014 power and precision meet.
- **Beta**: the solution to each problem \u2014 sequences, holds, and alternate lines are chosen by the climber.
- **Coordination**: feet-first precision and balanced reaching \u2014 a mental map turns plan into movement.
- Health of the fingers: volume management is the sport's key training discipline.` },
      { id: "training", title: "Training & strategy", module: "m3", body: `- Finger strength, campusing and limit bouldering build power; system boards refine it.
- Route reading: dry-solving problems before stepping on.
- Tactics: pacing attempts and saving strength for the last boulder in qualification.
- Recovery: pulp-load and finger-care rituals set the elite apart.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Pulley injuries** (finger tendon) from crimps; wrist and shoulder strain; heel bruises from falls.
- Prevention: crash-pad placement, spotting, warm-up, and taping remaps.
- Care: an acute pulley "pop" = immediate stop, buddy-tape, and professional review.` }
    ]
  },
  {
    slug: "bicycle-moto",
    title: "BMX Racing",
    altNames: null,
    category: "adventure",
    emoji: "\u26F3",
    lede: "BMX racing sprints eight small-wheeled bikes down a bumpy, banked track \u2014 the most explosive Olympic cycling discipline, decided by gates and jumps.",
    infobox: [
      ["Invented", "USA (1960s\u201370s)"],
      ["Governing body", "UCI"],
      ["Format", "Individual & team \u00B7 gates to finish"],
      ["Track", "~350 m dirt race track"],
      ["Bike", "Small 20 in BMX with knobby tyres"],
      ["Olympic", "Summer since Beijing 2008"],
      ["Common injuries", "Shoulder injuries, wrist fractures, abrasions"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games (BMX racing)", "UCI BMX World Championships", "BMX Supercross World Cup"],
    keyTerms: ["Gate", "Starts", "Jumps", "Banked corners", "Transitions"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**BMX racing** is an eight-rider sprint from a start gate down a compact dirt track of bumps, jumps and banked turns (~350 m). The discipline is all start power, line choice and clean passage \u2014 the most explosive event in Olympic cycling.` },
      { id: "track", title: "The track & bike", module: "m4", body: `- **Track**: about 350 m long, 8 m wide, with a start gate, rollers, tabletops (jumps) and banked corners.
- **Bike**: a 20 in strong BMX with small knobby tyres, single gear, and a low centre of gravity.
- **Protection**: full-face helmet, gloves and pads are compulsory; jerseys carry the number.
- Track conditions (dirt vs paved) dictate line choice and jump shape.` },
      { id: "rules", title: "Rules & racing", module: "m4", body: `- Races from the **gate**: a starting ramp drops when the starter releases; riders must stay in their lane until the course opens.
- **Heats**: motos (rounds of 8), semi-finals and final; top qualifiers advance by finish order.
- Passing rules: clean passes only; forcing a rider off line is judged.
- A fall that blocks the track can cause a re-run at officials' discretion.
- Photo finish and timing gates decide ties; the first rider's front wheel decides.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **gate start**: a sprint burst from a dead stop \u2014 pedal pressure and gate-drop timing decide the first 10 m.
- **Jumping**: pumping the tabletops (unweighting) and landing cleanly keeps speed.
- **Banking**: cornering lean and line around the berm \u2014 centripetal force keeps the bike planted.
- Pedalling torque: explosive leg strength wins starts; cadence and pump carry speed.
- Fitness: short, violent bursts (30\u201340 s) with lactic acid \u2014 pure anaerobic power.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder separations, wrist fractures and abrasions from crashes; head injuries from falls.
- Prevention: full-face helmets, track etiquette at jump zones, riding the line you can handle.
- Care: R.I.C.E., and any head strike = immediate removal.` }
    ]
  }
  ]);
})();