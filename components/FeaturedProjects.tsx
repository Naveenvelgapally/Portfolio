import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    title: "RTL to GDSII",
    description: "An end-to-end digital implementation flow, taking a synthesizable RTL design through timing-aware physical design and sign-off preparation.",
    technologies: ["SystemVerilog", "Synthesis", "STA", "Physical Design"],
    href: "/projects/rtl-to-gdsii",
  },
  {
    title: "FPGA Robotics",
    description: "A real-time FPGA control platform that integrates sensor inputs, motor control, and deterministic decision-making for a mobile robot.",
    technologies: ["Verilog", "Xilinx Vivado", "AXI", "Embedded Systems"],
    href: "/projects/fpga-robotics",
  },
  {
    title: "GEMM Accelerator",
    description: "A pipelined matrix-multiplication accelerator designed to improve throughput and memory reuse for compute-intensive workloads.",
    technologies: ["RTL", "Systolic Array", "FPGA", "Performance Analysis"],
  },
  {
    title: "Packet Classification",
    description: "A hardware-oriented packet classification engine for fast, predictable matching across network rule sets.",
    technologies: ["SystemVerilog", "CAM", "Networking", "Verification"],
  },
  {
    title: "RF Internship",
    description: "Practical RF engineering work spanning measurement, characterization, and analysis to support robust wireless-system development.",
    technologies: ["RF Testing", "Python", "Signal Analysis", "Lab Instrumentation"],
  },
  {
    title: "Autonomous Vehicle",
    description: "An autonomous vehicle prototype combining perception, control, and embedded hardware for safe real-world navigation.",
    technologies: ["Computer Vision", "ROS", "Embedded C++", "Sensors"],
  },
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-slate-900 py-24 text-slate-100 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Featured projects</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Hardware work, from concept to implementation.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">A selection of digital design, acceleration, and systems projects.</p>
          </div>
          <a href="#contact" className="w-fit text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Discuss a project <span aria-hidden="true">→</span></a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.title} {...project} />)}
        </div>
      </div>
    </section>
  );
}
