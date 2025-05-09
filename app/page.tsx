import Carousel from "@/components/home/carousel/Carousel";
import BrandSection from "@/components/home/BrandSection";
import CategorySection from "@/components/home/CategorySection";
import RecommendationSection from "@/components/home/RecommendationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-[100px] w-full px-10">
      <Carousel />
      <CategorySection />
      <RecommendationSection />
      <BrandSection />
    </div>
  );
}
