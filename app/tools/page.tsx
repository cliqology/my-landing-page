import type { Metadata } from "next";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Practical AI tools built for operators, founders, and SaaS teams.",
};

const tagColors: Record<string, string> = {
  Strategy: "bg-cliq-aqua/10 text-cliq-navy",
  Marketing: "bg-cliq-coral/10 text-cliq-navy",
  Career: "bg-cliq-aqua/10 text-cliq-navy",
  Positioning: "bg-cliq-navy/10 text-cliq-navy",
};

export default function ToolsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-cliq-navy border-b border-cliq-aqua/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cliq-aqua text-sm font-semibold uppercase tracking-widest mb-4">
            Tools
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            AI tools built for operators
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl leading-relaxed">
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
                    <span className="text-xs text-zinc-600 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full">
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
