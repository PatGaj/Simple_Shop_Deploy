"use client";

import { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import DropdownComponents from "../ui/DropdownComponents";

function CategoryDropdown({
  limit = 3,
  onChange,
  initial = 'All',
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
        const res = await fetch("/api/category?fields=name");
        const data = await res.json();

        const names = data.map((item: { name: string }) => item.name);
        setOptions(["All", ...names]);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <DropdownComponents withTitle title="Category" limit={limit} defaultOpen>
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

export default CategoryDropdown;
