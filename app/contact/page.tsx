import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PlaceholderImage } from "@/components/project/PlaceholderImage";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch for ASIC, FPGA, and hardware engineering opportunities.",
};

const contactMethods = [
  { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com", description: "For opportunities, collaborations, and technical conversations." },
  { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "https://www.linkedin.com/", description: "Connect and follow my engineering journey." },
  { label: "GitHub", value: "github.com/your-username", href: "https://github.com/", description: "Browse project code and experiments." },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.16),transparent_32%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/" className="inline-flex text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">← Back to home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">Let&apos;s build something dependable.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Whether you have an ASIC, FPGA, or systems challenge in mind, I&apos;d be glad to connect.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Get in touch</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Start a conversation.</h2>
            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => <a key={method.label} href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel={method.href.startsWith("http") ? "noreferrer" : undefined} className="block rounded-xl border border-white/10 bg-slate-900/70 p-5 transition-colors hover:border-cyan-300/40 hover:bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{method.label}</p><p className="mt-2 font-medium text-white">{method.value}</p><p className="mt-2 text-sm leading-6 text-slate-400">{method.description}</p></a>)}
            </div>
            <a href="/resume.pdf" download className="mt-6 inline-flex items-center gap-2 rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"><span aria-hidden="true">↓</span> Download résumé</a>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Location</p><h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">Based wherever engineering happens.</h2></div><p className="max-w-md text-sm leading-6 text-slate-400">Replace this placeholder with a Google Maps embed or your preferred location details.</p></div>
          <PlaceholderImage label="Google Maps placeholder" description="Add your location or an embedded map" className="mt-8 aspect-[21/8]" />
        </div>
      </section>
    </main>
  );
}
