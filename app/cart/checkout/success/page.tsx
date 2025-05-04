import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ConfirmIcon } from "@/components/icons";
import ProductInfo from "@/components/cart/ProductInfo";

function SuccessCheckout() {
  const total = 10;
  return (
    <div className="flex flex-col gap-y-6 p-6 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md w-[640px] mt-10">
      <div className="flex justify-center items-center flex-col gap-y-6">
        <ConfirmIcon className="text-success-500 display2" />
        <span className="heading5 font-medium">Thanks for Your Order!</span>
      </div>
      <div className="textM font-medium text-center">INV/208421205/TSR/3385-B54</div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-4">
          <span className="textL font-medium">Transaction Date</span>
          <span className="textM font-medium tex-[var(--textColor-secondary)]">Wednesday, August 9, 2023</span>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-4">
          <span className="textL font-medium">Payment Method</span>
          <span className="textM font-medium tex-[var(--textColor-secondary)]">Apple Pay</span>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-4">
          <span className="textL font-medium">Shipping Method</span>
          <span className="textM font-medium tex-[var(--textColor-secondary)]">NexusHub Courier</span>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-4">
          <span className="textL font-medium">Your Order</span>
          <div className=" flex justify-between items-end border border-[var(--color-border-secondary)] rounded-md p-4">
            <ProductInfo />
            <span className="textM font-medium">x{total}</span>
          </div>
          <div className="flex justify-between">
            <span className="textM font-medium">Total Product Price ({total} Item)</span>
            <span className="textL font-medium">$259.9</span>
          </div>
          <div className="flex justify-between">
            <span className="textM font-medium">Total Product Protection</span>
            <span className="textL font-medium">$1</span>
          </div>
          <div className="flex justify-between">
            <span className="textM font-medium">Total Shipping Price</span>
            <span className="textL font-medium">$5</span>
          </div>
          <div className="flex justify-between">
            <span className="textM font-medium">Shipping Insurance</span>
            <span className="textL font-medium">$6</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-4">
          <span className="textL font-medium">Transaction Fees</span>
          <div className="flex justify-between">
            <span className="textM font-medium">Service Fees</span>
            <span className="textL font-medium">$0.5</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex justify-between items-center">
          <span className="textM font-medium">Grand total</span>
          <span className="heading5 font-medium">$272.4</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="textM font-medium">Status</span>
          <Badge type="success" size="m" text="Success" />
        </div>
        <Button style="fill">Continue Shopping</Button>
      </div>
    </div>
  );
}
export default SuccessCheckout;
