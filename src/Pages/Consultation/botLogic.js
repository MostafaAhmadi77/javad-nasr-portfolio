// Pure logic of the AI Consultation Assistant bot, kept separate from the
// React page so it can be tested without a browser or a build step.

export const roles = [
  "CEO / Founder",
  "Senior Executive",
  "Manager / Team Lead",
  "HR / People Leader",
  "Entrepreneur / Business Owner",
  "Other",
];

export const reasons = [
  "Our sales have stagnated",
  "We need to grow faster",
  "Our performance needs improving",
  "Our organization needs transformation",
  "We need stronger leaders / teams",
  "Something else",
];

export const challengesByReason = {
  "Our sales have stagnated": [
    "Declining revenue",
    "Weak sales team structure",
    "Unclear commercial strategy",
    "Pricing or market positioning",
  ],
  "We need to grow faster": [
    "Growth has stalled",
    "We lack a clear growth strategy",
    "Our structure cannot support growth",
    "We are entering a new market",
  ],
  "Our performance needs improving": [
    "Missed targets / KPIs",
    "Low accountability",
    "Slow decision-making",
    "Processes are not delivering results",
  ],
  "Our organization needs transformation": [
    "Change is not sticking",
    "Strategy and execution are disconnected",
    "Culture is resisting change",
    "AI and new ways of working",
  ],
  "We need stronger leaders / teams": [
    "Leaders are overloaded",
    "Team capability gaps",
    "Succession / bench strength",
    "Low engagement or morale",
  ],
  "Something else": [
    "A specific business problem",
    "I am not sure yet — help me clarify",
    "A personal leadership challenge",
    "Something else",
  ],
};

export const areasByReason = {
  "Our sales have stagnated": [
    "Sales & Commercial Transformation",
    "Commercial Structure",
    "Sales Team & Process",
  ],
  "We need to grow faster": [
    "Business Growth",
    "Strategy & Execution",
    "Sales & Commercial Transformation",
  ],
  "Our performance needs improving": [
    "Performance Management",
    "Organizational Effectiveness",
    "Strategy & Execution",
  ],
  "Our organization needs transformation": [
    "Organizational Transformation",
    "Culture & Change",
    "AI & Ways of Working",
  ],
  "We need stronger leaders / teams": [
    "Leadership Development",
    "Team Effectiveness",
    "Culture & Change",
  ],
  "Something else": [
    "Strategy & Execution",
    "Organizational Transformation",
    "Leadership Development",
    "Something else",
  ],
};

export const urgencies = [
  "Immediate — this quarter",
  "Soon — in the next 1–3 months",
  "Exploring — no fixed timeline yet",
];

export const supports = [
  "Initial consultation",
  "Full transformation program",
  "Targeted advisory",
  "Workshop / training",
  "Not sure yet — recommend for me",
];

export const diagnoses = {
  "Sales & Commercial Transformation": {
    diagnosis: "Sales & Commercial Transformation",
    explanation:
      "Since your challenge involves both sales performance and the structure of your commercial team, a broader transformation approach may be more effective than addressing individual sales issues.",
    engagement:
      "An initial consultation to assess your current commercial structure, processes, and growth opportunities.",
  },
  "Commercial Structure": {
    diagnosis: "Commercial Structure Review",
    explanation:
      "Your answers point to how the commercial organization is structured — roles, ownership, and incentives — rather than to effort or individual performance alone.",
    engagement:
      "An initial consultation to map your current commercial structure and identify the structural changes that would unlock growth.",
  },
  "Business Growth": {
    diagnosis: "Business Growth",
    explanation:
      "Your challenge is growth itself: the strategy, structure, and execution that must line up for the next stage of growth.",
    engagement:
      "An initial consultation to assess where growth is blocked and what a practical growth plan should focus on first.",
  },
  "Organizational Transformation": {
    diagnosis: "Organizational Transformation",
    explanation:
      "Your challenge spans strategy, structure, and culture, so a transformation approach — not a single fix — is the right frame for it.",
    engagement:
      "An initial consultation to assess readiness for transformation and define a realistic first phase.",
  },
  "Leadership Development": {
    diagnosis: "Leadership Development",
    explanation:
      "Your answers point to leadership capacity and team capability as the lever that will move the rest of the organization.",
    engagement:
      "An initial consultation to assess leadership strengths, gaps, and the development path with the highest impact.",
  },
};

export function diagnosisFor(area) {
  return (
    diagnoses[area] || {
      diagnosis: area,
      explanation:
        "Based on your responses, your primary need appears to be in this area. A focused first conversation will clarify the scope before any program is proposed.",
      engagement:
        "An initial consultation to assess your current situation and agree on the most useful next step.",
    }
  );
}

// Branching: the challenge and area options for a question depend on the
// reason given earlier, so not every visitor sees every option.
export function challengeOptions(reason) {
  return challengesByReason[reason] || challengesByReason["Something else"];
}

export function areaOptions(reason) {
  return areasByReason[reason] || areasByReason["Something else"];
}

// The same validation the consultation form applies before saving a lead.
export function formErrorFor({ fullName, company, email }) {
  if (!fullName?.trim() || !company?.trim() || !email?.trim()) {
    return "Please fill in your full name, company, and email address.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "Please enter a valid email address.";
  }
  return "";
}
