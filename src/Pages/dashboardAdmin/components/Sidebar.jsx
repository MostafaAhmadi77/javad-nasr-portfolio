const items = [
  { key: "overview", label: "Dashboard" },
  { key: "articles", label: "Articles" },
  { key: "caseStudies", label: "Case Studies" },
  { key: "services", label: "Services" },
  { key: "settings", label: "Settings" },
];

function Sidebar({ activeTab, onSelect, onLogout }) {
  return (
    <aside className="border border-white/15 rounded-2xl p-4 bg-black h-fit">
      <div className="border-b border-white/10 pb-4 mb-4">
        <p className="text-white font-bold text-xl">JAVAD NASR</p>
        <p className="text-primary-orange text-sm tracking-widest">ADMIN</p>
      </div>
      <nav className="flex flex-col gap-2">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            className={`text-left px-4 py-2 rounded-xl transition ${
              activeTab === item.key
                ? "bg-primary-orange text-white"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
      {onLogout && (
        <button
          type="button"
          onClick={onLogout}
          className="w-full text-left px-4 py-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 mt-2"
        >
          Logout
        </button>
      )}
      <p className="text-white/40 text-xs mt-6">
        Strategy. Systems. Execution.
      </p>
    </aside>
  );
}

export default Sidebar;
