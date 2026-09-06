/* ==========================================================================
   THE ARENA — Extra Mind, Indigenous & Misc Articles
   Concise syllabus articles for the strategy/board sports, the traditional
   indigenous games of the Indian subcontinent, and the remaining miscellaneous
   disciplines (multisport, equestrian, motor, strength & roller). Appended to
   window.ARTICLES.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  /* ---------------------------------------------------------------- MIND */
  {
    slug: "chess",
    title: "Chess",
    altNames: "Shatranj, Checkmate game",
    category: "mind",
    emoji: "\u265F",
    lede: "Chess is a two-player abstract strategy board game of perfect information \u2014 no dice, no hidden cards, only pure thought. It is studied in physical education as a **mind sport**: a complete workout of memory, pattern recognition, concentration and competitive temperament, recognised as a medal discipline at the Asian Games.",
    infobox: [
      ["Invented", "India (chaturanga, ~6th century); modern rules in Europe"],
      ["Governing body", "FIDE"],
      ["Format", "Individual \u00B7 2 players"],
      ["Board", "64 squares, 8 \u00D7 8 grid"],
      ["Pieces", "16 per side \u2014 6 piece types"],
      ["Time controls", "Classical \u00B7 Rapid \u00B7 Blitz \u00B7 Bullet"],
      ["Olympic", "Asian Games medal sport since 2022"]
    ],
    modules: ["m1", "m5", "m4"],
    court: null,
    verified: false,
    competitions: ["World Chess Championship", "Chess Olympiad", "Candidates Tournament", "Asian Games chess"],
    keyTerms: ["Checkmate", "Check", "Stalemate", "Castling", "En passant", "Promotion", "Elo rating"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Chess** is contested on an 8 \u00D7 8 board where two armies of sixteen pieces fight to **checkmate** the enemy king. Each piece moves by its own rule \u2014 pawns forward, rooks in lines, bishops on diagonals, knights in L-shapes, the queen combining rook and bishop \u2014 and the game is won by attack, defence and long-term planning. It is the classic test of **decision-making under pressure**.` },
      { id: "rules", title: "Rules, notation & time", module: "m4", body: `- **Goal**: checkmate \u2014 attack the king so it cannot escape. A king in attack is *in check*; players may not leave their king in check.
- **Draws**: stalemate (no legal move, not in check), threefold repetition, the fifty-move rule and agreement.
- **Special moves**: castling (king+rook together once), en passant (pawn capture in passing), and promotion (a pawn reaching the last rank becomes any piece).
- **Algebraic notation** (e.g., Nf3, e4) records every move and is the universal language of study.
- **Time controls**: classical (60+ min), rapid (10\u201360 min), blitz (3\u201310 min) and bullet (< 3 min).`
      },
      { id: "technique", title: "Tactics & strategy", module: "m2", body: `- **Tactics** are short forcing sequences: forks, pins, skewers, discovered attacks and sacrifices \u2014 the "physics" of the board, learned by pattern recognition.
- **Strategy** is long-term planning: control of the centre, piece development, king safety and pawn structure.
- **Calculation** is the mental "look-ahead" \u2014 comparing candidate moves several plies deep and pruning with heuristics.
- **Opening-midgame-endgame**: stage awareness shapes where energy is spent; endgames rely on exact technique rather than invention.
- In sport-science terms chess trains **working memory**, attention span and cognitive flexibility.`
      },
      { id: "training", title: "Training & preparation", module: "m3", body: `- **Tactics drills** (puzzles) build pattern library; **endgame study** builds precision; **opening preparation** sharpens the first 10\u201315 moves.
- **Physical fitness matters**: top players train aerobic capacity because nervous-system fatigue degrades calculation over a 5\u20137 hour game.
- **Posture and table habits**: a clean sitting position, hydration and micro-breaks at the board.
- Periodisation before majors: more rest in the final days, opening review in the early phase.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Postural strain**: neck, upper-back and lower-back tension from hours at the board \u2014 prevent with mobility and breaks.
- **Eye strain** from screens and clocks during online/blitz play \u2014 the 20-20-20 rule helps.
- **Stress and sleep loss** before and during tournaments \u2014 a classic overtraining picture; monitor and rest between rounds.
- Care: regular stretching, strength work for the trunk, and a strict tournament sleep routine.` },
    ]
  },
  {
    slug: "go",
    title: "Go",
    altNames: "Weiqi, Baduk, Igo",
    category: "mind",
    emoji: "\u2687",
    lede: "Go is an ancient abstract board game of surrounding territory, played on a 19\u00D719 grid with black and white stones. Rules are almost absurdly simple \u2014 yet it produces deeper strategy than any chess-like game, making it a complete study in intuition, whole-board thinking and patience.",
    infobox: [
      ["Invented", "China (\u224850 BCE; classical form by 2nd century CE)"],
      ["Governing body", "IGF (International Go Federation)"],
      ["Format", "Individual \u00B7 2 players"],
      ["Board", "19 \u00D7 19 (13 \u00D7 13 and 9 \u00D7 9 for teaching)"],
      ["Stones", "Black & white, ~180 each"],
      ["Scoring", "Territory + captured stones (Chinese / Japanese rules)"],
      ["Komi", "White receives 5.5\u20137.5 points to balance the first move"]
    ],
    modules: ["m1", "m5", "m4"],
    court: null,
    verified: false,
    competitions: ["World Go Championship (Ing Cup)", "LG Cup", "Asian Games go (2022 onward)"],
    keyTerms: ["Territory", "Capture", "Atari", "Life & death", "Komi", "Ko", "Joseki"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Players alternately place a stone on an intersection of the 19 \u00D7 19 grid. Stones of one colour **surround territory**; groups that lose their last liberty are captured. The player with more territory plus captures (Black adjusted by the *komi* bonus) wins. The rules are learnable in minutes yet the strategy has taken centuries to map.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Placing**: a stone goes on an empty intersection and never moves again; groups of adjacent same-colour stones share liberties.
- **Capture**: a stone or group with zero liberties is removed immediately.
- **Ko rule**: the board may not immediately repeat a previous position \u2014 a player cannot instantly recapture what would undo the last move.
- **Passing & scoring**: when both pass, the position is scored \u2014 territory, captured stones and komi (Chinese: area scoring; Japanese: territory scoring).
- **Life & death**: settled groups are *alive* (two eyes) and cannot be captured; unsettled shapes are fought out.`
      },
      { id: "technique", title: "Strategy & technique", module: "m2", body: `- **Whole-board balance**: global influence vs local profit is the central tension \u2014 the "shape" of the game, not a single line of calculation.
- **Opening (fuseki)**: corner and side frameworks; the three-corner-capture pattern forms the early board.
- **Middle game (chuban)**: invasion, reduction and fights \u2014 reading races and eye spaces.
- **Endgame (yose)**: precise small moves in the corners and edges that count to the point.
- Go trains **intuition, spatial reasoning and calm assessment**, studied in cognition research as the classic "depth vs breadth" thinking problem.`
      },
      { id: "training", title: "Training & study", module: "m3", body: `- **Problems (tsumego)**: life-and-death puzzles sharpen reading \u2014 the equivalent of chess tactics.
- **Playing games**: slow games develop awareness; fast online games build pattern tempo.
- **Review**: analysing your own games (and professional games) is the highest-yield study.
- Timing, sleep and focus habits mirror chess \u2014 a 2\u20134 hour tournament game taxes executive function heavily.`
      },
      { id: "injuries", title: "Physical & health care", module: "m6", body: `- Prolonged sitting and screen time in online Go \u2014 posture breaks and stretching.
- Tournament stress, sleep loss and flu-season exposure in round-robin formats.
- Care: the standard rest, nutrition and trunk-strength advice of any mind sport.` },
    ]
  },
  {
    slug: "draughts",
    title: "Draughts / Checkers",
    altNames: "Checkers, Damas",
    category: "mind",
    emoji: "\u26C0",
    lede: "Draughts is the diagonal-capture board game played on the dark squares of a chessboard \u2014 humble to learn, ferociously deep to master. English draughts on 8\u00D78 and the international (10\u00D710, flying kings) form are both competitive mind sports with world titles.",
    infobox: [
      ["Invented", "Ancient Egypt; modern French rules (12th century onward)"],
      ["Governing body", "FMJD (for international draughts)"],
      ["Format", "Individual \u00B7 2 players"],
      ["Board", "8 \u00D7 8 (English) \u00B7 10 \u00D7 10 (international)"],
      ["Men", "12 per side (English) \u00B7 20 per side (international)"],
      ["Movement", "Diagonal forward; kings move both ways"],
      ["Scoring", "Win by capturing all men or blocking the opponent"]
    ],
    modules: ["m1", "m5", "m4"],
    court: null,
    verified: false,
    competitions: ["FMJD World Draughts Championship", "English Draughts Championship", "Mind Sports Olympiad draughts"],
    keyTerms: ["Men", "Kings", "Capture", "Flying kings", "Level (huffing)", "Double corner"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `The board is used for its dark squares; each side places its men on the dark squares and moves **diagonally forward**. A man reaching the far rank is **crowned king** and may move backward as well. Capture is mandatory and a player who takes all the opponent's men \u2014 or blocks every move \u2014 wins.` },
      { id: "rules", title: "Rules of play", module: "m4", body: `- **Move**: one diagonal step forward to an empty dark square.
- **Capture**: jump an adjacent enemy man into the empty square beyond, removing the jumped man; capture is **compulsory** when available.
- **Multiple captures**: chains of jumps on one turn; the player must continue until no jump remains.
- **Kings**: move and capture along the diagonal in both directions (international play grants *flying kings* \u2014 sliding any distance).
- **Huff rule (English)**: depending on the code, a missed compulsory capture can cost the man (once common in "huff-and-capture" play).`
      },
      { id: "technique", title: "Strategy & technique", module: "m2", body: `- **Opening**: central control and quick development; the "double corner" (the club's home squares) is safest for kings.
- **Force moves**: trade-down tactics \u2014 swapping men to create passed pieces or capturing advantages.
- **Tempo & opposition**: in endgames, the player to move is often at a disadvantage *zugzwang* \u2014 any move worsens the position.
- Reading ahead: because capture is forced, long exchange sequences are exactly calculable \u2014 a training ground in sequential reasoning.`
      },
      { id: "training", title: "Training & improvement", module: "m3", body: `- Tactical puzzles (two- and three-move captures), endgame studies and opening books.
- Playing and reviewing games, both over the board and online.
- Functional fitness for tournament stamina: sleep, hydration and focused concentration blocks \u2014 the mind-sport training core.`
      },
      { id: "injuries", title: "Physical & health care", module: "m6", body: `- Long-tournament posture and fatigue management; breaks, stretching and screen hygiene for online play.
- Eye and neck strain from board/screen work \u2014 the shared care plan of all strategy sports.` },
    ]
  },
  {
    slug: "carrom",
    title: "Carrom",
    altNames: "Karrom, Strike-guild board game",
    category: "mind",
    emoji: "\u{1F3B2}",
    lede: "Carrom is a tabletop board game of flicking discs into corner pockets on a polished wooden board \u2014 a blend of eye-hand coordination, spin physics and tactics. It is a hugely popular family and competitive sport in India, played in singles and doubles with the *queen* as the pivotal piece.",
    infobox: [
      ["Invented", "India (19th century) \u2014 developed from a striker board tradition"],
      ["Governing body", "ICF (International Carrom Federation)"],
      ["Format", "Singles & doubles"],
      ["Board", "~74 cm square, polished plywood (4 corner pockets)"],
      ["Pieces", "9 white + 9 black + 1 red queen + 1 striker"],
      ["Goal", "Pocket all your pieces, then the queen, before the opponent"],
      ["Olympic", "Demonstration / non-Olympic; IOC-recognised federation"]
    ],
    modules: ["m1", "m2", "m5"],
    court: null,
    verified: false,
    competitions: ["World Carrom Championship", "Asian Carrom Championship", "National Carrom Championship (India)"],
    keyTerms: ["Queen", "Striker", "Pocketing", "Fork", "Backshot", "Break shot", "Cover (super) cover"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Carrom is played between two (singles) or four (doubles) players around a square board. Players flick a circular **striker** to pocket their own pieces \u2014 white for one player/side, black for the other \u2014 and finally the red **queen** (which must be *covered* by pocketing one of your own pieces). Whoever pockets all of their pieces and covers the queen first wins that round.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Break**: the striker is flicked from the baseline; the hand is within the board's line.
- **Pocketing**: a piece pocketed on a legal shot is yours; an illegal shot (striker pocketed, piece flying off) forfeits the points \u2014 "fouling" gives the striker back and sometimes a piece returns.
- **Queen rules**: the queen may be pocketed and then must be covered (a piece pocketed on the next legal turn); pocketing it without cover gives penalty.
- **Score**: each opponent piece left on the board scores 1 point for the winner each round; matches are played to a target.
- **Officials**: a referee/scorer in competition; board and strikers are standardised for international play.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Grip & flick**: the index finger flicks the striker with a snap \u2014 the wrist extends as a lever, transferring impulse to the striker.
- **Spin (Karela)**: back-spin "breaks" the striker short; top-spin runs through the pieces; side-spin bends the line \u2014 angular momentum controls the table.
- **Aim & double contact**: hitting the edge just below the target piece (the carrom "cut") lets a single strike pocket or cluster pieces.
- **Power control**: distance from pocket and board friction (powdered board) decide strike force \u2014 the smoothest strokes are the fastest.
- Focus tests: carrom builds fine motor control, steady hand and tactical clearing.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Table hours: break drills (spread), pocket angles, queen-cover sequences and return-of-piece scenarios.
- Hand stability: wrist-strength and fine-control exercises; dry-finger practice for consistent release.
- Match practice in doubles teaches read of partner and turn management; mental rehearsal for long sets.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Finger strain and wrist overuse from prolonged flicking \u2014 rest and gentle wrist mobility.
- Neck/back posture at the board and eye fatigue; take regular breaks.
- Care: stretching, posture, and controlled table time to avoid overuse of the flicking hand.` },
    ]
  },
  {
    slug: "esports",
    title: "Esports",
    altNames: "Competitive Gaming, Pro Gaming",
    category: "mind",
    emoji: "\u{1F3AE}",
    lede: "Esports is organised, competitive video-gaming \u2014 professional leagues and tournaments across strategy, shooter, fighting and racing titles. It blends **reaction speed, decision-making, teamwork and physiological load**, and is now an official Asian Games medal sport studied as a sports-science discipline in its own right.",
    infobox: [
      ["Invented", "USA / South Korea (1980s arcades; 1990s leagues)"],
      ["Governing body", "GEF / IeSF"],
      ["Format", "Team & individual"],
      ["Genres", "MOBA, FPS, Fighting, Racing, RTS, Sports sims"],
      ["Scoring", "Match outcomes + season standings"],
      ["Revenue", "Sponsorship \u00B7 prize pools \u00B7 broadcasting"],
      ["Olympic", "Asian Games medals (2022 onward); Olympic Esports events"]
    ],
    modules: ["m1", "m2", "m3", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["The International (Dota 2)", "League of Legends Worlds", "IEM / CS majors", "Asian Games esports"],
    keyTerms: ["APM", "Reaction time", "Meta", "Ping/latency", "Scrim", "Cooldown management", "Burnout"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Esports** turns video games into spectator sport: organised teams train, analyse and compete in tournaments streamed worldwide. Titles range from strategy-heavy (Dota 2, League of Legends) and tactical shooters (Counter-Strike, Valorant) to fighting and racing games. For PHE students it is a serious arena of **skill acquisition, physiology and psychology**.` },
      { id: "rules", title: "Competition framework", module: "m4", body: `- Each title has its own **match rules**: win conditions, map rules, bans and time limits \u2014 the analogue of a sport's laws.
- **Season systems**: league stages, playoffs and international majors; points and placements decide brackets.
- **Equipment**: standardised PCs/consoles, low-latency networks, refereed tournaments with anti-cheat software.
- **Officiating**: admins, referees and broadcast casters; rules on pauses, technical issues and conduct.
- **Age rules**: minimum player ages vary by title and jurisdiction.`
      },
      { id: "technique", title: "Skill & performance demands", module: "m2", body: `- **Motor skill**: mouse/keyboard (or controller) precision; elite APM (actions per minute) between 300\u2013600 with accuracies above 90%.
- **Reaction time**: visual-cue-to-action windows of 150\u2013300 ms in fast titles \u2014 trainable via deliberate practice.
- **Decision-making**: map awareness, economy and cooldown management; parses of opponents and the "meta".
- **Teamwork**: communication protocols, role specialisation and read of live situations.
- **Ergonomics**: posture, monitor height and hand position are performance factors, not comfort options.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Scrims** (practice matches) and **VOD review** (match analysis) \u2014 the esport equivalent of video and film analysis.
- **Aim trainers and workshop drills** for motor skill; speed-of-response exercises.
- **Physical training matters**: cardio, wrists/hands strength, neck and back conditioning and sleep discipline.
- Periodisation around majors; defined rest days to prevent burnout and travel fatigue.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Computers' wrist syndrome**: carpal tunnel and ulnar-nerve strain \u2014 key for ergonomic setup and break rules.
- **Neck and back pain** from long sedentary sessions; **eye strain**; and **burnout / performance anxiety** as core mental-health issues.
- Care: stretch units, adjustable desks, hydration, sleep tracking, and psychological support \u2014 proactive, not reactive.` },
    ]
  },
  /* ----------------------------------------------------------- INDIGENOUS */
  {
    slug: "gilli-danda",
    title: "Gilli-Danda",
    altNames: "Viti Dandu, Gulli Danda, Dandi Biyo",
    category: "indigenous",
    emoji: "\u{1F3AF}",
    lede: "Gilli-danda is India's classic stick-and-pin folk game \u2014 a small tapered **gilli** is struck into the air with a **danda** stick and the flight distance scored. It is the ancestral sister game of cricket and baseball, treasured in PHE for teaching striking mechanics with the simplest possible equipment.",
    infobox: [
      ["Invented", "India (ancient); variants across Asia and Africa"],
      ["Governing body", "None (traditional folk sport)"],
      ["Format", "Individual & small-team variants"],
      ["Implements", "Gilli (tapered pin ~5\u20138 cm) + danda (stick ~45\u201390 cm)"],
      ["Arena", "Open ground with a marked striking circle"],
      ["Scoring", "Distance of the gilli's flight in danda-lengths"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["Village festivals & mela competitions", "Regional state games (demonstration)"],
    keyTerms: ["Gilli", "Danda", "Tip-cat", "Striking circle", "Scoring arc", "Fielding tip"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `A player rests the **gilli** (a short pin with a tapered tip) on the ground and flicks it upward by striking one tip with the **danda**, then hits it again in the air as far as possible. Opponents try to catch or field the falling gilli; the striker keeps playing and scores based on how far the gilli is measured to have flown, usually in danda-lengths.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **The face-off**: the striker places the gilli in the circle; the opponents stand for fielding.
- **Flick & strike**: one tip of the gilli is struck to pop it up; the striker's second hit sends it flying.
- **Catch out**: if a fielder catches the gilli cleanly, the striker is out.
- **Scoring**: the flight is measured in **danda-lengths** (or paces/steps) \u2014 exactly like a field-game distance measurement.
- **Turn system**: rounds continue until the striker is out; the highest total wins; teams can rotate into fielding.
- Rules are local \u2014 a feature of folk sport \u2014 so official-standard play is rare.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Flick**: a precise tap of the gilli tip, judging its taper to pop it vertically \u2014 a fine-touch skill.
- **Second hit**: timing the downward arc of the gilli to meet it with the full face of the danda \u2014 a repeat of the batting strike pattern.
- **Power & direction**: the swing is a lever through the shoulder and wrists; follow-through gives distance; trajectory can aim over fielders.
- **Skills link**: the mechanics transfer directly to cricket and baseball \u2014 reading ball flight, swing path and sweet spot.`
      },
      { id: "training", title: "Training & practice", module: "m3", body: `- Solo drills: accuracy flicks and repeated high-strike control; distance hitting against a target line.
- Pair work: striker vs fielders \u2014 pressure practice and clean-fielding drills.
- Progressive distance: lengthen the scoring arc to build power with control.`
      },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hand and finger knocks from mis-timed strikes; head/face risk from the flying gilli \u2014 fielders need distance discipline.
- Sprained ankles on uneven village grounds.
- Care: safe striking circle clearance, soft ground, and first aid for the classic "gilli to the shin".` },
    ]
  },
  {
    slug: "malla-khamb",
    title: "Malla Khamb",
    altNames: "Mallakhamb, Pole Gymnastics",
    category: "indigenous",
    emoji: "\u{1F938}",
    lede: "Malla khamb is India's traditional pole gymnastics \u2014 wrestlers and gymnasts perform yogic postures and strength exercises on a vertical wooden pole, rope or hanging pole. It demands extraordinary strength, flexibility and balance, and is a flagship indigenous activity for B.P.Ed curricula.",
    infobox: [
      ["Invented", "India (12th-century Maharashtra wrestling tradition)"],
      ["Governing body", "Mallakhamb Federation of India (MFI)"],
      ["Format", "Individual & pairs"],
      ["Disciplines", "Pole (fixed), Rope, Hanging pole"],
      ["Pole", "Wooden, ~50 cm circumference, 2\u20132.6 m tall"],
      ["Technique", "Yogic asanas + wrestling grips + strength holds"],
      ["Olympic", "None (national & international federation events)"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Mallakhamb Federation nationals", "Khelo India performance events", "International mallakhamb meets"],
    keyTerms: ["Pole", "Rope", "Asanas", "Grip", "Lock", "Inversion", "Support hold"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Malla khamb** (literally "wrestling pole") evolved in Maharashtra's *akhadas* to prepare wrestlers \u2014 balance, grip and body control aboveground transferred to mat work. Today it is organised into **pole**, **rope** and **hanging pole** events judged on the precision of posture, flow between positions and strength holds.` },
      { id: "rules", title: "Formats & judging", module: "m4", body: `- **Pole events**: competitor mounts a fixed greased-free pole; performed postures and holds are marked.
- **Rope events**: a cotton rope is climbed and wrapped for poses; hanging pole adds swing and balance.
- **Judging**: posture alignment, hold time, fluid transitions, difficulty and rhythm \u2014 competition styles vary by federation.
- **Safety codes**: mats around the pole and spotters for high elements.
- **Attire**: shorts and minimal clothing so the skin grips the pole; no hard footwear.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Grips & locks**: the pole is held by thigh/ankle grips, arm locks and the whole-body curl \u2014 friction and leverage do the work.
- **Strength holds**: the *plank* on the pole, deep sit-outs, and the classic one-arm hangs develop isometric force.
- **Yogic asanas** (lotus, wheel, inversions) performed on the pole build flexibility and balance.
- **Inversion**: upside-down poses test vestibular control and core stability \u2014 angular orientation under load.
- Physics: every hold is a study of equilibrium, friction and the line of gravity \u2014 pure kinesiology.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Foundation: wrestling mat work, gymnastics floor strength, and yoga flexibility sessions.
- Progressions: two-person assists, short holds to timed full holds, then connected routines.
- Grip and forearm conditioning, core stability work and inversion tolerance drills.
- Periodised: skill months before competition, taper in show week.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Wrist, elbow and shoulder strain from repeated weight-bearing grips; callus and skin tears on friction points.
- Back and hip flexibility injuries if asanas are forced beyond range.
- Fall risk \u2014 matting, spotters and controlled progressions are non-negotiable.
- Care: joint-strength work, range-building gradually, and blister care for the grip surface.` },
    ]
  },
  {
    slug: "yubi-lakpi",
    title: "Yubi Lakpi",
    altNames: "Coconut Rugby",
    category: "indigenous",
    emoji: "\u{1F965}",
    lede: "Yubi lakpi is Manipur's traditional game of rugby played with a greased, coconut-sized ball on a 45-metre pitch. Its name literally means *coconut (yubi) snatching (lakpi)* \u2014 a fast, contact-rich indigenous sport linked to Manipuri royal wrestling tradition.",
    infobox: [
      ["Invented", "Manipur, India (ancient royal festival sport)"],
      ["Governing body", "Manipur state associations"],
      ["Format", "Team \u00B7 (typically) 7 a side, contact"],
      ["Field", "~45 m \u00D7 18 m with goal lines"],
      ["Object", "A greased coconut ball"],
      ["Scoring", "Cross the goal line or place (V-shaped goal area) for points"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m4"],
    court: null,
    verified: false,
    competitions: ["Manipur state indigenous games festivals (Yaoshang / festivals)"],
    keyTerms: ["Yubi", "Lakpi", "V-goal", "Greased ball", "Snatching", "Pushing winner"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Yubi lakpi** is played between two sides who try to carry the greased **yubi** across the opponent's goal line and place it in the goal area for a score \u2014 close contact, rapid snatching and rugby-style carrying. Played around Manipur's traditional festivals, it is a living piece of indigenous sporting culture.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Field**: roughly 45 m long by 18 m wide, with a scoring goal line and a marked goal zone (often V-shaped, called the *v-goal*).
- **Ball**: a coconut, oiled/greased to make it hard to hold \u2014 the "slip" is the skill challenge.
- **Play**: players wrestle, push and snatch to advance the ball \u2014 no deliberate injury; play continues in short bursts.
- **Scoring**: the ball carried across the line and placed in the goal area scores; the goal-post top may decide a tie (the *pushing winner*).
- **Officials**: a referee manages the contact; scores are counted over agreed rounds.
- Rules vary by festival \u2014 part of the sport's living tradition.`
      },
      { id: "technique", title: "Technique & skills", module: "m2", body: `- **Snatching**: quick hand-speed and grip on the oily ball \u2014 the fumble costs possession.
- **Carrying**: low, protected carries; spins and hip-swerves to shed grabs; a short pass for support players.
- **Contact**: shoulder-driven pushes to clear the line \u2014 balance, low centre of gravity and leg drive.
- Transfer skills match rugby and wrestling \u2014 body torque, grip strength and evasion.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Body-weight strength (push-ups, pulls, core), sprint-stop drills and agility work.
- Grip and ball-handling practice with a wet/greased ball substitute.
- Contact technique drills \u2014 safe falling and pushing postures before full games.`
      },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Bruising, shoulder and wrist knocks from contact; ankles on grass; occasional head knocks.
- Care: soft ground, contact-technique coaching, first-aid cover and rest between bouts.` },
    ]
  },
  {
    slug: "kabaddi-beach",
    title: "Beach Kabaddi",
    altNames: "Sand Kabaddi",
    category: "indigenous",
    emoji: "\u{1F3D6}",
    lede: "Beach kabaddi is the four-a-side sand variant of kabaddi \u2014 the same raid-and-tackle rhythm on a softer, gripping surface that slows play and rewards technique over brute force. It is a hugely popular school-level and Khelo India format.",
    infobox: [
      ["Invented", "India (modern adaptation of mat kabaddi)"],
      ["Governing body", "AKFI (Amateur Kabaddi Federation of India)"],
      ["Format", "Team \u00B7 4 a side"],
      ["Surface", "Cleared sand court with marked lines"],
      ["Court", "Reduced dimensions vs mat kabaddi"],
      ["Scoring", "Raid points, bonus and all-out as in kabaddi"],
      ["Olympic", "None (common in beach/indigenous festivals)"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Beach kabaddi at beach games and state meets", "Khelo India school formats"],
    keyTerms: ["Raid", "Cant", "Tag", "Tackle", "All-out", "Slippery footing"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Beach kabaddi** keeps kabaddi's core \u2014 a raider chants the cant, tags or tackles defenders and returns \u2014 but on **soft sand** with four players per side and reduced court dimensions. The sand changes everything: speed drops, falls are softer, and clever footwork earns the points.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Teams**: 4 players on court per side (+ reserves) in most beach formats.
- **Court**: a sand court with mid-line, baulk line and bonus line drawn as in standard kabaddi, just scaled down.
- **Raid**: the raider must cross the baulk line and resume the cant after touching; return over the mid-line scores.
- **Scoring**: 1 point per defender touched, bonus points, and an **all-out** when a side is reduced to zero on court.
- **Duration**: short halves with sand-tiring play \u2014 formats run 2 \u00D7 12\u201315 min depending on organiser.
- Officials and the whistle/flag signals mirror mat kabaddi.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Footing**: a slightly bent stance spreads weight on sand; short, strong steps beat explosive sprints.
- **Raiding**: the cant's rhythm is slower on soft ground \u2014 timing the baulk crossing carefully; toe-and-flick tags from the ankles.
- **Tackling**: defenders sink and use body blocks; a chain-two-man tackle is the classic reply to a strong raider.
- Energy cost is higher per step on sand \u2014 good raid efficiency conserves the raider.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Sand work**: running, ladder and shuttle drills on sand to build transferable strength and balance.
- Raid-and-tackle drills in pairs; full courts for all-out pressure.
- Ankle and calf conditioning for the unstable surface; hydration-first outdoor sessions.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Ankle sprains and calf strain from the shifting surface \u2014 the beach kabaddi signature.
- Heat and sun exposure in outdoor beach venues \u2014 hydration and shade planning.
- R.I.C.E. for sprains; gradual sand adaptation prevents overuse.` },
    ]
  },
  {
    slug: "kabaddi-women",
    title: "Women's Kabaddi",
    altNames: "Mahila Kabaddi",
    category: "indigenous",
    emoji: "\u{1F46F}",
    lede: "Women's kabaddi is the women's code of India's indigenous tag-and-tackle sport \u2014 played with identical laws on a slightly smaller court with a marginally reduced raid window. It is a senior international discipline at the Asian Games and a growing professional circuit.",
    infobox: [
      ["Invented", "India"],
      ["Governing body", "IKF / AKFI"],
      ["Format", "Team \u00B7 7 a side"],
      ["Court", "12 m \u00D7 8 m (women's dimensions)"],
      ["Raid time", "30 seconds per raid (slightly shorter in some codes)"],
      ["Scoring", "Raid, bonus, tackle and all-out points"],
      ["Olympic", "Demonstration sport; Asian Games medal event"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Asian Games kabaddi (women)", "Women's Kabaddi World Cup", "Pro Kabaddi women's seasons"],
    keyTerms: ["Raid", "Cant", "Tackle", "Ankle touch", "All-out", "Catch strategy"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Women's kabaddi** follows the international laws of the game on a 12 m \u00D7 8 m court, with the same raiding, tackling, bonus and all-out scoring as the men's game. Its rise \u2014 from village ground to Asian Games podium \u2014 makes it a headline case study in women's sport development in India.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Court**: 12 m \u00D7 8 m with midline, baulk, bonus line, lobbies and end zones.
- **Raid**: one raider enters, chants the cant continuously, touches or tackles within the raid time and crosses back over the midline.
- **Defence**: up to all seven defenders form a chain; touching a defender when far from the midline is a defensive move.
- **Points**: 1 per touch, bonus crossing the bonus line with 6+ defenders, 2 for a super-tackle (3 or fewer defenders), and an **all-out** bonus.
- **Duration**: shorter halves than men's in many codes (2 \u00D7 15 min women's standard in several federations).
- Officials: referee, two umpires, scorer and timekeeper.`
      },
      { id: "technique", title: "Technique & strategies", module: "m2", body: `- **Raiding**: ankle touches and toe flick tags from a controlled crouch; break-the-chain runs against tangled defence.
- **Tackling**: two-person chain and the thigh/waist block; defenders read the raider's foot cycle to time the grab.
- **Team tactics**: trapping raids (the "do-or-die" throw in) and using lobbies to pull raiders out of position.
- Fitness: the sport rewards explosive dashes and quick recovery between raids \u2014 pure interval conditioning.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Raid drills**: speed off the midline to the baulk, touch-and-return timing with a stopwatch.
- **Tackle drills**: padded tackle practice, chain drills and low-block positioning.
- **S&C**: jump squats, plyometrics, core work and short sprints; yoga for flexibility.
- **Periodisation**: off-season strength, pre-season technique, season performance sharpening.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Knee and ankle sprains from lunging tackles; hip and lower-back strain; neck knocks in tackles.
- Care: strength training around knees, tape and orthotic support, and immediate R.I.C.E. for acute sprains.` },
    ]
  },
  {
    slug: "kabbadi-circle",
    title: "Circle Kabaddi",
    altNames: "Punjabi Kabaddi, Suit Kabaddi",
    category: "indigenous",
    emoji: "\u{1F7E2}",
    lede: "Circle kabaddi is the Punjab variant \u2014 kabaddi inside a circular arena with far fewer anti-grappling restrictions, making it the most physically assertive and wrestling-heavy form of the sport. Played on packed earth at village fairs, it is the Graeco-Roman of kabaddi.",
    infobox: [
      ["Invented", "Punjab, India (tradition of Indian wrestling akharas)"],
      ["Governing body", "KKFI (Punjab; state & village associations)"],
      ["Format", "Team \u00B7 5\u20136 players per side"],
      ["Surface", "Packed earth or hard-mud circle"],
      ["Circle", "Roughly a 5-metre radius circle (scaled by code)"],
      ["Style", "High-contact \u2014 throws, holds, and leg kicks allowed"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["Punjab circle-kabaddi tournaments", "Village mechrup (wrestling festivals)"],
    keyTerms: ["Circle", "Raider", "Defender", "Throw", "Akhara style", "Squeeze (belt) tackle"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `In **circle kabaddi** the playing area is a circle rather than a rectangle, and the rules permit far more wrestling \u2014 holds below the belt, throws and takedowns \u2014 which is why it is sometimes called "kabaddi with akhara wrestling". The atmosphere of village fairs and the purely physical contest make it a beloved indigenous sport.` },
      { id: "rules", title: "Rules & style", module: "m4", body: `- **Area**: a circular ground (commonly a diameter of ~10 m scaled by code) with the raider's start point on the circumference.
- **Teams**: laxer team sizes than mat kabaddi \u2014 commonly 5 or 6 per side, with no fixed lanes.
- **Raid**: the raider enters the circle and must return; the *cant* is shorter and less insisted upon than in mat kabaddi in many codes.
- **Contact**: throws, reverse throws, belt/waist grabs and leg holds are legal \u2014 a wrestling contact set.
- **Scoring**: escape, touch and throw all score; rules on points and fouls vary by tournament code.
- Officials manage safety and the points; no mat, no lanes \u2014 pure open-ground play.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Raiding**: a wide, low stance to withstand a thrown takedown; losing the circle's axis is losing the point.
- **Defence**: the *faha* grip (tight waist lock) and leg-hook takedowns \u2014 the akhara throwing vocabulary.
- **Weight transfer**: throws and escapes work on the balance line of gravity \u2014 classic kinesiological analysis.
- The open circle has no walls to pin an attacker, so footwork and hip escape are everything.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Wrestling-training base: partner drills for throws, escapes and grip fighting.
- Core and hip-strength work, neck strengthening for takedowns, grip endurance.
- Scrum-style conditioning on packed surfaces and technical repetitions at low intensity.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Strained ankles and knees on hard ground; shoulder injuries from throws; neck and spinal knock risk in takedowns.
- Care: soft-packed surfaces, strict officiating on illegal throws, neck/back strengthening, immediate first aid.` },
    ]
  },
  {
    slug: "tag-game",
    title: "Prisoner Tag",
    altNames: "Chain Tag, Prisoners' Base",
    category: "indigenous",
    emoji: "\u{1F45F}",
    lede: "Prisoner tag is the classic school playground pursuit game \u2014 a team chase where players caught are 'prisoned' in a marked zone and must be freed by a teammate. It is a cornerstone P.E. activity for agility, teamwork and safe running games.",
    infobox: [
      ["Invented", "Global playground tradition"],
      ["Governing body", "None (school recreation)"],
      ["Format", "Team \u00B7 pursuit and evasion"],
      ["Court", "Drawn playground court with base and prison zones"],
      ["Aim", "Free prisoners by tagging; capture opponents by tagging"],
      ["Scoring", "Prisoned players decide the round; last team with free players wins"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m4"],
    court: null,
    verified: false,
    competitions: ["School P.E. leagues & sports-day events"],
    keyTerms: ["Base", "Prison", "Tag", "Evasion", "Faint (feint)", "Chain"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Two teams defend their **base** while trying to capture the opponents by tagging. A tagged player walks to the **prison zone**; a free teammate can run in un-tagged, tag the prisoner and both sprint back to safety. Small rules spread across the world's playgrounds \u2014 chain tag, lock-pick variants, and prison-escape timing \u2014 make it endlessly adaptable.` },
      { id: "rules", title: "Rules & court", module: "m4", body: `- **Court**: a rectangular playground with a base line at each end and a prison zone beside (or behind) each base.
- **Start**: players start in their base; on the signal, both sides may cross the centre.
- **Capturing**: touching an opponent, provided you are safe (in base or not tagged) \u2014 send them to prison.
- **Prison**: captured players stand in the prison zone; a teammate touches them and both may run for home.
- **Winning**: capture all opponents, or agree a timed round with fewer prisoners.
- **Officials**: a P.E. teacher or student referee enforces boundaries.`
      },
      { id: "technique", title: "Skills & tactics", module: "m2", body: `- **Evasion**: change of pace, jinks, feints and back-tracking \u2014 agility and decision speed.
- **Team tactics**: one fast runner dummies while a second sneaks the prison rescue; teams guard the prison mouth.
- **Observation**: reading opponents' paths and timing \u2014 anticipation is the skill that wins.
- The whole game is applied **reaction and change-of-direction** work \u2014 a perfect warm-up unit.`
      },
      { id: "training", title: "Training & progression", module: "m3", body: `- Progressions: small-area tag to full court; add a ball or an extra prison to raise complexity.
- Drill sequences: straight-line sprints, shuttle runs and ladder agility before the game.
- Team roles and shouting cues (the "now") for coordinated rescues.`
      },
      { id: "injuries", title: "Safety & care", module: "m6", body: `- Collisions in the prison rush; slips and ankle rolls on playground surfaces.
- Care: clear boundaries, flat safe surfaces, marble-free playgrounds, and a soft feet-first landing emphasis.
- First-aid basics and rest on any knock.` },
    ]
  },
  /* ---------------------------------------------------------------- MISC */
  {
    slug: "triathlon",
    title: "Triathlon",
    altNames: null,
    category: "misc",
    emoji: "\u{1F3CA}",
    lede: "Triathlon chains **swimming, cycling and running** into one continuous race, with transitions on the clock. The Olympic distance (1.5 km swim, 40 km bike, 10 km run) is the flagship format, and triathlon is peerless study for energy systems, pacing and multi-discipline training.",
    infobox: [
      ["Invented", "France / USA (1970s)"],
      ["Governing body", "World Triathlon"],
      ["Format", "Swim \u00B7 Bike \u00B7 Run \u2014 individual"],
      ["Olympic distance", "1.5 km swim + 40 km bike + 10 km run"],
      ["Sprint", "750 m + 20 km + 5 km"],
      ["Ironman", "3.8 km + 180 km + 42.2 km"],
      ["Transitions", "T1 & T2 count towards time"],
      ["Olympic", "Since 2000 (Sydney)"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games triathlon / mixed relay", "Ironman World Championship (Kona)", "World Triathlon Series"],
    keyTerms: ["Transition", "Drafting", "Wetsuit legality", "Brick session", "Negative split", "Bonk"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Triathletes race the three legs back-to-back and are timed wall-clock from start to finish \u2014 the **transitions** (T1 swim-to-bike, T2 bike-to-run) are part of the race. Format variations sprint, Olympic, 70.3 and Ironman length set the training map. It is the ultimate test of **distribution of effort across three sports**.` },
      { id: "rules", title: "Rules & formats", module: "m4", body: `- **Start**: a mass swim start (or time-trial start) from water or beach.
- **Bike leg**: road bikes or tri bars; **drafting is banned** in most non-drafting events (a 3-bike gap rule), and allowing drafting earned penalties.
- **Draft-legal racing**: in Olympic and elite short-course racing, drafting in the pack is allowed for spectacle.
- **Transitions**: gear in dedicated zone, designated mount/dismount lines; passing lanes enforced.
- **Run leg**: the finish comes on foot; no outside assistance except authorised aid stations.
- Penalties: yellow card = time penalty, red = disqualification; headgear mandatory until the run.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Swim**: a relaxed position-low crawl with breathing every 2\u20133 strokes \u2014 drafting behind others' wash saves energy.
- **Bike**: aerodynamic position (bars low), cadence economy and wind-controlled pacing.
- **Run**: "running tired" \u2014 the brick effect: the bike's muscle-burning load makes the run the deciding leg.
- **Transitions**: rehearsed setup \u2014 rack, suit strip, shoes \u2014 saves a minute of race time.
- **Negatives**: even or negative-split pacing beats fly-and-die, especially in the run.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Bricks**: bike-to-run sessions \u2014 the specificity that makes race-day feel familiar.
- **Periodisation**: endurance base (swim/bike volume) in the off-season, intensity blocks, race-specific taper.
- **Strength**: core and glute work, shoulder conditioning for swimming, and calf/achilles loading for the run.
- **Fuel practice**: race nutrition is trained \u2014 gels, drinks and hydration are rehearsed, never experimented with on race day.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Swimmer's shoulder**, runner's knee and **Achilles** strain \u2014 the three-sport overload mix.
- **Bonk (glycogen depletion)** and heat illness in long events.
- Care: bridge across sports with strength work, careful run-load progression after bike volume, and strict hydration/nutrition planning.` },
    ]
  },
  {
    slug: "duathlon",
    title: "Duathlon",
    altNames: null,
    category: "misc",
    emoji: "\u{1F6B4}",
    lede: "Duathlon is the run-bike-run multisport \u2014 the same pacing and transition chess as triathlon minus the swim. The standard format (10 km run, 40 km bike, 5 km run) makes it an accessible gateway to triathlon training and a fierce sport in its own right.",
    infobox: [
      ["Invented", "USA (1970s\u201380s)"],
      ["Governing body", "World Triathlon"],
      ["Format", "Run \u00B7 Bike \u00B7 Run"],
      ["Standard distance", "10 km run + 40 km bike + 5 km run"],
      ["Sprint", "5 km + 20 km + 2.5 km"],
      ["Aim", "Fastest total run-bike-run with transitions"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["World Duathlon Championships", "Powerman duathlon series"],
    keyTerms: ["Run-bike-run", "Brick", "Drafting", "Transition", "Pacing"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Duathlon scores the fastest combined run-bike-run time. Its genius is simplicity: no swim venue needed, so the sport runs on any bike route and running course. The format teaches the same **transition and pacing science** as triathlon with a lower technical barrier.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Order**: run leg 1, cycle leg, run leg 2 \u2014 with two transitions (T1, T2) timed.
- **Distances**: standard (10-40-5), sprint (5-20-2.5) and long (10-60-10) variants.
- **Cycling rules**: drafting rules, helmet on at all times, mount/dismount lines and passing etiquette apply as in triathlon.
- **Aid stations** at authorised points; outside assistance and drafting penalties mirror triathlon.
- **Finish**: the final run ends on the line; results are purely time-based.`
      },
      { id: "technique", title: "Technique & tactics", module: "m2", body: `- **Leg-1 run pacing**: roughly race pace rather than all-out, preserving the bike legs.
- **Bike leg after running**: cadence discipline and aero position matter more than raw power.
- **The final run**: the deciding leg \u2014 a negative-split mindset ("catch them late").
- **Transitions**: the same rehearsed choreography as triathlon \u2014 shoes, helmet, mount line.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Running volume plus cycling volume plus the **brick** that binds them.
- Interval work once per week per discipline; long steady sessions build the base.
- Downhill/technical bike skills and run-off-the-bike practice every 10 days or so.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Runner's knee, Achilles strain and cycling back/neck tension.
- Care: strength work at the glutes/calves, bike-fit review, and controlled run-load progression.` },
    ]
  },
  {
    slug: "modern-pentathlon",
    title: "Modern Pentathlon",
    altNames: "Five-event pentathlon",
    category: "misc",
    emoji: "\u2694",
    lede: "Modern pentathlon is the five-discipline event created to echo a soldier's day: **fencing, swimming, horse riding (show jumping) and a final combined laser-run** (running with shooting). Each event converts to points, and the total decides the podium \u2014 a complete case study in multi-skill sport.",
    infobox: [
      ["Invented", "France (Pierre de Coubertin, 1912)"],
      ["Governing body", "UIPM"],
      ["Disciplines", "Fencing \u00B7 200 m swim \u00B7 show jumping \u00B7 laser-run"],
      ["Laser-run", "3200 m run + 4 shooting rounds"],
      ["Scoring", "Points across all five events"],
      ["Format", "Individual \u00B7 single day in Olympics"],
      ["Olympic", "Since 1912 (women since 2000)"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic modern pentathlon", "UIPM World Championships", "Pentathlon World Cup"],
    keyTerms: ["Laser-run", "Bonus round", "Riding draw", "Fencing pool", "Point tables", "Handicap start"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Modern pentathlon's five parts are all scored into a single points table: fencing bouts, a 200 m swim, a show-jumping round on a drawn horse, and a final **laser-run** \u2014 run, shoot (laser pistol on five targets), run \u2014 with a handicap start based on the running rank order. The event always comes down to the last run.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Fencing**: pool bouts to 1 touch; each win worth points (along with the bonus round).
- **Swim**: 200 m freestyle \u2014 time converted to points.
- **Riding**: a horse is drawn by lot; clear round over a 12-jump course within the time in hand.
- **Laser-run**: running with pauses at the shooting range (four rounds of 5 targets, maximum 50 s), then the finish.
- **Final start**: the accumulated points set a time handicap \u2014 the leader starts first and the first across the line wins.
- **UIPM modernisation**: plans to replace riding with an obstacle discipline make the sport a lesson in rule evolution.`
      },
      { id: "technique", title: "Technique across events", module: "m2", body: `- **Fencing**: explosive footwork and the one-touch lunge \u2014 a strike or parry-riposte wins the bout.
- **Swim**: a controlled 200 m pace keyed to your points target; even splits avoid fatigue carry-over.
- **Riding**: calm, balanced seat on an unfamiliar horse \u2014 the psychological and technical test above all.
- **Laser-run**: steady running with deep-breath drops for the shooting breaks \u2014 a live study of arousal control.
- **Points economy**: understanding the conversion tables tells an athlete where to spend effort.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Microcycles per event: fencing sparring, swim speed, riding clinics, and running with shooting drills.
- **Combined drills**: run-shoot-run transitions are trained separately from each single discipline.
- Functional strength, core and neck work, plus mental rehearsal of the drawn-horse scenario.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Fencing wrist/ankle knocks, swimmer's shoulder, running shin problems, and riding falls.
- Care: discipline-specific conditioning, sharp grounds/equipment checks, and rest between the five events on the single day.` },
    ]
  },
  {
    slug: "equestrian",
    title: "Equestrian",
    altNames: "Dressage, Show Jumping, Eventing",
    category: "misc",
    emoji: "\u{1F40E}",
    lede: "Equestrian sports stage horse-and-rider teams across **dressage, show jumping and eventing** \u2014 the only Olympic sport in which the athlete competes with another living being. It joins rider biomechanics, animal psychology and uncompromising technique in one discipline.",
    infobox: [
      ["Invented", "Ancient Greece / European cavalry traditions"],
      ["Governing body", "FEI"],
      ["Disciplines", "Dressage \u00B7 Show Jumping \u00B7 Eventing"],
      ["Format", "Individual & team"],
      ["Pairing", "Horse + rider \u2014 one team"],
      ["Olympic", "Since 1900 (dressage/jumping); eventing 1912"],
      ["Levels", "Introductory to Grand Prix"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["Olympic equestrian", "FEI World Equestrian Games", "Breeding & national derbies"],
    keyTerms: ["Dressage", "Show jumping", "Eventing", "Aids", "Piaffe", "Oxer", "Time fault"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Dressage** is a graded test of precision gait \u2014 the horse performing movements on invisible aids. **Show jumping** rides a clear round over fences at speed. **Eventing** combines days of dressage, cross-country and jumping into the sport's triathlon. All three are scored for both elegance and athleticism, and the horse-rider pair is judged as one team.` },
      { id: "rules", title: "Rules & judging", module: "m4", body: `- **Dressage**: a set test of figures and gaits, scored on correctness, harmony and impulsion; Grand Prix adds piaffe, passage and pirouette.
- **Show jumping**: jumping fences with rails that fall; a clear round plus speed; faults (knock-down, refusal, time) decide.
- **Eventing**: dressage day, cross-country (a timed course over solid fences \u2014 mandatory completion), then final show jumping.
- **Welfare**: whip use, weight and veterinary checks; falling or unsafe riding can eliminate \u2014 the horse's wellbeing is part of the laws.
- **Officials**: judges and ground jury; the pair must complete within time limits and sets.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Aids**: leg, seat, rein and voice \u2014 the language the rider 'speaks' to the horse; independent hands are the core skill.
- **The seat**: a supple hip, pelvis and lower-back posture absorb the horse's movement \u2014 rider balance is the crux.
- **Jumping technique**: a correct canter approach, seeing-distance and a quiet release over each fence.
- **Application of force**: subtle weight transfer and leg pressure become the channel for coordination.
- Pair training: rhythm, contact and collection \u2014 biomechanics applied to a four-legged partner.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Rider: core and lower-body strength, independent-hand drills and mental rehearsal; the rider trains like an athlete.
- Horse: progressive schooling, fitness through hacking and interval work, and cross-training.
- Lunge lessons, flatwork grids and course walks \u2014 a full trade-school of combination training.
- Recovery: horses and riders both need structured rest and feed/sleep management.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Rider falls: concussion, wrist and collarbone injuries \u2014 helmets and body protectors are mandatory in jumping disciplines.
- Back and knee strain from the riding posture and stirrup load.
- Horse injuries: veterinary care, farriery and surface selection are part of the sport's medicine.
- Care: helmet-first culture, fitted equipment and immediate removal on any fall.` },
    ]
  },
  {
    slug: "polo",
    title: "Polo",
    altNames: "Hockey on Horseback",
    category: "misc",
    emoji: "\u{1F43E}",
    lede: "Polo is the ancient horseback ball sport \u2014 players on ponies drive a small ball through goal posts with long-handled mallets at a full gallop. From Central Asian origins to the modern chukka game, polo remains the storied 'sport of kings'.",
    infobox: [
      ["Invented", "Central Asia / Persia; modern code from India & England"],
      ["Governing body", "FIP"],
      ["Format", "Team \u00B7 4 chukkas (7.5 min each) + ponies"],
      ["Field", "Up to 275 m \u00D7 145 m (300 yd \u00D7 160 yd)"],
      ["Goal", "Two goal posts; goals struck by mallet"],
      ["Chukkas", "4 to 6 per match"],
      ["Olympic", "1900, 1908, 1920, 1924, 1936 (demonstration afterwards)"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["World Polo Championship", "U.S. Open Polo Championship", "Coronation Cup (India)"],
    keyTerms: ["Chukka", "Mallet", "Pony", "Hooking", "Offside line", "Handicap"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Two teams of four gallop up and down a field the size of nine football pitches, striking a ~130 g plastic ball. Players are graded by **handicap** (a skill marking system), each chukka rotates ponies, and the team with more goals at the final bell wins. It is ride, strike and strategy all at once.` },
      { id: "rules", title: "Rules & the game", module: "m4", body: `- **Field**: generally 275 m \u00D7 145 m, with a **line of scrimmage** rule regulating the right of way.
- **Chukkas**: seven-and-a-half-minute periods; a mount change between each; usually 4\u20136 per match.
- **Mallet & play**: players ride with one hand on the rein, the other swinging the mallet; hooking an opponent's mallet is allowed.
- **Offside/line**: the line of the ball determines the right of way \u2014 crossing it creates fouls.
- **Scoring & time**: goals plus the two-chukka 'nerve' rules; safety checks on mounts and riders.
- **Handicap**: each player + up to two goals, balancing teams.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Riding skills**: a secure seat at speed, one-handed rein control and weight transfer through turns.
- **Mallet swing**: a long pendulum strike from the shoulder \u2014 timing it to a galloping pony is the skill.
- **Ball-stick control while riding**: the near-offside safe-zone rule makes position as important as swing.
- **Pony management**: a fresh pony's acceleration \u2014 the match-pony system IS the conditioning strategy.
- Tactics: team lines, man-marking and 'covering the goalmouth' at a gallop.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Rider: core/leg strength, flexibility and reaction training on and off the horse.
- Practice: mounted stick-and-ball drills, chukka scrimmages and dressage-like flatwork for the ponies.
- Pony conditioning: gallop interval work and cone-work; both horse and rider train on the same periodisation.
- Mental: reading the line of the ball at speed is a trained perception skill.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Falls and pile-ups: shoulder, wrist and collarbone injuries, plus concussion \u2014 helmets are mandatory.
- Mallet knocks to hand and head; riding-strain on knees and lower back.
- Care: fitted protective kit, fall-and-paddock-first policies, and veterinary care for ponies.` },
    ]
  },
  {
    slug: "polocrosse",
    title: "Polocrosse",
    altNames: null,
    category: "misc",
    emoji: "\u{1F94D}",
    lede: "Polocrosse is a fast stick-and-ball sport on horseback \u2014 a hybrid of polo and lacrosse in which riders carry the ball in a long-necked racket and score between goal posts. It is a hugely accessible equestrian team sport popular in Australia and the USA.",
    infobox: [
      ["Invented", "Australia / USA (1930s\u201340s)"],
      ["Governing body", "IPA (International Polocrosse Association)"],
      ["Format", "Team \u00B7 3-rider sections (6 per team)"],
      ["Field", "~60 m \u00D7 140 m with goal lines"],
      ["Racket", "Long-necked net racket for pick-up and throw"],
      ["Scoring", "Goals scored between posts from a shooting zone"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m4"],
    court: null,
    verified: false,
    competitions: ["World Polocrosse Championship", "Australian & US national championships"],
    keyTerms: ["Racket", "Section", "Goal zone", "Pick-up", "Throw", "Tackling"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `In polocrosse the ball is caught, carried and thrown with the racket rather than struck closed-handed like a mallet sport. Teams field **sections** of three riders who rotate, and goals are scored from a marked zone in front of the posts. It keeps polo's speed with a lighter, family-friendlier contact scene.` },
      { id: "rules", title: "Rules & play", module: "m4", body: `- **Field**: roughly 60 m by 140 m, with goal lines and a shooting zone before each pair of posts.
- **Ball control**: players pick up, throw and catch with the racket; no hitting of ball or pony in play.
- **Tackling**: a legal tackle is a controlled racket-vs-racket or body block \u2014 no dangerous contact with horse or rider.
- **Sections**: three riders per team in a section (_attack, midfield, defence_ roles); sections rotate by chukka.
- **Scoring**: goals from the shooting zone between the posts; the team with more goals wins.
- Officials manage the zones and safety; mounting and dismounting areas are strictly controlled.`
      },
      { id: "technique", title: "Technique & skills", module: "m2", body: `- **The racket**: a long neck gives reach for both pick-ups and open throws \u2014 wrist snap generates ball speed.
- **Catch-and-throw rhythm**: two-handed control while steering the pony with the rein hand.
- **Position**: occupying the goalmouth and the shooting zone decides scoring chances more than sheer speed.
- Balance and core work transfer directly from polo: one-hand riding with a full swing.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Racket drills: static throws, moving pick-ups, zone shooting; scrimmages build match rhythm.
- Rider strength and balance work; pony stamina training for section rotations.
- Safety drills for tackles and controlled stops before competition.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Fall injuries (shoulder, wrist, head \u2014 helmet mandatory) and mallet/ball knocks.
- Racket swing shoulder strain and riding-posture back pain.
- Care: protective kit, safe-tackle coaching, and immediate fall review.` },
    ]
  },
  {
    slug: "roller-skating",
    title: "Roller Skating",
    altNames: "Inline Skating, Quad Skating",
    category: "misc",
    emoji: "\u{1F6FC}",
    lede: "Roller skating covers speed, artistic, hockey and freestyle disciplines on **quad and inline** skates. From the rink's dance floor to the marathon road race, it trains balance, glide and edge control \u2014 an Olympic age-group staple and a superb P.E. skill sport.",
    infobox: [
      ["Invented", "Belgium / USA (18th-19th century)"],
      ["Governing body", "World Skate"],
      ["Disciplines", "Speed \u00B7 Artistic \u00B7 Hockey \u00B7 Freestyle slalom"],
      ["Skates", "Quad (4 wheels) \u00B7 Inline (line of wheels)"],
      ["Format", "Individual & team"],
      ["Events", "Rink & road speed; figure/free artistic"],
      ["Olympic", "Youth Olympics 2018+; senior status evolving"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["World Skate Games", "World Roller Speed Championships", "National rink championships"],
    keyTerms: ["Edge", "Stride", "Crossover", "In step", "Camouflage braking", "Cone (slalom)"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Speed skaters race on rinks and roads; artistic skaters perform figures and free routines; roller hockey is played on wheels; freestyle slalom weaves through cones. The common core is **edge control and glide** \u2014 the same physics as ice skating but on wheels and concrete.` },
      { id: "rules", title: "Formats & rules", module: "m4", body: `- **Speed**: track and road events from sprints (300 m) to marathons; relay and elimination (points) races.
- **Artistic**: a figures panel (obligatory patterns) and free/style programmes scored on element difficulty and execution.
- **Hockey**: five-aside rink hockey on inline/quad skates with standard stick-and-goal rules.
- **Freestyle slalom**: cone-waving sequences scored on speed, style and technical precision.
- **Safety rules**: helmets in racing/junior events, knee/elbow pads on rinks, and no-skate zones enforced.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **The stride**: a lateral push through the inside edge with full hip and knee extension \u2014 the skating engine.
- **Glide**: a stable stacked stance lets gravity and momentum carry \u2014 balance over speed.
- **Crossovers**: crossing a foot over the other to navigate corners with acceleration.
- **Braking**: T-stop (trailing foot scrapes), plow stop and heel brake \u2014 every skater's first mastery.
- Artistic spins and jumps mirror ice figure skating mechanics but with different wheel friction and no blade edge.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Off-skate: cycling and squat/glute circuits mirror the skating lunge; balance boards for the ankles.
- On-skate: technique drills, pace lines, and short sprints for race endurance.
- World-class training mixes 60% skating volume with gym, plyo and mobility work.
- Recovery: soft rinks, thorough cooldown rolling of the calves and glutes.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- **Wrist fractures** on falls \u2014 wrist guards are essential; ankle sprains from edge slips.
- Knee contusions and quad strain in speed; skin burns (road rash) in race falls.
- Care: full protective gear, fall-relaxation training, and R.I.C.E. + graded return for ankle injuries.` },
    ]
  },
  {
    slug: "roller-hockey",
    title: "Roller Hockey",
    altNames: "Inline Hockey, Quad Hockey",
    category: "misc",
    emoji: "\u{1F3D2}",
    lede: "Roller hockey is hockey on wheels \u2014 played with a puck (inline) or ball (quad) on a rink. It keeps ice hockey's speed and stick skills while the skates move on lacquered floor, and it flourishes in countries without ice.",
    infobox: [
      ["Invented", "USA / England (inline & quad traditions)"],
      ["Governing body", "World Skate"],
      ["Format", "Team \u00B7 5 a side (inline) \u00B7 5\u20136 (quad)"],
      ["Surface", "Wood/lacquered concrete rink with boards"],
      ["Equipment", "Sticks, puck or ball, protective gear"],
      ["Aim", "Shoot the puck/ball into the goal"],
      ["Olympic", "None (Youth Olympics roller disciplines)"]
    ],
    modules: ["m1", "m4", "m3"],
    court: null,
    verified: false,
    competitions: ["World Roller Hockey Championships", "FIRS/WORLD SKATE leagues", "National inline leagues"],
    keyTerms: ["Rink", "Puck", "Stickhandling", "Slap shot", "Offside (inline)", "Power play"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Inline roller hockey is played five-a-side with a puck and offside zones like ice hockey; quad roller hockey uses a ball with its own chukka rules, popular in Europe and Latin America. Both share skating, passing, shooting and checking discipline on a board-enclosed rink.` },
      { id: "rules", title: "Rules & formats", module: "m4", body: `- **Inline hockey**: 5 skaters (including an optional goaltender) plus substitutes; three periods of typically 15 min; offside and icing adapted from ice hockey.
- **Quad hockey**: 5 a side, ball on court, playing periods scored like a normal game of hockey.
- **Faults**: penalties \u2014 minor (2 min), major and expulsion; the penalised team plays short \u2014 the power play.
- **Gear**: helmets, gloves, shin guards and pads mandatory; goaltenders in full kit.
- Officials: referee, linesmen and a scorekeeper manage the game.`
      },
      { id: "technique", title: "Technique & skills", module: "m2", body: `- **Skating under control**: stops, turns and backward skating while stickhandling \u2014 the sport's foundation.
- **Stickhandling**: puck/ball control in tight traffic; shield-the-puck body position.
- **Shooting**: wrist and slap shots; screens and tips in front of the goal.
- **Defence**: gap control, stick-on-puck and quick transition to offence.
- Team systems: forecheck, breakout and zone cover \u2014 a full mini-hockey systems set.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- On-rink drills: skating agility lines, passing circuits and small-area games.
- Off-rink: lower-body power (squats, lateral lunges), stick-handling with a ball/roller board.
- Goaltender-specific reaction and lateral slides; team scrimmage as the main conditioner.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Slap-shot wrist/thumb knocks, puck bruises, and collisions near the boards.
- Skate-fall ankle sprains and knee contact injuries.
- Care: full protective kit, board-padded rinks, mandatory helmets, and R.I.C.E. + concussion protocol on contact to the head.` },
    ]
  },
  {
    slug: "roller-derby",
    title: "Roller Derby",
    altNames: null,
    category: "misc",
    emoji: "\u{1F3C3}",
    lede: "Roller derby is a full-contact, predominantly women's roller-skating sport raced on an oval \u2014 **jammers** skate laps against **blockers** to score, with hard shoulder-to-hip hits legal. It is a unique fusion of speed, strength and strategy with a fiercely DIY sporting culture.",
    infobox: [
      ["Invented", "USA (1930s exhibition derbies; 2000s revival)"],
      ["Governing body", "WFTDA / MRDA"],
      ["Format", "Team \u00B7 oval track, 5 per side on track"],
      ["Track", "Flat or banked oval"],
      ["Scoring", "Jammer lapping blockers scores 1 point per pass"],
      ["Contact", "Shoulder-to-hip contact among blockers"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["WFTDA Championships", "MRDA Championships", "National & international tournament series"],
    keyTerms: ["Jammer", "Blocker", "Pivot", "Jam", "Passing", "Pack", "Explosion"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Two teams field **jammers** (star helmets) and **blockers** (who form a moving pack). On each **jam** (2 minutes), jammers work through the pack; the first through becomes the lead jammer who can call the jam off. Every lapped blocker past the jammer's own pack scores a point.` },
      { id: "rules", title: "Rules & scoring", module: "m4", body: `- **Track**: a flat oval (racing line marked) or banked track; the pack is the moving 'wall' of blockers.
- **Jam**: 2-minute scoring period; play restarts with the start whistle between jams.
- **Contact**: legal hits are shoulder-to-hip (or to the upper body) against opposing blockers; hits to the back, head and neck are fouls.
- **Passing & scoring**: a jammer who laps opposing blockers scores 1 point per opposing blocker lapped.
- **Penalties**: fouled contact, cutting the track, and egregious hits bring jammer or blocker penalties.
- **Officials**: referees, line and jam timers, penalty trackers \u2014 a heavily officiated contact sport.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Skating mechanics**: low, powerful strides; the derby stance (knees bent, chest up) for balance in traffic.
- **Blocking**: shoulder drive from a strong core; the "explosion" \u2014 a short, sharp rise to bump \u2014 and hip checks.
- **Jammer skills**: speed, weaving through the pack and the athletic leap over a dropped blocker.
- **Pack dynamics**: controlling the pack's pace and shape is the strategy board underneath the contact.
- All of it: a mobile study of force, balance and momentum in a protective-sports setting.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Skating skills: stops, transfers, transitions and plow stops; drills for pack-lap tactics.
- Contact drills: shoulder-block practice wearing full guard kit, on soft surfaces first.
- Strength: squats, lunges, core work; conditioning through repeated 2-minute jams \u2014 intervals.
- Recovery culture: hybrid leagues put rest and volunteer safety at the heart of training.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Knee and ankle injuries from contact falls; wrist fractures on hard rinks; bruised hips from blocks.
- Concussion from falls or hits \u2014 mandatory removal and return protocols; dental guards are standard.
- Care: full protective padding (helmet, pads, guards), safe-surface rinks, and a strong medics culture.` },
    ]
  },
  {
    slug: "powerlifting",
    title: "Powerlifting",
    altNames: null,
    category: "misc",
    emoji: "\u{1F3CB}",
    lede: "Powerlifting contests the **squat, bench press and deadlift** \u2014 the three raw-strength lifts \u2014 with one maximal attempt in each counted. It is the competitive sports version of 'how strong are you really?', ranked in bodyweight classes.",
    infobox: [
      ["Invented", "USA / UK (1950s\u201360s)"],
      ["Governing body", "IPF (and world-wide federations)"],
      ["Format", "Individual \u00B7 bodyweight classes"],
      ["Lifts", "Squat \u00B7 Bench press \u00B7 Deadlift"],
      ["Attempts", "3 attempts per lift; best of each summed"],
      ["Platform", "Rack with plates, collars and judges"],
      ["Olympic", "None (demonstration at times)"]
    ],
    modules: ["m1", "m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["IPF World Championships", "Raw/Classic nationals", "Commonwealth powerlifting"],
    keyTerms: ["Squat", "Bench press", "Deadlift", "Attempt", "Depth rule", "Lockout", "Total"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `A lifter's **total** is their best squat + best bench + best deadlift. Each lift has strict technique rules \u2014 squat depth, bench pause, deadlift lockout \u2014 judged by three referees with a white-green light panel. The sport divides into *equipped* (suit/shirt/wraps) and *raw* (minimal gear) disciplines.` },
      { id: "rules", title: "Rules & judging", module: "m4", body: `- **Squat**: bar across shoulders, eccentric to a depth where the hip crease passes the knee top, then stand up; press command given by the centre referee.
- **Bench press**: bar lowered to the chest under control, held, pressed to a full lockout.
- **Deadlift**: bar lifted from the floor to straight-standing with locked knees and shoulders back; no support other than the grip.
- **Attempts**: three tries per lift in ascending order; a missed attempt counts; the best scores.
- **Dress**: singlet, belt, wrist wraps and allowed knee sleeves in raw meets; **weigh-in** 2 hours before.
- Light system: three referees \u2014 two whites = good lift.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **Squat**: a mid-foot stance, brace and tight lats \u2014 the bar path stays over the mid-foot across the range.
- **Bench**: leg drive, scapular retraction and a straight bar path from chest contact to lockout.
- **Deadlift**: a strong setup \u2014 hips, shoulders and the bar in one line; the pull is a hip-driven, knee-extending wedge.
- **Breathing & bracing**: the Valsalva manoeuvre and belt pressure protect the spine and support the total.
- **Peak strength**: every lift is the culmination of force, technique and attempts management.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Linear-periodised blocks: hypertrophy, strength, peaking; deload weeks between.
- Assistance work: front squat, rows, presses and pin lifts for weak points.
- Attempt-selection strategy: choose openers you can always hit; distribution is a skill.
- Recovery: sleep, nutrition and joint-care \u2014 the sport rewards consistency over heroics.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Lower-back and knee strains from heavy loads; shoulder and elbow stress in the bench; wrist strain.
- Bursa and tendon niggles on high volume.
- Care: technique-first coaching, gradual loading, sled/dumbbell auxiliary work, physio review of any persistent pain.` },
    ]
  },
  {
    slug: "bodybuilding",
    title: "Bodybuilding",
    altNames: null,
    category: "misc",
    emoji: "\u{1F4AA}",
    lede: "Bodybuilding is the judged physique sport \u2014 competitors present muscle size, symmetry and conditioning through a set routine of poses. It is the analytical endpoint of hypertrophy training, contest dieting and presentation.",
    infobox: [
      ["Invented", "Germany / UK (19th\u201320th century physique shows)"],
      ["Governing body", "IFBB (Pro League & national federations)"],
      ["Format", "Individual \u00B7 weight classes & categories"],
      ["Judged on", "Muscularity \u00B7 Symmetry \u00B7 Conditioning \u00B7 Posing"],
      ["Routine", "Compulsory poses + free pose routine"],
      ["Contest prep", "Progressive dieting and peak week"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Mr. Olympia", "Arnold Classic", "IFBB pro shows & nationals"],
    keyTerms: ["Hypertrophy", "Definition", "Symmetry", "Vacuum", "Peak week", "Mandatories"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Bodybuilders build muscle through years of progressive resistance training, then **contest diet** to low body-fat levels so the muscle is visible, and present it through a routine of **compulsory poses** (front double biceps, the lat spread, ab-thigh, etc.) and a choreographed free routine to music. Judging is aesthetic and comparative.` },
      { id: "rules", title: "Rules & judging", module: "m4", body: `- **Categories**: men's and women's bodybuilding plus divisions of physique, classic and wellness \u2014 each with class rules and weight classes.
- **The score**: judges rank on *muscularity*, *symmetry/proportion*, *conditioning* and *presentation/posing*.
- **Mandatory poses**: front double biceps, front lat spread, side chest, back double biceps, back lat spread, side triceps, abdominals-and-thigh.
- **Routine**: a free posing sequence to music within the time limit.
- **Weigh-in & stage rules**: checks on suits, oil and posing (over-posing can be marked down).
- Officials: a panel of five-plus judges; the winner is the strongest all-round presentation.`
      },
      { id: "technique", title: "The craft & science", module: "m2", body: `- **Stimulus**: hypertrophy comes from volume, tension and progressive overload \u2014 6\u201312 rep sets, controlled eccentrics.
- **Contest training**: energy-management splits; shorter rests; stations bias lagging body parts.
- **Posing is athletic**: holding the mandatories is an isometric performance \u2014 posing practice is part of training.
- **Conditioning**: low body-fat with retained muscle \u2014 the diet, cardio and timing science of prep.
- The sport is often taught in exercise psychology as the extreme of body-image goal-setting.`
      },
      { id: "training", title: "Training & periodisation", module: "m3", body: `- Off-season (growth): higher calories, volume progression, strength blocks.
- Pre-contest: cutting phase \u2014 disciplined diet, added cardio, reduced water, salt and carbohydrate manipulation ('peak week').
- Posing sessions in the mirror daily; short holds, transitions and stage presence.
- Recovery: sleep, passive recovery and de-load weeks \u2014 progression needs planned rest.`
      },
      { id: "injuries", title: "Health & risks", module: "m6", body: `- Overuse strains (shoulder, elbow, lower back) from heavy training; dehydration and electrolyte issues in peak week.
- Health risks of extreme dieting and performance drugs are a serious part of the sport's debate.
- Care: natural federation standards, hydration, medical oversight in prep, and physio for joint niggles.` },
    ]
  },
  {
    slug: "tug-of-war",
    title: "Tug of War",
    altNames: null,
    category: "misc",
    emoji: "\u{1F93C}",
    lede: "Tug of war pits two teams of eight pulling a rope against each other across a central line \u2014 the winner drags the rope mark over the line. Simple to learn, brutally demanding to master, it was an Olympic sport from 1900\u20131920 and remains a world-championship discipline.",
    infobox: [
      ["Invented", "Ancient China / Egypt; formalised in Europe & USA"],
      ["Governing body", "TWIF (Tug of War International Federation)"],
      ["Format", "Team \u00B7 8 per side (pulling positions)"],
      ["Rope", "Heavy-gauge rope, teams on opposite ends"],
      ["Aim", "Pull the centre mark past the winning line"],
      ["Olympic", "1900\u20131920 (with interruptions)"]
    ],
    modules: ["m1", "m2", "m3"],
    court: null,
    verified: false,
    competitions: ["TWIF World Championships", "Games & festival tug-of-war events"],
    keyTerms: ["Pull", "Anchor", "Drag (harness) positions", "Centre mark", "Coordination", "Squat lean"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Teams grip the rope in a staggered, back-to-front order and apply one coordinated pull, keeping the body lean back with feet braced. The match is won when the centre mark crosses the line. Tug-of-war is a team-strength event with its own laws, referees and international calendar.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Teams**: 8 pullers per side, often in weight classes; best-of-three pulls decide a match.
- **The pull**: both teams pull until the mark crosses the line, a team is dragged, or time expires (a judge marks the position).
- **Grip & stance**: hands on the rope, feet planted, body leaning back \u2014 grip and cleats regulated.
- **Fouls**: feet crossing the 'curb' area or the line beyond the allowed zone; coach signals and referee whistle control.
- **Officials**: a referee, pull judges and a scorekeeper; measuring tape for the mark.
- Work as a unit \u2014 late pulls and 'take' resets decided on the whistle.`
      },
      { id: "technique", title: "Technique & biomechanics", module: "m2", body: `- **The stance**: a low, deep squat-lean \u2014 body weight works like a moving wall against the pull.
- **Coordinated pulls**: the whole team pulls in a rhythm (\u201c1-2-3 PULL\u201d) \u2014 simultaneous force beats strength alone.
- **The anchor**: the final puller controls direction and may 'crow' the tail for leverage.
- **Force & friction**: surface traction, shoe contact and team mass generate the pulling force \u2014 a live lesson in statics.
- Energy: the event is anaerobic \u2014 repeated short explosive pulls.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Strength: deadlift, rows and sled pulls; grip work with heavy rope and fat bars.
- Coordination: timed pull drills, resistance-band per-team pulls and count practice.
- Team periodisation: pre-season strength, in-season event sharpening, taper before finals.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Lower-back and shoulder strain; blisters and rope burns on the hands; ankle injuries on hard team surfaces.
- Care: padded gloves (allowed in many codes), back-strengthening program, surface choice and warm-up pulls.` },
    ]
  },
  {
    slug: "formula-one",
    title: "Formula One",
    altNames: "F1",
    category: "misc",
    emoji: "\u{1F3CE}",
    lede: "Formula One is the pinnacle of open-wheel racing \u2014 drivers race state-of-the-art single-seaters over a season of international Grands Prix. It combines extreme physical load, split-second decision-making and the most sophisticated engineering in motorsport.",
    infobox: [
      ["Invented", "UK / Europe (1950 world championship)"],
      ["Governing body", "FIA"],
      ["Format", "Season of Grands Prix \u00B7 team & individual"],
      ["Car", "Open-wheel single-seater ~1000 bhp hybrid"],
      ["Race", "~305 km / approx. 2 hours"],
      ["Points", "Top 10: 25\u201318\u201315\u201312\u201310\u20138\u20136\u20134\u20132\u20131"],
      ["Olympic", "None (recognised world championship sport)"]
    ],
    modules: ["m1", "m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["FIA Formula One World Championship", "Grands Prix worldwide", "Sprint races"],
    keyTerms: ["Grip", "Aero", "Pit stop", "Tyre management", "DRS", "Understeer/oversteer"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Twenty drivers line up on the grid each Grand Prix and race ~305 km. A season crowns separate **Drivers' and Constructors' Championships**. Races mix strategy (tyres, fuel, stops) with wheel-to-wheel driving \u2014 and the drivers' bodies handle cornering forces up to 5\u20136g.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Weekend format**: practice, qualifying (a timed shootout) sets the grid, then the race; sprint weekends add a short sprint race.
- **Race distances**: around 305 km or two hours, whichever comes first; the safety car and yellow flags control risk.
- **Scoring & titles**: top-ten points plus fastest lap; the driver and the team (constructors) both earn championships.
- **Technical regulations**: strict engine, aero and cost-cap rules \u2014 legality checks and parc fermé.
- **Officials**: race director, stewards, marshals \u2014 telemetry (timing, DRS) and penalties (time, drive-through).
- **Safety**: halo, HANS device, fire suits and spotless crash structures \u2014 the safest era of the sport.`
      },
      { id: "technique", title: "Driving technique", module: "m2", body: `- **Braking & cornering**: trail-braking, apex lines and throttle application \u2014 the physics of grip and weight transfer.
- **Aero skill**: DRS (rear-wing opening) and dirty-air adjustments \u2014 following a car changes the balance.
- **Tyre management**: nursing or *pushing* the rubber \u2014 a living lesson in surface and wear.
- **Pit strategy**: undercut/overcut calls, fuel and setup changes \u2014 racecraft beyond the wheel.
- **The human machine**: neck muscles (5\u20136g), core, cardio and heat tolerance are trained like an athlete's.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- **Neck conditioning**: harness-based heavy resistance for the lateral g-loads \u2014 the sport's signature exercise.
- Cardio and heat acclimatisation sessions in saunas/simulators; core and upper-body strength.
- **Simulator work**: lap practice, race-length endurance and setup feedback \u2014 the driver's 'training ground'.
- Race-week recovery and nutrition; travelling teams manage sleep and jet-lag carefully.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Neck and back strain from g-forces; forearm and hand fatigue in heavy cars; heat stress in cockpit sessions.
- Crashes and race incidents \u2014 the halo, safety cell and medical car exist for exactly that.
- Care: full recovery between races, physio for the cervical spine, and strict crash protocols.` },
    ]
  },
  {
    slug: "motogp",
    title: "MotoGP",
    altNames: "Motorcycle Road Racing",
    category: "misc",
    emoji: "\u{1F3CD}",
    lede: "MotoGP is the premier class of motorcycle road racing \u2014 prototype machines over 350 km/h racing close-quarter production-style circuits. It tests nerves, throttle control and body position at a level unique in motorsport.",
    infobox: [
      ["Invented", "Europe (1949 motorcycling world championship)"],
      ["Governing body", "FIM"],
      ["Format", "Season of Grands Prix \u00B7 classes"],
      ["Classes", "MotoGP \u00B7 Moto2 \u00B7 Moto3"],
      ["Race", "95\u2013130 km sprint to flag"],
      ["Points", "Top 15 finish points"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m2", "m4", "m6"],
    court: null,
    verified: false,
    competitions: ["MotoGP World Championship", "Moto2 / Moto3 championships", "Sprint races (2023 onward)"],
    keyTerms: ["Corner speed", "Lean angle", "Braking", "Wheelie/stoppie", "Riders' line", "Red flag"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `MotoGP riders lean their machines to extreme angles through corners, brake late and thread the field at speeds above 350 km/h. Grand Prix weekends mix free practice, qualifying and the race, with the world title going to the most consistent over the season.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Grand Prix weekend**: practice, qualifying and the race; the sprint race added on many weekends.
- **Race length**: 95\u2013130 km (roughly 20\u201330 laps depending on the circuit).
- **Classes & machinery**: MotoGP (1000cc prototypes), Moto2 and Moto3 \u2014 spec and prototype rules.
- **Scoring**: full points to the top 15; championships for rider, team and constructor.
- **Flags & stewards**: yellow (danger), red (stop), black (disqualification); track limits and ride-through penalties managed by Race Direction.
- **Safety**: air-vest leathers, helmets and circuit runoff developments.`
      },
      { id: "technique", title: "Riding technique", module: "m2", body: `- **Braking**: late brakes, trail into the corner while the rear wheel drifts; threshold feel is everything.
- **Lean & body position**: hanging off the "knee-down" position to shift mass into the corner \u2014 geometry and physics.
- **Corner speed**: carrying speed through the apex beats maximum on the straights alone.
- **Throttle control**: rear-grip management at the limit; slides and the counter-gravity 'wheelie' control.
- **The human machine**: huge forearm strength for brakes, neck muscle for the aero load, and core for lateral g.`
      },
      { id: "training", title: "Training & conditioning", module: "m3", body: `- Forearm and grip endurance (rollers, grip strength), neck conditioning, core stability.
- Heat-tolerance training in leathers; mountain biking and motocross cross-training.
- Simulator laps and track-walks for line memory; race-week pacing and recovery routines.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Crashes: road rash (even in leathers), collarbone and wrist fractures, concussion \u2014 the sport's daily risk ledger.
- Forearm and hand overuse; back and neck strain from aggressive positions.
- Care: full protective gear, medical car coverage, rehab-first return and scars-as-normal culture.` },
    ]
  },
  {
    slug: "rally",
    title: "Rallying",
    altNames: "Rally",
    category: "misc",
    emoji: "\u{1F698}",
    lede: "Rallying races cars over closed-off public roads, timed on special stages against the clock rather than door-to-door on a circuit. A co-driver reads pace notes, the driver pilots through forests, mountains and mud \u2014 the purest test of car control under pressure.",
    infobox: [
      ["Invented", "France / Italy (early 20th century rally raids)"],
      ["Governing body", "FIA"],
      ["Format", "Timed special stages + road sections"],
      ["Crew", "Driver + co-driver (pace notes)"],
      ["Surfaces", "Tarmac \u00B7 Gravel \u00B7 Snow \u00B7 Street stages"],
      ["Scoring", "Fastest cumulative special-stage time"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["FIA World Rally Championship", "Rally (regional/national) championships"],
    keyTerms: ["Special stage", "Pace notes", "Co-driver", "Shakedown", "Service park", "Recce"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Rally crews run the same stages all season as timed tests and a mix of sections and service halts. The driver attacks each **special stage** while the **co-driver** reads a shorthand set of pace notes describing every corner, crest and hazard. Total stage time decides the event.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Special stages**: closed-road timed sections, usually 5\u201340 km; crews start one at a time.
- **Road sections**: untimed transits between stages under normal traffic rules.
- **Service park**: scheduled maintenance and regulation checks; penalties for being late.
- **Scoring**: cumulative special-stage time (plus a powerstage bonus); crews ranked by it.
- **Recce & notes**: crews reconnoitre to write pace notes; shakedown test runs before the event.
- **Officials**: clerk of the course, stage marshals and scrutineers \u2014 safety at every junction.`
      },
      { id: "technique", title: "Driving technique", module: "m2", body: `- **Pace-note execution**: the driver hears the corner, commits from the note \u2014 trust between crew is the skill.
- **Car control**: handbrake, throttle-steer and trail-braking on different surfaces \u2014 gravel rallies are a slide workshop.
- **Surface reading**: wet tarmac vs soft gravel vs packed snow each change line, brake and throttle points.
- **Coordination**: an simultaneous two-person operation \u2014 a perfect case study in crew dynamics.
- Concentration over hours of stages \u2014 rallying is a marathon of short sprints.`
      },
      { id: "training", title: "Priorities in training", module: "m3", body: `- Notes practice: driving to recorded notes builds memory and rhythm.
- Simulator and test days on varied surfaces; physical prep mirrors a long-distance athlete (hydration, heat).
- Neck and core strength for the G-load; sleep scheduling between stages and countries.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Crash injuries are rare but severe \u2014 the safety cell, harnesses and helmets are the core protection.
- Fatigue, heat and motion sickness in co-drivers; hand/arm strain from aggressive driving.
- Care: restructure events with mandatory breaks, fit medical checks, and stage-crew first aid.` },
    ]
  },
  {
    slug: "karting",
    title: "Kart Racing",
    altNames: "Go-Karting, Karting",
    category: "misc",
    emoji: "\u{1F3C1}",
    lede: "Kart racing is racing's front door \u2014 small open-wheel karts on compact tracks producing close, mechanical and outrageously effective racing. It is the proving ground of most Formula One and MotoGP stars and a brilliant school format for motorsport skills.",
    infobox: [
      ["Invented", "USA / UK (1950s backyard karts)"],
      ["Governing body", "CIK-FIA (and national bodies)"],
      ["Format", "Individual & team \u00B7 sprint & endurance"],
      ["Kart", "Chassis + engine; open wheels, no bodywork"],
      ["Track", "Compact sprint circuit (~400\u20131400 m)"],
      ["Scoring", "Heats, pre-finals and finals points"],
      ["Olympic", "None"]
    ],
    modules: ["m1", "m2", "m4"],
    court: null,
    verified: false,
    competitions: ["CIK-FIA World & European Karting Championships", "National kart series", "Arrive-and-drive rentals"],
    keyTerms: ["Sprint race", "Heat", "Kart chassis", "Avoidance drafting", "Wet race", "Slipstream"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `Karts are low, direct and cheap to run, so karting produces most of the world's racing drivers. Competition formats run **heats → pre-finals → finals**, with arrivals, qualifications and championship points \u2014 the full ladder of motorsport in a weekend.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- **Classes**: by age, engine and weight (e.g., mini, juniors, seniors, rental classes).
- **Race structure**: practice, qualifying, heats and a final; results from heats set grids for finals.
- **Track & start**: standing/rolling starts, green flag, and race control at the start; door-to-door overtaking allowed on the racing line.
- **Scoring**: fuelled by points tables and championship standings \u2014 several rounds a season.
- **Safety gear**: helmet, gloves, rib protector and suit are the kart racer's armour; track marshals and flags control danger.
- Officials: clerk, scrutineers for the kart's legality, and race directors.`
      },
      { id: "technique", title: "Driving & racing skills", module: "m2", body: `- **Weight transfer**: karts are light \u2014 smooth weight distribution around the track decides grip.
- **Braking**: late braking with the rear locked; the 'bump steer' and minimum-speed apex carry.
- **Drafting**: slipstreaming the kart ahead to gain speed on the straight and set up passes.
- **Racecraft**: can-opening moves, inside-line defence and exit-speed thinking \u2014 the driver's craft.
- **Physical load**: even at low speeds, kart steering is heavy work \u2014 forearms, neck and core get a true workout.`
      },
      { id: "training", title: "Kart-specific training", module: "m3", body: `- Driving time is the main teacher: consistent laps beat occasional quick laps.
- Simulator and data review (sectors, telemetry) for technique feedback.
- Fitness: grip strength, neck conditioning and core work; heat and rehydration handling in summer seasons.`
      },
      { id: "injuries", title: "Common injuries & care", module: "m6", body: `- Wrist and forearm strain from the heavy steering; neck stiffness after long sessions; heat stress.
- Collisions \u2014 protective gear (rib protector, gloves) and marshals reduce the risk.
- Care: full kit, hydration, arm/neck recovery and scrutineering of the kart's safety parts.` },
    ]
  }
  ]);
})();