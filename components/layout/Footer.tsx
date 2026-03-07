import Link from "next/link";

const footerLinks = [
  { href: "/tools", label: "Tools" },
  { href: "/experiments", label: "Experiments" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link href="/" className="text-lg font-bold text-zinc-900">
              <span className="text-indigo-600">C</span>liqology
            </Link>
            <p className="mt-1 text-sm text-zinc-400">
              Operator. Builder. AI Strategist.
            </p>
          </div>

          <nav className="flex items-center gap-6 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Cliqology
          </p>
        </div>
      </div>
    </footer>
  );
}
