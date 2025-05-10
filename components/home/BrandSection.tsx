"use client";

import { useEffect, useState } from "react";
import Tile from "./Tile";
import TileContainer from "./TileContainer";
import Loading from "../Loading";
import { Brand } from "@prisma/client";
import { useFetchWithRetry } from "@/hooks/useFetchWithRetry";

export default function BrandSection() {
  const fetchWithRetry = useFetchWithRetry();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBrands() {
      const baseUrl = process.env.NEXTAUTH_URL || "";
      const url = `${baseUrl}/api/brand?fields=name,imageUrl`;

      try {
        const res = await fetchWithRetry(url);
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
  }, [fetchWithRetry]);

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

  if (!brands.length) {
    return null;
  }

  return (
    <TileContainer title="Brand" overflow>
      {brands.map((brand) => (
        <Tile
          key={brand.id}
          imageURL={brand.imageUrl}
          title={brand.name}
          className="h-[46px]"
        />
      ))}
    </TileContainer>
  );
}
