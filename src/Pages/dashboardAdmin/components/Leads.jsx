import { useMemo, useState } from "react";
import { loadLeads, deleteLead, updateLead } from "../../../utils/leadsStorage";

const statuses = [
  { key: "new", label: "New" },
  { key: "reviewed", label: "Reviewed" },
  { key: "contacted", label: "Contacted" },
];

function Field({ label, value }) {
  if (!value) return null;
  return (
    <p className="text-white/70 text-sm leading-6">
      <span className="text-white/40">{label}: </span>
      {value}
    </p>
  );
}

function Leads() {
  const [leads, setLeads] = useState(() => loadLeads());
  const [viewing, setViewing] = useState(null);
  const [search, setSearch] = useState("");
  const [areaFilter, setAreaFilter] = useState("All areas");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const areas = useMemo(
    () => ["All areas", ...new Set(leads.map((lead) => lead.area).filter(Boolean))],
    [leads]
  );

  const filtered = leads.filter((lead) => {
    const haystack = `${lead.fullName || ""} ${lead.company || ""} ${lead.email || ""}`.toLowerCase();
    return (
      (!search || haystack.includes(search.toLowerCase())) &&
      (areaFilter === "All areas" || lead.area === areaFilter) &&
      (statusFilter === "All statuses" || lead.status === statusFilter)
    );
  });

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((lead) => {
      const key = lead.area || "Other";
      if (!groups[key]) groups[key] = [];
      groups[key].push(lead);
    });
    return groups;
  }, [filtered]);

  function handleDelete(id) {
    setLeads(deleteLead(id));
    setViewing(null);
    setConfirmDelete(false);
  }

  function handleStatus(id, status) {
    const next = updateLead(id, { status });
    setLeads(next);
    const updated = next.find((lead) => lead.id === id);
    if (updated) setViewing(updated);
  }

  if (viewing) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => {
              setViewing(null);
              setConfirmDelete(false);
            }}
            className="border border-white/30 text-white px-4 py-2 rounded-xl text-sm"
          >
            ← Back to consultations
          </button>
        </div>
        <div className="border border-white/15 rounded-2xl ss:p-4 sm:p-6 bg-black">
          <div className="flex flex-wrap justify-between gap-3">
            <div>
              <h1 className="text-white ss:text-2xl sm:text-3xl font-bold">
                {viewing.fullName}
              </h1>
              <p className="text-white/50 text-sm mt-1">
                {viewing.company}
                {viewing.jobTitle ? ` • ${viewing.jobTitle}` : ""}
              </p>
              <p className="text-white/40 text-xs mt-2">
                Received: {new Date(viewing.createdAt).toLocaleString()}
              </p>
            </div>
            <span className="text-primary-orange text-sm border border-primary-orange rounded-full px-3 py-1 h-fit">
              Lead Score: {viewing.leadScore}
            </span>
          </div>

          <div className="grid ss:grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="border border-white/10 rounded-2xl p-4">
              <h2 className="text-primary-orange text-xs tracking-widest">
                CONTACT INFORMATION
              </h2>
              <div className="mt-3 flex flex-col gap-1">
                <Field label="Email" value={viewing.email} />
                <Field label="Phone / WhatsApp" value={viewing.phone} />
                <Field label="Industry" value={viewing.industry} />
                <Field label="Company Size" value={viewing.companySize} />
                <Field label="Country" value={viewing.country} />
                <Field label="Preferred way to connect" value={viewing.preferredContact} />
              </div>
            </div>
            <div className="border border-white/10 rounded-2xl p-4">
              <h2 className="text-primary-orange text-xs tracking-widest">
                BOT CONVERSATION
              </h2>
              <div className="mt-3 flex flex-col gap-1">
                <Field label="Who are you" value={viewing.role} />
                <Field label="What brings you here" value={viewing.reason} />
                <Field label="Main challenge" value={viewing.challenge} />
                <Field label="Area" value={viewing.area} />
                <Field label="Urgency" value={viewing.urgency} />
                <Field label="Support wanted" value={viewing.support} />
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl p-4 mt-4">
            <h2 className="text-primary-orange text-xs tracking-widest">
              ABOUT THEIR NEED
            </h2>
            <div className="mt-3 flex flex-col gap-1">
              <Field label="What they want to discuss" value={viewing.topic} />
              <Field label="Challenge in their words" value={viewing.challengeDetail} />
            </div>
          </div>

          <div className="border border-primary-orange rounded-2xl p-4 mt-4">
            <h2 className="text-primary-orange text-xs tracking-widest">
              AI DIAGNOSIS &amp; FOLLOW-UP
            </h2>
            <p className="text-white font-bold mt-3">{viewing.diagnosis}</p>
            <p className="text-white/70 leading-7 mt-2">
              {viewing.diagnosisExplanation}
            </p>
            <p className="text-white/70 leading-7 mt-2">
              <span className="text-white/40">Recommended engagement: </span>
              {viewing.recommendedEngagement}
            </p>
            <p className="text-white/70 mt-2">
              <span className="text-white/40">Recommended follow-up: </span>
              {viewing.recommendedFollowUp}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <span className="text-white/50 text-sm">Status:</span>
            {statuses.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => handleStatus(viewing.id, item.key)}
                className={`px-4 py-2 rounded-xl text-sm border ${
                  viewing.status === item.key
                    ? "bg-primary-orange border-primary-orange text-white"
                    : "border-white/20 text-white/70"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-white/10 mt-6 pt-6">
            {!confirmDelete ? (
              <button
                type="button"
                onClick={() => setConfirmDelete(true)}
                className="border border-red-400 text-red-400 px-4 py-2 rounded-xl text-sm"
              >
                Delete this consultation request
              </button>
            ) : (
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-white/70 text-sm">
                  Delete all information for {viewing.fullName} permanently?
                </p>
                <button
                  type="button"
                  onClick={() => handleDelete(viewing.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm"
                >
                  Yes, delete permanently
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="border border-white/30 text-white px-4 py-2 rounded-xl text-sm"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap justify-between items-center gap-3 border border-primary-orange rounded-2xl p-4 bg-black">
        <div>
          <h1 className="text-white ss:text-xl sm:text-2xl font-bold">
            Consultations
          </h1>
          <p className="text-white/50 text-sm">
            {leads.length} request{leads.length === 1 ? "" : "s"} — grouped by
            area. Requests are saved in this browser and shown in the
            dashboard only, for now.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, company or email…"
          className="flex-1 min-w-0 bg-black border border-white/20 rounded-xl px-4 py-2 text-white placeholder:text-white/40"
        />
        <select
          value={areaFilter}
          onChange={(e) => setAreaFilter(e.target.value)}
          className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white"
        >
          {areas.map((area) => (
            <option key={area}>{area}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-black border border-white/20 rounded-xl px-4 py-2 text-white"
        >
          <option>All statuses</option>
          {statuses.map((item) => (
            <option key={item.key} value={item.key}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 && (
        <div className="border border-white/15 rounded-2xl p-6 bg-black text-white/70">
          No consultation requests yet. When someone completes the bot and the
          form, their request will appear here, grouped by area.
        </div>
      )}

      {Object.entries(grouped).map(([area, items]) => (
        <section key={area}>
          <h2 className="text-primary-orange text-xs tracking-widest mb-3">
            {area.toUpperCase()} ({items.length})
          </h2>
          <div className="flex flex-col gap-4">
            {items.map((lead) => (
              <button
                key={lead.id}
                type="button"
                onClick={() => setViewing(lead)}
                className="text-left border border-white/15 rounded-2xl p-4 bg-black cursor-pointer hover:border-primary-orange transition"
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <h3 className="text-white ss:text-lg sm:text-xl font-bold">
                    {lead.fullName}
                  </h3>
                  <span className="text-primary-orange text-sm border border-primary-orange rounded-full px-3 py-1 h-fit">
                    Score {lead.leadScore}
                  </span>
                </div>
                <p className="text-white/60 text-sm mt-2">
                  {lead.company}
                  {lead.jobTitle ? ` • ${lead.jobTitle}` : ""} • {lead.email}
                </p>
                <p className="text-white/40 text-xs mt-2">
                  {lead.challenge} • {lead.urgency} •{" "}
                  {new Date(lead.createdAt).toLocaleDateString()} •{" "}
                  {statuses.find((s) => s.key === lead.status)?.label || lead.status}
                </p>
              </button>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default Leads;
