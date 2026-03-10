import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Scott Hoffman for consulting, collaboration, or conversation.",
};

const goodFor = [
  "Strategic consulting engagements",
  "AI tool development & advisory",
  "GTM strategy & revenue ops",
  "Speaking & content collaboration",
  "General conversation",
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-24 bg-cliq-navy border-b border-cliq-aqua/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-cliq-aqua text-sm font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl leading-relaxed">
            Whether you&apos;re looking for strategic consulting, want to discuss AI
            implementation, or just want to connect — reach out and let&apos;s start
            a conversation.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
            {/* Sidebar */}
            <div className="md:col-span-2">
              <h2 className="text-sm font-semibold text-zinc-900 uppercase tracking-widest mb-5">
                Good for
              </h2>
              <ul className="space-y-3">
                {goodFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-500">
                    <span className="text-cliq-coral mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
