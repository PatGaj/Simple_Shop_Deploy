"use client";

import { useState } from "react";
import clsx from "clsx";
import { RightArrowIcon } from "../icons";

type TileContainerProps = {
  children: React.ReactNode;
  title: string;
  overflow?: boolean;
};

export default function TileContainer({ children, title, overflow }: TileContainerProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div className={clsx(overflow && "overflow-x-hidden")}>
      <div className={clsx("mb-8", overflow && "flex justify-between items-center")}>
        <span className="heading4 font-medium">{title}</span>
        {overflow && (
          <button
            onClick={handleToggle}
            className="flex items-center gap-x-3 textM font-medium text-[var(--color-primary)] cursor-pointer"
          >
            {expanded ? "See Less" : "See All"}
            <RightArrowIcon className={clsx("transition-transform duration-300", expanded && "rotate-180")} />
          </button>
        )}
      </div>

      <div
        className={clsx(
          "flex gap-x-[32px]",
          overflow && (expanded ? "flex-wrap gap-y-[32px]" : "w-max overflow-x-auto scroll-smooth"),
          overflow ? "justify-evenly" : "justify-between"
        )}
      >
        {children}
      </div>
    </div>
  );
}
