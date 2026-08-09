/* ==========================================================================
   THE ARENA — Syllabus Modules
   A semester-mapped taxonomy common to PHE and B.P.Ed programmes.
   Every article is tagged to one or more modules.
   ========================================================================== */

window.MODULES = [
  {
    key: "m1",
    num: "I",
    title: "Anatomy & Physiology",
    semester: "Semesters 1–2",
    icon: "\u{1F9E0}",
    blurb: "The structural and functional foundations of the human body during exercise.",
    topics: [
      "Skeletal system — bones, joints and their classification",
      "Muscular system — muscle types, origins and insertions",
      "Cardio-respiratory system — heart, lungs and circulation under load",
      "Energy systems — ATP-CP, anaerobic (lactic) and aerobic pathways",
      "Bone and joint involvement per sport",
      "Muscle groups engaged by sport-specific skills"
    ]
  },
  {
    key: "m2",
    num: "II",
    title: "Kinesiology & Biomechanics",
    semester: "Semesters 2–3",
    icon: "\u{1F3C3}",
    blurb: "How the body moves — mechanics, levers, force and motion in sporting actions.",
    topics: [
      "Joint motion — flexion, extension, rotation, abduction, adduction",
      "Planes and axes of movement",
      "Levers of the body and their mechanical advantage",
      "Projectile motion — angle, velocity and height of release",
      "Force production, momentum and impulse",
      "Centre of gravity and balance in skills"
    ]
  },
  {
    key: "m3",
    num: "III",
    title: "Sports Training & Conditioning",
    semester: "Semesters 3–4",
    icon: "\u{1F4AA}",
    blurb: "Principles and methods of building fitness and peak sporting performance.",
    topics: [
      "Training principles — overload, specificity, reversibility, variance",
      "Warm-up, conditioning and cool-down design",
      "Components of physical fitness — strength, speed, endurance, flexibility, agility",
      "Periodisation — micro, meso and macro cycles",
      "Methods — interval, fartlek, circuit, weight, continuous training",
      "Recovery, rest and tapering"
    ]
  },
  {
    key: "m4",
    num: "IV",
    title: "Officiating & Tournament Management",
    semester: "Semesters 4–5",
    icon: "\u{1F3C6}",
    blurb: "The craft of running sport — rules, refereeing, fixtures and organisation.",
    topics: [
      "Referee duties, signals and code of conduct",
      "Tournament formats — knockout, league (round-robin), combination",
      "Seeding, byes and the management of fixtures",
      "Scoring systems and tie-breaking rules",
      "Court, field and equipment specifications",
      "Role of officials, scorers and timekeepers"
    ]
  },
  {
    key: "m5",
    num: "V",
    title: "Sports Psychology & Sociology",
    semester: "Semesters 5–6",
    icon: "\u{1F9D8}",
    blurb: "The mental and social dimensions of sport and the athlete.",
    topics: [
      "Motivation, personality and attitude in athletes",
      "Arousal, anxiety and stress regulation",
      "Concentration, imagery and mental rehearsal",
      "Group dynamics, cohesion and leadership",
      "Sociology of sport — culture, gender and development",
      "Olympism and sports ethics"
    ]
  },
  {
    key: "m6",
    num: "VI",
    title: "Health, Nutrition & First Aid",
    semester: "Semesters 5–6",
    icon: "\u{1F34F}",
    blurb: "Staying healthy — eating for sport, preventing injury and giving care.",
    topics: [
      "Sports nutrition — macronutrients, hydration and match-day eating",
      "Common sports injuries and their mechanism",
      "First aid — R.I.C.E., immobilisation and emergency response",
      "Injury prevention — warm-up, taping and conditioning",
      "Personal hygiene, lifestyle diseases and wellness",
      "Rehabilitation and return-to-play protocols"
    ]
  }
];

window.MODULE_BY_KEY = {};
window.MODULES.forEach(function (m) { MODULE_BY_KEY[m.key] = m; });

/* Human-readable tags used across articles */
window.MODULE_TAGS = {
  m1: "Anatomy & Physiology",
  m2: "Kinesiology & Biomechanics",
  m3: "Sports Training & Conditioning",
  m4: "Officiating & Tournament Management",
  m5: "Sports Psychology & Sociology",
  m6: "Health, Nutrition & First Aid"
};
