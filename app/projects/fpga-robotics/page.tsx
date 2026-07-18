import type { Metadata } from "next";
import Link from "next/link";
import { MetricCard } from "@/components/project/MetricCard";
import { PlaceholderImage } from "@/components/project/PlaceholderImage";
import { ProjectSection } from "@/components/project/ProjectSection";

export const metadata: Metadata = {
  title: "FPGA Robotics | Portfolio",
  description: "A real-time FPGA robotics platform for sensor processing and motor control.",
};

const resources = [
  { label: "LUTs", value: "Placeholder", detail: "Add utilized / available LUTs." },
  { label: "Flip-flops", value: "Placeholder", detail: "Add utilized / available registers." },
  { label: "BRAM", value: "Placeholder", detail: "Add utilized / available block RAM." },
  { label: "DSP slices", value: "Placeholder", detail: "Add utilized / available DSP blocks." },
];

export default function FpgaRoboticsProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-slate-900 py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(99,102,241,0.18),transparent_30%)]" />
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">← Back to projects</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Real-time control platform</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">FPGA Robotics</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">A deterministic FPGA-based control platform that combines sensor acquisition, hardware control logic, and embedded software for responsive robotic motion.</p>
          <div className="mt-10 flex flex-wrap gap-2">
            {["Verilog", "Xilinx Vivado", "AXI", "Embedded Systems"].map((item) => <span key={item} className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-sm text-cyan-100">{item}</span>)}
          </div>
        </div>
      </section>

      <ProjectSection id="overview" eyebrow="01 / Overview" title="Control with deterministic hardware">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>This project explores how FPGA fabric can provide low-latency control for a robotic system. The design separates timing-critical sensor and actuator functions from higher-level software decisions.</p>
            <p className="text-slate-400">Use this page to document the board, sensors, motor driver, real-time targets, and measured behavior of the finished prototype.</p>
          </div>
          <PlaceholderImage label="Completed robotics platform" />
        </div>
      </ProjectSection>

      <ProjectSection id="architecture" eyebrow="02 / Architecture" title="A layered hardware and software system" className="border-y border-white/10 bg-slate-900/40">
        <div className="grid gap-8 lg:grid-cols-2">
          <PlaceholderImage label="System architecture diagram" />
          <div className="rounded-xl border border-white/10 bg-slate-950 p-7">
            <h3 className="text-xl font-semibold text-white">Data and control path</h3>
            <ul className="mt-5 space-y-4 leading-7 text-slate-400">
              <li>• Sensor interfaces capture external state into predictable hardware pipelines.</li>
              <li>• FPGA control logic generates PWM, safety, and timing-critical signals.</li>
              <li>• An AXI-connected processor handles configuration and high-level behavior.</li>
              <li>• Debug interfaces expose live state during bring-up and test.</li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection id="vivado-block-design" eyebrow="03 / Vivado Block Design" title="An integrated programmable system">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <PlaceholderImage label="Vivado block design" description="Replace with exported block-design screenshot" />
          <div>
            <p className="text-lg leading-8 text-slate-300">The block design connects processing-system interfaces, custom RTL peripherals, memory, and debug infrastructure through a clear AXI-based architecture.</p>
            <ul className="mt-6 space-y-3 text-slate-400">
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />Document IP blocks, clocks, resets, and bus interconnect here.</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />Add interface frequencies and address-map decisions.</li>
              <li className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />Capture ILA probes and validation checkpoints for repeatable debug.</li>
            </ul>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection id="hardware" eyebrow="04 / Hardware" title="Custom logic for real-time behavior" className="border-y border-white/10 bg-slate-900/40">
        <div className="grid gap-5 md:grid-cols-3">
          {["Sensor acquisition", "Motor control", "Safety monitoring"].map((title) => <div key={title} className="rounded-xl border border-white/10 bg-slate-950 p-6"><h3 className="font-semibold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">Describe the relevant RTL module, interface protocol, and how it was verified in simulation and on board.</p></div>)}
        </div>
      </ProjectSection>

      <ProjectSection id="software" eyebrow="05 / Software" title="Software for configuration and behavior">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-slate-900 p-7"><h3 className="text-xl font-semibold text-white">Embedded control layer</h3><p className="mt-4 leading-7 text-slate-400">Use this area to document initialization, register access, sensor calibration, motion state machines, and serial or network interfaces.</p></div>
          <PlaceholderImage label="Software control flow" description="Replace with state diagram or console capture" />
        </div>
      </ProjectSection>

      <ProjectSection id="resource-utilization" eyebrow="06 / Resource Utilization" title="Implementation footprint" className="border-y border-white/10 bg-slate-900/40">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resources.map((resource) => <MetricCard key={resource.label} {...resource} />)}</div>
      </ProjectSection>

      <ProjectSection id="timing" eyebrow="07 / Timing" title="Closing timing for control loops">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div><p className="text-lg leading-8 text-slate-300">Timing analysis verifies that the FPGA can execute each synchronous control path at the intended clock frequency. Record final constraints, worst slack, and any pipeline changes made to close timing.</p><div className="mt-6 rounded-xl border border-white/10 bg-slate-900 p-5 text-slate-400"><span className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Timing status</span><p className="mt-3 text-2xl font-semibold text-white">Placeholder</p><p className="mt-2 text-sm">Add setup and hold summary from the implementation report.</p></div></div>
          <PlaceholderImage label="Timing summary report" />
        </div>
      </ProjectSection>

      <ProjectSection id="demo" eyebrow="08 / Demo Video" title="See the system in motion" className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-4xl"><PlaceholderImage label="Demo video placeholder" description="Embed a YouTube, Vimeo, or self-hosted project demo here" className="aspect-video" /></div>
      </ProjectSection>

      <ProjectSection id="gallery" eyebrow="09 / Gallery" title="Build and bring-up checkpoints">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <PlaceholderImage label="FPGA board" /><PlaceholderImage label="Robot chassis" /><PlaceholderImage label="Sensor wiring" /><PlaceholderImage label="ILA debug" /><PlaceholderImage label="Vivado report" /><PlaceholderImage label="Field test" />
        </div>
      </ProjectSection>

      <ProjectSection id="lessons-learned" eyebrow="10 / Lessons Learned" title="Hardware and software work best together" className="border-t border-white/10 bg-slate-900/40">
        <div className="max-w-3xl space-y-4 text-lg leading-8 text-slate-300"><p>Separating real-time control from high-level software makes timing behavior easier to reason about and test. Clear interfaces between the two layers reduce integration friction.</p><p className="text-slate-400">Instrumenting the design early—with simulation, assertions, and on-chip debug—turns board bring-up into a repeatable engineering process rather than a guessing exercise.</p></div>
      </ProjectSection>
    </main>
  );
}
