import clsx from "clsx";
import { CheckIcon } from "../icons";

function Checkbox({
  checked,
  size = "l",
  withText,
  text,
  onChange,
}: {
  checked?: boolean;
  size?: "l" | "m" | "s";
  withText?: boolean;
  text?: string;
  onChange?: (value: string) => void;
}) {
  const sizeCheckbox = {
    text: { l: "gap-x-4 textM", m: "gap-x-3 textS", s: "gap-x-3 textXS" },
    checkbox: { l: "w-[26px] h-[26px]", m: "w-[18px] h-[18px]", s: "w-[18px] h-[18px]" },
  };
  return (
    <div className={clsx("flex items-center", sizeCheckbox.text[size])}>
      <div className={clsx("relative", sizeCheckbox.checkbox[size])}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onChange?.(text!)}
          className="peer absolute w-full h-full z-10 opacity-0 cursor-pointer"
        />
        <div className="pointer-events-none absolute inset-0 border bg-[var(--color-tile)] border-[var(--color-border-primary)] peer-checked:bg-amber-500 peer-checked:border-amber-500 rounded-md" />
        <CheckIcon className="absolute inset-0 m-auto text-[var(--background)] peer-not-checked:hidden" />
      </div>

      {withText && <span>{text}</span>}
    </div>
  );
}

export default Checkbox;
