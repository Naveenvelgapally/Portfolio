import type { ReactNode } from "react";

type ProjectSectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function ProjectSection({ id, eyebrow, title, children, className = "" }: ProjectSectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{eyebrow}</p>}
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
