/* ==========================================================================
   THE ARENA — Academic Articles
   Syllabus-aligned articles for the core sports of PHE / B.P.Ed study.
   Sections are tagged to modules (m1 Anatomy, m2 Kinesiology, m3 Training,
   m4 Officiating, m5 Psychology, m6 Health). Court keys reference DIAGRAMS.
   ========================================================================== */

window.ARTICLES = [
/* ======================================================================== */
{
  slug: "basketball",
  title: "Basketball",
  altNames: "Hoops, B-Ball",
  category: "court",
  emoji: "\u{1F3C0}",
  lede: "Basketball is a fast, five-a-side court game in which two teams aim to throw a ball through a raised hoop while the other team defends. Invented in 1891 by Dr James Naismith, it is one of the most studied invasion games in physical education because it blends spatial awareness, passing, jumping mechanics and team tactics.",
  infobox: [
    ["Invented", "1891, Springfield, USA \u2014 Dr James Naismith"],
    ["Governing body", "FIBA (International Basketball Federation)"],
    ["Format", "Team \u00B7 5 players per side on court"],
    ["Duration", "4 \u00D7 10 min (FIBA) \u00B7 4 \u00D7 12 min (NBA)"],
    ["Ball", "Size 7 (men) \u00B7 Size 6 (women); circumference 74.9\u201378 cm"],
    ["Court", "28 m \u00D7 15 m"],
    ["Olympic", "Since 1936 (men), 1976 (women)"],
    ["Common injuries", "Ankle sprains, ACL injuries, jammed fingers"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "basketball",
  verified: true,
  competitions: ["FIBA World Cup", "Olympic Games", "NBA", "EuroLeague", "Federation Cup (India)"],
  keyTerms: ["Dribble", "Pivot foot", "Double dribble", "Travelling", "Three-second lane", "Shot clock"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ball & hoop**
- **Ball** — Size 7 for men (circumference 74.9–78 cm, mass 567–650 g), Size 6 for women, Size 5 for juniors. Softer, lower-bounce balls are used for beginners.
- **Rim & backboard** — rim diameter 45 cm, hung 3.05 m above the floor; backboard 1.80 m × 1.05 m; front edge of the board 1.20 m inside the baseline.
- **Court fixtures** — scoreboard, shot clock (24 s), game clock, and alternating-possession arrow for jump-ball situations.

**Footwear, attire & safety**
- **Shoes** — high-top or mid-top court shoes with non-marking soles to protect ankles and grip the floor.
- **Uniform** — sleeveless jersey tucked into shorts, socks; jewellery is removed as a safety rule.
- **Officials' gear** — whistles, foul counters (black/white paddles), throw-in indicators and timekeeper tools.` },
    { id: "history", title: "History & development", module: null, body: `Naismith created basketball in a Springfield YMCA gymnasium to give indoor exercise during winter. The first games used a soccer ball and peach baskets; the bottom of the basket had to be opened by hand after every score, which later led to the modern netless open-hoop design. The first official rules (13 original rules) were published in 1892, and the sport spread worldwide through the YMCA, arriving in India in the early 1900s.

**Key milestones**
- 1932 \u2014 FIBA founded; standardised international rules.
- 1936 \u2014 First Olympic basketball tournament in Berlin.
- 1946 \u2014 NBA founded; the professional game develops the fast-break and shot-clock era.
- 1989 \u2014 FIBA opens doors to professional players for the Olympics.

In the B.P.Ed curriculum, basketball is used to teach invasion-game principles: creating and denying space, transition offence-defence, and the psychology of pressure shooting.` },
    { id: "court", title: "The court & markings", module: "m4", body: `The FIBA court is **28 m long and 15 m wide**. All lines are 5 cm wide and part of the area they bound. Key zones are:
- **Centre circle** \u2014 radius 1.80 m, used for the jump ball.
- **Restricted area (key / paint)** \u2014 4.90 m \u00D7 5.80 m rectangle.
- **Free-throw line** \u2014 5.80 m from the baseline, 4.60 m inside the court.
- **Three-point line** \u2014 an arc of 6.75 m from the basket (6.75 m FIBA, 7.24 m NBA).
- **Basket height** \u2014 ring at 3.05 m above the floor, diameter 45 cm.
- **Backboard** \u2014 1.05 m \u00D7 1.80 m, mounted 2.90 m from the floor to its lower edge.

The interactive diagram shows each zone. For exams, remember that the three-second rule applies only in the opponent's restricted area while the clock is running.` },
    { id: "rules", title: "Core rules", module: "m4", body: `The object is to score more points than the opposition by the end of the fourth quarter. A field goal inside the arc scores **2 points**, outside the arc scores **3 points**, and a free throw scores **1 point**.

**Fundamental violations**
- **Travelling** \u2014 moving the pivot foot without dribbling.
- **Double dribble** \u2014 dribbling again after stopping and holding the ball.
- **Carrying / palming** \u2014 turning the hand under the ball while dribbling.
- **Three seconds** \u2014 staying in the opponent's lane too long.
- **Eight seconds** \u2014 failing to cross the mid-court line.
- **24 seconds** \u2014 the shot clock; a shot must leave the hand and hit the rim before it expires.
- **Backcourt violation** \u2014 returning the ball to the backcourt after crossing.

**Fouls** are illegal personal contact; five personal fouls (FIBA) disqualify a player. A **technical foul** is non-contact misconduct, and an **unsportsmanlike foul** is overly hard or dangerous play. Team fouls in excess of the limit (four per quarter in FIBA) send the opponent to the free-throw line.` },
    { id: "skills", title: "Fundamental skills & technique", module: "m2", body: `The skill set divides into **offensive**, **defensive** and **team** skills.

- **Dribbling** \u2014 low, controlled bounces with the fingertips (never the palm); the ball is pushed by wrist action while the knees stay flexed. Changing pace and direction creates separation.
- **Passing** \u2014 chest pass (fast, for close range), bounce pass (past the defender), overhead pass (for entry into the post).
- **Shooting** \u2014 the one-hand set shot and the jump shot. **BEEF** is the coaching acronym: Balance, Eyes on target, Elbow aligned, Follow-through. The flick of the wrist imparts backspin.
- **Rebounding** \u2014 boxing out the opponent and attacking the ball at its highest point.
- **Pivoting** \u2014 rotating on one foot to protect the ball and change direction.
- **Defence** \u2014 man-to-man and zone systems; stance is wide, knees bent, hands active.

>>> exam
Biomechanics of the jump shot
The optimal release for a jump shot is around 45\u201355\u00B0 above horizontal. Higher release angles require a longer time of flight but reduce the horizontal distance the defender can cover. Backspin creates a **gyroscopic (Magnus) effect** that improves the ball's landing angle and the chance of a soft bounce off the rim.
` },
    { id: "anatomy", title: "Muscles & joints in play", module: "m1", body: `Basketball recruits nearly every major muscle group, which makes it a full-body conditioning sport:

- **Lower body** \u2014 quadriceps, hamstrings, gluteals and calf muscles drive jumping (vertical leap) and lateral defensive slides; the hip, knee and ankle joints work through full extension in take-off.
- **Trunk** \u2014 the abdominal and back muscles stabilise the spine during contact and rotation; core strength transfers power from legs to arms.
- **Upper body** \u2014 the shoulder (gleno-humeral joint), elbow and wrist control shooting and passing. The deltoid, triceps and flexors of the forearm are the primary movers.

**Kinesiology note:** the vertical jump is a countermovement action \u2014 the stretch-shortening cycle loads the achilles tendon eccentrically before explosive concentric extension, producing a greater impulse than a jump from a static crouch.` },
    { id: "training", title: "Conditioning for basketball", module: "m3", body: `Basketball is **interval-dominant**: short explosive bursts (2\u201310 s) separated by brief rest, sustained over 40 minutes. Training therefore combines:

- **Agility ladder and cone drills** \u2014 footwork speed and change of direction.
- **Plyometrics** \u2014 box jumps and depth jumps to raise vertical leap.
- **Interval running** \u2014 court-length sprints with walk-back recovery to build the lactic system.
- **Circuit training** \u2014 stations for strength, speed and endurance.
- **Weight training** \u2014 squats, lunges and calf raises; the fast-twitch (Type II) fibres are the focus for power.

Pre-game routine: 10\u201315 minutes of dynamic stretching (leg swings, walking lunges, hip circles) followed by passing and shooting warm-ups, avoiding static stretching before explosive activity.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A FIBA game is controlled by **two or three referees** plus the table officials (scorer, timer, shot-clock operator, 24-second operator).

**Referee duties**
- Verify the court, ball, scoreboard and equipment before the game.
- Administer the jump ball to start each period.
- Call violations and fouls, awarding free throws or throw-ins.
- Use the standard **hand signals** \u2014 e.g. 1 point (one finger down), 2 points (two fingers down), 3 points (three fingers), travelling (rolled fists), blocking (hands on hips), charging (fist on palm).
- Manage the flow of the game and player conduct, including technical fouls.

**Scoring system**: A team earns 2 or 3 points per field goal, 1 per free throw. Overtime is a 5-minute extra period, repeated until the tie is broken.` },
    { id: "terminology", title: "Key terminology", module: null, body: `- **Dribble** \u2014 bouncing the ball while moving; a legal way to advance.
- **Pivot** \u2014 turning on the established foot.
- **Fast break** \u2014 a quick offensive advance after a turnover or rebound.
- **Screen / pick** \u2014 a legal block that lets a teammate cut past the defender.
- **Alley-oop** \u2014 a pass caught in the air and scored before landing.
- **Man-to-man / zone** \u2014 the two basic defensive alignments.
- **Field goal percentage** \u2014 baskets made divided by baskets attempted.` },
    { id: "injuries", title: "Injury prevention & first aid", module: "m6", body: `The most common basketball injuries are **ankle sprains** (inversion), **ACL injuries** from landing and cutting, **jammed fingers** and **patellar tendinopathy** ("jumper's knee").

- Ankle sprain \u2014 immediate **R.I.C.E.** (Rest, Ice, Compression, Elevation), then ankle-strengthening and balance work.
- Jammed finger \u2014 buddy-taping the injured finger to a healthy one, ice and rest.
- Jumper's knee \u2014 reduce jumping load, eccentric quadriceps work, taping for support.
- Prevention \u2014 proper footwear, court surface checks, ankle strapping for players with a history of injury, and neuromuscular warm-ups (e.g. FIFA 11+ style routines adapted for court sports).` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — State the standard FIBA court dimensions. **A** — 28 m × 15 m, lines 5 cm wide, three-point arc 6.75 m, centre circle radius 1.80 m.
2. **Q** — What do the 3-second and 8-second rules mean? **A** — An offensive player cannot stay in the key longer than 3 s; the team has 8 s to cross mid-court.
3. **Q** — How are points scored? **A** — Free throw 1, field goal 2, shot beyond the arc 3.
4. **Q** — How many personal fouls before disqualification (FIBA)? **A** — 5; team bonus (2 free throws) begins after the 4th team foul per quarter.
5. **Q** — Name the five positions. **A** — Point guard, shooting guard, small forward, power forward, centre.

>>> exam
Quick memory anchors
- Court 28 × 15 m · rim 3.05 m · ball size 7/6 · shot clock 24 s · arc 6.75 m
- 4 quarters × 10 min (FIBA) · 5 fouls to exit · bonus after 4 team fouls` }
  ]
},
/* ======================================================================== */
{
  slug: "football",
  title: "Football (Association)",
  altNames: "Soccer",
  category: "field",
  emoji: "\u26BD",
  lede: "Association football \u2014 football or soccer \u2014 is the world's most popular sport, played between two teams of eleven on a grass or synthetic pitch with the objective of scoring goals. It is the anchor sport of most PHE curricula because its rules, techniques and physiology are taught at every level from school to university.",
  infobox: [
    ["Origin", "Codified 1863 in England (The FA)"],
    ["Governing body", "FIFA (F\u00E9d\u00E9ration Internationale de Football Association)"],
    ["Format", "Team \u00B7 11 players per side (incl. goalkeeper)"],
    ["Duration", "2 \u00D7 45 min + stoppage time"],
    ["Ball", "Size 5; circumference 68\u201370 cm; 410\u2013450 g"],
    ["Pitch", "90\u2013120 m \u00D7 45\u201390 m"],
    ["Olympic", "Men 1900/1908 \u00B7 Women since 1996"],
    ["Referee", "1 central + 2 assistants (VAR in modern pro play)"]
  ],
  modules: ["m1", "m2", "m3", "m4", "m5"],
  court: "football",
  verified: true,
  competitions: ["FIFA World Cup", "UEFA Champions League", "Copa Am\u00E9rica", "AFC Asian Cup", "ISL (India)"],
  keyTerms: ["Offside", "Throw-in", "Corner kick", "Free kick", "Penalty", "Dribbling", "Marking"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ball & goal**
- **Ball** — Size 5; circumference 68–70 cm; mass 410–450 g; inflated to 0.6–1.1 atm (600–1100 g/cm²).
- **Goal** — 7.32 m wide × 2.44 m high, with netting; corner flags mark the arcs.
- **Boots** — studded footwear chosen for the pitch (firm, soft or artificial ground); always worn with shin guards, which are mandatory under the Laws.

**Kit & protection**
- **Shirt, shorts, socks** — the goalkeeper's shirt must differ from both teams and the referee.
- **Safety** — no jewellery or hard objects; captain wears an armband; tape on socks over shin guards.
- **Referee kit** — whistle, cards (yellow/red), spray can for the 9.15 m distance at free kicks.` },
    { id: "history", title: "History & development", module: null, body: `Games resembling football were played in ancient China (cuju), Greece (episkyros) and Rome (harpastum). The modern code emerged in 19th-century English public schools, and the Football Association was formed in **1863** to unify the rules \u2014 splitting from rugby by banning handling of the ball. FIFA was founded in **1904**, the first World Cup held in **1930**, and football became the official Olympic sport at London **1908**.

Football arrived in India in the late 1800s; the country hosted its first international match in 1924. India's football heritage includes the 1911 IFA Shield victory of Mohun Bagan and the 1951/1962 Asian Games gold medals.` },
    { id: "pitch", title: "The pitch & markings", module: "m4", body: `A football pitch is rectangular, **90\u2013120 m long and 45\u201390 m wide** (for international matches 100\u2013110 m \u00D7 64\u201375 m). Standard markings:

- **Centre line** \u2014 divides the pitch; the **centre circle** has a 9.15 m radius.
- **Penalty area (18-yard box)** \u2014 16.5 m deep from each goal line and 40.3 m wide.
- **Goal area (six-yard box)** \u2014 5.5 m deep and 18.3 m wide.
- **Penalty spot** \u2014 11 m from the goal line; the **penalty arc** is a 9.15 m radius outside the box.
- **Goals** \u2014 7.32 m wide \u00D7 2.44 m high.
- **Corner arcs** \u2014 1 m radius quarter-circles at each corner; corner flags mark the four corners.
- **Technical areas** \u2014 dugout zones for coaches along the touchline.

>>> exam
The 9.15 m rule
All opponents must stand at least 9.15 m (10 yards) from the ball for kick-offs, free kicks, corners and penalties. This distance equals the centre-circle radius \u2014 the Laws built every "minimum distance" off one dimension.
` },
    { id: "rules", title: "The Laws of the Game", module: "m4", body: `Played with **17 Laws**, the most exam-relevant are:

- **Law 3** \u2014 eleven players per team; three substitutions (more in some competitions).
- **Law 7** \u2014 two halves of 45 minutes with a 15-minute interval; stoppage time added at the referee's discretion.
- **Law 11 \u2014 Offside**: a player is offside if any part of the head, body or feet is nearer the opponents' goal line than both the ball and the second-last opponent, at the moment the ball is played. Being offside is only an offence when actively involved in play.
- **Law 12** \u2014 fouls and misconduct; serious fouls earn a yellow (caution) or red (dismissal) card.
- **Law 14** \u2014 the penalty kick from 11 m, only the kicker and goalkeeper in the box.
- **Law 15** \u2014 the throw-in \u2014 both feet must contact the ground, and the ball released with both hands from behind and over the head.
- **Goal scored** when the whole ball crosses the whole goal line between the posts and under the crossbar.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Ball control skills**
- **Passing** \u2014 instep drive for distance, inside-of-foot push pass for accuracy.
- **Trapping** \u2014 cushioning the ball with the sole, instep, thigh or chest to bring it under control.
- **Dribbling** \u2014 close control with the ball touching the outside of the foot; the head is raised to read space.
- **Heading** \u2014 striking the ball with the forehead (not the crown) while the neck muscles are braced; used for passing, clearing and scoring.
- **Shooting** \u2014 the laced instep strike with the body leaning over the ball for low shots; the non-kicking foot placed beside the ball.

**Goalkeeping** \u2014 catching, punching, parrying and diving, plus distribution with hands and feet.

>>> exam
Biomechanics of the instep kick
The instep (laces) kick is a **projectile** skill. Success depends on (1) approach angle of about 45\u00B0, (2) plant foot beside the ball, (3) high follow-through, (4) the moment of force generated by the knee extension added to hip flexion. Distance is maximised at a 45\u00B0 release angle, while power passes favour a lower, flatter trajectory.
` },
    { id: "physiology", title: "Physiological demands", module: "m1", body: `An elite player covers **10\u201313 km per match**, of which 800\u20131200 m is high-intensity sprinting \u2014 the classic model of **intermittent endurance**. Energy supply is shared:

- **ATP-CP** \u2014 sprints, jumps and tackles (0\u201310 s).
- **Lactic (anaerobic glycolysis)** \u2014 repeated high-speed runs.
- **Aerobic system** \u2014 the base for 90 minutes of steady jogging and recovery between efforts.

**Key fitness components**: aerobic capacity (VO\u2082max \u2248 60 ml/kg/min in elites), agility, speed of leg, muscular endurance of the core and quadriceps, and the flexibility of the hamstrings, which are the most injury-prone muscle in football.` },
    { id: "training", title: "Training methods", module: "m3", body: `**Pre-season** (macrocycle \u2192 preparation phase) builds the aerobic base with distance runs and fartlek; **in-season** maintains match fitness with interval work and small-sided games; **transition** (off-season) uses light cross-training and recovery.

- **Interval training** \u2014 e.g. 6 \u00D7 400 m at near-maximum with 90 s recovery to train speed-endurance.
- **Fartlek** \u2014 mixed-speed terrain running to simulate match surges.
- **Small-sided games** \u2014 5v5 to 8v8, which increase ball contacts and tactical decisions.
- **Strength** \u2014 squats, hamstring curls and single-leg work to protect the knee.
- **Plyometrics** \u2014 jump and hop drills for heading and shooting power.` },
    { id: "psychology", title: "Psychology in football", module: "m5", body: `Penalty shoot-outs and pressure moments make football a rich case study in **arousal regulation** and **anxiety management**:

- **Pre-shot routine** \u2014 a fixed sequence of actions (breathing, ball placement, focus point) lowers arousal to the optimal zone.
- **Visualisation / mental rehearsal** \u2014 players "see" the kick before taking it, activating the same motor patterns.
- **Self-talk** \u2014 positive instructional cues ("low and hard to the corner") crowd out negative thoughts.
- **Team cohesion** \u2014 dressing-room culture, leadership and social support influence performance more than in individual sports.` },
    { id: "officiating", title: "Officiating & signals", module: "m4", body: `The **central referee** controls the match using a whistle and standard signals: direct free kick (arm forward), indirect free kick (arm raised, held until the ball is played), advantage (both arms swept forward), penalty (pointed at the spot), caution (yellow card), dismissal (red card). Assistant referees flag offsides, throw-ins and goals; the fourth official manages substitutions and time.

**Tournament formats**: knockout, league/round-robin and combination. For a **single-elimination** of 16 teams, no byes are needed; for 12 teams, byes = next power of two (16) minus 12 = 4 byes. A **league of 8 teams** requires 8\u00D77/2 = 28 matches.` },
    { id: "injuries", title: "Injuries & prevention", module: "m6", body: `**Common injuries**: hamstring strains, ankle sprains, knee ligament injuries (ACL/MCL), groin strains and concussions from heading collisions.

- **Hamstring strain** \u2014 eccentric strengthening (Nordic curls) is the strongest preventive measure.
- **Ankle sprain** \u2014 proprioception training (balance boards) reduces recurrence.
- **Concussion** \u2014 immediate removal from play, medical assessment; never return on the same day if symptomatic.
- **FIFA 11+** \u2014 a structured 20-minute warm-up programme that reduces injuries by up to 50% in amateur players.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Give the standard pitch dimensions. **A** — 105 m × 68 m; goals 7.32 m × 2.44 m; centre circle radius 9.15 m; penalty spot 11 m; penalty area 16.5 m deep.
2. **Q** — What is offside? **A** — An attacker is offside if nearer to the goal line than the ball and the second-last opponent when the ball is played.
3. **Q** — Explain the card system. **A** — Yellow = caution; red = dismissal; two yellows equal a red.
4. **Q** — How is a throw-in taken correctly? **A** — Both feet on or behind the touchline, ball thrown overhead with two hands from behind the head.
5. **Q** — Match duration? **A** — 2 halves of 45 minutes plus stoppage time; most competitions allow 5 substitutions.

>>> exam
Quick memory anchors
- 105 × 68 m · goal 7.32 × 2.44 m · spot 11 m · arc 9.15 m
- 45 + 45 min · 1 goal = 1 point · offside + throw-in laws are favourite questions` }
  ]
},
/* ======================================================================== */
{
  slug: "volleyball",
  title: "Volleyball",
  altNames: "Indoor Volleyball",
  category: "court",
  emoji: "\u{1F3D0}",
  lede: "Volleyball is a six-a-side net sport in which two teams rally a ball over a high net without letting it touch their own court. Invented in 1895 by William G. Morgan as 'mintonette', it is a core PHE sport because it isolates serving, passing, setting, attacking and blocking \u2014 each a clean, teachable skill.",
  infobox: [
    ["Invented", "1895, Holyoke, USA \u2014 William G. Morgan"],
    ["Governing body", "FIVB (F\u00E9d\u00E9ration Internationale de Volleyball)"],
    ["Format", "Team \u00B7 6 players per side"],
    ["Net height", "2.43 m (men) \u00B7 2.24 m (women)"],
    ["Ball", "Circumference 65\u201367 cm; 260\u2013280 g"],
    ["Court", "18 m \u00D7 9 m"],
    ["Scoring", "Rally (best of 5 sets; 25 points, win by 2)"],
    ["Olympic", "Since 1964"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "volleyball",
  verified: true,
  competitions: ["FIVB World Championship", "Olympic Games", "World League", "Asian Games"],
  keyTerms: ["Rotation", "Service", "Spike", "Block", "Dig", "Rally", "Rotation fault"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ball & net**
- **Ball** — circumference 65–67 cm; mass 260–280 g; internal pressure only 0.30–0.325 kg/cm² so it does not hurt the wrists.
- **Net** — height 2.43 m (men) / 2.24 m (women); antennae mark the 9 m playing width; net posts set 0.5–1.0 m from the side lines.
- **Court gear** — painted lines, scorer's table, official and player benches, and a ball cart.

**Clothing & protection**
- **Kit** — jersey, shorts, socks and non-marking court shoes; the libero wears a distinctly contrasting jersey.
- **Protection** — knee pads are common for defensive play and diving; ankle braces for sprain-prone players.` },
    { id: "history", title: "History", module: null, body: `Morgan, a YMCA physical director, blended basketball, tennis and handball into 'mintonette' as a less physical indoor game for older members. The name 'volleyball' came from the volleying nature of the rally. The first rules appeared in 1896, FIVB was founded in **1947**, and the sport joined the Olympics in **1964** (Tokyo). The **rally scoring** system (every rally wins a point) was adopted globally in 1999, making matches faster and more predictable.` },
    { id: "court", title: "The court", module: "m4", body: `The court is **18 m long and 9 m wide**, divided by a centre line and a net. Markings:

- **Attack line (3 m line)** \u2014 3 m from the centre line on each side; back-row players may not attack above the net from inside this zone.
- **Service zone** \u2014 the 9 m wide strip behind the end line.
- **Net** \u2014 2.43 m high for men, 2.24 m for women; 1 m wide, with antennas marking the in-bounds width.
- **Free zone** \u2014 a minimum 3 m clear area around the court (5 m international).

**Rotation**: each team's players rotate clockwise when they win the right to serve. Positions are numbered 1 (server) through 6; positional faults occur if a player stands out of order at the serve.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `The object is to ground the ball in the opponent's court. Each team may touch the ball a **maximum of three times** (the block touch does not count as one of the three) before it must cross the net.

**Key rules**
- A player may not **contact the ball twice in succession** (except after a block).
- The ball may not be **caught or thrown** \u2014 it must be cleanly hit.
- **Four hits** \u2014 using more than three contacts is a fault.
- **Net touch** during play is a fault.
- **Foot fault** \u2014 the server steps over the end line.
- **Rotation fault / positional fault** \u2014 incorrect order at the serve.

**Scoring**: a team wins a set at 25 points with a two-point lead (capped at 27 in some formats); the match is best of five, with the fifth set played to **15**. Service order, rotation and the free ball are all governed by the score sheet, which the scorer completes at every point.` },
    { id: "skills", title: "Fundamental skills", module: "m2", body: `- **Serve** \u2014 underhand (beginner) or overhand float/jump serve. The ball is struck with a flat palm; the float serve has no spin and moves unpredictably.
- **Pass (bump / forearm pass)** \u2014 used for receiving serves and low balls; platform is formed by the forearms, with the shoulders forward and knees bent.
- **Set** \u2014 an overhead finger-tip pass that lifts the ball high for the attacker; the hands form a triangle and the fingers contact the ball, not the palms.
- **Spike (attack)** \u2014 an explosive overhead hit; the approach is 3\u20134 steps with a two-footed plant, an arm-swing that brushes the non-hitting arm up, and a wrist snap for downward angle.
- **Block** \u2014 jumping at the net with arms raised to stop or deflect the spike.
- **Dig** \u2014 a defensive forearm pass of a hard-driven spike.

>>> exam
Projectile & biomechanics of the spike
The spike is a throw-like motion using the **kinetic chain**: legs \u2192 trunk rotation \u2192 shoulder \u2192 elbow \u2192 wrist. Reaching a high contact point uses the principle of **maximum height of release** to angle the ball steeply downward. The wrist snap adds a final angular velocity, increasing both speed and the sharpness of the descent angle.
` },
    { id: "anatomy", title: "Muscles involved", module: "m1", body: `- **Jumping** \u2014 quadriceps, gluteals and gastrocnemius power the vertical jump; the stretch-shortening cycle of the achilles and patellar tendons is heavily loaded, so "jumper's knee" and achilles problems are common.
- **Spiking / serving** \u2014 the deltoid, rotator cuff and latissimus dorsi accelerate the arm; the **internal rotation** of the shoulder is the final power source.
- **Core** \u2014 obliques and abdominals transfer force between legs and arm.
- **Passing** \u2014 ankle and knee extensors hold the receiving platform; wrist extensors control the platform angle.

The **sagittal plane** dominates serving and spiking (arm overhead), while **frontal-plane** work appears in lateral digs and shuffles.` },
    { id: "training", title: "Conditioning", module: "m3", body: `Volleyball is a **vertical-jump and reaction** sport. Programmes include:

- **Plyometric depth jumps** \u2014 2\u20133 sessions weekly, in blocks, to raise vertical leap.
- **Resistance training** \u2014 squats, Romanian deadlifts, calf raises; emphasise eccentric control on landing.
- **Core stability** \u2014 planks, med-ball throws and rotational work for the spike.
- **Agility drills** \u2014 side shuffles, reaction starts and short sprints (5\u201310 m).
- **Recovery** \u2014 cold therapy and light activation after heavy jump sessions, since jump volume is the biggest injury predictor.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A match is controlled by the **first referee** (on the stand, oversees everything), the **second referee** (assists, calls line faults and blockers' net touches) and line judges who signal in/out with flags.

**Referee duties**
- Check the court, ball pressure, net height and antennas.
- Call the toss, confirm line-ups and rotation sheets.
- Signal faults with the standard FIVB hand signals: service, double contact, four hits, net touch, foot fault, out.
- Manage timeouts (2 per set per team, 30 seconds) and substitutions (6 per set).

The **scorer** keeps the score sheet \u2014 this sheet is itself an exam topic in officiating units, testing rotation order, substitutions and set results.` },
    { id: "terminology", title: "Terminology", module: null, body: `- **Rally** \u2014 a sequence of play from serve to the moment a team wins the point.
- **Side-out** \u2014 (old system) when the receiving team wins the serve; no point.
- **Antenna** \u2014 vertical rods marking the legal width for the ball over the net.
- **Pipe** \u2014 a back-row (3 m line) attack from zone 6.
- **Libero** \u2014 a defensive specialist in a different-coloured shirt who can replace any back-row player without counting as a substitution, but may not attack above the net.
- **Wipe / tool** \u2014 deliberately hitting the ball off the opponent's block and out.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court dimensions? **A** — 18 m × 9 m, attack line 3 m from the centre, net 2.43 m (men) / 2.24 m (women).
2. **Q** — How many touches per team? **A** — Maximum 3 (a block does not count), and no player touches twice consecutively.
3. **Q** — Explain rally scoring. **A** — A point is scored on every rally; a set goes to 25 (win by 2), the deciding set to 15; a match is best of 5 sets.
4. **Q** — What is the libero? **A** — A defensive specialist in a contrasting jersey who may not attack above the net from the front zone.
5. **Q** — When do players rotate? **A** — Clockwise on winning the serve; failure to serve in the correct order is a positional fault.

>>> exam
Quick memory anchors
- 18 × 9 m · 3 touches · net 2.43/2.24 m · 3 m attack line
- 25 pts (15 deciding) · win by 2 · libero in contrasting jersey` }
  ]
},
/* ======================================================================== */
{
  slug: "kabaddi",
  title: "Kabaddi",
  altNames: "Kabbadi, Hu-Tu-Tu, Hadudu",
  category: "indigenous",
  emoji: "\u{1F3A7}",
  lede: "Kabaddi is India's great indigenous contact sport \u2014 a seven-a-side game in which a single 'raider' enters the opponents' half chanting 'kabaddi kabaddi' while trying to tag or tackle defenders and return to the midline. It is unique in combining **breath control, anaerobic fitness and rhythmic vocalisation**, making it a flagship sport of Indian B.P.Ed study.",
  infobox: [
    ["Origin", "India \u2014 ancient tradition; modern rules from the 20th century"],
    ["Governing body", "International Kabaddi Federation (IKF) / AKFI"],
    ["Format", "Team \u00B7 7 players per side + 5 reserves"],
    ["Duration", "2 \u00D7 20 min (men) \u00B7 2 \u00D7 15 min (women)"],
    ["Court", "13 m \u00D7 10 m (men) \u00B7 12 m \u00D7 8 m (women)"],
    ["Raid limit", "30 seconds per raid"],
    ["Scoring", "1 point per defender touched + bonus + all-out"],
    ["Olympic", "Demonstration sport (1936 Berlin \u00B7 1951 New Delhi)"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "kabaddi",
  verified: true,
  competitions: ["Kabaddi World Cup", "Pro Kabaddi League", "Asian Games", "National Games of India"],
  keyTerms: ["Raid", "Cant", "Catch", "Tackle", "All-out", "Bonus line", "Lona"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The court**
- **Playing area** — men 13 m × 10 m; women 12 m × 8 m; the mid-line splits the halves; baulk line 3.75 m from the mid-line; bonus line 1 m beyond the baulk; 1 m end zones and side lobbies.
- **Surface** — matted or soft turf to cushion falls; boundary and lane lines are drawn with chalk or tape.

**Attire & officials**
- **Players** — shorts and a sleeveless vest; bare feet or soft non-slip footwear; no hard jewellery or buckles.
- **Officials** — referee, two umpires, scorer and timekeeper; signal flags, whistle, stopwatch and scoreboard. The game uses no ball or bat — the "equipment" is the court itself.` },
    { id: "history", title: "History & cultural roots", module: null, body: `Kabaddi descends from ancient wrestling-adjacent games of South Asia. Regional names include **Hu-Tu-Tu** (Maharashtra), **Hadudu** (Bengal) and **Chedugudu** (Tamil Nadu). The All India Kabaddi Federation standardised rules in **1950**, and kabaddi was a demonstration sport at the 1936 Berlin Olympics and the 1951 Asian Games, entering the Asian Games as a medal sport in **1990**. The **Pro Kabaddi League (2014)** turned it into a commercial spectacle and gave the sport biomechanical study unprecedented exposure.` },
    { id: "court", title: "The court", module: "m4", body: `A kabaddi court is a rectangle **13 m \u00D7 10 m for men, 12 m \u00D7 8 m for women**, divided into two halves by the **midline**. Key lines:

- **Midline** \u2014 splits the court; raids begin from behind it.
- **Baulk line** \u2014 3.75 m from the midline on each side; a raider must cross it for the raid to count.
- **Bonus line** \u2014 1 m beyond the baulk line; crossing it while the defence has 6+ players earns a **bonus point**.
- **Lobby** \u2014 a 1 m wide strip on each side of the court; used only when a defender steps in pursuit.

>>> exam
The purpose of the baulk line
The baulk line prevents a raider from "touching and running". A raider must step beyond it while holding the cant (chant) to earn points or escape. This single rule forces the defender–raider contest to happen deep in the half, keeping the game exciting and fair.
` },
    { id: "rules", title: "Rules of the game", module: "m4", body: `**The raid**: One raider enters the opponents' half while continuously chanting the **cant** ("kabaddi, kabaddi\u2026") without breaking breath. The raid is over when the raider crosses back over the midline.

**Scoring**
- **Tag** \u2014 touching one or more defenders and returning = 1 point per defender touched.
- **Bonus point** \u2014 crossing the bonus line with the defenders keeping all seven players on the mat.
- **Tackle** \u2014 defenders catch the raider before he returns = 1 point to the defending team.
- **All-out (Lona)** \u2014 when a whole team is eliminated, the other team earns **2 points** and the eliminated team's players return.
- **Super tackle** \u2014 (PKL rules) 2 points when the defence tackles with 3 or fewer players on the mat.

**Violations**: crossing the midline without a valid raid, breaking the cant, and touching outside the court boundary. **Struggle** or fighting is penalised; a team with fewer than 4 players on court at the end is awarded a loss.

**Scoring system**: the team with more points after 40 minutes wins; a tie is decided by a golden raid (sudden death) in PKL.` },
    { id: "skills", title: "Raiding & tackling skills", module: "m2", body: `**Raiding techniques**
- **Toe touch** \u2014 a raider flicks the toe onto a defender's foot and escapes.
- **Hand touch** \u2014 reaching for the nearest defender then retreating.
- **Kick** \u2014 a defensive swish kick aimed at the midriff.
- **Bonus point raid** \u2014 stepping over the bonus line when defenders refuse to engage.

**Defensive techniques (Catch / Tackle)**
- **Ankle hold** \u2014 the primary tackle: one or both defenders grab the raider's ankle and yank him to the mat.
- **Waist hold** \u2014 two defenders wrap the torso.
- **Chain tackle** \u2014 successive defenders join the hold as the raider drags forward.
- **Blocking** \u2014 defenders form a wall; timing matters, because a miss gives the raider space.

>>> exam
Biomechanics of the ankle hold
The ankle hold is a **third-class lever** at the hip and knee. The defenders use their combined body weight as the load-resisting force, applying an off-axis (rotational) moment to unbalance the raider's centre of gravity, which is high because the raider leans forward to drag defenders. Dropping the hips lowers the tacklers' own centre of gravity, increasing their stability.
` },
    { id: "physiology", title: "Physiological demands", module: "m1", body: `Kabaddi is the classic study sport for **anaerobic power**:

- **Breath holding** during the raid stresses the **ATP-CP system** \u2014 bursts of 10\u201330 s with no breathing.
- Raids and tackles demand **speed, agility and leg strength**; defenders need **static strength** for holds.
- The **lactic system** fuels repeated high-intensity efforts; the **aerobic system** recovers between raids (a raid lasts \u2248 30 s, rest \u2248 10\u201315 s).
- The cant is itself a **respiratory training** exercise \u2014 controlled rhythmic breathing develops breath control and lung capacity.

**Body composition**: elite raiders are light and explosive; tacklers are heavier with a lower centre of gravity \u2014 a practical lesson in how morphology maps to playing role.` },
    { id: "training", title: "Training for kabaddi", module: "m3", body: `- **Breath control drills** \u2014 progressive breath holding (safe, supervised) and 'kabaddi chanting' runs.
- **Sprint-interval training** \u2014 10\u201320 m shuttle bursts to mirror raid length.
- **Core and neck strength** \u2014 bridging exercises; defenders regularly support body weight in holds.
- **Grappling practice** \u2014 tackling dummies and live drills with progressive resistance.
- **Flexibility** \u2014 hip openers and hamstring work for the deep ankle-hold crouch.
- **Periodisation** \u2014 pre-season base building, in-season competition sharpening (tapering before tournaments).` },
    { id: "officiating", title: "Officiating", module: "m4", body: `The referee controls the game with a whistle; the **umpire** and **scorer** manage raid decisions and the scoreboard. Officials check the cant is audible, raid time (30 s), bonus-line feet, and out-of-bound contact. Signals: point awarded, bonus, all-out, time-out, and warning cards for misconduct.

**Scoring sheet**: records each raid, who scored, and the running totals \u2014 crucial because a team's elimination (all-out) swings 2 points and restarts the count.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Give the men's court dimensions and key lines. **A** — 13 m × 10 m; baulk line 3.75 m and bonus line 4.75 m from the mid-line; 1 m end zones.
2. **Q** — What is a cant? **A** — The continuous chant of "kabaddi" the raider must maintain throughout the raid.
3. **Q** — How is a raid scored? **A** — 1 point for a clean touch-and-return; 1 bonus point for crossing the bonus line; 2 points for a super tackle; 2 points + 1 for an all-out.
4. **Q** — Raid time limit? **A** — 30 seconds; failing to return or losing the cant gives the defenders a point.
5. **Q** — Match duration? **A** — 2 halves of 20 minutes (men) with a 5-minute break.

>>> exam
Quick memory anchors
- 13 × 10 m · baulk 3.75 m · bonus 4.75 m · 30 s raid · 2 × 20 min
- All-out = 2 + 1 points · super tackle = 2` }
  ]
},
/* ======================================================================== */
{
  slug: "kho-kho",
  title: "Kho-Kho",
  altNames: "The Pursuit Game",
  category: "indigenous",
  emoji: "\u{1F3C4}",
  lede: "Kho-Kho is a traditional Indian tag-and-pursuit game played by twelve players on a two-lane court, in which chasing players pass an active 'chaser' status by tapping teammates with the word 'kho'. It develops extraordinary agility, anticipation and teamwork, and is a mandatory sport in many Indian B.P.Ed syllabi.",
  infobox: [
    ["Origin", "India \u2014 ancient game, formalised in the 20th century"],
    ["Governing body", "Kho Kho Federation of India (KKFI)"],
    ["Format", "Team \u00B7 12 players, 9 on court"],
    ["Duration", "2 \u00D7 7 min chase (men) \u00B7 2 \u00D7 5 min (women)"],
    ["Court", "27 m \u00D7 16 m with central lane"],
    ["Runners", "8 defenders on the mat, chased one at a time"],
    ["Scoring", "1 point per runner touched"],
    ["Governing note", "No physical contact \u2014 a pure agility sport"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "kho-kho",
  verified: true,
  competitions: ["Kho-Kho World Cup", "Asian Games (proposed)", "National Championships of India"],
  keyTerms: ["Chaser", "Runner", "Kho", "Foul kho", "Pole dive", "Ring", "Lobby"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The court & posts**
- **Court** — 27 m × 16 m; a 24 m central lane crosses it; two wooden posts, about 120 cm tall, stand at the ends of the lane.
- **Squares** — eight small squares (about 2.30 m × 0.30 m) are cut into the central lane for the sitting chasers.
- **Markings** — lime or chalk lines, plus the boundary and free-zone lines.

**Attire & officials**
- **Players** — shorts, sleeveless vest and soft flat footwear; the game is played with no ball or bat.
- **Officials** — referee, umpires, timekeeper and scorer; whistle, stopwatch and score sheet are the only instruments.` },
    { id: "history", title: "History", module: null, body: `Kho-Kho's origins lie in ancient Indian pursuit games played on horseback or foot (the Mahabharata-era 'Rathera'). It was formalised in the early 1900s, with the first rules printed in the 1924 Deccan Gymkhana booklet. The Kho Kho Federation of India was formed in **1955**, and the sport is now played in over 20 countries, with a growing international federation pushing for the Asian Games.` },
    { id: "court", title: "The court", module: "m4", body: `The court is **27 m long and 16 m wide**, with a **central lane** running lengthwise, **8 posts** at each cross-lane junction, and **two free zones** at either end.

- **Central lane** \u2014 23.5 m long and 30 cm wide, where the active chaser runs.
- **Cross lanes** \u2014 16 m long, at right angles to the central lane, dividing the court into 8 squares (approximately 2.75 m each).
- **Posts** \u2014 at each lane junction; 120\u2013125 cm tall, 9\u201310 cm diameter.
- **Free zones** \u2014 rectangular zones at both ends where runners can rest temporarily.
- **Lobby** \u2014 a 16 m \u00D7 1 m strip along each side boundary.

>>> exam
Why eight squares?
The eight squares and central lane mean a chaser can cover the whole court by alternating central-lane running with cross-lane dives \u2014 the tactical map of the game is literally drawn on the floor.
` },
    { id: "rules", title: "Rules", module: "m4", body: `**Setup**: 12 players per team; 9 take the court. One team chases, the other runs. The chasing team selects an **active chaser** who starts in the central lane. The remaining 8 sit facing alternate directions in the cross lanes.

- A chaser may run only **in the central lane** and may change direction by turning around the post.
- To involve a sitting teammate, the active chaser touches them from behind while saying **'Kho'** \u2014 the teammate then becomes the active chaser.
- A 'kho' is **foul** if given without facing the runner, while the runner is on the far side, or if the player to receive it is not seated properly.
- The chased runner scores **1 point** for each second of survival while one runner is chased at a time; after a touch, the next runner enters.
- **Turn**: after the chase time, teams swap roles; the team with more points wins. A runner who stays on too long may be recalled.

**Scoring**: total points in the chase turn; ties broken by another turn.` },
    { id: "skills", title: "Technique", module: "m2", body: `- **Kho-giving** \u2014 a clean, back-hand tap that transfers the chase instantly; giving an early, unpressured kho preserves energy.
- **Pole dive / turn** \u2014 the chaser pivots sharply around the post using the near hand, keeping momentum without slowing.
- **Ring formation** \u2014 chasing in the central lane, never on the cross lanes, forcing the runner to change direction.
- **Covering** \u2014 two chasing lines coordinate so one chaser always threatens the runner's escape.
- **Runners** use fakes, sudden stops and direction changes; the ring technique (running around the post) buys time when the runner is in a free zone.
- **Tapping and chasing rhythm** \u2014 the chaser uses short, explosive starts and decelerations \u2014 a pure test of agility and reactive speed.` },
    { id: "anatomy", title: "Fitness components", module: "m1", body: `Kho-Kho is a benchmark for **agility** (rapid change of direction), **reaction time**, **speed endurance** and **cardiovascular fitness**. The chaser's explosive starts work the fast-twitch fibres of the calves and quadriceps; the constant turning stresses the **medial knee structures** and the **hip rotators**, so strengthening the glutes and adductors prevents groin strains. Because chasing is continuous for minutes, the **aerobic system** sustains it while each burst is **anaerobic**.` },
    { id: "training", title: "Training", module: "m3", body: `- **Shuttle and figure-of-eight runs** \u2014 simulate chase patterns.
- **Pole-dive drills** \u2014 repeated turning practice around fixed markers.
- **Reaction drills** \u2014 partner taps and sudden-direction commands.
- **Interval running** \u2014 30 s effort / 30 s rest to match the chase cycle.
- **Strength** \u2014 calf raises, ankle strengthening and core work; balance-board work prevents the ankle sprains common in turning sports.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court dimensions? **A** — 27 m × 16 m; central lane 24 m; eight squares (about 2.30 m × 0.30 m) with two wooden posts.
2. **Q** — How is "kho" given? **A** — The active chaser touches a sitting defender on the back and calls "kho", making that defender the new active chaser.
3. **Q** — How long is a turn? **A** — The chasing team defends for 7 minutes; each team gets two turns of chasing plus a final chase if scores are tied.
4. **Q** — How are points scored? **A** — 1 point for every opponent touched; the team with more points wins.
5. **Q** — What is a foul? **A** — Stepping out of the lane, crossing directions mid-chase, or touching a defender from the wrong side.

>>> exam
Quick memory anchors
- 27 × 16 m · 8 squares · 7 min turn · 2 turns + chase · 1 pt per out` }
  ]
},
/* ======================================================================== */
{
  slug: "cricket",
  title: "Cricket",
  altNames: null,
  category: "field",
  emoji: "\u{1F3CF}",
  lede: "Cricket is a bat-and-ball game played between two teams of eleven on a field centred on a 22-yard pitch. It is the most followed sport in India and a rich B.P.Ed case study in projectile motion, biomechanics of throwing, and the physiology of long-format endurance.",
  infobox: [
    ["Origin", "England \u2014 16th century; first international 1844"],
    ["Governing body", "International Cricket Council (ICC)"],
    ["Format", "Team \u00B7 11 players per side"],
    ["Pitch", "20.12 m (22 yards) \u00D7 3.05 m"],
    ["Ball", "5.5\u20135.75 oz (156\u2013163 g), red or white"],
    ["Overs", "Test (no limit) \u00B7 ODI 50 \u00B7 T20 20"],
    ["Olympic", "Returning 2028 Los Angeles"],
    ["Key skills", "Batting, bowling, fielding, wicket-keeping"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "cricket",
  verified: true,
  competitions: ["ICC Cricket World Cup", "T20 World Cup", "IPL", "Border-Gavaskar Trophy", "Ranji Trophy"],
  keyTerms: ["Run", "Wicket", "Innings", "Over", "Powerplay", "Duck", "LBW"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Bat, ball & wicket**
- **Bat** — willow, maximum length 96.5 cm and width 10.8 cm (edge limit rules apply for junior play); the blade is flat on the front, rounded behind.
- **Ball** — leather, circumference about 22.4–22.9 cm, mass 156–163 g; a new ball is taken at the start of each innings.
- **Stumps & bails** — three stumps, 71.1 cm tall with a 22.86 cm spread; two bails 11.1 cm long sit on top; the popping crease is 1.22 m in front of the stumps.

**Protection & uniform**
- **Batter** — pads, thigh pad, gloves, helmet with grille, chest and arm guards.
- **Fielder** — pads optional; wicketkeeper wears gloves and pads.
- **Uniform** — whites or coloured clothing by format; umpires carry ball counters and light signals.` },
    { id: "history", title: "History", module: null, body: `Cricket grew from medieval English stick-and-ball games; the first recorded match was in the 1600s, and the first international match (USA v Canada) in **1844**. The Marylebone Cricket Club (MCC) codified the **Laws of Cricket** in **1788** and still owns the copyright. The **ICC** governs the world game. Formats evolved from timeless Tests to **ODIs (1971)** and **T20 (2003)**; cricket returns to the Olympics in 2028. In India cricket is a unifying cultural phenomenon and a driver of the sports-science industry.` },
    { id: "field", title: "The field & pitch", module: "m4", body: `The playing field is an oval (or circular) of diameter 137\u2013150 m. At its centre is the **pitch**, 20.12 m (22 yards) long and 3.05 m wide, with the **crease lines**:

- **Popping crease** \u2014 1.22 m in front of the stumps, where the batsman must stay grounded to be safe.
- **Bowling crease** \u2014 through the stumps, 2.64 m long.
- **Return crease** \u2014 perpendicular lines bounding the bowler's delivery.
- **Stumps** \u2014 71.1 cm high; the **bails** sit 81.28 cm above the ground; the stumps are 22.86 cm apart.
- **Boundary** \u2014 the edge of the field; for international matches, a minimum boundary distance of 65 m (recently reduced from 70 m to make batting easier).

Fielding positions (slip, gully, cover, midwicket, fine leg, etc.) are fixed points on the field that map to the batsman's strengths \u2014 a classical lesson in **defensive strategy** for exam questions.` },
    { id: "rules", title: "Basic rules & scoring", module: "m4", body: `- **Innings**: each team bats once; teams alternate bowling and fielding.
- **Scoring runs**: by running between the wickets after a hit, by boundaries (4 if the ball reaches the rope on the ground, 6 if it clears it on the full), by overthrows, by no-balls (1 free run) and wides.
- **Dismissals**: bowled, caught, LBW (leg before wicket), run out, stumped, hit wicket, handled the ball, hit the ball twice, obstructing the field, timed out.
- **LBW** \u2014 the ball pitches in line (or outside off) and would have hit the stumps, and the batsman's body intercepts it; decided by umpire (now assisted by ball-tracking).
- **Overs**: an over is six legal deliveries. ODI teams get 50 overs; T20 gets 20. In limited-overs cricket, **Powerplay** restrictions limit fielders outside the 30-yard circle in the first overs.
- **Wides and no-balls** \u2014 penalised deliveries that cost an extra run and an extra ball.

>>> exam
LBW conditions (the four conditions)
1. Ball must pitch in line with the stumps or on the off side.
2. Ball must hit the batsman's body or pad (not the bat).
3. Ball must be heading towards the stumps (hitting the wicket).
4. The batsman must not be playing a genuine shot (if outside the line of off stump, 'benefit of the doubt' applies). All four must hold for LBW.
` },
    { id: "skills", title: "Skills & biomechanics", module: "m2", body: `**Batting**
- The stance, the backlift and the forward-defensive stroke; the drive is a **two-lever** action (shoulder + wrist) generating power through timing rather than brute force.
- The sweep and pull convert horizontal momentum to vertical clearance.

**Bowling**
- **Fast bowling** \u2014 the run-up builds linear momentum; the delivery stride's front knee locks to transfer force up the kinetic chain (hips \u2192 trunk \u2192 shoulders \u2192 arm); the wrist imparts the final snap. Release speeds exceed 150 km/h.
- **Spin bowling** \u2014 off-spin and leg-spin rely on **Magnus force**: the ball's backspin (or side spin) creates an air-pressure difference that curves its flight and makes it deviate off the pitch.
- **Swing** \u2014 conventional swing comes from a seam and a polished shiny side; reverse swing uses the rough side.

>>> exam
Why does a spinner turn the ball?
A leg-spinner imparts clockwise rotation viewed from behind. The air on the left side of the ball travels against the seam roughness while the right side travels with it; the asymmetric drag creates a **Magnus force** that moves the ball left-to-right off the pitch. The grip, wrist position and release speed all control how much the ball deviates.
` },
    { id: "physiology", title: "Physiological demands", module: "m1", body: `Cricket is **multiformat physiology**:
- **Test cricket** (up to 5 days) demands sustained aerobic endurance, hydration and energy management across long sessions.
- **T20** is sprint-based: each delivery, dive and boundary chase is a short explosive effort fuelled by the **ATP-CP system**, with recovery between deliveries (a 5-6 over bowling spell at pace is a fine lactic-training stimulus).
- **Fielders** cover large distances in sprints; fielding workload in a T20 can approach 5\u20138 km with bursts.

**Injury profile**: stress fractures of the lower back (fast bowlers), groin and hamstring strains, shoulder injuries in throwers, and 'side strain' of the oblique muscles.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `**Two on-field umpires** (plus third and fourth umpires in professional cricket) enforce the laws; the scorer records the scorebook. Umpire duties:

- Call **no-ball, wide, dead ball** and **out**; use the standard signals (out \u2014 raised index finger, four \u2014 arm waving horizontally, six \u2014 both arms raised, no-ball \u2014 arm extended with an open palm, wide \u2014 both arms extended).
- Manage over limits, Powerplay rules and fielding restrictions.
- In professional cricket, **Decision Review System (DRS)** uses ball-tracking and edge detection, but the on-field umpire's initial decision stands unless clearly wrong.

**Tournament formats**: knockout (single-elimination \u2014 the World Cup), league/round-robin (Test series, IPL group stage), and combination formats (league \u2192 knockouts).` },
    { id: "injuries", title: "Injuries & first aid", module: "m6", body: `- **Stress fractures of the lumbar spine** in young fast bowlers \u2014 managed with bowling-load reduction and core strengthening.
- **Side strain** \u2014 an intercostal muscle tear from sudden lateral stretch; R.I.C.E. and graded return.
- **Bowler's shoulder and groin strains** \u2014 rotator cuff and adductor strengthening.
- **Concussion protocols** \u2014 after a head impact (bouncer), the player must be assessed by the medical team and, in professional cricket, replaced by an approved concussion substitute.
- **Prevention** \u2014 correct bowling action (front-arm technique), load management in young bowlers, helmets and protective gear at all junior levels.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Pitch length? **A** — 20.12 m (22 yards) between wickets; popping crease 1.22 m in front of the stumps.
2. **Q** — Compare formats. **A** — Test (5 days), ODI (50 overs), T20 (20 overs); an innings ends after 10 wickets or the overs are bowled.
3. **Q** — What are the four LBW conditions? **A** — Ball pitches in line, hits in line, would hit the stumps, and no bat edge was involved.
4. **Q** — How are extras scored? **A** — Wide, no-ball, bye and leg-bye; a no-ball gives an extra run plus a free hit in limited-overs games.
5. **Q** — List dismissals. **A** — Bowled, caught, LBW, run out, stumped, hit wicket, handled the ball, obstructing the field, timed out.

>>> exam
Quick memory anchors
- 20.12 m pitch · ball 156–163 g · 4/6 boundary values
- 10 dismissals · no-ball = free hit (limited overs)` }
  ]
},
/* ======================================================================== */
{
  slug: "field-hockey",
  title: "Field Hockey",
  altNames: "Hockey",
  category: "field",
  emoji: "\u{1F3D2}",
  lede: "Field hockey is an eleven-a-side stick-and-ball game played on a turf pitch with a hard ball. India's national sport (declared in 2012), it is a core discipline of every B.P.Ed programme for its combination of aerobic endurance, stick-work skill and structured penalty-corner tactics.",
  infobox: [
    ["Origin", "England \u2014 modern rules 1886"],
    ["Governing body", "International Hockey Federation (FIH)"],
    ["Format", "Team \u00B7 11 players per side"],
    ["Pitch", "91.4 m \u00D7 55 m"],
    ["Ball", "Hard plastic, 156\u2013163 g"],
    ["Duration", "4 \u00D7 15 min quarters"],
    ["Shooting circle", "16-yard (14.63 m) 'D'"],
    ["Olympic", "1908 (men) \u00B7 1980 (women); India's men gold 1928\u201356 \u00D7 6 & 1980"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "hockey",
  verified: true,
  competitions: ["FIH Hockey World Cup", "Olympic Games", "Hockey India League", "Asian Champions Trophy"],
  keyTerms: ["Stick-side", "Dribble", "Flick", "Drag flick", "Penalty corner", "Off-side (removed 1998)", "Obstruction"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Stick & ball**
- **Stick** — traditionally wood, now composite; only the flat face may be used to play the ball; the stick has a rounded back and a hooked head.
- **Ball** — hard, white, circumference 22.4–23.5 cm, mass 156–163 g; hockey balls are among the hardest of any field sport.
- **Goal** — 3.66 m wide × 2.14 m high with nets; backboards are often added.

**Protection & uniform**
- **Players** — shin pads, gumshield (mandatory), gloves; goalkeepers add kickers, leg guards and a helmet.
- **Pitch kit** — FIH-approved astroturf or grass; side boards are optional in international play.
- **Officials** — two umpires with whistles; a video referral system exists at elite level.` },
    { id: "history", title: "History", module: null, body: `Stick-and-ball games are ancient; modern field hockey's rules were codified in England in **1886**. India dominated the sport from **1928 to 1956**, winning six consecutive Olympic golds, including the famous 5\u20131 1936 win over Germany in Hitler's Berlin. The FIH was founded in 1924. After a long medal drought, India's men won bronze at **Tokyo 2020** and are a global power again. The sport's shift to **artificial turf (1970s)** transformed it into a faster, skill-based game.` },
    { id: "pitch", title: "The pitch & markings", module: "m4", body: `The pitch is **91.40 m long and 55 m wide**. Markings include:

- **Centre line** with the 15.24 m-radius centre circle.
- **23 m lines** \u2014 each 22.90 m from the goal lines, defining areas for certain rules (e.g. the ball must touch a player inside the 23 m before a shot).
- **Shooting circle (the 'D')** \u2014 a semicircle of radius **14.63 m** (16 yards) around each goal, with a 3.66 m straight section; goals count only from inside the D.
- **Penalty spots** \u2014 6.40 m in front of the goal centre (for penalty strokes) and 7 m (older rules for penalty corners).
- **Goals** \u2014 3.66 m wide \u00D7 2.14 m high.
- **Sideboards and backboards** \u2014 0.46 m high boards along the goal lines behind the goals.

The pitch uses **water-based astro turf** at international level \u2014 the faster surface rewards skill over bounce.` },
    { id: "rules", title: "Rules", module: "m4", body: `- **Eleven players** (10 outfield + goalkeeper); the game is 4 \u00D7 15-minute quarters with breaks.
- Goals score **1 point**; the ball must be played from within the shooting circle.
- **Stick rules**: the flat side of the stick only; the ball may not be played with the rounded side, kicked, or trapped with the hands (except the goalkeeper).
- **Obstruction** \u2014 shielding the ball with the body is an offence; defenders must play the ball, not the body.
- **Off-side was abolished in 1998** \u2014 a notable rule change studied in officiating units.
- **Penalty corner (PC)** \u2014 awarded for a defensive offence inside the D; a pusher feeds the ball from the back line to a stopper, and a **drag flick** or hard hit sends it goalward. The injector, stopper and flicker form a fixed set piece.
- **Penalty stroke** \u2014 awarded for a deliberate foul on a goalscoring chance; a one-on-one from 6.40 m.

**Advantage** may be played by the umpire \u2014 a core officiating concept across all team games.` },
    { id: "skills", title: "Skills & biomechanics", module: "m2", body: `- **Indian dribble** \u2014 the signature skill: the ball is moved with a rolling series of touches across the width of the stick, making the player hard to tackle. It developed to evade the 1930s English-style sticks.
- **Push** \u2014 the primary pass; generated by the wrists and a low, sweeping stick.
- **Hit** \u2014 a full swing for power and long passes; biomechanics mirror a baseball swing with weight transfer.
- **Flick** \u2014 a wrist snap raising the ball; the **drag flick** (used in PCs) is a long, rolling wrist sweep that generates topspin and can reach 140 km/h.
- **Tackling** \u2014 the jab (blocking the ball), the reverse-stick tackle, and shadowing without body contact.
- **Goalkeeping** \u2014 kicker pads, blockers and the modern 'kick-save' with sliding skills.

>>> exam
The drag flick
The drag flick uses an extremely long contact time with the ball (dragging, not striking) \u2014 the principle of **impulse** (force \u00D7 time) \u2014 producing high speed from a standing start, plus topspin that keeps the ball low and fast. It is the reason the modern PC is the highest-percentage scoring chance.
` },
    { id: "physiology", title: "Physiological demands", module: "m1", body: `Hockey players cover **7\u201310 km per match**, with intense repeated sprints during PCs and turnovers. It is an **intermittent aerobic** sport with high anaerobic bursts. Key demands:

- **Aerobic endurance** \u2014 the base for sustained pressing and counter-attacking.
- **Agility and change of direction** \u2014 the low stance and constant stick work load the ankles, knees and hips.
- **Grip and forearm strength** \u2014 from prolonged stick control.
- **Core stability** \u2014 for the low, powerful posture of the Indian dribble and drag flick.

**Muscles**: hip flexors and glutes (running with flexed hips), quadriceps (the low stance), and forearm flexors (grip). The modern player is an 'all-rounder' whose VO\u2082max approaches endurance athletes.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `**Two umpires** control the match with whistle and signals: foul (raised hand), corner (pointing to the corner flag), PC (arms to the 23 m line), penalty stroke (whistle + point to the spot), and advantage (arms forward). The umpires also police the **stick-height** rule (no play above shoulder height with a raised stick).

**Scoring**: 1 goal = 1 point; matches in pool play use points (win 3, draw 1) with goal difference as the tie-breaker \u2014 a classic round-robin exam example.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Pitch dimensions? **A** — 91.4 m × 55 m; striking circle (D) radius 14.63 m; 23 m lines.
2. **Q** — When is a penalty corner awarded? **A** — For a foul inside the D, or a deliberate foul inside the 23 m area; it is hit from the backline.
3. **Q** — Where can a goal be scored? **A** — Only from inside the striking circle; a shot struck from outside the D does not count.
4. **Q** — Is there offside? **A** — No — offside was abolished in 1998.
5. **Q** — Match structure? **A** — 4 quarters of 15 minutes with unlimited rolling substitutions.

>>> exam
Quick memory anchors
- 91.4 × 55 m · D radius 14.63 m · goal 3.66 × 2.14 m · 4 × 15 min
- No offside (since 1998) · PC & drag flick are exam favourites` }
  ]
},
/* ======================================================================== */
{
  slug: "badminton",
  title: "Badminton",
  altNames: null,
  category: "racquet",
  emoji: "\u{1F3F8}",
  lede: "Badminton is the world's fastest racquet sport \u2014 a shuttlecock smashed at over 400 km/h. Played singles or doubles over a 1.55 m net, it is a superb PHE sport for teaching wrist work, footwork patterns and reaction time, with a fully codified court and scoring system.",
  infobox: [
    ["Origin", "Modern rules from Badminton House, England (1873)"],
    ["Governing body", "BWF (Badminton World Federation)"],
    ["Format", "Singles \u00B7 Doubles \u00B7 Mixed doubles"],
    ["Court", "13.40 m \u00D7 6.10 m (doubles) / 5.18 m (singles)"],
    ["Net", "1.55 m at posts, 1.524 m at centre"],
    ["Shuttlecock", "16 feathers, 4.74\u20135.50 g"],
    ["Scoring", "Best of 3 games to 21, rally point"],
    ["Olympic", "Since 1992; India's Lakshya Sen silver 2024"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "badminton",
  verified: true,
  competitions: ["BWF World Championships", "Olympic Games", "Thomas & Uber Cup", "India Open"],
  keyTerms: ["Rally", "Smash", "Drop shot", "Clear", "Footwork", "Fault", "Short service line"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Racket & shuttle**
- **Racket** — light (85–100 g), strung with nylon or natural gut; a heavier, more flexible racket suits beginners.
- **Shuttle (shuttlecock)** — 16 feathers (or synthetic nylon) around a cork base; mass 4.74–5.5 g; a proper shuttle should clear the whole court when thrown from the back line.
- **Net & posts** — net height 1.55 m at the posts, sagging to 1.524 m at the centre.

**Attire & shoes**
- **Footwear** — non-marking indoor court shoes; running shoes are discouraged because they do not grip lateral moves.
- **Kit** — shorts, t-shirt, wristband; professional players change the shuttle when its flight becomes unstable.` },
    { id: "history", title: "History", module: null, body: `Badminton evolved from the ancient game of battledore and shuttlecock, played in India as **Poona** by British army officers. It was introduced to England and codified at Badminton House in 1873. The International Badminton Federation (now BWF) formed in **1934**; badminton entered the Olympics in **1992**. India's success (P.V. Sindhu's Olympic medals, Saina Nehwal, and doubles excellence) has made the sport central to Indian physical-education interest.` },
    { id: "court", title: "The court", module: "m4", body: `The court is **13.40 m long and 6.10 m wide** (doubles) with a singles width of **5.18 m**. Lines:

- **Short service line** \u2014 1.98 m from the net; serves must land beyond it.
- **Long service lines** \u2014 6.70 m from the net for singles (the back boundary) and 0.76 m inside for doubles.
- **Centre line** \u2014 divides each half into forecourt and backcourt zones.
- **Net** \u2014 76 cm deep, 1.55 m high at the posts, sagging to 1.524 m at the centre.
- **Side alleys** \u2014 the extra 0.46 m strips used only in doubles.

>>> exam
Doubles service is shorter
In doubles, the service must land in the shorter, wider **service court** (bounded by the short line and the long-doubles line). This rule was created to reduce the server's advantage and encourage quicker rallies.
` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Best of three games to 21**, rally-point scoring (every rally scores, whoever wins it). At 20\u201320, the game continues until one side leads by 2; at **29\u201329, the side reaching 30 wins**.
- **Service rules**: the shuttle must be hit below the server's waist (1.15 m in international play); both feet must remain in the service box; the serve must go diagonally into the opponent's service court.
- **Faults**: shuttle landing outside the court, shuttle hitting the ceiling or out of the stadium, touching the net with racquet or body, "carrying" the shuttle (throwing, not hitting), and the receiver moving before the serve.
- **Let** \u2014 a rally is replayed if the shuttle hits the net on the serve and lands legally in the correct court, or on an unforeseen interference.
- In doubles, the **order of service** follows the score's odd/even side; only the receiving side can score against the server in classic rules \u2014 now everyone scores (rally point).` },
    { id: "skills", title: "Shots & footwork", module: "m2", body: `**Shots**
- **Clear** \u2014 high, deep to the back line; used to buy time and force the opponent back.
- **Drop shot** \u2014 soft, deceptive; the shuttle falls just over the net.
- **Smash** \u2014 the power shot; a near-vertical racquet-head speed peak. Elite smashes exceed **400 km/h** \u2014 the fastest projectile in sport.
- **Drive** \u2014 a flat, fast shot keeping the shuttle low.
- **Net shot** \u2014 a delicate, tight shot that falls immediately over the net.

**Footwork** is 70% of the game: the **split step**, the lunge (with the racket arm leading), and the six-corner movement pattern (forehand/backhand \u00D7 front/mid/back). Recovery steps return the player to the base (centre) position.

>>> exam
Why can the smash reach 400 km/h?
The smash is a **proximal-to-distal sequencing** of the kinetic chain: legs drive \u2192 trunk rotation \u2192 upper arm \u2192 forearm \u2192 wrist snap. The wrist adds the final angular velocity. Feather shuttles are light (5 g), so the same force produces enormous acceleration \u2014 acceleration is inversely proportional to mass for a given force (Newton's second law).
` },
    { id: "anatomy", title: "Muscles & joints", module: "m1", body: `- **Shoulder** \u2014 the deltoid and rotator cuff accelerate and brake the racket arm; internal rotation is the final whip.
- **Forearm** \u2014 pronation/supination for deception and the wrist flick.
- **Knees and ankles** \u2014 the lunge loads the quadriceps and patellar tendon; repeated deep lunges stress the knee and ankle.
- **Core** \u2014 obliques and abdominals rotate the trunk for power.
- **Eye-hand coordination** \u2014 arguably the most demanded of any sport, given shuttle speeds.

**Kinesiology**: the lunge is a closed-chain lower-limb movement \u2014 the foot plants, and the body lowers through hip and knee flexion with the torso held erect.` },
    { id: "training", title: "Conditioning", module: "m3", body: `- **Footwork drills** \u2014 shadow play across the six corners with the split step.
- **Interval footwork** \u2014 on-court routines replicating rally length (6\u201312 s) with rest.
- **Strength** \u2014 lunges, split squats, calf raises; the shoulder cuff and scapular control for the smash.
- **Speed and agility** \u2014 5\u201310 m sprints, agility ladders, reaction drills.
- **Flexibility** \u2014 the lunge demands hip-flexor and calf range; static stretching after play.
- **Core** \u2014 anti-rotation work (pallof press) for trunk stability under the smash.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A match is controlled by an **umpire** (chair), supported by line judges and a service judge. The umpire calls faults and lets, tracks the score, enforces time limits (25-second between rallies, 60-second between games, 120-second intervals) and disciplines players for delay or misconduct. The service judge calls low serves and foot faults at the service line.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court dimensions? **A** — 13.40 m × 5.18 m (singles) and 13.40 m × 6.10 m (doubles); net 1.55 m at the posts, 1.524 m at the centre.
2. **Q** — Scoring system? **A** — Best of 3 games to 21 points; rally scoring; win by 2 with a cap of 30.
3. **Q** — How must a serve be taken? **A** — The shuttle must be struck below 1.15 m and land in the diagonal service box.
4. **Q** — Common faults? **A** — Shuttle landing outside the lines, touching the net, double-hit, or the racket crossing the net.
5. **Q** — Shuttlecock mass? **A** — 4.74–5.5 g with 16 feathers.

>>> exam
Quick memory anchors
- 13.40 × 6.10 m · net 1.55/1.524 m · 21 pts × 3 games · serve below 1.15 m` }
  ]
},
/* ======================================================================== */
{
  slug: "tennis",
  title: "Tennis",
  altNames: "Lawn Tennis",
  category: "racquet",
  emoji: "\u{1F3BE}",
  lede: "Tennis is a racquet sport played on a rectangular court across a central net, as singles or doubles. It offers a complete study in projectile motion (the serve), ground-stroke biomechanics, and the psychology of point-by-point competition \u2014 a staple of university racquet-sport units.",
  infobox: [
    ["Origin", "France (jeu de paume) \u2192 codified in England 1875"],
    ["Governing body", "ITF (International Tennis Federation)"],
    ["Format", "Singles \u00B7 Doubles \u00B7 Mixed doubles"],
    ["Court", "23.77 m \u00D7 8.23 m (singles) / 10.97 m (doubles)"],
    ["Net", "0.914 m high at centre"],
    ["Ball", "6.54\u20136.86 cm diameter, 56\u201359.4 g"],
    ["Scoring", "15-30-40-game-set-match"],
    ["Surfaces", "Grass, clay, hard, carpet"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "tennis",
  verified: true,
  competitions: ["The Grand Slams (AO, RG, Wimbledon, US Open)", "Olympic Games", "Davis Cup", "ATP / WTA Tours"],
  keyTerms: ["Ace", "Deuce", "Break point", "Topspin", "Volley", "Let", "Tiebreak"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Racket & ball**
- **Racket** — composite frame with gut/synthetic strings; grip sizes vary by hand size; junior players use lighter frames.
- **Ball** — diameter 6.54–6.86 cm, mass 56.0–59.4 g, bright yellow-green; pressurised balls lose bounce and are changed at set intervals in tournaments.
- **Net** — 0.914 m high at the centre, 1.07 m at the posts.

**Surfaces & attire**
- **Court surfaces** — grass, clay and hard courts change bounce and pace; the ball moves fastest on grass.
- **Footwear** — court shoes matched to the surface; clay-court shoes have herringbone soles.
- **Kit** — light shirts, wristbands and caps; officials use a scorecard and (at elite level) Hawk-Eye review.` },
    { id: "history", title: "History", module: null, body: `Tennis descends from the French hand-ball game **jeu de paume**, played with a racket by the 16th century. Modern lawn tennis was codified by Major Walter Wingfield in 1873, with the first Wimbledon in **1877** and the formation of the ITF in 1913. Tennis has been an Olympic sport since 1988 (after a gap since 1924). The scoring system (15-30-40) is thought to derive from clock-face or coin-quarter roots.` },
    { id: "court", title: "The court", module: "m4", body: `The court is **23.77 m long**, **8.23 m wide** for singles and **10.97 m** for doubles. Markings:

- **Service courts** \u2014 6.40 m deep, bisected by the centre service line, bounded by the service lines.
- **Net** \u2014 1.07 m high at the posts, dipping to 0.914 m at the centre strap.
- **Baseline** \u2014 the rear boundary; 8.23 m wide (singles).
- **Alleys** \u2014 the doubles corridors on each side.
- **The tramlines** for doubles extend the court 1.37 m each side.

**Service**: the server stands behind the baseline, in the deuce or ad court, and the ball must land diagonally in the opposite service box. Two attempts (first and second serve).` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `**Scoring**:
- Points: love (0), 15, 30, 40, then game. At deuce (40\u201340) a player must win two consecutive points (advantage, then game).
- Games: first to 6 games by a margin of 2 wins the set; at 6\u20136 a **tiebreak** (first to 7 points by 2) decides in most formats (a 10-point match tiebreak in the deciding set in some events).
- Sets: first to 2 sets (best of 3) wins the match \u2014 Grand Slam men play best of 5.

**Faults and lets**:
- **Fault** \u2014 a serve that lands outside the service box or hits the net and lands out.
- **Let** \u2014 a serve that clips the net and lands in the correct box (replayed) or any interference.
- **Out** \u2014 the ball lands beyond the lines; a line call is made by the closest official.
- **Foot fault** \u2014 the server's foot crosses the baseline before contact.

**Ball in play**: the ball may touch the net and still be legal; hitting the ball before it bounces (volley) is allowed except on the serve return.` },
    { id: "skills", title: "Strokes & biomechanics", module: "m2", body: `- **Serve** \u2014 the most studied stroke in sport biomechanics. The toss, the trophy position, the racket drop behind the back, and the explosive hip-shoulder-forearm sequence. Elite flat serves exceed **230 km/h**; the kick serve adds topspin for safety.
- **Groundstrokes** \u2014 forehand and backhand; modern players use **topspin** to generate a large margin over the net (heavy topspin curves the ball down into the court).
- **Volley** \u2014 a short, punchy stroke at the net, absorbing the ball's pace.
- **Slice** \u2014 backspin, keeping the ball low for approach play.
- **Lob, drop shot, passing shot** \u2014 the tactical finishing strokes.

>>> exam
The Magnus effect on groundstrokes
Topspin: the racket brushes the ball from low to high, imparting forward rotation. The top of the ball spins against the airflow (high relative speed), the bottom with it (low relative speed) \u2014 the pressure difference creates a downward force, so the ball dives over the net and lands deep, while still bouncing forward fast. Backspin (slice) creates lift and a low, skidding bounce.
` },
    { id: "anatomy", title: "Muscles & joints", module: "m1", body: `- **Shoulder and rotator cuff** \u2014 the serve is a maximal internal-rotation action; 'tennis shoulder' (impingement) is common.
- **Wrist and forearm** \u2014 grip and racket control; 'tennis elbow' (lateral epicondylitis) is an overload of the wrist extensors, more common with poor technique and heavy frames.
- **Legs** \u2014 the split step, lateral shuffles and the open-stance groundstroke rely on quadriceps and gluteals.
- **Core** \u2014 rotational power for the forehand.
- **Energy**: a tennis rally is 5\u201315 s of ATP-CP and lactic work separated by rest between points (25 s) and changes of ends (90 s) \u2014 a classic intermittent model.` },
    { id: "training", title: "Training", module: "m3", body: `- **Interval on-court drills** \u2014 multi-ball feeds reproducing rally intensity.
- **Shadow stroke practice** \u2014 technique reinforcement.
- **Strength** \u2014 rotator cuff, scapular control, split squats and calf plyometrics for the split step.
- **Speed and agility** \u2014 lateral movement drills (the court's wide base demands side-to-side speed).
- **Endurance** \u2014 for five-set matches: continuous running, fartlek and court sprint intervals.
- **Recovery** \u2014 the modern game manages heat, hydration and 90-second changeovers as part of the training plan.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `- **Chair umpire** \u2014 calls the score, overrules line calls, manages the match.
- **Line umpires** \u2014 call lines (out, fault, let) with voice and arm signals.
- **Electronic Review (Hawk-Eye)** \u2014 used on hard courts; players get limited challenges per set.
- The umpire enforces the **code of conduct** (time violations, audible obscenity, ball abuse), awarding point penalties progressively.

**Scoring formats**: round-robin and knockout mixes appear in team events (Davis Cup) and junior tournaments \u2014 good exam examples of fixture construction.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court dimensions? **A** — Singles 23.77 m × 8.23 m, doubles 23.77 m × 10.97 m; net 0.914 m at centre, 1.07 m at the posts.
2. **Q** — Explain the scoring system. **A** — Points go 15, 30, 40, game; at deuce a player needs two straight points (advantage); a set is 6 games (win by 2), with a 7-point tiebreak at 6-6.
3. **Q** — How many serves does a player get? **A** — Two per point; a serve into the net is a fault, two faults lose the point.
4. **Q** — Name the four Grand Slams. **A** — Australian Open (hard), French Open (clay), Wimbledon (grass), US Open (hard).
5. **Q** — When is a ball in? **A** — If any part of it touches a line; electronic review (Hawk-Eye) can overrule.

>>> exam
Quick memory anchors
- 23.77 × 8.23 m · 15-30-40-deuce · 6 games / tiebreak 7 · 4 Slams` }
  ]
},
/* ======================================================================== */
{
  slug: "table-tennis",
  title: "Table Tennis",
  altNames: "Ping Pong",
  category: "racquet",
  emoji: "\u{1F3D3}",
  lede: "Table tennis is a racquet sport played on a table divided by a net, where two or four players rally a lightweight ball with high-spin bats. It is the perfect laboratory sport for **spin, reaction time and hand-eye coordination**, and one of the most accessible Olympic sports to study.",
  infobox: [
    ["Origin", "England, 1880s; 'ping pong' trademark 1901"],
    ["Governing body", "ITTF (International Table Tennis Federation)"],
    ["Format", "Singles \u00B7 Doubles \u00B7 Team"],
    ["Table", "2.74 m \u00D7 1.525 m, 76 cm high"],
    ["Net", "15.25 cm high"],
    ["Ball", "40 mm, 2.7 g plastic"],
    ["Scoring", "Games to 11, best of 5 or 7"],
    ["Olympic", "Since 1988; India's bronze at Paris 2024 (women's team)"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "table-tennis",
  verified: true,
  competitions: ["World Championships", "Olympic Games", "ITTF World Cup", "WTT Series"],
  keyTerms: ["Spin", "Topspin", "Backspin", "Chop", "Rally", "Let", "Expedite rule"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Table, net & ball**
- **Table** — 2.74 m long × 1.525 m wide, 0.76 m high; the surface is dark with a white 2 cm side line and 20 cm end line.
- **Net** — 15.25 cm high, stretching the full width.
- **Ball** — plastic, diameter 40 mm, mass 2.7 g, white or orange; it replaced the older 38 mm celluloid ball.

**Bat (racket)**
- **Blade** — wooden, with rubber covers; inverted (smooth) rubber for spin, pimpled rubber for defence.
- **Grip styles** — shakehand (most common) and penhold; ITTF approves all competition equipment.
- **Attire** — light indoor clothing and non-marking shoes; the ball must be clearly visible against the table.` },
    { id: "history", title: "History", module: null, body: `Table tennis began as an after-dinner parlour game in Victorian England, using books for bats and corks for balls. The modern 40 mm plastic ball replaced the 38 mm celluloid ball in 2000 to slow the game for spectators. The ITTF was founded in **1926**; the sport became Olympic in **1988**. China dominates, but India's rise (Sharath Kamal, Manika Batra) makes it a study fixture in Indian P.E. programmes.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Best of 5 or 7 games, each to 11 points**, win by 2 (at 10\u201310 the lead alternates).
- **Serve**: the ball must be tossed at least 16 cm straight up from an open palm, struck behind the end line, and first bounce on the server's side then the receiver's. The serve alternates every 2 points (every point at deuce).
- **A let** \u2014 a serve that touches the net and lands legally is replayed.
- **The expedite rule**: if a game lasts 10 minutes, the receiver must win the point within 13 strokes, or the point goes to the receiver \u2014 a rule that forces active play.
- **Doubles**: service alternates diagonally, and partners must hit alternately.
- The ball must not be volleyed (struck before bouncing) except on the serve return.` },
    { id: "skills", title: "Technique & spin", module: "m2", body: `- **Grip** \u2014 shakehand (European) or penhold (Asian) grips.
- **Topspin loop** \u2014 heavy forward spin for attacking; makes the ball dip and then explode off the opponent's side.
- **Backspin (chop / push)** \u2014 defensive strokes that make the ball skid and stay low.
- **Smash** \u2014 a flat kill shot on a high ball.
- **Service variation** \u2014 short vs long, sidespin vs backspin; the serve is the most decisive stroke in the sport.

>>> exam
The spin-and-bounce rule
The ball's spin reverses at the bounce. A topspin ball after bouncing travels fast and low; a backspin ball after bouncing checks and skids. This means the *incoming* spin must be matched by *outgoing* return-spin to control the bounce \u2014 the physical reason returning spin with spin is easier than blocking it flat.
` },
    { id: "anatomy", title: "Muscles & reactions", module: "m1", body: `- The game is a **reaction-time** sport: rallies last 3\u20138 s with shots under 1 second apart, so the ATP-CP system and fast-twitch fibres dominate.
- The **wrist and forearm** do the fine work; the **forearm pronation** generates most spin.
- **Legs** \u2014 quick side steps and the split step; **core** stabilises the low crouch stance.
- Visual tracking and **anticipation** are the true athletic demands \u2014 players 'read' the opponent's contact to start moving before the ball crosses the net.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Table and net dimensions? **A** — 2.74 m × 1.525 m, height 0.76 m; net 15.25 cm high; ball 40 mm.
2. **Q** — Scoring? **A** — Best of 5 or 7 games to 11 points, win by 2; service changes every 2 points.
3. **Q** — Legal service? **A** — Ball tossed at least 16 cm, struck behind the end line, landing on the server's half then the receiver's; in doubles it alternates sides.
4. **Q** — What is the expedite rule? **A** — If a game lasts over 10 minutes, players alternate serve for one point each and the receiver scores if the server fails to win the rally.
5. **Q** — Doubles order? **A** — Players alternate hits; each pair must serve to alternate receiver boxes.

>>> exam
Quick memory anchors
- 2.74 × 1.525 m · net 15.25 cm · ball 40 mm/2.7 g · 11 pts · 16 cm toss` }
  ]
},
/* ======================================================================== */
{
  slug: "handball",
  title: "Team Handball",
  altNames: "Handball, Olympic Handball",
  category: "court",
  emoji: "\u{1F3AE}",
  lede: "Team handball is a fast seven-a-side indoor sport in which players pass, throw and run with a ball to score in a 3 m goal, defending a crease they may not enter. It is a favourite invasion-game case study for its combination of running, jumping and over-arm throwing mechanics.",
  infobox: [
    ["Origin", "Denmark & Germany, early 1900s"],
    ["Governing body", "IHF (International Handball Federation)"],
    ["Format", "Team \u00B7 7 players per side (6 + goalkeeper)"],
    ["Court", "40 m \u00D7 20 m"],
    ["Goal", "3 m wide \u00D7 2 m high"],
    ["Duration", "2 \u00D7 30 min"],
    ["Scoring", "1 point per goal"],
    ["Olympic", "1936 (field) \u00B7 1972 (indoor)"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "handball",
  verified: true,
  competitions: ["IHF World Championship", "Olympic Games", "EHF Champions League"],
  keyTerms: ["Jump shot", "Wing shot", "Dribble", "Crease", "7-metre throw", "Free throw", "2-minute suspension"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Ball & goal**
- **Ball** — Size 3 for men (circumference 58–60 cm, mass 425–475 g), Size 2 for women, Size 1 for youth; players often coat it with resin for grip.
- **Goal** — 3 m wide × 2 m high; the 6 m crease line protects the goalkeeper's area.
- **Court** — 40 m × 20 m with a 7 m penalty line and 9 m free-throw arc.

**Attire & safety**
- **Kit** — light jerseys; the goalkeeper wears a contrasting colour; no jewellery or dangerous objects.
- **Shoes** — cushioned indoor court shoes for pivoting and jumping.
- **Officials** — two referees, a timekeeper and a scorer; time-outs and suspensions are recorded on a table.` },
    { id: "history", title: "History", module: null, body: `Handball originated as field handball in early 1900s Europe and moved indoors in the 1920s for year-round play. The IHF was founded in **1946**; indoor handball entered the Olympics in **1972** (Munich). The fast game, big goals and jumping shots made it hugely popular across Europe and a common PHE invasion-game.` },
    { id: "rules", title: "Rules", module: "m4", body: `- **7 players** per side; the match is 2 \u00D7 30 minutes with a 10-minute break.
- Players may take **3 steps** with the ball and hold it for **3 seconds**; dribbling is allowed (one bounce or continuous).
- **No contact above the shoulder**, no pushing, holding or blocking with arms; defensive contact must be frontal and legal.
- **Crease (goal area)**: a 6 m semicircle where only the goalkeeper may enter; field players may jump into the crease and shoot before landing.
- **Free throw** \u2014 awarded on fouls, taken from the point of the offence (attackers outside the 9 m line).
- **7-metre throw** \u2014 a penalty, like football's spot kick, for denying a clear goalscoring chance.
- **Progressive punishment**: warning, then **2-minute suspension**, then disqualification for repeated or serious fouls.
- **Scoring**: 1 point per goal; the winning team has more goals at full time.` },
    { id: "skills", title: "Skills & biomechanics", module: "m2", body: `- **Jump shot** \u2014 the signature skill: a three-step approach, take-off, and a whip-arm throw while airborne. The throw uses the same **kinetic chain** as the javelin: pelvis leads, then trunk, then shoulder, elbow and wrist.
- **Wing shot** \u2014 a tight-angle throw from the wing, often a lob into the far corner.
- **Pivot play** \u2014 the line player turns and shoots in traffic.
- **Passing** \u2014 the one-handed wrist pass and the bounce pass.
- **Goalkeeping** \u2014 reflex saves using the legs and arms, positioned on the goal-line arc.

>>> exam
Why jump while shooting?
Jumping brings the thrower's release point above the defenders' arms and closer to the goal, reducing the effective distance \u2014 the same reason the volleyball spike is hit at the highest point of the jump. The airborne release also adds the horizontal velocity of the run to the throw.
` },
    { id: "anatomy", title: "Physiological demands", module: "m1", body: `Handball is **intermittent high-intensity**: repeated 5\u201310 m sprints, jumps and throwing bursts separated by short recovery. It demands the **ATP-CP system** for shots and jumps, the **lactic system** for repeated attacks, and an aerobic base for 60 minutes. The throwing shoulder (rotator cuff), knees (jumping/landing) and fingers are the most injury-prone sites.` },
    { id: "training", title: "Training", module: "m3", body: `- **Throw technique** \u2014 medicine-ball throws and weighted-ball work for the kinetic chain.
- **Jump/landing control** \u2014 plyometrics with correct landing mechanics to protect the knee.
- **Interval court sprints** \u2014 attack/defence transition conditioning.
- **Strength** \u2014 the whole posterior chain for throwing power.
- **Specific agility** \u2014 the 3-step rhythm and change of direction.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court and goal dimensions? **A** — 40 m × 20 m; goal 3 m × 2 m; 6 m crease, 7 m penalty line, 9 m free-throw arc.
2. **Q** — How many steps and how long can a player hold the ball? **A** — Maximum 3 steps and 3 seconds without dribbling.
3. **Q** — Match duration? **A** — 2 halves of 30 minutes (men) / 25 minutes (women), with a time-out per half.
4. **Q** — What is a 7 m throw? **A** — A penalty shot for a serious foul, awarded on the 7 m line with all others behind the 9 m line.
5. **Q** — Progressive punishment? **A** — Yellow warning, then 2-minute suspension, then red card and report.

>>> exam
Quick memory anchors
- 40 × 20 m · goal 3 × 2 m · 6/7/9 m lines · 3 steps / 3 s · 2 × 30 min` }
  ]
},
/* ======================================================================== */
{
  slug: "athletics",
  title: "Athletics",
  altNames: "Track & Field",
  category: "athletics",
  emoji: "\u{1F3C3}",
  lede: "Athletics is the collection of running, jumping and throwing events \u2014 'track and field'. As the foundation of all physical education, it is taught first and tested hardest: every running event is an energy-system lesson, every jump and throw is a biomechanics experiment.",
  infobox: [
    ["Origin", "Ancient Olympic Games, 776 BC"],
    ["Governing body", "World Athletics"],
    ["Format", "Individual & relay events"],
    ["Track", "400 m oval, 8 lanes of 1.22 m"],
    ["Events", "Track (running) \u00B7 Field (jumping, throwing) \u00B7 Combined (decathlon)"],
    ["Olympic", "Since 1896 (modern era)"],
    ["Key India", "Milkha Singh, P.T. Usha, Neeraj Chopra, Neeraj's 2021 Olympic javelin gold"]
  ],
  modules: ["m1", "m2", "m3", "m4", "m6"],
  court: "athletics",
  verified: true,
  competitions: ["Olympic Games", "World Athletics Championships", "Diamond League", "Asian Games"],
  keyTerms: ["Track", "Lane", "Stagger", "Baton", "Sector", "Foul", "Take-off board", "Decathlon"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Track & field implements**
- **Track** — 400 m oval with 8 lanes, each 1.22 m wide; blocks and a 30 m relay baton zone (20 m + 10 m pre-zone).
- **Shot put** — men 7.26 kg, women 4 kg, thrown from a 2.135 m circle into a 34.92° sector.
- **Discus** — men 2 kg, women 1 kg; javelin men 800 g, women 600 g; hammer on a 2.135 m circle.

**Attire & gear**
- **Shoes** — spikes for track, flat throwing shoes for the circle, high-jump shoes with heel wedges.
- **Kit** — racing singlet with chest number, shorts; wind gauge, measuring tape and photo-finish equipment for officials.
- **Relay baton** — 28–30 cm long, about 50 g.` },
    { id: "history", title: "History", module: null, body: `Athletics is the original sport: the Ancient Olympic Games of 776 BC began with the **stade** foot race. The modern revival came with the 1896 Athens Games, and World Athletics (founded 1912 as the IAAF) now governs all events. India's athletics heritage includes Milkha Singh's 1960 Rome heroics, P.T. Usha's near-miss at 1984, and **Neeraj Chopra's Olympic javelin gold at Tokyo 2020** — a first for India in Olympic track and field.` },
    { id: "track", title: "The track & field facilities", module: "m4", body: `**The track**: a standard 400 m oval with 8 lanes, each **1.22 m wide**, with **staggered starts** for lane-based races so every runner covers the same distance around the bends. Markings include the finish line, the 4\u00D7100 m and 4\u00D7400 m relay zones (baton exchange boxes), and the 110 m hurdles positions.

**Field facilities**:
- **Long jump / triple jump** \u2014 a 1.22 m take-off board and a sand pit \u2265 2.75 m wide.
- **High jump** \u2014 a curved run-up and a 4 m \u00D7 3 m landing area; the bar rises by 2 cm after each clearance.
- **Pole vault** \u2014 a 40+ m run-up, a planting box and a large landing bed.
- **Shot put** \u2014 a 2.135 m circle and a 34.92-degree sector.
- **Discus / hammer** \u2014 2.5 m circles in 35-degree sectors, in a safety cage (hammer).
- **Javelin** \u2014 an 8 m run-up lane and a 29-degree sector.

>>> exam
The 400 m stagger
On a two-bend track, lane 1 is a tight 400 m; each outer lane starts further forward (stagger) because its radius is larger. The stagger for lane 2 is roughly 7 m, increasing per lane. This is the classic applied-geometry problem in athletics officiating.
` },
    { id: "sprints", title: "Sprinting — energy & technique", module: "m1", body: `The **100 m sprint** is dominated by the **ATP-CP system** for the first 8\u201310 seconds. Technique phases: **start** (blocks, reaction < 0.1 s is a false start in new rules), **acceleration** (drive phase, first 20\u201330 m), **maximum velocity** (upright, high cadence, 30\u201360 m), and **deceleration** (last 40 m).

- **Stride length and stride frequency** are the two variables of speed; elites combine long strides with very high turnover.
- Ground-contact time is extremely short (\u2248 0.08 s); the foot lands under the centre of gravity, not in front (overstriding brakes).
- The arms pump opposite to the legs to control rotation about the longitudinal axis.

**Muscles**: glutes and hamstrings drive the powerful push-off; the hip flexors lift the knee; the calf muscles transmit force at ground contact.` },
    { id: "jumps", title: "The jumps", module: "m2", body: `- **Long jump**: approach speed \u2192 take-off (the take-off foot plants, converting horizontal velocity) \u2192 flight (hang, hitch-kick, or sail techniques) \u2192 landing. The jump distance \u2248 (release height) + (vertical component) with an optimal take-off angle around **18\u201320\u00B0** (not 45\u00B0, because horizontal speed must be preserved).
- **Triple jump**: hop \u2192 step \u2192 jump, three ground contacts with a rhythm that preserves momentum.
- **High jump**: the **Fosbury flop** — approach in a J-curve, take-off on the outside foot, the body arched over the bar clearing it face-up. The curve converts centrifugal force into vertical impulse.
- **Pole vault**: the pole stores elastic energy that is returned to lift the athlete; the vaulter's grip height plus body lift determine the crossing height.

>>> exam
Why not 45\u00B0 in the long jump?
A projectile's range is maximised at 45\u00B0 in a vacuum with equal vertical and horizontal speeds. A long jumper has a huge horizontal approach speed (\u2248 9 m/s) and can add only limited vertical speed (\u2248 3 m/s). The optimal angle \u2014 combining the vector of velocities \u2014 is therefore far lower, near 18\u201320\u00B0.
` },
    { id: "throws", title: "The throws", module: "m2", body: `All four throwing events are **projectile** skills decided by distance = f(release speed, release angle, release height, air resistance).

- **Shot put** \u2014 the glide (linear) and rotational techniques; release speed is the single biggest factor.
- **Discus** \u2014 the full-body spin builds angular velocity; the discus is released with a 35\u00B0 release angle and must leave the hand from behind the circle.
- **Hammer** \u2014 3\u20134 rotations with the ball on a wire; centrifugal force stretches the athlete into the "hammer position" before release.
- **Javelin** \u2014 an over-arm whip; the run-up adds linear speed; the tail-fin stabilises flight. Neeraj Chopra's Olympic throw (87.58 m in 2021) is the modern reference.

**Foul rules**: stepping out of the circle (or beyond the take-off board) makes the attempt void; the thrower must leave the circle from the back half.` },
    { id: "training", title: "Training methods for events", module: "m3", body: `- **Sprinters**: block starts, speed work (30\u201360 m max-velocity runs), plyometrics, and extensive warm-up; periodised around the competitive season.
- **Endurance runners**: long slow distance, tempo runs, interval (e.g. 8\u00D7400 m), and the **Fartlek** method.
- **Jumpers**: strength training (squats, olympic lifts), approach practice, and take-off drills.
- **Throwers**: heavy resistance training, medicine-ball throws, and technical circle work.
- **The macrocycle** splits the year into preparation, competition and transition; the **microcycle** maps the weekly load with hard/easy alternation.` },
    { id: "officiating", title: "Officiating athletics", module: "m4", body: `- **Starter** \u2014 the gun, the 'set' command, and false-start management (any movement in the blocks after 'set' before the gun is a false start).
- **Judges of the finish** \u2014 determine place order; photo-finish and electronic timing (to 1/1000 s) are used at high level.
- **Field judges** \u2014 measure throws and jumps, check fouls and the legality of the landing/take-off.
- **Track officials** \u2014 enforce lane rules and relay baton-zone rules (the baton must be exchanged within the 20 m zone).
- **Scoring**: in combined events (decathlon: 10 events; heptathlon: 7) points are converted from each performance via scoring tables \u2014 a real-world example of table-based scoring systems.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Track details? **A** — 400 m oval, 8 lanes of 1.22 m; races 200 m and above start on a stagger; relay baton zone is 30 m.
2. **Q** — False start rule? **A** — A single false start disqualifies; a reaction time under 0.1 s is treated as a false start.
3. **Q** — Shot put circle? **A** — 2.135 m diameter; the shot is 7.26 kg (men) / 4 kg (women) and must be pushed, not thrown.
4. **Q** — Long jump? **A** — A 40 m runway, a take-off board and a sandpit; three qualifying attempts and three final attempts.
5. **Q** — What is the decathlon? **A** — 10 events over two days (4 track + 6 field) scored by the combined points tables.

>>> exam
Quick memory anchors
- 400 m track · 7.26/4 kg shot · 2.135 m circle · 0.1 s reaction · 30 m baton zone` }
  ]
},
/* ======================================================================== */
{
  slug: "boxing",
  title: "Boxing",
  altNames: null,
  category: "combat",
  emoji: "\u{1F94A}",
  lede: "Boxing is a striking combat sport in which two athletes wearing gloves fight in a ring over timed rounds, using punches above the belt to score or to stop the opponent. It is the reference sport for studying **kinetic-chain punching power, weight classes and ring officiating**.",
  infobox: [
    ["Origin", "Ancient Greece; modern rules 1867 (Queensberry Rules)"],
    ["Governing body", "IBA (amateur) + professional bodies (WBC, WBA, WBO, IBF)"],
    ["Format", "Individual \u00B7 weight classes"],
    ["Ring", "4.9\u20136.1 m square, 3 rope heights"],
    ["Duration", "Olympic 3 \u00D7 3 min; pro 10\u201312 rounds"],
    ["Scoring", "Points, knockdowns, KO/TKO"],
    ["Olympic", "1904 (men) \u00B7 2012 (women); India's first medal 2008 (Vijender Singh)"]
  ],
  modules: ["m1", "m2", "m3", "m6"],
  court: "boxing-ring",
  verified: true,
  competitions: ["Olympic Games", "World Championships", "WBC/WBA/IBF title fights"],
  keyTerms: ["Jab", "Cross", "Hook", "Uppercut", "Knockout", "Decision", "Weight class", "Referee"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ring**
- **Ring** — a square of 4.9–6.1 m inside the ropes; the canvas is marked with a centre circle; there are four ropes and red/blue/neutral corners.

**Gloves & protection**
- **Gloves** — amateur contests use 10 oz (12 oz elite) red/blue gloves with white scoring knuckle; pro gloves 8–10 oz.
- **Headgear** — worn in amateur competitions; hand wraps, gumshield, groin guard and soft boxing shoes are compulsory.
- **Officials** — referee, judges (score rounds), timekeeper and ringside supervisor; a stool, buckets and a towel are part of the corner kit.` },
    { id: "history", title: "History", module: null, body: `Boxing was an event of the Ancient Olympics. Modern boxing was shaped by the **Queensberry Rules (1867)**: padded gloves, three-minute rounds, a standing-eight count, and the ban on wrestling holds. Professional boxing grew through weight-class titles; amateur (Olympic) boxing uses headguards (men until 2013) and 3-round bouts. India's boxers \u2014 Vijender Singh (2008), M.C. Mary Kom (2012) and the 2024 Olympic medal wave \u2014 made boxing a flagship Indian combat sport.` },
    { id: "ring", title: "The ring", module: "m4", body: `A standard boxing ring is a square between **4.9 and 6.1 m** per side (16\u201320 feet), raised 0.91\u20131.22 m above the floor, with a canvas floor and four ropes at increasing heights (approx 40.6, 71.1, 101.6 and 132.1 cm). Corners are identified by colour \u2014 red, blue (fighters) and two neutral white corners. The ring floor must give a slight give (a 'spring floor'), and corner posts are padded. The minimum ring size for Olympic boxing is 6.1 m.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Punches**: only with the knuckle area of a closed fist, and only above the belt and to the front or side of the head/body. Hitting the back of the head, back, neck or below the belt is illegal.
- **Legal techniques**: the four main punches \u2014 **jab** (lead straight), **cross** (rear straight), **hook** (lateral, bent arm), **uppercut** (vertical, rising).
- **Winning**: by **knockout (KO)** \u2014 the fighter fails to get up by the referee's count of 10; by **technical knockout (TKO)** \u2014 the referee stops it or the corner throws in the towel; by **points decision** \u2014 judges score each round (10-point must system: winner gets 10, loser 9 or less).
- **Fouls** \u2014 low blows, headbutts, holding, hitting a downed opponent; deductions and disqualification follow.
- **The referee** can stop a bout (RSC) when a boxer is unfit to continue.
- **Weight classes** prevent dangerous mismatches \u2014 from strawweight (under 47.6 kg) to heavyweight (over 90.7 kg); competitors weigh in before the bout.` },
    { id: "skills", title: "Punch biomechanics", module: "m2", body: `Punching power comes from **sequential body rotation**, not arm strength alone:

1. The rear foot pushes, rotating the hip (the pelvis leads).
2. Trunk rotation transfers momentum to the shoulder.
3. The shoulder, elbow and wrist extend in a whipping sequence.
4. The fist connects with maximum velocity while the wrist is braced.

- The **straight punch** uses the kinetic chain with the hips rotating fully.
- The **hook** relies on hip rotation with a bent arm \u2014 a shorter, tighter lever.
- **Stance and footwork**: the fighter's stance is a slight crouch with the weight balanced; head movement (slips, weaves) and footwork create angles.
- **Defence**: guard, blocking, parrying, slipping and bobbing-and-weaving.

>>> exam
Mass + velocity = power
Momentum is mass \u00D7 velocity. A punch's impact force depends on how much of the fighter's body mass is behind it and how fast the fist arrives. Rotating the hips and trunk "adds mass" to the fist by making the whole body the moving system \u2014 that is why small fighters with superb rotation can hit harder than big static punchers.
` },
    { id: "anatomy", title: "Physiological demands", module: "m1", body: `- Rounds are 3 minutes of intermittent high-intensity work \u2014 the **lactic system** dominates, with the aerobic system recovering between rounds (1-minute rest).
- **Upper-body power**: the shoulder (deltoid, pectorals, triceps) and the rotator cuff; the **latissimus dorsi** pulls the arm forward on the cross.
- **Legs** \u2014 the calves and quadriceps power the pivot that starts the chain.
- **Neck strength** \u2014 critical to absorb impacts and resist whiplash (the reason boxers do neck bridges).
- The sport carries **head-injury risk** (concussion, chronic traumatic encephalopathy in professionals), which is the subject of modern rule debate and safe-sport policy.` },
    { id: "injuries", title: "Safety & first aid", module: "m6", body: `- **Concussion** \u2014 the primary concern; signs include confusion, unsteady gait, and delayed response. Immediate removal from the ring, no same-day return, and medical clearance before return to training.
- **Hand injuries** \u2014 boxer's fracture (fifth metacarpal) and wrist sprains from poor technique; correct wrapping and glove sizing prevent them.
- **Nosebleeds and facial cuts** \u2014 controlled with gauze; deep cuts stop the bout.
- **Cutmen** \u2014 corner staff who manage bleeding between rounds.
- **Prevention** \u2014 proper sparring supervision, headguards in amateurs, hydration, and mandatory rest periods after knockdowns (standing-eight count).` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Ring size? **A** — 4.9–6.1 m square inside the ropes, with three ropes and four corners.
2. **Q** — How is a bout scored? **A** — The 10-point must system: the winner of a round gets 10, the loser 9 or less; the boxer with more points wins.
3. **Q** — Distinguish KO, TKO and RSC. **A** — KO is a boxer unable to rise; TKO is a referee stoppage; RSC (referee stops contest) covers injuries and inequality.
4. **Q** — Weight classes? **A** — Fly (51), bantam (54), feather (57), light (60), light-welter (63.5), welter (67), light-middle (71), middle (75), light-heavy (81), cruiser (86), heavy (+92 kg) — amateur weights vary by federation.
5. **Q** — Fouls? **A** — Low blows, holding, headbutting and hitting after the bell draw warnings and point deductions.

>>> exam
Quick memory anchors
- 4.9–6.1 m ring · 10-point must · 3 × 3 min rounds · 8-count · red/blue corners` }
  ]
},
/* ======================================================================== */
{
  slug: "wrestling",
  title: "Wrestling",
  altNames: "Freestyle & Greco-Roman",
  category: "combat",
  emoji: "\u{1F93C}",
  lede: "Wrestling is humanity's oldest grappling sport \u2014 two athletes try to pin or out-score each other on a mat. Freestyle and Greco-Roman are the Olympic codes, and Indian wrestling (kushti) is a national tradition that has produced Olympic and Asian medallists.",
  infobox: [
    ["Origin", "Ancient Greece; modern revival 1896 Olympics"],
    ["Governing body", "United World Wrestling (UWW)"],
    ["Format", "Individual \u00B7 weight classes"],
    ["Mat", "9 m diameter competition circle"],
    ["Duration", "2 \u00D7 3 min"],
    ["Scoring", "Takedown 2 \u00B7 reversal 1 \u00B7 exposure 2\u20133 \u00B7 pin = win"],
    ["Olympic", "Freestyle since 1904, Greco-Roman 1896; women's freestyle 2004"],
    ["India", "Olympic medals: bronze 2012 (Yogeshwar Dutt), 2016 (Sakshi Malik), 2024 (Aman Sehrawat)"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "wrestling-mat",
  verified: true,
  competitions: ["Olympic Games", "World Championships", "Asian Games", "Pro Wrestling League (India)"],
  keyTerms: ["Takedown", "Pin (fall)", "Escape", "Reversal", "Exposure", "Neutral position", "Mat chairman"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The mat**
- **Mat** — a 12 m mat with a central 9 m competition circle; the inner red zone is 1 m wide; the outer protection area and a coach zone complete it.

**Attire & gear**
- **Singlet** — one-piece, in red or blue for competition; the athletes compete barefoot.
- **Wrestling shoes** — soft-soled boots with no laces in contact areas (laces are taped); headgear is optional in freestyle/Greco.
- **Officials** — referee on the mat, a judge, a mat chairman; a whistle, scoreboard and a caution flag are standard.` },
    { id: "history", title: "History", module: null, body: `Wrestling appears in Egyptian tomb paintings and in the ancient Olympics (708 BC). Modern Olympic wrestling began in 1896 with Greco-Roman; freestyle (legs allowed) joined in 1904. Indian **kushti** is the traditional akhada-based style, and Indian wrestling has won a string of Olympic medals since 2008, culminating in Sakshi Malik's bronze in 2016 and Aman Sehrawat's in 2024. The sport's core principle is **grappling control**: forcing the opponent's shoulders to the mat.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Freestyle** allows holds on the legs; **Greco-Roman** forbids holds below the waist \u2014 upper-body throws dominate.
- A **pin (fall)** \u2014 both shoulders held on the mat for a moment \u2014 ends the bout instantly. Without a fall, points decide:
  - **Takedown** (2 points) \u2014 bringing the opponent from standing to the mat under control.
  - **Reversal** (1 point) \u2014 escaping a bottom position and gaining control.
  - **Exposure** (2\u20133 points) \u2014 turning the opponent's back toward the mat (danger position).
  - **Escape** (1 point) \u2014 getting free from the bottom.
- The bout is **2 \u00D7 3 minutes**; high-scoring periods and the 'push-out' (forcing a wrestler out of the mat) can also score.
- **Caution** \u2014 passivity is penalised; a third caution disqualifies.
- **Weight classes** from under 48 kg to over 125 kg (men's freestyle).

>>> exam
Pin vs decision
A fall ends the match immediately regardless of score — the ultimate objective. Every point-based result is a lesser outcome that occurred because no wrestler could secure a fall within the time limit.
` },
    { id: "skills", title: "Techniques", module: "m2", body: `- **Stance**: a low, balanced crouch in the neutral position; the centre of gravity stays low for stability.
- **Takedowns**: the double-leg, single-leg, and high-crotch attacks; the throw-by and arm-drag set-ups.
- **Throws** (Greco-Roman focus): the over-under throw, the arm throw (sukui-nage family), and the classic **reverse-lift throw**.
- **Top position**: breakdowns, rides and turns (half-nelson, bar-arm) to expose the back.
- **Bottom position**: escapes, stand-ups, and the switch.
- **Finishing**: the cradle and the power-half to lock the fall.

>>> exam
The lever principle in the single-leg
The single-leg takedown converts the opponent's high centre of gravity into an off-balance moment: the attacker drives the head and shoulder into the hip while lifting the ankle — a third-class lever with the fulcrum at the attacker's feet and a large moment arm created by the opponent's height.
` },
    { id: "anatomy", title: "Physiological demands", module: "m1", body: `Wrestling is **maximal intermittent effort**: repeated 20\u201330 s of near-maximal muscular work with short rest, heavily stressing the **lactic system**. It demands:

- **Strength and power** of the entire body \u2014 legs for takedowns, back and grip for control.
- **Static and dynamic balance** \u2014 the low stance and sudden attacks.
- **Neck strength** \u2014 bridging protects the cervical spine and supports the body.
- **Body composition** \u2014 weight classes make safe cutting practice (gradual, not drastic dehydration) an important health topic.
- **Cardiovascular endurance** \u2014 recovery between 3-minute periods requires a strong aerobic base.` },
    { id: "training", title: "Training", module: "m3", body: `- **Technical drilling** \u2014 repetition of takedown chains from live and static positions.
- **Live wrestling (sparring)** \u2014 situational rounds with varying intensity.
- **Strength**: olympic lifts, neck bridges, grip work (wrestling ropes, farmer's carries).
- **Conditioning**: interval circuits, wrestling-specific drills, and strongman carries.
- **Weight management** \u2014 planned nutrition and gradual weight loss; crash dehydration is dangerous and is being restricted by modern federations.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Mat size? **A** — 9 m competition circle on a 12 m mat, with a 1 m red zone and a protection area.
2. **Q** — Scoring moves? **A** — Takedown 2, reversal 2, escape 1, near fall 2 or 3, and a pin (fall) wins instantly.
3. **Q** — How is a match won? **A** — By fall (both shoulders down), technical superiority (10-point lead), points decision, or disqualification.
4. **Q** — Match length? **A** — 2 periods of 3 minutes in freestyle and Greco-Roman.
5. **Q** — Difference between the two styles? **A** — Freestyle allows leg attacks; Greco-Roman forbids holds below the waist.

>>> exam
Quick memory anchors
- 9 m circle · pin = instant win · takedown 2 / escape 1 · 2 × 3 min · Greco = no legs` }
  ]
},
/* ======================================================================== */
{
  slug: "gymnastics-artistic",
  title: "Artistic Gymnastics",
  altNames: "Olympic Gymnastics",
  category: "gymnastics",
  emoji: "\u{1F938}",
  lede: "Artistic gymnastics is the sport of strength, flexibility, balance and aerial control performed on apparatus such as the floor, vault, bars and beam. It is the definitive study sport for **rotational mechanics, angular momentum and kinesthetic awareness** in kinesiology.",
  infobox: [
    ["Origin", "Ancient Greece; modern apparatus by Jahn (19th c. Germany)"],
    ["Governing body", "FIG (F\u00E9d\u00E9ration Internationale de Gymnastique)"],
    ["Format", "Individual & team, men's/women's"],
    ["Men's apparatus", "Floor, pommel horse, rings, vault, parallel bars, high bar"],
    ["Women's apparatus", "Vault, uneven bars, balance beam, floor"],
    ["Scoring", "Difficulty + Execution (10.0 base in modern code)"],
    ["Olympic", "Since 1896"],
    ["India", "Growing medal success at Asian and Commonwealth level"]
  ],
  modules: ["m1", "m2", "m3", "m5"],
  court: "gymnastics-floor",
  verified: true,
  competitions: ["Olympic Games", "World Championships", "Asian Games", "Commonwealth Games"],
  keyTerms: ["Routine", "Dismount", "Pike", "Tuck", "Layout", "Twist", "Difficulty value", "Execution deduction"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Apparatus**
- **Men** — floor, pommel horse, rings, vault, parallel bars, high bar.
- **Women** — vault, uneven bars, balance beam (5 m × 0.10 m at 1.25 m height) and floor exercise (12 m × 12 m).
- **Vault area** — springboard, runway and a vaulting table about 1.35 m high.

**Attire & aids**
- **Men** — singlet and shorts or long pants; **women** — a leotard.
- **Aids** — magnesium chalk (magnesia) on hands and bars, wrist straps and hand guards; mats and foam pits cushion landings.
- **Officials** — judging panels (D-panel for difficulty, E-panel for execution) and a chief judge.` },
    { id: "history", title: "History", module: null, body: `Gymnastics comes from the Greek 'gymnos' (naked) and was practised in antiquity. Friedrich Ludwig Jahn invented the modern apparatus \u2014 the horizontal bar, parallel bars, rings and pommel horse \u2014 in early 19th-century Germany as military training. Gymnastics has been Olympic since 1896, and the modern scoring system (open difficulty + execution) rewards increasingly spectacular skills while keeping execution faults deductible.` },
    { id: "apparatus", title: "The apparatus", module: "m4", body: `- **Floor** \u2014 a 12 m \u00D7 12 m sprung mat; routines combine tumbling, balance and dance (women add music).
- **Vault** \u2014 a 25 m run-up onto a springboard and a vaulting table 1.35 m high (women) / 1.10 m (men, until the table height change); take-off and landing are judged.
- **Uneven bars** \u2014 two bars at 2.5 m and 1.7 m (women), separated by width; giants, releases and dismounts.
- **Balance beam** \u2014 5 m long \u00D7 10 cm wide, at 1.25 m height (women); routines include acrobatics and dance on a 10 cm surface.
- **Parallel bars** \u2014 two rails at shoulder height (men); swings, supports and pirouettes.
- **High bar** \u2014 a single bar at 2.75 m (men); giant swings, releases and twisting dismounts.
- **Pommel horse** \u2014 a horse with two handles (men); continuous swinging leg circles.
- **Rings** \u2014 suspended rings at 2.75 m (men); strength holds (iron cross, planche) and swing elements.` },
    { id: "skills", title: "Skills & mechanics", module: "m2", body: `Gymnastics skills are studied as **rotations** about the body's axes:

- **Tumbling**: handsprings, flips (somersaults) and twists in the sagittal and longitudinal planes. A tucked somersault has a small radius of gyration \u2014 the tucked limbs speed up the rotation (conservation of angular momentum).
- **Layout somersault** \u2014 the body extended; the larger radius slows rotation, so more height is needed \u2014 a direct lesson in the inverse relationship between moment of inertia and angular velocity.
- **Dismounts** \u2014 from the apparatus to a controlled landing; the landing is a **deceleration** problem in which the knees and hips flex to absorb kinetic energy.

>>> exam
Conservation of angular momentum
In flight a gymnast has no external torque, so angular momentum (L = I\u03C9) is constant. Tucking the limbs reduces the moment of inertia I, which must be balanced by an increase in angular velocity \u03C9 — this is why a tucked salto rotates faster than a layout salto with the same take-off.
` },
    { id: "anatomy", title: "Muscles & joints", module: "m1", body: `- **Wrists and shoulders** \u2014 the most loaded joints: handstands, swings and supports stress the wrist extensors and rotator cuff.
- **Back and core** \u2014 bridging (extension) and hollowing (flexion) demand exceptional spinal control; the 'hollow body' position is the foundation of every skill.
- **Legs** \u2014 quadriceps and calves for take-offs and landings; repeated landing loads make the achilles and knees vulnerable.
- **Flexibility** \u2014 shoulder and hip ranges are mandatory for straddles, splits and giants.
- **Kinesthetic awareness** \u2014 the sport's signature psychological-physical skill: knowing body position in space without vision.` },
    { id: "training", title: "Training", module: "m3", body: `- **Progressions**: every elite skill is built from a sequence of safer intermediate skills under supervision \u2014 'spotting' (physical support) is standard practice.
- **Flexibility and mobility** \u2014 daily sessions for the shoulder, hip and spine.
- **Strength** \u2014 bodyweight gymnastics (planche, levers, handstand holds) are the sport's own resistance training.
- **Conditioning** \u2014 core circuits and jumping/landing control.
- **Load management** \u2014 young gymnasts' growth plates are vulnerable; the sport carefully periodises volume to prevent overuse injuries like spondylolysis.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — List the men's apparatus. **A** — Floor, pommel horse, rings, vault, parallel bars, high bar (6).
2. **Q** — Women's apparatus? **A** — Vault, uneven bars, balance beam, floor (4).
3. **Q** — How is a routine scored? **A** — D-score (difficulty) + E-score (execution out of 10); deductions of 0.1/0.3 are taken for errors.
4. **Q** — Beam dimensions? **A** — 5 m long × 10 cm wide at 1.25 m height; a routine is up to 90 seconds.
5. **Q** — Vault? **A** — A run-up, springboard and table about 1.35 m high; landing on the feet is essential.

>>> exam
Quick memory anchors
- 6 men / 4 women apparatus · D + E scoring · beam 5 m × 10 cm · vault table 1.35 m` }
  ]
},
/* ======================================================================== */
{
  slug: "weightlifting",
  title: "Weightlifting",
  altNames: "Olympic Weightlifting",
  category: "misc",
  emoji: "\u{1F4AA}",
  lede: "Olympic weightlifting consists of two lifts — the **snatch** and the **clean and jerk** — in which athletes hoist maximum loads overhead. It is the ultimate study of **force production, the stretch-shortening cycle and triple extension** in biomechanics, and a strength base for most other sports.",
  infobox: [
    ["Origin", "Ancient Egypt/Greece; modern Olympic 1896"],
    ["Governing body", "IWF (International Weightlifting Federation)"],
    ["Format", "Individual \u00B7 bodyweight classes"],
    ["Barbell", "20 kg men / 15 kg women, 2.5 kg plates onward"],
    ["Lifts", "Snatch \u00B7 Clean & Jerk"],
    ["Attempts", "3 per lift; best of each combined"],
    ["Olympic", "Since 1896; India's bronze 2000 (Karnam Malleswari)"],
    ["Mirabai", "Chanu's 2021 Olympic silver in 49 kg class"]
  ],
  modules: ["m1", "m2", "m3"],
  court: "weightlifting-platform",
  verified: true,
  competitions: ["Olympic Games", "IWF World Championships", "Asian Games"],
  keyTerms: ["Snatch", "Clean and jerk", "Triple extension", "Catch", "Pull", "Front squat", "Platform"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The barbell & plates**
- **Men's bar** — 20 kg, 2.20 m long with 50 mm sleeves; **women's bar** — 15 kg, 2.05 m.
- **Plates** — rubber-coated discs 25/20/15/10/5/2.5/1.25/0.5 kg with collars; all weights are verified by the judges.
- **Platform** — 4 m × 4 m wooden platform with a mat for heavy drops.

**Attire & aids**
- **Singlet** — one-piece competition suit; soft shoes with no heels.
- **Aids** — chalk, weightlifting belt, and wrist/knee straps (straps banned in competition for the lifts themselves).
- **Officials** — three referees signal a "good lift" with a white light and a failure with red.` },
    { id: "lifts", title: "The two lifts", module: "m2", body: `**The snatch**: the bar is pulled from the floor to arms' length overhead in one continuous motion, the lifter dropping into a deep overhead squat to 'catch' it, then standing.

**The clean and jerk**: first the **clean** — the bar is pulled to the shoulders (front-rack position), caught in a front squat, and stood up. Then the **jerk** — a dip-and-drive splits the feet, pushing the bar overhead, and the lifter recovers.

**Triple extension**: all successful pulls depend on the simultaneous explosive extension of the **ankle, knee and hip** at the top of the pull — the 'triple extension' — which transfers momentum up the chain to the bar.

>>> exam
Why a second pull?
The bar is accelerated in the pull, but the decisive phase is the 'second pull' when the hips extend explosively after the knees rebend. This uses the **stretch-shortening cycle** — the fast eccentric load of the knee bend stores elastic energy, released as extra upward force. It is why the lift is a speed-power skill, not pure strength.
` },
    { id: "rules", title: "Competition rules", module: "m4", body: `- Lifts are performed on a 4 m \u00D7 4 m platform with a 2.5 m \u00D7 2.5 m square loading area.
- Each athlete gets **three attempts per lift**; the best snatch plus the best clean and jerk (total) ranks the athlete.
- The bar is loaded in 1 kg increments (0.5 kg to break records); the **jury** checks the loaded weight before each attempt.
- **Reasons for no-lift**: the bar not locked out overhead, elbow bending, stepping off the platform, dropping the bar, or a pause in the pull.
- The lifter must wait for the referee's 'down' command before lowering the bar.
- **Weight classes** from 55 kg to over 109 kg (men) — bodies are matched so strength, not size, decides the medal.` },
    { id: "anatomy", title: "Muscles & mechanics", module: "m1", body: `- **Lower body**: quadriceps, glutes and hamstrings produce the extension force; the calf muscles finish the triple extension.
- **Back**: the erector spinae stabilise the spine under load; the **core** (transversus abdominis, obliques) creates intra-abdominal pressure to protect the spine \u2014 the reason lifters brace, not breathe out.
- **Upper body**: the trapezius and deltoids receive the bar; the triceps lock out overhead.
- **Joints**: hip and knee flexion-extension cycles are the load path; the wrists flex into a shelf for the front rack; the overhead catch demands shoulder and thoracic mobility.
- **Bar path**: the bar must stay close to the vertical line over the mid-foot \u2014 deviating forward or backward loses force and balance.` },
    { id: "training", title: "Training", module: "m3", body: `- **Technique work**: empty-bar and light-load repetitions to groove the bar path and catch positions.
- **Strength accessories**: front squats, pulls, snatch balances and overhead work.
- **Periodisation**: peaking waves of intensity (sets/reps) toward a competition.
- **Recovery**: maximal lifts are a CNS stimulus — recovery days, sleep and nutrition are part of the plan.
- **Safety**: spotters, correct loading (collars), and warm-up sets; the platform must be clear and the bar dropped only in permitted zones.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Name the two competition lifts. **A** — The snatch (bar raised overhead in one motion) and the clean & jerk (two phases).
2. **Q** — How many attempts? **A** — 3 attempts per lift; 1 minute between attempts (2 in the final minute of a round).
3. **Q** — When is a lift not counted? **A** — For a press-out, failure to hold overhead, elbows touching, bar not finishing over the head, or feet leaving the platform.
4. **Q** — How is the total decided? **A** — Best snatch + best clean & jerk; a heavier total wins, with the lighter athlete winning a tie.
5. **Q** — Bar weights? **A** — Men 20 kg, women 15 kg; platform 4 m × 4 m.

>>> exam
Quick memory anchors
- Snatch + clean & jerk · 3 attempts · press-out = no lift · bar 20/15 kg · 4 × 4 m platform` }
  ]
},
/* ======================================================================== */
{
  slug: "throwball",
  title: "Throwball",
  altNames: "Throw Ball, Throw-Ball",
  category: "court",
  emoji: "\u{1F3D0}",
  lede: "Throwball is a two-touch court game in which teams of seven throw and catch a ball over a high net. Hugely popular in Indian school and college sport — especially Tamil Nadu — it is a superb beginner net-game for teaching catching, throwing accuracy and positional rotation without the complexity of volleyball skills.",
  infobox: [
    ["Origin", "USA (adapted from Newcomb ball); developed in India"],
    ["Governing body", "Throwball Federation of India (TFI)"],
    ["Format", "Team \u00B7 7 players per side"],
    ["Court", "12.19 m (40 ft) \u00D7 18.29 m (60 ft)"],
    ["Net height", "2.20 m"],
    ["Ball", "Rubber, circumference \u2248 74\u201381 cm"],
    ["Scoring", "Best of 3 sets \u00B7 25-point sets (rally point)"],
    ["Region", "India, Sri Lanka, Bangladesh"]
  ],
  modules: ["m4", "m3"],
  court: "throwball",
  verified: true,
  competitions: ["National Throwball Championships", "State Level Tournaments", "School Games"],
  keyTerms: ["Throw-in", "Catch", "Rally", "Rotation", "Net touch", "Foul"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Throwball is played mainly in South Asia, with the game codified in India in the 1940s–50s as a gentler court game derived from volleyball and newcomb ball. The Throwball Federation of India (TFI) and later international federations standardised the 30.5 m × 18.3 m court and the rally-scoring rules. It is a popular college and university game in India because it needs only a small court, a net and one ball, and it develops overhead throwing strength, catching and team rotation.` },
    { id: "court", title: "The court & net", module: "m4", body: `The throwball court is **30.5 m × 18.3 m**, divided by a centre line over which a 2.2 m net (men) or 2.0 m net (women) hangs. The surface is usually indoor hardwood or synthetic; boundary lines are 5 cm wide. Behind the baseline sit the substitution zones and the scorer's table. The game is played with an inflated ball of 74–81 cm circumference, thrown overhead by one hand and caught with both.` },
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The court & net**
- **Court** — 30.5 m × 18.3 m, divided by a centre line; the net is 2.2 m high for men and 2.0 m for women.
- **Ball** — inflated volleyball-type ball, circumference 74–81 cm, mass about 400 g, with a soft cover.
- **Markings** — clear court lines, a referee platform, scorer's table and substitution zones.

**Attire**
- **Kit** — jersey, shorts, socks and non-marking court shoes; numbered shirts for scoring.
- **Officials** — referee, two linesmen, scorer and timekeeper; whistle and score sheet.` },
    { id: "training", title: "Training & fitness", module: "m3", body: `Throwball is an overhead sport, so the shoulder girdle, triceps and grip strength matter most. Training includes medicine-ball throws for power, wrist curls and finger strengthening, agility ladders for court movement, and repeated catch-and-throw drills to build reaction speed. Jumping at the net (spike defence) is limited, so vertical jump training is secondary; core stability protects the spine during long overhead throwing sessions.` },
    { id: "rules", title: "Rules", module: "m4", body: `- **Seven players** per side; the game is played over a net with a rubber ball that must be **thrown and caught** — no striking, dribbling or setting.
- **Two touches**: after the serve, the ball may be caught and thrown up to two times before it must cross the net (a throw directly back after one catch is also allowed).
- **Serve**: underarm throw from behind the end line, in any direction.
- **Catching** must be clean; a dropped ball is a fault and the point goes to the opponent.
- **Foot fault / line fault**: stepping over the line while throwing or catching is a fault; touching the net is a fault.
- **Rotation**: like volleyball, players rotate clockwise on winning the serve; positional order is fixed.
- **Scoring**: best of three sets, each set to 25 points (win by 2), rally-point scoring.` },
    { id: "skills", title: "Skills", module: "m2", body: `- **The throw**: a two-handed overhead throw (or one-handed shoulder throw in variants) using the legs and trunk for power; the ball is released with a whip of the wrists for speed.
- **The catch**: the primary defensive skill — hands form a receiving platform, the elbows absorb, and the ball is controlled and thrown in one fluid motion.
- **Passing combinations**: the setter-catcher relationship builds quick rally patterns.
- **Movement**: players cover zones rather than players; footwork and anticipation replace contact.
- **Biomechanics**: throwing power again follows the **kinetic chain** (legs \u2192 hips \u2192 trunk \u2192 shoulder \u2192 wrist); the two-hand overhead throw recruits the deltoids and triceps with abdominal bracing.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `A match is controlled by a referee who blows for faults, assisted by two linesmen, a scorer and a timekeeper. The referee signals service, faults (double touch, net touch, over-line footwork) and rotation errors. Throwball tournaments in India use league-cum-knockout formats: group league to qualify, then knockout rounds with seeding for the top teams.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Court and net? **A** — 30.5 m × 18.3 m with a 2.2 m net (men) / 2.0 m (women).
2. **Q** — How many players? **A** — 7 on court plus up to 5 substitutes.
3. **Q** — How are points scored? **A** — Rally scoring to 25 (win by 2), best of 5 sets, a deciding set to 15.
4. **Q** — How is the ball played? **A** — A player may touch it twice (catch and throw); the throw must be made overhead with one hand.
5. **Q** — When do teams rotate? **A** — Clockwise when they regain the serve; positional faults are penalised.

>>> exam
Quick memory anchors
- 30.5 × 18.3 m · net 2.2/2.0 m · 7 players · 25 pts · 1-hand overhead throw` }
  ]
},
/* ======================================================================== */
{
  slug: "shooting",
  title: "Sport Shooting",
  altNames: "Rifle, Pistol, Shotgun",
  category: "target",
  emoji: "\u{1F3AF}",
  lede: "Sport shooting tests extreme **precision, breath control and mental stillness** with rifles, pistols and shotguns. It is the model sport for studying the physiology of fine motor control, concentration (arousal regulation) and the psychology of errorless performance.",
  infobox: [
    ["Origin", "Modern sport from 19th-century Europe"],
    ["Governing body", "ISSF (International Shooting Sport Federation)"],
    ["Format", "Individual & team events"],
    ["Disciplines", "Rifle \u00B7 Pistol \u00B7 Shotgun (trap, skeet)"],
    ["Distances", "10 m (air) \u00B7 25 m / 50 m (pistol/rifle)"],
    ["Olympic", "Since 1896"],
    ["India", "Multi-medal powerhouse; 2021 double Olympic bronze (Mirabai aside, shooting medallists at Paris 2024)"]
  ],
  modules: ["m2", "m5", "m6"],
  court: "shooting-range",
  verified: true,
  competitions: ["Olympic Games", "ISSF World Championships", "Asian Games"],
  keyTerms: ["Trigger control", "Hold", "Breath hold", "Follow-through", "Aim", "Sighter", "Squeeze"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Firearms (ISSF disciplines)**
- **Air rifle** — 4.5 mm pellet, 10 m range; **small-bore rifle** (.22) at 50 m; **air pistol** and rapid-fire pistol at 25 m.
- **Shotgun** — trap and skeet at clay targets; the clay birds are 110 mm across.

**Targets & gear**
- **Targets** — the 10-ring at 10 m is about 11.5 mm; scoring is by ring value from 1 to 10 (X-ring for ties).
- **Gear** — stiff leather/canvas shooting jacket, gloves, shooting glasses, ear and eye protection, and a sling for rifle support.
- **Aids** — pellet tins, spotting scope, chronograph for muzzle velocity checks.` },
    { id: "disciplines", title: "The disciplines", module: "m4", body: `- **Air rifle / air pistol** \u2014 10 m indoor, 4.5 mm pellets, standing; precision finals with single-shot elimination.
- **Pistol events** \u2014 10 m air pistol, 25 m rapid-fire and sport pistol, 50 m free pistol.
- **Rifle events** \u2014 50 m three-position (kneeling, prone, standing) and 10 m air rifle.
- **Shotgun** \u2014 **trap** (targets launched away) and **skeet** (crossing targets from two houses); clay targets break on hit.
- **Targets**: the 10 m air rifle ten-ring is only 0.5 mm across \u2014 the athlete must hold the front sight and trigger squeeze absolutely steady.` },
    { id: "physiology", title: "Physiology & technique", module: "m2", body: `- **Breath control**: the shot is released during the **natural respiratory pause** (between breaths), when the chest is least moving.
- **Hold**: the rifle/pistol must be held steady; the wobble zone of a good shooter is under a centimetre at 10 m.
- **Trigger control**: the trigger is squeezed (not pulled) so the sight picture doesn't shift — a slow, smooth pressure with the tip of the finger.
- **Follow-through**: the athlete must keep the hold after the shot to avoid flinching.
- **The stance**: a locked, relaxed posture with a wide base; body alignment places the gun over the natural axis of balance.

>>> exam
Why hold the breath?
Every breath moves the chest, shoulder and gun. The respiratory pause gives a 2\u20133 s window of minimal movement. The skill is to time the whole shot sequence — settle, align, pause, squeeze — to finish inside that window.
` },
    { id: "psychology", title: "The psychology of precision", module: "m5", body: `Shooting is a **closed-skill, self-paced** sport \u2014 the athlete creates the challenge. The mental demands are extreme:

- **Concentration**: attention must switch between the big picture (match) and a single focus (the sight picture).
- **Arousal regulation**: too much tension causes the 'hold' to shake; too little loses precision. Top shooters practise **progressive muscle relaxation** and breathing routines.
- **Pre-shot routine**: a fixed sequence (grip \u2192 stance \u2192 breathe \u2192 aim \u2192 squeeze) acts as a psychological anchor.
- **Routine vs pressure**: the same routine is executed for every shot so that pressure cannot change the performance.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Name the ISSF disciplines. **A** — 10 m air rifle/pistol, 50 m rifle, 25 m pistol, shotgun trap and skeet, and running target.
2. **Q** — Sizes at 10 m? **A** — The 10-ring is about 11.5 mm across; the pellet is 4.5 mm; scoring from 1 to 10.
3. **Q** — Key technique steps? **A** — Hold, sight alignment, breath control, trigger squeeze and follow-through.
4. **Q** — When is a shot a "mike"? **A** — A miss or out-of-scoring hit gives zero; with pellet guns the shot must be released in the allotted time.
5. **Q** — Shotgun events? **A** — Trap (single target away) and skeet (two houses, crossing targets).

>>> exam
Quick memory anchors
- 10 m air rifle · 11.5 mm 10-ring · 4.5 mm pellet · breath control · hold-squeeze-follow-through` }
  ]
},
/* ======================================================================== */
{
  slug: "swimming",
  title: "Swimming",
  altNames: null,
  category: "aquatics",
  emoji: "\u{1F3CA}",
  lede: "Swimming is self-propulsion through water in competitive strokes \u2014 freestyle, backstroke, breaststroke and butterfly. It is the benchmark sport for **hydrodynamics, drag and the transfer of land-based training to an aquatic environment**, and a compulsory life-skill in most PHE programmes.",
  infobox: [
    ["Origin", "Modern competitive swimming from 19th-century England"],
    ["Governing body", "World Aquatics (formerly FINA)"],
    ["Format", "Individual & relay events"],
    ["Pool", "50 m long (Olympic) \u00D7 25 m wide, 2\u20133 m deep"],
    ["Lanes", "8 lanes of 2.5 m each"],
    ["Strokes", "Freestyle, backstroke, breaststroke, butterfly"],
    ["Olympic", "Since 1896"],
    ["India", "Historic first Olympic swimming final at Paris 2024"]
  ],
  modules: ["m1", "m2", "m3", "m6"],
  court: "swimming-pool",
  verified: true,
  competitions: ["Olympic Games", "World Aquatics Championships", "Asian Games"],
  keyTerms: ["Lap", "Flip turn", "Drag", "Buoyancy", "Catch", "Pull", "Kick", "Stroke rate"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The pool**
- **Olympic pool** — 50 m long × 25 m wide, 2 m deep in the racing lanes; 8–10 lanes, each 2.5 m wide with lane ropes.
- **Short course** — 25 m pools used in winter competitions; touch pads time every touch automatically.

**Swimmer's gear**
- **Suit** — racing swimsuit (compression tech suits at elite level), goggles and a silicone swim cap.
- **Training aids** — kickboard, pull buoy, paddles and fins for technique work.
- **Officials** — starter with a gun and recall system, referees and turn judges; a false-start recall rope spans the pool.` },
    { id: "strokes", title: "The four competitive strokes", module: "m2", body: `- **Freestyle (front crawl)** \u2014 the fastest stroke: alternating arm pulls, a flutter kick, and breathing to the side.
- **Backstroke** \u2014 crawl on the back; the head stays in the water, and the stroke is driven by the shoulder roll.
- **Breaststroke** \u2014 the slowest stroke but the most technical: simultaneous arm sweep, whip kick and glide; the head rises to breathe each stroke.
- **Butterfly** \u2014 both arms recover over the water together with a dolphin kick — the most demanding, with the highest power requirement.

>>> exam
Why is the front crawl fastest?
The crawl keeps a streamlined body position with minimal frontal area, continuous propulsion from alternating arms (no dead glide phase), and a small, high-frequency flutter kick. Reducing **form drag** (the body's cross-section facing the water) is the single biggest determinant of speed.
` },
    { id: "pool", title: "The pool & starts", module: "m4", body: `- An Olympic pool is **50 m long, 25 m wide and 2\u20133 m deep**, with 8\u201310 lanes 2.5 m wide; lane ropes absorb waves.
- **Start blocks** at one end; backstroke uses the **in-water start** with hand grips.
- **Turning**: freestyle, backstroke and butterfly use the **flip turn** (a somersault against the wall); breaststroke requires a two-handed touch turn.
- **Finish**: the touch pad records the time to 1/100 s.
- **Relay rules**: the incoming swimmer must touch before the outgoing swimmer leaves the block (electronic timing enforces it).
- **False starts**: in individual events one false start disqualifies; relays allow one team false start.` },
    { id: "physics", title: "Physics of swimming", module: "m2", body: `- **Buoyancy**: the body floats when its average density is less than water's; lean mass sinks, fat floats — body composition shapes buoyancy and technique.
- **Drag**: three types — **form drag** (shape), **friction drag** (skin contact) and **wave drag** (surface turbulence). Streamlining (the 'torpedo' position) minimises form drag.
- **Propulsion**: the hand acts like a paddle; elite swimmers 'catch' water early and pull with an S-shaped path that uses lift and drag forces.
- **Drag reduction clothing**: modern tech suits reduce friction but not enough to matter at school level — technique dominates.

>>> exam
Wave drag and the surface
Breaking the surface creates waves that steal energy. Swimming slightly deeper (as in the underwater dolphin phase after turns) avoids most wave drag — the reason elite swimmers stay underwater for up to 15 m after each wall, often the decisive difference in races.
` },
    { id: "physiology", title: "Physiological demands", module: "m1", body: `- Swimming is **aerobic** at long distances and **anaerobic-lactic** in sprints; the 200 m butterfly is one of the most demanding events in all sport.
- The **aerobic system** dominates 200 m+ events; the **ATP-CP** system powers sprint starts and turns.
- Swimming is a **non-weight-bearing** exercise — ideal for injury rehabilitation, but it underloads bone density.
- **Breathing technique**: swimmers exhale into the water and inhale quickly — the opposite of land breathing, trained by stroke rhythm.
- **Muscles**: the latissimus dorsi, pectorals and deltoids drive the pull; the core stabilises the body roll; the legs contribute less (15\u201330%) in most strokes.` },
    { id: "training", title: "Training", module: "m3", body: `- **Interval training** in the pool — sets like 10 \u00D7 100 m with short rest develop both aerobic base and pace.
- **Drills**: stroke-technique drills isolate the catch, pull, kick and breathing.
- **Dry-land strength**: the lat pull-down, bench press and core work transfer to water power.
- **Pace work and pacing strategy**: negative-split racing (second half faster) is a taught tactic.
- **Recovery**: active recovery laps and stretching maintain shoulder health — the swimmer's most vulnerable joint (shoulder impingement).` },
    { id: "safety", title: "Safety & first aid", module: "m6", body: `- **Drowning prevention**: supervision, lifeguards, buddy systems and water-safety education are the core of school aquatics.
- **Rescue techniques**: the reach-throw-row-go principle — never enter the water to rescue until safe.
- **CPR** for non-breathing casualties; recovery position for breathing casualties.
- **Cramps**: calf cramps are common; correct stretching and gradual cool-down help.
- **Pool hygiene**: water chemistry, showering before entry and proper footwear prevent skin and ear infections (swimmer's ear).` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Olympic pool dimensions? **A** — 50 m × 25 m, 2 m deep in the lanes; 8–10 lanes of 2.5 m.
2. **Q** — Name the four strokes. **A** — Freestyle, backstroke, breaststroke and butterfly.
3. **Q** — What is the medley? **A** — A race using all four strokes in order (butterfly, backstroke, breaststroke, freestyle); individual and relay forms.
4. **Q** — Turn rules? **A** — Freestyle and backstroke use flip turns; breaststroke and butterfly need a two-hand touch; a 15 m underwater limit applies.
5. **Q** — False start? **A** — A single false start disqualifies the swimmer; a recall rope is dropped.

>>> exam
Quick memory anchors
- 50 × 25 m pool · 4 strokes · medley order · 15 m underwater · false start = DQ` }
  ]
},
/* ======================================================================== */
{
  slug: "sepaktakraw",
  title: "Sepak Takraw",
  altNames: "Kick Volleyball, Takraw",
  category: "court",
  emoji: "\u{1F3D0}",
  lede: "Sepak takraw is a net sport from Southeast Asia in which a rattan or synthetic ball is played almost entirely with the feet, knees, head and chest — the 'foot volleyball'. It is a spectacular study of **flexibility, body control and kick mechanics**, and increasingly part of Asian P.E. curricula.",
  infobox: [
    ["Origin", "Southeast Asia; modern rules 1965 (ISTAF)"],
    ["Governing body", "International Sepaktakraw Federation (ISTAF)"],
    ["Format", "Team of 3 \u00B7 regu (doubles/singles variants)"],
    ["Court", "13.4 m \u00D7 6.1 m"],
    ["Net", "1.52 m high (centre) \u00B7 1.55 m (posts)"],
    ["Ball", "12\u201314 woven strands or synthetic, \u2248 170\u2013180 g"],
    ["Olympic", "Asian Games medal sport since 1990"],
    ["Scoring", "Best of 3 sets to 21, rally point"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "takraw",
  verified: true,
  competitions: ["ISTAF World Cup", "Asian Games", "King's Cup"],
  keyTerms: ["Regu", "Sepak", "Tekong", "Feeder", "Kick", "Net touch", "Foot fault"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Sepaktakraw, meaning "kick" (sepaktakraw is Malay for kick + Takraw for ball) comes from Southeast Asia, with roots in the old games of sepak raga (Malaysia) and takraw (Thailand). Modern rules were standardised after World War II, and the ISTAF (International Sepaktakraw Federation) governs it. It entered Asian Games competition in 1990 and is now played worldwide, blending football skills with volleyball tactics.` },
    { id: "court", title: "The court & net", module: "m4", body: `The court is **13.4 m × 6.1 m** — about the size of a doubles badminton court. A 1.52 m net (men) / 1.42 m (women) divides it, and a service circle of 0.3 m radius is marked in the centre of the back third. The ball is a woven rattan or synthetic sphere of about 12 strands, 42–44 cm in circumference and 170–180 g in mass.` },
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ball & net**
- **Ball** — woven rattan or synthetic, about 12 strands, circumference 42–44 cm, mass 170–180 g, so light it can be headed with force.
- **Net** — 1.52 m high at the posts (men), 1.42 m (women); the service circle sits in the middle of the back third.
- **Court** — 13.4 m × 6.1 m, about the size of a doubles badminton court.

**Attire**
- **Kit** — jersey, shorts, soft-soled sports shoes; no hard protection.
- **Officials** — referee, two linesmen and a scorer; a serve-judge may call foot faults.` },
    { id: "rules", title: "Rules", module: "m4", body: `- **Team**: 3 players (a regu) — the **tekong** (server/striker), the **feeder** and the **spiker**. Doubles and singles variants exist.
- **Service**: the tekong kicks the ball from the serving circle after the feeder tosses it; the server must have one foot in the circle.
- **Contact**: the ball may be played with the feet, knee, head, shoulder and chest — never the hand or arm.
- **Three touches** maximum before the ball must cross the net (like volleyball); no double-touch by the same player (a block counts differently).
- **Scoring**: best of three sets to 21 (win by 2), rally-point scoring; the receiving side wins a serve on every point.
- **Faults**: net touch, the ball touching the ground, out of bounds, or a foot fault at service.` },
    { id: "skills", title: "Skills & mechanics", module: "m2", body: `- **The kick (sepak)** — the ball is struck with the instep; the **biomechanics mirror a football volley**: the hip flexes and the knee extends to swing the foot, with the leg's kinetic chain generating ball speed.
- **The sepak takraw serve** — a full instep strike; the body arches to generate whip, and the ball travels at high speed.
- **The header** — the ball is directed with the forehead; neck strength and timing control direction.
- **The chest trap** — the ball is cushioned on the chest then kicked, using the stretch-shortening cycle.
- **The 'somersault kick'** — an acrobatic overhead kick, the sport's signature skill, requiring extreme flexibility and balance.

>>> exam
Why the foot, not the hand?
The rules forbid hands to keep the game distinct from volleyball and to showcase lower-limb skill. Physiologically it demands exceptional hip and hamstring flexibility — the same range that reduces hamstring injury risk in footballers.
` },
    { id: "officiating", title: "Officiating & rules", module: "m4", body: `A referee controls play with two linesmen and a scorer. The tekong must serve with the ball kicked from inside the service circle, and the receiving side may take up to three touches. Faults include touching the net, carrying the ball, or a serve that lands out. Matches are best of three sets to 21 (win by 2), with the decisive set played to the same score.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Team size? **A** — A "regu" has 3 players: the tekong (server), feeder and spiker; doubles variants exist.
2. **Q** — How many touches? **A** — Maximum 3 per team before the ball must cross the net; no hands or arms are allowed.
3. **Q** — Which body parts may play the ball? **A** — Feet, legs, knees, head, chest and shoulders.
4. **Q** — Scoring? **A** — Rally scoring to 21 (win by 2), best of 3 sets.
5. **Q** — Key skills? **A** — The seap (kick spike), tanong (head spike), tahanan (shoulder play) and tuck kick.

>>> exam
Quick memory anchors
- 3 players (tekong/feeder/spiker) · 3 touches · no hands · 21 pts · 1.52 m net` }
  ]
},
/* ======================================================================== */
{
  slug: "archery",
  title: "Archery",
  altNames: null,
  category: "target",
  emoji: "\u{1F3F9}",
  lede: "Archery is the sport of shooting arrows at a target with a bow — recurve, compound or traditional. It pairs **static muscular endurance with extreme mental control**, making it a core sport in the study of concentration and precision biomechanics.",
  infobox: [
    ["Origin", "Ancient Egypt, China, India (warfare & hunting)"],
    ["Governing body", "World Archery"],
    ["Format", "Individual & team (recurve/compound)"],
    ["Distance", "70 m (recurve Olympic)"],
    ["Target", "122 cm face, 10 scoring rings"],
    ["Rounds", "72 arrows ranking + elimination brackets"],
    ["Olympic", "Since 1972 (recurve)"],
    ["India", "Repeated world and Asian medallists; 2024 Olympic silver (men's team)"]
  ],
  modules: ["m2", "m5", "m6"],
  court: "archery-range",
  verified: true,
  competitions: ["World Archery Championships", "Olympic Games", "Asian Games"],
  keyTerms: ["Draw", "Anchor point", "Release", "Sight", "Nock", "Gold", "Clicker"],
  sections: [
    { id: "rules", title: "Core rules", module: "m4", body: `**Competition formats**
- **Ranking round** — archers shoot 72 arrows at 70 m; total score seeds the bracket.
- **Match play** — set system: 3 arrows per set, 2 set points to the set winner; first to 6 wins; a tied match is decided by a single-arrow shoot-off closest to the centre.

**Scoring & rules**
- Rings score from 10 (gold) down to 1 (white); the X-ring breaks ties; arrows landing on a line count the higher value.
- Compound archers shoot 50 m on a 80 cm target face.
- Common faults — shooting before the signal, crossing the shooting line, or failing to complete the end within the time limit.
- Safety is absolute: arrows are only nocked on the line and pointed at the target.` },
    { id: "equipment", title: "The equipment", module: "m4", body: `- **Recurve bow** — the Olympic bow: limbs curve away at the tips, storing more energy; fitted with sights, stabilisers and a clicker.
- **Compound bow** — uses a cam-and-cable system that lets the archer hold a reduced weight at full draw, giving a more forgiving release.
- **Arrow** — shaft, fletching and point; the spine (stiffness) must match the bow's draw weight.
- **Target** — a 122 cm face with rings scoring 10 (gold centre) down to 1 (white outer).
- **Range**: 70 m for Olympic recurve; indoor distances of 18 m are common.` },
    { id: "technique", title: "Technique & biomechanics", module: "m2", body: `The shot follows a fixed sequence: **stance \u2192 nock \u2192 draw \u2192 anchor \u2192 aim \u2192 release \u2192 follow-through**.

- **Draw**: the pulling arm (back muscles — rhomboids, trapezius) does the work, not the biceps; the bow arm pushes forward in a straight line.
- **Anchor**: the string hand meets a fixed reference point (corner of the mouth, chin) so every draw is identical.
- **Aim**: the sight aligns with the target while the bow is held steady — tiny hold errors are magnified at 70 m.
- **Release**: the fingers open; the string slips off cleanly. A 'plucked' release sends the arrow sideways.
- **Follow-through**: the bow arm stays up until the arrow lands.

>>> exam
Arrow trajectory at 70 m
At 70 m the arrow flies a parabolic arc, rising about 2\u20133 m above the target at mid-flight before dropping onto the gold. Release speed and angle of elevation set the parabola; the sight is adjusted to raise or lower the arc to match the distance.
` },
    { id: "psychology", title: "The psychology", module: "m5", body: `Archery is the classic **closed-skill** sport. The gold-medal ability is not strength — it is:

- **Concentration span**: holding focus across 72 ranking arrows plus knockout rounds.
- **Routine discipline**: the same 12-step sequence every arrow.
- **Arousal control**: a steady heart rate is essential; archers lower their heart rate and breathing before each arrow.
- **Error recovery**: after a bad arrow, the mental reset is trained as deliberately as the shot.
- **Self-talk and imagery**: visualising the arrow hitting the gold before the release.` },
    { id: "safety", title: "Safety", module: "m6", body: `- Arrows are lethal — **never point a bow at anyone**, draw only on the shooting line, and shoot only when the range is clear.
- Whistle commands control the range: two blasts to shoot, one blast to retrieve arrows.
- The **bow-arm string slap** is prevented by correct elbow rotation (bracing the arm).
- Equipment inspection: cracked arrows or damaged strings are retired.
- Physical load: shoulder and back overuse injuries are managed with strength work and volume control.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Distances? **A** — Olympic recurve shoots 70 m (ranking) on a 122 cm target; compound shoots 50 m; indoor is 18 m.
2. **Q** — Explain the scoring rings. **A** — Gold (10 and 9), red (8, 7), blue (6, 5), black (4, 3), white (2, 1); X-count breaks ties.
3. **Q** — Match format? **A** — Ranking round then set-play: each set of 3 arrows scores 2 set points to the winner; a tied match goes to a single-arrow shoot-off.
4. **Q** — Shot sequence? **A** — Stance, nock, draw, anchor, aim, release, follow-through.
5. **Q** — Safety rules? **A** — Shoot only on the whistle, keep arrows pointed downrange and wait behind the waiting line.

>>> exam
Quick memory anchors
- 70 m · 122 cm target · 10-ring gold · 3 arrows per end · set play + shoot-off` }
  ]
}
,

{
  slug: "netball",
  title: "Netball",
  altNames: "Women's Basketball (early)",
  category: "court",
  emoji: "\u{1F3D0}",
  lede: "Netball is a seven-a-side court game that grew out of basketball in England in the 1890s. It is an invasion game in which players pass a ball and shoot it into a raised ring, but the ball may not be dribbled and the player holding it may not move. Because play is zoned by position, netball is a superb teaching tool for footwork, passing accuracy and spatial discipline.",
  infobox: [
    ["Invented", "1890s, England"],
    ["Governing body", "World Netball (INF)"],
    ["Format", "Team \u00B7 7 players per side"],
    ["Duration", "4 \u00D7 15 min quarters"],
    ["Ball", "Size 5; circumference 69\u201371 cm"],
    ["Court", "30.5 m \u00D7 15.25 m"],
    ["Olympic", "Not in the Olympic programme (played at the Commonwealth Games)"],
    ["Common injuries", "Ankle sprains, knee injuries, finger jams"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "netball",
  verified: true,
  competitions: ["Netball World Cup", "Commonwealth Games", "Super Netball", "India Netball Championship"],
  keyTerms: ["Centre pass", "Third", "Goal circle", "Pivot", "Obstruction", "Footwork"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Martina Bergman-\u00D6sterberg and Clara Baer adapted basketball in England to a game women could play without physical contact. The early game, called "women's basketball" and then "netball", removed dribbling and running with the ball and introduced positional zoning. The first rules were printed in 1901, and the game spread through the British Empire to Australia, New Zealand, the West Indies and India. The International Netball Federation (INF, now World Netball) governs the modern game, which has a huge following in Commonwealth nations.` },
    { id: "court", title: "The court & markings", module: "m4", body: `The court is **30.5 m long \u00D7 15.25 m wide**, divided into three **thirds** by two transverse lines. A **goal circle** of radius 4.90 m surrounds each hoop. The goal post is 3.05 m high with a ring of 380 mm internal diameter. Players may move freely inside their assigned zones but cannot enter the third containing the opposite goal unless their position allows it.` },
    { id: "rules", title: "Core rules", module: "m4", body: `Each side has seven positions with fixed zones: Goal Shooter (GS), Goal Attack (GA), Wing Attack (WA), Centre (C), Wing Defence (WD), Goal Defence (GD) and Goal Keeper (GK).

**Key rules**
- **Footwork** \u2014 a player may not step while holding the ball; a pivot on one foot is allowed.
- **Holding** \u2014 the ball must be released within 3 seconds.
- **Passing** \u2014 no dribbling or travelling; the ball must be passed or shot.
- **Contact & obstruction** \u2014 a defender must stay 0.9 m from the player with the ball and may not touch.
- **Scoring** \u2014 1 point per goal; a goal counts only if the shooter is inside the goal circle.
- The game restarts with a **centre pass** after each goal, alternating between the teams.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- **Passes** \u2014 chest pass, bounce pass, shoulder pass and overhead lob; the chest pass is fastest and most accurate.
- **Catching** \u2014 two hands, fingers spread, with the body balanced to pass quickly.
- **Footwork** \u2014 receiving on the correct foot and pivoting to open a passing angle.
- **Shooting** \u2014 a one-hand push shot with the elbow high, knees bent and follow-through.
- **Defence** \u2014 front- and side-defence positioning, hands up without contact, and intercepting the passing lane.` },
    { id: "anatomy", title: "Anatomy & mechanics", module: "m1", body: `Netball is a jump-and-land sport: repeated rebounding and shooting load the ankles and knees. The main muscles are the **quadriceps and gluteals** (jumping), **calf complex** (push-off), **shoulder girdle and triceps** (passing and shooting) and **core** (balance on landing). Proprioception work and landing training (soft knees, toe-to-heel) reduce the high ankle-sprain risk.` },
    { id: "training", title: "Training & conditioning", module: "m3", body: `- Agility ladders and cone drills for quick direction change and change-of-pace.
- Plyometric progressions (box jumps, depth jumps) for jump height, dosed carefully to protect knees.
- Passing circuits that build accuracy under fatigue; small-sided games for decision-making.
- Strength work on the lower body and shoulder; core stability for balanced landing.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `Two umpires control a match, assisted by a scorer and timekeeper. The umpire blows for contact, obstruction, offside (entering the wrong third) and footwork, restarting with a penalty pass or shot. Tournaments use round-robin leagues and knockouts; the Commonwealth Games and the Netball World Cup are the major titles. Tie-breaks use goal difference and goals for/against.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Give the court dimensions and key markings of a netball court. **A** — 30.5 m \u00D7 15.25 m, divided into three thirds; goal circles of radius 4.90 m; posts 3.05 m high with a 380 mm ring.
2. **Q** — Name the seven positions. **A** — Goal Shooter (GS), Goal Attack (GA), Wing Attack (WA), Centre (C), Wing Defence (WD), Goal Defence (GD) and Goal Keeper (GK).
3. **Q** — What is the footwork rule? **A** — A player may not step while holding the ball; a pivot on one foot is allowed, and the ball must be released within 3 seconds.
4. **Q** — How is a goal scored? **A** — 1 point, only when the shooter releases inside the goal circle; play restarts with a centre pass alternating between teams.
5. **Q** — What is the obstruction rule? **A** — A defender must stay 0.9 m from the player with the ball and may not make contact.

>>> exam
Quick memory anchors
- Court 30.5 \u00D7 15.25 m · 3 thirds · goal circle radius 4.90 m · post 3.05 m
- No dribbling, no running with the ball · 3 s holding · pivot allowed` }
  ]
},

{
  slug: "judo",
  title: "Judo",
  altNames: "The Gentle Way",
  category: "combat",
  emoji: "\u{1F93C}",
  lede: "Judo is a modern Japanese grappling martial art and Olympic combat sport founded by Jigoro Kano in 1882. Its principle, 'maximum efficiency with minimum effort', lets a smaller throw a larger opponent using leverage. As a combat sport it teaches throwing, holding, and the biomechanics of balance and centre of gravity.",
  infobox: [
    ["Invented", "1882, Japan \u2014 Jigoro Kano"],
    ["Governing body", "International Judo Federation (IJF)"],
    ["Format", "Individual \u00B7 combat"],
    ["Duration", "4 min per contest (IJF)"],
    ["Area", "Competition mat 8 m \u00D7 8 m"],
    ["Olympic", "Since 1964 (men), 1992 (women)"],
    ["Belt system", "Kyu grades (white to brown) and Dan grades (black and above)"],
    ["Common injuries", "Shoulder dislocations, knee sprains, finger injuries"]
  ],
  modules: ["m1", "m2", "m4", "m5"],
  court: "judo-mat",
  verified: true,
  competitions: ["Olympic Games", "World Judo Championships", "IJF World Tour"],
  keyTerms: ["Ippon", "Waza-ari", "Shido", "Ne-waza", "Osaekomi", "Random", "Ukemi"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Jigoro Kano combined the throwing techniques of classical jujutsu schools into a modern, safe sport he named judo ("the gentle way"). He founded the Kodokan in 1882 and taught that skill, not size, decides a contest. Judo spread from Japan to the rest of the world through the IJF, entered the Olympics in 1964 and is now practised by millions, including strong growth in India.` },
    { id: "arena", title: "The arena & grading", module: "m4", body: `Contests take place on a **tatami mat** of at least 8 m \u00D7 8 m within a safety area. Judokas wear the **judogi** (jacket, trousers, belt) in white or blue. Rank is shown by the belt: **kyu** grades run white to brown, and **dan** grades run black and above (1st dan black, then higher dans). The belt is tied so that its length and knot follow Kodokan etiquette.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `A contest is **4 minutes** (IJF) and is won by the first **ippon**.

**Scoring**
- **Ippon** \u2014 a clean throw on the back, a 20-second hold-down, a submission (tap-out), or a strangle/armlock finish. Wins instantly.
- **Waza-ari** \u2014 a throw of partial quality (not fully on the back) or a 10\u201319 second hold. Two waza-ari combine to an ippon.
- **Yuko and koka** were abolished in 2009 \u2014 only ippon and waza-ari remain.
- **Shido** \u2014 minor infringements (passivity, false attacks); three shido mean disqualification by hansoku-make.

**Penalties** \u2014 stepping out of the area, grabbing the opponent's leg (in judo, leg-grabbing in standing play is banned), and dangerous throws draw penalties.` },
    { id: "skills", title: "Core skills & techniques", module: "m3", body: `- **Nage-waza (throwing)** \u2014 hip throws (o-goshi, seoi-nage), leg throws (o-soto-gari, tai-otoshi) and sacrifices (tomo-e-nage).
- **Ne-waza (groundwork)** \u2014 hold-downs (kesa-gatame, kami-shiho-gatame), strangles (shime-waza) and armlocks (kansetsu-waza).
- **Ukemi (breakfalls)** \u2014 the essential safety skill: rolling breakfalls that turn a throw into a safe landing.
- **Kuzushi** \u2014 the breaking of balance before a throw, the heart of the sport's biomechanics.` },
    { id: "anatomy", title: "Anatomy & biomechanics", module: "m2", body: `Every throw uses the body as a system of levers and a moving centre of gravity. **Kuzushi** (balance-breaking) shifts the opponent's centre of gravity off their base of support; the throw then rotates them around that shifted point. Key muscles are the **hip flexors, gluteals and hamstrings** for lifting, the **forearms and grip** for control, and the **core** for rotational power. Breakfalls protect the neck and spine by distributing impact over the arm and back.` },
    { id: "training", title: "Training & conditioning", module: "m3", body: `- **Uchi-komi** \u2014 repeated entry into throws against a partner, building timing and speed.
- **Randori** \u2014 free practice applying techniques against resistance, the core of judo conditioning.
- Grip-fighting drills and forearm strength work for the jacket grip.
- Circuit training blending sprint intervals, burpees and core work, plus mobility for the hips and shoulders.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `One referee stands on the mat calling ippon, waza-ari and penalties with the standard hand signals; two corner judges assist. The referee announces "hajime" (begin), "matte" (stop) and "sore made" (end). Disputes are reviewed with video. In competition, judokas are divided by weight category for both sexes.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Who founded judo, and in what year? **A** — Jigoro Kano, in 1882, combining elements of traditional jujitsu into a modern Olympic sport.
2. **Q** — What is an ippon and what is the match length? **A** — An ippon is a perfect throw or a 20-second hold, ending the contest immediately; a match is 4 minutes (IJF).
3. **Q** — Describe waza-ari. **A** — A half-point score given for a throw lacking full control or a hold of 10–19 seconds; two waza-ari equal an ippon.
4. **Q** — What is a shido and a hansoku-make? **A** — A shido is a minor penalty for passivity or illegal grip; a hansoku-make is a serious violation or three shido, causing disqualification.
5. **Q** — Name two throw groups and one ground technique. **A** — Nage-waza (throwing, includes te-waza/hand and ashi-waza/foot throws) and katame-waza (grappling: osaekomi holds, shime-waza chokes, kansetsu-waza locks).

>>> exam
Quick memory anchors
- Ippon ends the bout · 4 min contests · waza-ari × 2 = ippon
- Penalties: shido (minor) → hansoku-make (disqualification)` }
  ]
},

{
  slug: "taekwondo",
  title: "Taekwondo",
  altNames: "TKD, Tae Kwon Do",
  category: "combat",
  emoji: "\u{1F94B}",
  lede: "Taekwondo is a Korean martial art and Olympic combat sport famous for its high, spinning and jumping kicks. Its name means 'the way of the foot and fist'. Modern World Taekwondo (WT) competition is a full-contact points sport using electronic protective gear, making it both a self-defence art and a scientific, score-based combat game.",
  infobox: [
    ["Origin", "Korea \u2014 systematised mid-20th century"],
    ["Governing body", "World Taekwondo (WT); Kukkiwon for grading"],
    ["Format", "Individual \u00B7 full-contact point scoring"],
    ["Duration", "3 \u00D7 2 min rounds (Olympic)"],
    ["Area", "8 m \u00D7 8 m competition area"],
    ["Olympic", "Since 2000"],
    ["Scoring gear", "Electronic hogu (chest protector), head guards, sensors"],
    ["Common injuries", "Foot and ankle injuries, knee sprains, head impacts"]
  ],
  modules: ["m1", "m2", "m4", "m5"],
  court: "taekwondo-mat",
  verified: true,
  competitions: ["Olympic Games", "World Taekwondo Championships", "Asian Games", "India National Championships"],
  keyTerms: ["Hogu", "Kyorugi", "Poomsae", "Dollyo chagi", "Ap chagi", "Gamjeom"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Taekwondo grew from Korean martial traditions after 1945 when several schools unified under the names tae kwon do. The Kukkiwon (1972) standardised forms and grading, and World Taekwondo (founded 1973) unified competition rules. It became an Olympic sport in 2000 and a Commonwealth Games sport in 2022, and it is one of the most widely practised martial arts in the world, including a large base in India.` },
    { id: "arena", title: "The arena & equipment", module: "m4", body: `The competition area is a **10 m \u00D7 10 m** octagonal or square mat with a central **8 m \u00D7 8 m** combat zone. Contestants wear the **dobok** (uniform), a **hogu** chest protector with electronic sensors, head guard, shin guards, forearm guards and a mouthguard. Electronic scoring makes point awarding objective and immediate.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `A bout is **3 rounds of 2 minutes** with a 1-minute rest, or the first to a 20-point or 12-point gap.

**Points**
- Body kick \u2014 **2** points; spinning body kick \u2014 **4**.
- Head kick \u2014 **3** points; spinning head kick \u2014 **5**.
- Punch to the hogu \u2014 **1** point.
- A **k.o.** ends the bout; a technical knockout (RSC) or a **Gamjeom** (penalty, giving the opponent 1 point) can decide it.

**Fouls & warnings** \u2014 attacking below the belt, holding, pushing, turning the back, or leaving the area draw penalties; two gamjeom in a round give a 10-point deduction.` },
    { id: "skills", title: "Core skills & techniques", module: "m3", body: `- **Front kick (ap chagi)** \u2014 the fastest basic kick, driving with the ball of the foot.
- **Roundhouse (dollyo chagi)** \u2014 the main scoring kick; delivered with the instep to the body or head.
- **Back kick (dwi chagi)** and **axe kick** \u2014 long-range and counter kicks.
- **Poomsae** \u2014 set forms (patterns) that preserve the art's discipline and are a separate competition event.
- Footwork \u2014 constant bouncing stance, pivots and blitz steps to close distance.` },
    { id: "anatomy", title: "Anatomy & biomechanics", module: "m2", body: `Taekwondo kicking is a whip-like action using the **hip flexors, gluteals and hamstrings** to accelerate the leg while the **core** rotates the torso. Standing leg balance relies on the ankle stabilisers and glute medius. Reaction time and kick speed are trained through plyometrics. Flexibility, especially of the hip abductors and adductors, determines kick height.` },
    { id: "training", title: "Training & conditioning", module: "m3", body: `- Shadow kicking and pad drills for speed and accuracy.
- Plyometric and sprint interval work for explosive power and repeated-effort endurance.
- Sparring drills with headgear; counter-kicking and blitz-step patterns.
- Stretching sessions (dynamic before, static after) to protect the hips and hamstrings.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A centre referee controls the bout, while corner judges and a video review panel assist. The referee calls "shi-jak" (start), "kal-yeo" (break), "gye-sok" (resume) and "geu-man" (end). Electronic hogu sensors register body kicks; head kicks are scored by corner judges. Penalties (gamjeom) are issued for contact faults and unsporting conduct.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the Taekwondo kicking stance and its name. **A** — The fighting stance (ap seogi / walking) keeps feet shoulder-width apart with one foot slightly forward; the back leg provides power for the front kick (ap chagi).
2. **Q** — How is scoring done in WT competition? **A** — Head kicks score 3 points (roundhouse/axe), body kicks 2 points, and punches to the body 1 point; electronic sensors register body kicks.
3. **Q** — What is a gamjeom? **A** — A penalty point awarded against a fighter for contact faults, grabbing, turning the back, or unsporting conduct; 2 gamjeom mean disqualification.
4. **Q** — What is the match format? **A** — 3 rounds of 2 minutes each with a 1-minute rest between rounds.
5. **Q** — Name the poomsae and its purpose. **A** — A set sequence of movements practiced for form and self-defence; used in training and non-combat competition.

>>> exam
Quick memory anchors
- Head kick 3 · body kick 2 · punch 1 · electronic hogu sensors
- 3 × 2-min rounds · gamjeom = penalty (2 = DQ)` }
  ]
},

{
  slug: "futsal",
  title: "Futsal",
  altNames: "Five-a-side Football (FIFA Futsal)",
  category: "court",
  emoji: "\u26BD",
  lede: "Futsal is FIFA's official small-sided indoor football, played five-a-side on a hard court with a smaller, low-bounce ball. Born in Uruguay in 1930, it was designed as a street game and is now the recognised training ground for technical football skill because the tight court forces quick feet, sharp passing and fast decision-making.",
  infobox: [
    ["Origin", "1930, Uruguay"],
    ["Governing body", "FIFA (world) / AIFF (India)"],
    ["Format", "Team \u00B7 5 per side (4 + goalkeeper)"],
    ["Duration", "2 \u00D7 20 min running time"],
    ["Ball", "Size 4, low bounce"],
    ["Court", "40 m \u00D7 20 m (min 38 \u00D7 18 m)"],
    ["Olympic", "Not in the Olympic programme"],
    ["Common injuries", "Ankle sprains, knee injuries, shin contusions"]
  ],
  modules: ["m1", "m3", "m4"],
  court: "futsal",
  verified: true,
  competitions: ["FIFA Futsal World Cup", "AFC Futsal Championship", "AIFF Futsal events"],
  keyTerms: ["Kick-in", "Second penalty mark", "Accumulated fouls", "Power play", "Corner kick"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Futsal was created in Montevideo, Uruguay, in 1930 by Juan Carlos Ceriani as a five-a-side game for YMCA indoor courts. FIFA began governing it in 1989 with the first World Cup, and it has since become the fastest-growing indoor football format. India has adopted futsal through the AIFF and urban 5-a-side leagues, using it to develop close control in young players.` },
    { id: "court", title: "The court & markings", module: "m4", body: `The court is **40 m \u00D7 20 m** (minimum 38 m \u00D7 18 m) with a solid or padded hard surface. Goals are **3 m wide \u00D7 2 m high**. A **second penalty mark** lies 10 m from the goal, used for accumulated fouls, and a **6 m penalty mark** for direct penalties. The kick-in line and corner arcs complete the markings.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `- A match is **2 \u00D7 20 minutes** of running time with a break; stoppages pause the clock only for time-outs and injury.
- **5 players** per side (4 outfield + goalkeeper), with rolling substitutions.
- **Kick-in** replaces the throw-in (the ball is placed and kicked), and a direct free kick is given for kick-ins with feet.
- **No offside** exists in futsal.
- **Accumulated fouls** \u2014 from the 6th team foul per period, the opposing team gets a free kick from the second penalty mark (10 m); the 6th accumulated foul is a penalty if it occurs in the penalty area.
- Corners are taken from the corner arc; a goal is scored when the ball fully crosses the line.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- Close control in tight spaces; the low-bounce ball stays at the feet.
- **Sole rolling** \u2014 trapping and moving the ball with the sole of the foot.
- Fast one-touch passing and combination play; the pivot player holds play with their back to goal.
- Shooting with the instep at low angles; the power-play goalkeeper acts as an extra attacker.
- Defending in compact blocks of four to protect the small goal.` },
    { id: "physiology", title: "Physiology of futsal", module: "m1", body: `Futsal demands high-intensity intermittent effort: short sprints, rapid changes of direction and repeated anaerobic bursts across a 40-minute game. Heart-rate data show long spells near VO2max, so both the **ATP-CP system** (for sprints) and **aerobic system** (for recovery) are trained. Small pitch = big technical and perceptual-cognitive load per minute of play.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `A match is run by a central referee and an assistant referee who stands at the goal line, plus a timekeeper and a third official. The referees manage accumulated-foul records and the 5-second limits (on goalie possession, kick-ins and free kicks). World competitions use group stages followed by knockout rounds with seeding.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — What is the team size and match duration in futsal? **A** — Five players per side (one is a goalkeeper) on a hard court, 40 cm \u00D7 20 cm pitch, and matches last 2 \u00D7 20 minutes of running time.
2. **Q** — Why is a low-bounce ball used? **A** — To keep play close to the ground, favouring technique and quick passing, and to reduce bounce for control on hard surfaces.
3. **Q** — What is the accumulated foul rule? **A** — From the sixth foul in a half, the opposing team receives a direct free kick from the second penalty mark without a wall.
4. **Q** — What is a power play? **A** — A tactic where the goalkeeper moves up to play as an extra outfield attacker, used late to chase a goal.
5. **Q** — Name the four main positions. **A** — Goalkeeper, defender, winger and pivot (the front attacker who holds up play with back to goal).

>>> exam
Quick memory anchors
- 5 vs 5 · 2 × 20 min running time · 6th foul = direct free kick from 2nd penalty mark
- Low-bounce ball · power play · pivot` }
  ]
},

{
  slug: "beach-volleyball",
  title: "Beach Volleyball",
  altNames: "Beach Volley",
  category: "court",
  emoji: "\u{1F3D0}",
  lede: "Beach volleyball is volleyball played on sand by teams of two, born in California in the 1920s and an Olympic sport since 1996. The sand court, sun, wind and two-player teams make it a demanding test of all-round skill, fitness and court coverage. India's medal run in the sport has brought it into PHE curricula.",
  infobox: [
    ["Origin", "1920s, Santa Monica, USA"],
    ["Governing body", "FIVB"],
    ["Format", "Team \u00B7 2 players per side"],
    ["Duration", "Best of 3 sets to 21 (deciding set 15)"],
    ["Ball", "Circumference 66\u201368 cm, low pressure"],
    ["Court", "16 m \u00D7 8 m on sand"],
    ["Olympic", "Since 1996"],
    ["Common injuries", "Ankle sprains, shoulder overuse, knee injuries on sand"]
  ],
  modules: ["m1", "m3", "m4"],
  court: "beach-volleyball",
  verified: true,
  competitions: ["Olympic Games", "FIVB Beach Volleyball World Tour", "Asian Beach Games", "India National Beach Volleyball Championship"],
  keyTerms: ["Swings", "Block & dig", "Setting", "Cross-court", "Sand slide", "Joust"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Beach volleyball grew out of six-a-side games on Santa Monica beaches in the 1920s, became a professional two-a-side tour in the 1980s, and joined the Olympics in Atlanta 1996. It is now played on beaches worldwide and in sand arenas in landlocked countries. India entered international beach volleyball in the 2000s and has won Asian Beach Games medals, boosting its school and college presence.` },
    { id: "court", title: "The court & equipment", module: "m4", body: `The court is **16 m \u00D7 8 m**, exactly half an indoor court, with a **0.40 m-deep sand** playing surface. The net is 2.43 m high for men and 2.24 m for women, with antennae marking the 8 m width. The ball is slightly larger in pressure than indoor rules allow \u2014 circumference 66\u201368 cm and a soft feel that suits sand play. Players wear shorts, vests, caps and sunglasses.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `- **2 players** per side with no substitutions; a team is allowed one 30-second time-out per set.
- **Rally scoring** \u2014 a set is won at 21 points (win by 2); the deciding set is played to 15.
- **Best of 3 sets** wins the match; there is no tiebreak cap beyond win-by-2.
- **3 touches** per team; blocking counts as a touch.
- Service and reception rotate; the same player may serve repeatedly (no formal rotation among two players).
- Faults mirror indoor volleyball: net touch, double contact on setting, and out-of-bounds balls.
- Changing ends every 7 points in the first two sets and every 5 in the deciding set accounts for wind and sun.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- **Serve** \u2014 jump-float serves with spin become common at elite level.
- **Pass (dig)** \u2014 forearm passing from deep positions to rescue the court; "swings" describe defensive passes to the centre.
- **Set & attack** \u2014 both players set and spike; cross-court attacks avoid the block.
- **Block & cover** \u2014 the front player blocks, the partner defends the angle behind.
- Footwork on sand \u2014 the slide and shuffle replace the sprint and hop of indoor play.` },
    { id: "physiology", title: "Physiology & training", module: "m3", body: `Sand adds 10\u201320% energy cost to every jump and run, so lower-limb strength and aerobic capacity are tested heavily. Players train with jump sets, sand sprints and split-squat strength work. Shoulder volume is high from serving and spiking, so rotator-cuff prehabilitation and mobility are essential; hydration and heat acclimatisation matter outdoors.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `One referee calls the match, assisted by linesmen; at the highest level the first referee can ask for a video review. Matches on the World Tour use a ladder of group play then single-elimination. Because there are only two players, self-officiating (friendly matches) is common at grassroots level.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — How is a beach volleyball court measured? **A** — 16 m long \u00D7 8 m wide, with the net at 2.43 m (men) / 2.24 m (women).
2. **Q** — How does scoring work? **A** — Best of three sets; each set is to 21 (win by 2), with the deciding set to 15 (win by 2), and rally-point scoring throughout.
3. **Q** — How many players are on court and are there substitutions? **A** — Two players per team with no substitutions and no positional rotation.
4. **Q** — What is a "swing" in defensive play? **A** — A defensive pass directed to the centre of the court, used to rescue balls from deep positions.
5. **Q** — Why is play on sand different from indoor? **A** — Sand adds 10\u201320% energy cost to jumping and running, so movement uses slides and shuffles instead of sprints and hops.

>>> exam
Quick memory anchors
- 16 m × 8 m · net 2.43 m (M) / 2.24 m (W)
- Sets 21 / 15, win by 2 · no rotation, no subs · 2 players` }
  ]
},

{
  slug: "squash",
  title: "Squash",
  altNames: null,
  category: "racquet",
  emoji: "\u{1F3BE}",
  lede: "Squash is a racket-and-ball game played by two (or four in doubles) in a four-walled court. Players take turns striking a rubber ball against the front wall above the tin. The fast wall play, tiny court and low-ball rallies make it one of the most demanding court sports for agility and anticipation. India's medal-winning stars have made it a featured PHE sport.",
  infobox: [
    ["Origin", "c. 1830, Harrow School, England"],
    ["Governing body", "World Squash Federation (WSF)"],
    ["Format", "Singles (doubles also played)"],
    ["Duration", "Best of 5 games to 11"],
    ["Ball", "Dunlop double-yellow dot (slowest)"],
    ["Court", "9.75 m \u00D7 6.4 m"],
    ["Olympic", "Confirmed for Los Angeles 2028"],
    ["Common injuries", "Ankle sprains, eye injuries, shoulder strain"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "squash",
  verified: true,
  competitions: ["PSA World Tour", "World Team Championships", "Commonwealth Games", "Asian Games", "National Squash Championships (India)"],
  keyTerms: ["Tin", "Let", "Stroke", "Serve", "Crosscourt", "Volley", "Boast"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Squash began at Harrow School around 1830 when pupils discovered that a punctured rackets ball 'squashed' on impact produced longer rallies. The game spread through British clubs and the army, and the World Squash Federation now governs the sport. India became a world force in the 2010s thanks to players such as Saurav Ghosal, pushing squash into national academies and B.P.Ed programmes.` },
    { id: "court", title: "The court & equipment", module: "m4", body: `A singles court is **9.75 m long \u00D7 6.40 m wide**, with a front wall 4.57 m high, a back wall 2.13 m high and a **tin** (a metal strip) 43 cm high at the base of the front wall. The ball is the small **double-yellow dot** rubber ball that must be warmed to bounce properly. Rackets are long and light; eye protection is mandatory for juniors.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `- Scoring is **point-a-rally to 11** (PAR): a game is won at 11 (win by 2), and matches are best of 5 games (pro) or 3 (amateur).
- The serve must land above the serve line and in the correct service box.
- Players alternate hitting the ball before it bounces twice; the ball must hit the front wall above the tin.
- **Lets** \u2014 when interference stops a fair shot, the rally is replayed; **strokes** are awarded when the opponent prevents a winning shot.
- A ball hitting the tin is an out; a double bounce, out-of-court ball or racket strike is a fault.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- **Drive** \u2014 the length shot that keeps the ball deep; the foundation of squash.
- **Boast** \u2014 a side-wall shot that changes pace and angle.
- **Drop shot** \u2014 a soft shot dying in the front corner after a long rally.
- **Volley** \u2014 hitting before the bounce to take time from the opponent.
- Movement \u2014 split-step, lunge and recover; the T-zone is the position of control.` },
    { id: "anatomy", title: "Anatomy & biomechanics", module: "m2", body: `The game is played in lunges: the **quadriceps, gluteals and calf complex** absorb and produce the explosive first steps, while the **rotator cuff and forearm** generate racket-head speed. The low rally ball demands an extremely low centre of gravity, so hip mobility and ankle stability are critical. Frequent direction change makes the ankle the most commonly injured joint.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `A match referee and a marker (who calls the score and lets) control play. Players may request a let; the referee decides let or stroke with the standard hand signals. Tournaments use knockout draws with seeding; the PSA World Tour is the professional circuit. A squash ranking list is maintained by the national federation for Indian tournaments.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe a squash court. **A** — An enclosed four-walled court, 9.75 m long and 6.4 m wide, with the out line 4.57 m high on the front wall.
2. **Q** — What is PAR scoring? **A** — Point-a-rally to 11 (win by 2), matches best of 5 games (pro) or 3 (amateur).
3. **Q** — What is a "let"? **A** — A replay of a rally, granted when a player's shot is obstructed and they could reasonably have reached the ball.
4. **Q** — What is a "stroke"? **A** — A point awarded to the player whose path was blocked when the interference was avoidable or the opponent did not clear properly.
5. **Q** — What is the T-zone and why is it important? **A** — The central position near the T on the court floor, giving the best access to all corners and control of the rally.

>>> exam
Quick memory anchors
- 9.75 m × 6.4 m · front-wall line 4.57 m · PAR to 11, win by 2
- Let (replay) vs stroke (point) · T-zone control` }
  ]
},

{
  slug: "gymnastics-rhythmic",
  title: "Rhythmic Gymnastics",
  altNames: "RG, Rhythmic Gymnastics",
  category: "gymnastics",
  emoji: "\u{1F938}",
  lede: "Rhythmic gymnastics is an Olympic discipline for women in which gymnasts perform choreographed routines with handheld apparatus: rope, hoop, ball, clubs and ribbon. It combines dance, flexibility, balance and apparatus mastery, and it is judged on difficulty and execution. In B.P.Ed, it teaches artistic expression, proprioception and apparatus handling.",
  infobox: [
    ["Origin", "Late 19th century, Europe; codified in the 20th century"],
    ["Governing body", "FIG (International Gymnastics Federation)"],
    ["Format", "Individual and group (5 + apparatus)"],
    ["Duration", "Routines 75\u201390 seconds"],
    ["Apparatus", "Rope, hoop, ball, clubs, ribbon"],
    ["Floor", "13 m \u00D7 13 m carpet"],
    ["Olympic", "Since 1984 (individual), 1996 (group)"],
    ["Common injuries", "Ankle sprains, back stress, shoulder overuse"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "rhythmic-floor",
  verified: true,
  competitions: ["Olympic Games", "World Rhythmic Gymnastics Championships", "Asian Championships", "National Championships (India)"],
  keyTerms: ["Ribbon", "Hoop", "Clubs", "Difficulty", "Execution", "Apparatus handling"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Rhythmic gymnastics evolved from 19th-century European movement schools (such as those of Émile Jaques-Dalcroze and Rudolf Bode) that used music and apparatus for expression. The FIG standardised the discipline after World War II, and it entered the Olympics in 1984. In India it is growing through the Gymnastics Federation of India and school sports, with a strong base in universities.` },
    { id: "area", title: "The competition area", module: "m4", body: `Routines take place on a **13 m \u00D7 13 m carpet** with 1 m safety margins. Individual gymnasts perform one routine per apparatus; group exercises use 5 gymnasts with the same or mixed apparatus. The judge's panels sit at the front; music, lighting and timekeeping are managed by the competition officials.` },
    { id: "apparatus", title: "The apparatus", module: "m4", body: `- **Rope** \u2014 hemp or synthetic; performed with jumps, leaps and skips over the rope.
- **Hoop** \u00D7 80\u201390 cm diameter \u2014 rolled, spun and thrown, passed through the body.
- **Ball** \u00D7 18\u201320 cm diameter \u2014 bounced and rolled on the body, never gripped.
- **Clubs** \u00D7 two clubs 40\u201350 cm \u2014 thrown and spun in symmetric patterns.
- **Ribbon** \u00D7 6 m long stick-plus-ribbon \u2014 must describe continuous snakes and spirals without knotting.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `Scores combine a **D-score** (difficulty of body and apparatus elements) and an **E-score** (execution, artistry and apparatus mastery). Deductions are taken for drops, knots, stepping out of the area, and technical faults. Routines last 75\u201390 seconds. Group exercises additionally score collaboration and synchronisation.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- Body elements \u2014 jumps and leaps, balances, pivots and flexibility waves.
- Apparatus mastery \u2014 throws and catches, rolls, spins and swings, with the apparatus in constant motion.
- Dance and expression \u2014 interpreting the music with fluid transitions.
- Coordination \u2014 the apparatus must reflect the body's line, never merely be carried.` },
    { id: "training", title: "Training & conditioning", module: "m3", body: `- Flexibility work \u2014 long static and PNF stretching for splits, back-bends and leg height.
- Ballet and dance classes to build turnout, line and musicality.
- Repetition of throws and catches to build apparatus feel and error-free routines.
- Plyometric jumps and core control for landing precision and balance; strength work keeps the young spine and ankles robust.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — What apparatus is used in rhythmic gymnastics? **A** — Ribbon, hoop, ball, clubs and rope (individuals choose four; groups use mixed apparatus).
2. **Q** — What is the D-score and E-score? **A** — D-score rewards difficulty of body and apparatus elements; E-score judges execution, artistry and apparatus mastery, with deductions for drops and faults.
3. **Q** — What is the performance area size? **A** — A 13 m \u00D7 13 m carpet with 1 m safety margins, and routines last 75\u201390 seconds.
4. **Q** — When did rhythmic gymnastics enter the Olympics? **A** — In 1984 for individuals, with the group event added in 1996.
5. **Q** — Why are throws and catches central to the sport? **A** — They demonstrate apparatus mastery and risk; the apparatus must stay in constant motion and reflect the body's line.

>>> exam
Quick memory anchors
- 5 apparatus: rope, hoop, ball, clubs, ribbon · 13 m × 13 m carpet
- D-score + E-score · 75–90 s routines · Olympic since 1984` }
  ]
},

{
  slug: "trampoline",
  title: "Trampoline",
  altNames: "Trampoline Gymnastics",
  category: "gymnastics",
  emoji: "\u{1F938}",
  lede: "Trampoline is an Olympic gymnastics discipline in which athletes perform somersaults and twists high above a sprung canvas bed, using the rebound for lift. It combines acrobatic skill with extraordinary spatial awareness, and it is the most spectacularly vertical of the gymnastics sports. In PE teaching it develops balance, coordination and safe falling.",
  infobox: [
    ["Origin", "1930s, USA \u2014 George Nissen"],
    ["Governing body", "FIG (Trampoline, tumbling, double mini)"],
    ["Format", "Individual and synchronized"],
    ["Duration", "Routines of 10 skills"],
    ["Bed", "4.28 m \u00D7 2.14 m competition bed"],
    ["Olympic", "Since 2000"],
    ["Judging", "Difficulty + execution + flight time"],
    ["Common injuries", "Ankle injuries, neck strains (rare), knee stress"]
  ],
  modules: ["m2", "m3", "m4"],
  court: "trampoline",
  verified: true,
  competitions: ["Olympic Games", "World Trampoline Championships", "Asian Championships", "National Trampoline Championships (India)"],
  keyTerms: ["Bed", "Skill", "Flight time", "Spotter", "Pike", "Tuck", "Straight"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `George Nissen built the first modern trampoline in 1935 and trademarked the name in the 1940s. The sport grew as a training aid for divers and gymnasts and became a competitive FIG discipline. Trampoline entered the Olympics in Sydney 2000. In India, trampoline is developing under the Gymnastics Federation of India, especially in training academies and school programmes.` },
    { id: "equipment", title: "The trampoline & safety", module: "m4", body: `The competition **bed** is 4.28 m \u00D7 2.14 m, laced to springs on a frame raised about 1.15 m above the ground, surrounded by thick landing mats. The frame pad protects the edges. Spotters and safety lines are used in training. Tumbling (on a sprung floor) and double-mini trampoline are sibling FIG events.` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `A routine consists of **10 skills** performed consecutively with a minimum of 2 metres of height per skill. The final score combines a **D-score** (difficulty), an **E-score** (execution and form, deductions for bent knees, flexed feet, loss of height and horizontal travel) and a **flight-time score** (time in the air). Synchronized pairs are judged on mirrored timing.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- **Seat drop**, knee drop and front drop \u2014 the basic shapes.
- **Tuck, pike and straight jumps** \u2014 the three body positions.
- **Somersaults** \u2014 back and front somersaults with twists (full, rudy, randolph).
- **Twists** \u2014 half, full and double twists combined with somersaults.
- Landing and rebounding \u2014 absorbing the rebound with the whole foot and extending through the toes.` },
    { id: "physiology", title: "Physiology & training", module: "m2", body: `The trampoline trains **spatial awareness and kinaesthetic sense** like few other sports: the gymnast must know their body's orientation in flight and correct it mid-air. Leg strength and elastic rebound power drive height; the core keeps the body rigid through rotations. Training builds 'air sense' through progressive skill progressions with spotters.` },
    { id: "safety", title: "Safety & spotter roles", module: "m6", body: `Safety is paramount: one gymnast at a time, spotters at the corners, and progressions that master the bed before any flip is attempted. A mat-covered frame and a clear space above the bed (the hall height must allow headroom) are essential. Neck and spine care comes from never attempting unfamiliar skills unsupervised.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — What are the competition bed dimensions? **A** — 4.28 m \u00D7 2.14 m, laced to springs on a frame about 1.15 m above the ground.
2. **Q** — What is the composition of a routine? **A** — 10 skills performed consecutively, each reaching a minimum of 2 metres of height.
3. **Q** — How is the score calculated? **A** — A D-score (difficulty) plus an E-score (execution, deductions for bent knees, flexed feet, height loss and travel) plus a flight-time score.
4. **Q** — Who invented the trampoline? **A** — George Nissen, in the 1930s in the USA; it became an Olympic sport in 2000.
5. **Q** — What are the sibling FIG events? **A** — Tumbling (on a sprung floor), double-mini trampoline and synchronized trampoline judged on mirrored timing.

>>> exam
Quick memory anchors
- Bed 4.28 m × 2.14 m · 10 skills · 2 m height minimum
- D + E + flight-time score · Nissen 1930s · Olympic 2000` }
  ]
},

{
  slug: "water-polo",
  title: "Water Polo",
  altNames: null,
  category: "aquatics",
  emoji: "\u{1F93D}",
  lede: "Water polo is a fast, contact team sport played in a pool by seven players per side, who swim, tread water and throw a ball into a 3-metre-wide goal. It is called the toughest sport in the water because it combines swimming endurance with grappling strength and precise shooting. In PHE it teaches aquatic fitness, teamwork and defensive positioning.",
  infobox: [
    ["Origin", "Late 19th century, England and Scotland"],
    ["Governing body", "World Aquatics (FINA)"],
    ["Format", "Team \u00B7 7 per side in the water"],
    ["Duration", "4 \u00D7 8 min (men) \u00B7 4 \u00D7 7 min (women)"],
    ["Ball", "Size 5, yellow, circumference 68\u201371 cm"],
    ["Pool", "30 m \u00D7 20 m, depth 1.8 m minimum"],
    ["Olympic", "Since 1900 (men), 2000 (women)"],
    ["Common injuries", "Shoulder injuries, head cuts, ear problems"]
  ],
  modules: ["m1", "m2", "m4"],
  court: "water-polo",
  verified: true,
  competitions: ["Olympic Games", "World Aquatics Championships", "Asian Games", "India National Championships"],
  keyTerms: ["Eggbeater", "Driver", "Hole set", "Man-up", "Shot clock", "Exclusion"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Water polo began in Britain and Scotland in the 1870s as a water-ball game and was an Olympic sport by 1900. It grew through Europe into a professional league culture, and women's water polo joined the Olympics in 2000. India's aquatic programme includes water polo at the state and national levels, and the sport is a favourite in college swimming clubs.` },
    { id: "pool", title: "The pool & equipment", module: "m4", body: `The field of play is **30 m \u00D7 20 m** (25 m \u00D7 20 m for women) with a minimum depth of 1.8 m. Goals are **3 m wide \u00D7 0.9 m high** with nets. The ball is Size 5, yellow, and must float. Lines at 2 m, 5 m and halfway mark the exclusion, penalty and neutral zones. Players wear numbered caps (white, blue and red for goalkeepers).` },
    { id: "rules", title: "Core rules & scoring", module: "m4", body: `- **7 players** (6 field + goalkeeper) per team in the water; matches last **4 periods** of 8 minutes (men) / 7 (women) with a 2-minute break.
- Players may only handle the ball with one hand (except the goalkeeper).
- A goal is scored when the ball fully crosses the line; the **shot clock** is 30 seconds.
- **Fouls** \u2014 ordinary fouls (impeding, holding) give a free throw; **major fouls** (violent play) mean a 20-second exclusion (man-down). Three exclusions send the player out.
- **5 m penalty throw** \u2014 for a major foul inside the 5 m line.
- The **eggbeater kick** \u2014 a scissoring leg action \u2014 keeps players high in the water to pass, shoot and defend.` },
    { id: "skills", title: "Core skills", module: "m3", body: `- **Eggbeater** \u2014 the essential vertical treading technique for all players.
- **Passing** \u2014 quick wrist passes on the move; **shooting** \u2014 the high, over-the-shoulder release into the goal corners.
- **Driving** \u2014 sprinting to open space; **hole set** \u2014 playing with your back to goal near the 2 m line.
- **Man-up (power play)** \u2014 attacking with a numerical advantage after an exclusion.
- Goalkeeping \u2014 blocking with a high stance and the feet still treading.` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Water polo is a hybrid of swimming and strength: players swim hundreds of metres per game and repeatedly sprint, so aerobic endurance is foundational. The **eggbeater** recruits the hip flexors and adductors almost continuously. Upper-body pulling strength drives the ball, and the triceps and shoulder stabilisers absorb the shooting load. Shoulder prehabilitation and swimming volume protect against overuse.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A referee follows the ball closely and calls ordinary and major fouls; two goal judges watch ball entry. The referee's whistle signals exclusion (20 seconds), the penalty throw and the restart after goals. Officials use red and blue flags to show substitutions, and the shot-clock operator manages the 30-second possession.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the water polo pool. **A** — 30 m \u00D7 20 m (25 m \u00D7 20 m for women) with a minimum depth of 1.8 m and goals 3 m wide \u00D7 0.9 m high.
2. **Q** — How many players are on each team? **A** — 7 players in the water (6 field players plus a goalkeeper), with matches of 4 periods of 8 minutes (men) / 7 minutes (women).
3. **Q** — What is the "eggbeater"? **A** — A kicking technique that keeps the player's head above water and provides vertical lift for passing, shooting and blocking.
4. **Q** — What is a major foul and its penalty? **A** — A major foul (e.g. holding, sinking, impeding) earns an exclusion of 20 seconds or until a goal is scored — a "man-up" for the attacking team.
5. **Q** — What is the shot clock? **A** — A 30-second possession limit for the attacking team before they must shoot; failure to shoot loses possession.

>>> exam
Quick memory anchors
- 30 m × 20 m pool · 7 players · 4 × 8-min periods
- Exclusion 20 s (man-up) · 30-s shot clock · eggbeater kick` }
  ]
},

{
  slug: "cycling",
  title: "Cycling",
  altNames: "Road, Track, BMX, MTB",
  category: "adventure",
  emoji: "\u{1F6B4}",
  lede: "Cycling is the umbrella sport of racing bicycles across road, track, mountain, BMX and para disciplines, governed by the UCI. It is one of the most endurance-heavy sports, combining aerobic power with technical cornering and drafting tactics. In B.P.Ed it is used to teach endurance training, periodisation and outdoor event safety.",
  infobox: [
    ["Origin", "France / England, 19th century"],
    ["Governing body", "Union Cycliste Internationale (UCI)"],
    ["Format", "Individual and team events"],
    ["Duration", "Sprints to multi-week stage races"],
    ["Bike", "Road, track, mountain, BMX, tandem"],
    ["Olympic", "Since 1896 (road), track 1900s; BMX since 2008"],
    ["Events", "Road race, time trial, track sprints, pursuit, BMX, MTB cross-country"],
    ["Common injuries", "Knee overuse, road rash, clavicle fractures"]
  ],
  modules: ["m1", "m3", "m6"],
  court: "velodrome",
  verified: true,
  competitions: ["Tour de France", "Olympic Games", "UCI Track World Championships", "Commonwealth Games", "Tour of India"],
  keyTerms: ["Drafting", "Peloton", "Pursuit", "Keirin", "Cadence", "Time trial"],
  sections: [
    { id: "history", title: "History & development", module: null, body: `Cycling's modern roots lie in 19th-century France and England, with the first road races (such as Paris\u2013Rouen) in 1869 and the Tour de France in 1903. Track racing and later BMX and mountain biking joined the fold, and the UCI codified all disciplines. Cycling is a fast-growing sport in India, with the Track and Road National Championships and a developing academy system.` },
    { id: "disciplines", title: "The disciplines", module: "m4", body: `- **Road racing** \u2014 mass-start races and individual time trials; the peloton drafts to save energy.
- **Track cycling** \u2014 held on a banked velodrome (often 250 m); events include the sprint, keirin, team pursuit and omnium.
- **Mountain bike** \u2014 cross-country and downhill on rough terrain.
- **BMX** \u2014 short, explosive races on a dirt track with jumps and berms.
- **Para-cycling** \u2014 hand cycles, tricycles and tandem events for athletes with impairments.` },
    { id: "rules", title: "Core rules & tactics", module: "m4", body: `- **Drafting** \u2014 riding close behind another rider reduces wind resistance by up to 30%, saving significant energy.
- The **peloton** \u2014 the main pack that shares the work; breakaways and sprints decide road races.
- **Pursuit** \u2014 two riders or teams start on opposite sides of the track and chase each other over 4 km.
- **Keirin** \u2014 riders sprint behind a motorised pacer that pulls off near the end.
- Time trials forbid drafting \u2014 riders go alone against the clock.
- Rules cover passing, blocking, falls and track etiquette; helmets are compulsory everywhere.` },
    { id: "equipment", title: "The bicycle & gear", module: "m4", body: `- **Road bike** \u2014 light frame, drop bars, thin tyres; **track bike** \u2014 fixed gear, no brakes, high-pressure tyres.
- **MTB** \u2014 suspension forks and knobbly tyres; **BMX** \u2014 small, strong frames with knobbly wheels.
- **Safety gear** \u2014 helmet (mandatory), gloves, cycling shoes with cleats, and high-visibility clothing on roads.
- Maintenance \u2014 tyre pressure, chain lubrication and brake checks before every ride.` },
    { id: "physiology", title: "Physiology of cycling", module: "m1", body: `Cycling is a predominantly **aerobic** sport: stage racers hold near-threshold efforts for hours, relying on the aerobic energy system and fat oxidation. Sprinters and keirin riders develop huge **anaerobic** power for short bursts. Cadence (pedal rate) of 80\u2013100 rpm optimises efficiency. Knee overuse from poor bike fit is the classic injury, so saddle height and cleat position are fitted carefully.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- Periodised base\u2192build\u2192peak\u2192race training; long rides build the aerobic base, intervals sharpen VO2max.
- Strength work on the quadriceps, gluteals and core protects the knees and improves pedalling power.
- Recovery rides and active rest are part of the plan; overtraining shows in falling power and restless sleep.
- **Road safety** \u2014 ride single file, signal turns, wear bright kit and follow traffic rules; hydration and nutrition are managed on long rides.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Name the main cycling disciplines. **A** — Road, track, mountain bike (MTB), BMX and cyclocross; road and track are the classic Olympic disciplines.
2. **Q** — What is drafting? **A** — Riding close behind another rider reduces wind resistance by up to 30%, saving significant energy.
3. **Q** — Describe a track bike. **A** — Fixed gear with no freewheel and no brakes; riders slow by pedalling resistance, relying on the velodrome's banking.
4. **Q** — What is a peloton? **A** — The main group of riders in a road race who shelter each other by drafting to reduce overall energy cost.
5. **Q** — Which energy systems dominate cycling? **A** — Aerobic for stage racing (hours near threshold, fat oxidation); anaerobic power for sprinters and keirin bursts; cadence of 80\u2013100 rpm is efficient.

>>> exam
Quick memory anchors
- Disciplines: road, track, MTB, BMX, cyclocross
- Drafting saves ~30% · fixed-gear track bike, no brakes · peloton` }
  ]
},
/* ======================================================================== */
{
  slug: "rugby-union",
  title: "Rugby Union",
  altNames: "Rugby XV, Rugby",
  category: "field",
  emoji: "\u{1F3C9}",
  lede: "Rugby union is a full-contact, fifteen-a-side field sport in which two teams carry, pass and kick an oval ball to ground it for a try. It is a demanding invasion game in the PHE syllabus because it develops handling, evasion, tackling, teamwork and disciplined officiating.",
  infobox: [
    ["Origin", "1823, England \u2014 Rugby School (legend: William Webb Ellis)"],
    ["Governing body", "World Rugby"],
    ["Format", "Team \u00B7 15 players per side (8 forwards, 7 backs)"],
    ["Duration", "2 \u00D7 40 min with a 10-minute interval"],
    ["Ball", "Oval \u2014 circumference 58\u201361 cm long axis; mass 410\u2013460 g"],
    ["Pitch", "Up to 100 m \u00D7 70 m + in-goal areas 10\u201322 m deep"],
    ["Olympic", "Rugby Sevens only (since 2016)"],
    ["Common injuries", "ACL, shoulder dislocation, concussion, cauliflower ear"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "rugby-union",
  verified: true,
  competitions: ["Rugby World Cup", "Six Nations", "Rugby Championship", "World Rugby Sevens Series", "Asian Rugby Championship (India)"],
  keyTerms: ["Try", "Conversion", "Scrum", "Line-out", "Ruck", "Maul", "Tackle", "Offside"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The ball & pitch fixtures**
- **Ball** \u2014 oval-shaped to allow bouncing unpredictably; leather or synthetic, inflated to 65.7\u201368.8 kPa.
- **Posts** \u2014 H-shaped goal posts 5.6 m apart with a crossbar 3 m high; used for conversions and penalties.
- **Attire** \u2014 jersey, shorts, socks, studded boots; gum shield (mouthguard) is strongly recommended at all levels.

**Protective gear**
- Scrum caps, shoulder pads and shin guards are optional and must comply with World Rugby regulations.
- No jewellery or hard objects; referees check kit before kick-off.` },
    { id: "history", title: "History & development", module: null, body: `Rugby grew out of the football played at Rugby School in Warwickshire, where the legend of William Webb Ellis picking up the ball in 1823 inspired the carrying game. The Rugby Football Union was founded in **1871**, and the split with association football created the two codes. The first international was England v Scotland in 1871. The Rugby World Cup began in **1987**. Rugby sevens became an Olympic sport in 2016.

In India, rugby has grown through the Rugby India federation and the Asian Rugby Championships, with schools and armed-forces teams prominent.` },
    { id: "pitch", title: "The pitch & markings", module: "m4", body: `The field of play is up to **100 m long and 70 m wide**, with **in-goal areas** (the "try zones") of 10\u201322 m at each end. Key lines:

- **Halfway line** \u2014 and the 22 m lines, both full lines across the pitch.
- **Dead-ball line** \u2014 behind each in-goal area.
- **Goal line** \u2014 the front of the in-goal area; grounding the ball here scores a try.
- **10 m line** \u2014 from the halfway line; kick-offs must travel past it.
- **5 m and 15 m lines** \u2014 guide line-out positioning from the touchline.
- **Solid and broken lines** \u2014 5 m and 15 m dashed markings near the touchlines for line-outs.` },
    { id: "rules", title: "Laws & scoring", module: "m4", body: `The laws of the game (Law Book maintained by World Rugby) reward continuity. Core exam-relevant points:

- **Scoring** \u2014 a **try** = 5 points (grounding the ball in the in-goal area); a **conversion** = 2 (kick through the posts after a try); a **penalty** = 3; a **drop goal** = 3.
- **Passing** \u2014 the ball may only be passed **backwards** or sideways; forward passes are penalised.
- **Tackle** \u2014 a tackle must be below the shoulders, and the ball carrier must release the ball on the ground; the tackler must release and roll away.
- **Ruck** \u2014 formed when the ball is on the ground with players contesting over it; players must stay onside behind the hindmost foot.
- **Maul** \u2014 a standing contest; the ball carrier must not go to ground.
- **Scrum** \u2014 restarts play after a forward pass or knock-on; 8 forwards bind together against the opposing pack.
- **Line-out** \u2014 restarts when the ball goes out of bounds; jumpers lift their own team-mate to win the ball.
- **Offside** \u2014 at rucks, mauls, scrums and line-outs players must remain behind the offside line or they may be penalised.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Handling**
- **Passing** \u2014 the spiral pass uses a wrist snap and a spiral seam to travel far and accurately; the "pop pass" is a short lift over the defender.
- **Catching** \u2014 the ball is caught on the fingertips and drawn to the chest ("soft hands").

**Evasion & contact**
- **Side-step** \u2014 a sharp change of direction off a planted foot to beat a defender.
- **Tackle** \u2014 the classic front-on tackle: head behind the ball carrier, cheek to cheek, wrap the arms and drive the legs.
- **Fend (hand-off)** \u2014 a legal push with the open palm to create separation.

**Kicking**
- **Garryowen / up-and-under** \u2014 a high kick contestable in the air.
- **Grubber** \u2014 a low bouncing kick that travels through the defensive line.
- **Drop kick** \u2014 the ball is dropped and kicked just as it bounces; used for restarts and drop goals.

>>> exam
Biomechanics of the tackle
The tackling technique is a controlled collision: low centre of gravity (bent hips and knees), shoulder contact on the thigh or hip, head placed behind the ball carrier's hip ("cheek to cheek"), arms wrapped and legs driving. Safe tackling protects both the neck and the tackled player.
` },
    { id: "physiology", title: "Physiology & demands", module: "m1", body: `Rugby is a **high-intensity intermittent** sport. Forwards cover 5\u20137 km with heavy contact and repeated scrummaging; backs cover 6\u20138 km with more sprinting and higher top speeds.

- **Energy systems** \u2014 ATP-CP for sprints and collisions, lactic system for repeated efforts, and an aerobic base for 80 minutes of play.
- **Strength** \u2014 maximal strength and power in the lower body drive scrummaging and tackles; strong neck and shoulder musculature reduce concussion risk.
- **Body composition** \u2014 forwards carry more mass for the scrum, backs are lighter and faster.
- **Common injuries** \u2014 shoulder dislocation (tackling), ACL (cutting), concussion (head contact) and "cauliflower ear" from repeated friction in scrums and rucks.` },
    { id: "training", title: "Training methods", module: "m3", body: `- **Pre-season** \u2014 build aerobic base, strength and collision readiness over 8\u201312 weeks; contrast (heavy + plyometric) sessions develop power.
- **In-season** \u2014 maintain match fitness with game-realistic drills: live contact pads, contact suits, tackling bags and small-sided touch.
- **Position-specific work** \u2014 props and hookers do neck and shoulder strength; backs do speed and change-of-direction drills.
- **Recovery** \u2014 cold-water immersion and sleep after heavy contact weeks; progressive loading of tackle volume to protect shoulders.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `A match is controlled by **one referee** with **two touch judges** (and TMO at the highest level). The referee signals try (arm raised with a point down at the goal), penalty (arm pointing to the offending side), free kick (arm raised), scrum and line-out with the standard signals. A **red card** (dismissal) or **yellow card** (10-minute sin-bin) is shown for foul play, repeated infringements and dangerous tackles. Tournaments use group stages then knockout rounds; sevens (7 players, 7-minute halves) is the shorter Olympic format.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Give the scoring values in rugby union. **A** — Try 5, conversion 2, penalty 3, drop goal 3.
2. **Q** — What is a scrum and when is it awarded? **A** — A set piece where 8 forwards bind and push for the ball, awarded after a forward pass or knock-on.
3. **Q** — What is the offside rule at a ruck? **A** — Players must stay behind the hindmost foot of the last player in the ruck until it ends, or they are offside.
4. **Q** — Why must a tackle be below the shoulders? **A** — To protect the neck and head and reduce concussion risk; high tackles are foul play.
5. **Q** — Name the two main codes and how they differ. **A** — Rugby union (15 players, rucks/mauls/line-outs) and rugby league (13 players, six-tackle possession); rugby sevens is the Olympic variant with 7 players and 7-minute halves.

>>> exam
Quick memory anchors
- Try 5 · conversion 2 · penalty 3 · drop goal 3
- Pass only backwards · tackle below shoulders · 8 forwards in the scrum` }
  ]
},
/* ======================================================================== */
{
  slug: "baseball",
  title: "Baseball",
  altNames: null,
  category: "field",
  emoji: "\u26BE",
  lede: "Baseball is a bat-and-ball team sport played around a diamond-shaped field, where the batting team scores by running the bases after hitting a pitched ball. It teaches throw-catch mechanics, projectile striking and the tactics of run scoring and outs.",
  infobox: [
    ["Origin", "1839 (legend) / 1845 Knickerbocker rules, USA"],
    ["Governing body", "WBSC (World Baseball Softball Confederation)"],
    ["Format", "Team \u00B7 9 players per side"],
    ["Duration", "9 innings \u2014 no clock"],
    ["Ball", "Circumference 22.9\u201323.5 cm; mass 142\u2013149 g"],
    ["Field", "Diamond with bases 27.43 m (90 ft) apart"],
    ["Olympic", "1992\u20132008; returned 2020/2028"],
    ["Common injuries", "Rotator cuff, elbow UCL, ankle sprains"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "baseball",
  verified: true,
  competitions: ["World Baseball Classic", "WBSC Premier12", "MLB (USA)", "NPB (Japan)", "Asian Baseball Championship (India)"],
  keyTerms: ["Inning", "Out", "Strike", "Ball", "Home run", "Double play", "Steal", "Fair ball"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Bat, ball & glove**
- **Bat** \u2014 a smooth round stick, up to 1.07 m long, wooden (pro) or alloy/composite (school).
- **Ball** \u2014 a cork core wrapped in yarn, covered in two pieces of white leather stitched together.
- **Glove** \u2014 worn on the non-throwing hand; web design varies by position (catcher's mitt, first-base mitt).

**Attire & protection**
- Helmet (batting), catcher's protective gear (mask, chest protector, shin guards), and cleated shoes.
- No jewellery; the batter wears a batting helmet at all times at the plate.` },
    { id: "history", title: "History & development", module: null, body: `Baseball evolved from English bat-and-ball games such as rounders and cricket. The **Knickerbocker Rules** of 1845 codified the modern game, and the first professional league (National League) was founded in 1876. The game spread to Japan and Latin America in the 20th century and became an Olympic sport in 1992. In India, baseball has grown through the Baseball Federation of India with strong state-school programmes and participation in the Asian Baseball Championship.` },
    { id: "field", title: "The field & diamond", module: "m4", body: `The field is divided into the **infield** (the diamond) and the **outfield**. The four bases are 27.43 m apart, and the pitcher's rubber is 18.44 m from home plate.

- **Bases** \u2014 first, second and third base, plus home plate; runners must touch them in order.
- **Fair territory** \u2014 the playing area bounded by the first- and third-base foul lines.
- **Foul lines** \u2014 a batted ball landing beyond them is a foul ball.
- **The pitcher's mound** \u2014 a raised circle in the centre of the diamond.
- **Outfield fences** \u2014 mark the boundary; a ball cleared over the fence in fair territory is a home run.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Innings** \u2014 each team bats once per inning (top and bottom half); a game has 9 innings.
- **Outs** \u2014 three outs end the batting half; outs come from strikeouts, fly balls caught, force-outs at bases and tags.
- **Strike and ball** \u2014 a pitch in the strike zone (over the plate, between the batter's knees and armpits) that is not swung at is a strike; three strikes = strikeout; four balls = a walk (base on balls).
- **Scoring** \u2014 a runner touches home plate after reaching base; a **home run** scores instantly (and any runners on base).
- **Foul ball** \u2014 a batted ball outside the foul lines counts as a strike (except the third strike).
- **Force play** \u2014 a runner must advance when the batter becomes a runner; the fielder can record an out by touching the base with the ball.
- **Stealing** \u2014 a runner may advance to the next base while the ball is being pitched (except in most school rules where leading off is restricted).` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Throwing & catching**
- **Overhand throw** \u2014 a four-seam grip, elbow above shoulder, whip the wrist; the motion transfers energy from the legs through the trunk to the arm.
- **Catching** \u2014 two hands, fingers up (above the chest) or fingers down (below the chest), and "giving" with the ball to absorb force.

**Batting**
- **Grip, stance and swing** \u2014 a balanced stance, the bat cocked, the swing rotated from the hips and torso with the wrists releasing through the ball.
- **Contact point** \u2014 the ideal contact is in front of the plate, with the bat path level through the strike zone.

**Fielding**
- **Ground ball** \u2014 approach low, glove down, the ball fielded with a wide base and brought to the throwing hand.
- **Fly ball** \u2014 track under the ball, call it early ("I've got it"), two hands at chest height.

>>> exam
Biomechanics of the swing
The swing is a rotational sequence from the ground up: feet plant and push, hips rotate first, then the torso, then the arms, finally the wrists "whip" the bat through. Success depends on keeping the head still, eyes on the ball, and rotating the front hip back to let the bat accelerate through the contact point in front of home plate.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Baseball is **explosive but intermittent** \u2014 short bursts of all-out effort (a swing takes about 0.15 s; a sprint to first base 3.5\u20134.5 s) separated by long periods of standing and waiting.

- **Energy systems** \u2014 ATP-CP for swings, throws and sprints; a modest aerobic base for multi-game tournaments.
- **Pitching** \u2014 the most physically demanding position; repeated maximal shoulder-elbow torques risk rotator-cuff and UCL injuries, so pitch counts and rest days are regulated.
- **Strength & power** \u2014 lower-body power and core rotation generate bat speed and throwing velocity.
- **Common injuries** \u2014 shoulder impingement, elbow UCL ("Tommy John"), ankle sprains on the bases.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Skill practice** \u2014 tee work, soft toss and live batting practice; fielding drills build footwork and hand speed.
- **Throwing** \u2014 long-toss programmes gradually build arm strength; pitching follows a structured progression with pitch-count limits.
- **Strength & conditioning** \u2014 rotational core work (medicine-ball throws, rotational chops), grip and forearm work, and sprint intervals for baserunning.
- **Safety** \u2014 helmets at the plate, catchers in full gear, warming up the arm before throwing, and resting pitchers between appearances.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A game is controlled by **four umpires** at the professional level (home-plate umpire plus three base umpires); school games often use one or two. The **home-plate umpire** calls balls and strikes, fair/foul and plays at home; base umpires call force-outs, tags and fly-ball catches. Signals include "out" (clenched fist punch), "safe" (arms swept apart) and "strike" (raised fist). Umpires can eject players or coaches for serious misconduct.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the baseball field. **A** — A diamond with four bases 27.43 m apart, the pitcher's rubber 18.44 m from home plate, an infield and outfield divided by foul lines.
2. **Q** — What is an inning and how many make a game? **A** — Each team bats once per inning; a standard game is 9 innings, with three outs per batting half.
3. **Q** — How is a run scored? **A** — A runner advances around the bases in order and touches home plate; a home run scores the batter and all runners on base.
4. **Q** — What is the difference between a strike and a ball? **A** — A strike is a pitch in the strike zone not swung at (or any swing and miss); three strikes = strikeout, four balls = a walk.
5. **Q** — Name two common baseball injuries and their cause. **A** — Rotator-cuff injury and elbow UCL ("Tommy John") damage from repeated high-speed throwing, especially pitching.

>>> exam
Quick memory anchors
- 9 innings · 3 outs · 3 strikes · 4 balls · 4 bases at 27.43 m
- Try to remember: home run clears the fence in fair territory` }
  ]
},
/* ======================================================================== */
{
  slug: "ice-hockey",
  title: "Ice Hockey",
  altNames: "Hockey on Ice",
  category: "winter",
  emoji: "\u{1F3D2}",
  lede: "Ice hockey is a fast, physical team sport played on a frozen rink, where six players per side use sticks to shoot a rubber puck into the opponent's net. It is an Olympic winter sport famous for its speed, skating skills and tactical flow.",
  infobox: [
    ["Origin", "19th century, Canada"],
    ["Governing body", "IIHF (International Ice Hockey Federation)"],
    ["Format", "Team \u00B7 6 players per side on ice"],
    ["Duration", "3 \u00D7 20 min periods (stopped clock)"],
    ["Puck", "Vulcanised rubber, 7.6 cm diameter, 156\u2013170 g"],
    ["Rink", "60 m \u00D7 30 m (IIHF)"],
    ["Olympic", "Winter \u2014 since 1920/1924"],
    ["Common injuries", "Concussion, shoulder/ACL, lacerations"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "ice-hockey",
  verified: true,
  competitions: ["IIHF World Championship", "NHL (North America)", "Olympic Winter Games", "Asia League Ice Hockey (India)"],
  keyTerms: ["Puck", "Power play", "Penalty box", "Offside", "Icing", "Face-off", "Goaltender"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Stick & puck**
- **Stick** \u2014 a tapered shaft with a flat blade; right or left handed. The blade must not exceed 32 cm.
- **Puck** \u2014 a vulcanised rubber disc, 7.6 cm in diameter and 2.54 cm thick, frozen before play to reduce bouncing.

**Skates & protection**
- **Skates** \u2014 boots with steel blades; the goalie wears larger, flatter blades for lateral slides.
- **Full protective kit** \u2014 helmet with visor or cage, shoulder/elbow pads, gloves, padded shorts (girdle), shin guards and a throat protector; goalies add a chest protector, blocker, catch glove and leg pads.` },
    { id: "history", title: "History & development", module: null, body: `Ice hockey grew from stick-and-ball games played on frozen ponds in 19th-century Canada. The first indoor game with recorded rules was in **1875** in Montreal, and the sport spread through the NHL (founded **1917**) and the IIHF (founded **1908**). It joined the Olympic programme for men in 1920 and women in 1998. In India, ice hockey is developing in the Himalayan states through the Ice Hockey Association of India and the IIHF's development programme, with rinks in Ladakh, Himachal and Uttarakhand.` },
    { id: "rink", title: "The rink & markings", module: "m4", body: `The IIHF rink is **60 m \u00D7 30 m**, rounded at the corners, surrounded by boards with protective glass. Key markings:

- **Centre red line** \u2014 divides the rink in half; face-offs occur at centre ice.
- **Blue lines** \u2014 17.2 m from each end, marking the offensive/defensive zones.
- **Goal lines** \u2014 the crease area in front of each goal; the net sits on the goal line.
- **Face-off circles** \u2014 nine face-off spots; the four end-zone dots and the centre dot restart play.
- **Goal crease** \u2014 the semi-circular area in front of the net where goaltenders are protected.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Players** \u2014 6 per side: three forwards, two defencemen and a goaltender. The game is **3 \u00D7 20 minutes** with stopped clock.
- **Scoring** \u2014 a goal is scored when the entire puck crosses the goal line between the posts and under the crossbar.
- **Icing** \u2014 shooting the puck from behind the centre line across the opponent's goal line without it being touched causes the play to stop (waived if shorthanded or if it enters the goal).
- **Offside** \u2014 an attacking player may not enter the offensive zone ahead of the puck; the puck must cross the blue line first.
- **Penalties** \u2014 minor (2 min, player sits in the penalty box), major (5 min) and match penalties; the offending team plays shorthanded \u2014 a **power play** for the other side.
- **Face-off** \u2014 restarts play after stoppages; the puck is dropped by the referee between two players.
- **Body checking** \u2014 legal in men's play (body to body to separate the puck carrier); prohibited in women's ice hockey and most school hockey.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Skating**
- **Forward stride** \u2014 push out and back with the inside edge of the blade, glide on the opposite edge, alternating.
- **Stopping** \u2014 the hockey stop: both blades rotate sideways, scraping the ice and absorbing momentum.
- **Crossovers** \u2014 crossing one skate over the other to gain speed around corners.

**Stick skills**
- **Stickhandling** \u2014 controlling the puck with small touches of the blade while scanning the ice.
- **Passing** \u2014 a crisp flat pass off the blade; the **saucer pass** lifts the puck over a stick.
- **Shooting** \u2014 the wrist shot (quick, release off the flexed blade), the snap shot and the slapshot (a full backswing that flexes the shaft).

>>> exam
Biomechanics of the stride
The skating stride converts blade-edge pushes into forward glide: the push comes from hip, knee and ankle extension with the blade's inside edge biting the ice, while the recovery leg swings back under the body. A lower centre of gravity (bent knees, lean forward) improves balance and power, exactly like the stance in sprinting.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Ice hockey is a **high-intensity intermittent** sport played in shifts of 40\u201360 seconds. Players reach speeds near 40 km/h and must recover quickly between shifts.

- **Energy systems** \u2014 ATP-CP for explosive starts, sprints and checks; lactic system for repeated hard shifts; an aerobic base sustains the full 60-minute game.
- **Strength & power** \u2014 lower-body power (skating) and upper-body strength (checks, shot power).
- **Fitness testing** \u2014 on-ice sprints, repeated shift simulations and off-ice VO\u2082max tests (elites \u2248 55\u201360 ml/kg/min).
- **Common injuries** \u2014 concussion (hits into boards), shoulder injuries, ACL strains and lacerations from skate blades.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **On-ice skills** \u2014 edge-work, crossover and transition drills; small-area games build quick decision-making.
- **Off-ice conditioning** \u2014 plyometrics, sprint intervals and lower-body strength; core work for balance on the skates.
- **Safety** \u2014 full protective equipment, mouthguards, rink maintenance (smooth ice, padded boards), and neck guards are mandatory at junior levels; spotters and helmets for all practice.
- **Concussion protocol** \u2014 any suspected head injury removes the player from play and requires medical clearance before return.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `An IIHF game is run by **two referees** (or one) plus **two linesmen**. Referees call penalties and goals; linesmen call offsides and icing. Penalty signals include "minor" (hand flat), "major" (hand raised and crossed) and "match" (both hands overhead). The penalty box clock manages the shorthanded duration. Instant replay reviews goal-crease violations and pucks across the line at the highest level.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the rink dimensions and markings. **A** — IIHF rink 60 m \u00D7 30 m with rounded corners, blue lines dividing the zones, a centre red line, goal lines and face-off circles.
2. **Q** — What is icing? **A** — Shooting the puck from behind the centre line past the opponent's goal line untouched; play stops (waived if shorthanded or scored).
3. **Q** — What is offside in hockey? **A** — An attacker entering the offensive zone before the puck crosses the blue line.
4. **Q** — What is a power play? **A** — The advantage gained when the opposition serves a penalty and plays with fewer players (usually 5-on-4).
5. **Q** — Why do players play in short shifts? **A** — The explosive, intermittent demands are so high that 40\u201360-second shifts allow ATP-CP recovery between all-out efforts.

>>> exam
Quick memory anchors
- 3 × 20 min stopped clock · 6 per side · 60 m × 30 m rink
- Icing = over the line untouched · power play = shorthanded opponent` }
  ]
},
/* ======================================================================== */
{
  slug: "golf",
  title: "Golf",
  altNames: null,
  category: "target",
  emoji: "\u26F3",
  lede: "Golf is a precision target sport in which players use clubs to strike a small ball into a series of holes with the fewest possible strokes. It is a lifetime sport in the PHE syllabus valued for its technique, etiquette, concentration and low injury profile.",
  infobox: [
    ["Origin", "15th century, Scotland"],
    ["Governing body", "IGF (International Golf Federation) / R&A"],
    ["Format", "Individual \u00B7 stroke play or match play"],
    ["Holes", "18 holes on a standard course"],
    ["Ball", "42.67 mm diameter; mass \u2264 45.93 g"],
    ["Course", "Typically 5,500\u20137,000 m par 70\u201372"],
    ["Olympic", "Since 2016 (return)"],
    ["Common injuries", "Lower-back, wrist, elbow (golfer's elbow)"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "golf",
  verified: true,
  competitions: ["The Open", "The Masters", "US Open", "PGA Championship", "Asian Tour", "Amateur Events (India)"],
  keyTerms: ["Par", "Birdie", "Bogey", "Stroke play", "Match play", "Drive", "Putting", "Handicap"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Clubs & ball**
- **Driver & woods** \u2014 for long distance off the tee and the fairway.
- **Irons** \u2014 numbered 3\u20139, used for approach shots to the green.
- **Wedges** \u2014 pitching, sand and lob wedges for short high shots out of trouble.
- **Putter** \u2014 used on the green to roll the ball into the hole.
- **Ball** \u2014 dimpled to reduce drag and improve flight; 42.67 mm diameter, max mass 45.93 g.

**Attire & etiquette**
- Collared shirts, tailored shorts/trousers, soft-spiked shoes; gloves help grip in warm weather.
- **Etiquette** \u2014 quiet during swings, raking bunkers, repairing pitch marks, letting faster groups play through.` },
    { id: "history", title: "History & development", module: null, body: `Golf's roots trace to 15th-century Scotland, where the modern game and its rules were codified. The **R&A** and the **USGA** share responsibility for the rules. The sport spread to England, the USA and Asia through the 19th and 20th centuries, and returned to the Olympic programme in 2016. India's golf heritage includes the professional Indian Tour, the Indian Open, and world-class players on the Asian and European tours; golf is growing in schools through junior academies.` },
    { id: "course", title: "The course & layout", module: "m4", body: `A standard course has **18 holes**, each beginning at a **tee** and ending at a **green** with a flagstick and a 10.8 cm cup. A typical hole includes:

- **Fairway** \u2014 the short-mown route from tee to green.
- **Rough** \u2014 longer grass that punishes errant shots.
- **Bunkers** \u2014 sand hazards designed to catch wayward shots.
- **Water hazards** \u2014 ponds, lakes and streams that add risk and require penalty drops.
- **Out of bounds** \u2014 ground outside the course boundary; a lost ball or OB incurs a penalty.

**Par** \u2014 the expected number of strokes for a skilled player; par 3, 4 and 5 holes combine to give a course par of 70\u201372.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Stroke play** \u2014 the winner is the player with the fewest total strokes for the round; the score is expressed relative to par (birdie = 1 under, bogey = 1 over, eagle = 2 under).
- **Match play** \u2014 players compete hole by hole; the winner of each hole earns the hole.
- **Teeing off** \u2014 the tee shot is taken from within the tee markers; the ball may be teed on a peg.
- **Playing the ball as it lies** \u2014 the ball must not be moved or improved except under the rules.
- **Penalties** \u2014 one stroke for most relief situations (water, unplayable, out of bounds); a ball struck from a hazard may carry a penalty.
- **Handicap** \u2014 a number that allows players of different ability to compete fairly; lower handicap = better player.
- **Rules of play** \u2014 the player farthest from the hole plays first on the putting green; honour on the tee goes to the player with the best score on the previous hole.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**The full swing (drive)**
- **Grip** \u2014 overlapping or interlocking; the hands work as one unit.
- **Stance** \u2014 feet shoulder-width, ball positioned just inside the front heel for the driver.
- **Backswing, downswing, follow-through** \u2014 a smooth rotational sequence; the downswing transfers weight from the back foot to the front, releasing the clubhead through the ball.

**Short game**
- **Chip** \u2014 a low running shot to the green.
- **Pitch** \u2014 a high shot that lands softly.
- **Bunker shot** \u2014 the club enters the sand behind the ball, splashing it out.
- **Putting** \u2014 the stroke that rolls the ball into the hole; a pendulum motion of the shoulders keeps the putter on line.

>>> exam
Biomechanics of the drive
The drive is a sequential, rotational kinetic chain: legs drive and rotate, the hips lead, then the trunk, then the arms, with the wrists releasing the clubhead last (the "late hit"). Maximum clubhead speed comes from timing this sequence \u2014 a "whip" effect \u2014 rather than pure arm strength. Posture (tall spine, knee flex) protects the lower back.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Golf is a **low-to-moderate intensity** sport with significant skill and psychological demands. A round covers 6\u201310 km of walking with a club carry, providing moderate aerobic benefit.

- **Energy systems** \u2014 mostly aerobic walking between shots, with brief explosive efforts for the swing.
- **Strength & flexibility** \u2014 rotational core and hip mobility drive clubhead speed; shoulder and wrist flexibility protect the joints.
- **Common injuries** \u2014 lower-back strain (repeated rotational load), golfer's elbow (medial epicondylitis) and wrist tendinopathy; these are typically overuse injuries.
- **Mental game** \u2014 concentration and routine are crucial between long gaps in activity.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Practice** \u2014 range sessions with the driver and irons, short-game practice around the putting green, and course management drills.
- **Strength** \u2014 rotational core work (cable chops, medicine-ball throws), hip mobility, and grip/forearm endurance.
- **Warm-up** \u2014 dynamic swings and stretching before the round reduce back injury risk.
- **Safety & etiquette** \u2014 never swing toward others, shout "fore" for an errant shot, and never walk across a player's putting line.
- **Hydration** \u2014 long rounds in sun require water and energy intake.` },
    { id: "officiating", title: "Officiating & scoring", module: "m4", body: `Golf is largely **self-officiated** under the Rules of Golf; players call penalties on themselves and peers. In professional events, **referees** enforce the rules, measure relief drops and rule on disputes, while **starters** manage the tee and **scorers** record the card. A round is scored on the player's card and verified by a playing partner ("marker"). Tournaments are usually stroke play over 72 holes, cut after 36.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — What is par and how are scores expressed? **A** — Par is the expected number of strokes for a hole or course; birdie = 1 under, bogey = 1 over, eagle = 2 under.
2. **Q** — Name the parts of a golf hole. **A** — Tee, fairway, green with cup and flagstick, plus hazards (rough, bunkers, water, out of bounds).
3. **Q** — What is the difference between stroke play and match play? **A** — Stroke play counts total strokes; match play is won hole by hole.
4. **Q** — What is a handicap? **A** — A number allowing players of different ability to compete fairly; lower handicap = better player.
5. **Q** — Name two common golf injuries. **A** — Lower-back strain and golfer's elbow (medial epicondylitis), both overuse injuries from the rotational swing.

>>> exam
Quick memory anchors
- 18 holes · par 70–72 · birdie/bogey/eagle relative to par
- Clubs: woods, irons, wedges, putter · stroke play vs match play` }
  ]
},
/* ======================================================================== */
{
  slug: "karate",
  title: "Karate",
  altNames: null,
  category: "combat",
  emoji: "\u{1F94A}",
  lede: "Karate is a striking martial art from Okinawa and Japan that combines kata (formal sequences) with kumite (sparring). It is an Olympic combat sport that teaches controlled power, discipline, etiquette and self-defence in the PHE syllabus.",
  infobox: [
    ["Origin", "Okinawa / Japan \u2014 karated\u014D"],
    ["Governing body", "WKF (World Karate Federation)"],
    ["Format", "Kata & kumite \u00B7 individual and team"],
    ["Bout", "3 min kumite (men) / 2 min (women)"],
    ["Dojo", "Mat area 8 m \u00D7 8 m"],
    ["Attire", "Karate gi with belt (obi)"],
    ["Olympic", "Since 2020 (Tokyo)"],
    ["Common injuries", "Hand/wrist, foot, knee, facial contusions"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "karate",
  verified: true,
  competitions: ["Olympic Games", "WKF World Championships", "Asian Karate Championships", "National Karate Championship (India)"],
  keyTerms: ["Kata", "Kumite", "Karate gi", "Kiai", "Sensei", "Belt (obi)", "Makiwara", "Ki"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The karate gi (uniform)**
- **Karate gi** \u2014 a white cotton jacket and trousers tied with a belt (obi); the belt colour signals rank (white, yellow, green, brown, black).
- **Makiwara** \u2014 a padded striking board used for conditioning the knuckles and shins.

**Protective equipment (kumite)**
- **Gloves and shin guards** \u2014 WKF-approved, for competition sparring.
- **Mouthguard and groin guard** \u2014 mandatory in kumite.
- **Body protector** \u2014 worn by the torso at junior and female events.
- **Headgear** \u2014 required in many federations for junior competition.` },
    { id: "history", title: "History & development", module: null, body: `Karate developed in the Ryukyu Kingdom (modern Okinawa) from indigenous fighting arts blended with Chinese martial arts, and was later systematised in Japan in the early 20th century. Masters such as Gichin Funakoshi (Shotokan) popularised the "empty hand" art \u2014 *kara* (empty) *te* (hand). The WKF governs sport karate, which became an Olympic sport at **Tokyo 2020**. In India, karate is taught in schools and academies nationwide and is a regular event in the national school games (SGFI).` },
    { id: "dojo", title: "The dojo & etiquette", module: "m4", body: `Training happens in a **dojo** (the "place of the way"), typically a sprung-floor hall with a 8 m \u00D7 8 m competition mat (WKF) marked with boundary lines.

- **Etiquette** \u2014 bowing to the instructor (sensei) and partners, lining up by rank, and showing respect before and after practice.
- **Command structure** \u2014 the instructor leads with set commands ("yame" \u2014 stop, "mokuso" \u2014 meditate); students respond with "osu" or "hai".
- **Discipline** \u2014 the dojo instils focus, humility and control \u2014 core values of martial-arts education.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `Sport karate has two disciplines:

- **Kata** \u2014 a solo performance of a formal sequence of strikes, blocks and stances. Panels of judges score performance, power, timing and technical correctness; seven judges (flag system) or five (electronic) vote for the winner.
- **Kumite** \u2014 controlled free sparring. A bout is **3 minutes (men) / 2 minutes (women)**. Points:
  - **Ippon (3 points)** \u2014 a perfectly controlled kick to the head.
  - **Waza-ari (2 points)** \u2014 a kick to the body, or a technique scored while the opponent is falling/off-balance.
  - **Yuko (1 point)** \u2014 a controlled punch or kick to the body.
- **Contact rules** \u2014 techniques are controlled, stopping short of injury; excessive contact, hitting below the belt or to the throat/back is penalised.
- **Warnings** \u2014 yellow, then red cards; two red cards = disqualification (hansoku).` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Stances (dachi)**
- **Front stance (zenkutsu-dachi)** \u2014 weight forward, long and low, used for advancing strikes.
- **Back stance (kokutsu-dachi)** \u2014 weight on the rear leg, used for blocking.
- **Horse stance (kiba-dachi)** \u2014 side-on, legs wide, for stability and power.

**Strikes & blocks**
- **Punch (tsuki)** \u2014 a straight, hip-rotated punch; the fist rotates to palm-down at contact.
- **Front kick (mae-geri)** \u2014 a chambered hip-to-extension kick.
- **Roundhouse kick (mawashi-geri)** \u2014 a circular kick using the instep or shin.
- **Blocks (uke)** \u2014 rising block (age-uke), outward block (soto-uke), inward block (uchi-uke), and downward block (gedan-barai).

>>> exam
Biomechanics of the punch
The tsuki generates power through the kinetic chain: the rear hip rotates forward, the shoulder follows, and the arm extends with the fist rotating at the end. Power comes from body rotation and hip drive, not arm strength alone \u2014 and the "kiai" (sharp shout) braces the trunk and times the exhalation.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Karate is an **intermittent high-intensity** activity. A kumite bout alternates explosive bursts with short rests, so the ATP-CP and lactic systems dominate, with an aerobic base for the whole session.

- **Power & speed** \u2014 plyometrics and sprint-type work build explosive kicking and punching.
- **Flexibility** \u2014 dynamic and static stretching of the hip flexors, hamstrings and shoulders is essential for high kicks.
- **Common injuries** \u2014 hand and wrist contusions from punching, foot and ankle sprains from kicks, knee strain, and facial cuts in full-contact variants; proper technique and protective gear reduce them.
- **Conditioning** \u2014 the makiwara and heavy bags build bone and connective-tissue tolerance in the knuckles and shins.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Kihon** \u2014 fundamental technique drills (punches, kicks, blocks) in repetition.
- **Kata practice** \u2014 solo sequences that rehearse technique, timing and breath; kata doubles as shadow boxing for kumite.
- **Kumite progression** \u2014 from pre-arranged (i-pom) sparring to free sparring; controlled contact is emphasised at all levels.
- **Warm-up and cool-down** \u2014 dynamic stretching before, static after; partner stretching for hip flexibility.
- **Safety** \u2014 supervised sparring, mandatory protection, technique-first teaching, and stopping at "yame" to avoid injury.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `Kumite is controlled by a **centre referee** who announces commands and signals, with **corner judges** holding flags (red/blue) to score technique and call faults. The referee uses hand signals for ippon, waza-ari, yuko, penalties and disqualification. Kata is judged by a **panel of judges** (seven in flag system, five electronic). In India, referees are certified by the Karate Association of India (WKF-affiliated), enabling national tournaments to follow international rules.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Name the two disciplines of sport karate. **A** — Kata (formal sequences judged on form) and kumite (controlled sparring scored on technique).
2. **Q** — How are kumite points scored? **A** — Ippon 3 points (head kick), waza-ari 2 (body kick or off-balance technique), yuko 1 (controlled punch/body kick).
3. **Q** — What is a kiai? **A** — A sharp shout that braces the trunk, times the exhalation and focuses power at the moment of impact.
4. **Q** — What does the coloured belt (obi) indicate? **A** — Rank or grade level, progressing from white through to black.
5. **Q** — Where did karate originate? **A** — The Ryukyu Kingdom (modern Okinawa), later systematised in Japan in the early 20th century.

>>> exam
Quick memory anchors
- Kata (forms) · kumite (sparring) · kihon (basics)
- Ippon 3 · waza-ari 2 · yuko 1 · controlled contact` }
  ]
},
/* ======================================================================== */
{
  slug: "korfball",
  title: "Korfball",
  altNames: "Korf",
  category: "court",
  emoji: "\u{1F3C0}",
  lede: "Korfball is a mixed-gender court sport similar to netball, played with a ball and a korf (basket) at each end. It is unique in that men and women play together on equal terms, making it a valuable sport for teaching teamwork, inclusivity and invasion-game tactics.",
  infobox: [
    ["Origin", "1902, Netherlands \u2014 Nico Broekhuysen"],
    ["Governing body", "IKF (International Korfball Federation)"],
    ["Format", "Mixed \u00B7 4 players per zone per side"],
    ["Duration", "2 \u00D7 30 min with a break"],
    ["Korf", "Pole 3.5 m high with an open basket"],
    ["Court", "40 m \u00D7 20 m, split into two zones"],
    ["Olympic", "Demonstration only; World Games sport"],
    ["Common injuries", "Ankle sprains, knee injuries, finger jams"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "korfball",
  verified: true,
  competitions: ["IKF World Championship", "European Championship", "World Games", "Korfball World Cup (India)"],
  keyTerms: ["Korf", "Zone", "Division", "Post", "Attacker", "Defender", "Free throw", "Substitution"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The korf & ball**
- **Korf** \u2014 a pole 3.5 m tall topped with an open basket (korf) facing away from the pole; mounted at the back of each zone.
- **Ball** \u2014 similar to a size-5 football or a netball, light enough for one-handed throws.

**Attire**
- Sports kit with indoor court shoes (non-marking soles); jewellery removed for safety.
- No special protective equipment \u2014 the sport is non-contact, so officials check nails and jewellery as the main safety rules.` },
    { id: "history", title: "History & development", module: null, body: `Korfball was invented in **1902** in the Netherlands by schoolteacher Nico Broekhuysen, who sought a mixed-gender team game. The name comes from the Dutch word "korf" (basket). The IKF was founded in 1933, and the sport is now played in over 70 countries; it is a World Games sport and has featured as an Olympic demonstration sport. In India, korfball is growing through the Korfball Federation of India and is played in schools and colleges as a co-educational team sport.` },
    { id: "court", title: "The court & markings", module: "m4", body: `The court is **40 m \u00D7 20 m**, divided by a **centre line** into two equal zones. Key markings:

- **Centre line** \u2014 splits the court; each team places two players in each zone.
- **The korf post** \u2014 stands at the back of each zone, on the centre line (imaginary extension) 2.5 m inside the baseline.
- **Penalty mark** \u2014 2.5 m directly in front of the korf.
- **Free-pass line** \u2014 2.5 m around the korf post (a circle zone where attackers must keep 2.5 m away when defending).

Each zone has its own korf, and scoring can occur in both zones as players swap zones throughout the match.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Teams** \u2014 4 players per side per zone (2 male, 2 female); 8 on court per team in total.
- **Duration** \u2014 2 \u00D7 30 minutes with a break, teams swap zones at half-time.
- **Scoring** \u2014 a shot scores 1 point when the ball drops through the korf; the attacking team must create an opening (a shot cannot be taken while defended).
- **Defending** \u2014 a defender must stand within arm's reach of the shooter to "defend"; shots while defended are disallowed and a free pass is awarded.
- **Running with the ball** \u2014 not allowed; the ball must be passed, and movement only via passing.
- **One-on-one** \u2014 a defender may only defend the opposite gender; holding or obstructing is a foul.
- **Zone change** \u2014 after every two goals, the teams switch attacking and defending zones, and roles (attackers/defenders) rotate.
- **Free throw & penalty** \u2014 awarded for fouls; a penalty shot is taken from the penalty mark when a shooter is fouled while shooting.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Passing**
- **Chest pass** \u2014 a fast two-handed pass to the chest, the core pass of korfball.
- **Overhead pass** \u2014 used to clear a defender.
- **Bounce pass** \u2014 passed to a teammate through the gap.

**Shooting**
- **Set shot** \u2014 the classic underhand/overhand shot: knees bent, arms extended, ball released with a flick from the fingers.
- **Backing in** \u2014 a low post move to create separation and shoot from close range.
- **Movement** \u2014 cutting and re-positioning to lose the defender and receive the pass in space.

>>> exam
Biomechanics of the shot
The set shot is a vertical jump-and-shoot skill: the legs extend to lift the ball, the arms follow, and the wrist flicks to give backspin. Because the korf is 3.5 m high, the trajectory must be high; the ball is released with the arms almost vertical, and follow-through is straight up through the ball.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Korfball is a **moderate-to-high intensity intermittent** sport: it requires repeated jumping, quick direction changes and short sprints, with a strong aerobic base for the full 60 minutes.

- **Energy systems** \u2014 ATP-CP for jumps and sprints, lactic for repeated efforts, aerobic for match endurance.
- **Strength & power** \u2014 lower-body power for jumping and agility; core for balance and passing.
- **Common injuries** \u2014 ankle sprains (landing and cutting), knee injuries (jump landings) and finger jams from fast passes.
- **Fitness testing** \u2014 agility tests, vertical jump and repeated-shuttle tests are commonly used.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Skill drills** \u2014 passing ladders, shooting stations around the korf, and "backing in" post play.
- **Tactics** \u2014 position play (attackers and defenders rotate), zone switching drills and set moves off the free pass.
- **Conditioning** \u2014 interval running and plyometrics (box jumps, depth jumps) for jumping power.
- **Safety** \u2014 no-contact rules reduce injury, but correct landing (bent knees, soft landings) and ankle-strengthening still matter; nails checked and jewellery removed before play.` },
    { id: "officiating", title: "Officiating", module: "m4", body: `A match is controlled by **two referees** (one per zone) under IKF rules. Referees whistle for fouls, defended shots, running with the ball, offside and scoring; they manage the zone change after every two goals and substitutions. Signals include "free pass" (pointed), "penalty" (pointed at the penalty mark) and "score" (raised arm). The scorer and timekeeper manage the clock and the 2-goal zone rotation.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the korfball court. **A** — 40 m \u00D7 20 m split by a centre line into two zones, each with a 3.5 m-high korf post at the back.
2. **Q** — How does mixed-gender play work? **A** — Each team fields 8 players (4 male, 4 female) with 2 of each in each zone; defenders may only defend the opposite gender.
3. **Q** — What is a defended shot? **A** — A shot taken while a defender stands within arm's reach of the shooter; it is disallowed and a free pass is awarded.
4. **Q** — Why must the ball be passed, not run with? **A** — Movement with the ball is not allowed; the ball advances only by passing, so positioning and teamwork matter more than individual running.
5. **Q** — When do teams switch zones? **A** — After every two goals, teams swap attacking and defending zones, rotating attacker/defender roles.

>>> exam
Quick memory anchors
- 40 × 20 m · two zones · 2M + 2F per zone per side
- Korf 3.5 m · pass don't run · no defended shots · 2-goal zone change` }
  ]
},
/* ======================================================================== */
{
  slug: "dodgeball",
  title: "Dodgeball",
  altNames: null,
  category: "court",
  emoji: "\u{1F3AF}",
  lede: "Dodgeball is a fast court team game in which players hurl balls to eliminate opponents by direct hit, while dodging, ducking and catching to survive. It is a popular school PE sport because it develops throwing accuracy, evasion, agility and quick decision-making.",
  infobox: [
    ["Origin", "England (variants); codified 20th century"],
    ["Governing body", "WDBF (World Dodgeball Federation)"],
    ["Format", "Team \u00B7 6\u20137 players per side"],
    ["Duration", "Set time \u2014 matches of timed sets"],
    ["Ball", "Soft foam dodgeballs \u2014 3 standard sizes"],
    ["Court", "18 m \u00D7 9 m (WDBF)"],
    ["Olympic", "Not an Olympic sport"],
    ["Common injuries", "Finger jams, sprained ankles, head impacts"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "dodgeball",
  verified: true,
  competitions: ["World Dodgeball Championships", "National Dodgeball League (India)"],
  keyTerms: ["Dodge", "Duck", "Dip", "Dive", "Catch", "Elimination", "Headshot", "Catcher"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**Balls**
- **Dodgeballs** \u2014 soft foam balls in three sizes (21 cm, 25.5 cm and 26.5 cm diameters). Foam reduces impact while keeping throwing and catching mechanics real.
- School and competitive play uses a set of six balls split evenly between the two sides.

**Attire & safety**
- Comfortable court kit with non-marking shoes; no jewellery.
- Foam balls mean hard helmets are not needed; officials police headshot rules to protect the face and head.` },
    { id: "history", title: "History & development", module: null, body: `Dodgeball's roots go back to English school playground games and the ball games of ancient cultures. It became a codified court sport in the 20th century, with the **World Dodgeball Federation (WDBF)** standardising rules in the 1990s and holding World Championships since 2012. In India, dodgeball is a hugely popular school sport through the National Dodgeball League and SGFI school games, and the WDBF has helped grow international competition.` },
    { id: "court", title: "The court & layout", module: "m4", body: `The WDBF court is **18 m long and 9 m wide**, divided by a **centre line** into two equal halves. Key zones:

- **Centre line** \u2014 the neutral line; players may not cross into the opponent's half.
- **Back line (dead line)** \u2014 crossing it puts a player out (dead).
- **Attack line** \u2014 3 m from the centre line on each side; a throw must be made from behind it during the opening rush.
- **Dead-ball line** \u2014 balls thrown out of bounds are dead until recovered.

The layout is a simple rectangle; all the action is about throwing lanes, catching and dodging within it.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Teams** \u2014 WDBF uses 6 or 7 players per side; school games often field equal numbers.
- **Objective** \u2014 eliminate the entire opposing team, or hold more players at the end of the set.
- **Elimination** \u2014 a player is out if hit directly by a thrown ball (a "catch" of a thrown ball saves you and eliminates the thrower), or if they cross the boundary.
- **Catch** \u2014 catching a ball thrown at you sends the thrower out and brings a team-mate back in ("revival").
- **Headshots** \u2014 throws to the head are illegal in WDBF rules and the thrower is out; protection is a core rule.
- **Timed sets** \u2014 matches are played in timed sets (e.g. 2 minutes); the team with more players standing wins the set.
- **Stalling** \u2014 deliberately holding balls without throwing to run down the clock is penalised.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Throwing**
- **Overhand throw** \u2014 the dominant throwing action: a whip of the arm with a step and trunk rotation.
- **Sling (sidearm) throw** \u2014 a quick horizontal release, harder to read.
- **Accuracy** \u2014 throwing low (feet, legs) is safer and harder to catch than chest-high throws.

**Dodging & catching**
- **Duck, dip, dive** \u2014 low body positions and quick weight shifts to avoid the throw.
- **Catching** \u2014 two hands, soft hands absorbing the ball, eyes on the release.
- **Reading the thrower** \u2014 watching the shoulder and arm tells the direction before release.

>>> exam
Biomechanics of the throw
The overhand throw is a kinetic chain: legs push, hips rotate, trunk rotates, then the shoulder whips the arm with the elbow leading and the wrist releasing last. Accuracy comes from a low, consistent release point; power from sequencing the body, not just the arm.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Dodgeball is a **short-burst, intermittent** activity: repeated explosive throws, dodges and sprints with brief pauses between sets.

- **Energy systems** \u2014 ATP-CP for throws and dodges; lactic for repeated effort during a long set.
- **Agility** \u2014 footwork, change of direction and reaction speed are the physical priorities.
- **Throwing strength** \u2014 upper-body power and shoulder mobility for distance and speed.
- **Common injuries** \u2014 finger jams (catching), ankle sprains (dodging on a court), and head impacts (mitigated by the headshot rule and soft balls).` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Skill work** \u2014 throwing accuracy stations, catching grids and dodge reaction drills.
- **Agility training** \u2014 ladder drills, cone dodges and reaction sprints.
- **Game-based play** \u2014 small-sided matches to rehearse timing and teamwork.
- **Safety** \u2014 soft balls, supervised headshot enforcement, court clear of hazards, and warming up the throwing arm to prevent shoulder strain.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `One or two **referees** control a match, watching for legal throws, headshots, crossing the line and stalling. Officials signal elimination (point to the player), out-of-bounds, catch (both arms up) and the end of the set. Matches are best-of sets; tournaments use round-robin groups then knockout brackets. Timekeepers manage the set clock.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the dodgeball court. **A** — WDBF court 18 m \u00D7 9 m divided by a centre line, with an attack line 3 m from the centre and back (dead) lines on the boundaries.
2. **Q** — How is a player eliminated? **A** — By a direct hit from a thrown ball, by crossing a boundary, or by failing to catch; catching a ball eliminates the thrower.
3. **Q** — What happens on a catch? **A** — The thrower is eliminated and the catcher (and usually a team-mate) returns to the game — "revival".
4. **Q** — Why are headshots banned? **A** — To protect the face and head; in WDBF rules an illegal headshot makes the thrower out.
5. **Q** — What physical components does dodgeball develop? **A** — Throwing accuracy, agility, reaction speed, catching skill and team tactics, using the ATP-CP and lactic energy systems.

>>> exam
Quick memory anchors
- 18 × 9 m · centre line · 6–7 per side · timed sets
- Hit = out · catch = revive + thrower out · headshots illegal` }
  ]
},
/* ======================================================================== */
{
  slug: "ultimate",
  title: "Ultimate (Frisbee)",
  altNames: "Ultimate Disc",
  category: "field",
  emoji: "\u{1F3AF}",
  lede: "Ultimate is a seven-a-side, non-contact field game in which players pass a flying disc downfield to score in the opposing end zone. It is famous for its Spirit of the Game \u2014 self-officiating and sportsmanship \u2014 and is a World Games sport.",
  infobox: [
    ["Origin", "1968, USA \u2014 Maplewood, New Jersey"],
    ["Governing body", "WFDF (World Flying Disc Federation)"],
    ["Format", "Team \u00B7 7 players per side"],
    ["Duration", "Game to 15 points (point cap); halves"],
    ["Disc", "Flying disc \u2014 diameter 27.3 cm, 175 g"],
    ["Field", "100 m \u00D7 37 m with 2 end zones"],
    ["Olympic", "World Games sport; Olympic hopeful"],
    ["Common injuries", "Ankle sprains, hamstring strains, knee injuries"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "ultimate",
  verified: true,
  competitions: ["WFDF World Ultimate Championships", "World Games", "AUDL (pro)", "National Ultimate Championship (India)"],
  keyTerms: ["Flick", "Backhand", "Handler", "Cutter", "Pull", "End zone", "Spirit of the Game", "Turnover"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The disc**
- **Flying disc** \u2014 175 g, 27.3 cm diameter; the standard competition disc (e.g. Discraft UltraStar).
- The disc's flight depends on spin, tilt and speed; a flat release with spin flies straight.

**Attire & field**
- Cleated or turf shoes (approved cleats), comfortable athletic kit; gloves are optional for grip.
- **Cones** \u2014 mark the end zones and sidelines; no other field equipment is required.
- No padding \u2014 the sport is non-contact by rule.` },
    { id: "history", title: "History & development", module: null, body: `Ultimate was invented in **1968** by Joel Silver and students at Columbia High School, Maplewood, New Jersey. It spread through colleges in the 1970s, and the **WFDF** was formed in 1985 as the world governing body. Ultimate became a World Games sport in 2001. India's ultimate scene has grown through Ultimate Frisbee India and university leagues, with national and Asian tournaments. The sport's defining trait is the **Spirit of the Game**, which puts fair play and self-officiating above winning.` },
    { id: "field", title: "The field & markings", module: "m4", body: `The field is a rectangle **100 m long and 37 m wide**, with a **23 m end zone** at each end. Key markings:

- **Brick line** \u2014 18 m from the end zone; a pull that goes out or too short gives the offence a choice of starting at the brick or where the disc stopped.
- **End zones** \u2014 23 m deep; scoring requires catching the disc with both feet in the end zone.
- **Sidelines and end lines** \u2014 a disc caught out of bounds is a turnover.

The playing field is otherwise unmarked, keeping the layout simple and adaptable for schools.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Teams** \u2014 7 players per side; mixed-gender play (4M/3F or 3M/4F) is standard in WFDF competition.
- **Objective** \u2014 score by completing a pass to a team-mate inside the opponent's end zone; each score is 1 point.
- **Movement** \u2014 the thrower may not move while holding the disc; they must establish a pivot foot.
- **Turnovers** \u2014 possession changes when a pass is dropped, goes out of bounds, is intercepted, or when the thrower holds more than 10 seconds (stall count).
- **The stall** \u2014 a defender counts to 10 ("Stall 1, 2 ... 10") to force the thrower to release.
- **Contact** \u2014 physical contact is not allowed; fouls are called by the players themselves.
- **The pull** \u2014 each point starts with a throw from the scoring team to the other side (a "pull").
- **Spirit of the Game** \u2014 players resolve disputes themselves, call their own fouls and respect opponents.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Throws**
- **Backhand** \u2014 the disc held palm-up and released with a snap; the fundamental throw.
- **Flick (forehand)** \u2014 a wrist-snap release with the palm facing the target; used to release around a defender.
- **Hammer** \u2014 an overhead throw that flies upside down and drops vertically.
- **Pull** \u2014 a long-distance huck to start the point.

**Receiving & movement**
- **Cutting** \u2014 a change-of-direction sprint to lose a defender and open a throwing lane.
- **Handler and cutter** \u2014 handlers control the disc; cutters make deep or break cuts to score.
- **Catching** \u2014 the "pancake" (two hands clapping the disc) and one-handed grab.

>>> exam
Biomechanics of the flick
The forehand (flick) is powered by the wrist and forearm: the wrist snaps down and out, transferring spin to the disc, while the forearm extends and the elbow leads. Spin creates gyroscopic stability \u2014 the faster the spin, the straighter and more stable the flight, so a flick is thrown flat with a quick wrist snap rather than arm speed.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Ultimate is a **high-intensity intermittent** endurance sport \u2014 teams run long attacking and defensive sets, so aerobic conditioning matters as much as speed.

- **Energy systems** \u2014 aerobic base for sustained running; ATP-CP and lactic for cuts, sprints and marks.
- **Speed & agility** \u2014 cutting, change of direction and acceleration decide match-ups.
- **Common injuries** \u2014 ankle sprains (cutting on turf), hamstring strains (sprinting), and knee overuse; proper warm-up and surface awareness are key.
- **Fitness testing** \u2014 beep test, repeated sprints and jump tests are common.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Throwing practice** \u2014 repetition of backhands, flicks and hammers at distance and in games.
- **Conditioning** \u2014 interval running, agility ladders and repeat-sprint work to mirror match demand.
- **Game play** \u2014 small-sided games (3v3, 4v4) develop cutting and disc movement.
- **Safety** \u2014 call fouls, keep the field clear, wear appropriate cleats, and warm up the hamstrings and ankles; hydrating on warm turf days is essential.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `Ultimate is **self-officiated** under the Spirit of the Game: players call their own fouls and turnovers. In WFDF play, a **game advisor** (or observers at elite level) helps resolve disputes but rarely makes calls. Disputes follow a standard process \u2014 a player calls a foul, play stops, players discuss, and the disc is returned to the thrower if the call is contested. Tournaments use group play then brackets; the WFDF World Championships are the pinnacle.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the ultimate field. **A** — 100 m \u00D7 37 m with a 23 m end zone at each end and a brick line 18 m from each end zone.
2. **Q** — How is a point scored? **A** — A player catches the disc inside the opponent's end zone; each score is 1 point and the game is typically to 15.
3. **Q** — What is the Spirit of the Game? **A** — The principle that players are responsible for their own fouls and fair play; ultimate is self-officiated.
4. **Q** — What causes a turnover? **A** — A dropped or intercepted pass, a disc going out of bounds, or holding the disc beyond the 10-second stall count.
5. **Q** — Name the two basic throws. **A** — The backhand (palm-up snap release) and the flick/forehand (wrist-snap release around a defender).

>>> exam
Quick memory anchors
- 100 × 37 m · 23 m end zones · 7 per side · to 15 points
- No running with the disc · stall 10 · self-officiated · Spirit of the Game` }
  ]
},
/* ======================================================================== */
{
  slug: "tchoukball",
  title: "Tchoukball",
  altNames: null,
  category: "court",
  emoji: "\u{1F3C0}",
  lede: "Tchoukball is a non-contact rebound team sport in which players pass a ball and shoot it at inclined rebound frames to score. Its rules forbid defending the thrower and physical contact, making it a safe, inclusive sport ideal for mixed and beginner groups.",
  infobox: [
    ["Origin", "1970, Switzerland \u2014 Dr Hermann Brandt"],
    ["Governing body", "FITB (F\u00E9d\u00E9ration Internationale de Tchoukball)"],
    ["Format", "Team \u00B7 7 players per side"],
    ["Duration", "3 \u00D7 15 min with breaks"],
    ["Ball", "Handball-style ball"],
    ["Court", "27 m \u00D7 16 m with two rebound frames"],
    ["Olympic", "Not an Olympic sport"],
    ["Common injuries", "Ankle sprains, finger jams (low injury rate)"]
  ],
  modules: ["m1", "m2", "m3", "m4"],
  court: "tchoukball",
  verified: true,
  competitions: ["World Tchoukball Championships", "Asian Championships", "Tchoukball Nations Cup (India)"],
  keyTerms: ["Rebound frame", "Shooting circle", "Serve", "Double", "Attack", "Defence", "Pass", "No contact"],
  sections: [
    { id: "equipment", title: "Equipment & attire", module: "m4", body: `**The rebound frame**
- **Rebound frame** \u2014 a rectangular inclined net (1 m wide, 1 m high) set at an angle, mounted on a frame at each end of the court; the ball rebounds off it.
- **Ball** \u2014 a handball-style ball, slightly larger than a football, light enough to pass and shoot easily.

**Attire & safety**
- Court kit and non-marking shoes; no protective gear is needed because contact is banned.
- The inclined frame returns the ball gently, so rebounds are safe to catch.` },
    { id: "history", title: "History & development", module: null, body: `Tchoukball was invented in **1970** by Swiss biologist Dr Hermann Brandt, who designed a sport that removed aggression and injuries while keeping team play. The name comes from the "tchouk" sound the ball makes on the frame. The **FITB** was founded in 1971, and tchoukball spread through Europe, Asia and Africa; it is played in over 60 countries. India has an active tchoukball programme through the Tchoukball Federation of India, with national and Asian competitions.` },
    { id: "court", title: "The court & layout", module: "m4", body: `The court is **27 m long and 16 m wide**, with a **shooting area** in front of each rebound frame. Key markings:

- **Rebound frame** \u2014 positioned at each end, with the shooting circle in front of it.
- **Shooting circle** \u2014 a semicircle (about 3 m radius) around the frame; shots are only legal from outside this circle.
- **Centre line** \u2014 divides the court; players are limited in how far they can carry the ball.
- **Playing area** \u2014 the whole rectangle; the frame is the only obstacle.

The layout keeps the frame as the scoring target at both ends, with teams attacking both frames.` },
    { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Teams** \u2014 7 players per side; matches are **3 \u00D7 15 minutes**.
- **Objective** \u2014 score by throwing the ball against the rebound frame so it bounces off and lands out of the defender's reach (not hitting the defender).
- **Three passes** \u2014 a team may take no more than three passes before shooting.
- **No contact** \u2014 blocking, intercepting and physical contact are forbidden; defenders may not interfere with the thrower.
- **Scoring** \u2014 1 point if the ball rebounds and lands in the court without touching a defender; the scoring team then serves to the opposition.
- **Faults** \u2014 the ball hitting the ground, the frame's edge, or the thrower stepping in the shooting circle are faults; three consecutive faults may lose possession.
- **Serve** \u2014 play restarts with a serve from the end of the court.
- **Safety rule** \u2014 because defence is banned, tchoukball has one of the lowest injury rates in team sport.` },
    { id: "skills", title: "Technique & skills", module: "m2", body: `**Passing**
- **Chest pass** \u2014 the fast, two-handed basic pass.
- **Overhead and bounce passes** \u2014 used to move the ball around the court.

**Shooting**
- **Set shot** \u2014 a two-handed shot off the frame: knees bent, ball released with a soft flick, aiming at the frame's sweet spot.
- **Rebound reading** \u2014 judging the frame's angle so the rebound lands in space.

**Movement**
- **Cutting and positioning** \u2014 moving without the ball to create a clear shot lane.
- **Defensive positioning** \u2014 defenders stand outside the shooting circle, ready to catch rebounds, not block shots.

>>> exam
Biomechanics of the set shot
The shot is a two-handed projectile: legs extend and rise, arms follow, and the wrists flick to give the ball direction and spin toward the frame. Because the target is a large net, the shooter aims for the frame's centre with a soft, controlled release \u2014 power is less important than accuracy and reading the rebound.
` },
    { id: "physiology", title: "Physiology & training", module: "m1", body: `Tchoukball is a **moderate-to-high intensity intermittent** sport: constant movement, short sprints and repeated shots with no contact, so the aerobic and ATP-CP systems combine.

- **Energy systems** \u2014 aerobic base for 45 minutes of movement; ATP-CP for sprints and shots.
- **Agility & coordination** \u2014 footwork, spatial awareness and hand-eye coordination are central.
- **Common injuries** \u2014 the lowest injury rate of any team sport; when they occur they are usually ankle sprains from cutting and finger jams from catching fast rebounds.
- **Fitness testing** \u2014 agility tests, jump tests and beep tests are common.` },
    { id: "training", title: "Training & safety", module: "m3", body: `- **Passing drills** \u2014 three-pass triangle drills to build speed and accuracy.
- **Shooting stations** \u2014 repeated set shots off the frame from different angles.
- **Game play** \u2014 full-court matches to rehearse the three-pass rule and rebound reading.
- **Safety** \u2014 because contact is banned, safety comes from the rules themselves; players warm up the fingers and wrists for catching, and keep the court surface clear.` },
    { id: "officiating", title: "Officiating & tournament play", module: "m4", body: `A match is controlled by **one or two referees** under FITB rules. Officials whistle for faults (contact, three-pass limit, stepping in the shooting circle, ball to ground), award points and manage the serve. Signals include "point" (arm raised), "fault" (whistle + pointed), and the restart. Tournaments use round-robin groups then knockout brackets; the World Tchoukball Championships are held every four years.` },
    { id: "exam", title: "Exam focus", module: null, body: `**Likely exam questions**
1. **Q** — Describe the tchoukball court. **A** — 27 m \u00D7 16 m with a rebound frame at each end and a shooting circle in front of each frame.
2. **Q** — How is a point scored? **A** — The ball is thrown against the rebound frame and rebounds to the court without touching a defender.
3. **Q** — Why is contact banned? **A** — To create a non-aggressive, low-injury sport; tchoukball has one of the lowest injury rates in team sport.
4. **Q** — What is the three-pass rule? **A** — A team may take no more than three passes before shooting at the frame.
5. **Q** — Who invented tchoukball and when? **A** — Dr Hermann Brandt, a Swiss biologist, in 1970.

>>> exam
Quick memory anchors
- 27 × 16 m · rebound frames at both ends · 7 per side · 3 × 15 min
- No contact · 3 passes max · shoot from outside the circle` }
  ]
},
];
