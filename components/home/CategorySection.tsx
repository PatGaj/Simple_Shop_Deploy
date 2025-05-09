"use client";
import Tile from "./Tile";
import { useEffect, useState } from "react";
import TileContainer from "./TileContainer";
import Link from "next/link";
import { Category } from "@prisma/client/";

export default function CategorySection() {
  const [category, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/category?fields=name,iconUrl`);
      const data = await res.json();
      setCategory(data);
    };

    fetchBrands();
  }, []);

  return (
    <TileContainer title="Category">
      {category.map((element) => (
        <Link key={element.id} href={`/products?category=${element.name}`}>
          <Tile imageURL={element.iconUrl} title={element.name} className="h-[80px]" />
        </Link>
      ))}
    </TileContainer>
  );
}
