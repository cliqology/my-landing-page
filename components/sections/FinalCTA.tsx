import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
          Let&apos;s Connect
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-5">
          Ready to build something together?
        </h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Whether you&apos;re looking for a strategic thought partner, need help with
          AI implementation, or just want to talk shop — I&apos;m open to the
          conversation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-lg border border-white/10 hover:border-white/20 transition-colors"
          >
            Explore the Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
