import { useState } from "react";
import {
  getAdminCredentials,
  changeAdminCredentials,
} from "../utils/adminAuth";

function ChangeCredentials() {
  const [username, setUsername] = useState(getAdminCredentials().username);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setMessage("");
    setError("");
    if (!username.trim()) {
      setError("Username cannot be empty.");
      return;
    }
    if (newPassword && newPassword.length < 6) {
      setError("New password must be at least 6 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("New password and confirmation do not match.");
      return;
    }
    setBusy(true);
    const result = await changeAdminCredentials({
      currentPassword,
      newUsername: username,
      newPassword,
    });
    setBusy(false);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setMessage("Admin username and password updated.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 rounded-2xl p-6 bg-black"
    >
      <h2 className="text-white text-2xl font-bold">Change Admin Login</h2>
      <p className="text-white/50 text-sm mt-2">
        Only the admin account exists. Enter the current password to change
        the username, the password, or both. Leave the new password empty to
        keep the current password.
      </p>
      <label className="block text-white text-sm mt-6">
        Username
        <input
          type="text"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
        />
      </label>
      <label className="block text-white text-sm mt-4">
        Current password
        <input
          type="password"
          required
          value={currentPassword}
          onChange={(event) => setCurrentPassword(event.target.value)}
          className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
        />
      </label>
      <label className="block text-white text-sm mt-4">
        New password (optional)
        <input
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
          className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
        />
      </label>
      <label className="block text-white text-sm mt-4">
        Confirm new password
        <input
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
        />
      </label>
      {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
      {message && <p className="text-primary-orange text-sm mt-4">{message}</p>}
      <button
        type="submit"
        disabled={busy}
        className="bg-primary-orange text-white px-5 py-3 rounded-xl mt-6 disabled:opacity-50"
      >
        {busy ? "Saving..." : "Save changes"}
      </button>
    </form>
  );
}

export default ChangeCredentials;
