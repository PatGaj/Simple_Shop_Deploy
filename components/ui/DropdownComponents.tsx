"use client"
import { useState } from "react";
import clsx from "clsx";
import { CrossIcon, DropDownIcon, MinusIcon } from "../icons";

function DropdownComponents({
  children,
  withTitle,
  title,
  limit = 3,
  defaultOpen,
}: {
  children: React.ReactNode;
  withTitle?: boolean;
  title?: string;
  limit?: number;
  defaultOpen?: boolean;
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(defaultOpen); 
  const [isLoadMore, setIsLoadMore] = useState(false); 

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setIsLoadMore(false); 
  };

  const toggleLoadMore = () => {
    setIsLoadMore((prev) => !prev);
  };

  const childrenArray = Array.isArray(children) ? children : [children];
  const visibleChildren = isLoadMore ? childrenArray : childrenArray.slice(0, limit);

  return (
    <div className="p-4">
      <div onClick={toggleDropdown} className="flex justify-between items-center cursor-pointer select-none">
        {withTitle && <span className="heading7 font-semibold">{title}</span>}
        <DropDownIcon className={clsx("transition-transform duration-300", isDropdownOpen && "rotate-180")} />
      </div>

      {isDropdownOpen && (
        <div className="mt-4 flex flex-col gap-2">
          {visibleChildren}

          {childrenArray.length > limit && (
            <button onClick={toggleLoadMore} className="mt-4 cursor-pointer textM">
              {isLoadMore ? (
                <span className="flex gap-x-3.5 items-center">
                  Load Less <MinusIcon />
                </span>
              ) : (
                <span className="flex gap-x-3.5 items-center">
                  Load More <CrossIcon />
                </span>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default DropdownComponents;
