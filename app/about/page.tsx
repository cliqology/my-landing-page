import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Scott Hoffman — operator, builder, and AI strategist.",
};

const strengths = [
  {
    label: "GTM Strategy",
    desc: "Building go-to-market from zero and scaling it past the first inflection point.",
  },
  {
    label: "Revenue Operations",
    desc: "Structuring teams, systems, and metrics for durable, predictable growth.",
  },
  {
    label: "Product Thinking",
    desc: "Operator-level product intuition across B2B SaaS — from roadmap to retention.",
  },
  {
    label: "AI Implementation",
    desc: "Practical AI tooling for real business workflows, not demos and side projects.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-20 h-20 rounded-full bg-zinc-200 border-2 border-zinc-300 mx-auto mb-6 flex items-center justify-center">
            <span className="text-zinc-600 text-2xl font-semibold">SH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
            Scott Hoffman
          </h1>
          <p className="text-zinc-500 text-lg">
            Operator &middot; Builder &middot; AI Strategist
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-zinc-900 mb-5">
            The short version
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-5">
            I&apos;m an operator with 10+ years across SaaS, growth, and product.
            I&apos;ve led GTM strategy, built and managed revenue teams, and worked
            closely with founders to scale from early traction to Series B and
            beyond.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-5">
            Now I&apos;m applying that experience to the AI era — building practical
            tools, frameworks, and systems that help businesses think more
            clearly, move faster, and make better decisions without needing a
            consultant in every room.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-14">
            Cliqology is my platform for shipping AI experiments, sharing
            operator-first thinking, and working with founders and operators who
            want to build intelligently.
          </p>

          <h2 className="text-2xl font-bold text-zinc-900 mb-5">
            What I bring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {strengths.map((item) => (
              <div
                key={item.label}
                className="bg-zinc-50 rounded-xl p-5 border border-zinc-100"
              >
                <p className="font-semibold text-zinc-900 mb-1">{item.label}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center px-5 py-2.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-medium rounded-lg transition-colors"
            >
              See the Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
