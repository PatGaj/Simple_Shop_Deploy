import clsx from "clsx";
import { ConfirmIcon, CrossIcon, DangerIcon, WarningIcon } from "../icons";

function Alert({ message, type }: { message: string; type: "success" | "warning" | "danger" }) {
  const typeAlert = {
    success: "bg-success-700 border border-success-500",
    warning: "bg-warning-700 border border-warning-500",
    danger: "bg-danger-700 border border-danger-500",
  };
  const iconAlert = {
    success: <ConfirmIcon className="text-success-400 h-[22px]" />,
    warning: <WarningIcon className="text-warning-400 h-[22px]" />,
    danger: <DangerIcon className="text-danger-400 h-[22px]" />,
  };
  return (
    <div className={clsx("flex gap-x-4 items-center p-[18px]", typeAlert[type], " rounded-md")}>
      {iconAlert[type]}
      <div className="w-full">
        <span className="heading7 font-medium">{message}</span>
      </div>
      <button>
        <CrossIcon className="rotate-45 text-neutral-50 h-[22px]" />
      </button>
    </div>
  );
}
export default Alert;
