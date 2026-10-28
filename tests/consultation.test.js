import test from "node:test";
import assert from "node:assert/strict";

import {
  roles,
  reasons,
  urgencies,
  supports,
  challengeOptions,
  areaOptions,
  diagnosisFor,
  formErrorFor,
} from "../src/Pages/Consultation/botLogic.js";
import {
  loadLeads,
  addLead,
  deleteLead,
  updateLead,
  newLeadId,
  scoreLead,
  followUpFor,
} from "../src/utils/leadsStorage.js";

// leadsStorage talks to localStorage, which does not exist in Node, so the
// tests run it against a small in-memory stand-in with the same API.
const store = new Map();
globalThis.localStorage = {
  getItem: (key) => (store.has(key) ? store.get(key) : null),
  setItem: (key, value) => store.set(key, value),
  removeItem: (key) => store.delete(key),
  clear: () => store.clear(),
};

function fullJourney() {
  // The exact path from the design document: a CEO whose sales stagnated.
  const answers = {
    role: "CEO / Founder",
    reason: "Our sales have stagnated",
    challenge: "Declining revenue",
    area: "Sales & Commercial Transformation",
    urgency: "Immediate — this quarter",
    support: "Full transformation program",
  };
  const info = diagnosisFor(answers.area);
  const score = scoreLead(answers);
  return {
    id: newLeadId(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    status: "new",
    ...answers,
    diagnosis: info.diagnosis,
    diagnosisExplanation: info.explanation,
    recommendedEngagement: info.engagement,
    leadScore: score,
    recommendedFollowUp: followUpFor(score),
    fullName: "Test Visitor",
    company: "Test Company",
    email: "test@example.com",
  };
}

test("bot offers the six documented questions worth of options", () => {
  assert.ok(roles.includes("CEO / Founder"));
  assert.ok(reasons.includes("Our sales have stagnated"));
  assert.ok(urgencies.includes("Immediate — this quarter"));
  assert.ok(supports.includes("Full transformation program"));
  assert.equal(roles.length, 6);
  assert.equal(reasons.length, 6);
});

test("branching: a sales-stagnation visitor never sees unrelated options", () => {
  const challenges = challengeOptions("Our sales have stagnated");
  const areas = areaOptions("Our sales have stagnated");
  assert.ok(challenges.includes("Declining revenue"));
  assert.ok(challenges.includes("Weak sales team structure"));
  assert.ok(!challenges.includes("Team capability gaps"));
  assert.ok(!challenges.includes("Missed targets / KPIs"));
  assert.ok(areas.includes("Sales & Commercial Transformation"));
  assert.ok(!areas.includes("Leadership Development"));
});

test("branching: a leadership visitor gets the leadership path instead", () => {
  assert.ok(
    areaOptions("We need stronger leaders / teams").includes(
      "Leadership Development"
    )
  );
  assert.ok(
    !areaOptions("We need stronger leaders / teams").includes(
      "Sales & Commercial Transformation"
    )
  );
});

test("branching: an unknown reason falls back to the generic options", () => {
  assert.ok(challengeOptions("???").includes("A specific business problem"));
  assert.ok(areaOptions(undefined).includes("Strategy & Execution"));
});

test("diagnosis: the sales path diagnoses commercial transformation", () => {
  const info = diagnosisFor("Sales & Commercial Transformation");
  assert.equal(info.diagnosis, "Sales & Commercial Transformation");
  assert.match(info.explanation, /commercial team/);
  assert.match(info.engagement, /commercial structure/);
});

test("diagnosis: an area without a written diagnosis still gets a safe fallback", () => {
  const info = diagnosisFor("Sales Team & Process");
  assert.equal(info.diagnosis, "Sales Team & Process");
  assert.ok(info.explanation.length > 0);
  assert.ok(info.engagement.length > 0);
});

test("form validation: name, company and email are required, email must be valid", () => {
  assert.match(
    formErrorFor({ fullName: "", company: "Co", email: "a@b.com" }),
    /full name/
  );
  assert.match(
    formErrorFor({ fullName: "A", company: "", email: "a@b.com" }),
    /full name/
  );
  assert.match(
    formErrorFor({ fullName: "A", company: "Co", email: "not-an-email" }),
    /valid email/
  );
  assert.equal(
    formErrorFor({ fullName: "A", company: "Co", email: "a@b.com" }),
    ""
  );
});

test("lead score: urgent CEO on a full program scores highest and is urgent", () => {
  const score = scoreLead({
    role: "CEO / Founder",
    urgency: "Immediate — this quarter",
    support: "Full transformation program",
  });
  assert.equal(score, 90);
  assert.match(followUpFor(score), /24 hours/);
});

test("lead score: an exploring visitor scores lower and waits longer", () => {
  const score = scoreLead({
    role: "Other",
    urgency: "Exploring — no fixed timeline yet",
    support: "Workshop / training",
  });
  assert.equal(score, 35);
  assert.match(followUpFor(score), /within a week/);
  assert.equal(followUpFor(70), "Contact within 3 days.");
});

test("full journey: answers, diagnosis, score and follow-up land on the lead", () => {
  store.clear();
  const lead = fullJourney();
  assert.equal(lead.diagnosis, "Sales & Commercial Transformation");
  assert.equal(lead.leadScore, 90);
  assert.match(lead.recommendedFollowUp, /24 hours/);
  assert.equal(lead.status, "new");
});

test("dashboard storage: save, list, change status and delete a lead", () => {
  store.clear();
  const lead = fullJourney();
  addLead(lead);
  assert.equal(loadLeads().length, 1);
  assert.equal(loadLeads()[0].fullName, "Test Visitor");

  updateLead(lead.id, { status: "reviewed" });
  assert.equal(loadLeads()[0].status, "reviewed");
  updateLead(lead.id, { status: "contacted" });
  assert.equal(loadLeads()[0].status, "contacted");

  deleteLead(lead.id);
  assert.equal(loadLeads().length, 0);
});

test("dashboard storage: deleting one lead leaves the others untouched", () => {
  store.clear();
  const first = { ...fullJourney(), id: "lead-one", fullName: "First" };
  const second = { ...fullJourney(), id: "lead-two", fullName: "Second" };
  addLead(first);
  addLead(second);
  deleteLead("lead-one");
  const remaining = loadLeads();
  assert.equal(remaining.length, 1);
  assert.equal(remaining[0].id, "lead-two");
});
