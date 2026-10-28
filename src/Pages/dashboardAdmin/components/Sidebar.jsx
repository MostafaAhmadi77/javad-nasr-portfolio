import { adminAvatar } from "../data/adminAvatar";

const items = [
  { key: "overview", label: "Dashboard" },
  { key: "articles", label: "Articles" },
  { key: "leads", label: "Consultations" },
  { key: "todos", label: "Todos" },
  { key: "caseStudies", label: "Case Studies" },
  { key: "services", label: "Services" },
  { key: "settings", label: "Settings" },
];

function Sidebar({ activeTab, onSelect, onLogout }) {
  return (
    <aside className="border border-white/15 rounded-2xl ss:p-3 lg:p-4 bg-black h-fit">
      <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={adminAvatar}
            alt="Admin"
            className="w-14 h-14 rounded-full border-2 border-primary-orange object-cover shrink-0"
          />
          <div>
            <p className="text-white font-bold text-xl">JAVAD NASR</p>
            <p className="text-primary-orange text-sm tracking-widest">ADMIN</p>
          </div>
        </div>
      </div>
      <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            className={`shrink-0 whitespace-nowrap border border-primary-orange px-4 py-2 rounded-xl transition ${
              activeTab === item.key
                ? "bg-primary-orange text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {item.label}
          </button>
        ))}
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="shrink-0 whitespace-nowrap border border-primary-orange px-4 py-2 rounded-xl text-white/70 hover:text-white transition"
          >
            Logout
          </button>
        )}
      </nav>
      <p className="hidden lg:block text-white/40 text-xs mt-6">
        Strategy. Systems. Execution.
      </p>
    </aside>
  );
}

export default Sidebar;
