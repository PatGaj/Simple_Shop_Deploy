"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import CartProductItem from "@/components/cart/CartProductItem";
import { TrashcanIcon } from "@/components/icons";
import Checkbox from "@/components/ui/Checkbox";

type LocalCartItem = {
  id: string;
  quantity: number;
};

type ProductFromAPI = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  stock: number;
  category: { name: string };
};

function Cart() {
  const [cart, setCart] = useState<(ProductFromAPI & { quantity: number })[]>([]);
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [selectAll, setSelectAll] = useState(false);

  const subtotal = cart.reduce((sum, item) => (selectedItems.has(item.id) ? sum + item.price * item.quantity : sum), 0);

  const selectedCount = cart.filter((item) => selectedItems.has(item.id)).length;

  useEffect(() => {
    const localCartRaw = localStorage.getItem("cart");
    const localCart: LocalCartItem[] = localCartRaw ? JSON.parse(localCartRaw) : [];

    const fetchProducts = async () => {
      if (localCart.length === 0) return;
      const ids = localCart.map((item) => item.id);

      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify(ids),
      });

      const products: ProductFromAPI[] = await res.json();

      const combined = products.map((product) => {
        const item = localCart.find((c) => c.id === product.id);
        return {
          ...product,
          quantity: item?.quantity || 1,
        };
      });

      setCart(combined);
      setSelectedItems(new Set(combined.map((p) => p.id))); 
      setSelectAll(true);
    };

    fetchProducts();
  }, []);

  const updateQuantity = (id: string, newQuantity: number) => {
    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)));

    const localCartRaw = localStorage.getItem("cart");
    const localCart: LocalCartItem[] = localCartRaw ? JSON.parse(localCartRaw) : [];

    const updatedCart = localCart.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleSelectItem = (id: string) => {
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }

      setSelectAll(newSet.size === cart.length);

      return newSet;
    });
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(cart.map((item) => item.id)));
    }
    setSelectAll(!selectAll);
  };

  const removeItem = (id: string) => {
    
    setCart((prev) => prev.filter((item) => item.id !== id));

    
    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      newSet.delete(id);
      setSelectAll(newSet.size === cart.length - 1); 
      return newSet;
    });

    
    const localCartRaw = localStorage.getItem("cart");
    const localCart: LocalCartItem[] = localCartRaw ? JSON.parse(localCartRaw) : [];
    const updatedLocalCart = localCart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedLocalCart));
  };

  return (
    <div className="flex gap-x-12 items-start w-full p-10">
      <div className="flex flex-col w-full gap-y-8">
        <Checkbox withText text="Select All" checked={selectAll} onChange={handleSelectAll} />
        {cart.map((product) => (
          <div key={product.id} className="relative flex gap-x-6">
            <Checkbox checked={selectedItems.has(product.id)} onChange={() => toggleSelectItem(product.id)} />
            <CartProductItem
              category={product.category.name}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              max={product.stock}
              value={product.quantity}
              onChange={(value: number) => updateQuantity(product.id, value)}
            />
            <button onClick={() => removeItem(product.id)} className="absolute top-4 right-4 cursor-pointer">
              <TrashcanIcon className="text-danger-500" />
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-col border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md gap-y-6 p-6 w-[500px]">
        <div className="flex flex-col textM font-semibold gap-y-4">
          <span>Total Product</span>
          <div className="flex justify-between textM font-medium text-nowrap">
            Total Product Price ({selectedCount} Item)
            <span className="textL">${subtotal.toFixed(2)}</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-between items-center textM font-semibold">
            Subtotal<span className="heading5 font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <Button style="fill">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
