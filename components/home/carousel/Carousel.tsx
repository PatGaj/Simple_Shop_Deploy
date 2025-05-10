"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";
import Loading from "@/components/Loading";
import { useFetchWithRetry } from "@/hooks/useFetchWithRetry";

export default function Carousel() {
  const fetchWithRetry = useFetchWithRetry();
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      const baseUrl = process.env.NEXTAUTH_URL || "";
      const url = `${baseUrl}/api/category?fields=name,imageUrl,description`;

      try {
        const res = await fetchWithRetry(url);
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Błąd przy pobieraniu kategorii:", err);
        setError("Nie udało się pobrać kategorii");
      } finally {
        setLoading(false);
      }
    }
    fetchCategories();
  }, [fetchWithRetry]);

  if (loading) return <Loading text="Ładowanie kategorii…" />;
  if (error)   return <div className="flex justify-center p-8 text-red-500">{error}</div>;
  if (!categories.length) return null;

  const handlePrev = () =>
    setActiveIndex(i => (i === 0 ? categories.length - 1 : i - 1));
  const handleNext = () =>
    setActiveIndex(i => (i === categories.length - 1 ? 0 : i + 1));
  const handleClick = (name: string) =>
    router.push(`/products?category=${encodeURIComponent(name)}`);

  const current = categories[activeIndex];

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <div className="w-full h-[452px] bg-[var(--color-tile)] border border-[var(--color-border-primary)] rounded-md relative overflow-hidden">
        <CarouselSlide
          category={current}
          onButtonClick={() => handleClick(current.name)}
        />
        <CarouselControls onPrev={handlePrev} onNext={handleNext} />
      </div>
      <CarouselDots
        count={categories.length}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}
