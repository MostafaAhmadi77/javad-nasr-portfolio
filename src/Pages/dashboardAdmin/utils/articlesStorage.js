const STORAGE_KEY = "javad-nasr-dashboard-articles";

export function loadArticles() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveArticles(articles) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
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
