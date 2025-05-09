"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import CarouselSlide from "./CarouselSlide";
import CarouselControls from "./CarouselControls";
import CarouselDots from "./CarouselDots";

function Carousel() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/category?fields=name,imageUrl,description");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Błąd przy pobieraniu kategorii:", error);
      }
    };

    fetchCategories();
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  const handleButtonClick = (name: string) => {
    router.push(`/products?category=${name}`);
  };

  const current = categories[activeIndex];
  if (!current) return null;

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <div className="w-full h-[452px] bg-[var(--color-tile)] border border-[var(--color-border-primary)] rounded-md relative overflow-hidden">
        <CarouselSlide category={current} onButtonClick={() => handleButtonClick(current.name)} />
        <CarouselControls onPrev={handlePrev} onNext={handleNext} />
      </div>
      <CarouselDots count={categories.length} activeIndex={activeIndex} onSelect={setActiveIndex} />
    </div>
  );
}

export default Carousel;
