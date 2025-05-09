"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@/app/generated/prisma/client";

export type ProductWithCategory = Product & { category: { name: string } };

export function useProductsLogic() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [page, setPage] = useState<number>(1);
  const [category, setCategory] = useState<string>(initialCategory);

  const [sorted, setSorted] = useState<{ sortBy: string; itemsPerPage: string }>({
    sortBy: "Latest",
    itemsPerPage: "9",
  });

  const [price, setPrice] = useState<{ minPrice: string; maxPrice: string }>({
    minPrice: "",
    maxPrice: "",
  });

  const [products, setProducts] = useState<ProductWithCategory[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const queryParams = useMemo<string>(() => {
    let params = `?page=${page}&limit=${sorted.itemsPerPage}&sorted=${sorted.sortBy}`;
    if (category !== "All") params += `&category=${category}`;
    if (price.minPrice) params += `&minPrice=${price.minPrice}`;
    if (price.maxPrice) params += `&maxPrice=${price.maxPrice}`;
    return params;
  }, [page, category, sorted, price]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/products${queryParams}`);
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setError(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [queryParams]);

  const handleSortedChange = (data: typeof sorted) => {
    if (data.sortBy !== sorted.sortBy || data.itemsPerPage !== sorted.itemsPerPage) {
      setSorted(data);
      setPage(1);
    }
  };

  const handlePriceChange = (data: typeof price) => {
    if (data.minPrice !== price.minPrice || data.maxPrice !== price.maxPrice) {
      setPrice(data);
      setPage(1);
    }
  };

  return {
    initialCategory,
    loading,
    error,
    products,
    totalPages,
    page,
    setPage,
    category,
    setCategory,
    handleSortedChange,
    handlePriceChange,
  } as const;
}
