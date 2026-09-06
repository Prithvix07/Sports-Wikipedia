/* ==========================================================================
   THE ARENA — Kinesiology & Biomechanics Study Guide (Module II)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module II.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.KINESIOLOGY = {
  intro: "How the body moves \u2014 mechanics, levers, force and motion in sporting actions. This guide explains the vocabulary of movement (planes, axes, levers, projectile motion, momentum and balance) and applies each idea to the sports you actually play and are examined on.",
  stats: [
    { value: "3", label: "planes & axes of movement" },
    { value: "3", label: "classes of body levers" },
    { value: "3", label: "Newton's laws of motion" },
    { value: "45\u00B0", label: "ideal projection angle (no air resistance)" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "introduction",
    title: "1. What is kinesiology & biomechanics?",
    body: `**Kinesiology** is the scientific study of human movement \u2014 it brings together anatomy (structure), physiology (function) and mechanics (motion). **Biomechanics** applies the laws of mechanics to the human body, treating the limbs as levers and the body as a machine.

**Why coaches and examiners care**
- To make skills more **efficient** (less energy wasted).
- To make movements **safer** (correct technique reduces injury).
- To make performance **maximal** (greater speed, height, distance and accuracy).
- To analyse technique \u2014 \u201cwhy does the long-jumper hold that angle?\u201d

**Two branches of mechanics**

| Branch | Studies | Examples |
|---|---|---|
| Statics | Bodies at rest or in uniform motion | Balance, posture, standing push in scrum |
| Dynamics | Bodies that are accelerating / changing motion | Running, jumping, throwing, changing direction |

**Kinematics vs kinetics** \u2014 know the pair:
- **Kinematics** \u2014 describes motion (distance, speed, displacement, velocity, acceleration) without considering the forces that caused it.
- **Kinetics** \u2014 the study of the forces that produce or change motion (gravity, friction, muscle pull).

>>> exam
Define the pair
Distinguish between kinematics and kinetics. Answer: kinematics describes motion in terms of distance, speed and acceleration; kinetics studies the forces (gravity, friction, muscle tension) that cause or change that motion.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "motion-types",
    title: "2. Motion: linear, angular & general",
    body: `Motion is a change in position. There are three kinds, and most sporting skills are a mix.

**Linear motion (translation)** — the whole body or object moves the same distance, at the same speed, in the same direction.
- **Straight-line (rectilinear)**: a sprinter moving down his lane.
- **Curved-line (curvilinear)**: the flight path of a long-jumper after take-off.

**Angular motion (rotation)** — the body or object rotates around an axis.
- The gymnast's **somersault** (rotation about a transverse axis through the waist).
- The discus thrower's **pivot** in the circle.

**General motion** — a combination of linear and angular motion. Nearly every human movement is general: the cyclist's wheels rotate while the cyclist travels forward; the runner's legs swing about the hips while the whole body translates.

**In sport, coaches break a complex motion into phases** \u2014 e.g. the javelin: approach run (linear) \u2192 crossover stride and throw (angular transfer) \u2192 release (projectile).

>>> exam
Classify the motion
Classify the motion of a basketball during a chest pass. Answer: linear (translatory) motion \u2014 the ball travels through the air from player to player; the spin on it is separate rotational motion, so strictly it is general motion.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "joint-movement",
    title: "3. Joint motion & the movements at each joint",
    body: `Movement at a joint is described relative to a person standing in the **anatomical position** (facing forward, palms facing forward). Revise these terms before reading the planes chapter \u2014 they are always tested together.

| Movement | Description | Sport example |
|---|---|---|
| Flexion | Decreasing the angle at a joint | Bending the elbow in a biceps curl |
| Extension | Increasing the angle at a joint | Straightening the knee at take-off |
| Hyperextension | Extending beyond the neutral anatomical position | Leaning back in a high bar back hip |
| Abduction | Moving a limb away from the body's midline | Arms out to the side in a star jump |
| Adduction | Moving a limb towards the midline | Arms down to the sides |
| Rotation | Turning a bone on its own longitudinal axis | Turning the head to look for a pass |
| Circumduction | Distal end traces a circle (cone of movement) | Arm circling in a windmill bowling action |
| Pronation / supination | Forearm rotates palm-down / palm-up | Supination of the forearm in a backhand drive |
| Dorsiflexion / plantar flexion | Ankle bends up towards the shin / toes point down | Plantar flexion in the final push-off of a sprint |

**Remember**: abduction and adduction are named from the midline of the body, not from the centre of the limb.

**Movement pairs that work as antagonist muscles**
- Flexion of the elbow: **biceps** (agonist) vs **triceps** (antagonist).
- Extension of the knee: **quadriceps** vs **hamstrings**.
- Plantar flexion of the ankle: **gastrocnemius & soleus** vs **tibialis anterior**.

>>> exam
Name the movement
A gymnast raises both arms sideways from the sides of the body to shoulder level. Name the movement. Answer: abduction (moving the limbs away from the midline).`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "planes-axes",
    title: "4. Planes and axes of movement",
    body: `**Planes** are flat, imaginary surfaces that pass through the body and divide it; **axes** are the imaginary straight lines the body rotates around. Every movement happens in a plane and around an axis that is **perpendicular (at right angles) to that plane**.

**The three planes**

| Plane (divides the body…) | Movement it contains | Sport examples |
|---|---|---|
| Sagittal plane (into left & right halves) | Flexion & extension | Running, kicking, squatting, biceps curl |
| Frontal plane (coronal — into front & back halves) | Abduction & adduction, lateral flexion | Jumping jacks, side stepping, cartwheel |
| Transverse plane (horizontal — into top & bottom halves) | Rotation | Discus throw rotation, golf swing follow-through, tennis serve rotation |

**The three axes** — each runs through the body at right angles to its plane:
- **Sagittal axis** — runs front to back; movement in the frontal plane (abduction/adduction) rotates around it.
- **Frontal (transverse) axis** — runs side to side; movement in the sagittal plane (flexion/extension) rotates around it.
- **Vertical (longitudinal) axis** — runs top to bottom; movement in the transverse plane (rotation) happens around it.

>>> exam
Match plane & axis
A gymnast performs a forward somersault. In which plane does the body move and around which axis? Answer: the somersault is a forward rotation \u2014 flexion/extension through the sagittal plane, rotating around the frontal (side-to-side) axis.

>>> exam
One more
A discus thrower rotates before releasing. This rotation takes place in the transverse plane, around which axis? Answer: the vertical (longitudinal) axis \u2014 a top-to-bottom spin, like a top.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "levers",
    title: "5. Levers in the body",
    body: `A **lever** is a rigid bar that rotates about a fixed point when a force is applied. Every lever has three parts:
- **Fulcrum (F)** — the pivot point (usually the joint).
- **Effort (E)** — the force applied (muscle pull).
- **Load (L)** — the resistance (the limb's weight + any external weight).

The distance from the fulcrum to the effort is the **effort arm**; from the fulcrum to the load is the **load arm**. **Mechanical advantage = effort arm \u00F7 load arm** — a lever gives advantage when the effort arm is longer than the load arm.

**The three classes**

| Class | Order (F-E-L) | Body example | Mechanical advantage |
|---|---|---|---|
| First-class | Fulcrum between effort & load | Looking up/down \u2014 skull on the atlas (fulcrum = joint, effort = neck muscles behind, load = face in front) | Balanced; can favour effort or speed |
| Second-class | Load between fulcrum & effort | Standing on the toes \u2014 ankle joint (fulcrum), body weight (load), calf muscle pull (effort) on the heel | Great mechanical advantage (finds strength) |
| Third-class | Effort between fulcrum & load | Most limb levers \u2014 elbow joint (fulcrum), biceps inserts close in (effort), hand/weight far out (load) | Poor mechanical advantage \u2014 trades strength for speed |

**Why most body levers are third-class**: the effort (muscle insertion) is close to the joint, so the load arm is long. This means **speed and range of motion** are favoured over brute strength \u2014 the hand can move very fast although the muscle shortens slowly. Sprinting, throwing and boxing all depend on this speed advantage.

>>> exam
Mechanical advantage
A tennis player's forearm during a serve behaves as a lever. Which class is it and why does it give speed? Answer: a third-class lever \u2014 the effort (triceps/biceps pull near the elbow) lies between the fulcrum (elbow) and the load (racket at the hand). The long load arm moves a large distance quickly, so the racket head gains high speed at the cost of mechanical advantage.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "force-momentum",
    title: "6. Force, momentum & impulse",
    body: `**Force** is a push or pull that changes, or tends to change, the state of motion of a body. It is measured in **newtons (N)** and has size and direction (a vector).

**Newton's three laws** \u2014 the backbone of every throwing, jumping and contact skill:

| Law | Statement | Sport application |
|---|---|---|
| 1st (Inertia) | A body continues at rest or uniform motion unless a force acts on it | The snooker ball stays still until struck; a sprinter must push hard to overcome starting inertia |
| 2nd (Acceleration) | Force = mass \u00D7 acceleration (F = ma) | The heavier the shot put and the faster you want to throw it, the greater the force you must apply |
| 3rd (Action–Reaction) | Every action has an equal and opposite reaction | Pushing down and backwards against the ground drives the sprinter forward; the ground pushes back |

**Momentum** = mass \u00D7 velocity (measured in kg\u00B7m/s). A heavy rugby player moving fast carries great momentum, which is hard to stop \u2014 \u201cbuilding momentum\u201d at the line is literally Newtonian.

**Impulse** = force \u00D7 time (the change in momentum). The equation **Ft = \u0394(mv)** is the examiner's favourite.
- To increase jump height: apply force for **longer** on the ground (the deep countermovement crouch in a vertical jump).
- To hit a fast ball: the bat/racket stays in contact for longer or applies more force.

>>> exam
Apply F = ma
Why does a shot-putter need more strength than a badminton player to hit the shuttle hard? Answer: the shot has far more mass, and since Force = mass \u00D7 acceleration, moving a heavy object at speed requires much greater force. The shuttle is light, so higher acceleration can be produced with modest force.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "projectile",
    title: "7. Projectile motion",
    body: `When an object or body is released into the air it becomes a **projectile**, acted on only by gravity (and air resistance). Its flight depends on three factors:
1. **Angle of projection**
2. **Velocity (speed) of release**
3. **Height of release** relative to the landing point

**The optimum angle**: with **no air resistance**, the maximum horizontal distance is achieved at **45\u00B0**. In practice:
- **Throwing for distance** (javelin, shot put, hammer) release is near 30\u201341\u00B0 because the release point is higher than the landing point and air resistance matters.
- **Jumping athletics** (long jump, high jump) use angles between 20\u20135\u00B0 and 45\u2017\u00B0 depending on the event and centre-of-mass path.

**The most important factor is the velocity of release** \u2014 doubling the release speed can roughly quadruple the distance (distance \u221D v\u00B2). A great angle with a slow throw loses to a fast throw with a slightly off angle.

**Key projectile facts for exams**
- The **range** (horizontal distance) is greatest for a given speed at 45\u00B0 in a vacuum.
- **Height of flight** is greatest at high angles (60\u201390\u00B0 for maximum height, e.g. the ballooning high-jump fold technique).
- The horizontal velocity stays constant (ignoring air resistance); vertical velocity is slowed by gravity (\u20189.8 m/s\u00B2\u2019) on the way up and increased on the way down.

>>> exam
Choose the angle
A long jumper is told to \u201ctake off at about 20\u00B0\u201d, not 45\u00B0. Why? Answer: the long jumper already has great horizontal speed from the run-up and releases from a high point. A steep 45\u00B0 angle would trade too much forward speed for height and shorten the jump; around 20\u00B0 best balances the two.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "balance",
    title: "8. Centre of gravity, balance & stability",
    body: `The **centre of gravity (CoG)** is the point where the body's whole weight appears to act. It is the balancing point \u2014 in the standing anatomical position it lies just in front of the second sacral vertebra (roughly at your navel).

**Balance** is the ability to hold a position; it is preserved while the vertical line through the centre of gravity (**line of gravity**) falls within the **base of support** (the area enclosed beneath the feet or contact points).

**Factors that increase stability**
| Factor | How | Example |
|---|---|---|
| Lower the centre of gravity | Bending the knees reduces CoG height | Defensive stance in basketball, wrestling crouch |
| Widen the base of support | Feet shoulder-width apart or staggered | Rowing brace, boxing stance |
| Bring the line of gravity towards the centre of the base | Weight over the middle of the feet | Archery stance, golf address |
| Increase body mass | Heavier mass is harder to knock over | The scrum's low, heavy mass |

**Stability is traded for mobility**: a sprinter in the blocks has a high, narrow CoG to explode; a sumo wrestler crouches low and wide to be near-immovable. Sports constantly trade the two.

**Practical tricks**
- A gymnast extends the arms to **raise** and control the CoG when balancing on a beam.
- A downhill skier crouches to **lower** the CoG and stay balanced at speed.
- During a high jump the athlete's body is positioned so the CoG passes **just over** (sometimes outside) the bar while the body arcs over it.

>>> exam
Stability check
Why does a wrestler crouch low with feet wide apart before a takedown? Answer: lowering the centre of gravity and widening the base of support keep the line of gravity inside the base, making the wrestler stable and hard to push over \u2014 and ready to generate a strong reaction force.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "speed-velocity",
    title: "9. Describing quantity: distance, speed, displacement & velocity",
    body: `These four terms are heavily tested and almost always confused.

**Distance and speed (scalars)** count only size:
- **Distance** \u2014 the total path length travelled (metres). A sprinter on a curve runs the full curve length.
- **Speed** = distance \u00F7 time (m/s).

**Displacement and velocity (vectors)** include direction:
- **Displacement** \u2014 the straight-line distance and direction from start to finish. Running one lap back to the start gives displacement zero.
- **Velocity** = displacement \u00F7 time (m/s, with direction). Velocity is a vector, speed is a scalar.

**Acceleration** — the rate of change of velocity (\u0394velocity \u00F7 time, m/s\u00B2). Acceleration can come from changing speed OR changing direction (turning a corner is acceleration even at constant speed).

| Quantity | Scalar or vector | Sport example |
|---|---|---|
| Speed | Scalar | \u201cThe sprinter's top speed was 11 m/s\u201d |
| Velocity | Vector | \u201c11 m/s due east down lane three\u201d |
| Distance | Scalar | \u201cThe match ended after 110 m of total running\u201d |
| Displacement | Vector | \u201cEnded the set 30 m forward of where it started\u201d |

>>> exam
Scalar or vector?
A footballer chases a ball 20 m forward then 8 m back. What are the distance and the displacement? Answer: distance = 28 m (all path travelled); displacement = 12 m forward (straight line from start to final position, with direction).`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "work-power",
    title: "10. Work, power & energy",
    body: `**Work (W)** is done when a force moves a body through a distance in the direction of the force: **Work = force \u00D7 distance** (joules, J). Lifting a weight against gravity does work; holding it still does none (no movement).

**Power** is the rate of doing work: **Power = work \u00F7 time** (watts, W). It is the examiner's word for \u201chow fast you apply force\u201d. A 100 m sprinter and a weightlifter may do similar total work, but the sprinter does it in one-tenth of the time \u2014 far more power.

| Term | Formula | Unit | Sport reading |
|---|---|---|---|
| Work | W = F \u00D7 d | joule (J) | Lifting the barbell 2 m \u00D7 800 N = 1600 J |
| Power | P = W \u00F7 t | watt (W) | Explosive vertical jump \u2014 high power output |
| Kinetic energy | KE = \u00BDmv\u00B2 | joule | The running velocity that must be redirected in a stop-and-turn |
| Potential energy | PE = mgh | joule | Height gained in a high jump becomes the \u201cenergy bank\u201d |

**Energy is never created or destroyed** \u2014 it converts. In a **bungee jump and dive take-off**, kinetic energy (motion) converts to potential energy (height) and back. In every jump the athlete lowers the body (storing elastic energy in tendons) then converts that energy into upward kinetic energy.

>>> exam
Work or power?
Why is the vertical jump called a test of \u201cpower\u201d and not just \u201cstrength\/force\u201d? Answer: power = work \u00F7 time. A powerful jumper raises body weight a given distance in a very short time, so power (the rate of work) is high \u2014 and that is what explosive sports require.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "friction",
    title: "11. Friction & its role in sport",
    body: `**Friction** is the force that resists the sliding of one surface over another. It can help or hinder every ground-based sport.

**Where friction helps**
- The sprinter's **blocks spikes** grip the track, so the push-off force is not wasted.
- **Grip** on a violin bow or a basketball (finger pads) \u2014 friction lets you control the ball.
- Braking in a tennis or badminton lunge \u2014 friction stops the slides safely.
- The goalkeeper's gloves and the snooker player's chalk increase grip.

**Where friction hurts**
- It slows a rolling ball on grass (choosing a hard tennis court gives a faster serve).
- It warms surfaces and wears footwear.
- Sliding parts need lubrication (ice and water-repellent surfaces reduce friction deliberately \u2014 e.g. ice hockey).

**Types**
- **Static friction** \u2014 keeps a body at rest; the maximum grip before movement.
- **Kinetic (sliding) friction** \u2014 opposes a body that is already moving (usually less than static friction).
- **Rolling friction** \u2014 resistance when a body rolls (much smaller than sliding friction \u2014 why ball-bearings and wheels help).

>>> exam
Grip it
Why does a sprinter choose spiked shoes and low-slung starting blocks? Answer: spikes and the block surface increase static friction at the push-off, letting more of the runner's force be converted into forward acceleration instead of slipping.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "technique-application",
    title: "12. Biomechanics in every skill you play",
    body: `Finally, see the theory inside the techniques you practise. This table is a gift for the long-answer section.

| Skill | Biomechanical principle at work |
|---|---|
| Long jump take-off | Impulse (Ft) \u2014 longer ground contact at the take-off board gives more upward impulse; projectile angle ~20\u00B0 |
| High jump (Fosbury flop) | Centre of gravity passes below or near the bar while the body arches; body position converts a high CoG path into clearance |
| Basketball jump shot | Release velocity and an optimal angle (~50\u00B0 for the free throw from a higher release point); backspin gives a soft, stable flight |
| Javelin / shot put | Long effort arm through body rotation (momentum transfer); release angle is lower because release height is high |
| Fast bowling / pitching | Third-class lever at the elbow + kinetic chain: trunk, shoulder, elbow, wrist add successive velocities to the hand |
| Sprint start | Newton's 3rd law \u2014 push against the blocks; low centre of gravity; high frequency later |
| Freestyle swimming | Pulling directly backward (action\u2013reaction) with the arm pitched; reduces wasted lateral force |
| Cycling climbing | Gears trade mechanical advantage for speed \u2014 the legs push a smaller gear to win against gravity |
| Gymnastic balance beam | Lowered, stable centre of gravity with arms extended to control the line of gravity inside the support base |
| Karate side kick | High velocity at the end segment of a third-class lever chain; whip-like speed from segmental rotation |

>>> exam
One application
Explain, using biomechanics, why a tennis coach tells you to \u201cextend through the elbow and wrist\u201d on the serve. Answer: the serve is a kinetic chain of levers. Straightening the elbow (extension) and flexing the wrist adds the velocity of each distal segment to the racket head, maximising release speed \u2014 speed multiplies down the lever chain.`,
    module: "m2"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "13. Quick-revision formulas & one-liners",
    body: `**Formulas worth memorising**

| Formula | Meaning |
|---|---|
| Speed = distance \u00F7 time | Rate of motion |
| Velocity = displacement \u00F7 time | Rate of motion with direction |
| Acceleration = \u0394velocity \u00F7 time | Change of velocity per second |
| Force = mass \u00D7 acceleration | Newton's 2nd law |
| Momentum = mass \u00D7 velocity | Quantity of motion |
| Impulse = force \u00D7 time | Change of momentum |
| Work = force \u00D7 distance | Energy transferred |
| Power = work \u00F7 time | Rate of doing work |
| Kinetic energy = \u00BDmv\u00B2 | Energy of motion |
| Potential energy = weight \u00D7 height | Stored energy of position |
| Mechanical advantage = effort arm \u00F7 load arm | Lever efficiency |

**Ten one-line definitions**
- **Kinesiology** \u2014 the science of human movement.
- **Biomechanics** \u2014 mechanics applied to the human body.
- **Axes of rotation** \u2014 imaginary lines through a joint the limb rotates around.
- **Centre of mass** \u2014 the single point where a body's mass is concentrated (centre of gravity when weight is considered).
- **Resultant velocity** \u2014 combined effect of horizontal and vertical velocities.
- **Trajectory** \u2014 the flight path of a projectile.
- **Stretch–shortening cycle** \u2014 a rapid eccentric stretch followed by a concentric contraction (a depth jump), storing and releasing elastic energy.
- **Optimum angle** \u2014 the release angle giving maximum range for the circumstances (45\u00B0 in a vacuum, less in practice).
- **Kinetic chain** \u2014 linked body segments where one segment's motion feeds the next.
- **Spin (Magnus effect)** \u2014 backspin or topspin curving a ball's flight and changing its bounce.

>>> exam
Final check
State Newton's three laws and give one sport example of the third. Answer: (1) inertia \u2014 a shot put stays still until pushed; (2) F = ma \u2014 a heavy shot needs more force; (3) action\u2013reaction \u2014 a sprinter pushes backward on the blocks and the blocks push the sprinter forward.`,
    module: "m2"
  }
  ],

  exam: [
    { q: "Define kinesiology and biomechanics.", a: "Kinesiology is the scientific study of human movement; biomechanics is the application of the laws of mechanics to the human body in motion." },
    { q: "Name the three planes of movement and the movements each contains.", a: "Sagittal (flexion–extension), frontal or coronal (abduction–adduction), and transverse (rotation)." },
    { q: "What axis does a forward somersault rotate about?", a: "The frontal (side-to-side, transverse) axis, at right angles to the sagittal plane of the movement." },
    { q: "Classify body levers and give one example of each.", a: "First-class \u2014 fulcrum between effort and load (neck / skull on atlas); second-class \u2014 load between fulcrum and effort (standing on toes); third-class \u2014 effort between fulcrum and load (elbow in flexion, most limb levers)." },
    { q: "State the relationship between impulse and momentum.", a: "Impulse = force \u00D7 time = change in momentum. Increasing the time force is applied (the deep countermovement) raises the impulse and hence jump height." },
    { q: "Why is 45\u00B0 often quoted as the best angle of release?", a: "In the absence of air resistance, 45\u00B0 gives the greatest horizontal range for a fixed release speed; in real throws the angle is lower because release height is above landing height and air resistance acts." },
    { q: "Explain how a sprinter uses Newton's third law at the blocks.", a: "The sprinter pushes back and down on the blocks; the blocks exert an equal and opposite forward force that starts the sprinter's acceleration." },
    { q: "What is the centre of gravity and how does lowering it improve stability?", a: "The centre of gravity is the point where the body's weight acts. Lowering it and widening the base keep the line of gravity within the base of support, so a position is harder to disturb." },
    { q: "Distinguish distance from displacement.", a: "Distance is the total path length travelled (a scalar); displacement is the straight-line distance and direction from start to finish (a vector)." },
    { q: "Define work and power, giving their units.", a: "Work is force multiplied by distance in the direction of the force (joules). Power is work divided by time (watts) \u2014 the rate of doing work." },
    { q: "How does friction help and hinder an athlete?", a: "It helps by providing grip for sprinting, cutting, throwing and holding equipment; it hinders by slowing balls and objects and wasting energy where the surface must be smooth and fast." },
    { q: "Give one biomechanical reason a vertical jump is improved by a preliminary crouch.", a: "The crouch lengthens the time of force application at take-off (greater impulse) and uses the stretch–shortening cycle, storing elastic energy that is released in the upward push." }
  ]
};