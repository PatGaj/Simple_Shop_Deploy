import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type LocalCheckoutItem = { id: string; quantity: number; note?: string };

type ProductFromAPI = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  category: { name: string };
};

export type CheckoutItem = ProductFromAPI & { quantity: number; note?: string };

const SHIPPING_PRICE = 5;
const SHIPPING_INSURANCE = 6;
const SERVICE_FEE = 0.5;

export function useCheckoutLogic() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [items, setItems] = useState<CheckoutItem[]>([]);
  const [protections, setProtections] = useState<Record<number, boolean>>({});
  const [address, setAddress] = useState<string>("");
  const [makeMain, setMakeMain] = useState<boolean>(false);

  useEffect(() => {
    const raw = localStorage.getItem("checkoutCart") || "[]";
    let localItems: LocalCheckoutItem[] = [];
    try { localItems = JSON.parse(raw); } catch {}
    if (localItems.length === 0) {
      router.replace("/cart");
      return;
    }
    (async () => {
      const ids = localItems.map(li => parseInt(li.id, 10)).filter(n => !isNaN(n));
      const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ids),
      });
      const prods: ProductFromAPI[] = await res.json();
      const combined: CheckoutItem[] = prods.map(p => {
        const local = localItems.find(li => parseInt(li.id, 10) === p.id)!;
        return { ...p, quantity: local.quantity, note: local.note };
      });
      setItems(combined);
      const initProt: Record<number, boolean> = {};
      combined.forEach(p => { initProt[p.id] = false; });
      setProtections(initProt);
    })();
  }, [router]);

  const toggleProtection = useCallback((id: number) => {
    setProtections(prev => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const totalProductPrice = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items]
  );

  const totalProtection = useMemo(
    () => Object.values(protections).filter(Boolean).length,
    [protections]
  );

  const grandTotal = useMemo(
    () => totalProductPrice + totalProtection + SHIPPING_PRICE + SHIPPING_INSURANCE + SERVICE_FEE,
    [totalProductPrice, totalProtection]
  );

  const handlePay = useCallback(async () => {
    if (makeMain && address.trim()) {
      await fetch(`${process.env.NEXTAUTH_URL || ''}/api/user/address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...parseAddress(address), makeMain }),
      });
    }
    const userId = session?.user?.id;
    await fetch(`${process.env.NEXTAUTH_URL || ''}/api/success`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(userId),
        address,
        totalAmount: grandTotal,
        items: items.map(i => ({ productId: i.id, quantity: i.quantity, note: i.note, protection: protections[i.id] })),
      }),
    });
    router.push("/checkout/success");
  }, [address, makeMain, items, protections, grandTotal, router, session]);

  return {
    status,
    items,
    protections,
    address,
    setAddress,
    makeMain,
    setMakeMain,
    toggleProtection,
    totalProductPrice,
    totalProtection,
    grandTotal,
    handlePay,
  } as const;
}

function parseAddress(full: string) {
  const parts = full.split(",").map(s => s.trim());
  return {
    country: parts[0] || "",
    province: parts[1] || "",
    city: parts[2] || "",
    postalCode: parts[3] || "",
  };
}