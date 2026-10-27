import { publicArticles } from "../data/publicArticles";

const STORAGE_KEY = "javad-nasr-dashboard-articles";
const DELETED_PUBLIC_KEY = "javad-nasr-dashboard-deleted-public-articles";

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

function getDeletedPublicIds() {
  try {
    const parsed = JSON.parse(
      window.localStorage.getItem(DELETED_PUBLIC_KEY) || "[]",
    );
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markPublicArticleDeleted(id) {
  try {
    const ids = getDeletedPublicIds();
    if (!ids.includes(id)) {
      window.localStorage.setItem(
        DELETED_PUBLIC_KEY,
        JSON.stringify([...ids, id]),
      );
    }
  } catch {
    // Deletion of the local copy still applies; only the deleted-id
    // record is lost, so the public article may reappear on reload.
  }
}

// Always merge the project-published articles into the dashboard list,
// unless the admin deleted one of them in the dashboard, or a local copy
// (edited version) already exists. This replaces the old one-time seed,
// which could be missed if an old build was still served.
export function mergePublicArticles(storedArticles) {
  const stored = Array.isArray(storedArticles) ? storedArticles : [];
  const deleted = getDeletedPublicIds();
  const missing = publicArticles.filter(
    (item) =>
      !deleted.includes(item.id) &&
      !stored.some((local) => local.id === item.id),
  );
  return [...missing, ...stored];
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
