"use client";

import { useEffect, useState } from "react";
import Checkbox from "../ui/Checkbox";
import DropdownComponents from "../ui/DropdownComponents/DropdownComponents";
import Loading from "../Loading";
import { useFetchWithRetry } from "@/hooks/useFetchWithRetry";

type CategoryDropdownProps = {
  limit?: number;
  onChange?: (data: string) => void;
  initial?: string;
};

export default function CategoryDropdown({
  limit = 3,
  onChange,
  initial = "All",
}: CategoryDropdownProps) {
  const fetchWithRetry = useFetchWithRetry();
  const [selected, setSelected] = useState<string>(initial);
  const [options, setOptions] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const baseUrl = process.env.NEXTAUTH_URL || "";
      const url = `${baseUrl}/api/category?fields=name`;

      try {
        const res = await fetchWithRetry(url);
        const data: { name: string }[] = await res.json();
        const names = data.map((item) => item.name);
        setOptions(["All", ...names]);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
        setError("Nie udało się pobrać kategorii");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [fetchWithRetry]);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  if (loading) {
    return (
      <div className="p-4">
        <Loading text="Ładowanie kategorii…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">
        {error}
      </div>
    );
  }

  return (
    <DropdownComponents withTitle title="Category" limit={limit} defaultOpen>
      {options.map((option) => (
        <Checkbox
          key={option}
          sizeCheckbox="m"
          text={option}
          checked={selected === option}
          onChange={() => setSelected(option)}
        />
      ))}
    </DropdownComponents>
  );
}
