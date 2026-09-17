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
      <span className="inline-flex rounded-full border border-[#d6aa45]/25 bg-[#d6aa45]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0d991]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-[#fff7df] sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-sm font-medium leading-6 text-[#cfc5aa] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
