"use client";

import React from "react";
import ImageGallery from "@/components/product/ImageGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ColorPicker from "@/components/product/ColorPicker";
import QuantitySelector from "@/components/product/QuantitySelector";
import AddToCartPanel from "@/components/product/AddToCartPanel";
import { useProductLogic } from "./useProductLogic";
import Loading from "@/components/Loading";

export default function ProductId() {
  const {
    product,
    loading,
    quantity,
    setQuantity,
    setSelectedColor,
    handleAddToCart,
    shippingEstimate,
    images,
    colors,
  } = useProductLogic();

  if (loading) return <Loading text="Loading Product..."/>;

  return (
    <div className="flex gap-x-8 w-full p-10">
      <div className="flex gap-x-10">
        <ImageGallery images={images} />
        <ProductInfo
          name={product.name}
          category={product.category.name}
          price={product.price}
          description={product.description}
          exploreInfo={product.exploreInfo}
          shippingEstimate={shippingEstimate}
        />
      </div>

      <div className="flex flex-col gap-y-8 w-[430px] p-6 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] h-max rounded-md">
        <ColorPicker colors={colors} onSelect={setSelectedColor} />
        <QuantitySelector stock={product.stock} value={quantity} onChange={setQuantity} />
        <AddToCartPanel subtotal={quantity * product.price} onAdd={handleAddToCart} />
      </div>
    </div>
  );
}
