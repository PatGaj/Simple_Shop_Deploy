"use client";

import { useEffect, useState } from "react";
import Tile from "./Tile";
import TileContainer from "./TileContainer";
import Loading from "../Loading";
import { Brand } from "@prisma/client";

export default function BrandSection() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const res = await fetch(`${process.env.NEXTAUTH_URL || ""}/api/brand?fields=name,imageUrl`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data: Brand[] = await res.json();
        setBrands(data);
      } catch (err) {
        console.error("Błąd podczas pobierania marek:", err);
        setError("Nie udało się pobrać marek");
      } finally {
        setLoading(false);
      }
    }

    fetchBrands();
  }, []);

  if (loading) {
    return (
      <TileContainer title="Brand" overflow>
        <Loading text="Ładowanie marek…" />
      </TileContainer>
    );
  }

  if (error) {
    return (
      <TileContainer title="Brand" overflow>
        <div className="p-8 text-center text-red-500">{error}</div>
      </TileContainer>
    );
  }

  return (
    <TileContainer title="Brand" overflow>
      {brands.map((brand) => (
        <Tile key={brand.id} imageURL={brand.imageUrl} title={brand.name} className="h-[46px]" />
      ))}
    </TileContainer>
  );
}
