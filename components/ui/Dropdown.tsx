"use client";

import { useState, useRef, useEffect } from "react";
import { DropDownIcon, CheckIcon } from "../icons";
import clsx from "clsx";

function Dropdown({
  size = "l",
  options,
  placeholder,
  className,
  onChange,
}: {
  size?: "xxl" | "xl" | "l" | "m" | "s" | "xs";
  options: string[];
  placeholder?: string;
  className?: string;
  onChange?: (selected: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>(placeholder ? undefined : options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const sizeDropdown = {
    xxl: "textL py-4",
    xl: "textM py-3.5",
    l: "textM py-3",
    m: "textS py-2.5",
    s: "textS py-2",
    xs: "textXS py-1.5",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option); 
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={clsx(
          "border rounded-md flex items-center gap-x-4 justify-between h-max px-4 bg-[var(--color-tile)] border-[var(--color-border-primary)] text-[var(--textColor-primary)]",
          "focus:outline-none focus:ring-2 focus:ring-primary-50 focus:border-primary-300",
          sizeDropdown[size],
          className
        )}
      >
        <span>{selected ?? placeholder}</span>
        <DropDownIcon />
      </button>

      {isOpen && (
        <div
          className={clsx(
            sizeDropdown[size],
            "absolute flex flex-col gap-y-1 p-4 z-10 mt-1.5 w-full bg-[var(--color-tile)] rounded-md border border-[var(--color-border-primary)] max-h-30 overflow-y-auto"
          )}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={clsx(
                "flex items-center rounded-md justify-between px-2 py-2 cursor-pointer text-[var(--textColor-primary)]",
                "hover:bg-[var(--color-border-primary)]",
                selected === option ? "bg-[var(--color-border-secondary)]" : ""
              )}
            >
              <span>{option}</span>
              {selected === option && <CheckIcon className="text-[var(--textColor-primary)]" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
