import type { Metadata } from "next";
import Link from "next/link";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience | Portfolio",
  description: "Education, research, projects, and engineering achievements.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.16),transparent_32%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/" className="inline-flex text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">← Back to home</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Experience</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">A timeline of learning, research, and building.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A focused record of the experiences shaping my approach to ASIC, FPGA, and systems engineering.</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8"><ExperienceTimeline /></div>
      </section>
    </main>
  );
}
