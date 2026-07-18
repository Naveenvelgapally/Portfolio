import type { Metadata } from "next";
import Link from "next/link";
import { MetricCard } from "@/components/project/MetricCard";
import { PlaceholderImage } from "@/components/project/PlaceholderImage";
import { ProjectSection } from "@/components/project/ProjectSection";

export const metadata: Metadata = {
  title: "RTL to GDSII | Portfolio",
  description: "A digital implementation project from RTL through GDSII-ready layout.",
};

const flowStages = [
  {
    id: "synthesis",
    title: "Synthesis",
    summary: "Convert the RTL into a gate-level netlist while balancing area, timing, and design constraints.",
    details: ["Validated RTL and constraints before compilation.", "Reviewed area, timing, and cell-usage reports.", "Iterated constraints to establish a clean implementation baseline."],
  },
  {
    id: "floorplanning",
    title: "Floorplanning",
    summary: "Define the physical canvas, core utilization, macro placement, and early power-delivery strategy.",
    details: ["Set die/core boundaries and target utilization.", "Reserved routing resources around block boundaries.", "Created an initial power plan for reliable distribution."],
  },
  {
    id: "placement",
    title: "Placement",
    summary: "Place standard cells to reduce wirelength while addressing early congestion and timing pressure.",
    details: ["Optimized placement for critical-path proximity.", "Checked density and congestion heatmaps.", "Applied physical optimization to improve slack."],
  },
  {
    id: "cts",
    title: "Clock Tree Synthesis",
    summary: "Build a balanced clock network that controls insertion delay, skew, and transition.",
    details: ["Defined clock-tree targets and routing rules.", "Reviewed skew and latency across endpoints.", "Repaired clock-path violations before sign-off."],
  },
  {
    id: "routing",
    title: "Routing",
    summary: "Connect the placed design while preserving signal integrity, design rules, and routability.",
    details: ["Performed global and detailed routing.", "Resolved DRCs and antenna-sensitive nets.", "Verified connectivity and post-route congestion."],
  },
  {
    id: "timing",
    title: "Timing",
    summary: "Close setup and hold across defined modes and corners using post-route extraction data.",
    details: ["Analyzed worst setup and hold paths.", "Applied ECOs to address negative slack.", "Reviewed timing exceptions and constraint coverage."],
  },
  {
    id: "power",
    title: "Power",
    summary: "Estimate and refine dynamic and leakage power while checking the health of the power grid.",
    details: ["Reviewed switching activity assumptions.", "Analyzed IR-drop-sensitive regions.", "Balanced power, performance, and area tradeoffs."],
  },
];

const metrics = [
  { label: "Technology", value: "Placeholder", detail: "Add process node and standard-cell library." },
  { label: "Core utilization", value: "Placeholder", detail: "Add final placed utilization." },
  { label: "Worst slack", value: "Placeholder", detail: "Add final setup / hold slack." },
  { label: "Power", value: "Placeholder", detail: "Add post-layout power estimate." },
];

