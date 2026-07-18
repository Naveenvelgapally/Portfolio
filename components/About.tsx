type AboutProps = {
  education?: string;
};

const highlights = [
  {
    label: "Education",
    value: "B.Tech. in Electronics & Communication Engineering",
    detail: "A foundation in digital design, computer architecture, and embedded systems.",
  },
  {
    label: "Career objective",
    value: "Build dependable hardware that solves meaningful problems.",
    detail: "I am focused on roles where disciplined engineering and curiosity shape high-impact silicon.",
  },
  {
    label: "Current interests",
    value: "Digital IC design, verification, and FPGA acceleration.",
    detail: "Exploring efficient RTL architectures, robust verification flows, and practical prototyping.",
  },
];

export function About({ education }: AboutProps) {
  const aboutHighlights = education
    ? highlights.map((highlight) => highlight.label === "Education" ? { ...highlight, value: education } : highlight)
    : highlights;

  return (
    <section id="about" className="scroll-mt-20 bg-slate-900 py-24 text-slate-100 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">About me</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Engineering with clarity, rigor, and intent.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-300">
            I am an ASIC and FPGA engineer interested in turning complex digital requirements into clear, verifiable hardware. My approach combines strong RTL fundamentals with a practical focus on timing, quality, and reliable system integration.
          </p>
          <p className="mt-5 leading-7 text-slate-400">
            I enjoy working across the digital design lifecycle—from architectural exploration and implementation through simulation, verification, and FPGA bring-up. I value thoughtful collaboration, continuous learning, and engineering work that holds up outside the lab.
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((highlight) => (
              <div key={highlight.label} className="rounded-xl border border-white/10 bg-slate-950/50 p-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">{highlight.label}</dt>
                <dd className="mt-3 font-medium leading-6 text-slate-100">{highlight.value}</dd>
                <p className="mt-3 text-sm leading-6 text-slate-400">{highlight.detail}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
