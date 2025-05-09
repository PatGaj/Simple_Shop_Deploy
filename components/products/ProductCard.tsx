"use client";

import Link from "next/link";
import { CartIcon } from "../icons";
import Badge from "../ui/Badge";
import { useAlert } from "@/hooks/useAlert";
import { useCart } from "@/hooks/useCart";

type ProductCardProps = {
  id: number;
  imageURL: string;
  category: string;
  itemName: string;
  price: number;
  discount: number;
  stock?: number;
};

export default function ProductCard({
  id,
  imageURL,
  category,
  itemName,
  price,
  discount,
  stock = 0,
}: ProductCardProps) {
  const info = useAlert();
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(id.toString(), 1, stock, true);
    info({ type: "success", message: `${itemName} added to your shopping cart` });
  };

  const finalPrice = discount !== 0 ? price - discount : price;

  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col gap-y-4 items-center p-4 border border-[var(--color-border-primary)] bg-[var(--color-tile)] rounded-md w-[300px] cursor-pointer hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-center items-center relative rounded-md bg-base-white-2 w-full">
          <img src={imageURL} alt={itemName} className="h-[200px]" />
          <button
            onClick={handleAddToCart}
            className="w-8 h-8 p-1 rounded-md bg-[var(--color-tile)] absolute top-4 left-4 flex items-center justify-center cursor-pointer"
          >
            <CartIcon className="text-[var(--textColor-primary)]" />
          </button>
        </div>
        <div className="flex flex-col gap-y-4 w-full">
          <Badge className="w-max" size="l" text={category} />
          <div className="flex flex-col gap-y-2">
            <span className="textL">{itemName}</span>
            <div className="flex gap-x-2.5 items-center">
              <span className="heading5 font-semibold">${finalPrice.toFixed(2)}</span>
              {discount !== 0 && <span className="textL line-through">${price.toFixed(2)}</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
