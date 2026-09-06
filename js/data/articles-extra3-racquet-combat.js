/* ==========================================================================
   THE ARENA — Extra Racquet & Combat Articles
   Concise syllabus articles for the remaining racquet/net games and the
   combat & martial arts. Appended to window.ARTICLES so every SPORTS entry
   has real content.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  /* ---------------------------------------------------------------- RACQUET */
  {
    slug: "racquetball",
    title: "Racquetball",
    altNames: null,
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Racquetball is a fast four-wall game in which two players rally a hollow rubber ball with a short-handled racquet \u2014 the ball must strike the front wall before it bounces twice.",
    infobox: [
      ["Invented", "USA (1950, Joe Sobek)"],
      ["Governing body", "IRF / USA Racquetball"],
      ["Format", "Individual & doubles"],
      ["Court", "12.2 \u00D7 6.1 m \u00D7 6.1 m high, four walls"],
      ["Ball", "Hollow rubber, ~5.7 cm, high bounce"],
      ["Olympic", "Not an Olympic sport (World Games)"],
      ["Common injuries", "Eye injuries, ankle sprains, shoulder strain"]
    ],
    modules: ["m2", "m3", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["IRF World Championships", "Pan American Games", "US Open Racquetball"],
    keyTerms: ["Front wall", "Service line", "Short line", "Three-wall rally", "Hinder"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Racquetball** is played in an enclosed court with a hollow rubber ball. Players take turns striking the ball against the **front wall**; the opponent must return it before it bounces twice. Because every wall is in play, rallies demand constant movement, angle shots and quick reactions.` },
      { id: "court", title: "The court & equipment", module: "m4", body: `- **Court**: 12.2 m long, 6.1 m wide and 6.1 m high, with a front wall, two side walls and a back wall (all in play).
- **Service zone**: between the short line and the service line; the server must bounce the ball and strike it to hit the front wall first.
- **Racquet**: short-handled, up to 56 cm; the string face is strung like a squash racquet but the ball is larger and faster.
- **Ball**: hollow and lively \u2014 warmed, it rebounds more; protective eyewear is mandatory in organised play.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Serve**: must hit the front wall and rebound past the short line without touching the floor; the receiver may take it on the volley or first bounce.
- **Rally**: the ball may hit side or back walls after the front-wall hit; it must not bounce twice before being returned.
- Scoring is **rally scoring** in modern play \u2014 a point is won every rally (serve to 15 or 11 in some formats).
- **Hinder**: if the ball passes close but the opponent blocks the swing, a let may be called (replay); deliberate obstruction is a point to the opponent.
- Faults: two consecutive serves faults lose the serve.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Grip**: a loose continental-style grip; the wrist snaps at contact to generate pace from a short swing.
- **Wrist snap** is the power source \u2014 the racquet face accelerates through contact using the wrist as a lever.
- **Positioning**: centre-court (the "key") allows the shortest path to every wall \u2014 a constant study in court geometry and anticipation.
- **Shot selection**: ceiling balls, cross-courts and pinch shots (hard into the side wall near the front) force the opponent out of position.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- **Eye injuries** from the fast ball \u2014 protective eyewear is non-negotiable.
- Ankle sprains from rapid cutting; shoulder and wrist overuse from repeated swings.
- Prevention: proper footwear, warm-up, hydration in the hot court, and checking the ball temperature before competitive rallies.` }
    ]
  },
  {
    slug: "paddle-tennis",
    title: "Paddle Tennis",
    altNames: "Platform Tennis",
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Paddle tennis is tennis on a smaller court with solid wooden paddles and a low-compression ball \u2014 doubles-centric, fast and a superb beginner's racquet game.",
    infobox: [
      ["Invented", "USA (1898, by Frank Beal)"],
      ["Governing body", "USA Pickleball / national bodies"],
      ["Format", "Doubles (also singles)"],
      ["Court", "20.1 \u00D7 10 m \u2014 a quarter of a tennis court"],
      ["Paddle", "Solid, perforated, no strings"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Elbow strain, shoulder strain, ankle sprains"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["US Paddle Tennis Championships", "National open tournaments"],
    keyTerms: ["Paddle", "Low-compression ball", "No double bounce rule", "Short court", "Drop shot"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Paddle tennis** shrinks tennis to a quarter-court with solid paddles and a rubber ball with low compression. Played chiefly as doubles, it keeps all the tactics of tennis \u2014 net play, lobs and angles \u2014 in a smaller, faster space, making it ideal for schools and city courts.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- **Court**: 20.1 \u00D7 10 m, divided by a net 78 cm high at the centre.
- **Paddles**: solid wood or composite, with a perforated face; no strings or rubber.
- **Ball**: slightly softer than a tennis ball with lower bounce \u2014 designed for the short court.
- The service court is marked; the smaller size means rallies are continuous and quick.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Serving**: underhand or overhand within a 1.6 m service box; only one serve (faults end the point in some codes).
- The ball may be hit off the bounce or on the volley, but **the receiver may not volley the serve** (the "double bounce" restriction at the return).
- Scoring follows tennis-style games, sets and matches (or rally scoring in code variants).
- No double faults \u2014 a single service fault means the opponent scores in some recreational codes.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The solid paddle produces a stiff contact mass \u2014 control (placement) beats power; the short swing keeps the racquet head stable.
- Net play and the drop shot are lethal \u2014 angles close to the net fold the opponent's court.
- Footwork: short, explosive steps to reach the sharp angles \u2014 agility and reaction speed are the dominant fitness demands.` }
    ]
  },
  {
    slug: "pickleball",
    title: "Pickleball",
    altNames: null,
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Pickleball is America's fastest-growing paddle sport \u2014 a small-court, low-bounce game of dinks, volleys and a non-volley zone, playable in singles or doubles.",
    infobox: [
      ["Invented", "USA (1965, Bainbridge Island)"],
      ["Governing body", "USA Pickleball / Global Pickleball Federation"],
      ["Format", "Singles & doubles"],
      ["Court", "13.41 \u00D7 6.10 m \u2014 badminton-sized"],
      ["Paddle", "Solid composite, no strings"],
      ["Ball", "Perforated plastic \u2014 26 cm circumference"],
      ["Olympic", "Not yet Olympic"],
      ["Common injuries", "Elbow (pickleball elbow), shoulder strain, knee pain"]
    ],
    modules: ["m2", "m3", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["USAP Nationals", "World Pickleball Championships", "National pickleball tours"],
    keyTerms: ["Kitchen", "Non-volley zone", "Dink", "Double bounce", "Third shot drop"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Pickleball** blends badminton's court, tennis's strokes and table-tennis's touch. A perforated plastic ball is volleyed over an 86 cm net, but no player may volley from within 2.13 m of the net \u2014 the **kitchen**. It is one of the most accessible sports ever devised, played from school yards to masters' tournaments.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- **Court**: 13.41 \u00D7 6.10 m, split by a net 86 cm high at its centre (slightly lower in the middle).
- **Non-volley zone (kitchen)**: a 2.13 m zone on each side of the net where volleys are illegal.
- **Paddle**: solid, up to 43 cm; face dimensions regulated.
- **Ball**: hard plastic with 26\u201340 holes; weight around 22\u201326 g.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Serving**: underhand, diagonal, from behind the baseline; the serve must clear the kitchen.
- **Double bounce rule**: after the serve, both teams must allow one bounce \u2014 the receiver returns the serve on the bounce, then the serving team lets the return bounce before volleying.
- Simplifies to: three shots in, then volleys are allowed.
- Scoring is **rally scoring** to 11 (win by 2); only the serving side "scores" in traditional rules \u2014 modern play uses rally scoring (points on every rally).
- A volley from inside the kitchen is a fault.` },
      { id: "technique", title: "Technique & tactics", module: "m2", body: `- The **dink** \u2014 a soft shot landing in the opponent's kitchen \u2014 is the strategic heart of the game; it forces errors without pace.
- The **third-shot drop** lets the serving team reach the net after the return.
- Power comes from the paddle face and wrist, not a big swing; control of the ball's low trajectory beats speed.
- Biomechanics: a compact, level swing minimises the lever arm and maximises repeatability \u2014 the reason older players excel.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- **Pickleball elbow** (lateral epicondylitis) from repeated grips and volleys \u2014 treat with rest and strengthening.
- Shoulder strain and knee pain from the low, quick movement patterns; Achilles issues in older players.
- Prevention: proper paddle size and grip, warm-up, court-specific footwear, and gradual increase in play volume.` }
    ]
  },
  {
    slug: "padel",
    title: "Padel",
    altNames: "Paddle Tennis (Spain)",
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Padel is a doubles wall-raccquet sport played in a 20 &times; 10 m glass-and-mesh court \u2014 tennis strokes with solid paddles and the back wall as a rebound weapon.",
    infobox: [
      ["Invented", "Mexico (1969, Enrique Corcuera)"],
      ["Governing body", "FIP (International Padel Federation)"],
      ["Format", "Doubles (mainly)"],
      ["Court", "20 \u00D7 10 m, enclosed by walls & mesh"],
      ["Paddle", "Solid, perforated, no strings"],
      ["Ball", "Standard tennis ball"],
      ["Olympic", "Not yet Olympic (fast growth)"],
      ["Common injuries", "Elbow strain, shoulder strain, ankle sprains"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["FIP World Padel Championship", "Premier Padel", "World Padel Tour legacy events"],
    keyTerms: ["Glass walls", "Mesh", "Band 3 m rule", "Rebote", "Dinking"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Padel** is tennis condensed into an enclosed court where the **back and side walls are in play**. Solid paddles are used instead of strung racquets, and every player relies on the wall rebounds to keep the rally alive \u2014 a blend of tennis, squash and strategy that has exploded worldwide.` },
      { id: "court", title: "The court & equipment", module: "m4", body: `- **Court**: 20 \u00D7 10 m, with a 3 m mesh barrier, glass back walls and metres of glass side walls.
- The net divides the court at 88 cm in the middle (92 cm at the posts).
- **Paddle**: solid composite with perforation \u2014 no strings; length up to 45.5 cm.
- A brand ball identical to a tennis ball is used.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- The serve is underhand (below the waist) and must bounce on the server's side then clear the net.
- After the serve, the ball may hit the walls \u2014 a ball that strikes the mesh out of the court is out; a ball that comes off the glass stays in play.
- The ball can be played off the side walls once before crossing the net, and off the back wall by the receiver on the bounce.
- Tennis scoring: 15/30/40 and deuce; sets and matches to codes.
- Doubles is the standard format.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **band 3** (glass-rebound) shot \u2014 hitting into the back glass so the ball rebounds low \u2014 is a signature padel weapon.
- Solid paddles favour short, controlled swings; the wrist adds top spin.
- Net play (the "volley in the wind") plus deep lobs control court position.
- The compact court and walls reward anticipation: the wall is a partner, and reading rebounds is a constant spatial-computation skill.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Elbow and shoulder strain from paddle impact and repeated swings; ankle sprains on the fast court.
- Prevention: correct paddle grip size, wall-aware footwork drills, and court shoes with proper lateral support.` }
    ]
  },
  {
    slug: "wallball",
    title: "Wallball",
    altNames: "One-Wall Handball",
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Wallball (one-wall handball) is played against a single wall by hand \u2014 the ball must strike the wall and rebound; players volley or one-bounce it, with full rally control.",
    infobox: [
      ["Invented", "Ireland / USA (one-wall traditions)"],
      ["Governing body", "WPH / national associations"],
      ["Format", "Singles & doubles"],
      ["Court", "One wall 6.1 m high \u00D7 6.1 m wide, with court lines"],
      ["Ball", "Small rubber, lively"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Hand injuries, eye injuries, ankle sprains"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["WPH One-Wall events", "World handball championships", "National handball leagues"],
    keyTerms: ["Front wall", "Short line", "Service line", "Kill shot", "Rebounds"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Wallball** is handball against a single wall: the server hits the ball into the wall, and players rally it, allowing it to bounce once before touching the wall again. Played with gloved hands, it demands hand-eye coordination, court coverage and sharp wall control.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- **Wall**: one 6.1 m high \u00D7 6.1 m wide wall; the floor is marked with a **short line** and a **service line**.
- The ball must pass over the short line on serves and hits; a ball that bounces twice before the wall is dead.
- **Gloves**: padded leather hand gloves to protect the striking hand.
- Courts are versatile \u2014 a school wall with painted lines works.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Serve**: the ball must strike the wall and rebound beyond the short line.
- **Rally**: after the serve, either player may hit the ball to the wall; the opponent returns it after one bounce or a volley.
- A rally point goes to the winner; games commonly to 15 or 21.
- **Kill shot**: a hard low drive that dies after hitting the wall \u2014 the rally-ending weapon.
- Hinder rules cover body contacts during the chase for the ball.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The hand acts as a lever and striking surface; the ball is contacted with a cupped palm (the "scoop").
- The **side-arm stroke** generates power from hip and shoulder rotation into the hand.
- Footwork to the short line keeps control of the middle court.
- Angles are the game: hitting to the opponent's weak side, then moving to cover the kill zone.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hand bruises and finger sprains \u2014 gloves and taping are essential.
- Eye and facial injuries \u2014 protective eyewear in organised play.
- Ankle sprains from sharp court turns. Prevention: warm-up, proper glove fit, and court hygiene (clean, dry floor).` }
    ]
  },
  {
    slug: "jai-alai",
    title: "Jai Alai",
    altNames: "Cesta Punta",
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Jai alai is the fastest ball sport in the world \u2014 players hurl a hard rubber ball at 300 km/h or more using a long curved wicker cesta, against a three-walled fronton.",
    infobox: [
      ["Invented", "Basque Country, Spain/France"],
      ["Governing body", "FIPV (international pelota)"],
      ["Format", "Singles, doubles & triples"],
      ["Court", "Fronton \u2014 long, ~54 \u00D7 15 m front wall"],
      ["Cesta", "Curved wicker basket up to 60 cm"],
      ["Ball", "Hard rubber core, goatskin cover, ~125 g"],
      ["Olympic", "Demonstration (Pelota Vasca)"],
      ["Common injuries", "Shoulder strain, elbow strain, spectator-safety concerns"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["World Pelota Championships", "Fronton leagues (Hawaii, Basque Country)", "Pan American events"],
    keyTerms: ["Cesta", "Fronton", "Rebound point", "Volea", "Deuce"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Jai alai** (Basque for "merry festival") is a three-walled court game where players catch and throw a pelota with a long curved **cesta**. Recorded ball speeds exceed **300 km/h** \u2014 faster than any racket sport \u2014 making it the fastest ball sport and a spectacular study of projectile motion.` },
      { id: "court", title: "The fronton & equipment", module: "m4", body: `- **Fronton**: a long three-walled court (front wall, back and one side wall; the left side open) \u2014 roughly 54 \u00D7 15 m.
- **Cesta**: a curved wicker basket strapped to the hand; it catches the ball and hurls it in one motion.
- **Pelota**: a hard rubber core with a goatskin cover, ~125 g \u2014 the ball can cause serious injury, hence strict barrier rules.
- Players serve from the service line and must release before a marked foul line.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- The pelota must hit the front wall and rebound; the opponent catches it in the cesta and throws again in one continuous motion.
- The ball may not bounce twice on the floor; a rebound that lands past the point line is judged.
- Points are scored to a target (commonly 7, 9 or 15 in code variants); a game may run to deuce.
- The cesta is not used to strike the ball \u2014 only to catch and throw (the "volea" catch-throw).
- Officials call fouls on cesta hits outside the play area and dangerous throws.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The cesta lengthens the arm, building huge angular momentum \u2014 velocity comes from a long lever and full body rotation.
- The throw accelerates over a curved path; the player releases the ball from the cesta's tip at the optimal angle.
- Anticipation and court position let a player receive a 300 km/h ball \u2014 a model of reaction time and tracking skill.
- Fitness: explosive shoulder and forearm strength with exceptional hand-eye coordination.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder and elbow strain from the whipping release; hand abrasions from the cesta strap.
- Spectator safety is paramount \u2014 the fronton is screened because a live ball at speed is dangerous.
- Prevention: full warm-up, cesta-fitting, strength work, and strict barrier discipline.` }
    ]
  },
  {
    slug: "soft-tennis",
    title: "Soft Tennis",
    altNames: null,
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Soft tennis is a Japanese racquet sport played like lawn tennis but with a soft, lighter ball and a lower, faster net game \u2014 a leading school sport in Asia.",
    infobox: [
      ["Invented", "Japan (1904, from lawn tennis)"],
      ["Governing body", "ISTF"],
      ["Format", "Doubles (mainly) & singles"],
      ["Court", "Same dimensions as tennis"],
      ["Racquet", "Lighter than tennis, modern composites"],
      ["Ball", "Soft rubber, low compression"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Elbow strain, shoulder strain, knee pain"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["ISTF World Soft Tennis Championships", "Asian Games (soft tennis)", "National championships"],
    keyTerms: ["Soft ball", "Doubles-centric", "Net game", "No-ad scoring", "Two-bounce rallies"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Soft tennis** began in early 20th-century Japan as a beginner-accessible form of lawn tennis using a soft, low-pressure rubber ball. The court is the same, the tactics are familiar, but the softer ball and lighter racquet make rallies longer, gentler on the joints and ideal for mass participation and schools.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- **Court**: full tennis court \u2014 23.77 \u00D7 10.97 m (doubles 8.23 m) with the same service boxes.
- **Net**: standard tennis net (91 cm high at the centre).
- **Racquet**: lighter and stiffer than a lawn-tennis racquet.
- **Ball**: soft synthetic rubber ball, lower bounce and slower speed than hard tennis.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Points are played like tennis: one serve fault allowed, doubles format is the focus.
- Scoring commonly uses **no-ad** systems in rally codes to speed matches.
- The serve must land in the diagonal service box; the soft ball behaves predictably, rewarding placement over power.
- Doubles play dominates \u2014 teams of two cover the court with set formations.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The soft ball does not compress on shot \u2014 stroke timing is about pure racquet-head speed and follow-through.
- Longer rallies develop the **two-bounce baseline game**; net play is decisive in doubles.
- Footwork and split-steps matter more and the knees are spared by the softer surface interactions.
- Full-body kinetic chain \u2014 hips, shoulders, elbow \u2014 drives the flat, spin-light shots.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Inch-for-inch safer than hard tennis: elbow and shoulder strain remain the main overuse risks.
- Prevent with racquet fitting, stroke mechanics coaching and courtside warm-up; ankle support for hard courts.` }
    ]
  },
  {
    slug: "deck-tennis",
    title: "Deck Tennis",
    altNames: "Ring Tennis",
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Deck tennis (ring tennis) is a no-net, ring-throwing recreation played on decks and school courts \u2014 a classic P.E. activity building catching, throwing and teamwork.",
    infobox: [
      ["Invented", "USA (1920s shipboard recreation)"],
      ["Governing body", "Recreational associations"],
      ["Format", "Doubles & singles"],
      ["Court", "~10 \u00D7 5 m with a low line"],
      ["Ring", "Soft rubber ring ~20\u201325 cm"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Finger sprains, ankle twists"]
    ],
    modules: ["m2", "m3"],
    court: null,
    verified: false,
    competitions: ["Recreational deck tennis events", "School and camp tournaments"],
    keyTerms: ["Ring", "Centre line", "Catches", "Foul throw", "Rally scoring"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Deck tennis** is a gentle ring-throwing game created for ocean liners' decks. Players throw a soft rubber ring across a line or low net, and the opposing pair must catch and return it in one motion. It teaches the fundamentals of throwing, catching and spatial play without equipment cost \u2014 perfect for P.E.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- **Court**: a lane about 10 \u00D7 5 m, marked only by a centre line (or a low rope/net about 1.5 m).
- **Ring**: a soft rubber ring, ~20\u201325 cm diameter, weighing ~250 g.
- No racquets, bats or nets are required \u2014 hands only.
- Suitable for any flat surface including decks, halls and schoolyards.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- The server throws the ring over the centre line into the opponent's court.
- The receiver must catch the ring and throw it back \u2014 only one player touches it per rally (the "one-touch" rule).
- A ring that bounces on the floor is dead; catching with two hands is standard.
- Scoring: rally scoring to set targets; a ring landing out of the lane or touching the line counts against the thrower.
- In some codes the ring may be thrown up and caught by a partner before a "set-up" throw.` },
      { id: "skills", title: "Skills & development", module: "m3", body: `- Mastery of **two-handed catching** (soft hands, cushioning the impact) and **controlled throwing** (arc, accuracy, spin).
- Teamwork: the receiver starts the return from the catch position \u2014 communication decides positioning.
- It builds anticipation, reaction and spatial awareness with minimal risk \u2014 an ideal inclusive activity.` }
    ]
  },
  {
    slug: "pelota",
    title: "Basque Pelota",
    altNames: null,
    category: "racquet",
    emoji: "\u{1F3BE}",
    lede: "Basque pelota is a family of Latin wall games \u2014 played by hand, with a racquet, or with the cesta \u2014 against a fronton; its varieties gave birth to jai alai.",
    infobox: [
      ["Invented", "Basque Country (Spain/France)"],
      ["Governing body", "FIPV"],
      ["Format", "Singles, doubles & triples (specialties)"],
      ["Court", "Fronton \u2014 long or short wall versions"],
      ["Implement", "Hand, wooden bat, leather glove or cesta"],
      ["Olympic", "Demonstration sport (Paris 1900 legacy)"],
      ["Common injuries", "Hand injuries, shoulder strain, muscle strains"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["World Pelota Championships", "Fronton internationals", "National specialties leagues"],
    keyTerms: ["Fronton", "Trinquete", "Main nue", "Pala", "Cesta punta"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Basque pelota** is the umbrella name for a family of high-speed wall games played in the Basque regions of Spain and France. The common feature is a **fronton** (a playing wall) and a ball that is struck or caught-and-thrown by hand, paddle or cesta. Its fastest specialty, cesta punta, is known worldwide as jai alai.` },
      { id: "court", title: "Courts & equipment", module: "m4", body: `- **Fronton**: the open-air wall court (~11 \u00D7 30 m); **trinquete** is the indoor, walled court (~30 m).
- Specialties differ by implement:
  - **Mano (main nue)** \u2014 bare or gloved hand.
  - **Pala** \u2014 a wooden racket-like paddle.
  - **Cesta punta** \u2014 the long curved wicker basket (jai alai).
- The pelota ball is hard and fast; narrower ball types suit each specialty.` },
      { id: "rules", title: "Rules & formats", module: "m4", body: `- The ball must strike the front wall before the opponent's return; one bounce before re-return is permitted.
- Boundary lines (foul lines) mark the playable rebound zone on the floor.
- Scoring targets vary by specialty (commonly to 15 for singles, 30 for triples despite variety).
- Officials rule on line calls, fouls and dangerous play \u2014 the ball is genuinely dangerous at speed.
- Specialty selection is part of the competition \u2014 teams declare their chosen modality.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- In hand-play, the fist is the striking surface \u2014 contact point, wrist snap and follow-through determine direction.
- The pala lengthens the arm as a lever; the cesta adds a second, curved lever for the throw.
- Court geometry: hit low early shots, use the side wall in the short fronton, and read opponents' alignment at the wall.
- Elbow-high swings and snap reduce the risk of elbow strain.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hand and wrist injuries in mano \u2014 gloves and taping; shoulder strain in pala and cesta play.
- Spectator protection screens are mandatory; players wear protective glasses in some specialties.
- Prevention: graduated ball speed, proper implement fit, and warm-up targeting the shoulder and forearm.` }
    ]
  },
  /* ---------------------------------------------------------------- COMBAT */
  {
    slug: "kung-fu",
    title: "Kung Fu / Wushu",
    altNames: "Wushu",
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Kung fu (wushu) is the Chinese family of martial arts \u2014 flowing forms (taolu), bare-hand sets and weapon routines \u2014 tempered by Shaolin tradition and modern sport rules.",
    infobox: [
      ["Invented", "China (Shaolin traditions, 6th century CE)"],
      ["Governing body", "IWUF / national wushu federations"],
      ["Format", "Forms, sparring (sanda) & weapon sets"],
      ["Competition", "Taolu (judged) \u00B7 Sanda (contact)"],
      ["Olympic", "Not yet a full Olympic sport"],
      ["Common injuries", "Knee strain, ankle sprains, muscle strains; contact injuries in sanda"]
    ],
    modules: ["m1", "m2", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["World Wushu Championships", "Asian Games (wushu)", "National wushu competitions"],
    keyTerms: ["Taolu", "Sanda", "Shaolin", "Form", "Stances"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kung fu** (wushu) is the collective Chinese martial arts spanning centuries of temple and folk practice. In sport, it splits into **taolu** \u2014 choreographed solo forms of kicks, punches and stances \u2014 and **sanda**, a full-contact combat sport of strikes, kicks and throws. It is a cornerstone of martial-arts education for its discipline, balance and heritage.` },
      { id: "forms", title: "Taolu (forms) & routines", module: "m4", body: `- **Taolu competitors** perform set routines on a 14 \u00D7 8 m mat to judges.
- Routines cover **bare-hand sets** (changquan, nanquan), **short weapons** (sword, sabre) and **long weapons** (staff, spear).
- Scoring rewards difficulty (acrobatic jumps and kicks), power, fluidity, and correct stance work.
- Each routine runs 1\u20132 minutes; deductions apply for falls, hesitations and out-of-bounds steps.` },
      { id: "sanda", title: "Sanda (contact) rules", module: "m4", body: `- A ring contest of striking, kicking and **throws** \u2014 three rounds of two minutes.
- Legal targets: above the waist (gloved punches, kicks, knee strikes in some codes); throws score points.
- Scoring from corner judges \u2014 clean techniques earn points (2 for a throw, 1 for a hit/kick).
- Prohibited: strikes to the back of the head, elbows, and attacks to a fallen opponent.
- Protective gear: helmet, gloves, groin guard, mouthguard.` },
      { id: "technique", title: "Biomechanics & conditioning", module: "m2", body: `- Master stances (horse, bow, cat) develop isometric leg strength and a low centre of gravity \u2014 the platform for every technique.
- Kicks: the roundhouse and side kick use hip rotation (torque) to add force while the support leg anchors the axis.
- Weapon work is a study of levers \u2014 the staff multiplies the body's rotation at the hands.
- Training blends flexibility, plyometric jumping, core work and shadow rehearsal \u2014 an outstanding conditioning model.` },
      { id: "psychology", title: "The mental art", module: "m5", body: `- Traditional wushu cultivates concentration and body awareness ("mind leads the body").
- Taolu demands imagery \u2014 visualising each sequence before execution \u2014 and arousal control under judging pressure.
- Discipline, respect and etiquette (bowing) build the social and ethical side of martial-arts training that PE programmes value.` }
    ]
  },
  {
    slug: "muay-thai",
    title: "Muay Thai",
    altNames: "Thai Boxing",
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Muay Thai is Thailand's national combat sport \u2014 the \u2018art of eight limbs\u2019 \u2014 striking with fists, elbows, knees and shins, fought in a ring over five rounds.",
    infobox: [
      ["Invented", "Thailand (ancient battlefield roots)"],
      ["Governing body", "IFMA / national stadium authorities"],
      ["Format", "Ring combat, 5 \u00D7 3-minute rounds"],
      ["Ring", "6\u20137.3 m square canvas ring"],
      ["Strikes", "Fists, elbows, knees, shins (clinch)"],
      ["Olympic", "Recognised (IFMA), not yet Olympic"],
      ["Common injuries", "Facial cuts, nose injuries, shin bruising, knee and shoulder strain"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["IFMA World Championships", "Rajadamnern / Lumpinee Stadium events", "Thai national championships"],
    keyTerms: ["Eight limbs", "Clinch", "Teep", "Round kick", "Wai kru"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Muay Thai** uses fists, elbows, knees and shins \u2014 the "eight limbs" \u2014 making it one of the most complete striking systems in sport. Rounds are aggressive, the **clinch** (standing grappling) is central, and fighters begin with the traditional **wai kru** dance. It is Thailand's cultural combat sport and a global fitness phenomenon.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Professional bouts are **five rounds of three minutes** with two-minute rests; amateur and IFMA bouts use three rounds.
- Scoring: clean strikes, aggression, and effective clinch work are scored round-by-round (a win by knockout, decision or stoppage).
- The **clinch** allows knee strikes and throws; holding without attacking is penalised.
- Prohibited: headbutts, groin strikes, and striking a downed opponent.
- Amateur bouts require protective equipment; elbow use may be restricted.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **round kick** \u2014 shin contact driven by hip rotation and a pivoting support foot \u2014 is the signature power weapon.
- The **teep** (push kick) controls distance with the long lever of the leg.
- **Clinching**: underhooks and posture control the opponent's head, setting up knees \u2014 a study in leverage and balance.
- Elbow strikes use the elbow's hard surface as a short, sharp lever.
- Force comes from the ground up: foot pivot, hip turn, then shoulder/wrist snap at contact.` },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Pad work (thai pads) and focus mitts develop power and timing; the heavy bag builds shin and bone conditioning.
- Shadow boxing, skipping and running build aerobic capacity; clinch rounds develop isometric strength.
- Shin conditioning \u2014 gradual kicking on padded surfaces \u2014 must be progressive to avoid bone bruising.
- Recovery: ice baths, massage and Thai herbal care are traditional recovery methods.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Facial cuts and nose injuries from elbows and punches; shin bruising and periostitis from kicks.
- Knee and shoulder strain from clinch work; cauliflower-ear risk in long careers.
- Prevention: fitted mouthguard, hand-wrapping technique, headgear in amateur bouts, and proper shin-conditioning progression.` }
    ]
  },
  {
    slug: "mma",
    title: "Mixed Martial Arts",
    altNames: "MMA",
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Mixed martial arts combines striking (boxing, kickboxing) and grappling (wrestling, jiu-jitsu) in a caged or ringed contest \u2014 the fastest-growing combat sport of the modern era.",
    infobox: [
      ["Invented", "Brazil / USA (UFC rules, 1993)"],
      ["Governing body", "UFC / IMMAF (amateur)"],
      ["Format", "Ring/cage combat, 3\u20135 \u00D7 5-minute rounds"],
      ["Cage", "Octagon ~9.1 m across"],
      ["Skills", "Striking + grappling + submissions"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Facial cuts, concussions, joint injuries, cauliflower ear"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["UFC title events", "IMMAF World Championships", "Bellator / ONE Championship"],
    keyTerms: ["Octagon", "Ground-and-pound", "Submission", "Takedown", "Weight class"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**MMA** is a full-contact combat sport that fuses stand-up striking (boxing, muay thai, kickboxing) with ground grappling (wrestling, Brazilian jiu-jitsu, judo). Fights are won by knockout, submission or decision. It is the only combat sport where the fight continues on the ground \u2014 a complete martial system.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Professional bouts: three rounds of five minutes (title fights five rounds), in a cage or ring.
- Scoring via the **10-point must system** \u2014 the round winner gets 10; effective striking, grappling, control, aggression and cage/ring control are weighed.
- Fights end by: KO, technical KO (referee stoppage), submission, or unanimous/split decision.
- Prohibited: eye gouging, headbutts, groin strikes, strikes to the back of the head and DOWNED opponents, and small-joint manipulations.
- Weight classes and weigh-ins prevent dangerous mismatches (e.g. flyweight to heavyweight).` },
      { id: "skills", title: "Skills & disciplines", module: "m2", body: `- **Standing**: boxing combinations, kicks, knees and takedown setups.
- **Clinch**: wrestling and muay-thai ties controlling position.
- **Ground**: guard and mount positions; submissions like the rear-naked choke and armbar are lever-based joint and blood-restriction controls.
- Completeness decides success \u2014 a striker with poor takedown defence loses to a wrestler; striking power and grappling control must both be trained.` },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- MMA training is periodised around fight camps: skill sparring, wrestling, jiu-jitsu rounds, pad work and HIIT.
- Conditioning mixes aerobic rounds (sparring) with explosive strength and power (throws, strikes).
- Cutting weight safely under supervision is a critical skill \u2014 dangerous crash cuts are banned in pro codes.
- Recovery and injury management between camps are essential for career longevity.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Head trauma and concussion \u2014 governing-body knockout protocols and mandatory suspensions.
- Joint injuries from submissions (shoulder, elbow, knee); cauliflower ear from grappling friction.
- Prevention: mouthguards, taping, weight monitoring, sparring intensity management, and never training through head injury symptoms.` }
    ]
  },
  {
    slug: "fencing",
    title: "Fencing",
    altNames: "Foil, \u00C9p\u00E9e, Sabre",
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Fencing is the elegant art of sword duelling \u2014 three disciplines (foil, \u00E9p\u00E9e, sabre), electronic scoring and a piste of 14 m, governed by right-of-way rules.",
    infobox: [
      ["Invented", "Italy / France (modern rules)"],
      ["Governing body", "FIE"],
      ["Format", "Individual & team \u00B7 3 weapons"],
      ["Piste", "14 m \u00D7 1.5\u20132 m, with en garde lines"],
      ["Scoring", "Electronic touch, 5 & 15-touch bouts"],
      ["Olympic", "Since 1896 (men), 1924 (women)"],
      ["Common injuries", "Ankle sprains, knee injuries, hand and wrist strain"]
    ],
    modules: ["m2", "m3", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "FIE World Championships", "Grand Prix & World Cup circuits"],
    keyTerms: ["Right of way", "Lunge", "Parry", "Riposte", "Piste"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Fencing** is one of the original Olympic sports, contested as **foil** (priority, torso target), **\u00E9p\u00E9e** (any target, no priority) and **sabre** (upper body, cut and thrust). Fencers duel with lunges, parries and ripostes over a 14 m piste with lights and buzzers wired to the weapons.` },
      { id: "rules", title: "Rules & the three weapons", module: "m4", body: `- **Foil**: target torso (not arms/legs); **right of way** \u2014 the attacker's hit scores unless the defender parries and ripostes in time.
- **\u00C9p\u00E9e**: whole body valid; no right of way \u2014 simultaneous hits score for both (double touch).
- **Sabre**: cut and thrust to the upper body; right of way applies; fast, theatrical lunges dominate.
- Bouts: pool play to **5 touches**, direct elimination to **15**; electronic boxes, lights and video replay judge touches in modern events.
- Prohibited: turning the back, leaving the piste laterally, and non-holding (weapon below the guard line).` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The **lunge** \u2014 front foot drives, back leg pushes explosively, extending the sword arm \u2014 is a model kinetic-chain action (ground up through the toes).
- **Parry-riposte**: the blade deflects the attack, then the response scores before the attacker recovers.
- Footwork: advance, retreat and the **fleche** (running attack) \u2014 balance and centre-of-gravity control are constant.
- Timing and distance are the essence: the piste is a game of measured reaction distances.` },
      { id: "psychology", title: "The mental game", module: "m5", body: `- Fencing rewards **anticipation** and immediate decision-making; a well-timed feint beats a trained block.
- Arousal control keeps the hand light and the reactions fast \u2014 anxiety tightens the grip and slows the lunge.
- Tactical deception (feints, attack-counterattack patterns) is a pure psychology of misdirection \u2014 ideal for studying decision-making in PE.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Ankle and knee sprains from the lunge; hand and wrist strain from the grip and parries.
- Bruising from contacts is rare due to protective masks and jackets; concussion risk is very low but protocol still applies.
- Prevention: warm-up footwork, stretching, correct mask/jacket fit, and piste surface care.` }
    ]
  },
  {
    slug: "kabaddi-team",
    title: "Kabaddi (Combat Code)",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Kabaddi as a combat sport focuses on the raid-and-tackle duel \u2014 a seven-a-side contact game where a raider must touch defenders while chanting 'kabaddi' on one breath.",
    infobox: [
      ["Invented", "India (ancient origins)"],
      ["Governing body", "International Kabaddi Federation"],
      ["Format", "Team \u00B7 7 a side (12 squad)"],
      ["Duration", "2 \u00D7 20 minutes (senior)"],
      ["Court", "13 \u00D7 10 m \u00B7 1 m lobby"],
      ["Olympic", "Demonstration sport"],
      ["Common injuries", "Tackle-related bruises, knee and ankle injuries, muscle strains"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Kabaddi World Cup", "Asian Games (kabaddi)", "Pro Kabaddi League"],
    keyTerms: ["Raid", "Cant", "Tackle", "Lona", "Bonus line"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kabaddi** is a hybrid of tag and wrestling played on a 13 \u00D7 10 m court. One **raider** enters the defenders' half chanting "kabaddi" without taking a breath, must touch a defender and return to score; defenders form a human wall to stop and **tackle** the raider. It is India's signature contact sport.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Raid**: the raider must cross the **baulk line**, keep chanting, make a touch and return behind the midline in the same breath.
- **Points**: a successful raid scores 1 (or 2 if past the bonus line); successful tackles score 1 for the defence.
- A player who is caught is out until the team earns a **lona** (all-out) \u2014 clearing the whole team revives all its players.
- The cant must be continuous and clear \u2014 breaking it ends the raid.
- Two minutes per raid allowed; empty raids and out-of-bound defenders are penalised.` },
      { id: "skills", title: "Skills & techniques", module: "m3", body: `- **Raid skills**: the toe-touch, hand-touch and running-raider escapes use speed and body control in enemy territory.
- **Tackle skills**: the ankle-hold, waist-hold and chain tackles \u2014 coordinated multi-body defence that wins games.
- Breathing control (the cant) is a unique conditioning skill \u2014 aerobic capacity plus concentration.
- Physical demands: explosive leg power, agility, shoulder and back strength for tackles.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Bruising and mat burns from tackles; knee and ankle sprains from twisting tackles; shoulder strains.
- Prevention: mat hygiene, safe tackle technique (aim below the waist, never the neck), strength work and recovery.
- Care: R.I.C.E. for sprains; any head impact follows strict removal and assessment protocols.` }
    ]
  },
  {
    slug: "sumo",
    title: "Sumo",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Sumo is Japan's ancient heavyweight wrestling \u2014 two rikishi force each other out of the circular dohyo or to the ground, with rituals and a pure simplicity of contest.",
    infobox: [
      ["Invented", "Japan (ancient origins, 8th century)"],
      ["Governing body", "Japan Sumo Association"],
      ["Format", "Individual bouts on the dohyo"],
      ["Dohyo", "4.55 m ring of packed clay"],
      ["Bout", "Usually under 30 seconds"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Knee injuries, shoulder sprains, back strain"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Grand Sumo Tournaments (hon-basho)", "Sumo world championships (amateur)"],
    keyTerms: ["Dohyo", "Rikishi", "Basho", "Mawashi", "Yorikiri"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Sumo** is Japan's national sport: two heavily built **rikishi** in the circular **dohyo** attempt to force each other out of the ring or make any part of the opponent's body except the feet touch the ground. It is short, explosive and steeped in Shinto ritual \u2014 a complete sports-culture study.` },
      { id: "rules", title: "Rules & the bout", module: "m4", body: `- The bout starts when both rikishi place fists on the line after the referee's command.
- Win by: forcing the opponent out of the **dohyo**, or making him touch the ground with anything other than the soles (legality of throws accepted).
- Losses can also come by using an illegal move (kinjite): punching, hair-pulling, eye-gouging, throat strikes.
- Professional bouts run in a 15-day tournament (basho); the highest rank, yokozuna, holds special privileges.
- Officials: a gyoji referee (with fan), ring judges for out-of-ring decisions.` },
      { id: "biomechanics", title: "Biomechanics & training", module: "m2", body: `- The opening **tachi-ai** \u2014 explosive shoulder charge from the crouch \u2014 transfers huge momentum; the lower centre of gravity wins the clash.
- Base of support: wide stance keeps the centre of mass low \u2014 a live demonstration of balance and stability principles.
- **Torinaoshi** (pulled-down) moves use the opponent's forward momentum against him.
- Training: shiko (stomping leg raises) builds the infamous lower-body strength and stability.` },
      { id: "culture", title: "Psychology & culture", module: "m5", body: `- Sumo is inseparable from ritual: salt-throwing for purification, the pre-bout stare-down, and rank etiquette.
- Mental preparation focuses on **kiai** (fighting spirit) and calm before the explosive start \u2014 arousal peaks perfectly at the tachi-ai.
- Discipline, hierarchy and respect structure every training stable (heya); it is a prime example of sport sociology and tradition.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Knee injuries from deep squats and sudden twisting; shoulder and back strain from the tachi-ai clash.
- Weight-management issues \u2014 heart health and diabetes are career-long concerns in the heavier classes.
- Prevention: joint strength, careful weight planning, hydration, and graduated contact.` }
    ]
  },
  {
    slug: "sambo",
    title: "Sambo",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Sambo is a Russian system of self-defence and sport grappling \u2014 combining judo-style throws, wrestling and a distinctive jacket (kurtka) with leg submissions.",
    infobox: [
      ["Invented", "Soviet Union (1920s\u201330s)"],
      ["Governing body", "FIAS"],
      ["Format", "Individual \u00B7 combat & sport sambo"],
      ["Mat", "Wrestling mat, uniform kurtka"],
      ["Scoring", "Throws, pins, submissions"],
      ["Olympic", "Recognised (FIAS), not Olympic"],
      ["Common injuries", "Shoulder injuries, knee injuries, muscle strains"]
    ],
    modules: ["m2", "m4"],
    court: null,
    verified: false,
    competitions: ["World Sambo Championships", "Combat Sambo World Cup", "Continental sambo events"],
    keyTerms: ["Kurtka", "Sambo-70", "Leg lock", "Throw", "Pin"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Sambo** ("self-defence without weapons") was developed in the Soviet Union from judo, jujutsu and folk wrestling. **Sport sambo** is a jacket-grappling contest \u2014 throws, pins and submissions with a distinctive red or blue **kurtka** \u2014 while **combat sambo** adds striking and gaining hard-contested bouts.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Matches: two 3-minute rounds; win by clean throw (full point), pin (4-second control), submission, or points decision.
- **Legal submissions**: arm locks and **leg locks** on the ankle/knee area \u2014 leg locks are more extensively allowed than in judo or BJJ.
- The **kurtka** is gripped conventionally; there is no-gi variant with wrestling in some codes.
- Combat sambo adds head punches and kicks; two disciplines under one federation.
- Penalties for passive wrestling; points based on controlled throws and holds.` },
      { id: "technique", title: "Techniques & biomechanics", module: "m2", body: `- Sambo's throws use the hip and shoulder as fulcrums \u2014 kuzushi (balance breaking) into the throw is identical to judo's physics.
- Leg-lock entries win on the mat: off-balancing the standing opponent, then attacking the ankle/knee lever.
- Gripping the kurtka doubles the lever arms \u2014 control of lapel and sleeve channels force.
- Training blends an explosive standing game with technical groundwork.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Knee and shoulder injuries from throws and leg locks; mat burns and minor cuts.
- Prevention: proper breakfalls (ukemi), strength for joints, mat hygiene, and supervised submission technique.` }
    ]
  },
  {
    slug: "kendo",
    title: "Kendo",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Kendo is Japanese bamboo-sword fencing \u2014 fighters in armour land shouts, strikes and thrusts on four targets with a shinai, scored by a panel of referees.",
    infobox: [
      ["Invented", "Japan (samurai swordsmanship traditions)"],
      ["Governing body", "FIK (International Kendo Federation)"],
      ["Format", "Individual & team bouts"],
      ["Dojo mat", "11 \u00D7 11 m standard (9\u201311 m)"],
      ["Targets", "Men, kote, do, tsuki"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Bruises, ankle sprains, wrist strains"]
    ],
    modules: ["m2", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["World Kendo Championships", "All-Japan Kendo Championship", "Asian Kendo events"],
    keyTerms: ["Shinai", "Bogu", "Kiai", "Men", "Ippon"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kendo**, "the way of the sword", is Japanese fencing with bamboo swords (**shinai**) and protective armour (**bogu**). A clean, decisive strike or thrust with correct spirit, posture and follow-through scores **ippon**. It is a discipline of technique, etiquette and character \u2014 studied far beyond Japan.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Bouts to **ippon** (first to two in championship formats) on a 9\u201311 m square.
- Valid targets: **men** (top of the head), **kote** (right wrist), **do** (right torso) and **tsuki** (throat thrust).
- An ippon requires correct cut, distance, **zanshin** (a ready posture after the strike) and a **kiai** (spirit shout).
- Three referees judge synchrony \u2014 two of three flags raise for ippon; video review in major events.
- No real strikes land \u2014 the shinai is controlled so contact is safe; strikes to illegal targets are simply not counted.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- The men strike: a step-forward overhead cut \u2014 the swing is a two-hand lever pivoting through the arms and body, striking with the shinai's top third.
- **Ma-ai** (combat distance) is the fundamental distance skill \u2014 the fight is won in stepping in and out of range.
- Posture centres the body \u2014 strikes flow from the feet through the hips to the blade.
- Footwork: suri-ashi (sliding step) keeps a stable, low base.` },
      { id: "culture", title: "Etiquette & psychology", module: "m5", body: `- Kendo begins and ends with bows \u2014 **rei** — and holds the dojo as a place of mutual respect.
- **Kiai** is both a tactical shout and a psychological tool: it steadies arousal and asserts presence.
- Concentration, composure and humility are the traditional goals \u2014 the classically cited "budo spirit" that PE sociology values.` }
    ]
  },
  {
    slug: "aikido",
    title: "Aikido",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Aikido is a Japanese defensive martial art \u2014 the practitioner blends with the attacker's force, redirecting it into throws, pins and joint locks rather than meeting it with strength.",
    infobox: [
      ["Invented", "Japan (1920s-40s, Morihei Ueshiba)"],
      ["Governing body", "IAF"],
      ["Format", "Pairs practice, non-competitive"],
      ["Mat", "Dojo mats"],
      ["Principle", "Blend & redirect, not resist"],
      ["Olympic", "Not an Olympic or competitive sport"],
      ["Common injuries", "Joint stress, knee injuries, mat burns"]
    ],
    modules: ["m2", "m5"],
    court: null,
    verified: false,
    competitions: ["No formal championships \u2014 demonstration and grading based"],
    keyTerms: ["Irimi", "Tenkan", "Ukemi", "Aiki", "Breakfall"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Aikido** ("the way of harmony with the spirit") was founded by Morihei Ueshiba after World War I. Its techniques **blend with the attacker's energy**: entering (**irimi**) and turning (**tenkan**) redirect momentum into throws and pins. There are no competitions \u2014 practice is cooperative, principled and deeply psychological.` },
      { id: "principles", title: "Core principles", module: "m2", body: `- **Do not oppose force**: meet an attack by moving off the line and entering at the weak angle (irimi).
- **Tenkan**: the pivoting turn that lets the attacker's momentum carry past you \u2014 a perfect lesson in rotational inertia and balance.
- **Aiki**: harmonising body and breath so technique works without brute strength.
- **Ukemi** (breakfalls) is the safety foundation \u2014 learning to fall is the first and most important skill.
- Joint locks move within physiological range \u2014 the wrist and elbow act as levers, never as overloaded bars.` },
      { id: "training", title: "Training & practice", module: "m5", body: `- Practice is uke-nage: one partner attacks, the other responds with technique \u2014 an unbroken loop of give-and-take.
- Weapons practice (wooden jo and bokken) teaches distance and blending with implements.
- Ukemi proficiency built gradually protects the neck and shoulders — falls are practised from kneeling to standing kicks.
- Mental training: calm under attack, timing, and letting go of the ego of "winning" — a distinctive psychology of non-competition.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Wrist and elbow stress from repeated locks; knee wear from kneeling practice (seiza).
- Prevention: progressive ukemi, joint warm-ups, controlled technique at pace, and never cranking a lock beyond the partner's range.
- Care: R.I.C.E. for joint sprains; shoulder and neck protection come first in breakfall work.` }
    ]
  },
  {
    slug: "kickboxing",
    title: "Kickboxing",
    altNames: null,
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Kickboxing is a ring striking sport combining boxing punches and karate-style kicks \u2014 a disciplined contest and a juggernaut of fitness and cardio classes.",
    infobox: [
      ["Invented", "Japan / USA (1960s-70s)"],
      ["Governing body", "WAKO / WKA"],
      ["Format", "Ring combat, 3 \u00D7 2-minute rounds"],
      ["Ring", "Standard boxing ring"],
      ["Techniques", "Punches & kicks (above the waist or full)"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Facial cuts, shin bruising, hand injuries, knee strain"]
    ],
    modules: ["m2", "m3"],
    court: null,
    verified: false,
    competitions: ["WAKO World Championships", "World kickboxing title fights", "Continental events"],
    keyTerms: ["Point fighting", "Full contact", "Low kick", "Combination", "Clinch"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kickboxing** fuses Western boxing's hands with karate/taekwondo's legs. Styles range from **point fighting** (light, scored touches) to **full contact** and **low-kick** formats. Beyond the ring, kickboxing-conditioning classes are among the most popular fitness workouts on the planet.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- Standard bouts: 3 rounds of 2\u20133 minutes by style; points by clean technique, judge-scored.
- **Point fighting**: stop-clock scoring, each clear shot to a legal target is a point.
- **Full contact**: continuous rounds, kicks above the waist, throws discouraged.
- **Low-kick / K-1 rules**: leg kicks allowed, knees sometimes legal, more aggressive.
- Common fouls: low blows, elbows, headbutts, back-of-head shots; referee stoppage on 3-knockdown or injury rules.` },
      { id: "skills", title: "Skills & biomechanics", module: "m2", body: `- **Jab, cross, hook, uppercut**: the punch chain transfers force from the legs to the rotated hips.
- **Roundhouse kick**: pivot, hip swing, shin contact \u2014 the classic lever and torque model.
- Footwork and guard: slight stance, hands high, chin tucked to protect.
- Combinations and feinting (a jab sets the rear kick) build rhythm and deception.` },
      { id: "fitness", title: "Fitness & conditioning", module: "m3", body: `- Pad work, bag work and skipping train explosive power and aerobic base in equal measure.
- Shadow boxing develops technique and flow; sparring, graduated in intensity, builds timing under pressure.
- Interval (round-based) training is the method of choice \u2014 repeated rounds with short rests mimics the fight itself.
- Core and leg strength protect posture through rounds; flexibility of hips and hamstrings protects the kicks.` },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Facial cuts, nose injuries and hand knuckle injuries from punches; shin bruising from kicks.
- Prevention: proper hand wrapping, mouthguard, fitted headgear in sparring, and progressive shin conditioning.
- Any concussion symptoms require immediate removal and graded return.` }
    ]
  },
  {
    slug: "judo-ground",
    title: "Ju-Jitsu",
    altNames: "Jiu-Jitsu, BJJ",
    category: "combat",
    emoji: "\u{1F94A}",
    lede: "Ju-jitsu is the ground-fighting family of martial arts \u2014 Brazilian jiu-jitsu (BJJ) refining submissions, sweeps and positions that let a smaller person dominate a larger one.",
    infobox: [
      ["Invented", "Japan / Brazil (BJJ lineage)"],
      ["Governing body", "JJIF / IBJJF"],
      ["Format", "Individual \u00B7 gi and no-gi"],
      ["Mat", "Wrestling/BJJ mats"],
      ["Goal", "Submissions, sweeps, points control"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Joint injuries, stiff neck, mat burns, cauliflower ear"]
    ],
    modules: ["m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["IBJJF World Championships", "JJIF World Championships", "ADCC submission grappling"],
    keyTerms: ["Guard", "Mount", "Submission", "Sweep", "Takedown"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Ju-jitsu** ("the gentle art") and its Brazilian descendant **BJJ** focus on ground control: from the guard and mount positions, fighters seek **submissions** \u2014 chokes and joint locks \u2014 against resistant opponents. BJJ's principle that technique beats size made it the DNA of modern MMA ground game.` },
      { id: "positions", title: "Positions & scoring", module: "m4", body: `- **Guard**: bottom fighter wrapped legs around the opponent \u2014 a defensive and attacking base.
- **Mount**: top fighter straddling \u2014 a dominant scoring position.
- **Side control** and **back control** complete the hierarchy of dominant positions.
- Scoring in IBJJF: sweep (2), take-down (2), guard pass (3), mount/back-control (4) — control is rewarded, not just submissions.
- A match ends by submission (tap), or judges decide on points and advances.` },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Levers everywhere**: the armbar hyperextends the elbow as a first-class lever; the triangle choke uses the legs as a piston on the neck arteries.
- Chokes (rear-naked, gi collar) restrict blood flow — proper technique compresses the neck vessels without crushing the windpipe.
- **Sweeps** use the opponent's weight and momentum to invert position — fulcrums over the hips.
- Rolling (sparring) develops "mat sense" \u2014 constant proprioception and joint-awareness.` },
      { id: "training", title: "Training & competition", module: "m3", body: `- Drill-to-roll structure: isolated technique repetitions, then live positional sparring, then full rolls.
- Belt gradings recognise technical growth; competitions are age and belt matched.
- Conditioning: grip strength, core control, and cardio for long points-based rounds.
- SAFETY in training is central: tap early, respect submissions, never train a joint injury.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Joint sprains (elbow, knee, shoulder) from late taps; stiff neck from choke defence; mat burns and cauliflower ear.
- Prevention: instructor-supervised rolls, tap-early culture, mat hygiene, and ear protection in regular grapplers.
- Care: R.I.C.E. and full rest before returning to rolling \u2014 re-injury is the commonest setback.` }
    ]
  }
  ]);
})();