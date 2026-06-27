import ParticleBackground from "@/components/ParticleBackground";
export default function LoginPage() {
  return (
    <main className="relative min-h-screen bg-[#080818] flex items-center justify-center overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#642ac0] rounded-full opacity-30 blur-[60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7C3AED] rounded-full opacity-20 blur-[70px]" />

        <ParticleBackground />
      {/* Glass card */}
      <div className="relative z-10 w-[380px] p-8 rounded-2xl bg-black/7 backdrop-blur-md border border-black/6 text-center">

        <h1 className="text-2xl font-medium text-white mb-1">Welcome</h1>
        <p className="text-sm text-white/55 mb-7">Sign Up to create your Pixly account</p>

        <div className="mb-4 text-left">
          <label className="text-xs text-white/60 tracking-widest mb-1 block">EMAIL</label>
          <input type="email" placeholder="you@example.com" className="w-full px-3 py-3 rounded-lg border-2 border-purple-600/70 bg-black/10 text-white placeholder-white/40 text-sm outline-none focus:border-purple-400 transition-colors" />
        </div>

        <div className="mb-6 text-left">
          <label className="text-xs text-white/60 tracking-widest mb-1 block">PASSWORD</label>
          <input type="password" placeholder="••••••••" className="w-full px-3 py-3 rounded-lg border-2 border-purple-600/70 bg-black/10 text-white placeholder-white/40 text-sm outline-none focus:border-purple-400 transition-colors" />
        </div>

        <div className="mb-6 text-left">
          <label className="text-xs text-white/60 tracking-widest mb-1 block">CONFIRM PASSWORD</label>
          <input type="password" placeholder="••••••••" className="w-full px-3 py-3 rounded-lg border-2 border-purple-600/70 bg-black/10 text-white placeholder-white/40 text-sm outline-none focus:border-purple-400 transition-colors" />
        </div>

        <button className="w-full py-3 bg-[#4c35f2] hover:bg-[#3b28c7] text-white font-medium rounded-lg transition-colors duration-300 cursor-pointer mb-4">
          Sign up
        </button>

        <p className="text-sm text-white/50">
          Already have an account?{" "}
          <a href="/Login" className="text-purple-400 hover:text-purple-300 transition-colors">Login</a>
        </p>

      </div>
    </main>
  )
}