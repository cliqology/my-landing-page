import Link from "next/link";
import { experiments } from "@/lib/data";

export default function FeaturedExperiments() {
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Experiments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              Thinking in public
            </h2>
            <p className="mt-3 text-zinc-500 max-w-xl">
              Essays, frameworks, and build logs from the intersection of AI,
              strategy, and operator experience.
            </p>
          </div>
          <Link
            href="/experiments"
            className="hidden md:inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0 ml-8"
          >
            View all &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h3 className="text-base font-semibold text-zinc-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {exp.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {exp.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/experiments"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
