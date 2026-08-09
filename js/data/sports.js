/* ==========================================================================
   THE ARENA — World Sports Directory
   A comprehensive index of sports from every region of the globe.
   Each entry: slug, name, category, type tags, origin, governing body,
   olympic status and a one-line description.
   ========================================================================== */

window.SPORTS = {
  categories: {
    "court":      { name: "Court Games",           emoji: "\u{1F3D0}", blurb: "Team and individual games played on a bounded hard court with defined zones." },
    "field":      { name: "Field Games",           emoji: "\u26BD",    blurb: "Games played on grass or turf fields, usually with goals and a flowing pitch." },
    "racquet":    { name: "Racquet & Net",          emoji: "\u{1F3BE}", blurb: "Sports built around a racquet, bat or paddle and a net or wall." },
    "combat":     { name: "Combat & Martial",       emoji: "\u{1F94A}", blurb: "Striking, grappling and weapon arts governed by weight classes and safety rules." },
    "athletics":  { name: "Athletics",              emoji: "\u{1F3C3}", blurb: "Track and field: running, jumping and throwing disciplines." },
    "aquatics":   { name: "Aquatics",               emoji: "\u{1F3CA}", blurb: "Swimming, diving, water polo and synchronized performance." },
    "gymnastics": { name: "Gymnastics",             emoji: "\u{1F938}", blurb: "Artistic, rhythmic and trampoline disciplines of strength, balance and flexibility." },
    "target":     { name: "Target & Precision",     emoji: "\u{1F3AF}", blurb: "Accuracy sports: archery, shooting, darts, boules and cue sports." },
    "adventure":  { name: "Adventure & Extreme",    emoji: "\u{26F3}",  blurb: "High-risk outdoor and gravity sports requiring skill, gear and courage." },
    "winter":     { name: "Winter Sports",          emoji: "\u26F7",    blurb: "Snow and ice sports contested on skis, skates, sleds and boards." },
    "indigenous": { name: "Indigenous & Traditional", emoji: "\u{1F38F}", blurb: "Heritage games from the subcontinent and beyond, central to physical-education curricula." },
    "mind":       { name: "Mind Sports",            emoji: "\u265F",    blurb: "Games of strategy and intellect recognised as formal competitions." },
    "misc":       { name: "Multi-Sport & Other",    emoji: "\u{1F3C5}", blurb: "Combined disciplines, motor sports and recreational contests." }
  },

  list: [
    /* ---------- ATHLETICS ---------- */
    { slug: "athletics", name: "Athletics", altNames: "Track & Field", category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "The umbrella sport of running, jumping and throwing — the oldest competitive sport in history." },
    { slug: "sprint", name: "Sprinting", altNames: "100m, 200m, 400m", category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "Short-distance running races demanding maximal speed and stride efficiency." },
    { slug: "middle-distance", name: "Middle-Distance Running", altNames: "800m, 1500m", category: "athletics", type: ["individual"], origin: "England", governing: "World Athletics", olympic: "Summer", desc: "Races blending speed with tactical pacing and endurance." },
    { slug: "long-distance", name: "Long-Distance Running", altNames: "5000m, 10000m, Marathon", category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "Endurance races from 5 km to the 42.195 km marathon." },
    { slug: "hurdling", name: "Hurdling", altNames: "110m Hurdles, 400m Hurdles", category: "athletics", type: ["individual"], origin: "England", governing: "World Athletics", olympic: "Summer", desc: "Sprinting races over 10 evenly spaced hurdles requiring rhythm and clearance technique." },
    { slug: "steeplechase", name: "Steeplechase", altNames: "3000m Steeplechase", category: "athletics", type: ["individual"], origin: "England", governing: "World Athletics", olympic: "Summer", desc: "A distance race over barriers and a water jump." },
    { slug: "relay", name: "Relay Racing", altNames: "4x100m, 4x400m", category: "athletics", type: ["team"], origin: "USA", governing: "World Athletics", olympic: "Summer", desc: "Team races where runners carry a baton around the track in fixed order." },
    { slug: "race-walking", name: "Race Walking", altNames: "20km Walk, 35km Walk", category: "athletics", type: ["individual"], origin: "England", governing: "World Athletics", olympic: "Summer", desc: "Walking races judged on continuous ground contact and a straight locked knee." },
    { slug: "high-jump", name: "High Jump", altNames: null, category: "athletics", type: ["individual"], origin: "Scotland", governing: "World Athletics", olympic: "Summer", desc: "A vertical jump event cleared using the Fosbury flop technique." },
    { slug: "long-jump", name: "Long Jump", altNames: null, category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "A horizontal jump from a take-off board into a sand pit." },
    { slug: "triple-jump", name: "Triple Jump", altNames: "Hop, Step & Jump", category: "athletics", type: ["individual"], origin: "Ireland", governing: "World Athletics", olympic: "Summer", desc: "A hop-step-jump sequence of horizontal jumping." },
    { slug: "pole-vault", name: "Pole Vault", altNames: null, category: "athletics", type: ["individual"], origin: "Germany", governing: "World Athletics", olympic: "Summer", desc: "A vertical jump in which a flexible pole is used to project the athlete over a bar." },
    { slug: "shot-put", name: "Shot Put", altNames: null, category: "athletics", type: ["individual"], origin: "Scotland", governing: "World Athletics", olympic: "Summer", desc: "Pushing a heavy metal ball from a 2.135 m circle." },
    { slug: "discus", name: "Discus Throw", altNames: null, category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "Throwing a heavy disc from a 2.5 m circle inside a 35-degree sector." },
    { slug: "hammer", name: "Hammer Throw", altNames: null, category: "athletics", type: ["individual"], origin: "Ireland / Scotland", governing: "World Athletics", olympic: "Summer", desc: "Whirling a steel ball on a wire around the body and releasing it into a 34.92-degree sector." },
    { slug: "javelin", name: "Javelin Throw", altNames: null, category: "athletics", type: ["individual"], origin: "Ancient Greece", governing: "World Athletics", olympic: "Summer", desc: "A spear thrown with an over-the-shoulder run-up within an 8 m lane." },

    /* ---------- FIELD TEAM GAMES ---------- */
    { slug: "football", name: "Football (Association)", altNames: "Soccer", category: "field", type: ["team"], origin: "England", governing: "FIFA", olympic: "Summer", desc: "The world's most popular sport — 11-a-side ball game played on a pitch with two goals." },
    { slug: "cricket", name: "Cricket", altNames: null, category: "field", type: ["team"], origin: "England", governing: "ICC", olympic: "Summer", desc: "A bat-and-ball game contested between two teams of eleven around a 22-yard pitch." },
    { slug: "field-hockey", name: "Field Hockey", altNames: "Hockey", category: "field", type: ["team"], origin: "England", governing: "FIH", olympic: "Summer", desc: "Eleven-a-side stick-and-ball game played on a water-based or astro turf pitch." },
    { slug: "rugby-union", name: "Rugby Union", altNames: "Rugby XV", category: "field", type: ["team", "contact"], origin: "England", governing: "World Rugby", olympic: "Summer", desc: "Fifteen-a-side full-contact sport where the oval ball is carried, passed and kicked." },
    { slug: "rugby-league", name: "Rugby League", altNames: "Rugby XIII", category: "field", type: ["team", "contact"], origin: "England", governing: "IRL", olympic: null, desc: "Thirteen-a-side variant of rugby with six-tackle possession rules." },
    { slug: "rugby-sevens", name: "Rugby Sevens", altNames: "7s", category: "field", type: ["team", "contact"], origin: "Scotland", governing: "World Rugby", olympic: "Summer", desc: "Seven-a-side rugby played in two seven-minute halves — an Olympic discipline." },
    { slug: "american-football", name: "American Football", altNames: "Gridiron", category: "field", type: ["team", "contact"], origin: "USA", governing: "NFL / IFAF", olympic: null, desc: "Eleven-a-side contact sport played on a 100-yard field with downs and scoring zones." },
    { slug: "canadian-football", name: "Canadian Football", altNames: null, category: "field", type: ["team", "contact"], origin: "Canada", governing: "CFL", olympic: null, desc: "Twelve-a-side gridiron variant played on a longer, wider field." },
    { slug: "australian-rules", name: "Australian Rules Football", altNames: "Aussie Rules, AFL", category: "field", type: ["team", "contact"], origin: "Australia", governing: "AFL", olympic: null, desc: "Eighteen-a-side oval-ball sport combining kicking, handballing and marking." },
    { slug: "gaelic-football", name: "Gaelic Football", altNames: "Peil", category: "field", type: ["team", "contact"], origin: "Ireland", governing: "GAA", olympic: null, desc: "Fifteen-a-side Irish sport played on a rectangular grass pitch with H-shaped goals." },
    { slug: "hurling", name: "Hurling", altNames: "Iom\u00E1na\u00EDocht", category: "field", type: ["team"], origin: "Ireland", governing: "GAA", olympic: null, desc: "The world's fastest field sport — played with a hurley stick and a small sliotar ball." },
    { slug: "lacrosse", name: "Lacrosse", altNames: null, category: "field", type: ["team"], origin: "Indigenous North America", governing: "World Lacrosse", olympic: "Summer", desc: "A stick-and-ball game using a netted crosse to catch, carry and shoot." },
    { slug: "bando", name: "Bando", altNames: null, category: "field", type: ["team"], origin: "South Asia", governing: "World Bando Federation", olympic: null, desc: "A rugby-adjacent bat-and-ball field game from the Indian subcontinent." },
    { slug: "kabaddi", name: "Kabaddi", altNames: "Kabbadi, Hu-Tu-Tu", category: "indigenous", type: ["team", "contact"], origin: "India", governing: "International Kabaddi Federation", olympic: "Demonstration", desc: "A seven-a-side contact tag-and-tackle game built on breath control and the chant." },
    { slug: "kho-kho", name: "Kho-Kho", altNames: null, category: "indigenous", type: ["team"], origin: "India", governing: "KKFI", olympic: null, desc: "A nine-a-side pursuit-and-dodge tag game played on a two-lane rectangular court." },
    { slug: "gilli-danda", name: "Gilli-Danda", altNames: null, category: "indigenous", type: ["individual"], origin: "India", governing: null, olympic: null, desc: "A traditional stick-and-pin game that underlies cricket and baseball mechanics." },
    { slug: "yubi-lakpi", name: "Yubi Lakpi", altNames: null, category: "indigenous", type: ["team", "contact"], origin: "Manipur, India", governing: null, olympic: null, desc: "A coconut rugby game from Manipur played on a 45-metre pitch." },
    { slug: "malla-khamb", name: "Malla Khamb", altNames: "Pole Gymnastics", category: "indigenous", type: ["individual"], origin: "India", governing: null, olympic: null, desc: "Traditional Indian pole gymnastics combining strength and yogic poses." },

    /* ---------- COURT TEAM GAMES ---------- */
    { slug: "basketball", name: "Basketball", altNames: "Hoops", category: "court", type: ["team"], origin: "USA", governing: "FIBA", olympic: "Summer", desc: "Five-a-side court game of shooting a ball through a raised hoop." },
    { slug: "volleyball", name: "Volleyball", altNames: null, category: "court", type: ["team"], origin: "USA", governing: "FIVB", olympic: "Summer", desc: "Six-a-side net game where teams rally a ball over a high net without letting it touch the floor." },
    { slug: "beach-volleyball", name: "Beach Volleyball", altNames: "Sand Volleyball", category: "court", type: ["team"], origin: "USA", governing: "FIVB", olympic: "Summer", desc: "Two-a-side volleyball played on sand, best of three sets." },
    { slug: "handball", name: "Handball", altNames: "Team Handball, European Handball", category: "court", type: ["team"], origin: "Denmark / Germany", governing: "IHF", olympic: "Summer", desc: "Seven-a-side game of throwing a ball into a goal from inside a 6 m crease." },
    { slug: "netball", name: "Netball", altNames: null, category: "court", type: ["team"], origin: "England", governing: "INF", olympic: null, desc: "Seven-a-side game of passing and shooting into a raised ring, no dribbling or contact." },
    { slug: "korfball", name: "Korfball", altNames: null, category: "court", type: ["team", "mixed"], origin: "Netherlands", governing: "IKF", olympic: null, desc: "A mixed-gender sport similar to netball with a korf pole at each end." },
    { slug: "sepaktakraw", name: "Sepak Takraw", altNames: "Kick Volleyball", category: "court", type: ["team"], origin: "Southeast Asia", governing: "ISTAF", olympic: "Asian Games", desc: "A rattan ball played with feet, knees and head over a low net." },
    { slug: "futsal", name: "Futsal", altNames: "5-a-side Indoor Football", category: "court", type: ["team"], origin: "Uruguay / Brazil", governing: "FIFA", olympic: null, desc: "Five-a-side football on a hard court with a low-bounce ball." },
    { slug: "indoor-hockey", name: "Indoor Hockey", altNames: null, category: "court", type: ["team"], origin: "Germany", governing: "FIH", olympic: null, desc: "Six-a-side hockey played in a rink-like enclosed court." },
    { slug: "broomball", name: "Broomball", altNames: null, category: "court", type: ["team"], origin: "Canada", governing: "IBF", olympic: null, desc: "Ice game played with brooms and a ball instead of sticks and a puck." },
    { slug: "dodgeball", name: "Dodgeball", altNames: null, category: "court", type: ["team"], origin: "England (variants)", governing: "WDBF", olympic: null, desc: "A court game where teams hurl balls to eliminate opponents by direct hit." },
    { slug: "floorball", name: "Floorball", altNames: "Innebandy", category: "court", type: ["team"], origin: "Sweden", governing: "IFF", olympic: null, desc: "An indoor stick-and-ball game like hockey, played with a light plastic stick." },

    /* ---------- RACQUET & NET ---------- */
    { slug: "tennis", name: "Tennis", altNames: "Lawn Tennis", category: "racquet", type: ["individual", "pairs"], origin: "England", governing: "ITF", olympic: "Summer", desc: "Racquet sport played on grass, clay or hard courts across a central net." },
    { slug: "badminton", name: "Badminton", altNames: null, category: "racquet", type: ["individual", "pairs"], origin: "England (modern)", governing: "BWF", olympic: "Summer", desc: "A shuttlecock game over a 1.55 m net — the fastest racquet sport in the world." },
    { slug: "table-tennis", name: "Table Tennis", altNames: "Ping Pong", category: "racquet", type: ["individual", "pairs"], origin: "England", governing: "ITTF", olympic: "Summer", desc: "A tabletop racquet sport of spin, speed and reaction." },
    { slug: "squash", name: "Squash", altNames: null, category: "racquet", type: ["individual"], origin: "England", governing: "WSF", olympic: null, desc: "A wall game where players rally a rubber ball within four walls." },
    { slug: "racquetball", name: "Racquetball", altNames: null, category: "racquet", type: ["individual"], origin: "USA", governing: "IRF", olympic: null, desc: "A fast wall game with a short-handled racquet and hollow ball." },
    { slug: "paddle-tennis", name: "Paddle Tennis", altNames: "Platform Tennis", category: "racquet", type: ["individual", "pairs"], origin: "USA", governing: null, olympic: null, desc: "A tennis-like game on a smaller court with solid paddles." },
    { slug: "pickleball", name: "Pickleball", altNames: null, category: "racquet", type: ["individual", "pairs"], origin: "USA", governing: "USA Pickleball", olympic: null, desc: "A paddle sport on a small court with a low net and a perforated plastic ball." },
    { slug: "padel", name: "Padel", altNames: "Paddle Tennis (Spain)", category: "racquet", type: ["pairs"], origin: "Mexico / Spain", governing: "FIP", olympic: null, desc: "A doubles wall sport played in an enclosed court with solid paddles." },
    { slug: "wallball", name: "Wallball", altNames: "One-Wall Handball", category: "racquet", type: ["individual"], origin: "USA / Ireland", governing: "WPH", olympic: null, desc: "A handball variant played against a single wall." },
    { slug: "jai-alai", name: "Jai Alai", altNames: "Cesta Punta", category: "racquet", type: ["individual", "pairs"], origin: "Basque Country", governing: "FIPV", olympic: null, desc: "The fastest ball sport, played with a curved wicker cesta against a wall." },
    { slug: "soft-tennis", name: "Soft Tennis", altNames: null, category: "racquet", type: ["individual", "pairs"], origin: "Japan", governing: "ISTF", olympic: null, desc: "A tennis variant using a soft rubber ball, popular in Asia." },
    { slug: "deck-tennis", name: "Deck Tennis", altNames: "Ring Tennis", category: "racquet", type: ["pairs"], origin: "USA", governing: null, olympic: null, desc: "A ring tossed over a low net on a ship's deck — a classic P.E. recreation activity." },

    /* ---------- COMBAT ---------- */
    { slug: "boxing", name: "Boxing", altNames: "Pugilism", category: "combat", type: ["individual", "contact"], origin: "Ancient Greece / England", governing: "IBA / WBA / WBC", olympic: "Summer", desc: "A striking sport contested in a ring with gloved fists over timed rounds." },
    { slug: "wrestling", name: "Wrestling", altNames: "Freestyle & Greco-Roman", category: "combat", type: ["individual", "contact"], origin: "Ancient Greece", governing: "UWW", olympic: "Summer", desc: "Grappling combat where the aim is to pin the opponent's shoulders to the mat." },
    { slug: "judo", name: "Judo", altNames: "The Gentle Way", category: "combat", type: ["individual", "contact"], origin: "Japan", governing: "IJF", olympic: "Summer", desc: "A throwing and grappling martial art where a clean throw or hold scores points." },
    { slug: "taekwondo", name: "Taekwondo", altNames: null, category: "combat", type: ["individual", "contact"], origin: "Korea", governing: "World Taekwondo", olympic: "Summer", desc: "A Korean striking art emphasising high kicks and fast footwork, scored electronically." },
    { slug: "karate", name: "Karate", altNames: null, category: "combat", type: ["individual", "contact"], origin: "Okinawa / Japan", governing: "WKF", olympic: "Summer", desc: "A striking martial art with kata (forms) and kumite (sparring) disciplines." },
    { slug: "kung-fu", name: "Kung Fu / Wushu", altNames: "Wushu", category: "combat", type: ["individual", "contact"], origin: "China", governing: "IWUF", olympic: null, desc: "Chinese martial arts blending striking, forms and weapons." },
    { slug: "muay-thai", name: "Muay Thai", altNames: "Thai Boxing", category: "combat", type: ["individual", "contact"], origin: "Thailand", governing: "IFMA", olympic: null, desc: "Thailand's national sport — striking with fists, elbows, knees and shins." },
    { slug: "mma", name: "Mixed Martial Arts", altNames: "MMA", category: "combat", type: ["individual", "contact"], origin: "Brazil / USA", governing: "UFC / IMMAF", olympic: null, desc: "Full-contact combat combining striking and grappling arts." },
    { slug: "fencing", name: "Fencing", altNames: "Foil, \u00C9p\u00E9e, Sabre", category: "combat", type: ["individual"], origin: "Italy / France", governing: "FIE", olympic: "Summer", desc: "Sword duelling with three distinct weapons and electronic scoring." },
    { slug: "kabaddi-team", name: "Kabaddi", altNames: null, category: "combat", type: ["team", "contact"], origin: "India", governing: "IKF", olympic: "Demonstration", desc: "A contact tag sport sometimes classed under combat for its tackling demands." },
    { slug: "sumo", name: "Sumo", altNames: null, category: "combat", type: ["individual", "contact"], origin: "Japan", governing: "Japan Sumo Association", olympic: null, desc: "Japanese heavyweight wrestling decided by forcing the opponent out of the dohyo." },
    { slug: "sambo", name: "Sambo", altNames: null, category: "combat", type: ["individual", "contact"], origin: "Soviet Union", governing: "FIAS", olympic: null, desc: "Russian hybrid grappling system, a recognised world sport." },
    { slug: "kendo", name: "Kendo", altNames: null, category: "combat", type: ["individual"], origin: "Japan", governing: "FIK", olympic: null, desc: "Japanese bamboo-sword fencing with shouts (kiai) and target strikes." },
    { slug: "aikido", name: "Aikido", altNames: null, category: "combat", type: ["individual"], origin: "Japan", governing: "IAF", olympic: null, desc: "A defensive martial art of joint locks and throws that redirect the attacker's force." },
    { slug: "kickboxing", name: "Kickboxing", altNames: null, category: "combat", type: ["individual", "contact"], origin: "Japan / USA", governing: "WAKO", olympic: null, desc: "A hybrid striking combat sport of punches and kicks in a ring." },
    { slug: "judo-ground", name: "Ju-Jitsu", altNames: "Jiu-Jitsu, BJJ", category: "combat", type: ["individual", "contact"], origin: "Japan / Brazil", governing: "JJIF / IBJJF", olympic: null, desc: "A ground-fighting system of submissions, sweeps and positions." },

    /* ---------- INDIVIDUAL ---------- */
    { slug: "gymnastics-artistic", name: "Artistic Gymnastics", altNames: "Men's & Women's Gymnastics", category: "gymnastics", type: ["individual"], origin: "Ancient Greece / Germany", governing: "FIG", olympic: "Summer", desc: "Exercises on floor, vault, bars, beam and rings judged on execution and difficulty." },
    { slug: "gymnastics-rhythmic", name: "Rhythmic Gymnastics", altNames: null, category: "gymnastics", type: ["individual"], origin: "USSR", governing: "FIG", olympic: "Summer", desc: "A women's discipline performing with ribbon, hoop, ball, clubs and rope." },
    { slug: "trampoline", name: "Trampoline", altNames: null, category: "gymnastics", type: ["individual"], origin: "USA", governing: "FIG", olympic: "Summer", desc: "Acrobatic jumps and somersaults executed on a sprung bed." },
    { slug: "swimming", name: "Swimming", altNames: "Freestyle, Backstroke, Breaststroke, Butterfly", category: "aquatics", type: ["individual"], origin: "England", governing: "World Aquatics", olympic: "Summer", desc: "Racing through water in four competitive strokes over varied distances." },
    { slug: "diving", name: "Diving", altNames: "Springboard & Platform", category: "aquatics", type: ["individual", "pairs"], origin: "Sweden / Germany", governing: "World Aquatics", olympic: "Summer", desc: "Acrobatic entries into water from 1 m, 3 m and 10 m boards." },
    { slug: "water-polo", name: "Water Polo", altNames: null, category: "aquatics", type: ["team"], origin: "England / Scotland", governing: "World Aquatics", olympic: "Summer", desc: "Seven-a-side team sport played in a deep pool combining swimming, passing and shooting." },
    { slug: "artistic-swimming", name: "Artistic Swimming", altNames: "Synchronised Swimming", category: "aquatics", type: ["team", "pairs"], origin: "Canada / USA", governing: "World Aquatics", olympic: "Summer", desc: "Choreographed routines performed in water to music with compulsory figures." },
    { slug: "open-water", name: "Open Water Swimming", altNames: "10 km Marathon Swim", category: "aquatics", type: ["individual"], origin: "France", governing: "World Aquatics", olympic: "Summer", desc: "Long-distance swimming in open bodies of water." },
    { slug: "surfing", name: "Surfing", altNames: null, category: "aquatics", type: ["individual"], origin: "Polynesia / Peru", governing: "ISA", olympic: "Summer", desc: "Riding ocean waves on a board with judged manoeuvre performance." },
    { slug: "canoe-sprint", name: "Canoe Sprint", altNames: "Canoeing & Kayaking", category: "aquatics", type: ["individual", "pairs"], origin: "Indigenous cultures / UK", governing: "ICF", olympic: "Summer", desc: "Flat-water racing in kayaks and canoes over 200–1000 m." },
    { slug: "rowing", name: "Rowing", altNames: null, category: "aquatics", type: ["individual", "team"], origin: "England", governing: "FISA", olympic: "Summer", desc: "Propelling a boat with oars in sculling and sweep events." },
    { slug: "sailing", name: "Sailing", altNames: "Yachting", category: "aquatics", type: ["individual", "team"], origin: "Netherlands / England", governing: "World Sailing", olympic: "Summer", desc: "Racing boats across courses using wind and tide." },
    { slug: "cycling", name: "Cycling", altNames: "Road, Track, BMX, MTB", category: "adventure", type: ["individual", "team"], origin: "France / England", governing: "UCI", olympic: "Summer", desc: "Racing bicycles in road, track, mountain and BMX disciplines." },
    { slug: "equestrian", name: "Equestrian", altNames: "Dressage, Show Jumping, Eventing", category: "misc", type: ["individual", "mixed"], origin: "Ancient Greece / Europe", governing: "FEI", olympic: "Summer", desc: "Horse-and-rider competitions across three Olympic disciplines." },
    { slug: "figure-skating", name: "Figure Skating", altNames: null, category: "winter", type: ["individual", "pairs"], origin: "USA / Canada", governing: "ISU", olympic: "Winter", desc: "Artistic skating on ice with jumps, spins and choreographed programs." },
    { slug: "speed-skating", name: "Speed Skating", altNames: null, category: "winter", type: ["individual"], origin: "Netherlands", governing: "ISU", olympic: "Winter", desc: "Racing on ice over 500 m to 10,000 m with pack and short-track formats." },
    { slug: "weightlifting", name: "Weightlifting", altNames: "Olympic Lifting", category: "misc", type: ["individual"], origin: "Ancient Greece / Egypt", governing: "IWF", olympic: "Summer", desc: "Maximal lifting in the snatch and clean-and-jerk, in bodyweight classes." },
    { slug: "powerlifting", name: "Powerlifting", altNames: null, category: "misc", type: ["individual"], origin: "USA / UK", governing: "IPF", olympic: null, desc: "Squat, bench press and deadlift one-repetition maximums." },
    { slug: "climbing", name: "Sport Climbing", altNames: "Bouldering, Lead, Speed", category: "adventure", type: ["individual"], origin: "France / USA", governing: "IFSC", olympic: "Summer", desc: "Climbing synthetic walls in boulder, lead and speed formats." },
    { slug: "skateboarding", name: "Skateboarding", altNames: null, category: "adventure", type: ["individual"], origin: "USA", governing: "World Skate", olympic: "Summer", desc: "Performing tricks and runs on a board, in street and park formats." },
    { slug: "golf", name: "Golf", altNames: null, category: "target", type: ["individual"], origin: "Scotland", governing: "IGF / R&A", olympic: "Summer", desc: "Striking a ball into a sequence of holes with the fewest strokes." },
    { slug: "triathlon", name: "Triathlon", altNames: null, category: "misc", type: ["individual"], origin: "USA / France", governing: "World Triathlon", olympic: "Summer", desc: "Swim–bike–run racing, the Olympic distance being 1.5-40-10." },
    { slug: "duathlon", name: "Duathlon", altNames: null, category: "misc", type: ["individual"], origin: "USA", governing: "World Triathlon", olympic: null, desc: "Run–bike–run multisport racing." },
    { slug: "modern-pentathlon", name: "Modern Pentathlon", altNames: null, category: "misc", type: ["individual"], origin: "France (de Coubertin)", governing: "UIPM", olympic: "Summer", desc: "Fencing, swimming, show jumping and a laser-run in one competition." },
    { slug: "roller-skating", name: "Roller Skating", altNames: "Inline Skating", category: "misc", type: ["individual"], origin: "Belgium / USA", governing: "World Skate", olympic: "Summer", desc: "Speed, artistic and roller-hockey events on wheels." },
    { slug: "bodybuilding", name: "Bodybuilding", altNames: null, category: "misc", type: ["individual"], origin: "Germany / UK", governing: "IFBB", olympic: null, desc: "A physique sport judged on muscular development, symmetry and conditioning." },
    { slug: "parkour", name: "Parkour / Free Running", altNames: "Art du D\u00E9placement", category: "adventure", type: ["individual"], origin: "France", governing: null, olympic: null, desc: "Moving efficiently through urban terrain with vaults, jumps and climbs." },

    /* ---------- TARGET & PRECISION ---------- */
    { slug: "archery", name: "Archery", altNames: null, category: "target", type: ["individual", "team"], origin: "Ancient Egypt / China", governing: "World Archery", olympic: "Summer", desc: "Shooting arrows at fixed 70 m targets in recurve and compound classes." },
    { slug: "shooting", name: "Shooting", altNames: "Rifle, Pistol, Shotgun", category: "target", type: ["individual"], origin: "Switzerland / England", governing: "ISSF", olympic: "Summer", desc: "Precision and shotgun events firing at targets over fixed distances." },
    { slug: "darts", name: "Darts", altNames: null, category: "target", type: ["individual"], origin: "England", governing: "PDC / WDF", olympic: null, desc: "Throwing darts at a segmented board, reducing from 501 to zero." },
    { slug: "billiards", name: "Billiards / Snooker", altNames: "Pool, Carom", category: "target", type: ["individual"], origin: "France / England", governing: "WPBSA / WCBS", olympic: null, desc: "Cue sports of potting balls on a baize table." },
    { slug: "bowls", name: "Lawn Bowls", altNames: "Bowling", category: "target", type: ["individual", "team"], origin: "England / Egypt", governing: "World Bowls", olympic: "Asian Games", desc: "Rolling biased balls close to a jack on a manicured green." },
    { slug: "petanque", name: "P\u00E9tanque", altNames: "Boules", category: "target", type: ["individual", "team"], origin: "France", governing: "FIPJP", olympic: null, desc: "French boules played by tossing metal balls toward a small cochonnet." },
    { slug: "curling", name: "Curling", altNames: "Chess on Ice", category: "winter", type: ["team"], origin: "Scotland", governing: "World Curling", olympic: "Winter", desc: "Sliding granite stones toward a house on ice with sweeping to control line." },
    { slug: "tenpin-bowling", name: "Ten-Pin Bowling", altNames: "Bowling", category: "target", type: ["individual"], origin: "USA", governing: "IBF", olympic: null, desc: "Rolling a ball down a lane to knock down a triangular rack of ten pins." },
    { slug: "axe-throwing", name: "Axe Throwing", altNames: null, category: "target", type: ["individual"], origin: "Canada", governing: "WATL", olympic: null, desc: "Hurling axes at a wooden target with scoring rings." },
    { slug: "horseshoes", name: "Horseshoes", altNames: null, category: "target", type: ["individual", "pairs"], origin: "England / USA", governing: "NHPA", olympic: null, desc: "Tossing horseshoes to ring a stake 40 feet away." },
    { slug: "quoits", name: "Quoits", altNames: "Ring Toss", category: "target", type: ["individual", "pairs"], origin: "England", governing: null, olympic: null, desc: "A traditional ring-tossing game, a frequent P.E. recreation activity." },

    /* ---------- WINTER ---------- */
    { slug: "alpine-skiing", name: "Alpine Skiing", altNames: "Downhill, Slalom", category: "winter", type: ["individual"], origin: "Austria / Norway", governing: "FIS", olympic: "Winter", desc: "Ski racing down groomed slopes through gates at high speed." },
    { slug: "cross-country-skiing", name: "Cross-Country Skiing", altNames: "Nordic Skiing", category: "winter", type: ["individual", "team"], origin: "Norway", governing: "FIS", olympic: "Winter", desc: "Aerobic skiing across flat and hilly terrain in classic and freestyle techniques." },
    { slug: "ski-jumping", name: "Ski Jumping", altNames: null, category: "winter", type: ["individual", "team"], origin: "Norway", governing: "FIS", olympic: "Winter", desc: "Flying off a ramp and landing after maximising distance and form." },
    { slug: "ice-hockey", name: "Ice Hockey", altNames: "Hockey on Ice", category: "winter", type: ["team", "contact"], origin: "Canada", governing: "IIHF", olympic: "Winter", desc: "Six-a-side fast sport played on a rink with a puck and sticks." },
    { slug: "bobsleigh", name: "Bobsleigh", altNames: "Bobsled", category: "winter", type: ["team"], origin: "Switzerland", governing: "IBSF", olympic: "Winter", desc: "Crews hurtle down an ice track in a steerable sled." },
    { slug: "luge", name: "Luge", altNames: null, category: "winter", type: ["individual", "pairs"], origin: "Switzerland", governing: "FIL", olympic: "Winter", desc: "Lying supine on a small sled down an ice track at up to 140 km/h." },
    { slug: "skeleton", name: "Skeleton", altNames: null, category: "winter", type: ["individual"], origin: "England", governing: "IBSF", olympic: "Winter", desc: "Head-first prone sledding down an ice track." },
    { slug: "snowboarding", name: "Snowboarding", altNames: null, category: "winter", type: ["individual"], origin: "USA", governing: "FIS / World Snowboard Federation", olympic: "Winter", desc: "Riding down snow on a single board in freestyle, race and air disciplines." },
    { slug: "biathlon", name: "Biathlon", altNames: null, category: "winter", type: ["individual", "team"], origin: "Norway / Sweden", governing: "IBU", olympic: "Winter", desc: "Cross-country skiing combined with rifle marksmanship." },
    { slug: "ice-dancing", name: "Ice Dance", altNames: null, category: "winter", type: ["pairs"], origin: "England / USA", governing: "ISU", olympic: "Winter", desc: "A dance discipline of figure skating performed to music." },
    { slug: "short-track", name: "Short Track Speed Skating", altNames: "Short Track", category: "winter", type: ["individual", "team"], origin: "Canada / Korea", governing: "ISU", olympic: "Winter", desc: "Pack-style speed skating around a tight 111 m track." },

    /* ---------- ADVENTURE & EXTREME ---------- */
    { slug: "mountaineering", name: "Mountaineering", altNames: "Alpinism", category: "adventure", type: ["individual"], origin: "Alps / Europe", governing: "UIAA", olympic: null, desc: "Climbing and summiting mountains with expedition skills." },
    { slug: "rock-climbing", name: "Rock Climbing", altNames: null, category: "adventure", type: ["individual"], origin: "Europe", governing: "IFSC", olympic: "Summer", desc: "Ascending natural rock using hands, feet and protective gear." },
    { slug: "bungee", name: "Bungee Jumping", altNames: null, category: "adventure", type: ["individual"], origin: "Oxford, England / New Zealand", governing: null, olympic: null, desc: "Falling from a height while attached to an elastic cord." },
    { slug: "skydiving", name: "Skydiving", altNames: "Parachuting", category: "adventure", type: ["individual"], origin: "France (first jump)", governing: "FAI", olympic: null, desc: "Falling from an aircraft and manoeuvring before opening a parachute." },
    { slug: "paragliding", name: "Paragliding", altNames: null, category: "adventure", type: ["individual"], origin: "France / Switzerland", governing: "FAI", olympic: null, desc: "Flying a foot-launched flexible wing in soaring flight." },
    { slug: "hang-gliding", name: "Hang Gliding", altNames: null, category: "adventure", type: ["individual"], origin: "USA / Germany", governing: "FAI", olympic: null, desc: "Flying a rigid-wing glider launched on foot." },
    { slug: "kite-surfing", name: "Kitesurfing", altNames: "Kiteboarding", category: "adventure", type: ["individual"], origin: "France / USA", governing: "GKA / World Kiteboarding League", olympic: null, desc: "Riding a board powered by a large controllable kite." },
    { slug: "windsurfing", name: "Windsurfing", altNames: "Sailboarding", category: "aquatics", type: ["individual"], origin: "USA / France", governing: "PWA", olympic: "Summer", desc: "Sailing on a board with a free-rotating sail and mast." },
    { slug: "wakeboarding", name: "Wakeboarding", altNames: null, category: "aquatics", type: ["individual"], origin: "USA / Australia", governing: "IWWF", olympic: null, desc: "Riding a board towed behind a boat, performing jumps and tricks." },
    { slug: "bouldering", name: "Bouldering", altNames: null, category: "adventure", type: ["individual"], origin: "France", governing: "IFSC", olympic: "Summer", desc: "Climbing short, difficult routes without ropes over crash pads." },
    { slug: "bicycle-moto", name: "BMX Racing", altNames: null, category: "adventure", type: ["individual"], origin: "USA", governing: "UCI", olympic: "Summer", desc: "Eight riders race small bikes around a dirt or paved track." },

    /* ---------- MOTOR & COMBINED ---------- */
    { slug: "formula-one", name: "Formula One", altNames: "F1", category: "misc", type: ["individual"], origin: "UK / Europe", governing: "FIA", olympic: null, desc: "The pinnacle of open-wheel circuit auto racing." },
    { slug: "motogp", name: "MotoGP", altNames: "Motorcycle Road Racing", category: "misc", type: ["individual"], origin: "Europe", governing: "FIM", olympic: null, desc: "The premier class of motorcycle circuit racing." },
    { slug: "rally", name: "Rallying", altNames: null, category: "misc", type: ["individual"], origin: "France / Italy", governing: "FIA", olympic: null, desc: "Point-to-point timed racing over closed public roads." },
    { slug: "karting", name: "Kart Racing", altNames: null, category: "misc", type: ["individual"], origin: "USA", governing: "CIK-FIA", olympic: null, desc: "Entry-level motor racing in small open-wheel karts — a feeder to F1." },

    /* ---------- MIND SPORTS ---------- */
    { slug: "chess", name: "Chess", altNames: "Shatranj", category: "mind", type: ["individual"], origin: "India", governing: "FIDE", olympic: "Asian Games", desc: "A two-player strategy board game with recognised international rankings." },
    { slug: "carrom", name: "Carrom", altNames: "Karrom", category: "mind", type: ["individual", "pairs"], origin: "India", governing: "ICF", olympic: null, desc: "Flicking discs into corner pockets on a polished wooden board." },
    { slug: "go", name: "Go", altNames: "Weiqi, Baduk", category: "mind", type: ["individual"], origin: "China", governing: "IGF", olympic: null, desc: "An ancient abstract strategy game of surrounding territory." },
    { slug: "draughts", name: "Draughts / Checkers", altNames: null, category: "mind", type: ["individual"], origin: "Egypt / France", governing: "FMJD", olympic: null, desc: "A strategy board game of diagonal captures and crowning." },
    { slug: "esports", name: "Esports", altNames: "Competitive Gaming", category: "mind", type: ["team", "individual"], origin: "USA / South Korea", governing: "IeSF / GEF", olympic: "Asian Games", desc: "Organised video-game competition at amateur and professional level." },

    /* ---------- RECREATION & MORE ---------- */
    { slug: "tug-of-war", name: "Tug of War", altNames: null, category: "misc", type: ["team"], origin: "Ancient China / Egypt", governing: "TWIF", olympic: "Former Olympic", desc: "Two teams pull against each other on opposite ends of a rope." },
    { slug: "football-five", name: "Mini Football", altNames: "5-a-side, 7-a-side", category: "field", type: ["team"], origin: "Europe", governing: "FIFA", olympic: null, desc: "Reduced-team variants of football for school and recreational play." },
    { slug: "softball", name: "Softball", altNames: null, category: "field", type: ["team"], origin: "USA", governing: "WBSC", olympic: "Summer", desc: "A baseball variant with a larger ball, underarm pitching and a smaller diamond." },
    { slug: "baseball", name: "Baseball", altNames: null, category: "field", type: ["team"], origin: "USA", governing: "WBSC", olympic: "Summer", desc: "A bat-and-ball game around a diamond with nine-player teams." },
    { slug: "rounders", name: "Rounders", altNames: null, category: "field", type: ["team"], origin: "England", governing: "NRA", olympic: null, desc: "An English bat-and-ball game ancestral to baseball." },
    { slug: "handball-beach", name: "Beach Handball", altNames: null, category: "court", type: ["team"], origin: "Italy / USA", governing: "IHF", olympic: null, desc: "Handball played on sand with acrobatic scoring." },
    { slug: "pelota", name: "Basque Pelota", altNames: null, category: "racquet", type: ["individual", "pairs"], origin: "Basque Country", governing: "FIPV", olympic: "Demonstration", desc: "A family of wall games played by hand, racquet or bat." },
    { slug: "kin-ball", name: "Kin-Ball", altNames: "Omnikin", category: "court", type: ["team", "mixed"], origin: "Canada", governing: "IKBF", olympic: null, desc: "Three teams of four rally a giant 1.2 m ball, calling the receiving team." },
    { slug: "tchoukball", name: "Tchoukball", altNames: null, category: "court", type: ["team"], origin: "Switzerland", governing: "FITB", olympic: null, desc: "A no-contact rebound sport played into two inclined frames." },
    { slug: "ultimate", name: "Ultimate (Frisbee)", altNames: "Ultimate Disc", category: "field", type: ["team"], origin: "USA", governing: "WFDF", olympic: "World Games", desc: "A seven-a-side non-contact game of passing a flying disc into an end zone." },
    { slug: "fistball", name: "Fistball", altNames: null, category: "court", type: ["team"], origin: "Germany / Italy", governing: "IFA", olympic: null, desc: "A team sport volleying a ball over a rope using fist or arm." },
    { slug: "cycle-polo", name: "Cycle Polo", altNames: "Bicycle Polo", category: "field", type: ["team"], origin: "Ireland / USA", governing: null, olympic: null, desc: "Polo played on bicycles with mallets." },
    { slug: "croquet", name: "Croquet", altNames: null, category: "target", type: ["individual", "pairs"], origin: "Ireland / France", governing: "WCF", olympic: null, desc: "Hitting balls through hoops on a manicured lawn with mallets." },
    { slug: "polocrosse", name: "Polocrosse", altNames: null, category: "misc", type: ["team"], origin: "Australia / USA", governing: "IPA", olympic: null, desc: "A combination of polo and lacrosse played on horseback." },
    { slug: "polo", name: "Polo", altNames: "Hockey on Horseback", category: "misc", type: ["team"], origin: "Central Asia / India", governing: "FIP", olympic: "Former Olympic", desc: "A ball game played on horseback with long-handled mallets." },
    { slug: "roller-derby", name: "Roller Derby", altNames: null, category: "misc", type: ["team", "contact"], origin: "USA", governing: "WFTDA / MRDA", olympic: null, desc: "A full-contact roller-skating sport raced on a banked or flat oval." },
    { slug: "roller-hockey", name: "Roller Hockey", altNames: "Inline Hockey", category: "misc", type: ["team"], origin: "USA / England", governing: "World Skate", olympic: null, desc: "Hockey played on quad or inline skates." },
    { slug: "lacrosse-box", name: "Box Lacrosse", altNames: null, category: "court", type: ["team", "contact"], origin: "Canada", governing: "World Lacrosse", olympic: null, desc: "Indoor lacrosse played on a hockey rink without ice." },
    { slug: "kabaddi-beach", name: "Beach Kabaddi", altNames: null, category: "indigenous", type: ["team"], origin: "India", governing: "AKFI", olympic: null, desc: "A softer four-a-side kabaddi variant on sand, popular in school sport." },
    { slug: "throwball", name: "Throwball", altNames: null, category: "court", type: ["team"], origin: "USA / India", governing: "TTFI", olympic: null, desc: "A two-touch volleyball-like game with throwing and catching, huge in Tamil Nadu." },
    { slug: "kabbadi-circle", name: "Circle Kabaddi", altNames: "Punjabi Kabaddi", category: "indigenous", type: ["team", "contact"], origin: "Punjab, India", governing: "KKFI", olympic: null, desc: "Kabaddi played in a circular arena, more grappling-heavy than mat kabaddi." },
    { slug: "tag-game", name: "Prisoner Tag", altNames: "Chain Tag", category: "indigenous", type: ["team"], origin: "Global", governing: null, olympic: null, desc: "A tag-based school recreation game developing agility and teamwork." },
    { slug: "kabaddi-women", name: "Women's Kabaddi", altNames: null, category: "indigenous", type: ["team", "contact"], origin: "India", governing: "IKF", olympic: null, desc: "The women's code of kabaddi with identical rules and reduced raid time." }
  ]
};

/* Convenience lookup map */
window.SPORTS_BY_SLUG = {};
window.SPORTS.list.forEach(function (s) {
  SPORTS_BY_SLUG[s.slug] = s;
});

window.CATEGORY_OF = function (slug) {
  return SPORTS_BY_SLUG[slug] ? SPORTS_BY_SLUG[slug].category : "misc";
};
