import {
  LuLayoutDashboard,
  LuNewspaper,
  LuMessagesSquare,
  LuListChecks,
  LuBriefcase,
  LuLayers,
  LuSettings,
  LuLogOut,
} from "react-icons/lu";
import { adminAvatar } from "../data/adminAvatar";

const items = [
  { key: "overview", label: "Dashboard", icon: LuLayoutDashboard },
  { key: "articles", label: "Articles", icon: LuNewspaper },
  { key: "leads", label: "Consultations", icon: LuMessagesSquare },
  { key: "todos", label: "Todos", icon: LuListChecks },
  { key: "caseStudies", label: "Case Studies", icon: LuBriefcase },
  { key: "services", label: "Services", icon: LuLayers },
  { key: "settings", label: "Settings", icon: LuSettings },
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
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.key;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => onSelect(item.key)}
              className={`shrink-0 whitespace-nowrap border border-primary-orange px-4 py-2.5 rounded-xl transition flex items-center justify-start gap-3 text-left ${
                active ? "bg-primary-orange text-white" : "text-white/70 hover:text-white"
              }`}
            >
              <Icon className={`size-5 shrink-0 ${active ? "text-white" : "text-primary-orange"}`} />
              {item.label}
            </button>
          );
        })}
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="shrink-0 whitespace-nowrap border border-primary-orange px-4 py-2.5 rounded-xl text-white/70 hover:text-white transition flex items-center justify-start gap-3 text-left"
          >
            <LuLogOut className="size-5 shrink-0 text-primary-orange" />
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
