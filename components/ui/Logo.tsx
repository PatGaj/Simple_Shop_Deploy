import clsx from "clsx";

type LogoProps = {
  size: "primary" | "secondary";
};

export default function Logo({ size }: LogoProps) {
  const sizeLogo = {
    primary: "heading3",
    secondary: "heading5",
  };
  return (
    <span className={clsx(sizeLogo[size], "font-semibold")}>
      <span className="text-[var(--color-primary)]">
        Pat<span className="text-[var(--color-secondary)]">Gaj</span>
      </span>
      Hub
    </span>
  );
}
