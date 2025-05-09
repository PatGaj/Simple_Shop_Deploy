"use client";
import Tile from "./Tile";
import { useEffect, useState } from "react";
import TileContainer from "./TileContainer";
import { Brand } from "@prisma/client";

export default function BrandSection() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/brand?fields=name,imageUrl`);
      const data = await res.json();
      setBrands(data);
    };

    fetchBrands();
  }, []);
  return (
    <TileContainer title="Brand" overflow>
      {brands.map((element) => (
        <Tile key={element.id} imageURL={element.imageUrl} title={element.name} className="h-[46px]" />
      ))}
    </TileContainer>
  );
}
