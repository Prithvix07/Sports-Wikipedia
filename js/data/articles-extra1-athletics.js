/* ==========================================================================
   THE ARENA — Extra Athletics Articles
   Concise syllabus articles for the athletics track & field disciplines.
   Each entry follows the same shape as the core ARTICLES and is appended to
   window.ARTICLES so every SPORTS entry has real content.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  {
    slug: "sprint",
    title: "Sprinting",
    altNames: "100m, 200m, 400m",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Sprinting is the explosive short-distance running group \u2014 100 m, 200 m and 400 m \u2014 where the entire performance lasts under a minute and every hundredth of a second counts.",
    infobox: [
      ["Invented", "Ancient Games; modern distances from 1896 Olympics"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 separate men's and women's events"],
      ["Distances", "100 m, 200 m, 400 m"],
      ["Track", "Standard 400 m oval \u2014 1.22 m lanes"],
      ["Olympic", "Since 1896 (men), 1928 (women)"],
      ["Common injuries", "Hamstring strains, Achilles tendonitis, groin strains"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Athletics Championships", "Diamond League", "Asian Athletics Championships"],
    keyTerms: ["Starting blocks", "Staggered start", "Drive phase", "False start", "Reaction time"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Sprinting** is short-distance running at maximal speed. The 100 m is the blue-riband event \u2014 the world's fastest man and woman are crowned over it. The 400 m adds a strong aerobic component and is often called the "sprint of a thousand metres". In physical education it teaches the sprint cycle: reaction, start, drive, maximum velocity and the final lean.` },
      { id: "track", title: "The track & equipment", module: "m4", body: `- **Oval**: a standard 400 m all-weather track with 8 lanes, each **1.22 m wide**; the finish line is the common line for all events.
- **Lanes**: sprinters must stay in their lane throughout.
- **Starting blocks** \u2014 adjustable foot plates that anchor the feet for the crouch start; a false start (movement after the set command before the gun) leads to disqualification.
- **Timing**: fully automatic electronic timing is standard \u2014 every athlete is timed to 1/100th of a second, with photo-finish used to separate close races.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Commands**: \u201cOn your marks\u201d, \u201cSet\u201d, then the gun.
- **Reaction time**: the athlete must not react inside 0.1 s \u2014 anything faster is judged a false start.
- Heats, semi-finals and final \u2014 qualifying by place and time.
- Wind assistance over 2.0 m/s for sprint events invalidates records (times are not eligible for records).
- The 400 m uses **staggered starts** so every runner covers the same distance around the bends.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `The sprint is analysed in phases:
- **Start** \u2014 explosive drive from the blocks at ~45 degrees; the first stride is short and powerful.
- **Drive phase** (first 30 m) \u2014 the torso rises gradually while stride length grows.
- **Maximum velocity** \u2014 high stride frequency with brief ground contact; the leg recovers under the hip.
- **Deceleration & finish** \u2014 the final lean into the line. Key biomechanics: force applied into the ground, stretch-shortening of the ankle, and angular velocity of the leg as a lever.` },
      { id: "training", title: "Training & common injuries", module: "m6", body: `- **Training**: acceleration work, max-velocity reps (30\u201360 m), speed-endurance for 400 m, plyometrics and strides.
- **Common injuries**: hamstring strains (the classic sprinting injury) from high-speed eccentric load; Achilles problems and groin strains from explosive pushing.
- **Prevention**: a thorough warm-up, progressive speed work, hamstring strength, and not racing through fatigue. Treat acute muscle tears with R.I.C.E. and never return to sprinting until pain-free.` }
    ]
  },
  {
    slug: "middle-distance",
    title: "Middle-Distance Running",
    altNames: "800m, 1500m",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Middle-distance running blends speed and endurance \u2014 the 800 m and 1500 m demand tactical racing, rhythm and a strong finish.",
    infobox: [
      ["Invented", "Modern events from the 1896 Olympics"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 championship rounds"],
      ["Distances", "800 m, 1500 m"],
      ["Olympic", "Men 1896, women 800 m 1928 / 1500 m 1972"],
      ["Common injuries", "Achilles pain, shin splints, stress fractures"]
    ],
    modules: ["m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League 800m/1500m"],
    keyTerms: ["Pacing", "Kicking", "Positioning", "Lane break"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Middle-distance running** is the 800 m and 1500 m \u2014 races long enough to demand tactical patience and short enough to explode into a finishing sprint. The 800 m is two laps mixing anaerobic speed with threshold endurance; the 1500 m is three-and-three-quarter laps of combined speed and stamina. It is a core event for studying energy systems, pacing and racing tactics.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **800 m**: heats, semi-finals and final; runners may break lanes after the first bend (the break line is marked), then run in lane-free racing.
- **1500 m**: mass start from a curved line; the entire race is free-running without lanes.
- Qualifying by place (first two or three) plus fastest losers.
- Electronic timing to 1/100th of a second; wind rules apply to records.
- Tactical rules: no pushing, jostling or deliberate tripping \u2014 the race referee judges obstruction.` },
      { id: "strategy", title: "Energy systems & tactics", module: "m3", body: `- The 800 m is roughly one-third aerobic and two-thirds anaerobic \u2014 it hurts because the body produces lactic acid faster than it clears it.
- The 1500 m is roughly 50/50 aerobic\u2013anaerobic; the steep **VO2 max** demand decides the race.
- Tactics: positioning near the front, controlling the pace, then a fast final lap with a **kick** (surge) off the last bend.
- Negative splits (running the first lap slightly slower than the last) are common in the 1500 m to protect energy for the finish.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Achilles tendon overload from fast training mileage; shin splints from hard surfaces; stress fractures in the lower leg in high-volume runners.
- Prevention: gradual mileage increases (10% rule), soft surfaces for recovery runs, strength work for the calves and feet.
- Treat acute pain with rest and R.I.C.E.; any bone-point pain that lasts more than two weeks needs medical assessment for stress fracture.` }
    ]
  },
  {
    slug: "long-distance",
    title: "Long-Distance Running",
    altNames: "5000m, 10000m, Marathon",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Long-distance running covers the 5000 m, 10,000 m and the 42.195 km marathon \u2014 the ultimate tests of aerobic endurance, pacing and mental strength.",
    infobox: [
      ["Invented", "Marathon from 1896; track events from the 1910s"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 track and road"],
      ["Distances", "5000 m, 10,000 m, half-marathon, marathon (42.195 km)"],
      ["Olympic", "Track since 1896/1912; women from 1984 (marathon)"],
      ["Common injuries", "Runner's knee, IT-band syndrome, plantar fasciitis"]
    ],
    modules: ["m2", "m3", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "World Marathon Majors", "Asian Games"],
    keyTerms: ["VO2 max", "LT (lactate threshold)", "Pacing", "Carbohydrate loading", "Hitting the wall"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Long-distance running** is endurance racing from 5000 m (12.5 laps) to the 42.195 km marathon. The 10,000 m is 25 laps of sustained threshold work; the marathon is the classic road endurance event. All of them are studied for aerobic energy systems, thermoregulation, fuel management and race psychology.` },
      { id: "formats", title: "Formats & rules", module: "m4", body: `- **Track (5000 m / 10,000 m)**: brand heats and finals, free-running in lanes after the break, bell rung for the final lap.
- **Road (marathon)**: a certified course measured with the shortest-possible-path rule; drink stations every 5 km from 5 km onward.
- Cheating and pacing assistance: runners must not receive outside help (a pacemaker who drops out is still a competitor; hand-offs of drinks must be from official tables).
- Records are set on certified courses that pass the gradient and distance rules.` },
      { id: "physiology", title: "The physiology of endurance", module: "m3", body: `- **VO2 max** \u2014 the maximum oxygen an athlete can use; the ceiling for aerobic performance.
- **Lactate threshold (LT)** \u2014 the pace where blood lactate begins to rise sharply; above it fatigue accelerates.
- **Fuel**: muscle glycogen and fat; the marathon burns both \u2014 running out of glycogen causes "hitting the wall".
- Training: base mileage, threshold runs, long runs, and race-pace work build the aerobic engine.
- Recovery and nutrition: carbohydrate loading before the race and carbohydrate-plus-protein immediately after.` },
      { id: "psychology", title: "Mental demands", module: "m5", body: `Endurance races are mental as much as physical: pacing discipline, positive self-talk, breaking the race into segments ("5 km at a time"), and arousal control keep the athlete in control when fatigue rises. Concentration on relaxed form \u2014 arms, breathing, posture \u2014 reduces energy waste and staves off negative thoughts late in the race.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Runner's knee** and **IT-band syndrome** \u2014 lateral knee pain from hip weakness; **plantar fasciitis** \u2014 heel pain; stress fractures in high-volume runners; blisters and dehydration in road racing.
- Prevention: gradual build-up, strength and mobility work, correct footwear, hydration and proper race-day fuelling.
- Care: rest and R.I.C.E. for acute overload, and professional review of any pain that fails to settle.` }
    ]
  },
  {
    slug: "hurdling",
    title: "Hurdling",
    altNames: "110m Hurdles, 400m Hurdles",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Hurdling is a sprint-and-clearance event over ten barriers \u2014 110 m (men) and 100 m (women) hurdles, and the 400 m hurdles \u2014 combining speed with rhythm.",
    infobox: [
      ["Invented", "England in the 1830s \u2014 first races at Eton"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 championship rounds"],
      ["Distances", "110 m (men) \u00B7 100 m (women) \u00B7 400 m"],
      ["Hurdles", "10 per race \u00B7 heights vary by age and sex"],
      ["Olympic", "Since 1896 (110 m), 1900 (400 m)"],
      ["Common injuries", "Hamstring injuries, hip-flexor strain, ankle sprains"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League hurdles events"],
    keyTerms: ["Lead leg", "Trail leg", "Hurdle clearance", "Steps between hurdles", "Hurdle spacing"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Hurdling** is sprinting over barriers with a fast, aggressive clearance \u2014 not jumping. The lead leg drives over the hurdle while the trail leg sweeps flat beside it. Men race 110 m hurdles (1.067 m high), women 100 m hurdles (0.84 m), and both run 400 m hurdles (0.914 m / 0.762 m). Hurdling is a model event for rhythm, coordination and sprint mechanics under constraint.` },
      { id: "setup", title: "Hurdle setup & spacing", module: "m4", body: `- **110 m (men)**: start to first hurdle 13.72 m; 9.14 m between hurdles; last hurdle to finish 14.02 m. Ten hurdles.
- **100 m (women)**: 13 m to the first hurdle, 8.5 m between, 10.5 m to finish.
- **400 m hurdles**: 45 m to the first hurdle, 35 m between, 40 m to the finish; athletes run on other lanes but each clears a full set of ten hurdles.
- Hurdles fall forward and are designed to tip; knocking a hurdle down is legal unless it is judged deliberate and a significant advantage.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Lead leg**: drives fast toward the hurdle top, knee locked, then snaps down to the ground beyond.
- **Trail leg**: the leg and knee rotate flat and high to the side, clearing the rail, then place down quickly \u2014 "lead arm opposite lead leg".
- **Rhythm**: elite hurdlers take three steps between hurdles in the sprints; a combination of 7-8-9 steps in the 400 m.
- Efficient clearance keeps the centre of gravity low \u2014 a good hurdler stays in the sprint rhythm with minimal flight time.` },
      { id: "training", title: "Training & common injuries", module: "m6", body: `- **Training**: hurdle-walk drills, lead/trail leg repetitions, rhythm runs and over-distance sprint work.
- **Common injuries**: hamstring strains (from the lead-leg snap), hip-flexor problems (trail leg), and ankle sprains from landing.
- **Prevention**: full warm-up with dynamic mobility, hurdle-specific strength, and correct technique before speed. Acute muscle tears use R.I.C.E.; return to sprinting only when pain-free at full effort.` }
    ]
  },
  {
    slug: "steeplechase",
    title: "Steeplechase",
    altNames: "3000m Steeplechase",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "The 3000 m steeplechase is an endurance race over barriers and a water jump \u2014 the most demanding obstacle event in track and field.",
    infobox: [
      ["Invented", "England (19th-century cross-country style races)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 championship rounds"],
      ["Distance", "3000 m \u00B7 28 barriers + 7 water jumps"],
      ["Barrier", "0.914 m (men) \u00B7 0.762 m (women)"],
      ["Olympic", "Since 1920 (men), 2008 (women)"],
      ["Common injuries", "Hamstring strains, foot trauma, knee overuse"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Asian Games"],
    keyTerms: ["Water jump", "Barrier clearance", "Stepping on the barrier", "Pack racing"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `The **3000 m steeplechase** is a seven-and-a-half-lap endurance race over 28 ordinary barriers and seven **water jumps** (a barrier followed by a water pit). It was born from English cross-country runs across actual hedges and streams. Physically it is a demanding blend of 3000 m pace, hurdle clearance and weight-bearing landings \u2014 especially at the water jump.` },
      { id: "course", title: "The course & the water jump", module: "m4", body: `- The water jump is placed **inside lane one** on one of the bends; the water pit is 3.66 m long and slopes from barrier level to 0.70 m at its end.
- Each of the seven laps over the water jump must use the jump as it is laid out (the barrier to runway alignment is fixed).
- Athletes may **step on top of the barrier** to launch into the water \u2014 unlike hurdles, where the leg must clear the top.
- 28 barriers and 7 water jumps in total; each barrier is 3.66 m wide.` },
      { id: "technique", title: "Technique & tactics", module: "m2", body: `- **Dry barriers**: cleared with a hurdles-style lead-leg drive and gentle clearance to save energy.
- **Water jump**: runners commonly place one foot on the barrier top and leap into the pit, landing in the shallow water and driving out with a sprint step.
- **Tactics**: stay in the pack to avoid rhythm breaks, use the barriers to disrupt rivals' rhythm, and save a strong finish over the final two laps.
- Rhythm matters \u2014 stutter-stepping before a barrier costs time; consistent 5-stride approaches are the elite standard.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Hamstring strains and hip-flexor tightness from repeated clearance; foot and ankle impact strain from water-landings; knee overuse from the hard barrier beats.
- **Prevention**: steam and rhythm drills, ankle/calf strength for the water landing, and graduated volume.
- Acute flare-ups: R.I.C.E. and rest; checkpoint form coach feedback before returning to full barrier work.` }
    ]
  },
  {
    slug: "relay",
    title: "Relay Racing",
    altNames: "4x100m, 4x400m",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Relay racing is track and field's one true team event \u2014 four runners each carry a baton one leg, with handovers that can make or break the race.",
    infobox: [
      ["Invented", "USA (first relays in the 1890s)"],
      ["Governing body", "World Athletics"],
      ["Format", "Team \u00B7 4 runners per side"],
      ["Events", "4\u00D7100 m, 4\u00D7400 m (also 4\u00D7200 m legally-varied)"],
      ["Baton", "30 cm \u00B7 battlete banding on the exterior"],
      ["Olympic", "Men 1912, women 1928 (4\u00D7100 m / 4\u00D7400 m)"],
      ["Common injuries", "Same as sprinting \u2014 hamstring strains, groin pulls"]
    ],
    modules: ["m2", "m3", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships relays", "Athletics Fixture Series"],
    keyTerms: ["Baton", "Handover zone", "20 m lead zone", "Sprint visual handover", "Team bonding"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Relay racing** is a baton-carrying team sprint: the 4\u00D7100 m and 4\u00D7400 m are the Olympic standards. Runners run a leg, pass the baton in a marked zone, and the team finishes together. The relay is a perfect teaching event \u2014 communication, timing, teamwork and trust all decide the result.` },
      { id: "zones", title: "The baton & the handover zone", module: "m4", body: `- The baton is a smooth hollow cylinder ~30 cm long; it is carried throughout.
- **Handover (takeover) zone**: a 20 m lane-marked area; the outgoing runner may begin accelerating in a **pre-zone** (the 20 m lead-in), but the baton must change hands inside the 20 m zone.
- **4\u00D7100 m**: each runner stays in their lane; handovers use the practice lane lanes and the visual-cue method.
- **4\u00D7400 m**: first leg runs in lanes; after the first handover runners break; the baton must travel the whole race.
- Dropping the baton is legal to retrieve (the drop runner must pick it up); handing outside the zone or obstructing another team brings disqualification.` },
      { id: "technique", title: "Handover technique", module: "m2", body: `- The outgoing runner sets a **visual cue mark** and starts when the incoming athlete hits it.
- The incoming runner positions the baton; the receiver's hand is held back with palm up ("up-sweep") or palm down ("down-sweep").
- **Timing**: the exchange should happen at speed near the middle of the zone \u2014 the fastest teams complete handovers in under 2 seconds.
- Each leg's length matches the athlete's strength: start/acceleration, bend, straight, and a strong anchor leg.` },
      { id: "psychology", title: "Teamwork & practice", module: "m5", body: `Relays are won on relationships: trust between runners, precise rehearsal, and handling the pressure of the exchange under race nerves. Cohesion and communication \u2014 the outgoing runner's verbal "now", the incoming runner's positioning \u2014 mirror the task-cohesion concepts of team sport. Frequent zone practice makes the exchange automatic so the crowd and the clock cannot distract.` }
    ]
  },
  {
    slug: "race-walking",
    title: "Race Walking",
    altNames: "20km Walk, 35km Walk",
    category: "athletics",
    emoji: "\u{1F6B6}",
    lede: "Race walking is a judged walking competition \u2014 athletes must keep constant ground contact and a straight locked knee, over 20 km and 35 km.",
    infobox: [
      ["Invented", "England (19th-century pedestrianism)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 road distance events"],
      ["Distances", "20 km, 35 km (men and women)"],
      ["Olympic", "Since 1908 (men), 1992 (women)"],
      ["Common injuries", "Hamstring tightness, knee strain, blisters"]
    ],
    modules: ["m2", "m3", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Athletics Championships", "World Race Walking Team Championships"],
    keyTerms: ["Loss of contact", "Locked knee", "Red cards", "Cafeteria card", "Cadence"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Race walking** is endurance walking governed by two strict rules: the athlete **must keep contact with the ground** at all times, and the advancing leg must be **straight (locked) at the knee** from first contact until vertical. Distances for men and women are 20 km and 35 km. Legal walking is faster than most people can jog \u2014 elite pace is under 4:00 per km.` },
      { id: "rules", title: "The two laws & judging", module: "m4", body: `- **Loss of contact (LOB)**: raised as a fault if the foot visibly leaves the ground.
- **Bent knee**: the advancing leg must straighten at the knee before the foot passes the body's vertical line.
- **Judging**: judges around the course watch form. An athlete who collects **three red cards** from **different** judges for the same or either fault is disqualified (the third red card is shown on the scoreboard).
- A judge raises a white paddle for a warning (shown to the athlete); severe cases can go straight to a red card with the chief judge.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Cadence**: very fast strides (190\u2013210 per minute) with short, quick steps.
- The hip **rocks** \u2014 pelvic rotation lets the straight leg reach far without losing balance.
- The leading foot lands heal-first, the leg stays locked until it passes under the body, then the push-off uses the ball of the foot.
- Watching knees: constant ground contact preserves the rhythm; the lean is small and the arms pump low and bent.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Hamstring tightness and knee strain from the locked-leg mechanics; shin and foot stress from the repetitive load; blisters and hydration issues in the long road distance.
- Prevention: mileage build-up, hip and calf mobility, good footwear, and hydration practice.
- Care: R.I.C.E. for acute aches, and a technique review rather than harder training when the injury returns.` }
    ]
  },
  {
    slug: "high-jump",
    title: "High Jump",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "High jump is a vertical jump event where athletes clear a bar using the Fosbury flop \u2014 an arched back-to-the-bar flight pioneered at the 1968 Olympics.",
    infobox: [
      ["Invented", "Scotland (evolved jumps); Fosbury flop 1968"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 clearance-based elimination"],
      ["Take-off", "One foot only (running approach)"],
      ["Olympic", "Since 1896"],
      ["Common injuries", "Ankle sprains, Achilles issues, landing-related knee pain"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Fosbury flop", "Approach run", "Penultimate stride", "Flight arc", "Bar clearance"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**High jump** is a running vertical jump over a horizontal bar. Athletes take off on one foot from a curved approach and clear the bar with the **Fosbury flop** \u2014 a back-first arc that centres the body's mass below the bar. It is studied for its elegant blend of sprint speed, angular momentum and precise body control.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The bar starts at a low height and rises; each athlete may attempt a height up to **three mistakes total** before elimination.
- A failed attempt = knocking the bar off its pins or touching the landing area without clearing the bar.
- **All three clearances** are often used sequentially; athletes may pass heights to save strength.
- At the end of that round-up, ties on height are broken by fewest failures, then fewest attempts; then the athletes share the placing, or a jump-off decides first.
- Take-off must be **one foot** \u2014 two-feet take-offs are a foul.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Approach**: usually 8\u201310 strides in a J-curve; the curve leans the body away from the bar and converts speed into vertical lift.
- **Take-off**: the take-off foot plants inside the bar line, body leaning back toward the bar; the penultimate stride lowers the centre of mass.
- **Flight**: the lead knee and arms drive up; the head and torso arch over the bar, hips rise, and the legs trail and flick clear.
- Rotation about the body's long axis \u2014 from the curve, not from a twist mid-air \u2014 turns the back to the bar.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle sprains and Achilles strain from the take-off foot; landing-related knee pain; shoulder discomfort from the landing slap.
- Prevention: solid strength in the take-off leg, springy landing practice, and gradual approach speed.
- Care: R.I.C.E. at the first sign of Achilles or ankle pain, and a technical check of the plant and take-off.` }
    ]
  },
  {
    slug: "long-jump",
    title: "Long Jump",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Long jump is the horizontal jump event \u2014 a full-speed approach, a single-foot take-off from a board, and a measured flight into a sand pit.",
    infobox: [
      ["Invented", "Ancient Games (the standing long jump ancestor)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series of jumps"],
      ["Runway", "At least 40 m \u00B7 take-off board 20 cm wide"],
      ["Olympic", "Since 1896 (men), 1948 (women)"],
      ["Common injuries", "Hamstring strain, take-off foot injuries, knee pain"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Approach", "Take-off board", "Foul line", "Hang / hitch-kick styles", "Optimum angle"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Long jump** converts horizontal sprint speed into a single measured leap. The jump is the whole runway \u2014 approach, a precise board take-off, flight styles (hang or hitch-kick) and a controlled landing \u2014 and it is a textbook event for projectile motion in kinesiology.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- Athletes run a defined runway (min 40 m) and take off from a **20 cm board**; the foul if the take-off foot crosses the front edge (the far side is marked with plasticine).
- The jump is measured from the **foul line** to the nearest mark the athlete makes in the sand.
- Competitions often use qualifying rounds; finals give a series of attempts (typically best of six) with the best mark deciding placings.
- Wind readings: legal record jumps require tailwind under 2.0 m/s.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Approach**: near-maximum controllable speed with a consistent stride pattern; the last two steps are not slowed but adjusted.
- **Take-off**: the foot plants flat, the hips rise, and the take-off angle is a shallow ~20 degrees \u2014 the flatter the better because horizontal speed is invaluable.
- **Flight**: the hang keeps the body tall and delays the tuck-out; the hitch-kick counter-rotates the legs for balance.
- **Landing**: the heels reach forward over the sand mark, then the hips drive through.
- Projectile physics: range \u2248 v\u00B2 sin 2A / g \u2014 speed matters more than height.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Hamstring strains from the high-speed approach and take-off; foot and Achilles load on the plant leg; knee overuse.
- Prevention: speed work, bounding plyometrics, and quality approach rhythm in training.
- Care: R.I.C.E. for acute injuries, and reduce jump intensity rather than stopping sprint volume when a muscle aches.` }
    ]
  },
  {
    slug: "triple-jump",
    title: "Triple Jump",
    altNames: "Hop, Step & Jump",
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Triple jump chains three ground contacts into one huge horizontal distance \u2014 hop, step and jump \u2014 on the same take-off board.",
    infobox: [
      ["Invented", "Ireland (hop-step-and-jump's early form)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series"],
      ["Sequence", "Hop (same foot), step (other foot), jump (both feet)"],
      ["Olympic", "Since 1896 (men), 1996 (women)"],
      ["Common injuries", "Ankle injuries, Achilles strain, hamstring pulls"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Hop", "Step", "Jump", "Phase ratios", "Take-off board"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Triple jump** is the horizontal jump in three parts: the athlete hops (lands on the take-off foot), steps (lands on the other foot) and jumps (lands in the pit with both feet). The total distance is the measure \u2014 and the sport is a vivid lesson in force, rhythm and energy transfer across repeated impacts.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The whole action starts from one take-off board, as in long jump \u2014 the foul rule is identical (foot past the front edge).
- The hop lands on the **same foot** as take-off; the step lands on the **other foot**; the jump lands **both feet** in the sand.
- Measured to the nearest sand disturbance from the foul line; wind rules apply to records.
- Finals use a series of attempts with the best distance counting.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Phase balance**: elite ratios are roughly hop:step:jump \u2248 35 : 30 : 35% of the total.
- The hop is flat and long; the step is quick and low so the athlete's hips stay level; the jump is the final explosive drive into the pit.
- Each landing must "stick and press" \u2014 absorbing impact and immediately driving off, using the stretch-shortening cycle of the ankles.
- The approach is fast and controlled; the athlete must not lose horizontal speed at any of the three contacts.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- The triple jump is pounding: ankle sprains, Achilles strain, shin pain and hamstring pulls are common.
- Prevention: gradual plyometric volume, ankle and calf strengthening, and soft-landing technique drills.
- Care: rest and R.I.C.E. at first pain; restore technique rhythm before volume when returning.` }
    ]
  },
  {
    slug: "pole-vault",
    title: "Pole Vault",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Pole vault is a vertical jump in which a flexible pole stores energy and launches the athlete over a high bar \u2014 the technical peak of track and field jumping.",
    infobox: [
      ["Invented", "Germany (gymnasts' pole techniques); fibre poles 1960s"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 clearance-based elimination"],
      ["Runway", "~40 m \u00B7 vaulting box at the standards"],
      ["Olympic", "Since 1896 (men), 2000 (women)"],
      ["Common injuries", "Ankle sprains, wrist strain, shoulder overload"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Pole plant", "Take-off", "Swing-up", "Invert", "Standard height"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Pole vault** uses a flexible, high-modulus pole that bends under the athlete's run-up and then springs back, converting kinetic energy into height. The vaulter plants the pole in a box, swings up, inverts and clears a bar like in high jump. It is the most technique-heavy event in athletics and a perfect study of energy conversion.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The pole plants into a **take-off box**; the athlete runs a ~40 m runway.
- The bar rises by set increments; three cumulative failures end the athlete's competition, as in high jump.
- The vaulter may choose a **move-up (higher) bar** and may pass heights.
- Touching the landing pit or knocking the bar without clearing = a failed attempt.
- Equipment: pole flex rating, hand-grip height limited by the top of the pole; padding and standards are checked for safety.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Approach & plant**: maximum speed; the pole tip drops into the box and the top hand rises as the body leans back.
- **Take-off**: the take-off foot passes under the top hand; energy loads the pole (bend).
- **Swing-up and rock-back**: the legs swing to the pole top, the shoulders sit low.
- **Invert and turn**: hips rise above the shoulders; the body straightens and turns to face the bar.
- **Clearance**: push-off from the pole, arched back over the bar, legs flick clear, landing on the back in the pit.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle and foot strain at the plant and take-off; wrist and shoulder overload from the swing; landing bruises in the pit.
- Prevention: pole-plant drills on soft surfaces, upper-body strength, and supervised progression down to high bars only under coaching.
- Care: R.I.C.E. for acute pain; never push through a wrist or shoulder injury that limits gripping strength.` }
    ]
  },
  {
    slug: "shot-put",
    title: "Shot Put",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Shot put is the pushing throw event \u2014 a heavy metal ball pushed from the shoulder from a 2.135 m circle into the sand or grass sector.",
    infobox: [
      ["Invented", "Scotland/England, from stone-pushing roots"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series"],
      ["Implement", "4 kg (women) \u00B7 7.26 kg (men) \u00B7 5 kg juniors"],
      ["Circle", "2.135 m diameter \u00B7 sector 34.92 degrees"],
      ["Olympic", "Since 1896 (men), 1948 (women)"],
      ["Common injuries", "Shoulder strain, wrist strain, patellar-knee stress"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Glide", "Rotational technique", "Throwing position", "Sector", "Scratch line"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Shot put** is a pushing throw in which the athlete pushes a heavy metal shot from the neck, using the **glide** or **rotational** technique, from inside a 2.135 m circle. It is a pure test of explosive power, technique and balance under heavy load.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The throw is made from a 2.135 m diameter circle; the athlete must not touch outside the top of the circle.
- The shot must be **pushed**, not thrown overarm; it starts at the neck and is released at the cheek.
- Landing at the front half of the 34.92-degree sector counts; a throw touching the sector lines is valid only when the shot's centre is within.
- Athletes must leave through the **back half** of the circle after the throw.
- Series formats: qualifying rounds and finals, best of six, best mark wins.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Glide**: a low backwards shuffle across the circle followed by a block and punch at the front.
- **Rotational**: a discus-like spin builds angular momentum into the release.
- **Throwing position**: feet staggered, hips square, knees bent; the leg drive, hip rotation, then the final push beyond the shoulder and wrist.
- Key biomechanics: force through the legs into the shot, release angle ~35\u201338 degrees, and the non-throwing arm acting as a brake (block).` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Shoulder and wrist strain from the heavy loading; knee stress in the glide; back discomfort in the rotational method.
- Prevention: throwing strength and mobility, proper footwork, and graduated implement weight.
- Care: R.I.C.E. for acute joint pain; check the release position if the shoulder aches repeatedly.` }
    ]
  },
  {
    slug: "discus",
    title: "Discus Throw",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Discus is the spinning throw of a heavy disc from a 2.5 m circle into a 34.92-degree sector \u2014 a balance of rotation, arm speed and angular momentum.",
    infobox: [
      ["Invented", "Ancient Greek Games (the classical discobolos)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series"],
      ["Implement", "1 kg (women) \u00B7 2 kg (men)"],
      ["Circle", "2.5 m diameter \u00B7 sector 34.92 degrees"],
      ["Olympic", "Since 1896 (men); 1928 (women)"],
      ["Common injuries", "Shoulder strain, elbow strain, foot and ankle sprains"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Rotational wind-up", "Release", "Sector", "Blocking arm", "Angular momentum"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Discus throw** sends a heavy disc hurtling from the hand after one-and-a-half spinning turns in a 2.5 m circle. Speed of rotation, long levers and a crisp release govern the distance \u2014 one of the purest demonstrations of angular momentum in sport.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The throw begins and ends inside the 2.5 m circle; stepping out over the front rim is a foul.
- The disc must land inside the 34.92-degree sector; a disc touching the sector line is valid only if its centre is in.
- Athletes leave through the back half of the circle.
- The disc is thrown with a spinning motion at ~50 km/h release speed in elite athletes.
- Competition series: qualifying and finals with a best-of-six format.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Wind-up**: a relaxed pendulum swing before the spin builds momentum.
- **The turns**: the athlete rotates on the ball of the foot, hips over the legs, the disc kept far back on an extended arm (long lever).
- **Release**: the legs drive, the hips lead, the shoulder follows, and the disc leaves the index finger at a ~35-degree angle; the non-throwing arm blocks.
- The whole action transfers weight across the circle from back to front using angular momentum and centripetal force.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Elbow and shoulder strain from the long-lever whip; foot and ankle sprains from the rotational base (especially on imperfect surfaces).
- Prevention: rotation drills on a flat circle, shoulder/elbow strength, and spike shoes where allowed.
- Care: R.I.C.E. at first joint pain; fix the footwork before adding speed.` }
    ]
  },
  {
    slug: "hammer",
    title: "Hammer Throw",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Hammer throw whirls a steel ball on a wire around the athlete before launching it far into the field \u2014 the longest-thrown implement in athletics.",
    infobox: [
      ["Invented", "Ireland/Scotland (hammer-headed throwing roots)"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series"],
      ["Implement", "4 kg (women) \u00B7 7.26 kg (men) \u00B7 ~1.17 m of wire"],
      ["Circle", "2.135 m \u00B7 sector 34.92 degrees"],
      ["Olympic", "Since 1900 (men), 2000 (women)"],
      ["Common injuries", "Back strain, knee stress, hand blisters/calluses"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Overturns", "Winds", "Release point", "Centripetal force", "Vertical release angle"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Hammer throw** is the spinning of a heavy ball on a 1.17 m wire, with the athlete turning three to four times to build speed before the release from a 2.135 m circle. Men release a 7.26 kg hammer, women 4 kg \u2014 yet both exceed 70 m at the top level.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- Throws end in the circle; touching outside the circle's rim is a foul.
- The hammer must land inside the 34.92-degree sector; the head of the hammer marks the landing point.
- Exit must be through the back half of the circle.
- The ball must be thrown with the handle held by both hands, and the athlete must stay inside the circle with the hammer in contact or controlled throughout the turns.
- Series format (qualifying, finals, best-of-six) matches the other throws.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Wind-up**: two preliminary swings build the orbit before the full turns.
- **Turns**: the athlete rotates around the left heel with the hammer orbiting high \u2014 centrifugal force keeps the heavy head moving; the shoulders stay square and the head is locked on the sector.
- **Release**: the athlete pulls the hammer up and lets it go at the optimal ~44-degree vertical release angle, following through to stay balanced.
- The sport is a study of centripetal force, angular velocity and the lever system of the arms and shoulders.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Back strain from the deep rotational lean; knee stress in the turn knee; blisters and torn calluses on the hands; an occasional mis-timed release (the hammer landing over the cage line is a safety flaw).
- Prevention: turn technique drills, strong core, gloves/taping, and always throwing in the cage.
- Care: R.I.C.E. for strains; rest the back rather than training through sciatic pain.` }
    ]
  },
  {
    slug: "javelin",
    title: "Javelin Throw",
    altNames: null,
    category: "athletics",
    emoji: "\u{1F3C3}",
    lede: "Javelin is the spear throw over a run-up into a sector \u2014 the one athletics throw built entirely on arm speed, leg drive and aerodynamic flight.",
    infobox: [
      ["Invented", "Ancient Greek Games and hunting spear history"],
      ["Governing body", "World Athletics"],
      ["Format", "Individual \u00B7 best of a series"],
      ["Implement", "800 g (women) \u00B7 800 g (men since 1986)"],
      ["Runway", "36.5 m \u00B7 scratch line \u00B7 sector 28.96 degrees"],
      ["Olympic", "Since 1908 (men), 1932 (women)"],
      ["Common injuries", "Elbow strain, shoulder impingement, lower-back pain"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Championships", "Diamond League"],
    keyTerms: ["Run-up", "Cross-over", "Withdrawal", "Release", "Scratch line"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Javelin throw** is the spear-like implement thrown with a full run-up from a 36.5 m runway into a 28.96-degree sector. It depends on optimal release velocity, angle and a stable aerodynamic flight \u2014 the only athletics throw powered mostly by the run-up rather than a circle.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- The thrower runs along a marked runway and releases before the **scratch line**; stepping over it is a foul.
- The javelin must land **point-first** (its tip marks the landing) inside the sector.
- The throw is released over the shoulder or upper arm, not from sideways or sling throws.
- Competitions use a series (six throws in finals), best mark wins, with qualifying rounds.
- Since 1986 the men's javelin was redesigned (moved centre of mass) to stop excessive distances \u2014 now ~800 g.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Run-up**: accelerates to maximum controllable speed; the javelin is withdrawn behind the ear on the last five strides (cross-over steps).
- **Release**: the legs and hips explode forward, the chest opens, and the arm whips the javelin out at ~34 degrees \u2014 the elbow leads, then the hand.
- **Flight**: the javelin must fly point-first; the tail drops to give it stability.
- The event is a study of linear momentum from the run-up plus the kinetic chain (legs \u2192 hips \u2192 shoulder \u2192 elbow \u2192 wrist).` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Elbow strain** (the thrower's elbow) and shoulder impingement from the whip; lower-back pain from the cross-over lean.
- Prevention: full-body throwing strength, core and rotator-cuff work, and gradual distance increments.
- Care: R.I.C.E. for acute joint pain; a throwing elbow that swells needs medical review and rest from the whip.` }
    ]
  }
  ]);
})();