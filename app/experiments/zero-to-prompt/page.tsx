import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zero to Prompt",
  description:
    "Notes from my first 90 days building with AI — what worked, what didn't, and what I'd do differently if I started over today.",
};

const entries = [
  {
    number: "03",
    slug: "the-longest-build",
    title: "The Longest Build",
    date: "March 2026",
    excerpt:
      "About seven hours of building, debugging, dead ends, and eventually — a fully functional AI-powered product live at a real URL. I did not write a single line of code myself.",
  },
  {
    number: "02",
    slug: "the-color-that-wasnt-there",
    title: "The Color That Wasn't There",
    date: "March 2026",
    excerpt:
      "The website looked fine until it didn't. I'd spent the better part of the day giving Cliqology an actual identity — a real brand, not just a name floating above a generic template. Then I pushed the changes and the hero section came back white.",
  },
  {
    number: "01",
    slug: "the-blinking-cursor",
    title: "The Blinking Cursor",
    date: "March 2026",
    excerpt:
      "A podcast got me here. I was listening in the car, half-paying attention, and then I wasn't. By the time I pulled into the driveway I had already decided I was going to try Claude Code. I had never opened a terminal before in my life.",
  },
];

export default function ZeroToPromptPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-cliq-navy border-b border-cliq-aqua/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/experiments"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-300 transition-colors mb-8"
          >
            &larr; Experiments
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-cliq-navy border border-cliq-aqua/30 text-cliq-aqua rounded-full text-xs font-medium">
              Build Log
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Zero to Prompt
          </h1>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Notes from my first 90 days building with AI — what worked, what
            didn&apos;t, and what I&apos;d do differently if I started over
            today.
          </p>
        </div>
      </section>

      {/* Entry list */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-zinc-100">
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/experiments/zero-to-prompt/${entry.slug}`}
                className="group flex flex-col py-10 first:pt-0 last:pb-0"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-xs font-mono text-cliq-coral font-semibold tracking-widest">
                    {entry.number}
                  </span>
                  <span className="text-sm text-zinc-500">{entry.date}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight mb-3 group-hover:text-cliq-coral transition-colors">
                  {entry.title}
                </h2>
                <p className="text-zinc-600 leading-relaxed text-sm mb-4">
                  {entry.excerpt}
                </p>
                <span className="text-sm font-medium text-cliq-aqua group-hover:text-cliq-coral transition-colors">
                  Read entry &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-12 bg-cliq-white border-t border-cliq-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/experiments"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            &larr; All experiments
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-cliq-coral hover:bg-cliq-coral/90 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
