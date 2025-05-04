import clsx from "clsx";
function Button({
  children,
  className,
  style = "text",
  size = "l",
  withLeftIcon,
  leftIcon,
  withRightIcon,
  rightIcon,
  disabled,
  onClick,
  type = "button"
}: {
  children: React.ReactNode;
  className?: string;
  style?: "text" | "fill" | "stroke";
  size?: "xxl" | "xl" | "l" | "m" | "s" | "xs";
  withLeftIcon?: boolean;
  leftIcon?: React.ReactNode;
  withRightIcon?: boolean;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?:"submit"|"reset"|"button"
}) {
  const buttonStyle = {
    stroke: "text-primary-500 border border-primary-500 rounded-md",
    fill: "text-[var(--background)] bg-primary-500 rounded-md",
    text: "text-primary-500",
  };
  const buttonSize = {
    xxl: "py-4 textL font-medium",
    xl: "py-3.5 textM font-medium",
    l: "py-3 textM font-medium",
    m: "py-2.5 textS font-medium",
    s: "py-2 textS font-medium",
    xs: "py-1.5 textXS font-medium",
  };
  const hoverButton = {
    stroke: "hover:border-primary-400",
    fill: "hover:bg-primary-600",
    text: "hover:text-primary-600",
  };
  const pressedButton = {
    stroke: "active:border-primary-400 active:text-primary-400",
    fill: "active:bg-primary-700",
    text: "active:text-primary-400",
  };
  const disabledButton = {
    stroke: "disabled:border-primary-300 disabled:text-primary-300",
    fill: "disabled:bg-primary-300",
    text: "disabled:text-primary-300",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex items-center justify-center gap-x-3.5 px-5 cursor-pointer h-max",
        buttonStyle[style],
        buttonSize[size],
        hoverButton[style],
        pressedButton[style],
        disabledButton[style],
        className,
      )}
    >
      {withLeftIcon && leftIcon}
      {children}
      {withRightIcon && rightIcon}
    </button>
  );
}
export default Button;
