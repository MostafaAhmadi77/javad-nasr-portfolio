const LEADS_KEY = "javad-nasr-consultation-leads";

export function loadLeads() {
  try {
    const parsed = JSON.parse(localStorage.getItem(LEADS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveLeads(leads) {
  localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
}

export function addLead(lead) {
  const leads = [lead, ...loadLeads()];
  saveLeads(leads);
  return leads;
}

export function deleteLead(id) {
  const leads = loadLeads().filter((lead) => lead.id !== id);
  saveLeads(leads);
  return leads;
}

export function updateLead(id, changes) {
  const leads = loadLeads().map((lead) =>
    lead.id === id ? { ...lead, ...changes, updatedAt: new Date().toISOString() } : lead
  );
  saveLeads(leads);
  return leads;
}

export function newLeadId() {
  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function scoreLead({ role, urgency, support }) {
  let score = 0;
  if (urgency === "Immediate — this quarter") score += 50;
  else if (urgency === "Soon — in the next 1–3 months") score += 35;
  else score += 20;
  if (role === "CEO / Founder") score += 25;
  else if (role === "Senior Executive") score += 20;
  else if (role === "Entrepreneur / Business Owner") score += 15;
  else score += 10;
  if (support === "Full transformation program") score += 15;
  else if (support === "Initial consultation") score += 10;
  else score += 5;
  return Math.min(score, 100);
}

export function followUpFor(score) {
  if (score >= 80) return "Contact within 24 hours — high priority.";
  if (score >= 60) return "Contact within 3 days.";
  return "Contact within a week.";
}
