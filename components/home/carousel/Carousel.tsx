"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";
import Loading from "@/components/Loading";

export default function Carousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(
          `${process.env.NEXTAUTH_URL || ""}/api/category?fields=name,imageUrl,description`
        );
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data: Category[] = await res.json();
        setCategories(data);
      } catch (err) {
        console.error( err);
        setError("Nie udało się pobrać kategorii");
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Loading text="Ładowanie kategorii…" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-8 text-red-500">
        {error}
      </div>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  const handleButtonClick = (name: string) => {
    router.push(`/products?category=${encodeURIComponent(name)}`);
  };

  const current = categories[activeIndex]!;

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <div className="w-full h-[452px] bg-[var(--color-tile)] border border-[var(--color-border-primary)] rounded-md relative overflow-hidden">
        <CarouselSlide
          category={current}
          onButtonClick={() => handleButtonClick(current.name)}
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
