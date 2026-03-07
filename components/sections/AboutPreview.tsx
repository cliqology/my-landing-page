import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-200 mx-auto mb-6">
            <Image
              src="/scott-hoffman.jpg"
              alt="Scott Hoffman"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-4">
            About
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mb-5">
            Operator experience
            <br />
            meets builder mentality
          </h2>

          <p className="text-zinc-500 text-lg leading-relaxed mb-4">
            I&apos;m Scott Hoffman — an operator with 10+ years across SaaS, growth,
            and product. I&apos;ve led GTM strategy, run revenue teams, and worked
            with founders to scale businesses from early traction to Series B
            and beyond.
          </p>
          <p className="text-zinc-500 leading-relaxed mb-8">
            Now I&apos;m applying that experience to build practical AI tools and
            operator systems. Cliqology is where I ship, share, and connect.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center px-5 py-2.5 bg-zinc-900 hover:bg-zinc-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Read the full story &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