export default function RtlToGdsiiProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.18),transparent_30%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">← Back to projects</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Digital implementation</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">RTL to GDSII</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A structured digital-design journey from synthesizable RTL to a GDSII-ready physical layout, with timing, power, and physical verification considered throughout.</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {["SystemVerilog", "Synthesis", "STA", "Physical Design"].map((item) => <span key={item} className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-sm text-cyan-100">{item}</span>)}
          </div>
        </div>
      </section>

      <ProjectSection id="overview" eyebrow="01 / Overview" title="From intent to layout">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>This project documents a complete ASIC implementation workflow. The goal was to translate a verified RTL design into a physically realizable layout while making clear, measurable decisions at every stage.</p>
            <p className="text-slate-400">The work emphasizes repeatable flow setup, constraint quality, early physical awareness, and sign-off-oriented analysis. Replace the placeholders on this page with your design-specific constraints, tool reports, and final results.</p>
          </div>
          <PlaceholderImage label="Top-level implementation view" />
        </div>
      </ProjectSection>

      <ProjectSection id="architecture" eyebrow="02 / Architecture" title="A design built for implementation">
        <div className="grid gap-8 lg:grid-cols-2">
          <PlaceholderImage label="Architecture block diagram" />
          <div className="rounded-xl border border-white/10 bg-slate-900 p-7">
            <h3 className="text-xl font-semibold text-white">Implementation considerations</h3>
            <ul className="mt-5 space-y-4 leading-7 text-slate-400">
              <li>• Clearly defined clock and reset boundaries for robust timing analysis.</li>
              <li>• Modular hierarchy to simplify synthesis, debugging, and physical planning.</li>
              <li>• Timing-critical datapaths identified early for targeted optimization.</li>
              <li>• Scan- and power-aware decisions reserved for design-specific requirements.</li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection id="design-flow" eyebrow="03 / Design Flow" title="A disciplined physical-design flow" className="border-y border-white/10 bg-slate-900/40">
        <p className="max-w-3xl text-lg leading-8 text-slate-400">Each phase produces checkpoints that inform the next. The detailed stages below provide a reusable structure for documenting your own reports, screenshots, and design decisions.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {flowStages.map((stage, index) => <a key={stage.id} href={`#${stage.id}`} className="rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-100"><span className="mr-2 text-cyan-300">0{index + 1}</span>{stage.title}</a>)}
        </div>
      </ProjectSection>

      {flowStages.map((stage, index) => (
        <ProjectSection key={stage.id} id={stage.id} eyebrow={`0${index + 4} / Flow stage`} title={stage.title} className={index % 2 === 0 ? "bg-slate-950" : "bg-slate-900/40"}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <PlaceholderImage label={`${stage.title} report or layout`} />
            <div>
              <p className="text-lg leading-8 text-slate-300">{stage.summary}</p>
              <ul className="mt-6 space-y-3 text-slate-400">
                {stage.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />{detail}</li>)}
              </ul>
            </div>
          </div>
        </ProjectSection>
      ))}

      <ProjectSection id="results" eyebrow="11 / Results Dashboard" title="Implementation at a glance" className="border-y border-white/10 bg-slate-900/40">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
        </div>
      </ProjectSection>

      <ProjectSection id="gallery" eyebrow="12 / Gallery" title="Key visual checkpoints">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <PlaceholderImage label="Floorplan" />
          <PlaceholderImage label="Post-placement density" />
          <PlaceholderImage label="Clock tree" />
          <PlaceholderImage label="Routing view" />
          <PlaceholderImage label="Timing report" />
          <PlaceholderImage label="Final layout" />
        </div>
      </ProjectSection>

      <ProjectSection id="challenges" eyebrow="13 / Challenges" title="Where the iteration mattered" className="border-y border-white/10 bg-slate-900/40">
        <div className="grid gap-5 md:grid-cols-3">
          {["Constraint completeness", "Congestion management", "Timing closure"].map((challenge) => <div key={challenge} className="rounded-xl border border-white/10 bg-slate-950 p-6"><h3 className="font-semibold text-white">{challenge}</h3><p className="mt-3 leading-7 text-slate-400">Document the issue, the options considered, and the evidence used to select a resolution.</p></div>)}
        </div>
      </ProjectSection>

      <ProjectSection id="lessons-learned" eyebrow="14 / Lessons Learned" title="What this flow reinforced">
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-300">
          <p>Good implementation starts well before placement: precise constraints, implementation-aware RTL, and early report review prevent costly late-stage surprises.</p>
          <p className="text-slate-400">The strongest results come from treating timing, power, area, and routability as connected tradeoffs—not isolated objectives. This page is designed to grow with the project as final metrics and artifacts become available.</p>
        </div>
      </ProjectSection>
    </main>
  );
}
