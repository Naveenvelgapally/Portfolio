type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
  imageLabel?: string;
};

export function ProjectCard({
  title,
  description,
  technologies,
  href = "#contact",
  imageLabel = "Project preview",
}: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/45 hover:shadow-2xl hover:shadow-cyan-950/30">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[linear-gradient(135deg,rgba(8,47,73,0.95),rgba(15,23,42,1)_55%,rgba(49,46,129,0.75))]">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]" />
        <div className="absolute inset-x-6 top-6 h-px bg-cyan-200/60 transition-transform duration-500 group-hover:translate-x-8" />
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
          <span className="rounded-full border border-cyan-200/25 bg-slate-950/50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-cyan-100 backdrop-blur">{imageLabel}</span>
          <span aria-hidden="true" className="text-3xl font-light text-cyan-200/70 transition-transform duration-300 group-hover:translate-x-1">↗</span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="mt-3 flex-1 leading-7 text-slate-400">{description}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${title} technologies`}>
          {technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-300">{technology}</li>
          ))}
        </ul>
        <a href={href} className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          View project <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
