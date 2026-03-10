import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Blinking Cursor — Zero to Prompt",
  description:
    "A podcast got me here. I had never opened a terminal before in my life.",
};

const linkClass =
  "text-cliq-aqua hover:text-cliq-navy underline underline-offset-2 transition-colors";

export default function TheBlinkingCursorPage() {
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
              01
            </span>
            <span className="text-sm text-zinc-400">March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Blinking Cursor
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Intro */}
            <p className="text-lg text-zinc-600 leading-relaxed mb-4 border-l-2 border-cliq-aqua/30 pl-5 italic">
              A podcast got me here.{" "}
              <a
                href="https://www.marketingagainstthegrain.com/episodes/405"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Episode 405 of Marketing Against the Grain
              </a>
              . I was listening in the car, half-paying attention, and then I
              wasn&apos;t. By the time I pulled into the driveway I had already
              decided I was going to try{" "}
              <a
                href="https://claude.ai/code"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Claude Code
              </a>
              .
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-2 border-cliq-aqua/30 pl-5 italic">
              I had never opened a terminal before in my life.
            </p>

            <hr className="border-zinc-100 mb-8" />

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  The Setup
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The first thing I did was buy the lowest subscription tier for{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude
                  </a>
                  . Then I followed the podcast&apos;s advice and downloaded{" "}
                  <a
                    href="https://ghostty.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Ghostty
                  </a>
                  , a terminal app, because apparently that&apos;s where this
                  all lives. I installed{" "}
                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude Code
                  </a>
                  . I stared at the blinking cursor.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The terminal is an unforgiving place for someone new to it. No
                  spell check. No autocorrect. No &ldquo;did you mean...?&rdquo;
                  Just a cold error if you fat-finger a command. I&apos;m still
                  doing that.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  What I Decided to Build
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I knew enough to know I shouldn&apos;t start too big. I wanted
                  something I could actually finish, something that would let me
                  understand the <em>workflow</em> more than the end product. I
                  chose a personal landing page for a project I&apos;ve been
                  thinking about, hosted at{" "}
                  <a
                    href="https://www.cliqology.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    cliqology.com
                  </a>
                  .
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  But the real goal wasn&apos;t the website. It was
                  understanding how the pieces connect:{" "}
                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude Code
                  </a>{" "}
                  writing and editing files on my MacBook, me pushing those
                  changes to{" "}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    GitHub
                  </a>{" "}
                  (a place where code lives in the cloud with a full version
                  history), and then GitHub automatically sending the live site
                  to{" "}
                  <a
                    href="https://www.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Netlify
                  </a>{" "}
                  (the service that actually serves the page to the internet).
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I wanted a safety net before anything went live. That&apos;s
                  why I chose this workflow. I wanted to stage changes, review
                  them, and only push when I was ready. That instinct turned out
                  to be right, though it added some complexity upfront.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Where It Got Expensive
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Here&apos;s what I didn&apos;t anticipate: I burned through
                  70% of my monthly token allocation in the first six hours.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Tokens are the unit of work Claude operates in — roughly,
                  every word you send and every word Claude responds with costs
                  tokens. I was sending long, conversational prompts. I was
                  going back and forth. I was re-explaining context Claude
                  already had. I wasn&apos;t being efficient, because I
                  didn&apos;t know what efficient looked like yet.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Now I&apos;m using{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude.ai
                  </a>{" "}
                  to help me draft my prompts before I send them to{" "}
                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude Code
                  </a>
                  . Yes, that means using one Claude to talk to another Claude.
                  It sounds absurd. It works. The idea is that a well-formed,
                  specific prompt uses fewer tokens and gets better results than
                  a rambling one. I&apos;m still early in figuring out what that
                  actually looks like in practice, but the early intuition feels
                  right.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  The Flow State Problem
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  There&apos;s a thing that happens when this starts working.
                  Hours disappear.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I sat down to work on this and looked up and it was dark
                  outside. I hadn&apos;t noticed. There&apos;s something about
                  having a capable collaborator available at every moment that
                  removes every natural stopping point. You fix one thing, you
                  see the next thing, you ask about that. It keeps moving.
                  That&apos;s exciting and also a little dangerous when
                  you&apos;re on a token budget.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  What I&apos;d Do Differently
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Start with a tighter scope on the prompt. My early prompts
                  were basically conversations — open-ended, exploratory.
                  That&apos;s fine for learning, but it&apos;s expensive.
                  I&apos;d have spent more time upfront writing a single, clear
                  prompt that described exactly what I wanted before sending
                  anything.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I&apos;d also have budgeted my tokens consciously from day
                  one, the way you&apos;d budget any other resource. I
                  didn&apos;t think of it as a finite thing until it was mostly
                  gone.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Where Things Stand
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The site is live. The workflow works. I&apos;m learning how to
                  prompt more intentionally.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I still type wrong commands into{" "}
                  <a
                    href="https://ghostty.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Ghostty
                  </a>{" "}
                  more often than I&apos;d like to admit. The terminal still
                  doesn&apos;t care.
                </p>
              </div>
            </div>

            {/* Closing callout */}
            <div className="mt-12 bg-cliq-white border border-cliq-navy/10 rounded-xl p-6">
              <p className="text-zinc-600 leading-relaxed italic text-sm">
                If you&apos;re thinking about trying this: pick one small thing
                and build it. Not a big thing, not an ambitious thing — one
                thing you could plausibly finish in a few hours. Focus on
                understanding the process, not impressing yourself with the
                result. The result will get better. The process is what
                you&apos;re actually learning.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer nav */}
      <section className="py-12 bg-cliq-white border-t border-cliq-navy/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/experiments/zero-to-prompt"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            &larr; All entries
          </Link>
          <Link
            href="/experiments/zero-to-prompt/the-color-that-wasnt-there"
            className="text-sm font-medium text-cliq-aqua hover:text-cliq-coral transition-colors"
          >
            Next: The Color That Wasn&apos;t There &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
