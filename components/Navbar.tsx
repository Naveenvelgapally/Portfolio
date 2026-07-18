"use client";

import { useEffect, useState } from "react";

type NavigationItem = {
  label: string;
  href: `#${string}`;
};

const navigationItems: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

type NavbarProps = {
  brand?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};

export function Navbar({
  brand = "Portfolio",
  githubUrl = "https://github.com/",
  linkedinUrl = "https://www.linkedin.com/",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scrollToSection = (href: NavigationItem["href"]) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", href);
    setIsMenuOpen(false);
  };

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: NavigationItem["href"],
  ) => {
    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-slate-100 shadow-lg shadow-black/10 backdrop-blur">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={(event) => handleNavigation(event, "#home")}
          className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
        >
          {brand}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavigation(event, item.href)}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {item.label}
            </a>
          ))}
          <SocialLinks githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-200 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">Menu</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2">
            {isMenuOpen ? <path d="m6 6 12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 px-6 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavigation(event, item.href)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-cyan-300"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-4 border-t border-white/10 pt-4">
              <SocialLinks githubUrl={githubUrl} linkedinUrl={linkedinUrl} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function SocialLinks({ githubUrl, linkedinUrl }: Required<Pick<NavbarProps, "githubUrl" | "linkedinUrl">>) {
  return (
    <div className="flex items-center gap-3">
      <a className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href={githubUrl} target="_blank" rel="noreferrer">GitHub</a>
      <a className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  );
}
