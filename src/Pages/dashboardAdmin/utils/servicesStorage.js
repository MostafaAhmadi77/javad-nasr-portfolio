const STORAGE_KEY = "javad-nasr-dashboard-services";
const DELETED_PUBLIC_KEY = "javad-nasr-dashboard-deleted-public-services";

function storage() {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage;
  } catch {
    return null;
  }
}

export function loadServices() {
  try {
    const store = storage();
    if (!store) return [];
    const parsed = JSON.parse(store.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveServices(services) {
  try {
    const store = storage();
    if (store) store.setItem(STORAGE_KEY, JSON.stringify(services));
  } catch {
    // Local storage can be full or unavailable; the in-memory copy stays.
  }
}

function getDeletedPublicIds() {
  try {
    const store = storage();
    if (!store) return [];
    const parsed = JSON.parse(store.getItem(DELETED_PUBLIC_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function markPublicServiceDeleted(id) {
  try {
    const store = storage();
    if (!store) return;
    const ids = getDeletedPublicIds();
    if (!ids.includes(id)) {
      store.setItem(DELETED_PUBLIC_KEY, JSON.stringify([...ids, id]));
    }
  } catch {
    // Deletion of the local copy still applies; only the deleted-id
    // record is lost, so the public service may reappear on reload.
  }
}

// Public services are merged in unless the admin deleted one of them in
// the dashboard, or a stored copy (edited version) already exists.
export function mergePublicServices(storedServices, publicList) {
  const stored = Array.isArray(storedServices) ? storedServices : [];
  const deleted = getDeletedPublicIds();
  const list = Array.isArray(publicList) ? publicList : [];
  const missing = list.filter(
    (item) =>
      !deleted.includes(item.id) &&
      !stored.some((local) => local.id === item.id),
  );
  return [...missing, ...stored];
}

export function newServiceId() {
  try {
    if (
      typeof window !== "undefined" &&
      window.crypto &&
      window.crypto.randomUUID
    ) {
      return window.crypto.randomUUID();
    }
  } catch {
    // Fall through to the timestamp id below.
  }
  return `service-${Date.now()}`;
}
