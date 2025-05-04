"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { DropDownIcon } from "./icons";
import Link from "next/link";

function Breadcrumb() {
  const pathname = usePathname();
  const pages = pathname.split("/").filter(Boolean);

  return (
    <div className="flex gap-x-2 w-full max-w-[1440px] px-10 items-center">
      {pages.length != 0 && (
        <>
          <Link href={"/"} className="text-[var(--textColor-tertiary)]">
            Home
          </Link>
          <DropDownIcon className="-rotate-90 text-xs text-[var(--textColor-tertiary)]" />
        </>
      )}

      {pages.length != 0 &&
        pages.map((element, index) => (
          <span
            key={index}
            className={clsx(
              index === pages.length - 1 ? "text-[var(--textColor-primary)]" : "text-[var(--textColor-tertiary)]",
              "flex gap-x-2 items-center capitalize textM font-medium"
            )}
          >
            {element}
            {index !== pages.length - 1 && <DropDownIcon className="-rotate-90 text-xs" />}
          </span>
        ))}
    </div>
  );
}

export default Breadcrumb;
