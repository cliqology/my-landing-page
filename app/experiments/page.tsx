import type { Metadata } from "next";
import Link from "next/link";
import { experiments } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Essays, frameworks, and build logs from the intersection of AI, strategy, and real operator experience.",
};

export default function ExperimentsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Experiments
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Thinking in public
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Essays, frameworks, and build logs from the intersection of AI,
            strategy, and real operator experience.
          </p>
        </div>
      </section>

      {/* Experiments grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp) => (
              <Link
                key={exp.id}
                href={exp.href}
                className="group bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-zinc-100 text-zinc-600 rounded-full text-xs font-medium">
                    {exp.tag}
                  </span>
                  <span className="text-xs text-zinc-400">{exp.date}</span>
                </div>
                <h2 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {exp.title}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {exp.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
