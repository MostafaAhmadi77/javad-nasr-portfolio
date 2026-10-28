import { useEffect } from "react";
import { useLocation } from "react-router";
import { casestudiesTable } from "../data/caseStudiesData";

const SITE = "https://javad-nasr.vercel.app";
const DEFAULT_TITLE = "Javad Nasr | Management Consultant & Business Strategist";
const DEFAULT_DESCRIPTION =
  "Helping organizations transform strategy into execution, build scalable systems, and achieve sustainable growth.";

const PAGES = {
  "/": ["Javad Nasr | Management Consultant & Business Strategist", DEFAULT_DESCRIPTION],
  "/about": ["About | Javad Nasr", "I partner with leadership teams to turn challenges into opportunities through strategy, system, and execution."],
  "/services": ["Services | Javad Nasr", "Strategy, transformation, and leadership services that deliver measurable and sustainable results."],
  "/caseStudies": ["Case Studies | Javad Nasr", "Real projects. Real impact. See how I partner with organizations to solve complex challenges and deliver measurable, lasting results."],
  "/insights": ["Insights | Javad Nasr", "Research, perspectives, and practical insights on strategy, leadership, and organizational transformation."],
  "/consultation": ["Consultation | Javad Nasr", "Start a conversation with the AI consultation assistant and request a consultation."],
  "/dashboardAdmin": ["Dashboard | Javad Nasr", DEFAULT_DESCRIPTION],
};

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = DEFAULT_TITLE;
    let description = DEFAULT_DESCRIPTION;
    if (PAGES[pathname]) {
      [title, description] = PAGES[pathname];
    } else if (pathname.startsWith("/caseStudies/")) {
      const study = casestudiesTable.find((item) => item.id === pathname.split("/")[2]);
      title = study ? `${study.longTitle} | Javad Nasr` : "Case Study | Javad Nasr";
      description = study ? study.description : DEFAULT_DESCRIPTION;
    }
    document.title = title;
    setMeta("description", description);
    setMeta("robots", pathname === "/dashboardAdmin" ? "noindex, nofollow" : "index, follow");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE}${pathname === "/" ? "/" : pathname}`);
  }, [pathname]);

  return null;
}

export default PageMeta;
