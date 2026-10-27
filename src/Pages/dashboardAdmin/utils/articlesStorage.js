const SEED_KEY = "javad-nasr-dashboard-articles-seeded-v1";

const PUBLIC_ARTICLE = {
  id: "performance-agenda-2026",
  title: "The New Performance Agenda: What Organizations Need to Rethink in 2026",
  content: "<p>The business environment has changed faster than many organizations have been able to adapt.</p><p>Artificial intelligence is reshaping how work is performed. Economic and geopolitical uncertainty is changing how companies plan and allocate resources. Customer expectations are rising, while workforce expectations and the nature of work itself are evolving.</p><p>In this environment, organizations can no longer rely on the structures, processes, and management practices that worked in the past.</p><p>McKinsey&#x27;s *State of Organizations 2026*, based on a survey of more than 10,000 senior executives across 15 countries and 16 industries, captures this shift clearly: the focus of organizations is moving beyond short-term resilience toward sustained productivity, long-term impact, and continuous adaptation.</p><p>The question for leaders is therefore no longer simply: &quot;How do we perform better today?&quot;</p><p>It is: &quot;How do we build an organization that can continue to perform tomorrow?&quot;</p><h2>Three Forces Reshaping Organizations</h2><p>McKinsey identifies three major forces that are fundamentally changing the way organizations operate.</p><h3>1. Technology and AI are redefining how work gets done</h3><p>AI is no longer simply a technology initiative. It is increasingly becoming an organizational issue.</p><p>Organizations are reconsidering processes, roles, decision-making, and even traditional organizational structures as AI, automation, and data analytics become embedded in everyday operations.</p><p>Yet technology alone does not create transformation.</p><p>One of the major barriers to scaling AI identified in the research is organizational: change management, silos, unclear leadership, and inadequate organizational readiness remain significant obstacles.</p><p>This creates an important leadership challenge.</p><p>The question is not simply: &quot;Where can we use AI?&quot;</p><p>It is: &quot;How should our organization change because AI exists?&quot;</p><p>That distinction separates technology adoption from genuine transformation.</p><h3>2. Economic and geopolitical uncertainty is becoming structural</h3><p>Organizations are operating in an environment where uncertainty is no longer an occasional disruption. It is becoming part of the operating context.</p><p>Economic volatility, geopolitical fragmentation, supply-chain risks, changing regulations, and shifting competitive dynamics require organizations to become more adaptable without losing operational discipline.</p><p>This creates a difficult balance.</p><p>Organizations need to be fast enough to respond but stable enough to execute.</p><p>That requires more than contingency plans. It requires flexible operating models, faster decision-making, clearer accountability, and management systems capable of adapting without creating organizational chaos.</p><h3>3. The workforce and the nature of work are changing</h3><p>The third force is people.</p><p>Employee expectations are changing. Demographics are shifting. Technology is altering job responsibilities and the skills organizations need.</p><p>As AI takes over some tasks, the value of human capabilities such as judgment, leadership, collaboration, creativity, and problem-solving becomes increasingly important.</p><p>This means organizations need to rethink not only who they hire, but also how they develop people, measure performance, design roles, and create leadership capability.</p><p>In other words, the future organization will not simply be more digital.</p><p>It will need to be more capable.</p><h2>From Resilience to Sustained Performance</h2><p>One of the most important messages in the McKinsey research is the shift in organizational priorities.</p><p>In recent years, many organizations were primarily focused on resilience: surviving disruption, protecting cash flow, managing uncertainty, and maintaining operations.</p><p>The challenge is now moving toward something more demanding: sustained performance.</p><p>McKinsey reports that leaders are increasingly prioritizing revenue growth or stabilization, cost reduction, and customer satisfaction, while also recognizing the need for flexible operating models and capabilities that support future performance.</p><p>This changes the role of management.</p><p>A successful organization is not one that performs exceptionally for a few months because of extraordinary individual effort.</p><p>It is one that can produce strong performance repeatedly and systematically.</p><p>That distinction is fundamental.</p><h2>The Real Transformation Is Organizational</h2><p>There is a common misconception about transformation.</p><p>Companies often begin with a new strategy, a new technology platform, a new CRM, a new organizational chart, or a new set of KPIs.</p><p>But these are only components of transformation.</p><p>Real transformation happens when strategy, people, processes, systems, leadership, and execution begin working together.</p><p>A company can have an excellent strategy and still fail because its structure cannot execute it.</p><p>It can have a sophisticated CRM and still have a weak sales organization.</p><p>It can implement KPIs and still fail to improve performance if managers do not use them to manage.</p><p>It can invest heavily in AI and still achieve little if employees, processes, and leadership are not prepared for the change.</p><p>This is why organizational transformation should not be treated as a collection of isolated projects.</p><p>It should be approached as a management system.</p><h2>Five Questions Every Leader Should Ask</h2><h3>1. Is our strategy still relevant to the environment we operate in?</h3><p>A strategy designed for yesterday&#x27;s market may become a constraint rather than an advantage.</p><h3>2. Can our organization actually execute the strategy?</h3><p>Strategy without organizational capability is simply intention.</p><h3>3. How dependent is our business on individuals?</h3><p>If critical knowledge, customer relationships, decisions, or processes exist only in the minds of a few people, the organization has a structural vulnerability.</p><h3>4. Are our management systems creating performance or simply generating reports?</h3><p>KPIs, CRM systems, processes, dashboards, and meetings only create value when they improve decisions and execution.</p><h3>5. Are we building capabilities for the next stage of growth?</h3><p>Organizations should not wait for the next crisis to discover that their structure, people, and processes are no longer sufficient.</p><h2>A Practical Perspective</h2><p>In my experience working with organizations, one of the most common problems is not the absence of ideas.</p><p>It is the gap between what management wants to achieve and what the organization is actually capable of executing.</p><p>Growth often exposes this gap.</p><p>A company grows, but its organizational structure remains unchanged.</p><p>Sales increase, but processes remain dependent on individuals.</p><p>More employees are hired, but roles and responsibilities remain unclear.</p><p>New systems are purchased, but management practices do not change.</p><p>Eventually, the organization becomes larger without becoming more capable.</p><p>This is where transformation becomes necessary.</p><p>The objective should not simply be to solve today&#x27;s problem.</p><p>It should be to build an organization that is less dependent on individuals, more disciplined in execution, more capable of adapting, and better prepared for its next stage of growth.</p><p>Technology and AI will accelerate this transformation. But they will not replace the fundamentals of good management.</p><p>Clear strategy. Effective leadership. Well-designed systems. Capable people. Disciplined execution.</p><p>These remain the foundation of sustainable performance.</p><h2>Looking Ahead</h2><p>The organizations that succeed in the coming years will not necessarily be those with the most technology, the largest teams, or the most sophisticated strategies.</p><p>They will be the organizations capable of continuously learning, adapting, and improving.</p><p>The challenge for leaders is therefore to move beyond managing today&#x27;s performance and start building tomorrow&#x27;s organizational capability.</p><p>That means asking a more fundamental question:</p><p>Are we simply running the business we have \u2014 or are we building the organization we will need?</p><p>That is the real performance agenda for 2026.</p><p>**Source:** McKinsey & Company, *The State of Organizations 2026: Three tectonic forces that are reshaping organizations*, February 19, 2026.</p><p>**Perspective & analysis:** Javad Nasr</p>",
  status: "published",
  createdAt: "2026-01-01T00:00:00.000Z",
  updatedAt: "2026-01-01T00:00:00.000Z",
};

