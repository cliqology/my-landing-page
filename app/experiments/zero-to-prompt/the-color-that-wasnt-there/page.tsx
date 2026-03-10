import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Color That Wasn't There — Zero to Prompt",
  description:
    "The website looked fine until it didn't. Notes on branding day, a Tailwind config bug, and what it means when the tool you're using needs you to push back.",
};

const linkClass =
  "text-cliq-aqua hover:text-cliq-navy underline underline-offset-2 transition-colors";

export default function TheColorThatWasntTherePage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-cliq-navy border-b border-cliq-aqua/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/experiments/zero-to-prompt"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-300 transition-colors mb-8"
          >
            &larr; Zero to Prompt
          </Link>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-xs font-mono text-cliq-coral font-semibold tracking-widest">
              02
            </span>
            <span className="text-sm text-zinc-400">March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Color That Wasn&apos;t There
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Intro */}
            <p className="text-lg text-zinc-600 leading-relaxed mb-4 border-l-2 border-cliq-aqua/30 pl-5 italic">
              The website looked fine until it didn&apos;t.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-2 border-cliq-aqua/30 pl-5 italic">
              I&apos;d spent the better part of the day giving Cliqology an
              actual identity — a real brand, not just a name floating above a
              generic template. Miami Aqua. Sunset Coral. Deep Marine. I had hex
              codes, a logo set, a brand guide document, the whole thing. It
              felt like progress. Then I pushed the changes to the site and the
              hero section came back white. Not the right white. Just... white.
              Empty. Like the design had shrugged.
            </p>

            <hr className="border-zinc-100 mb-8" />

            <div className="space-y-8">
              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  This was supposed to be a light day. The goal was to get
                  Cliqology&apos;s visual identity locked down and reflected on
                  the actual website. I&apos;d been operating without a real
                  brand system — colors chosen on instinct, no documented logic
                  behind any of it. I wanted to fix that.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I started in{" "}
                  <a
                    href="https://gemini.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Google Gemini
                  </a>
                  , using the Nano 2 model (I&apos;ve been calling it
                  &ldquo;Nano Banana 2&rdquo; in my head and I&apos;m not
                  stopping). I used it to build out the visual identity first —
                  the asterisk logo mark, the split-color treatment, the full
                  logo set. Then I went back to Gemini to turn that visual
                  system into a structured brand guide: a markdown file with hex
                  codes, typography rules, spacing logic, implementation notes
                  for CSS and email and Google Workspace. A proper source of
                  truth.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Both of those outputs came out of Gemini. Then I brought them
                  into{" "}
                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude Code
                  </a>{" "}
                  and said, essentially: take this brand guide and apply it to
                  the project. Claude Code did that — and then I did something
                  I&apos;d been doing manually up to this point. I let it push
                  to{" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    GitHub
                  </a>
                  . That part worked fine. No drama, no hesitation. I watched it
                  run and didn&apos;t intervene. It felt like handing off a set
                  of keys.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Then Came the Screenshot
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The site wasn&apos;t rendering the custom colors. The hero
                  sections and the final CTA block that were supposed to be Deep
                  Marine (#005778) were coming back white. I couldn&apos;t tell
                  from the code what was wrong — so I took a screenshot and
                  dropped it into Claude Code.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  First diagnosis: the dev server needed a restart to pick up
                  the{" "}
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Tailwind
                  </a>{" "}
                  config changes.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I restarted. Still white. Second screenshot.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Second diagnosis: the Tailwind config had the colors defined
                  as flat keys with hyphens —{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    &quot;cliq-navy&quot;
                  </code>{" "}
                  — but Tailwind v3 expects nested objects to generate{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    bg-cliq-navy
                  </code>{" "}
                  style classes. It was looking for{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    colors.cliq.navy
                  </code>
                  , couldn&apos;t find it, and silently skipped the whole
                  thing. One config fix, no component changes needed.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  That fixed it. But I sat with the sequence for a minute.
                  Claude Code had written the config, deployed the config, and
                  then needed two screenshots to correctly diagnose why the
                  config it wrote wasn&apos;t working. The first answer
                  wasn&apos;t wrong exactly — it was just incomplete.
                  Directional, not diagnostic.
                </p>
              </div>

              {/* Callout */}
              <div className="bg-cliq-navy/5 border-l-4 border-cliq-coral rounded-r-xl p-5">
                <p className="text-zinc-700 leading-relaxed text-sm">
                  What I took from that: Claude Code is confident in a way that
                  can outpace its accuracy. That&apos;s not a flaw to work
                  around, it&apos;s just something to hold onto. The tool is
                  fast and capable and sometimes it needs you to push back.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  What Didn&apos;t Work
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The other thing that didn&apos;t work the way I wanted: image
                  editing. Gemini Nano 2 is fine for structured generation —
                  give it a brief, get a usable output. But when I tried to use
                  it for image work, the results were less than optimal. That
                  part of the workflow still needs a better answer. I don&apos;t
                  have one yet.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  What I&apos;d Do Differently
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Reserve longer blocks of time for AI sessions. Today I was
                  working in fragments — a few minutes here, pick it up later,
                  lose the thread, reorient. That friction is real and it
                  compounds. AI tools reward continuity. You build context as
                  you go, and every interruption costs some of it. Next time I
                  do a day like this, I block the time like it&apos;s a meeting.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  A Footnote Worth Mentioning
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Yesterday I had a conversation with{" "}
                  <a
                    href="https://jeffreybooth.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Jeff Booth
                  </a>{" "}
                  — author of <em>The Price of Tomorrow</em> — about his own
                  experiences with vibe coding. The enthusiasm was genuine and
                  specific. He mentioned a few tools I haven&apos;t tested yet,
                  including something called{" "}
                  <a
                    href="https://antigravity.google/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Google Antigravity
                  </a>
                  . That&apos;s a separate thread. More on it when I get there.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  For now, the brand is in. The colors are rendering. The push
                  to GitHub is no longer something I do manually.
                </p>
                <p className="text-zinc-600 leading-relaxed mt-4">
                  The site looks like something now.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-12 bg-cliq-white border-t border-cliq-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/experiments/zero-to-prompt/the-blinking-cursor"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            &larr; Previous: The Blinking Cursor
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
