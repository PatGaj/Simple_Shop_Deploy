import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  let pages: (number | "...")[] = [];

  if (totalPages <= 7) {
    
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    
    if (currentPage <= 3) {
      pages = [1, 2, 3, 4, "...", totalPages - 1, totalPages];
    } else if (currentPage >= totalPages - 2) {
      pages = [1, "...",totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
  }

  return (
    <div className="flex gap-x-2">
      {pages.map((element, index) =>
        element !== "..." ? (
          <button
            onClick={() => onPageChange(Number(element))}
            key={index}
            className={clsx(
              element === currentPage
                ? "bg-[var(--color-primary)] text-[var(--background)]"
                : "text-[var(--textColor-tertiary)]",
              "textM w-11 h-11 rounded-md cursor-pointer"
            )}
          >
            {element}
          </button>
        ) : (
          <div key={index} className="flex textM items-center justify-center w-11 h-11">
            ...
          </div>
        )
      )}
    </div>
  );
}

export default Pagination;