export function loadArticles() {
  try {
    const raw = window.localStorage.getItem("javad-nasr-dashboard-articles");
    const parsed = raw ? JSON.parse(raw) : null;
    const stored = Array.isArray(parsed) ? parsed : [];
    const seeded = window.localStorage.getItem(SEED_KEY) === "1";
    if (seeded) return stored;
    // First run after this change: bring the article that is already
    // published on the public Insights page into the dashboard list,
    // so the admin can edit, publish/unpublish and delete it here.
    // The seed flag means a later delete in the dashboard is not undone.
    const next = stored.some((item) => item.id === PUBLIC_ARTICLE.id)
      ? stored
      : [PUBLIC_ARTICLE, ...stored];
    window.localStorage.setItem("javad-nasr-dashboard-articles", JSON.stringify(next));
    window.localStorage.setItem(SEED_KEY, "1");
    return next;
  } catch {
    return [];
  }
}

export function saveArticles(articles) {
  try {
    window.localStorage.setItem("javad-nasr-dashboard-articles", JSON.stringify(articles));
  } catch {
    // Local storage can be full or unavailable; the editor keeps its
    // in-memory copy so the user does not lose the current draft.
  }
}

export function stripHtml(html) {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return (div.textContent || "").trim();
}

export function newArticleId() {
  if (window.crypto && window.crypto.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `article-${Date.now()}`;
}
