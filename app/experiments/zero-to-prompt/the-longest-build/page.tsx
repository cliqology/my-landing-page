import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Longest Build — Zero to Prompt",
  description:
    "About seven hours of building, debugging, dead ends, and eventually — a fully functional AI-powered product live at a real URL.",
};

const linkClass =
  "text-cliq-aqua hover:text-cliq-navy underline underline-offset-2 transition-colors";

export default function TheLongestBuildPage() {
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
              03
            </span>
            <span className="text-sm text-zinc-400">March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            The Longest Build
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article>
            {/* Intro */}
            <p className="text-lg text-zinc-600 leading-relaxed mb-4 border-l-2 border-cliq-aqua/30 pl-5 italic">
              The thing that kept me going yesterday was a simple question: what
              if I just kept going?
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-2 border-cliq-aqua/30 pl-5 italic">
              Not &ldquo;what if I learn to code&rdquo; or &ldquo;what if I hire
              someone.&rdquo; Just: what if I describe exactly what I want to
              build, trust the process, and don&apos;t stop until something is
              live on the internet?
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed mb-8 border-l-2 border-cliq-aqua/30 pl-5 italic">
              That&apos;s what Day 3 was. About seven hours of building,
              debugging, dead ends, and eventually &mdash; a fully functional
              AI-powered product live at a real URL.
            </p>

            <hr className="border-zinc-100 mb-8" />

            <div className="space-y-8">
              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The idea was called Revenue Diagnostics. The pitch: SaaS
                  operators fill out a structured intake form about their funnel
                  metrics, and{" "}
                  <a
                    href="https://claude.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude
                  </a>{" "}
                  analyzes their inputs and returns a diagnostic &mdash; revenue
                  leaks, funnel health scores, a 30/60/90 day action roadmap. No
                  consultant. No spreadsheet. Just a clean AI-driven output in
                  minutes.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I wanted it to live under the tools section of{" "}
                  <Link href="/" className={linkClass}>
                    Cliqology
                  </Link>
                  , my main site. I wanted real Google sign-in. Real user data
                  saved to a real database. Real AI analysis from a real API.
                  Not a mockup. Not a demo. A thing that actually works.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The stack I landed on:{" "}
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Next.js
                  </a>
                  ,{" "}
                  <a
                    href="https://supabase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Supabase
                  </a>{" "}
                  for the database,{" "}
                  <a
                    href="https://next-auth.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    NextAuth
                  </a>{" "}
                  for Google OAuth, and the{" "}
                  <a
                    href="https://www.anthropic.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Anthropic API
                  </a>{" "}
                  for the AI analysis. All of it built and deployed to{" "}
                  <a
                    href="https://netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Netlify
                  </a>{" "}
                  &mdash; where my main site already lives.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I did not write a single line of code myself.{" "}
                  <a
                    href="https://claude.ai/code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Claude Code
                  </a>{" "}
                  wrote all of it.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The first two hours were pure setup. Before a line of code got
                  written, I had to create accounts, generate API keys, configure
                  OAuth credentials, and set up a database.{" "}
                  <a
                    href="https://console.cloud.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Google Cloud Console
                  </a>{" "}
                  alone took longer than expected &mdash; I had old projects
                  sitting around, the interface had changed since any tutorial
                  I&apos;d seen, and at one point I created an OAuth client
                  inside my Google Workspace organization rather than a
                  standalone project and had to start over.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The prompt I used to kick off the actual build was long and
                  specific:
                </p>
                <blockquote className="border-l-4 border-cliq-aqua/40 pl-5 py-1 mb-4">
                  <p className="text-zinc-500 leading-relaxed italic text-sm">
                    Build a full-stack web application called &ldquo;Revenue
                    Diagnostics&rdquo; for Cliqology.com. This tool helps SaaS
                    operators identify revenue leaks and prioritize growth
                    opportunities across their funnel using a structured
                    AI-driven diagnostic framework.
                  </p>
                </blockquote>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I included the full brand color palette, the exact database
                  schema I wanted, the specific Claude model to use, every field
                  in every form step, and the exact JSON structure I wanted the
                  AI to return. The more specific I was upfront, the less I had
                  to correct later.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  Claude Code generated the full project in one pass: Next.js
                  scaffolding, Tailwind config, all the dependencies, a brand
                  guide file it would reference throughout, and the basic file
                  structure. It even baked the Cliqology brand colors directly
                  into the app&apos;s globals on the first run, pulling from the
                  CLAUDE.md file I&apos;d had it create at the start. That part
                  felt almost unreasonably good.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  Then the Real Session Began
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The first error hit as soon as I tried to run the app: Next.js
                  14 doesn&apos;t support{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    .ts
                  </code>{" "}
                  config files. I needed{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    next.config.mjs
                  </code>
                  . Small thing, but I didn&apos;t know that. I just described
                  what I was seeing to Claude Code and it fixed it.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  The second issue was subtler. Google sign-in was working
                  &mdash; the OAuth flow completed, redirected back to the app
                  &mdash; but nothing was being saved to Supabase. The user
                  table stayed empty. The error in the logs:{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    PGRST204 Could not find the &apos;updated_at&apos; column of
                    &apos;users&apos; in the schema cache
                  </code>
                  . Claude Code had added a column to its upsert that I&apos;d
                  never created in the database. Easy fix, but it took reading
                  the server logs to find it.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Then the diagnostic form was saving correctly but the AI
                  analysis wouldn&apos;t run. The error this time:{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    invalid input syntax for type uuid
                  </code>
                  . The app was sending Google&apos;s numeric user ID &mdash; a
                  long string of numbers &mdash; to a database column that
                  expected a proper UUID. Claude Code had written a fallback that
                  quietly used the wrong ID when the right one wasn&apos;t
                  present. The fix required signing out completely, signing back
                  in to refresh the session token, and then it worked.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The third failure was almost funny. I added Anthropic API
                  credits, tried to run a diagnostic, and got back:{" "}
                  <em>
                    &ldquo;Your credit balance is too low to access the
                    Anthropic API.&rdquo;
                  </em>{" "}
                  I had $5. Apparently that&apos;s below the activation
                  threshold. Added another $5, still failed. Turned out the API
                  key I was using was from a different Anthropic account than the
                  one where I&apos;d added the credits. Swapped the key,
                  restarted the server, and the analysis ran.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Watching the results page load for the first time was
                  genuinely strange.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I had put in fake test data &mdash; placeholder numbers, a
                  made-up company, nonsense answers. And the AI came back with a
                  real diagnostic. Funnel health scores rendered as color-coded
                  bars. Three specific revenue leaks with priority badges. A
                  30/60/90 day roadmap laid out as a clean timeline. The analysis
                  was actually good. It identified real patterns from the inputs.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  I sat with that for a minute.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  One More Before the Finish Line
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Deployment surfaced one more issue. Netlify&apos;s secrets
                  scanner blocked the first two deploy attempts &mdash; it found
                  environment variables embedded in the build output. Claude Code
                  had mixed the public Supabase client and the secret service
                  role client in the same file, and the bundler was pulling
                  secrets into client-side code. The fix was clean: separate the
                  clients into different files, restrict the secret client to
                  server-only modules, and add a{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    netlify.toml
                  </code>{" "}
                  configuration to exclude two safe public URLs from the scan.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  After that, it deployed in 54 seconds.
                </p>
              </div>

              <hr className="border-zinc-100" />

              <div>
                <h2 className="text-lg font-semibold text-zinc-900 mb-3">
                  What I&apos;d Do Differently
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I&apos;d set up the{" "}
                  <code className="text-sm font-mono bg-zinc-100 text-cliq-navy px-1.5 py-0.5 rounded">
                    .env.local
                  </code>{" "}
                  file before writing a single prompt to Claude Code. Half the
                  debugging session was caused by mismatched API keys, wrong
                  Supabase URLs, or a service role client that wasn&apos;t
                  initializing correctly. If I&apos;d gotten all eight
                  environment variables confirmed and correct before starting, at
                  least two hours of debugging disappears.
                </p>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  I&apos;d also test the sign-in and database write in isolation
                  before building the full form. I assumed the auth was working
                  because the redirect completed. It wasn&apos;t. A simple check
                  &mdash; sign in, open Supabase, see if a row appeared &mdash;
                  would have caught the upsert bug on the first pass.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  And I&apos;d be more deliberate about what I ask Claude Code to
                  log. The server logs saved me every time, but only because I
                  thought to look. The prompt{" "}
                  <em>
                    please add detailed error logging to the signIn callback and
                    the diagnostic API route
                  </em>{" "}
                  would have been worth adding at the very start.
                </p>
              </div>

              {/* Callout */}
              <div className="bg-cliq-navy/5 border-l-4 border-cliq-coral rounded-r-xl p-5">
                <p className="text-zinc-700 leading-relaxed text-sm">
                  The thing I keep coming back to is how long seven hours felt
                  while it was happening, and how compressed the actual result
                  is. A multi-step form. Google OAuth. A real database. AI
                  analysis. A live URL. All of it built in a day by someone who
                  has never written a Next.js route.
                </p>
              </div>

              <div>
                <p className="text-zinc-600 leading-relaxed mb-4">
                  Most of that time wasn&apos;t building. It was debugging. And
                  debugging, it turns out, is mostly just reading error messages
                  carefully and describing them accurately. That&apos;s a skill.
                  It just isn&apos;t the skill I expected to be developing.
                </p>
                <p className="text-zinc-600 leading-relaxed">
                  The tool is live. I&apos;m still not entirely sure I understand
                  how all of it works.
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
            href="/experiments/zero-to-prompt/the-color-that-wasnt-there"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            &larr; Previous: The Color That Wasn&apos;t There
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
