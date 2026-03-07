import Link from "next/link";
import { tools } from "@/lib/data";

const tagColors: Record<string, string> = {
  Strategy: "bg-indigo-50 text-indigo-700",
  Marketing: "bg-violet-50 text-violet-700",
  Career: "bg-emerald-50 text-emerald-700",
  Positioning: "bg-amber-50 text-amber-700",
};

export default function FeaturedTools() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">
              AI tools built for operators
            </h2>
            <p className="mt-3 text-zinc-500 max-w-xl">
              Practical tools designed to help you diagnose, position, and grow
              — without the consulting fees.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden md:inline-flex items-center text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors shrink-0 ml-8"
          >
            View all tools &rarr;
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    tagColors[tool.tag] || "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {tool.tag}
                </span>
                {tool.status === "coming-soon" && (
                  <span className="text-xs text-zinc-400">Soon</span>
                )}
              </div>
              <h3 className="text-base font-semibold text-zinc-900 mb-2">
                {tool.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-5">
                {tool.description}
              </p>
              <span
                className={`text-sm font-medium ${
                  tool.status === "available"
                    ? "text-indigo-600"
                    : "text-zinc-400"
                }`}
              >
                {tool.status === "available" ? "Try it \u2192" : "In development"}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/tools"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            View all tools &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
