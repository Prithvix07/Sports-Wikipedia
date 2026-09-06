/* ==========================================================================
   THE ARENA — Extra Field & Court Articles
   Concise syllabus articles for the missing field team games and court games.
   Appended to window.ARTICLES so every SPORTS entry has real content.
   ========================================================================== */

(function () {
  window.ARTICLES = window.ARTICLES.concat([
  {
    slug: "rugby-union",
    title: "Rugby Union",
    altNames: "Rugby XV",
    category: "field",
    emoji: "\u{1F3C9}",
    lede: "Rugby union is a fifteen-a-side contact field sport in which the oval ball is run, passed backwards and kicked to gain ground and score tries.",
    infobox: [
      ["Invented", "England (Rugby School, 1823)"],
      ["Governing body", "World Rugby"],
      ["Format", "Team \u00B7 15 per side (8 forwards + 7 backs)"],
      ["Duration", "2 \u00D7 40 minutes"],
      ["Pitch", "Up to 100 \u00D7 70 m, plus in-goal areas"],
      ["Olympic", "Rugby sevens at Olympics; union XV not"],
      ["Common injuries", "Concussion, shoulder dislocations, knee ligament sprains"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Rugby World Cup", "Six Nations", "The Championship", "Asia Rugby Championship"],
    keyTerms: ["Try", "Conversion", "Line-out", "Scrum", "Ruck", "Maul"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rugby union** is played by two XVs who contest possession of an oval ball. The ball may be carried, passed backwards, kicked, or grounded for a **try** (5 points, plus a 2-point conversion). It is a demanding collision sport used in PE to teach tackling safety, strength and team structure.` },
      { id: "field", title: "The pitch & equipment", module: "m4", body: `- **Pitch**: up to 100 m long by 70 m wide, with an **in-goal (try) area** of 6\u201322 m behind each goal line.
- Markings: halfway line, 10 m and 22 m lines, 5 m and 15 m touch lines for line-outs.
- **Posts**: two uprights 5.6 m apart with a crossbar 3 m high \u2014 extended to 14 m+ in professional play for the kicking tee.
- **Ball**: oval (rugby ball), size 5 for adults.` },
      { id: "rules", title: "Core rules & game break-down", module: "m4", body: `- **Try**: ground the ball in the in-goal area \u2014 5 points; **conversion** (2), **penalty goal** (3), **drop goal** (3).
- **Passing**: only backwards; a forward knock-on or throw is a scrum or penalty.
- **Tackle**: the ball carrier is tackled to the ground; the team that arrives first over the ball wins possession at the **ruck**.
- **Scrum**: eight forwards bind after certain stoppages; the hooker competes for the ball.
- **Line-out**: ball is thrown in after it goes into touch; two lines of forwards contest it.
- **Cards**: yellow (10 min sin-bin), red (dismissal).` },
      { id: "skills", title: "Skills & positions", module: "m2", body: `- **Forwards** (1\u20138): heavy roles \u2014 scrummaging, line-outs, carrying in traffic.
- **Backs** (9\u201315): speed and handling \u2014 scrum-half feeds scrums, fly-half directs attack, wingers chase kick and space.
- Core skills: passing (spiral and pop), tackling (shoulder-first, wrap), kicking (garryowen, cross-kick), and evasive running.
- Bio-mechanics: low centre of gravity in contact, head positioning to avoid injury, and footwork to beat the tackler.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- **Concussion** is the highest concern \u2014 immediate removal and graded return protocols (never \u201cplay on\u201d after head impact).
- Shoulder dislocations and AC joint injuries from tackles; knee ligament sprains (MCL/ACL) from twisting in boots.
- Prevention: tackling technique drills, neck-strength work, correct equipment, and following the World Rugby concussion guidelines.` }
    ]
  },
  {
    slug: "rugby-league",
    title: "Rugby League",
    altNames: "Rugby XIII",
    category: "field",
    emoji: "\u{1F3C9}",
    lede: "Rugby league is the thirteen-a-side, six-tackle variant of rugby \u2014 faster and more open, with possession turning over after each six tackles.",
    infobox: [
      ["Invented", "England (1895 breakaway from rugby union)"],
      ["Governing body", "International Rugby League"],
      ["Format", "Team \u00B7 13 per side (6 forwards + 7 backs)"],
      ["Duration", "2 \u00D7 40 minutes"],
      ["Pitch", "100 \u00D7 68 m with 8\u201310 m in-goal areas"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Concussion, knee sprains, shoulder injuries"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Rugby League World Cup", "State of Origin", "Super League", "NRL"],
    keyTerms: ["Six tackles", "Scrum", "Play-the-ball", "Try", "Drop-out"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rugby league** is rugby union's faster sibling: thirteen players, fewer contested breakdowns, and a strict **six-tackle** possession rule that keeps the ball moving and the game open. After the sixth tackle (or a knock-on or forward pass) possession passes to the other side.` },
      { id: "field", title: "Pitch & equipment", module: "m4", body: `- Pitch: rectangular, up to 100 m \u00D7 68 m, plus an **in-goal area** (8\u201310 m deep) behind each line.
- Posts are H-shaped like union; try zone extends past the goalposts.
- The ball is the same oval size 5 rugby ball; boots with studs and gum shields are standard.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Try** (4 points) + **conversion** (2); penalty goal and drop goal are 2 and 1 respectively (comparison to union's 5/2/3/3).
- **The six tackles**: after each tackle the player plays the ball with the foot; on the sixth tackle or a mistake the ball turns over, often with a kick on the last.
- **Play-the-ball**: quick restart that keeps tempo.
- Scrums are lightweight (fewer contested) and line-outs do not exist \u2014 the throw-in is uncontested.
- Constant movement means more set plays off kicks and surges.` },
      { id: "skills", title: "Skills & structure", module: "m2", body: `- Positions: 6 forwards lead the collision, 7 backs spread the field; the **half-back** organises.
- Skills: carry-and-play-the-ball, support running, kick-chase, and a tackle system where the marker advances.
- Biomechanics: low-body contact to win the tackle, sprint starts off the play-the-ball, and change-of-direction footwork to break the line.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Concussion management mirrors union \u2014 immediate removal and graded return.
- Ankle and knee sprains from cutting, shoulder injuries from tackles, and muscle strains from repeated explosive starts.
- Prevention: technique-led contact training, lower-limb strength, and strict head-injury protocols.` }
    ]
  },
  {
    slug: "rugby-sevens",
    title: "Rugby Sevens",
    altNames: "7s",
    category: "field",
    emoji: "\u{1F3C9}",
    lede: "Rugby sevens is the seven-a-side, two-seven-minute-half version of rugby union \u2014 an Olympic discipline built on speed, space and continuous play.",
    infobox: [
      ["Invented", "Scotland (Melrose, 1883)"],
      ["Governing body", "World Rugby"],
      ["Format", "Team \u00B7 7 per side (3 forwards + 4 backs)"],
      ["Duration", "2 \u00D7 7 minutes (\u00D7\u00BD final minutes)"],
      ["Pitch", "Standard rugby pitch \u2014 full width"],
      ["Olympic", "Summer (men & women) since 2016"],
      ["Common injuries", "Concussion, hamstring strains, ankle sprains"]
    ],
    modules: ["m2", "m3", "m5", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "World Rugby Sevens Series", "Commonwealth Games", "Asian Games"],
    keyTerms: ["Seven a side", "Try", "Kick-off", "High pace", "Evasion"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rugby sevens** is rugby union condensed: seven players per team, seven-minute halves, and a full-size pitch. The result is pure speed \u2014 every player handles the ball, space opens up constantly, and teams score several tries per match. It became an Olympic sport in 2016.` },
      { id: "rules", title: "Rules & format", module: "m4", body: `- Full rugby rules apply; scrums have **three players** and line-outs usually uncontested or small.
- Kicks are long and tactical \u2014 the kick-chase is a primary scoring weapon.
- Final (gold-medal) games sometimes extended to two halves of 10 minutes.
- Rapid tournament format: pool play and knockout \u2014 teams may play 4\u20135 games in two days, so squad depth matters.` },
      { id: "skills", title: "Skills & physiology", module: "m3", body: `- Every player needs catching, passing, running, tackling and kicking \u2014 plus the engine to keep working for 14 intense minutes.
- **Speed endurance**: repeated 10\u201340 m sprints between plays; high lactate tolerance.
- Support play is the key skill \u2014 offloading in contact always keeps options alive.
- Fitness focus: sprint training blended with repeated high-intensity interval work.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hamstring strains from repeated acceleration; ankle sprains on the wider field; concussion from tackles in open space.
- Prevention and management follow the same World Rugby protocols as XVs: safe tackle technique, strength, and strict graded return after head injuries.` }
    ]
  },
  {
    slug: "american-football",
    title: "American Football",
    altNames: "Gridiron",
    category: "field",
    emoji: "\u{1F3C8}",
    lede: "American football is an eleven-a-side contact game of downs and yardage on a 100-yard field, where teams advance the ball by running or passing it.",
    infobox: [
      ["Invented", "USA (late 19th century, from rugby roots)"],
      ["Governing body", "NFL / IFAF"],
      ["Format", "Team \u00B7 11 per side on the field"],
      ["Duration", "4 \u00D7 15 minutes (NFL)"],
      ["Field", "100 yd \u00D7 160 ft \u00B7 end zones 10 yd deep"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Concussion, ACL tears, shoulder and ankle injuries"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["NFL (Super Bowl)", "College Football Playoff", "IFAF World Championship"],
    keyTerms: ["Down", "Touchdown", "Field goal", "Quarterback", "Line of scrimmage"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**American football** is a strategic collision sport: an offence advances the ball toward a defence over a gridiron, earning four **downs** to gain 10 yards or surrendering possession. Touchdowns (6 points + optional 1\u20132), field goals (3) and safeties (2) make the scoring.` },
      { id: "field", title: "The field & equipment", module: "m4", body: `- Field 100 yards long by 53 1/3 yards wide, with 10-yard end zones.
- Yard lines every 5 yards and hash marks define the playing width.
- **Equipment**: padded helmet with facemask, shoulder pads, thigh/knee pads, hip pads, and cleats \u2014 the most protective kit in any team sport.
- Ball: spheroid ~28 in long, leather or composite.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Downs**: four plays to advance 10 yards; succeed = new set of downs, fail = possession turns over on downs.
- Plays start at the **line of scrimmage**; the offence may run, pass forward once behind the line, or kick.
- **Touchdown** (6) by carrying or catching the ball in the end zone; **extra point** (1) or two-point conversion (2); **field goal** (3) kicked through the uprights; **safety** (2).
- Scoring plays, sacks, interceptions and fumbles are all part of the game's drama.
- Players are replaced freely between downs; offence/defence/special-teams units rotate.` },
      { id: "skills", title: "Skills & positions", module: "m2", body: `- **Quarterback**: throws and directs the offence; **running back**: carries; **wide receivers**: catch deep; **offensive line**: block.
- **Defence**: linemen rush, linebackers cover runs and short passes, defensive backs shadow receivers.
- Skills: precision throwing and catching, explosive running, blocking mechanics, and tackling \u2014 with the neck and helmet posture critical for safety.
- Biomechanics: the collision is about low pads, level shoulders and driving legs.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- **CTE/concussion awareness** has rewritten the sport: safer tackling rules, hit-to-the-head bans and strict return protocols.
- ACL injuries and ankle sprains from planting on artificial turf; shoulder injuries from high tackles.
- Prevention: proper tackling and blocking form at every level, neck strength, equipment fit, and limiting full-contact hitting in practice.` }
    ]
  },
  {
    slug: "canadian-football",
    title: "Canadian Football",
    altNames: null,
    category: "field",
    emoji: "\u{1F3C8}",
    lede: "Canadian football is a twelve-a-side gridiron variant played on a longer, wider field with three downs and a larger kicking zone.",
    infobox: [
      ["Invented", "Canada (late 19th century)"],
      ["Governing body", "CFL"],
      ["Format", "Team \u00B7 12 per side"],
      ["Duration", "4 \u00D7 15 minutes"],
      ["Field", "110 yd \u00D7 65 yd \u00B7 end zones 20 yd deep"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Concussion, knee sprains, shoulder injuries"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Grey Cup (CFL)", "Vanier Cup (U Sports)"],
    keyTerms: ["Three downs", "Single (rouge)", "Wide field", "No fair-catch"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Canadian football** differs from American football mainly in scale and pace: twelve players, a fuller 110-yard field, **three downs**, and the unique **single-point (rouge)** score. The wider field rewards passing and opens the seams for receivers.` },
      { id: "field", title: "Field & rules", module: "m4", body: `- Field 110 yd between goal lines by 65 yd wide, with 20-yard end zones and the goalposts on the goal line (not the back).
- **Three downs** (not four) to gain 10 yards.
- **Rouge/single**: a punted ball that sails through or is not returned out of the end zone scores 1 point.
- No fair catch on punts; the receiver can be hit; motion rules allow more pre-snap shifting.
- Full football scoring otherwise applies (TD 6, FG 3, safety 2, converts 1\u20132).` },
      { id: "skills", title: "Skills & structure", module: "m2", body: `- With the open field, downfield passing and kick-return skills carry premium value.
- Offence: QB-led, with outside runs exploiting the wider hash spacing.
- Defence: man and zone coverages must span more ground \u2014 speed and range are king.
- Core skills parallel American football: throwing, catching, tackling, blocking and return play.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Same injury profile as American football \u2014 concussions, knee and shoulder injuries \u2014 with extra kicking-surface risk on the longer downfield returns.
- Safety: rules that protect the quarterback and kick returners, proper tackling form, and concussion protocols.` }
    ]
  },
  {
    slug: "australian-rules",
    title: "Australian Rules Football",
    altNames: "Aussie Rules, AFL",
    category: "field",
    emoji: "\u{1F3C8}",
    lede: "Australian rules football is an eighteen-a-side oval-ball sport with running bounces, high marking and kicking between four goalposts \u2014 played on a large oval.",
    infobox: [
      ["Invented", "Australia (mid-19th century, Melbourne)"],
      ["Governing body", "AFL"],
      ["Format", "Team \u00B7 18 per side"],
      ["Duration", "4 \u00D7 20-minute quarters (time on)"],
      ["Oval", "~135\u2013185 m long \u00B7 soccer-style boundary"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "ACL injuries, hamstring strains, ankle sprains"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["AFL Premiership", "AFL Women's (AFLW)"],
    keyTerms: ["Mark", "Bounce", "Behind", "Specky", "Ruck"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Australian rules football** (Aussie rules) is a fast, free-flowing ball sport played on a large oval. Players run, handball, kick and leap to claim **marks** (clean catches from kicks). Goals (6 points) are kicked between the tall central posts; behinds (1 point) between the outer posts.` },
      { id: "field", title: "The ground & equipment", module: "m4", body: `- **Ground**: an oval roughly 135\u2013185 m by 110\u2013155 m, with a cricket-pitch-like centre square.
- **Posts**: two tall goal posts and two shorter behind posts at each end.
- **Ball**: a firm oval ball; players bounce it every ~15 m when running.
- No pads are worn \u2014 the sport is high-impact but protective gear is minimal (guernsey, boots, mouthguard).` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Kick** (forwards or anywhere) and **handball** (punching the palm) are the only legal passes; throwing is illegal.
- **Mark**: a clean catch from a kick by another player wins a free kick; a speccy (spectacular mark) leaps on the shoulders.
- **Scoring**: goal through the middle posts = 6; behind through outer posts or touching = 1.
- **Bounce**: the runner must bounce the ball every 15 m or lose possession.
- Contact is legal (hip-and-shoulder), but the ball and player protection rules are strict.` },
      { id: "skills", title: "Skills & physiology", module: "m3", body: `- The sport demands incredible endurance \u2014 midfielders run 13\u201315 km per game with repeated sprints.
- Skills: kicking on both sides, handballing, marking overhead, spoiling, and the running bounce.
- Positions: tall key forwards/backs, midfielders, rucks, and small forwards.
- Biomechanics: high-leap marking (controlled fall!), kicking with a long side-on swing, and change-of-direction agility to beat opponents.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- **ACL injuries** from planting and turning are the highest profile; hamstring strains dominate muscle injuries.
- Ankle sprains and concussions from marking contests and bumps.
- Prevention: knee-focused strength (tempo, plyometrics, eccentric work), hamstring conditioning, and fair-mark and head-injury rules.` }
    ]
  },
  {
    slug: "gaelic-football",
    title: "Gaelic Football",
    altNames: "Peil",
    category: "field",
    emoji: "\u{1F3C8}",
    lede: "Gaelic football is a fifteen-a-side Irish sport mixing hand and foot skills on a large grass pitch with H-shaped goals and over-the-bar points.",
    infobox: [
      ["Invented", "Ireland (ancient roots; codified 1884 with the GAA)"],
      ["Governing body", "GAA"],
      ["Format", "Team \u00B7 15 per side"],
      ["Duration", "2 \u00D7 35-minute halves"],
      ["Pitch", "130\u2013145 m \u00D7 80\u201390 m"],
      ["Olympic", "Not an Olympic sport (code by GAA)"],
      ["Common injuries", "Knee sprains, ankle injuries, concussion"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["All-Ireland Senior Football Championship", "GAA football leagues"],
    keyTerms: ["Solo", "Hand-pass", "Point", "Goal", "Mark"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Gaelic football** is Ireland's most popular field sport: fifteen players use a round ball, may carry it briefly while **soloing** (bouncing/dribbling to self), pass by hand or fist, and kick for a **goal** (3 points) under the bar or a **point** (1 point) over it.` },
      { id: "field", title: "The pitch & equipment", module: "m4", body: `- Pitch: a large rectangular grass field (130\u2013145 m \u00D7 80\u201390 m) with H-shaped goalposts at each end.
- **Posts**: football (soccer-like) goal netted below the bar; over-the-bar scoring counts as a point above it.
- Ball: size 5 round leather ball; players wear jerseys, shorts, boots; no pads.
- A 13 m line and small semicircle around the goals are marked.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Goal** (below the bar) = 3 points; **point** (over the bar) = 1 point.
- **Pick-up, solo, bounce**: a player may lift the ball with the boot, solo (dribble to self along the ground or to the hand), and bounce it once before carrying.
- **Hand-pass**: striking the ball with the open hand or fist; the **fist pass** is legal, throwing is not.
- Free kicks, sideline kicks, and a kick-out restart follow the ball out of play.
- Contact is allowed within the rules but no tripping or striking; referees enforce by card (yellow/red).` },
      { id: "skills", title: "Skills & play", module: "m3", body: `- The **solo** (controlled bounce or boot-to-hand) lets players sprint with the ball.
- Kicking on both feet, clean fielding, hand-passing, and the block (slap-down) on defence.
- High aerobic demand \u2014 the game flows with few stoppages; players cover large ground.
- Combining hurling-like stick skills is replaced here by pure ball skills.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Knee and ankle sprains from turning on grass; concussion from high ball contests.
- Prevention: technique-led contest training, strength, and GAA head-injury guidelines.` }
    ]
  },
  {
    slug: "hurling",
    title: "Hurling",
    altNames: "Iom\u00E1na\u00EDocht",
    category: "field",
    emoji: "\u{1F3D2}",
    lede: "Hurling is the world's fastest field sport \u2014 players drive a small ball (sliotar) with a curved wooden hurley, scoring goals and points at pace.",
    infobox: [
      ["Invented", "Ireland (GAA traditional code)"],
      ["Governing body", "GAA"],
      ["Format", "Team \u00B7 15 per side"],
      ["Duration", "2 \u00D7 35-minute halves"],
      ["Pitch", "130\u2013145 m \u00D7 80\u201390 m"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Hand/finger injuries, shoulder strains, concussions"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["All-Ireland Senior Hurling Championship", "Hurling leagues"],
    keyTerms: ["Hurley", "Sliotar", "Puck", "Lift", "Point & goal"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Hurling** is the fastest field sport on grass. Players use a wooden **hurley** (camán) to hit and carry a small leather ball, the **sliotar**, striking it over the bar for a point (1) or into the net for a goal (3). It is hurled at explosive speed and demands superb stick skill.` },
      { id: "field", title: "The pitch & equipment", module: "m4", body: `- Same GAA pitch as Gaelic football, with H-shaped netted goalposts.
- **Hurley**: a curved ash stick ~70\u201398 cm long; the striking surface is a broad, flat bas.
- **Sliotar**: a small leather ball ~7 cm diameter (cork core).
- Helmets are mandatory at all levels; chest guards optional for adults, common for minors.
- Pitch markings mirror football rules for free pucks and lines.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Goal** (3 points) under the bar; **point** (1) over it.
- The sliotar can be hit in the air, on the ground, or carried on the hurl (chin-control), and struck from the hand.
- Players may block with the hurl and shoulder opponents; no throwing the ball (only hitting or lifting with the hurley).
- Free pucks and sidelines restart after the ball crosses the boundary.
- Strong stick-skills rules protect safety: no swinging the hurl at a player; dangerous high tackle is felled.` },
      { id: "skills", title: "Skills & speed", module: "m3", body: `- Master skills: **pucking** (long strike), **lifting** the sliotar in the hand/hurl, **soloing** (bouncing the ball on the hurl while running), and the **block**.
- The game's pace comes from hand-passing and fast striking; players change direction at full speed.
- Conditioning: explosive acceleration, hand-eye coordination, and the shoulder strength to shield the hurl.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Hand and finger injuries from stick contact; shoulder strains; concussions from collisions.
- Prevention: mandatory helmets, correct hurl etiquette, technique-led blocking, and GAA head-injury protocols.` }
    ]
  },
  {
    slug: "lacrosse",
    title: "Lacrosse",
    altNames: null,
    category: "field",
    emoji: "\u{1F3D2}",
    lede: "Lacrosse is a fast stick-and-ball team sport in which players catch, carry and shoot a ball with a netted crosse \u2014 back at the Olympics in 2028.",
    infobox: [
      ["Invented", "Indigenous North America (Haudenosaunee)"],
      ["Governing body", "World Lacrosse"],
      ["Format", "Team \u00B7 10 per side (men 10, women 12 variants)"],
      ["Duration", "4 \u00D7 15-minute quarters (men's field)"],
      ["Field", "110 yd \u00D7 60 yd with a crease"],
      ["Olympic", "Returning 2028 (sixes format)"],
      ["Common injuries", "Ankle sprains, knee injuries, concussions, overuse shoulder"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["World Lacrosse Championship", "Olympic Games (2028)", "NCAA Lacrosse", "Premier Lacrosse League"],
    keyTerms: ["Crosse", "Face-off", "Crease", "Man-up", "G-B-L (ground-ball) player"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Lacrosse** is the fastest sport on two feet, born of the Indigenous peoples of North America. Players use a **crosse** (cradle stick with a netted pocket) to scoop, carry and hurl a hard rubber ball toward the opponent's goal. Field lacrosse (men) and sixes are the international standards.` },
      { id: "field", title: "The field & equipment", module: "m4", body: `- **Men's field**: 110 yd \u00D7 60 yd with a goal crease (circle) at each end; goals are 6 ft wide.
- **Crosse**: varying lengths (attack 40 in, defence up to 72 in).
- **Ball**: hard rubber 7.75\u20138 in circumference.
- Protection for men: helmets, shoulder and elbow pads, gloves; women's game is less padded.
- **Sixes** (Olympic format): reduced-sided, faster, on a smaller field.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- Face-off at the centre to start; players throw the ball with the crosse motion \u2014 throwing by hand is illegal.
- **Goals**: the ball must fully cross the goal line; a goalie defends a 6 \u00D7 6 ft goal.
- The **crease** protects the goalie \u2014 offensive players may not enter.
- Penalised and **man-up** (man-down) situations create a power play; fouls are technical (offside) or personal (slashing, tripping).
- In men's field, checking (with the crosse) is legal within reach of the ball.` },
      { id: "skills", title: "Skills & movement", module: "m2", body: `- **Scooping** ground balls, **cradling** to protect the ball, and **throwing/catching** at speed.
- Shooting: overhand, sidearm and underhand, with quick releases near the crease.
- Defence: footwork, stick-checking, and the goalie's reactions.
- Biomechanics: the crosse is a long lever \u2014 wrist snap and follow-through drive the shot; acceleration of the head of the stick is the speed secret.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Ankle sprains from cutting on grass/turf; knee injuries; concussions from checks and contact; overuse of the shoulder.
- Prevention: proper stick-check technique, protective equipment fit, strength, and strict head-injury management.` }
    ]
  },
  {
    slug: "bando",
    title: "Bando",
    altNames: null,
    category: "field",
    emoji: "\u{1F3D2}",
    lede: "Bando is a traditional South Asian stick-and-ball field game \u2014 rugby-like beyond the posts, with a bamboo stick to strike a small ball.",
    infobox: [
      ["Invented", "Indian subcontinent (ancient origins)"],
      ["Governing body", "World Bando Federation"],
      ["Format", "Team \u00B7 12 per side (ages vary)"],
      ["Duration", "2 halves with short break"],
      ["Pitch", "~100 \u00D7 60 m with central lines"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Stick-contact bruises, ankle sprains, shoulder strains"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["South Asian regional tournaments", "Bando national championships", "Bando World Cup"],
    keyTerms: ["Raider", "Chhadi", "Tossa", "Goal", "Touching the post"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Bando** is one of the Indian subcontinent's classic stick games \u2014 a cross between rugby-style tagging and stick-hockey aiming. Players carry a light bamboo stick (the **chhadi**), strike a small ball, and score by touching or crossing the opponents' goal line. It teaches agility, courage and controlled stick use.` },
      { id: "field", title: "The pitch & equipment", module: "m4", body: `- **Pitch**: roughly rectangular, ~100 \u00D7 60 m for men, with a halfway line and goal areas marked.
- **Chhadi**: a ~1.2 m bamboo stick carried by fielders; the striker hits the tossa (wicker ball) with it.
- **Tossa**: a small, hard woven ball.
- Players wear simple jersey and shorts; sticks must be safe (sanded, no sharp splits).` },
      { id: "rules", title: "Core rules", module: "m4", body: `- The striker hits the tossa from the centre; fielders return it with controlled stick strikes.
- **Goal**: the ball crossing the goal line or being touched to the goal post scores.
- Tagging/obstruction rules give play a rugby-like physical edge \u2014 contact must not become dangerous.
- Officials enforce fair stick use: no overhead swinging, no striking players, and penalties for dangerous play.
- Ball out of bounds restarts by the closest defender.` },
      { id: "skills", title: "Skills & movement", module: "m2", body: `- Striking accuracy with the chhadi, controlled trapping, and quick recovery of the tossa.
- Player movement mixes running, dodging and sudden direction changes \u2014 excellent for agility training.
- Stick biomechanics: a short, stiff lever hit under the wrist with a level follow-through; wrist snap controls direction.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Bruises from stick-to-body contact, ankle sprains, shoulder strain from overhead strikes.
- Prevention: mandatory safe-stick rules, technique coaching on below-waist striking, conditioning, and immediate stoppage for head impact.` }
    ]
  },
  {
    slug: "football-five",
    title: "Mini Football",
    altNames: "5-a-side, 7-a-side",
    category: "field",
    emoji: "\u{1F3C0}",
    lede: "Mini football is the reduced-team football family (5-a-side, 7-a-side) used across schools and recreation to give everyone more touches and more play.",
    infobox: [
      ["Invented", "Europe (small-sided school football tradition)"],
      ["Governing body", "FIFA (small-sided rules)"],
      ["Format", "Team \u00B7 5 or 7 per side"],
      ["Duration", "Shorter halves; age-based"],
      ["Pitch", "Small \u2014 25\u201345 \u00D7 15\u201330 m (5s), larger 7s"],
      ["Olympic", "Not an Olympic event (youth codes)"],
      ["Common injuries", "Overuse of the knee, ankle sprains, growth-plate strains in youth"]
    ],
    modules: ["m2", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["School tournaments", "Mini-football leagues", "Youth football festivals"],
    keyTerms: ["Small-sided", "More touches", "Goalkeeper", "Sideline kick-in"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Mini football** adapts the laws of football to fewer players and smaller pitches \u2014 ideal for skill development, mass participation and PE classes. Five-a-side and seven-a-side formats keep the ball moving and give children far more touches per session.` },
      { id: "rules", title: "Laws & variations", module: "m4", body: `- **5-a-side**: teams of 5 (including a goalkeeper), small pitch (25\u201345 \u00D7 15\u201330 m), kick-ins instead of throw-ins, and shortened halves (often 20\u201325 min).
- **7-a-side**: 7 per side, slightly larger pitch, often used in junior football before moving to 11s.
- Scoring, offside (usually none in 5s) and cards follow simplified football laws adapted by age.
- Goalkeepers may roll or kick out; no slide-tackles in many junior codes.` },
      { id: "skills", title: "Development outcomes", module: "m3", body: `- Small-sided games boost touches per player, decision speed and dribbling confidence.
- Builds passing combinations and 1-v-1 attacking/defending reps.
- Coaching focus: movement off the ball, quick transition, and everyone attacks and defends \u2014 a perfect pedagogical tool.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Youth overuse of the knee and ankle; growth-plate strains if volumes spike too fast.
- Prevention: sensible session loads, proper surface, shin guards, and mixing formats rather than over-specialising children.` }
    ]
  },
  {
    slug: "softball",
    title: "Softball",
    altNames: null,
    category: "field",
    emoji: "\u{1F3AE}",
    lede: "Softball is baseball's faster sibling \u2014 a larger ball, underarm pitching and a smaller diamond, played fast-paced by twelve players in fast-pitch.",
    infobox: [
      ["Invented", "USA (1887 Chicago)"],
      ["Governing body", "WBSC"],
      ["Format", "Team \u00B7 9\u201310 players (fast-pitch 9)"],
      ["Duration", "7 innings (fast-pitch)"],
      ["Diamond", "60\u201365 ft bases \u00B7 pitching 43\u201346 ft"],
      ["Olympic", "Summer (1996\u20132008, 2020, 2028)"],
      ["Common injuries", "Shoulder/elbow overuse, ankle sprains, knee injuries"]
    ],
    modules: ["m1", "m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Olympic Games", "WBSC Women's World Cup", "World Championships", "Asian Games"],
    keyTerms: ["Fast pitch", "Underhand", "Strikeout", "Slap hit", "Innings"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Softball** is a bat-and-ball game on a diamond, pitching underhand from a closer rubber than baseball and with a larger, softer ball. The fast-pitch code \u2014 a seven-inning build to a finish \u2014 is the Olympic version, and slow-pitch is the recreational code.` },
      { id: "field", title: "The diamond & equipment", module: "m4", body: `- **Diamond**: 60 ft (18.3 m) between bases (60 ft for fast-pitch youth to 65 ft for men); pitching distance 43\u201346 ft.
- **Ball**: circumference 30.5 cm (fast-pitch) \u2014 larger than baseball; a yellow-stitched ball.
- **Bat**: alloy/composite up to 34 in; helmets required for all batters.
- Fielders: fast-pitch uses 9 players (pitcher, catcher, four infielders, three outfielders); slow-pitch adds a 10th fielder.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Pitching**: underhand, with a windmill motion; the pitch must be within the strike zone.
- **Innings**: seven innings in fast-pitch (game shortened if a team leads by 7+ after 5 innings \u2014 the mercy/run rule).
- **Batting**: three strikes = out; four balls = walk; a fair hit and running the bases scores a run.
- Fielded outs: force-outs, tags, caught fly balls.
- **Slap hitting** (left-side bunts-and-runs) is a signature genuine skill.` },
      { id: "skills", title: "Skills & biomechanics", module: "m2", body: `- Pitching: an explosive windmill wind-up \u2014 the arm rotates overhead and the release spins the ball; elite speeds exceed 110 km/h.
- Hitting: a quick, level swing; bunting and slap hitting to beat the shift.
- Fielding: quick feet, accurate throws, and the double-play turn.
- Overhead, the underhand pitch places low rotational stress on the shoulder compared with baseball's overhand throw.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder and elbow overuse in pitchers (rotator cuff, ulnar ligament); ankle sprains in base running; knee injuries on the diamond dirt.
- Prevention: pitch-count limits and rest for young pitchers, throwing mechanics, and base-running technique.` }
    ]
  },
  {
    slug: "rounders",
    title: "Rounders",
    altNames: null,
    category: "field",
    emoji: "\u{1F3AE}",
    lede: "Rounders is England's traditional bat-and-ball game \u2014 the ancestor of baseball, played around a diamond with four posts and a side's innings.",
    infobox: [
      ["Invented", "England (Tudor-era bat and ball)"],
      ["Governing body", "Rounders (NRA / international bodies)"],
      ["Format", "Team \u00B7 9 a side (boys/girls formats)"],
      ["Duration", "2 innings per side"],
      ["Diamond", "~12 m between posts \u00B7 1st to 4th leg"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Ankle sprains, bat/ball knocks, throwing shoulder strain"]
    ],
    modules: ["m1", "m3", "m4"],
    court: null,
    verified: false,
    competitions: ["National Rounders Championships", "School rounders leagues", "European championships"],
    keyTerms: ["Post", "Rounder", "No-ball", "Feeder", "Batter"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Rounders** is a classic English team game where a batter hits a ball bowled underhand and then rounds four posts \u2014 scoring points for completed circuits and even extra for hitting the fourth post. It is a school-PE staple: safe, co-ed and full of catching, running and strategy.` },
      { id: "rules", title: "Rules & play", module: "m4", body: `- **Bowling**: underarm, one-bounce or full toss legal, within the batting square; a no-ball is penalised.
- **Batting**: after hitting, run to first post; you may stop at any post; more than one batter may occupy a post... simply: runners are safe when the ball is in flight.
- **Rounder**: a full circuit touching each of the four posts scores 1 point; a direct hit of the 4th post scores a half-rounder in some codes.
- **Outs**: the fielding side catches fly balls, tags runners between posts, or in some codes bowls the post (stumping).
- Two innings per side; the higher total wins.` },
      { id: "skills", title: "Skills & movement", module: "m3", body: `- Batting: grip the end of the rounders bat (a smooth, rounded stick) and strike a level hit into the gaps.
- Fielding: catch cleanly (fly balls), throw back quickly to the posts.
- Running: decision-making about when to run and when to stay \u2014 base-running tactics are the strategy of the game.
- The game is excellent for hand-eye coordination, throwing accuracy and spatial awareness.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Ankle sprains on the running bases, throwing shoulder strain, and occasional bat/ball knocks.
- Prevention: safe swing zone, helmets for age-group batters where used, proper throwing technique, and clear base-paths.` }
    ]
  },
  {
    slug: "cycle-polo",
    title: "Cycle Polo",
    altNames: "Bicycle Polo",
    category: "field",
    emoji: "\u{1F3C8}",
    lede: "Cycle polo is polo on bicycles \u2014 teams of riders control sticks, mallets and a ball while balancing on bikes out on a field.",
    infobox: [
      ["Invented", "Ireland/USA (fast cycling roots)"],
      ["Governing body", "Cycle Polo Association (various)"],
      ["Format", "Team \u00B7 3\u20134 riders per side (variants)"],
      ["Duration", "Short chukkas \u00B7 set periods"],
      ["Field", "~100 \u00D7 60 m (variants)"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Bike falls, wrist injuries, collisions"]
    ],
    modules: ["m2", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Cycle Polo World Championships", "National bicycle polo leagues"],
    keyTerms: ["Riding and hitting", "Mallets", "Goals", "Foul on the wheels"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Cycle polo** is a fast and skillful bike-ball sport: riders control a ball with mallets while staying balanced on bicycles. Because the hands steer, skilled players steer with the legs and strike with the mallet \u2014 a spectacular study in coordination and balance.` },
      { id: "field", title: "Field & equipment", module: "m4", body: `- Field: a large flat area (~100 \u00D7 60 m) with goalposts at each end.
- **Bikes**: standard bicycles (no gears in some codes), frames taped for safety.
- **Mallets**: long-handled sticks with a weighted head; players must not hit above a set height.
- Ball: a fist-sized felt or rubber ball.
- Helmets are mandatory on the bikes.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- The ball is played with the mallet only \u2014 no kicking or touching with wheels.
- **Goals** are scored by driving the ball between the posts \u2014 like field hockey/polo.
- Fouls include mallet striking above shoulder height (dangerous), knocking the opponent's wheel, and offside-style positioning rules in some codes.
- Restarts occur after the ball leaves the pitch; matches are short chukkas.` },
      { id: "skills", title: "Skills & biomechanics", module: "m2", body: `- **Riding skill** is the base: braking, turning and one-handed balance free the striking hand.
- Striking combines the bike's motion with a mallet swing; following through toward the goal.
- Players use the bike's speed and angling to win the ball \u2014 control and timing beat power.
- It is an outstanding PE activity for balance, coordination and decision-making under movement.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Bike falls, wrist and shoulder impacts, collisions between players.
- Prevention: helmets and padded gloves, correct mallet-height rules, and separating age groups; first aid for scrapes and falls with R.I.C.E. for sprains.` }
    ]
  },
  {
    slug: "indoor-hockey",
    title: "Indoor Hockey",
    altNames: null,
    category: "court",
    emoji: "\u{1F3D1}",
    lede: "Indoor hockey is a six-a-side version of field hockey played in a rink-like indoor court \u2014 shorter, quicker and heavy on skill with a light ball.",
    infobox: [
      ["Invented", "Germany (early 20th century indoor court game)"],
      ["Governing body", "FIH"],
      ["Format", "Team \u00B7 6 per side (5 + GK)"],
      ["Duration", "2 \u00D7 20-minute halves"],
      ["Court", "36\u201344 \u00D7 18\u201322 m rink-like boards"],
      ["Olympic", "Not an Olympic discipline"],
      ["Common injuries", "Bearded strains, ankle sprains, stick knocks"]
    ],
    modules: ["m1", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["FIH Indoor Hockey World Cup", "Continental indoor championships"],
    keyTerms: ["Pushing only", "Half-field tactical", "Sideline boards", "Bully restart"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Indoor hockey** adapts field hockey to a compact court with low boards all around the perimeter. Six per side play a faster, more tactical game where **only pushes** (no hits, no raised balls) are allowed \u2014 making it superb for skill development and quick decision-making.` },
      { id: "court", title: "The court & equipment", module: "m4", body: `- Court: 36\u201344 m long, 18\u201322 m wide, enclosed by ~10 cm high boards.
- Goals are smaller (1 m high \u00D7 2 m wide in most codes).
- A short, solid indoor hockey stick and a lighter, flatter ball (or top-ball).
- Players play in an indoor court; the ball is pushed, never hit or raised above knee height.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- **Push only**: no hitting, no scoops; the ball may not be raised (except a gentle push into the goal).
- Six players restart play from restarts, with the **bully** used after certain stoppages in some codes.
- The boards keep the ball in play \u2014 rebounds are tactical.
- Offside does not exist; the match is 2 \u00D7 20 minutes (or 4 \u00D7 10 for some levels).
- Penalties: cards (green/yellow/red) for fouls; penalty corners give attacking set plays.` },
      { id: "skills", title: "Skills & tactics", module: "m5", body: `- Push accuracy and receiving under close marking become decisive; the boards create constant 50-50 contests.
- Quick transitions and short passing triangles beat individual runs because space is small.
- Team talk and communication (the "call" and "swap") are vital \u2014 an ideal game for leadership and group cohesion practice in PE.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Ankle sprains from the hard court, muscle strains from repeated starts, and stick knocks to shins/feet.
- Prevention: indoor-specific footwear, free play space against the boards, and full face-mask use for goalkeepers.` }
    ]
  },
  {
    slug: "broomball",
    title: "Broomball",
    altNames: null,
    category: "court",
    emoji: "\u{1F3D2}",
    lede: "Broomball is a hockey-like game played on ice with brooms and a ball instead of sticks and a puck \u2014 safe, sociable and hugely popular recreationally.",
    infobox: [
      ["Invented", "Canada (1960s snow-and-ice recreation)"],
      ["Governing body", "IBF"],
      ["Format", "Team \u00B7 6 per side (5 + GK)"],
      ["Duration", "2\u20133 periods"],
      ["Rink", "Ice rink, no standard puck"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Ice slips and falls, knee sprains, concussions from collisions"]
    ],
    modules: ["m1", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["Broomball World Championships", "National broomball leagues"],
    keyTerms: ["Broom", "Ice ball", "Goal crease", "No stick on puck play"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Broomball** is ice hockey with a softer heart: players push an inflated ball with a padded broom across the ice toward the goal. It keeps hockey's fun and speed but with far fewer injuries \u2014 making it a favorite physical-education activity on rinks.` },
      { id: "field", title: "Rink & equipment", module: "m4", body: `- Played on a standard ice rink with goals at each end.
- **Broome**: a mop-like device; the player sweeps the ball by pushing with the head.
- **Ball**: a 10\u201315 cm inflated or hard ball.
- Players wear helmets, shin pads and grippy shoes (ice-grip footwear) \u2014 no skates in the walk-mode code.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- Goal scored by sweeping the ball into the net; the goalie defends the crease with a special broom.
- Body check is just contact-limited or contact separate by code.
- Offsides and icing follow hockey-ish rules in the standard code.
- Restarts by referee drop-ball; penalties (box) for rough play.` },
      { id: "skills", title: "Skills & safety", module: "m3", body: `- Footwork on ice is the base skill \u2014 a study in balance and sliding stop.
- Swing control, ball placement and the short pass are the core broomball skills.
- Team movement around the crease rehearses spacing and communication.
- Because falls are the main risk, learning to fall and get up safely on ice is taught first.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Falls on the ice (wrist, knee), collisions, and some concussions from heads-up play.
- Prevention: grippy ice shoes, helmets, no-rush rules for beginners, and stretching before skating.` }
    ]
  },
  {
    slug: "floorball",
    title: "Floorball",
    altNames: "Innebandy",
    category: "court",
    emoji: "\u{1F3D2}",
    lede: "Floorball is a fast indoor stick-and-ball game like hockey, using a light plastic stick and a perforated ball \u2014 hugely popular in schools across the world.",
    infobox: [
      ["Invented", "Sweden (early 1970s)"],
      ["Governing body", "IFF"],
      ["Format", "Team \u00B7 5 per side (4 + GK)"],
      ["Duration", "3 \u00D7 20-minute periods"],
      ["Court", "40 \u00D7 20 m rink with low boards"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Ankle sprains, knee injuries, stick and ball knocks"]
    ],
    modules: ["m1", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Floorball World Championships", "Continental floorball leagues"],
    keyTerms: ["Plastic stick", "Perforated ball", "Zonal play", "Face-off"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Floorball** is a five-a-side court game played indoors with a light carbon-plastic stick and a lightweight perforated ball. It is the world's fastest-growing school stick sport \u2014 safe (no body contact, no high sticks) yet energetic and skill-rich.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- Court: 40 \u00D7 20 m, enclosed by low 50 cm boards with a rink-style layout.
- Goals: small net goals at both ends with a crease zone.
- **Stick**: ~1 m light plastic stick with a curved blade; the ball is a perforated plastic ball.
- Equipment is light \u2014 no pads (only goalkeeper protective gear); full face protection for the keeper.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- No body contact, no lifting the stick above the knee, no kicking except the goalies' zone.
- The ball may be played with the flat side of the stick and stopped with the body (not the hands).
- Five players (4 field + 1 goalkeeper) \u2014 three periods of 20 minutes.
- Free hits replace penalties for most fouls; a 2-minute penalty box for deliberate, physical offences.
- Face-offs start each period and after goals.` },
      { id: "skills", title: "Skills & tactics", module: "m5", body: `- Quick stickhandling, accurate passing and wrist-accuracy in shooting.
- Small courts mean possession and movement without the ball matter \u2014 constant give-and-go.
- Communication and rapid switching define good floorball; it is an ideal game for team-building and positional awareness.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Ankle sprains from pivoting on the court, knee strain, and minor stick/ball knocks.
- Prevention: stick-control rules, perimeter safety, warm-up, and no raised blades near the face.` }
    ]
  },
  {
    slug: "handball-beach",
    title: "Beach Handball",
    altNames: null,
    category: "court",
    emoji: "\u{1F3CA}",
    lede: "Beach handball brings team handball to the sand with acrobatic goals, two-point spectaculars (kicks and spinner goals) and continuous entertainment.",
    infobox: [
      ["Invented", "Italy/USA (beach variant of team handball)"],
      ["Governing body", "IHF"],
      ["Format", "Team \u00B7 4 per side (3 + GK)"],
      ["Duration", "2 \u00D7 10-minute sets"],
      ["Court", "27 \u00D7 12 m sand court with goal area"],
      ["Olympic", "Not yet Olympic; IHF global event"],
      ["Common injuries", "Sand scrapes, ankle sprains, knee overload"]
    ],
    modules: ["m1", "m3", "m5"],
    court: null,
    verified: false,
    competitions: ["IHF Beach Handball World Championships", "European Beach Handball"],
    keyTerms: ["Kicker", "Spinner", "Flyer", "Two-point goal", "Goal area"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Beach handball** is team handball on sand \u2014 four players a side, shorter sets and spectacular scoring. A **kicker** or **spinner** goal (rotation in the air) scores **2 points**, which changes team strategy entirely: spectacular play is rewarded.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- Court: 27 \u00D7 12 m of sand with the goal area (6 m) and free-throw line marked; goals posts are padded.
- Players often play barefoot or in light sand-safe shoes.
- The ball is a standard team-handball ball, but matched to the smaller team.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- Two sets of 10 minutes; if a team wins both sets it takes the match, otherwise a shoot-out golden goal decides (the so-called golden set).
- In-play: passing, carrying, jumping shots; the goalkeeper starts play after a goal.
- **Two-point goals**: kicks, spin-shots and goals from outside a marked zone count double \u2014 rewarding creativity.
- No excessive contact; fouls lead to free throws and penalties.` },
      { id: "skills", title: "Skills & movement", module: "m3", body: `- Jump and spin shots with control on soft sand \u2014 the sand lower of air-time and demand stronger legs.
- Handling and throwing against the sand's drag; quick recovery runs.
- Physical demands: repeated explosive jumps and fast direction changes \u2014 a conditioning goldmine.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Sand scrapes, ankle sprains from unstable landings, knee overload from repeated jumping.
- Prevention: proper landing technique, sand-friendly footwear, hydration in sun, and soft-surface conditioning.` }
    ]
  },
  {
    slug: "kin-ball",
    title: "Kin-Ball",
    altNames: "Omnikin",
    category: "court",
    emoji: "\u{1F3A8}",
    lede: "Kin-Ball is a giant-ball sport where three teams of four rally a 1.2 m ball, with one team always calling which rival must receive \u2014 the game of no onlookers.",
    infobox: [
      ["Invented", "Canada (1986, by Mario Demers)"],
      ["Governing body", "IKBF"],
      ["Format", "Team \u00B7 3 teams of 4 per match"],
      ["Duration", "3\u20135 periods, first to a target"],
      ["Court", "20 \u00D7 20 m (or school hall adapted)"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Shoulder strain, knee strain, ankle sprains"]
    ],
    modules: ["m1", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["Kin-Ball World Cup", "National Kin-Ball championships"],
    keyTerms: ["Omnikin ball", "Three teams", "Call-out", "No possession chase", "Cooperation"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Kin-Ball** is a three-team cooperative invasion game. A huge 1.2 m ball is hit toward a court; the serving team **calls the colour** of a rival that must catch it. If the ball touches the floor, the called team concedes a point to the others. It is pure fun, cooperation and spatial awareness.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- Court: ideally 20 \u00D7 20 m indoor; lines and neutral zones marked.
- **Ball**: the omnikin ball \u2014 a giant, soft, covered sphere ~1.2 m diameter, light enough to hit with the whole arm.
- Three teams distinguished by colour (commonly pink, black, grey).
- No special shoes needed \u2014 indoor court shoes.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- The serving team hits the ball (no palm contact \u2014 use the closed fist or forearm) and must **call out** a rival team's colour before impact.
- The called team must catch the ball before it touches the ground; success earns them the serve, failure awards a point to the other two teams.
- A team losing the ball runs while a new serve begins; points go to targets.
- Max of two touches before the hit in some codes; the ball must travel airborne forward.` },
      { id: "skills", title: "Cooperation & tactics", module: "m5", body: `- Because three teams play, **no team ever "watches"**: constant anticipation, positioning and communication.
- Hitting technique: a two-hand under-fist contact with a follow-through (arm as a lever).
- Tactics: confuse opponents with unusual call-outs and sudden directions; position all four players to cover the court.
- It teaches spatial reasoning, cooperation and fast decision-making \u2014 an outstanding PE game.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder and wrist strain from repeated strikes; tripping in the crowded court.
- Prevention: warm-up for the arm and shoulder, court-space rules, and ball-control drills.` }
    ]
  },
  {
    slug: "fistball",
    title: "Fistball",
    altNames: null,
    category: "court",
    emoji: "\u{1F3D0}",
    lede: "Fistball is a volleyball-like game volleyed with a fist or forearm over a rope \u2014 five per side, two bounces allowed, and deep rallies.",
    infobox: [
      ["Invented", "Germany/Italy (19th century German Faustball)"],
      ["Governing body", "IFA"],
      ["Format", "Team \u00B7 5 per side"],
      ["Duration", "Best of sets to 25 points"],
      ["Court", "50 \u00D7 20 m \u00B7 rope height 2 m"],
      ["Olympic", "Not an Olympic sport"],
      ["Common injuries", "Shoulder strain, knee strain, finger injuries"]
    ],
    modules: ["m1", "m4", "m5"],
    court: null,
    verified: false,
    competitions: ["IFA Fistball World Championship", "Continental fistball cups"],
    keyTerms: ["Fist stroke", "Volley only", "Two bounces", "Serving deep", "Out of bounds"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Fistball** is played like volleyball but the ball is struck with a **fist or forearm** and may bounce once or twice on the ground before being returned over a rope. Five per team volley back and forth \u2014 the rallies are long and controlled, superb for coordination and teamwork.` },
      { id: "court", title: "Court & equipment", module: "m4", body: `- Court: 50 \u00D7 20 m (outdoor); the rope across at 2 m height.
- The ball is a light leather or synthetic ball.
- No net \u2014 a taut rope divides the court; players use the whole surface.
- Marked lines for the service zone and the 10 m line.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- Each team may touch the ball **twice** by individuals and the rally continues; the ball may bounce once or twice before return (codes vary).
- Only the **fist / forearm strike** is allowed \u2014 no palms, no catching.
- The serve must land in the opponent's deep zone; the rally counts as one point if missed.
- Sets to 25, best of 2\u20133 sets wins.` },
      { id: "skills", title: "Skills & tactics", module: "m5", body: `- The fist stroke \u2014 a firm, flat-hit from shoulder to hip with a bent elbow that gives control without power loss.
- Positioning to cover the 2-bounce rule and the deep return.
- Communication and the "call" before switches determine court coverage \u2014 classic cohesion work.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Shoulder strain from long rallies, knee strain from repeated bends, finger knocks.
- Prevention: shoulder mobility and strength, glove-guard for the fist, and safe court margins.` }
    ]
  },
  {
    slug: "lacrosse-box",
    title: "Box Lacrosse",
    altNames: null,
    category: "court",
    emoji: "\u{1F3D2}",
    lede: "Box lacrosse is indoor lacrosse on a hockey-rink-sized floor \u2014 six per side, wall rebounds and fast, physical, high-scoring play.",
    infobox: [
      ["Invented", "Canada (early 20th century arena version)"],
      ["Governing body", "World Lacrosse"],
      ["Format", "Team \u00B7 6 per side (5 + GK)"],
      ["Duration", "3 periods"],
      ["Floor", "~55 \u00D7 25 m rink-like boards"],
      ["Olympic", "Not an Olympic code (sixes is Olympic)"],
      ["Common injuries", "Concussion, shoulder injuries, ankle sprains"]
    ],
    modules: ["m1", "m3", "m6"],
    court: null,
    verified: false,
    competitions: ["NLL (National Lacrosse League)", "Mann Cup (Canada)", "Box lacrosse world events"],
    keyTerms: ["Boards", "Foes", "Face-off at centre", "Fast break", "Goalie crease"],
    sections: [
      { id: "overview", title: "Overview", module: null, body: `**Box lacrosse** is the indoor, physical code of lacrosse, played in a rink-sized box with high boards. Six per side, three periods, plenty of contact and constant rebounds off the walls make it fast and watchable \u2014 the winter baby of Canadian lacrosse.` },
      { id: "floor", title: "Floor & equipment", module: "m4", body: `- Floor: ~55 \u00D7 25 m, enclosed by boards like a hockey rink.
- Goals at each end with a crease for the keeper; a centre face-off point.
- Crosse vary in length; the ball is the standard lacrosse ball.
- Padded equipment (shoulder pads, elbow pads, gloves, helmet) is heavier because contact is allowed.` },
      { id: "rules", title: "Core rules", module: "m4", body: `- Face-offs start play; the ball in play off the boards constantly.
- Body contact is allowed (within reach of the ball); no cross-checking or dangerous hits.
- The crease protects the goalie; a goal counts when the ball fully crosses the line.
- Minor penalties send a player to the box (man-short), creating power plays where teams attack the crease; some codes use 2-minute penalties.` },
      { id: "skills", title: "Skills & rhythm", module: "m3", body: `- The boards turn defence into attack in seconds \u2014 perpetual transition.
- Shooting in traffic: quick releases, screens, and the "reset" from the corner after a rebound.
- Conditioning: repeated 10\u201320 m bursts; close-quarters stick handling and finishing under pressure.` },
      { id: "injuries", title: "Common injuries & safety", module: "m6", body: `- Concussions from checks and boards; shoulder injuries from contact; ankle sprains on the flat surface.
- Prevention: fitted protective gear, controlled-contact training, strict head-contact rules and return-to-play protocols.` }
    ]
  }
  ]);
})();