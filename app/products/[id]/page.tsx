"use client";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import { CartIcon, CheckIcon, ShieldIcon } from "@/components/icons";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  discount?: number;
  imageUrl: string[];
  category: { name: string };
};

function ProductId() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selected, setSelected] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("white");
  const params = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [params.id]);

  if (!product) return <div>Loading...</div>;

  const price = product.price;
  const stock = product.stock;
  const images = [product.imageUrl];
  const colors = [
    { name: "white", className: "bg-white" },
    { name: "black", className: "bg-black" },
  ];

  return (
    <div className="flex gap-x-8 w-full p-10">
      <div className="flex gap-x-10">
        <div className="flex flex-col w-[420px] gap-y-8">
          <div className="p-3 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md h-[340px]">
            <img className="rounded-md w-full h-full object-cover" src={images[selected]} alt={product.name} />
          </div>
          <div className="flex gap-x-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`w-32 h-24 rounded-md overflow-hidden border-2 cursor-pointer ${
                  selected === index ? "border-orange-400" : "border-transparent hover:border-gray-300"
                }`}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-8 w-[430px]">
          <div className="flex flex-col gap-y-5">
            <span className="heading5 font-medium">{product.name}</span>
            <Badge className="w-max" text={product.category.name} />
          </div>
          <span className="heading4 font-medium">${price}</span>
          <div className="flex flex-col gap-y-1 items-start textM text-[var(--textColor-secondary)]">
            <div>{product.description}</div>
            <div className={clsx(viewMore ? "" : "hidden")}>Dodatkowe informacje o produkcie…</div>
            <button onClick={() => setViewMore((prev) => !prev)} className="text-[var(--color-primary)] cursor-pointer">
              {viewMore ? "View Less" : "View More"}
            </button>
          </div>
          <div className="flex flex-col gap-y-3.5 ">
            <span className="text-[var(--textColor-tertiary)] textL">Shipping Available</span>
            <div className="flex gap-x-2 p-4 border rounded-md border-[var(--color-border-primary)] w-max">
              <ShieldIcon className="text-success-500 text-xl" />
              <div className="flex flex-col gap-y-1 textM ">
                <span className="font-medium">NexusHub Courier</span>
                <span className="text-[var(--textColor-tertiary)]">Estimated arrival 30 Sep - 3 Oct</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 w-[430px] p-6 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] h-max rounded-md">
        <div className="flex flex-col gap-y-3.5">
          <span className="textL font-medium text-[var(--textColor-tertiary)]">Colors</span>
          <div className="flex gap-x-4">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-13.5 h-13.5 rounded-md border flex items-center justify-center relative ${
                  color.className
                } ${
                  selectedColor === color.name
                    ? "border-[var(--color-border-primary)]"
                    : "border-[var(--color-border-secondary)]"
                }`}
              >
                {selectedColor === color.name && (
                  <CheckIcon className="w-5 h-5 text-black drop-shadow-[0px_1px_0px_white] absolute" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-3.5">
          <span className="textL font-medium text-[var(--textColor-tertiary)]">Quantity</span>
          <div className="flex gap-x-4 items-center">
            <Counter max={stock} onChange={(val) => setQuantity(val)} />

            <span className="textM font-medium flex items-center">
              Stock: <span className="ml-1">{stock}</span>
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="textL font-medium text-[var(--textColor-tertiary)]">Subtotal</span>
          <span className="heading5 font-medium">${(quantity * price).toFixed(2)}</span>
        </div>

        <Button style="stroke" withRightIcon rightIcon={<CartIcon />}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductId;
