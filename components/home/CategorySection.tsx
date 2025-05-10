"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Tile from "./Tile";
import TileContainer from "./TileContainer";
import Loading from "../Loading";
import { Category } from "@prisma/client";
import { useFetchWithRetry } from "@/hooks/useFetchWithRetry";

export default function CategorySection() {
  const fetchWithRetry = useFetchWithRetry();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      const baseUrl = process.env.NEXTAUTH_URL || "";
      const url = `${baseUrl}/api/category?fields=name,iconUrl`;

      try {
        const res = await fetchWithRetry(url);
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Błąd podczas pobierania kategorii:", err);
        setError("Nie udało się pobrać kategorii");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, [fetchWithRetry]);

  if (loading) {
    return (
      <TileContainer title="Category">
        <Loading text="Ładowanie kategorii…" />
      </TileContainer>
    );
  }

  if (error) {
    return (
      <TileContainer title="Category">
        <div className="p-8 text-center text-red-500">{error}</div>
      </TileContainer>
    );
  }

  if (!categories.length) {
    return null;
  }

  return (
    <TileContainer title="Category">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          href={`/products?category=${encodeURIComponent(cat.name)}`}
        >
          <Tile imageURL={cat.iconUrl} title={cat.name} className="h-[80px]" />
        </Link>
      ))}
    </TileContainer>
  );
}
