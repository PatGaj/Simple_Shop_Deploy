function PaymentLogo({ imgSrc, alt }: { imgSrc: string; alt: string }) {
  return (
    <div className="bg-white border border-payment-border w-12 rounded-md p-1.5 flex items-center justify-center">
      <img src={"/" + imgSrc} alt={alt} className="h-full object-contain" />
    </div>
  );
}

export default PaymentLogo;
