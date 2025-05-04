import clsx from "clsx";
import { RightArrowIcon } from "../icons";

function TileContainer({
  children,
  title,
  overflow,
}: {
  children: React.ReactNode;
  title: string;
  overflow?: boolean;
}) {
  return (
    <div className={clsx(overflow && "overflow-x-hidden")}>
      <div className={clsx("mb-8", overflow && "flex justify-between")}>
        <span className="heading4 font-medium">{title}</span>
        {overflow && (
          <span className="flex items-center gap-x-3 textM font-medium text-[var(--color-primary)]">
            See All
            <RightArrowIcon/>
          </span>
        )}
      </div>
      <div className={clsx(overflow ? "flex gap-x-[32px] w-max" : "flex justify-between")}>{children}</div>
    </div>
  );
}
export default TileContainer;
