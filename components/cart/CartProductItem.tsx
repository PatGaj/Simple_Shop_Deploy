"use client";
import clsx from "clsx";
import Counter from "../ui/Counter";
import ProductInfo from "./ProductInfo";
import { useState } from "react";

function CartProductItem({
  category,
  imageUrl,
  name,
  price,
  max,
  value,
  onChange,
}: {
  category: string;
  imageUrl: string;
  name: string;
  price: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}) {
  const [writeNote, setWriteNote] = useState(false);
  return (
    <div className="flex flex-col gap-y-6 p-6 w-full bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md">
      <div className="flex justify-between items-end">
        <ProductInfo category={category} imageUrl={imageUrl} name={name} price={price} />
        <div className="flex items-center gap-x-6">
          <button
            onClick={() => setWriteNote((prev) => !prev)}
            className="text-[var(--color-primary)] h-max textM cursor-pointer pr-6 border-r border-r-[var(--color-border-primary)] border-"
          >
            Write Note
          </button>
          <Counter max={max} value={value} onChange={onChange} />
        </div>
      </div>
      <div className={clsx(writeNote ? "" : "hidden", "flex flex-col gap-y-1")}>
        <hr className="text-[var(--color-border-secondary)] mb-3" />
        <span className="textL">Note:</span>
        <textarea className="border border-[var(--color-border-secondary)] w-full rounded-md resize-none p-2"></textarea>
      </div>
    </div>
  );
}
export default CartProductItem;
