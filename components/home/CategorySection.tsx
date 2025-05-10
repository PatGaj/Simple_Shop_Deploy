"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Tile from "./Tile";
import TileContainer from "./TileContainer";
import { Category } from "@prisma/client";
import Loading from "../Loading";

export default function CategorySection() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL || ""}/api/category?fields=name,iconUrl`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error(err);
        setError("Nie udało się pobrać kategorii");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

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

  return (
    <TileContainer title="Category">
      {categories.map((cat) => (
        <Link key={cat.id} href={`/products?category=${encodeURIComponent(cat.name)}`}>
          <Tile imageURL={cat.iconUrl} title={cat.name} className="h-[80px]" />
        </Link>
      ))}
    </TileContainer>
  );
}
