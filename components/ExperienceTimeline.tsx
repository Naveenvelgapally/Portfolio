"use client";

import { motion, useReducedMotion } from "framer-motion";

type TimelineItem = {
  period: string;
  category: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
};

const timeline: TimelineItem[] = [
  {
    period: "Present",
    category: "Education",
    title: "Electronics & Communication Engineering",
    organization: "University / Institution",
    description: "Building a strong foundation in digital systems, computer architecture, signal processing, and embedded engineering.",
    highlights: ["Digital design coursework", "Hardware-focused projects", "Technical research and collaboration"],
  },
  {
    period: "Research Assistant",
    category: "Research",
    title: "Research Assistant",
    organization: "Research Lab / University",
    description: "Contributed to structured engineering research through literature review, prototype development, experimental analysis, and clear technical documentation.",
    highlights: ["Designed and evaluated technical experiments", "Analyzed results and prepared reports", "Collaborated with faculty and peers"],
  },
  {
    period: "Research Internship",
    category: "Industry & Research",
    title: "Research Intern",
    organization: "Organization / Lab",
    description: "Applied engineering fundamentals to a practical research problem, with emphasis on methodical validation and measurable outcomes.",
    highlights: ["Hands-on hardware and software investigation", "Test-plan development", "Technical presentation of findings"],
  },
  {
    period: "Selected Work",
    category: "Projects",
    title: "ASIC, FPGA & Systems Projects",
    organization: "Independent & Academic Work",
    description: "Developed projects across RTL-to-GDSII implementation, FPGA robotics, hardware acceleration, networking, and autonomous systems.",
    highlights: ["RTL design and verification", "FPGA prototyping and bring-up", "Architecture, performance, and implementation analysis"],
  },
  {
    period: "Milestones",
    category: "Achievements",
    title: "Engineering Growth & Recognition",
    organization: "Academic & Professional",
    description: "A growing body of work demonstrating curiosity, technical ownership, and a commitment to dependable engineering practice.",
    highlights: ["Project milestones", "Technical certifications or awards", "Conference, workshop, or community participation"],
  },
];

export function ExperienceTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <ol className="relative mx-auto max-w-4xl before:absolute before:bottom-0 before:left-[0.7rem] before:top-0 before:w-px before:bg-gradient-to-b before:from-cyan-300/70 before:via-slate-600 before:to-transparent sm:before:left-1/2">
      {timeline.map((item, index) => {
        const isRight = index % 2 === 1;

        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: reduceMotion ? 0 : isRight ? 32 : -32, y: reduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : 0.08 }}
            className={`relative pb-12 pl-10 sm:w-1/2 sm:pb-16 sm:pl-0 ${isRight ? "sm:ml-auto sm:pl-12" : "sm:pr-12"}`}
          >
            <span className={`absolute left-0 top-1 flex size-6 -translate-x-[0.1rem] items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-300 shadow-[0_0_0_5px_rgba(34,211,238,0.12)] sm:top-1 sm:size-5 sm:border-2 sm:shadow-[0_0_0_6px_rgba(34,211,238,0.12)] ${isRight ? "sm:left-0" : "sm:left-auto sm:right-0 sm:translate-x-[0.6rem]"}`}>
              <span className="size-1.5 rounded-full bg-slate-950" />
            </span>
            <div className="rounded-xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/10 transition-colors hover:border-cyan-300/35">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{item.category}</p>
                <span className="text-sm text-slate-500">{item.period}</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-1 font-medium text-slate-300">{item.organization}</p>
              <p className="mt-4 leading-7 text-slate-400">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-300">
                {item.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />{highlight}</li>)}
              </ul>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
