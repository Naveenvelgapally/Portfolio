type PlaceholderImageProps = {
  label: string;
  description?: string;
  className?: string;
};

export function PlaceholderImage({ label, description = "Replace with project image", className = "" }: PlaceholderImageProps) {
  return (
    <div className={`relative flex aspect-video overflow-hidden rounded-xl border border-cyan-200/15 bg-[linear-gradient(135deg,rgba(8,47,73,0.8),rgba(15,23,42,1)_55%,rgba(49,46,129,0.65))] ${className}`}>
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:1.5rem_1.5rem]" />
      <div className="relative m-auto text-center">
        <p className="text-sm font-semibold text-cyan-100">{label}</p>
        <p className="mt-1 text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}
