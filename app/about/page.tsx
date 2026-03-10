import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
      <section className="py-24 bg-cliq-white border-b border-cliq-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-zinc-200 mx-auto mb-6">
            <Image
              src="/scott-hoffman.jpg"
              alt="Scott Hoffman"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-3">
            Scott Hoffman
          </h1>
          <p className="text-zinc-600 text-lg">
            Operator &middot; Builder &middot; AI Strategist
          </p>
          <a
            href="https://www.linkedin.com/in/cliqology/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-zinc-600 hover:text-cliq-coral transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
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
                className="bg-cliq-white rounded-xl p-5 border border-cliq-navy/10"
              >
                <p className="font-semibold text-zinc-900 mb-1">{item.label}</p>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-5 py-2.5 bg-cliq-coral hover:bg-cliq-coral/90 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Work With Me
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center px-5 py-2.5 bg-cliq-white hover:bg-cliq-white/70 text-cliq-navy text-sm font-medium rounded-lg border border-cliq-navy/10 transition-colors"
            >
              See the Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
