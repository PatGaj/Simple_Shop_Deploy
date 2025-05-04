"use client";

import { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import DropdownComponents from "../ui/DropdownComponents";

function BrandDropdown({
  limit = 3,
  onChange,
  initial = "All", 
}: {
  limit?: number;
  onChange?: (data: string) => void;
  initial?: string; 
}) {
  const [selected, setSelected] = useState<string>(initial);
  const [options, setOptions] = useState<string[]>(["All"]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/brand?fields=name");
        const data = await res.json();

        const names = data.map((item: { name: string }) => item.name);
        setOptions(["All", ...names]);
      } catch (error) {
        console.error("Failed to fetch brands:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <DropdownComponents withTitle title="Brand" limit={limit}>
      {options.map((option) => (
        <Checkbox
          key={option}
          size="m"
          withText
          text={option}
          checked={selected === option}
          onChange={() => setSelected(option)}
        />
      ))}
    </DropdownComponents>
  );
}

export default BrandDropdown;
