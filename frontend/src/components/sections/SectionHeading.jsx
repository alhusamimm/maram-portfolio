export default function SectionHeading({ kicker, title, subtitle, align = "left" }) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""} max-w-3xl`}>
      {kicker && <div className="section-title-mono mb-3">// {kicker}</div>}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E5E7EB]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
