type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  { title: "Languages", skills: ["Verilog", "SystemVerilog", "VHDL"] },
  { title: "RTL", skills: ["Microarchitecture", "Synthesis", "CDC / RDC", "Static Timing Analysis"] },
  { title: "ASIC Tools", skills: ["Cadence Xcelium", "Synopsys Design Compiler", "PrimeTime", "QuestaSim"] },
  { title: "FPGA", skills: ["Xilinx Vivado", "Intel Quartus", "Vitis", "On-chip Debug"] },
  { title: "Programming", skills: ["Python", "C / C++", "Tcl", "Bash"] },
  { title: "Operating Systems", skills: ["Linux", "Windows", "WSL"] },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-slate-950 py-24 text-slate-100 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Technical toolkit</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Skills across the hardware stack.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-400">A focused toolkit for designing, validating, and bringing digital systems to life.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="group rounded-xl border border-white/10 bg-slate-900/60 p-6 transition-colors hover:border-cyan-300/40 hover:bg-slate-900">
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300 transition-colors group-hover:border-cyan-300/20 group-hover:text-cyan-100">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
