import type { Metadata } from "next";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Practical AI tools built for operators, founders, and SaaS teams.",
};

const tagColors: Record<string, string> = {
  Strategy: "bg-indigo-50 text-indigo-700",
  Marketing: "bg-violet-50 text-violet-700",
  Career: "bg-emerald-50 text-emerald-700",
  Positioning: "bg-amber-50 text-amber-700",
};

export default function ToolsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-zinc-950 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            AI tools built for operators
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            Practical tools designed to help you diagnose, position, and grow —
            without the six-figure consulting retainer.
          </p>
        </div>
      </section>

      {/* Tools grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:border-zinc-200 transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tagColors[tool.tag] || "bg-zinc-100 text-zinc-600"
                    }`}
                  >
                    {tool.tag}
                  </span>
                  {tool.status === "coming-soon" && (
                    <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-2.5 py-1 rounded-full">
                      Coming soon
                    </span>
                  )}
                </div>
                <h2 className="text-xl font-bold text-zinc-900 mb-3">
                  {tool.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
