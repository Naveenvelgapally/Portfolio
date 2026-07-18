"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroProps = {
  name?: string;
  cvUrl?: string;
};

const capabilities = ["RTL Design", "FPGA Prototyping", "ASIC Verification"];

export function Hero({ name = "Naveen Velgapally", cvUrl = "/resume.pdf" }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const transition = reduceMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" as const };

  return (
    <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_30%),radial-gradient(circle_at_80%_65%,rgba(99,102,241,0.2),transparent_32%),linear-gradient(135deg,#020617_0%,#0f172a_50%,#020617_100%)]" />
      <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:3rem_3rem] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="absolute -right-28 top-20 -z-10 size-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100svh-73px)] max-w-6xl items-center px-6 py-24 lg:px-8">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200"
          >
            <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_3px_rgba(103,232,249,0.55)]" />
            {name} · ASIC / FPGA Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.1 }}
            className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Designing reliable silicon for what comes next.
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05, delayChildren: reduceMotion ? 0 : 0.25 } },
            }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            aria-label="Specializing in high-performance digital hardware"
          >
            {"From RTL to tape-out, I build high-performance digital hardware that turns ambitious ideas into dependable systems."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 8 }, visible: { opacity: 1, y: 0 } }}
                  className="mr-[0.28em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: reduceMotion ? 0 : 0.8 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              View selected work
              <span aria-hidden="true" className="ml-2">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300/60 hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              Let&apos;s connect
            </a>
            <a href={cvUrl} download className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-slate-300 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
              <DownloadIcon /> Download CV
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : 1 }}
            className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-medium text-slate-400"
          >
            {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
