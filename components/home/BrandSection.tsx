"use client";
import Tile from "./Tile";
import { useEffect, useState } from "react";
import TileContainer from "./TileContainer";
import Link from "next/link";

type Brand = {
  id: number;
  name: string;
  imageUrl: string;
};

export default function BrandSection() {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await fetch("/api/brand?fields=name,imageUrl");
      const data = await res.json();
      setBrands(data);
    };

    fetchBrands();
  }, []);
  return (
    <TileContainer title="Brand" overflow>
      {brands.map((element) => (
        <Link key={element.id} href={`/products?brand=${element.name}`}>
          <Tile imageURL={element.imageUrl} title={element.name} className="h-[46px] cursor-pointer" />
        </Link>
      ))}
    </TileContainer>
  );
}
