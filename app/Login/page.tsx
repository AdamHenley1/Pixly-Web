"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import ParticleBackground from "@/components/ParticleBackground";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#080818] flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#642ac0] rounded-full opacity-30 blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7C3AED] rounded-full opacity-20 blur-[70px]" />
      <ParticleBackground />

      <div className="relative z-10 w-[380px] p-8 rounded-2xl bg-black/7 backdrop-blur-md border border-black/6 text-center">
        <h1 className="text-2xl font-medium text-white mb-1">Welcome back</h1>
        <p className="text-sm text-white/55 mb-7">Sign in to your Pixly account</p>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <div className="mb-4 text-left">
          <label className="text-xs text-white/60 tracking-widest mb-1 block">EMAIL</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-3 rounded-lg border-2 border-purple-600/70 bg-black/10 text-white placeholder-white/40 text-sm outline-none focus:border-purple-400 transition-colors" />
        </div>

        <div className="mb-6 text-left">
          <label className="text-xs text-white/60 tracking-widest mb-1 block">PASSWORD</label>
          <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-3 rounded-lg border-2 border-purple-600/70 bg-black/10 text-white placeholder-white/40 text-sm outline-none focus:border-purple-400 transition-colors" />
        </div>

        <button onClick={handleLogin} className="w-full py-3 bg-[#4c35f2] hover:bg-[#3b28c7] text-white font-medium rounded-lg transition-colors duration-300 cursor-pointer mb-4">
          Sign in
        </button>

        <p className="text-sm text-white/50">
          New here?{" "}
          <a href="/Sign_up" className="text-purple-400 hover:text-purple-300 transition-colors">Sign up</a>
        </p>
      </div>
    </main>
  );
}