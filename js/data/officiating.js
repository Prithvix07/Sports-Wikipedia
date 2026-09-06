/* ==========================================================================
   THE ARENA — Officiating & Tournament Management Study Guide (Module IV)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module IV.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.OFFICIATING = {
  intro: "The craft of running sport \u2014 rules, refereeing, fixtures and organisation. This guide covers the full officials panel, referee duties and signals, tournament formats (knockout, league, combination), seeding, byes and fixture methods, scoring and tie-breaking, court and equipment specifications, intramural and extramural tournaments, organising a sports meet with its committees, and anti-doping, discipline and fair play \u2014 with an 18-question exam bank.",
  stats: [
    { value: "3", label: "tournament formats (knockout, league, combination)" },
    { value: "8", label: "officials, organisers & committee roles" },
    { value: "3", label: "fixture methods (cyclic, staircase, stub)" },
    { value: "18", label: "exam questions" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "role-of-officials",
    title: "1. The roles of officials, scorers & timekeepers",
    body: `A match runs on a team of officials, each with a defined duty. The examiner asks you to list the panel and state what each one does.

**The officiating panel**
- **Referee / umpire** \u2014 controls the game: enforces rules, awards scores and fouls, manages player conduct and the timer, and makes the final decisions. A single **referee** (basketball, boxing, wrestling) or a team of **umpires** (hockey, tennis, badminton doubles).
- **Assistant / lines-people** \u2014 judge ball in/out, offside and touch, and support the referee's view (football assistants, tennis line judges).
- **Scorer** \u2014 records every score, foul and substitution accurately on the scoresheet, and communicates the scoreboard.
- **Timekeeper** \u2014 manages game time, stoppages and the expiry of periods; in basketball also the shot clock.
- **Judges** (where applicable) \u2014 award points for form, distance, difficulty (gymnastics, diving, fighting sports).

**Qualities of a good official** \u2014 the exam favourite:
- **Impartiality** \u2014 no bias toward either side.
- **Knowledge of the rules** \u2014 complete and up-to-date.
- **Consistency** \u2014 applying the same standard to every player from whistle to whistle.
- **Fitness and positioning** \u2014 being in the right place to see the action.
- **Decision making and communication** \u2014 firm, clear calls, confident signals and good timekeeping.
- **Calm under pressure** \u2014 controlling the game without becoming part of it.

**Code of conduct for officials**: arrive early, know the rules, stay neutral, avoid communication with players during play, use the correct signals, and report any misconduct.

>>> exam
List the panel
Name four officials in a match and one duty each. Answer: referee \u2014 enforces rules and scores; timekeeper \u2014 manages the game clock; scorer \u2014 records scores and fouls; lines-person \u2014 judges in/out and touch. Add: all must be impartial and consistent.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "referee-signals",
    title: "2. Referee duties, signals & code of conduct",
    body: `The referee's duties cover the whole match, from before the whistle to after it.

**Before the game**
- Check the playing area is safe and to specification.
- Check equipment (goals, nets, balls, timing devices).
- Confirm player eligibility and numbers with both teams.
- Conduct the toss for ends/possession.

**During the game**
- Start and stop play; run and maintain time.
- Award points, goals and fouls exactly per the rules.
- Manage advantage, substitutions and player conduct.
- Keep the flow \u2014 let the game play unless the rules are broken.
- Seek the correct decisions, using assistants and technology where allowed.

**After the game**
- Confirm the final score, verify the scoresheet, and sign/report any incidents (cards, disqualifications, protests).

**Signals** \u2014 the universal language of officiating. Each sport has a set:
- **Basketball**: fouls by number and type (pushing, blocking, travelling), the jump-ball, and the three-second violation.
- **Football**: direct/indirect free kick, advantage, offside, cards, substitution.
- **Hockey**: penalty corner, long corner, 16-yard hit.

**Code of conduct** \u2014 the non-negotiables: impartiality, honesty, keeping up with the rules, and reporting rather than concealing own errors.

>>> exam
Match the signal
Why must a referee use standard hand signals? Answer: signals are a clear, universal, non-verbal way to communicate decisions to players, coaches, scorers and spectators \u2014 they remove ambiguity, keep the game flowing, and allow the scorer to record the call correctly.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "match-conduct",
    title: "3. Preparing for the game: toss, checks & conduct of a match",
    body: `Good officiating starts before the first whistle. The examiner asks for the pre-game routine and how a match is actually run.

**Pre-game duties**
- Arrive early; verify the area, surface, markings and equipment are safe and to specification.
- Check the balls (size, weight, pressure), nets/goals, poles, flags and timing devices.
- Confirm entries: player eligibility, identity, numbers and substitute lists with both captains.
- Hold the **toss** \u2014 the winner chooses ends or possession/innings; the loser gets the remaining choice.
- Brief assistants (lines-people, scorer, timekeeper) on signalling and their stations.
- Announce the match, teams and officials as required.

**Conduct of the match**
- Start on signal and manage time fairly (stoppages, injury time, time-outs).
- Apply the **advantage rule** where allowed \u2014 let play continue if the offended team has an advantage, then penalise if play stops.
- Manage substitutions and their entry points; log them with the scorer.
- Handle injury: stop play for head injuries or serious injury, and allow treatment per the rules.
- Control conduct with progressive sanctions \u2014 warning \u2192 caution (card) \u2192 suspension; never ignore dangerous play.

**Post-game duties**
- Verify the final score with both sides and the scorer; sign the scoresheet.
- Record cards, injuries, protests and ground/equipment faults for the report.

**Walkover**: if a team refuses to play, fields too few players or is late, the opponent is awarded the match (a walkover) at 0 \u2014 nil result recorded by the officials.

>>> exam
Run the match
List three things a referee must check before the game. Answer: the safety and specification of the playing area and equipment; the eligibility and numbers of the players; and the readiness and roles of the officiating panel. The toss then decides ends or possession.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "tournament-formats",
    title: "4. Tournament formats: knockout, league & combination",
    body: `A **tournament** is a structured competition to find a winner. The examiner wants the three main formats, their advantages and drawbacks, and the number of matches.

**1. Knockout (elimination)**
- **Single elimination**: lose once and you're out; the winner must win every match. **Matches** = number of participants \u2212 1. So 8 teams = 7 matches. Needs a **power of two** field (2, 4, 8, 16\u2026), or **byes** when it isn't.
- **Double elimination**: a team is out after **two** losses \u2014 the field has a main bracket and a losers/consolation bracket. It is fairer but needs nearly twice the matches (for n teams roughly 2n and up).
- *Advantages of knockout*: short, exciting, needs few venues and officials.
- *Disadvantages*: the second-best team can be knocked out early by one bad day; little playing time for most teams; no ranking of all teams.

**2. League (round-robin)**
- Every team plays every other team once (single) or twice (double).
- **Matches** = n(n\u22121)/2 for a single league (e.g. 6 teams = 15 matches); double league = n(n\u22121).
- Points are awarded (e.g. win 2, draw 1, loss 0) and a table decides the winner.
- *Advantages*: fair \u2014 all teams play everyone; gives a true ranking.
- *Disadvantages*: many matches, needs more time, venues and travel.

**3. Combination (knock-cum-league or league-cum-knockout)**
- Stages: a league in the preliminary rounds to rank teams, then a knockout to decide the title, or the reverse \u2014 knockout rounds feeding into a final league.
- *Advantages*: balances fairness of the league with the drama of knockouts; keeps the best teams alive.
- *Disadvantages*: the longest, most complex to organise.

**Fixtures** \u2014 the schedule of matches. For a league, the **cyclic method** fixes the fixtures; for knockout, the **draw** decides the pairs.

>>> exam
Count the matches
A league of 8 teams, single round-robin: how many matches? Answer: n(n\u22121)/2 = 8 \u00D7 7 / 2 = 28 matches. A single-elimination knockout of the same 8 teams would be n \u2212 1 = 7 matches.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "seeding-byes",
    title: "5. Seeding, byes & the management of fixtures",
    body: `Two fixtures concepts are exam staples: **seeding** and **byes**.

**Seeding** \u2014 placing the strongest (best-ranked) participants apart in the draw so they do not meet in the early rounds.
- *Purpose*: protect the top teams from each other, reward past performance, and keep the final interesting.
- *Example*: in a 16-seed tennis draw, the top seeds are split so No.1 and No.2 can only meet in the final.
- The **first seed** gets the top slot, the second at the bottom, and the rest are distributed to keep high seeds apart (1, 8, 4, 5 vs 2, 7, 3, 6 pattern).

**Byes** \u2014 rest positions given when the number of participants is not a power of two for a knockout (or an odd number is unbalanced).
- A bye means a team advances without playing in that round.
- **Number of byes** = next power of two \u2212 number of teams. So 10 teams \u2192 16 \u2212 10 = 6 byes.
- Byes are usually given to the **seeded teams** so the strong sides rest in the first round and the weaker teams play each other.

**Managing fixtures**
- Schedule matches, venues, dates and officials in advance.
- Provide **rest** between rounds for teams.
- Handle **withdrawals** with a walkover (the opponent advances).
- Keep a **fixture sheet / draw** updated and visible.

>>> exam
Calculate byes
How many byes are needed for 13 teams in a knockout? Answer: the next power of two above 13 is 16, so byes = 16 \u2212 13 = 3. The seeded teams receive the byes so the weaker sides play through early rounds.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "fixture-methods",
    title: "6. Cyclic, staircase & stub methods: drawing up fixtures",
    body: `How do you actually write out a full fixture list? Three classical methods are taught.

**1. Cyclic (or circle) method \u2014 for a league**
- Fix one team (say No.1) in a fixed position and rotate the others one place each round.
- For an **even** number of teams n: number of rounds = n \u2212 1, with n/2 matches per round.
- Worked example (n = 6): 5 rounds, 3 matches each. Round 1: 1\u20136, 2\u20135, 3\u20134; Round 2: 1\u20135, 6\u20134, 2\u20133; \u2026 each rotation moves the ring of teams while No.1 stays put. Every pairing appears exactly once \u2014 total 15 matches, matching n(n\u22121)/2.
- For an **odd** number, add a dummy team (the bye); the side drawing the dummy rests that round.

**2. Staircase method**
- The same league drawn as a staircase: each step lists one round's pairings so the schedule is easy to read and copy onto the fixture sheet. It is a visual aid, not a different schedule.

**3. Stub (or draw) method \u2014 for a knockout**
- Draw the elimination tree. Stubs are the empty slots on round one where **byes** sit; run the draw so seeded teams get the stub-ends (rest) and only the non-seeded play in round one.

Whichever method you use, the result must give each team its matches, dates, venues and rest, and be printed and announced before the tournament.

>>> exam
Draw six teams
Using the cyclic method for a 6-team league, state the number of rounds and total matches. Answer: rounds = n \u2212 1 = 5; matches per round = n/2 = 3; total = 5 \u00D7 3 = 15, which equals n(n\u22121)/2.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "scoring-ties",
    title: "7. Scoring systems & tie-breaking rules",
    body: `Capturing the score correctly and breaking ties fairly are core officiating skills.

**Two scoring models taught**
- **Point-based scoring** (most team sports): points for goals/points scored; higher total wins \u2014 basketball, football, hockey, kabaddi.
- **Bout/round-based scoring** (combat and racket sports): best of rounds or games \u2014 boxing, tennis (sets and games), badminton (games to 21).

**League points** \u2014 the tally that orders the table: typically **win 2\u20133, draw 1, loss 0**; teams ranked by total points, then goal difference/ratio, then head-to-head.

**Tie-breaking** \u2014 how a deadlock is resolved:
- **League tables**: goal difference \u2192 goals scored \u2192 head-to-head result.
- **Knockout/knockout-tie**: extra time \u2192 penalty shootout (football), golden/next-point (often in one-session games), or replay in some sports.
- **Match**: tennis tie-break, badminton deuce (two clear points at 20\u2013all), volleyball deuce at 24\u2013all.
- Mechanical ties (same time, same distance) are settled by the rules of the event (photo-finish, measurement, countback).

**Role of the scorer**: record points and fouls accurately, confirm totals with the referee, and sign the scoresheet as the official record.

>>> exam
Break the tie
A football knockout is level after full time and extra time. What happens? Answer: the match goes to a penalty shootout \u2014 each side takes a defined number of kicks (typically five) and the higher total wins; if still level, sudden-death kicks continue until one side leads.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "court-specs",
    title: "8. Court, field & equipment specifications",
    body: `Officials must verify the playing area meets regulation. The examiner checks you know the key dimensions and markings of the major courts.

**Common playing areas**

| Sport | Area | Key dimensions / markings |
|---|---|---|
| Basketball | Court | 28 \u00D7 15 m; three-point line, free-throw (foul) line, centre circle, key |
| Football | Pitch | 90\u2013120 \u00D7 45\u201390 m; penalty area 16.5 m box, penalty spot 11 m, centre circle |
| Hockey | Field | 91.4 \u00D7 55 m; 23 m lines, shooting circle, penalty spots |
| Volleyball | Court | 18 \u00D7 9 m; attack line 3 m from net, net height (men 2.43 m, women 2.24 m) |
| Badminton | Court | 13.4 \u00D7 6.1 m (doubles); service lines, net height 1.55 m |
| Tennis | Court | 23.77 \u00D7 8.23 m (singles); service boxes, net at centre |
| Kabaddi | Court | 13 \u00D7 10 m (men); mid-line, baulk and bonus lines |

**Equipment checks an official makes**
- **Balls** \u2014 correct size, weight, pressure and cover for the event.
- **Goals / nets** \u2014 dimensions, secure mounting, hole size.
- **Timing devices** \u2014 clocks, stopwatches, shot clocks.
- **Bibs / numbers, cones, boundary lines** \u2014 clearly marked and safe.

**Safety responsibilities**: remove hazards, ensure run-off space around the area, and stop play if the surface becomes dangerous.

>>> exam
Specify the court
State the tennis court singles dimensions and the badminton net height. Answer: tennis singles court is 23.77 m long \u00D7 8.23 m wide; the badminton net stands 1.55 m high at the posts (measuring 1.524 m at the centre of the net).`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "intramural-extramural",
    title: "9. Intramural & extramural tournaments",
    body: `Tournaments are classified by who takes part and who organises them.

**Intramural tournaments** \u2014 within one institution (school/college).
- Participants come from the **same institution**: house teams, classes, departments.
- *Examples*: senior and junior house competitions, class leagues, inter-house athletics meets, friendly house fixtures.
- *Purpose*: mass participation and recreation; give every student a chance to play; identify talent; build school spirit and sports culture; keep students engaged after class hours.
- *Features*: cheap, needs no travel, runs in the institution's own timetable (often the annual **sports day / intramural week**).

**Extramural tournaments** \u2014 between different institutions.
- Participants come from **different schools/colleges**: inter-school, inter-college, then district, state, zonal, national and international.
- *Purpose*: higher-standard competition, selection of representative teams, and a ladder from local to national excellence.
- *Features*: needs permission, travel, funding, officials, and advance planning of venues and fixtures.

**The ladder that connects them**: intramurals find and build talent; extramurals test and refine it \u2014 a good sports programme runs both.

>>> exam
Compare the pair
What is the difference between intramural and extramural tournaments? Answer: intramural tournaments are within one institution (house/class competitions for mass participation and talent identification); extramural tournaments are between different institutions (inter-school, district, state, national) for higher competition and selection of representative teams.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "sports-meet",
    title: "10. Organising a sports meet: the committees & the complete plan",
    body: `The examiner often sets: \u201cyou have been asked to organise an inter-school tournament. Outline the steps.\u201d Answer with a clear sequence and the committee structure.

**The organising committees** \u2014 a meet runs on a panel of committees, each with a lead:
- **Organising / main committee** \u2014 overall planning, coordination and decisions.
- **Technical committee** \u2014 rules, entries, draws, fixtures, results and the officials' board.
- **Officials / referees committee** \u2014 appointing umpires, referees, judges, scorers and timekeepers.
- **Finance committee** \u2014 budget, sponsorship, expenditure and accounts.
- **Reception & hospitality** \u2014 guests, teams' welcome and seating.
- **Transport committee** \u2014 arrival and departure of teams.
- **Accommodation & food** \u2014 lodging, meals and refreshments (for camps and meets).
- **Decorative / programme / announcement** \u2014 venue decoration, schedule printing and announcements.
- **Publicity & media** \u2014 invitations, press, coverage.
- **First aid & medical** \u2014 first-aid posts, physio cover, emergency transport.
- **Prize committee** \u2014 trophies, medals, certificates and the presentation.
- **Protest & appeal** \u2014 hearing and settling disputes fairly, in writing.

**The complete plan, step by step**
1. **Decide the format**: knockout, league or combination, based on time, teams, venues and officials available.
2. **Prepare fixtures**: create the draw or league table; apply seeds and byes; list all matches.
3. **Schedule**: assign dates, times and venues; allow rest between rounds; publish the fixture sheet.
4. **Appoint officials and check equipment**: referees, scorers, timekeepers; courts and equipment.
5. **Set rules and conduct**: tournament rules, entry/eligibility, substitutions, code of conduct, and the protest procedure.
6. **Score and decide progression**: points system, tie-breaking, and how the winner is eventually decided.
7. **Prizes and reporting**: trophies/medals, certificates, results table, and a written record of the tournament.

**The organiser's checklist**: entries confirmed, draws done, venues booked, equipment ready, officials briefed, rules agreed, and results recorded.

>>> exam
Sequence the plan
Give the first three steps to organise a school knockout of 16 teams. Answer: (1) confirm 16 entries and draw up the knockout bracket (16 \u2013 a perfect power of two, no byes needed); (2) schedule the 15 matches across dates and venues with rest between rounds; (3) appoint officials and confirm rules, scoring and tie-breakers before play begins.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "anti-doping",
    title: "11. Anti-doping, discipline & fair play at tournaments",
    body: `A modern tournament is run clean or not at all \u2014 anti-doping and discipline are examiner favourites.

**Doping** \u2014 the use of banned performance-enhancing substances or methods.
- It is unfair (an artificial advantage), dangerous (health risks) and against the spirit of sport.
- The **WADA** (World Anti-Doping Agency) Prohibited List is organised by category: stimulants, anabolic agents, hormones, diuretics, and masking agents, among others.
- **Doping control process**: the athlete is notified and kept in the control room; a urine (and sometimes blood) sample is taken and split into **A and B** samples; the A sample is tested in an accredited lab; if positive, the athlete may request the B sample for confirmation and then faces sanctions.
- **TUE** (Therapeutic Use Exemption): an athlete with a genuine medical need for a prohibited substance applies in advance; using one without a TUE is doping.
- **Sanctions**: disqualification of results, loss of medals, and a period of ineligibility (bans).

**Discipline on the field**
- Progressive sanctions: warning \u2192 caution \u2192 exclusion (cards), applied consistently and without bias.
- Serious offences (dangerous play, fighting, abusive language, dissent) are reported to the organising body, not settled on the field.
- **Match fixing and betting** \u2014 manipulating results for gambling \u2014 are treated as the most serious of corruption offences.

**Fair play** \u2014 the values the officials protect: competing honestly, respecting opponents, officials and spectators, acknowledging results, and never using doping or cheating to win.

>>> exam
Explain the process
What does the doping control process involve? Answer: notification and chaperoning of the athlete; provision of a sample split into A and B bottles; laboratory testing of the A sample; confirmation on the B sample if requested; then results management with sanctions (disqualification and ineligibility) for a positive finding, with TUE protecting genuine medical use.`,
    module: "m4"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "12. Quick-revision one-liners",
    body: `**Panel**: referee/umpire (rules, scores), lines-people/assistants (boundaries, offside), scorer (records), timekeeper (clock), judges (form/distance).

**Official's code**: impartial, knowledgeable, consistent, fit, decisive, calm.

**Pre-game**: safety checks \u2192 equipment \u2192 eligibility \u2192 toss \u2192 brief assistants.

**Formats**: knockout = n\u22121 matches (double elimination out after two losses); league = n(n\u22121)/2; combination = league + knockout stages.

**Byes** = next power of two \u2212 teams. **Seeding** keeps the strongest apart in the early rounds.

**Fixtures**: cyclic/circle method for leagues (n\u22121 rounds, n/2 matches); staircase method to display the schedule; stub/draw method for the knockout tree with byes.

**Tournaments**: intramural = within one institution (mass participation); extramural = between institutions (higher competition, selection).

**Sports meet**: committees \u2014 organising, technical, officials, finance, reception, transport, accommodation/food, programme, publicity, first aid, prizes, protest/appeal.

**Scoring**: point-based (team sports) vs bout/game-based (combat/racket). League points; tie-break by goal difference, then goals scored, then head-to-head; knockout tie-break by extra time then penalties.

**Anti-doping**: WADA, Prohibited List, A/B samples, TUE for genuine medical need, disqualification and ineligibility as sanctions. Discipline runs warning \u2192 caution \u2192 exclusion; match fixing is corruption.

**Key dimensions**: football pitch 90\u2013120 \u00D7 45\u201390 m; basketball 28 \u00D7 15 m; volleyball court 18 \u00D7 9 m, net 2.43 m (men)/2.24 m (women); badminton 13.4 \u00D7 6.1 m, net 1.55 m; tennis 23.77 \u00D7 8.23 m (singles); kabaddi 13 \u00D7 10 m.

>>> exam
Self-test
Ten-minute recall: name the four officials and one duty each; write the knockout and league match counts for 8 teams; calculate byes for 9 teams; draw round 1 of a 6-team cyclic league; list the six committees of a sports meet; state the three steps of doping control. Then check the chapters above.`,
    module: "m4"
  }
  ],
  exam: [
    { q: "Name the officials in a match and state one duty of each.", a: "Referee/umpire \u2014 enforce rules and award scores/fouls; timekeeper \u2014 manage the game clock; scorer \u2014 record scores and fouls accurately; lines-person \u2014 judge in/out and offside. Judges award form and distance where used." },
    { q: "List four qualities of a good referee.", a: "Impartiality (no bias); full and current knowledge of the rules; consistency in applying them; fitness and good positioning; calm, firm and clear decision-making." },
    { q: "How many matches in a knockout of 12, and how many byes?", a: "Matches = n \u2212 1 = 11. Next power of two is 16, so byes = 16 \u2212 12 = 4, given to the seeded teams." },
    { q: "Define a league (round-robin) tournament and give its formula.", a: "A league has every team play every other team; the table decides the winner by points. Matches = n(n\u22121)/2 for a single league and n(n\u22121) for a double league." },
    { q: "What is seeding and why use it?", a: "Seeding places the strongest teams apart in the draw so they do not meet early, protecting top sides, rewarding past performance and keeping the final competitive." },
    { q: "Explain the cyclic method of fixtures for a 6-team league.", a: "Fix one team in place and rotate the other five one position each round; there are n \u2212 1 = 5 rounds with n/2 = 3 matches each \u2014 total 15 matches, every pair playing once." },
    { q: "What are intramural and extramural tournaments?", a: "Intramural tournaments are held within one school/college (house and class competitions) for mass participation and talent identification; extramural tournaments are between different institutions (inter-school, district, state, national) for higher competition and selection of representatives." },
    { q: "Name six committees needed to organise a sports meet and one duty of each.", a: "Organising (overall plan); technical (entries, draws, fixtures, results); officials (appointing referees, scorers, timekeepers); finance (budget and accounts); first aid (medical cover); prize (trophies and certificates). Others include transport, food, publicity and the protest committee." },
    { q: "What is WADA and how is a doping sample tested?", a: "WADA is the World Anti-Doping Agency that sets the Prohibited List and standards. The sample is split into A and B; the A sample is tested in an accredited lab, and if positive the B sample can confirm it before sanctions." },
    { q: "How is a deadlock broken in a football knockout?", a: "After extra time, a penalty shootout \u2014 each side takes a set number of kicks and the higher total wins; if level, sudden-death kicks continue until one team leads." },
    { q: "State the volleyball and basketball court dimensions.", a: "Volleyball court is 18 \u00D7 9 m with an attack line 3 m from the net; the basketball court is 28 \u00D7 15 m with a three-point line, free-throw line and centre circle." },
    { q: "What does a timekeeper do and why is it important?", a: "The timekeeper manages playing time, stoppages and expiry of periods (and the shot clock in basketball). Accurate timekeeping ensures fairness and lets the game run to the rules." },
    { q: "Compare knockout and league formats on fairness and time.", a: "The league is fairer \u2014 every team plays everyone \u2014 but takes more matches (n(n\u22121)/2) and longer; the knockout is quicker (n\u22121 matches) and more exciting but can eliminate a strong team early." },
    { q: "What is the code of conduct for an official?", a: "Arrive prepared, know the rules, stay neutral and avoid bias, use correct signals, communicate clearly, avoid undue contact with players during play, and report misconduct accurately." },
    { q: "A single round-robin of 6 teams: how many matches?", a: "6 \u00D7 5 / 2 = 15 matches in a single league." },
    { q: "Define a bye and a walkover.", a: "A bye is a rest position in the opening round of a knockout \u2014 the team advances without playing (given when the field is not a power of two, usually to seeded teams). A walkover is a match awarded to a team because the opponent refuses to play, is late or fields too few players." },
    { q: "What is the difference between single and double elimination?", a: "In single elimination a team is out after one defeat (n\u22121 matches); in double elimination a team is eliminated only after two defeats, using a winners/losers bracket that is fairer but needs many more matches." },
    { q: "List the main steps to organise a school tournament.", a: "Choose the format, prepare fixtures (with seeds and byes), schedule matches and venues, appoint officials and check equipment, agree rules and scoring, run the rounds with tie-breaking, and finish with results, prizes and a report." }
  ]
};