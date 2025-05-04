"use client";
import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Product } from "@prisma/client";

import CategoryDropdown from "@/components/products/CategoryDropdown";
import PricingDropdown from "@/components/products/PricingDropdown";
import SortedSelect from "@/components/products/SortedSelect";
import PaginationSection from "@/components/products/PaginationSection";
import ProductCard from "@/components/products/ProductCard";
import BrandDropdown from "@/components/products/BrandsDropdown";

function Products() {
  const searchParams = useSearchParams();

  
  const initialCategory = searchParams.get("category") || "All";
  const initialBrand = searchParams.get("brand") || "All";

  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [brand, setBrand] = useState(initialBrand);

  const [sorted, setSorted] = useState<{ sortBy: string; itemsPerPage: string }>({
    sortBy: "Latest",
    itemsPerPage: "9",
  });

  const [price, setPrice] = useState<{ minPrice: string; maxPrice: string }>({
    minPrice: "",
    maxPrice: "",
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const queryParams = useMemo(() => {
    let params = `?page=${page}&limit=${sorted.itemsPerPage}&sorted=${sorted.sortBy}`;
    if (category !== "All") params += `&category=${category}`;
    if (brand !== "All") params += `&brand=${brand}`;
    if (price.minPrice !== "") params += `&minPrice=${price.minPrice}`;
    if (price.maxPrice !== "") params += `&maxPrice=${price.maxPrice}`;
    return params;
  }, [page, category, brand, sorted, price]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products${queryParams}`);
        const data = await res.json();
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchProducts();
  }, [queryParams]);

  const handleSortedChange = (data: typeof sorted) => {
    if (data.sortBy !== sorted.sortBy || data.itemsPerPage !== sorted.itemsPerPage) {
      setSorted(data);
    }
  };

  const handlePriceChange = (data: typeof price) => {
    if (data.minPrice !== price.minPrice || data.maxPrice !== price.maxPrice) {
      setPrice(data);
    }
  };

  return (
    <div className="flex min-h-full w-full border-t border-[var(--color-border-secondary)] mt-10">
      <div className="flex flex-col gap-y-10 w-full max-w-[360px] p-10 px-10">
        <CategoryDropdown limit={2} onChange={setCategory} initial={initialCategory} />
        <BrandDropdown limit={2} onChange={setBrand} initial={initialBrand} />
        <PricingDropdown onChange={handlePriceChange} />
      </div>
      <div className="flex flex-col w-full gap-y-10 p-10 border-l border-[var(--color-border-secondary)]">
        <SortedSelect onChange={handleSortedChange} />
        <div className="flex flex-wrap w-full gap-x-12 gap-y-8">
          {products.length !== 0 ? (
            products.map(({ id, name, price, imageUrl, discount, category }) => (
              <ProductCard
                key={id}
                category={category.name}
                imageURL={imageUrl}
                price={price}
                withDiscount={!!discount}
                discount={discount}
                itemName={name}
              />
            ))
          ) : (
            <div className="w-full text-center heading5">Brak przedmiotów do wyświetlenia</div>
          )}
        </div>
        {totalPages > 1 && (
          <PaginationSection onChange={setPage} totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}

export default Products;
