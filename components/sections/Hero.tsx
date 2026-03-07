import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-zinc-950 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.18),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-32 md:pt-48 md:pb-40">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-indigo-500" />
          <span className="text-indigo-400 text-xs font-semibold tracking-widest uppercase">
            Operator &middot; Builder &middot; AI Strategist
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
          Build with AI.
          <br />
          <span className="text-zinc-400">Think like an operator.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg text-zinc-400 leading-relaxed mb-10">
          I design and ship practical AI tools, operator playbooks, and business
          systems — built for founders and operators who need to move fast and
          think clearly.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            Explore the Tools
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            About Scott
          </Link>
        </div>
      </div>
    </section>
  );
}
