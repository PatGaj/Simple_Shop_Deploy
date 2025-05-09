"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useParams } from "next/navigation";
import { useAlert } from "@/hooks/useAlert";
import { useCart } from "@/hooks/useCart";
import { Product } from "@prisma/client";

export type ProductWithCategory = Product & { category: { name: string } };

export function useProductLogic() {
  const params = useParams();
  const alert = useAlert();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<ProductWithCategory | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<string>("white");

  useEffect(() => {
    if (!params.id) return;
    let cancelled = false;
    async function fetchProduct() {
      const res = await fetch(`/api/products/${params.id}`);
      const data: ProductWithCategory = await res.json();
      if (!cancelled) {
        setProduct(data);
      }
    }
    fetchProduct();
    return () => {
      cancelled = true;
    };
  }, [params.id]);

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    addToCart(product.id.toString(), quantity, product.stock, false, true);
    alert({
      type: "success",
      message: `${product.name} został dodany do koszyka.`,
    });
  }, [product, quantity, addToCart, alert]);

  const shippingEstimate = useMemo(() => {
    const today = new Date();
    const start = today.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
    const endDate = new Date(today);
    const randomDays = Math.floor(Math.random() * 7) + 1;
    endDate.setDate(today.getDate() + randomDays);
    const end = endDate.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
    return `${start} - ${end}`;
  }, []);

  const images = useMemo(
    () => [product?.imageUrl || "", "https://i.ibb.co/HpGX2w4R/noImage.png", "https://i.ibb.co/HpGX2w4R/noImage.png"],
    [product]
  );

  const colors = useMemo(
    () => [
      { name: "white", className: "bg-white" },
      { name: "black", className: "bg-black" },
    ],
    []
  );

  const loading = product === null;

  return {
    product,
    loading,
    quantity,
    setQuantity,
    selectedColor,
    setSelectedColor,
    handleAddToCart,
    shippingEstimate,
    images,
    colors,
  } as const;
}
