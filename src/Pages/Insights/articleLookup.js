import insightsData from "./data/insightsData.js";

const publicIds = new Set(insightsData.map((item) => item.id));

// Dashboard articles saved in this browser. Only published ones belong on
// the public Insights list, and a stored copy of a public article must not
// duplicate it (the dashboard list also saves merged public articles).
export function publishedLocalArticles(storedArticles) {
  const stored = Array.isArray(storedArticles) ? storedArticles : [];
  return stored.filter(
    (item) => item && item.status === "published" && !publicIds.has(item.id)
  );
}

// Public articles win over a stored copy with the same id.
export function findInsightArticle(id, storedArticles) {
  const found = insightsData.find((item) => item.id === id);
  if (found) return { kind: "public", article: found };
  const local = publishedLocalArticles(storedArticles).find((item) => item.id === id);
  if (local) return { kind: "local", article: local };
  return null;
}

export function firstImageSrc(html) {
  if (!html) return null;
  const match = String(html).match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}
