/* ==========================================================================
   THE ARENA — Sports Psychology & Sociology Study Guide (Module V)
   A dedicated, exam-oriented study reference for PHE / B.P.Ed Module V.
   Each chapter body uses the site's markdown syntax (## headings, - lists,
   | tables, >>> exam callouts, **bold**) and is rendered by MARKDOWN.render.
   ========================================================================== */

window.PSYCHOLOGY = {
  intro: "The mental and social dimensions of sport and the athlete. This guide covers motivation, personality and attitude, personality types, arousal and anxiety, concentration and imagery, goal setting and mental skills, aggression and emotions, group dynamics and leadership, audience effects, the psychological benefits of sport, the sociology of sport, and olympism and ethics \u2014 with a 20-question exam bank.",
  stats: [
    { value: "4", label: "motivation types & personality views" },
    { value: "3", label: "arousal theories taught" },
    { value: "5", label: "mental skills (breathing, PMR, imagery, goals, self-talk)" },
    { value: "20", label: "exam questions" }
  ],
  chapters: [
  /* ====================================================================== */
  {
    id: "motivation",
    title: "1. Motivation, personality & attitude in athletes",
    body: `**Motivation** is the direction and intensity of effort \u2014 what drives an athlete to train, play and persist. It is the fuel every coach wants to stoke.

**Intrinsic vs extrinsic motivation**
- **Intrinsic** \u2014 from within: enjoyment, pride, mastery, self-satisfaction. *Playing for the love of the game.*
- **Extrinsic** \u2014 from outside: rewards, trophies, money, praise, fear or pressure. *Playing for the medal or to avoid a fine.*
Both matter; sustained performance relies especially on intrinsic drive, because rewards fade but enjoyment lasts.

**Personality** \u2014 the consistent patterns of thought, feeling and behaviour that make an athlete who they are. Two popular models:
- **Trait theory** \u2014 stable traits (extraversion, neuroticism) predispose behaviour; some sports favour certain profiles (team games \u2192 sociable; precision sports \u2192 calm, disciplined).
- **Interactionist view** \u2014 behaviour comes from the person \u00D7 the situation; this is the accepted modern view \u2014 a quiet athlete may become loud in a big crowd.

**Attitude** \u2014 a learned tendency to respond favourably or unfavourably to an object, person or activity. It has three parts (**ABC**):
- **Affective** \u2014 feelings (I love training).
- **Behavioural** \u2014 how the person acts (I attend every session).
- **Cognitive** \u2014 beliefs (training makes me better).
A negative attitude (e.g. toward an opponent or official) can be changed by changing beliefs and reinforcing positive behaviour.

>>> exam
Divide the drive
Distinguish intrinsic from extrinsic motivation with one example each. Answer: intrinsic motivation comes from within \u2014 enjoyment and mastery (playing for love of the game); extrinsic comes from outside \u2014 rewards and pressure (playing for a trophy). Elite persistence is built on intrinsic drive with extrinsic rewards as supports.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "personality-types",
    title: "2. Personality types & the athlete's profile",
    body: `The examiner often asks you to name personality types and link them to sport.

**Type models**
- **Introvert vs extravert**: introverts prefer quiet and gain energy alone \u2014 often drawn to precision and endurance sports (shooting, archery, distance running); extraverts seek stimulation and social contact \u2014 commonly found in team and high-intensity sports (football, basketball, hockey).
- **Type A vs Type B**: Type A athletes are competitive, impatient, time-pressured and achievement-hungry \u2014 great for explosive sports but prone to stress and burnout; Type B athletes are relaxed, patient and easy-going \u2014 common in golf, bowls, long endurance events.

**Eysenck's dimensions**
- **Extraversion\u2013introversion** and **neuroticism\u2013stability** combine into four temperaments; high neuroticism athletes feel anxiety more strongly and need more arousal-management work.

**Does the sport shape the athlete?**
- **Selection**: certain sports attract certain types (self-selection).
- **Socialisation**: training and teams also shape behaviour over time.
- The practical rule for a coach: know each athlete's profile \u2014 extraverts thrive on stimulation and feedback, introverts on quiet, structured and precise instructions.

>>> exam
Profile the athlete
Which personality type is often drawn to archery, and why? Answer: introverts often take to precision sports like archery because they prefer quiet, concentration and self-paced routines, and they manage arousal better in low-stimulation settings. Extraverts are more often found in fast team games.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "arousal-anxiety",
    title: "3. Arousal, anxiety & stress regulation",
    body: `Arousal is the level of physical and mental activation \u2014 from deep sleep to frantic excitement. The right arousal equals good performance; the wrong level hurts it. The examiner wants the theories and the techniques.

**Arousal theories**
- **Drive theory (Hull)** \u2014 performance rises as arousal rises; works well for simple, well-learned skills, but high arousal can ruin difficult or new skills.
- **Inverted-U theory** \u2014 the classic: performance is best at a **moderate** level of arousal; too low = sluggish, too high = error-prone. The optimum differs per person and skill.
- **Catastrophe theory** \u2014 a refinement: performance rises with arousal, but once arousal gets very high under high cognitive anxiety, performance **collapses suddenly** (catastrophe), not gradually.

**Anxiety** \u2014 the negative, threatening side of arousal.
- **Trait anxiety** \u2014 a stable tendency to feel anxious in many situations.
- **State anxiety** \u2014 the temporary feeling in a given moment; can be cognitive (worry, negative thoughts) or somatic (physical symptoms \u2014 racing heart, sweating, shaking).

**Stress management techniques**
- **Breathing control** \u2014 slow, deep breaths lower somatic arousal (the examiner's favourite).
- **Progressive muscle relaxation (PMR)** \u2014 tensing then relaxing muscles to release physical tension (used by archers and shooters).
- **Cognitive restructuring / positive self-talk** \u2014 replacing worry (\u201cI'll fail\u201d) with beliefs (\u201cI have prepared; I can do this\u201d).
- **Imagery / mental rehearsal** \u2014 picturing the perfect performance.
- **Arousal management** \u2014 some athletes need to calm down (relaxation), others to fire up (energising routines, music).

>>> exam
Explain the curve
Describe the inverted-U relationship and give a practical use. Answer: performance is highest at moderate arousal \u2014 too low leaves the athlete sluggish, too high causes tension and errors. A coach uses it by matching pre-match routines to each athlete: calming exercises for the over-aroused, energising routines for the under-aroused.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "concentration",
    title: "4. Concentration, imagery & mental rehearsal",
    body: `Concentration is focusing attention on the task and ignoring distraction \u2014 both internal (doubt, fatigue) and external (crowd, opponent).

**Four types of attention (Nideffer)**
- **Broad-external** \u2014 reading the whole field (a basketball point guard surveys play).
- **Broad-internal** \u2014 planning strategy (a captain plans the next set).
- **Narrow-external** \u2014 focusing on one cue (the goalkeeper watching the ball).
- **Narrow-internal** \u2014 controlled self-talk and technique focus (a golfer rehearses the swing).

**Building concentration**
- **Pre-performance routines** \u2014 a fixed sequence before action (server's toss routine) reduces wandering.
- **Cue words** \u2014 short prompts (\u201cbreathe\u201d, \u201cfocus\u201d) to re-centre.
- **Simulation training** \u2014 practice under pressure and noise so distraction becomes familiar.

**Imagery / mental rehearsal**
- Using the senses to rehearse a skill or outcome in the mind without physical movement.
- **Benefits**: improves learning and confidence, rehearse tactics, control arousal, and rehearse under pressure safely.
- **Effective use**: vivid, first-person, relaxed state, and combined with physical practice (imagery alone is weaker than imagery + practice).

>>> exam
Define the pair
Define concentration and give one way to improve it. Answer: concentration is the ability to focus attention on relevant cues and ignore distraction; it can be improved with pre-performance routines, cue words, and simulation training that makes game pressure familiar.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "goal-setting",
    title: "5. Goal setting & mental-skills training",
    body: `Goals direct effort and attention, build confidence and sharpen focus. The examiner wants the types of goal and the SMART rule.

**Types of goal**
- **Outcome goals** \u2014 results versus others (win the championship). They depend partly on others and chance.
- **Performance goals** \u2014 personal standards (improve my 100 m time by 0.3 s). Comparison is to your own past.
- **Process goals** \u2014 the actions that bring improvement (perfect my start, keep my elbows in). These are fully in the athlete's control.
The best plans use **process \u2192 performance \u2192 outcome**, in that order as a ladder.

**SMART goals**
- **S**pecific, **M**easurable, **A**chievable, **R**elevant, **T**ime-bound.
- Example: \u201cIncrease my bench press from 60 to 75 kg within 12 weeks, training three times a week\u201d \u2014 not \u201cget stronger\u201d.

**Why goals work**: they focus attention, mobilise effort, increase persistence, and prompt new learning strategies \u2014 and they work best when the athlete sets them, the coach guides them, and progress is reviewed.

**Mental-skills training (MST)**
- A planned, regular practice of the mental techniques \u2014 goal setting, imagery, self-talk, routines, relaxation \u2014 trained like physical skills, not a one-off pep talk.
- Session pattern: educate \u2192 acquire the skill \u2192 rehearse it \u2192 apply it in competition.

>>> exam
Set the goal
Give the four types of goal and a SMART example. Answer: outcome, performance and process goals (SMART covers them all: specific, measurable, achievable, relevant, time-bound). Example \u2014 increase free-throw accuracy from 70% to 82% in eight weeks by 30 minutes of daily practice and video review.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "aggression",
    title: "6. Aggression in sport & emotional control",
    body: `Aggression in sport is a defined term, not just \u201closing your temper\u201d \u2014 the examiner tests the definitions.

**Definitions**
- **Aggression** \u2014 behaviour intended to harm someone outside the rules of the game (physical or verbal), with the intent to injure.
- **Hostile aggression** \u2014 the goal *is* to hurt the opponent (a deliberate late tackle, a punch).
- **Instrumental aggression** \u2014 aggression used as a means to win *but it is still outside the rules and illegal* (deliberately fouling to stop a breakaway).
- **Assertiveness** \u2014 strong, lawful, determined play *within* the rules (\u201cplaying hard but fair\u201d) \u2014 this is NOT aggression.

**Causes**
- **Personality and arousal** \u2014 high-stress, high-arousal moments lower self-control.
- **Frustration** \u2014 when valued goals are blocked (losing, bad officiating).
- **Social learning and culture** \u2014 athletes copy modelled aggression if it is rewarded; some teams teach \u201chardness\u201d.
- **Game situations** \u2014 late in close games, crowd hostility, retaliation spirals.

**Controlling aggression**
- Coach models and rewards assertive, not aggressive, play.
- Teach arousal control (breathing, refocusing) so frustration does not escalate.
- Officials apply consistent sanctions \u2014 early intervention stops escalation.
- De-brief incidents calmly after the game; use self-talk and imagery for the \u201creplay\u201d habit.

>>> exam
Define the term
What is the difference between aggression and assertiveness? Answer: aggression is behaviour intended to harm, whether hostile (goal is to hurt) or instrumental (used to gain advantage); both break the rules. Assertiveness is strong, lawful, determined play within the rules \u2014 it is controlled and legitimate, and not aggression.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "group-dynamics",
    title: "7. Group dynamics, cohesion & leadership",
    body: `Sport is mostly played in teams, so the examiner asks how groups form, bond and are led.

**Group vs team** \u2014 a group shares a common goal, identity and interaction; a **team** is a special group with defined roles, co-operation and mutual accountability toward shared performance.

**Group development (Tuckman)**
1. **Forming** \u2014 members meet, roles unclear.
2. **Storming** \u2014 conflict as roles and leadership are tested.
3. **Norming** \u2014 roles settle, cohesion grows, norms agreed.
4. **Performing** \u2014 the team works well together toward the goal.
*(A fifth, adjourning, marks the group's end.)*

**Cohesion** \u2014 the glue that holds a team together. Two dimensions:
- **Task cohesion** \u2014 shared commitment to the goal and performance.
- **Social cohesion** \u2014 friendships and liking among members.
High task cohesion is the stronger predictor of performance; social cohesion helps in team sports and eases pressure.

**Leadership**
- **Types of leader**: the appointed coach/captain and the emergent leader (someone others naturally follow).
- **Styles**: **autocratic** (leader decides), **democratic** (leader consults the group), and **laissez-faire** (leader leaves the group to itself). Most sports blend democratic for relationship-building with autocratic for quick match decisions.
- **Leadership qualities**: knowledge, communication, motivation, decisiveness, integrity, empathy.

>>> exam
Name the stages
List the four stages of group development. Answer: forming (members meet, roles unclear), storming (conflict over roles and leadership), norming (roles and cohesion settle), and performing (the team works effectively toward its goal).`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "audience-effect",
    title: "8. Audience effect, social facilitation & home advantage",
    body: `The crowd changes performance \u2014 sometimes for the better, sometimes not. The examiner wants the theory and the real-world effects.

**Social facilitation (Zajonc)**
- The presence of others raises **arousal**, which energises the **dominant (best-learned) response**.
- For a **well-learned skill** this helps \u2014 the crowd lifts an experienced player.
- For a **new or difficult skill** it hurts \u2014 arousal pushes out the shaky response.
So big crowds can help the practised side and rattle the unprepared side.

**The home advantage**
- Playing at home usually helps: familiar ground, supportive crowd, less travel, and referees sometimes influenced by the crowd. Evidence confirms home teams win more in most sports.
- Away teams can counter it with routines, noise training in practice, and an early aggressive start to quiet the crowd.

**How an athlete handles the crowd**
- Use it: channel the energy of the crowd into arousal (cheering can fire up a home crowd).
- Screen it: pre-performance routines and cue words block distraction.
- Train for it: simulation training (noise, heckling) makes away crowds familiar.

>>> exam
Explain facilitation
Why does a large crowd sometimes hurt a young player but help an experienced one? Answer: the presence of the crowd raises arousal, which boosts the dominant (well-learned) response \u2014 so an experienced player performs better; but for a young player whose skill is new and shaky, the same arousal disrupts the less-learned response and performance drops.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "psych-benefits",
    title: "9. Psychological benefits of sport & exercise",
    body: `Exercise does not only build the body \u2014 the syllabus asks about its mental and emotional returns.

**The benefits**
- **Mood and stress**: physical activity lowers stress hormones and raises endorphins \u2014 the common \u201cexercise high\u201d; it is used alongside treatment for anxiety and mild depression.
- **Self-esteem and body image**: mastery in sport builds self-confidence, and activity improves how athletes see their bodies.
- **Cognitive function**: exercise sharpens attention, memory and learning \u2014 good for study as well as sport.
- **Sleep and energy**: regular, well-timed activity improves sleep quality and daily energy.
- **Social and emotional skills**: team sport develops cooperation, communication, empathy and dealing with winning and losing.
- **Resilience**: coping with training load and setbacks builds grit that transfers to life.

**Sport as therapy and education**
- Organised sport for young people channels energy, teaches discipline, and is a recognised tool for mental-health promotion (sport for development).
- The protective message: regular moderate activity is as important for mental well-being as it is for physical health.

>>> exam
List the rewards
Give three psychological benefits of regular sport. Answer: reduced stress and better mood; improved self-esteem and body image; sharper attention and memory. Add: better sleep, social skills and resilience.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "sociology",
    title: "10. Sociology of sport: culture, gender & development",
    body: `Sport does not happen in a vacuum \u2014 it is shaped by society and in turn shapes it. The examiner wants you to see the social forces around the game.

**What sociology of sport studies**
- **Culture** \u2014 how sport reflects and carries the beliefs, traditions and values of a community (India's love of kabaddi, cricket's status).
- **Socialisation** \u2014 sport teaching norms and values: discipline, teamwork, fair play, respect for rules; children learn roles through play.
- **Gender** \u2014 the differing opportunities, expectations and treatment of male and female athletes; the fight for equal access, funding, media time and pay is a live issue.
- **Social class and access** \u2014 money and location affect who can play which sport; some sports are elite (golf, polo), others grassroots.
- **Development** \u2014 sport as a tool for health, education, community building, and national pride (sport for development).

**Sport and society \u2014 two-way influence**
- Society \u2192 sport: rules, funding, media coverage, doping and betting scandals are shaped by public and government attitudes.
- Sport \u2192 society: role models, identity, tourism, and social change (barriers broken by champions).

**Indian context**: traditional games (kabaddi, kho-kho, wrestling) carry regional culture; major events (CWG, Asian Games) drive sports infrastructure and public policy.

>>> exam
Apply the idea
Give one way sport socialises young people and one barrier to equal participation. Answer: sport socialises by teaching norms and values \u2014 teamwork, fair play, discipline and respect for rules; a barrier is unequal access, such as girls having fewer facilities, coaching and funding than boys in many communities.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "olympism",
    title: "11. Olympism, ethics & values of sport",
    body: `Olympism is a philosophy of life expressed through sport \u2014 the ideals behind the modern Olympics movement (Coubertin, 1896).

**The Olympic ideals**
- **Excellence** \u2014 striving to be one's best, not merely to win.
- **Friendship** \u2014 mutual respect and understanding between athletes and nations.
- **Respect** \u2014 for rules, opponents, officials and oneself; **fair play** at its heart.
- The Olympic **motto**: \u201cCitius, Altius, Fortius \u2014 Faster, Higher, Stronger\u201d; the **creed**: the important thing in the Games is not winning but taking part.

**Sports ethics** \u2014 the moral principles governing conduct in sport.
- **Fair play** \u2014 competing honestly, within the rules, without cheating or unsporting conduct.
- **Doping** \u2014 the use of banned performance-enhancing substances \u2014 violates fairness, endangers health, and is punished by WADA (World Anti-Doping Agency): testing, sanctions, both for deliberate and neglect cases.
- **Match fixing and corruption** \u2014 manipulating results for betting gain \u2014 undermines the very meaning of competition.
- **Gamesmanship vs sportsmanship**: gamesmanship wins by bending or breaking the spirit of the rules; sportsmanship adds honesty and respect.

**Why ethics matter to the athlete and official**: trust in sport depends on everyone competing honestly; without it, achievement and spectacle lose their meaning.

>>> exam
Define olympism
What are the three core Olympic values? Answer: excellence (striving to be one's best), friendship (respect and understanding between nations and athletes), and respect (for rules, opponents and officials) \u2014 the fair-play heart of competition.`,
    module: "m5"
  },

  /* ====================================================================== */
  {
    id: "revision",
    title: "12. Quick-revision one-liners",
    body: `**Motivation**: intrinsic (internal enjoyment) + extrinsic (external rewards). **Personality**: traits vs interactionist (person \u00D7 situation). **Attitude**: ABC \u2014 affective, behavioural, cognitive.

**Personality types**: introvert (precision, quiet sports) vs extravert (team, high-intensity); Type A (competitive, stressed) vs Type B (relaxed). **Eysenck**: extraversion + neuroticism.

**Arousal**: drive theory (more = better for simple skills), inverted-U (best at moderate), catastrophe (sudden collapse under high anxiety). **Anxiety**: trait vs state; cognitive (worry) vs somatic (physical).

**Stress tools**: breathing, PMR, positive self-talk, imagery, arousal energising/calming.

**Attention (Nideffer)**: broad/narrow \u00D7 external/internal. **Concentration aids**: routines, cue words, simulation.

**Goals**: outcome, performance, process; **SMART** \u2014 specific, measurable, achievable, relevant, time-bound. **MST**: plan the mental skills like physical training.

**Aggression**: hostile vs instrumental (both illegal) vs assertiveness (legal, strong play). Control via modelling, arousal control, sanctions, de-briefing.

**Group (Tuckman)**: forming \u2192 storming \u2192 norming \u2192 performing. **Cohesion**: task (performance) + social (liking). **Leadership**: autocratic, democratic, laissez-faire.

**Audience**: social facilitation raises arousal \u2192 helps well-learned skills, hurts new ones; home advantage is real; counter with routines and simulation.

**Psychology of exercise**: better mood and stress, self-esteem, cognition, sleep, social skills, resilience.

**Sociology**: culture, socialisation, gender, access, sport for development; sport and society influence each other.

**Olympism**: excellence, friendship, respect; motto Citius-Altius-Fortius. **Ethics**: fair play, anti-doping (WADA), anti-match-fixing, sportsmanship over gamesmanship.

>>> exam
Self-test
Ten-minute recall: give one intrinsic and one extrinsic motivator; sketch the inverted-U; list the four group stages; write a SMART goal; define assertiveness; name the three Olympic values and one WADA role. Then check the chapters above.`,
    module: "m5"
  }
  ],
  exam: [
    { q: "Define intrinsic and extrinsic motivation with one example each.", a: "Intrinsic motivation comes from within \u2014 enjoyment and mastery (playing for love of the game); extrinsic comes from outside \u2014 rewards, money or pressure (playing for a trophy)." },
    { q: "Describe the inverted-U theory of arousal.", a: "Performance is highest at moderate arousal; too low leaves the athlete sluggish and too high causes tension and errors. The optimal level varies by person and by the difficulty of the skill." },
    { q: "Distinguish trait from state anxiety.", a: "Trait anxiety is a stable tendency to feel anxious across situations; state anxiety is the temporary, in-the-moment feeling (cognitive worry or somatic physical symptoms) in a specific situation." },
    { q: "Name two stress-management techniques and their purpose.", a: "Breathing control \u2014 lowers physical (somatic) arousal quickly; progressive muscle relaxation \u2014 releases physical tension to calm the body before competition." },
    { q: "List the four stages of group development.", a: "Forming (members meet), storming (conflict over roles and leadership), norming (roles and cohesion settle), and performing (effective teamwork toward the goal)." },
    { q: "What is cohesion and which type predicts performance better?", a: "Cohesion is the unity that holds a team together \u2014 task cohesion (shared commitment to the goal) predicts performance better than social cohesion (liking among members)." },
    { q: "Compare autocratic, democratic and laissez-faire leadership with one use each.", a: "Autocratic \u2014 the leader decides, used for quick match decisions; democratic \u2014 the leader consults, used to build team commitment; laissez-faire \u2014 the leader leaves the group to itself, rarely ideal alone." },
    { q: "Give two ways sport and society influence each other.", a: "Society shapes sport through media, funding and rules; sport shapes society through role models, identity, tourism and social change that breaks barriers." },
    { q: "State the three core Olympic values.", a: "Excellence (striving to be one's best), friendship (respect between nations and athletes), and respect (for rules, opponents and officials) \u2014 the basis of fair play." },
    { q: "Why is doping a violation of sports ethics?", a: "Doping unfairly enhances performance, violating fairness and the spirit of competition, endangers the athlete's health, and is therefore banned and sanctioned by WADA." },
    { q: "What does the distinction between gamesmanship and sportsmanship describe?", a: "Gamesmanship wins by bending or breaking the spirit of the rules; sportsmanship competes honestly within the rules and with respect, which is the ethical ideal." },
    { q: "How can a coach use arousal management before a final?", a: "The coach calibrates each athlete's arousal toward their individual optimum \u2014 calming over-anxious players with breathing and relaxation, energising under-aroused players with upbeat routines \u2014 so all step on court at their best." },
    { q: "Distinguish hostile aggression, instrumental aggression and assertiveness.", a: "Hostile aggression aims to hurt the opponent; instrumental aggression uses illegal aggression to gain advantage or stop a threat; assertiveness is strong, lawful, determined play within the rules \u2014 the only acceptable one." },
    { q: "Give three psychological benefits of regular exercise.", a: "Reduced stress and improved mood; increased self-esteem and body image; sharper attention and memory. Add better sleep, social skills and resilience." },
    { q: "Explain social facilitation and its coaching use.", a: "The presence of an audience raises arousal, which enhances the dominant response \u2014 helping well-learned skills and hurting new ones. Coaches use it by simulating loud crowds in training and building routines so players perform under pressure." },
    { q: "What is the home advantage and how can a team counter it?", a: "Home teams win more because of familiar ground, supportive crowds and less travel. Away teams counter it with pre-performance routines, noise training in practice, and an early composed start." },
    { q: "Write out SMART goals and give one sporting example.", a: "SMART = specific, measurable, achievable, relevant, time-bound. Example: increase free-throw accuracy from 70% to 82% over eight weeks using 30 minutes of daily practice and video review." },
    { q: "Name the two personality dimensions in Eysenck's model.", a: "Extraversion\u2013introversion and neuroticism\u2013stability; they combine to describe consistent patterns of behaviour, with introverts suited to quiet precision sports and extraverts to stimulating team games." },
    { q: "What is mental-skills training and why is it practised?", a: "MST is the planned, regular training of psychological techniques \u2014 goal setting, imagery, self-talk, routines and relaxation \u2014 like physical skills, so they become automatic and available under competition pressure." },
    { q: "What makes a coach's leadership effective in both discipline and relationships?", a: "Knowing the athletes and the moment \u2014 using autocratic decisions for quick match calls, democratic consultation to build commitment, warmth and clear communication, and consistent integrity; the style fits the situation." }
  ]
};