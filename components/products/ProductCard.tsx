"use client";
import Link from "next/link";
import { CartIcon } from "../icons";
import Badge from "../ui/Badge";

function ProductCard({
  id,
  imageURL,
  category,
  itemName,
  price,
  withDiscount,
  discount,
}: {
  id: number;
  imageURL: string;
  category: string;
  itemName: string;
  price: number;
  withDiscount?: boolean;
  discount?: number;
}) {
  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const product = {
      id,
      quantity: 1,
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingIndex = cart.findIndex((item: any) => item.id === product.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

  };

  return (
    <Link href={`/products/${id}`}>
      <div className="flex flex-col gap-y-4 items-center p-4 border border-[var(--color-border-primary)] bg-[var(--color-tile)] rounded-md w-[300px] cursor-pointer hover:shadow-md transition-shadow duration-200">
        <div className="flex justify-center items-center relative rounded-md bg-base-white-2 w-full">
          <img src={imageURL} alt={itemName} className="h-[200px]" />
          <button
            onClick={addToCart}
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
              <span className="heading5 font-semibold">${withDiscount ? discount : price}</span>
              {withDiscount && <span className="textL line-through">${price}</span>}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProductCard;
