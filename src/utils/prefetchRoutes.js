// Hover/focus prefetch for route chunks. These dynamic imports resolve to
// the same chunks the router's React.lazy() calls load, so a prefetched page
// opens instantly on click instead of downloading on first navigation.
// Paths are matched case-insensitively (headerData uses /casestudies).
const prefetched = new Set();

const loaders = {
  "/": () => import("../Pages/Home/Page"),
  "/casestudies": () => import("../Pages/CaseStudies/Page"),
  "/services": () => import("../Pages/Services/Page"),
  "/insights": () => import("../Pages/Insights/Page"),
  "/about": () => import("../Pages/About/Page"),
  "/consultation": () => import("../Pages/Consultation/Page"),
  "/dashboardadmin": () => import("../Pages/dashboardAdmin/Page"),
};

export function prefetchRoute(path) {
  const key = String(path || "").toLowerCase();
  const load = loaders[key];
  if (!load || prefetched.has(key)) return;
  prefetched.add(key);
  load().catch(() => {
    // A failed prefetch must not block the real navigation, which retries it.
    prefetched.delete(key);
  });
}
