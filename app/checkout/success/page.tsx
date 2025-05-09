"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import SuccessHeader from "@/components/success/SuccessHeader";
import TransactionDetails from "@/components/success/TransactionDetails";
import OrderList from "@/components/success/OrderList";
import SummaryDetails from "@/components/success/SummaryDetails";
import { useSuccessLogic } from "./useSuccessLogic";

export default function CheckoutSuccessPage() {
  const {
    status,
    invoiceNumber,
    transactionDate,
    paymentMethod,
    shippingMethod,
    items,
    totals,
  } = useSuccessLogic();
  const router = useRouter();

  if (status === "loading") {
    return <div>Weryfikuję sesję…</div>;
  }
  if (status === "unauthenticated") {
    return <div>Musisz być zalogowany, żeby zobaczyć sukces zamówienia.</div>;
  }
  if (!totals) {
    return <div>Loading your order…</div>;
  }

  return (
    <div className="flex flex-col gap-y-6 p-6 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md w-[640px] mt-10">
      <SuccessHeader />
      <TransactionDetails
        invoiceNumber={invoiceNumber}
        transactionDate={transactionDate}
        paymentMethod={paymentMethod}
        shippingMethod={shippingMethod}
      />
      <OrderList items={items} />
      <SummaryDetails totals={totals} />
      <Button buttonStyle="fill" onClick={() => router.push("/")}>Continue Shopping</Button>
    </div>
  );
}
