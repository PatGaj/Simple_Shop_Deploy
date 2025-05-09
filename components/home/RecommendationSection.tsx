"use client";
import { Product } from "@prisma/client/";
import ProductCard from "../products/ProductCard";
import TileContainer from "./TileContainer";

type ProductWithCategory = Product & {
  category: {
    name: string;
  };
};

import { useState, useEffect } from "react";
export default function RecommendationSection() {
  const [products, setProducts] = useState<ProductWithCategory[] | null>(null);

  useEffect(() => {
    fetch("/api/products/recomendation")
      .then((r) => r.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  if (!products) return <div>Ładowanie…</div>;
  return (
    <TileContainer title="Recommendation" overflow>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          imageURL={product.imageUrl}
          category={product.category.name}
          itemName={product.name}
          price={product.price}
          discount={product.discount}
        />
      ))}
    </TileContainer>
  );
}
