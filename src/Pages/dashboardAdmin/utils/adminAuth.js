// Admin-only login for the dashboard. There is no signup and no new
// member registration: only the single admin account can log in.
// The password itself is never stored here; only its SHA-256 hash is kept
// as the default, and a changed password is stored only as its hash in
// this browser's localStorage. This is a client-side gate, not a secure
// server login: anyone who can read the site code can work around it.
// For real protection the dashboard needs a server-side login later.
const STORAGE_KEY = "javad-nasr-admin-auth";
const SESSION_KEY = "javad-nasr-admin-session";
const DEFAULT_USERNAME = "J-Nasr";
const DEFAULT_PASSWORD_HASH =
  "1eb7953cdee5d0df49bb3af499b2180b47fb871a5eb04cb1135969dd7021962a";

export async function hashPassword(password) {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function getAdminCredentials() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (stored && stored.username && stored.passwordHash) return stored;
  } catch {
    // Fall through to the defaults.
  }
  return { username: DEFAULT_USERNAME, passwordHash: DEFAULT_PASSWORD_HASH };
}

export async function verifyAdmin(username, password) {
  const credentials = getAdminCredentials();
  if (username !== credentials.username) return false;
  return (await hashPassword(password)) === credentials.passwordHash;
}

export async function changeAdminCredentials({
  currentPassword,
  newUsername,
  newPassword,
}) {
  const credentials = getAdminCredentials();
  if ((await hashPassword(currentPassword)) !== credentials.passwordHash) {
    return { ok: false, error: "Current password is incorrect." };
  }
  const next = {
    username: newUsername.trim(),
    passwordHash: newPassword
      ? await hashPassword(newPassword)
      : credentials.passwordHash,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return { ok: true };
}

export function isAdminLoggedIn() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function setAdminLoggedIn(value) {
  try {
    if (value) sessionStorage.setItem(SESSION_KEY, "1");
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // Session state is best-effort only.
  }
}
