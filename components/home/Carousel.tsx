"use client";
import { useEffect, useState } from "react";
import SvgDropDown from "@/components/icons/DropDown";
import SvgRightArrow from "@/components/icons/RightArrow";
import Button from "../ui/Button";
import clsx from "clsx";
import { useRouter } from "next/navigation";


type Category = {
  name: string;
  description: string;
  imageUrl: string;
};

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

  const current = categories[activeIndex];

  if (!current) return null;

  return (
    <div className="flex flex-col gap-y-6 items-center">
      <div className="w-full h-[452px] bg-[var(--color-tile)] border border-[var(--color-border-primary)] rounded-md relative overflow-hidden">
        <div className="absolute flex flex-col gap-y-10 w-[433px] left-[120px] bottom-20">
          <div className="flex flex-col gap-y-6">
            <p className="heading4 font-medium">{current.name}</p>
            <div className="textM text-[var(--textColor-secondary)]">
              {current.description} {}
            </div>
          </div>
          <Button  onClick={() => router.push(`/products?category=${current.name}`)} style="stroke" withRightIcon rightIcon={<SvgRightArrow />} className="w-max">
            Explore Category
          </Button>
        </div>
        <img className="absolute rotate-[-38deg] w-104 right-50 bottom-10" src={current.imageUrl} alt={current.name} />
        <button
          onClick={handlePrev}
          className="flex justify-center items-center absolute left-0 top-1/2 -translate-y-1/2 w-11 h-[74px] bg-[var(--color-primary)] rounded-r-md cursor-pointer"
        >
          <SvgDropDown className="rotate-90 text-[var(--color-tile)]" />
        </button>
        <button
          onClick={handleNext}
          className="flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2 w-11 h-[74px] bg-[var(--color-primary)] rounded-l-md cursor-pointer"
        >
          <SvgDropDown className="-rotate-90 text-[var(--color-tile)]" />
        </button>
      </div>
      <div className="flex gap-x-4">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={clsx(
              "w-3 h-3 rounded-full cursor-pointer",
              index === activeIndex ? "bg-[var(--color-secondary)]" : "bg-[var(--color-border-primary)]"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
