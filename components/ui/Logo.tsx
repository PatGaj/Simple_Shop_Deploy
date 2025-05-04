import clsx from "clsx";

function Logo({ size }: { size: "primary" | "secondary" }) {
  const sizeLogo = {
    primary: "heading4",
    secondary: "heading3",
  };
  return (
    <span className={clsx(sizeLogo[size], "font-semibold")}>
      <span className="text-[var(--color-primary)]">Nexus</span>Hub
    </span>
  );
}
export default Logo;
