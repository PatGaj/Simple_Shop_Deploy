import { useState, useEffect, useCallback } from "react";

export type CartItem = {
  id: string;
  quantity: number;
  note: string;
  cardAdd?: boolean;
  addition?: boolean;
  stock?: number;
};

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart") || "[]";
    try {
      setCart(JSON.parse(raw));
    } catch {
      setCart([]);
    }
  }, []);

  const sync = useCallback((newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }, []);

  const addToCart = useCallback(
    (id: string, quantity = 1, stock: number, cardAdd?: boolean, addition?: boolean) => {
      const raw = localStorage.getItem("cart") || "[]";
      let current: CartItem[];
      try {
        current = JSON.parse(raw);
      } catch {
        current = [];
      }

      const idx = current.findIndex((item) => item.id === id);
      if (idx > -1) {
        if (!(cardAdd && current[idx].quantity >= 1)) {
          if (addition) {
            if (current[idx].quantity + quantity <= stock) {
              current[idx].quantity += quantity;
            }
          } else {
            current[idx].quantity = quantity;
          }
        }
      } else {
        current.push({ id, quantity, note: "" });
      }

      sync([...current]);
    },
    [sync]
  );

  const updateQuantity = useCallback(
    (id: string, quantity: number) => {
      const raw = localStorage.getItem("cart") || "[]";
      let current: CartItem[];
      try {
        current = JSON.parse(raw);
      } catch {
        current = [];
      }

      const updated = current.map((item) => (item.id === id ? { ...item, quantity } : item));
      sync(updated);
    },
    [sync]
  );

  const updateNote = useCallback(
    (id: string, note: string) => {
      const raw = localStorage.getItem("cart") || "[]";
      let current: CartItem[];
      try {
        current = JSON.parse(raw);
      } catch {
        current = [];
      }

      const updated = current.map((item) => (item.id === id ? { ...item, note } : item));
      sync(updated);
    },
    [sync]
  );

  const removeItem = useCallback(
    (id: string) => {
      const raw = localStorage.getItem("cart") || "[]";
      let current: CartItem[];
      try {
        current = JSON.parse(raw);
      } catch {
        current = [];
      }

      const updated = current.filter((item) => item.id !== id);
      sync(updated);
    },
    [sync]
  );

  return {
    cart,
    addToCart,
    updateQuantity,
    updateNote,
    removeItem,
  };
}
