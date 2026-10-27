import { useState } from "react";
import { verifyAdmin, setAdminLoggedIn } from "../utils/adminAuth";

function Login({ onLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const ok = await verifyAdmin(username.trim(), password);
    setBusy(false);
    if (!ok) {
      setError("Username or password is incorrect.");
      return;
    }
    setAdminLoggedIn(true);
    onLoggedIn();
  }

  return (
    <div className="pb-5 bg-black min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md border border-primary-orange rounded-2xl p-6 bg-black"
      >
        <p className="text-primary-orange text-sm tracking-widest">ADMIN</p>
        <h1 className="text-white text-3xl font-bold mt-2">Dashboard Login</h1>
        <p className="text-white/50 text-sm mt-2">
          Admin only. No new accounts can be created here.
        </p>
        <label className="block text-white text-sm mt-6">
          Username
          <input
            type="text"
            required
            autoComplete="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
          />
        </label>
        <label className="block text-white text-sm mt-4">
          Password
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full mt-2 bg-black border border-white/20 rounded-xl px-4 py-3 text-white"
          />
        </label>
        {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full bg-primary-orange text-white px-4 py-3 rounded-xl mt-6 disabled:opacity-50"
        >
          {busy ? "Checking..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
