import ProductCard from "../products/ProductCard";
import TileContainer from "./TileContainer";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number | undefined;
  category: {
    name: string;
  };
};

export default async function RecommendationSection() {
  const res = await fetch("http://localhost:3000/api/products/recomendation", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Błąd podczas pobierania rekomendowanych produktów");
  }

  const products: Product[] = await res.json();

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
          withDiscount={!!product.discount}
          discount={product.discount}
        />
      ))}
    </TileContainer>
  );
}
