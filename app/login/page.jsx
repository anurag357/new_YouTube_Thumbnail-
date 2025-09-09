// app/login/page.jsx
"use client";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get("callbackUrl") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", { redirect: false, email, password });
    setLoading(false);

    if (!res?.error) router.push(callbackUrl);
    else alert(res.error);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-900 text-gray-100 p-8 rounded-2xl shadow-lg border border-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center">Log in</h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="my-6 text-center text-gray-400">or</div>

        <button
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold"
        >
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-purple-400 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}
