type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`mx-auto mb-10 max-w-3xl ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
