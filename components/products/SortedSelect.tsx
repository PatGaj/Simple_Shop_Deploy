import { useState, useEffect } from "react";
import Dropdown from "../ui/Dropdown";

type SortedSelectProps = {
  onChange?: (data: { sortBy: string; itemsPerPage: string }) => void;
};

function SortedSelect({ onChange }: SortedSelectProps) {
  const showOption = ["9", "12", "15"];
  const sortByOption = ["Latest", "Highest price", "Lowest price"];
  const [sortBy, setSortBy] = useState(sortByOption[0]);
  const [itemsPerPage, setItemsPerPage] = useState(showOption[0]);

  
  useEffect(() => {
    if (onChange) {
      onChange({ sortBy, itemsPerPage });
    }
  }, [sortBy, itemsPerPage]);

  return (
    <div className="flex gap-x-15">
      <div className="flex items-center gap-x-4">
        <span className="heading7 font-semibold">Sort by</span>
        <Dropdown onChange={(value) => setSortBy(value)} size="s" options={sortByOption} className="w-[170px]" />
      </div>
      <div className="flex items-center gap-x-4">
        <span className="heading7 font-semibold">Show</span>
        <Dropdown onChange={(value) => setItemsPerPage(value)} size="s" options={showOption} className="w-[100px]" />
      </div>
    </div>
  );
}

export default SortedSelect;
