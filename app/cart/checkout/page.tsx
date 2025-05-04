import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import PaymentLogo from "@/components/footer/PaymentLogo";
import { ShieldIcon } from "@/components/icons";
import clsx from "clsx";
import ProductInfo from "@/components/cart/ProductInfo";
import Checkbox from "@/components/ui/Checkbox";

function Checkout() {
  const withNote = true;
  const newAddress = true;
  const note = "Siemanko";
  const quantity = 10;
  const total = 10;
  return (
    <div className="flex w-full gap-x-12 p-10">
      <div className="flex flex-col w-full gap-y-10">
        <div className="flex flex-col gap-y-4">
          <span className="heading6 font-medium">Your Order</span>
          <div className="flex flex-col gap-y-6 h-max p-6 bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md">
            <div className="flex items-end justify-between">
              <ProductInfo /> <span className="textL">x{quantity}</span>
            </div>
            {withNote && (
              <div className="flex flex-col gap-y-1">
                Note:
                <textarea
                  disabled
                  className="border border-[var(--color-border-secondary)] w-full rounded-md resize-none p-2"
                >
                  {note}
                </textarea>
              </div>
            )}
            <hr className="text-[var(--color-border-secondary)]" />
            <div>
              <div className="flex justify-between">
                <Checkbox withText text="Product Protection" /> <span>${"1"}</span>
              </div>
              <span className="textS text-[var(--textColor-tertiary)] pl-10">
                The claim process is easy and instant, valid for 6 months
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="heading6 font-medium">Address</span>
          <div className="flex flex-col h-max gap-y-8 p-6 bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md">
            <div className="flex gap-x-1">
              <button
                className={clsx(
                  "w-full cursor-pointer hover:text-[var(--color-secondary)]",
                  newAddress ? "text-[var(--textColor-tertiary)]" : "text-[var(--color-primary)]"
                )}
              >
                Existing Address
                <hr />
              </button>
              <button
                className={clsx(
                  "w-full cursor-pointer hover:text-[var(--color-secondary)]",
                  newAddress ? "text-[var(--color-primary)]" : "text-[var(--textColor-tertiary)]"
                )}
              >
                New Address <hr />
              </button>
            </div>
            {newAddress ? (
              <div className="flex flex-col gap-y-10">
                <div className="flex gap-x-8 justify-between">
                  <div className="w-full flex flex-col gap-y-8">
                    <Dropdown placeholder="Country" className="w-full" options={["1", "2"]} />
                    <Dropdown placeholder="City" className="w-full" options={["1", "2"]} />
                  </div>
                  <div className="w-full flex flex-col gap-y-8">
                    <Dropdown placeholder="Province" className="w-full" options={["1", "2"]} />
                    <Dropdown placeholder="Postal Code" className="w-full" options={["1", "2"]} />
                  </div>
                </div>
                <textarea
                  placeholder="Input Complete Address"
                  className="px-3.5 py-2.5 w-full resize-none bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md"
                />
                <Checkbox withText text="Make it the main address" />
              </div>
            ) : (
              <div className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-4 textM font-medium">
                    Address <Badge text="Main Address" />
                  </div>
                  <span className="textL font-medium">Bangalau Road No 23, RT 4/RW 6, Kinajaya</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-y-2">
                    <span className="textM font-medium">Country</span>
                    <span className="textL font-medium">Indonesia</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="textM font-medium">Province</span>
                    <span className="textL font-medium">Jakarta</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="textM font-medium">City</span>
                    <span className="textL font-medium">Jakarta</span>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="textM font-medium">Postal Code</span>
                    <span className="textL font-medium">12819</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="heading6 font-medium">Shipping</span>
          <div className="flex items-center gap-x-4 h-max p-6 bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md">
            <ShieldIcon className="text-success-500" />
            NexusHub Courier
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="heading6 font-medium">Payment Method</span>
          <div className="flex h-max justify-between p-6 bg-[var(--color-tile)] border border-[var(--color-border-secondary)] rounded-md">
            <div className="flex items-center gap-x-2 border border-[var(--color-border-primary)] rounded-md p-2 hover:border-[var(--color-secondary)] cursor-pointer">
              <PaymentLogo imgSrc="./brands/Visa.svg" alt="Visa" /> Visa
            </div>
            <div className="flex items-center gap-x-2 border border-[var(--color-border-primary)] rounded-md p-2 hover:border-[var(--color-secondary)] cursor-pointer">
              <PaymentLogo imgSrc="./brands/Mastercard.svg" alt="Mastercard" />
              Mastercard
            </div>
            <div className="flex items-center gap-x-2 border border-[var(--color-border-primary)] rounded-md p-2 hover:border-[var(--color-secondary)] cursor-pointer">
              <PaymentLogo imgSrc="./brands/Paypal.svg" alt="Paypal" />
              Paypal
            </div>
            <div className="flex items-center gap-x-2 border border-[var(--color-border-primary)] rounded-md p-2 hover:border-[var(--color-secondary)] cursor-pointer">
              <PaymentLogo imgSrc="./brands/ApplePay.svg" alt="ApplePay" />
              ApplePay
            </div>
            <div className="flex items-center gap-x-2 border border-[var(--color-border-primary)] rounded-md p-2 hover:border-[var(--color-secondary)] cursor-pointer">
              <PaymentLogo imgSrc="./brands/GPay.svg" alt="GPay" />
              GPay
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-max border border-[var(--color-border-secondary)] bg-[var(--color-tile)] rounded-md gap-y-6 p-6 w-[500px]">
        <div className="flex flex-col textM font-semibold gap-y-4">
          <span>Total Product</span>
          <div className="flex justify-between textM font-medium text-nowrap">
            Total Product Price {`(${quantity} Item)`}
            <span className="textL">${total}</span>
          </div>
          <div className="flex justify-between textM font-medium text-nowrap">
            Total Product Protection
            <span className="textL">${total}</span>
          </div>
          <div className="flex justify-between textM font-medium text-nowrap">
            Total Shipping Price
            <span className="textL">${total}</span>
          </div>
          <div className="flex justify-between textM font-medium text-nowrap">
            Shipping Insurance
            <span className="textL">${total}</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col textM font-semibold gap-y-4">
          <span>Transaction Fees</span>
          <div className="flex justify-between textM font-medium text-nowrap">
            Service Fees
            <span className="textL">${total}</span>
          </div>
        </div>
        <hr className="text-[var(--color-border-secondary)]" />
        <div className="flex flex-col gap-y-8">
          <div className="flex justify-between items-center textM font-semibold">
            Grand total<span className="heading5 font-medium">${total}</span>
          </div>
          <Button style="fill">Pay Now</Button>
        </div>
      </div>
    </div>
  );
}
export default Checkout;
