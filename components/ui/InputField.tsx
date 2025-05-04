"use client"
import clsx from "clsx";
import { useEffect, useState } from "react";

function InputField({
  size = "l",
  type = "stroke",
  destructive,
  withLabel,
  label,
  withLeftIcon,
  leftIcon,
  withRightIcon,
  rightIcon,
  withSupportText,
  supportText,
  placeholder,
  textButton,
  errorMessage,
  className,
  typeInput = "text",
  onDebouncedChange,
}: {
  size?: "xxl" | "xl" | "l" | "m" | "s" | "xs";
  type?: "stroke" | "leftButton";
  destructive?: boolean;
  withLabel?: boolean;
  label?: string;
  withLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  withRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  withSupportText?: boolean;
  supportText?: string;
  placeholder?: string;
  textButton?: string;
  errorMessage?: string;
  className?: string;
  typeInput?: "text" | "password" | "email" | "number";
  onDebouncedChange?: (value: string) => void;
}) {
  const sizeInputField = {
    label: {
      xxl: "textL font-medium",
      xl: "textL font-medium",
      l: "textL font-medium",
      m: "textM font-medium",
      s: "textM font-medium",
      xs: "textS font-medium",
    },
    input: {
      xxl: "py-4 textL",
      xl: "py-3.5 textM",
      l: "py-3 textM",
      m: "py-2.5 textS",
      s: "py-2 textS",
      xs: "py-1.5 textXS",
    },
    supportText: {
      xxl: "textS",
      xl: "textS",
      l: "textS",
      m: "textS",
      s: "textXS",
      xs: "textXXS",
    },
  };
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onDebouncedChange) {
        onDebouncedChange(value);
      }
    }, 3000); 

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="flex flex-col w-full gap-y-4">
      {withLabel && (
        <span className={clsx(sizeInputField.label[size], "text-[var(--textColor-primary)]")}>{label}</span>
      )}
      <div className="flex flex-col gap-y-2">
        <div
          className={clsx(
            "group flex w-full rounded-md",
            "focus-within:outline-2",
            destructive ? "focus-within:outline-danger-50" : "focus-within:outline-primary-50"
          )}
        >
          <div
            className={clsx(
              "flex items-center gap-x-4 px-4.5 border w-full h-max rounded-l-md bg-[var(--color-tile)]",
              type === "stroke" && "rounded-r-md",
              sizeInputField.input[size],
              destructive
                ? "border-danger-300 group-focus-within:border-danger-300"
                : "border-[var(--color-border-primary)] group-focus-within:border-primary-300",
              className
            )}
          >
            {type === "stroke" && withLeftIcon && leftIcon}
            <input
              type={typeInput}
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
              className="w-full focus:outline-none"
            />
            {type === "stroke" && withRightIcon && rightIcon}
          </div>

          {type === "leftButton" && (
            <button
              className={clsx(
                "flex items-center gap-x-4 px-4.5 border border-l-0 rounded-r-md bg-[var(--color-tile)]",
                sizeInputField.input[size],
                destructive
                  ? "border-danger-300 group-focus-within:border-danger-300"
                  : "border-[var(--color-border-primary)] group-focus-within:border-primary-300"
              )}
            >
              {textButton}
              {withRightIcon && rightIcon}
            </button>
          )}
        </div>

        {withSupportText && (
          <span
            className={clsx(
              sizeInputField.supportText[size],
              destructive ? "text-danger-500" : "text-[var(--textColor-tertiary)]"
            )}
          >
            {destructive ? errorMessage : supportText}
          </span>
        )}
      </div>
    </div>
  );
}

export default InputField;
