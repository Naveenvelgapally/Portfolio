type FooterProps = {
  name?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export function Footer({
  name = "Naveen Velgapally",
  githubUrl = "https://github.com/",
  linkedinUrl = "https://linkedin.com/in/naveen-velgapally-5177b7210/",
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row lg:px-8">
        <p>© {year} {name}. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a className="transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
