"use client";

import React from "react";
import PricingDropdown from "@/components/products/PricingDropdown";
import SortedSelect from "@/components/products/SortedSelect/SortedSelect";
import PaginationSection from "@/components/products/PaginationSection";
import ProductCard from "@/components/products/ProductCard";
import CategoryDropdown from "@/components/products/CategoryDropdown";
import { useProductsLogic } from "./useProductsLogic";

export default function Products() {
  const {
    initialCategory,
    loading,
    error,
    products,
    totalPages,
    setPage,
    setCategory,
    handleSortedChange,
    handlePriceChange,
  } = useProductsLogic();

  return (
    <div className="flex min-h-full w-full border-t border-[var(--color-border-secondary)] mt-10">
      <div className="flex flex-col gap-y-10 w-full max-w-[360px] p-10 px-10">
        <CategoryDropdown
          limit={5}
          onChange={setCategory}
          initial={initialCategory}
        />
        <PricingDropdown onChange={handlePriceChange} />
      </div>

      <div className="flex flex-col w-full gap-y-10 p-10 border-l border-[var(--color-border-secondary)]">
        <SortedSelect onChange={handleSortedChange} />

        <div className="flex flex-wrap w-full gap-x-12 gap-y-8">
          {loading ? (
            <div className="w-full text-center">Ładowanie...</div>
          ) : error ? (
            <div className="w-full text-center text-danger-500">Błąd ładowania danych</div>
          ) : products.length !== 0 ? (
            products.map(({ id, name, price, imageUrl, discount, category }) => (
              <ProductCard
                key={id}
                id={id}
                category={category.name}
                imageURL={imageUrl}
                price={price}
                discount={discount}
                itemName={name}
              />
            ))
          ) : (
            <div className="w-full text-center heading5">Brak przedmiotów do wyświetlenia</div>
          )}
        </div>

        {totalPages > 1 && <PaginationSection onChange={setPage} totalPages={totalPages} />}
      </div>
    </div>
  );
}
