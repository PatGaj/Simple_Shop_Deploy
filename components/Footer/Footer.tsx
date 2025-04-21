import Logo from "../Logo";
import MenuSection from "./MenuSection";
import PaymentLogo from "./PaymentLogo";

function Footer() {
  return (
    <footer className="flex bg-footer px-[60px] py-[140px] w-full">
      <div id="logo" className="flex flex-col gap-y-[24px] flex-grow basis-0">
        <Logo size="3xl" />
        <p id="copyright" className="text-textColor-secondary">
          © 2023 NexusHub.
          <br />
          All rights reserved.
        </p>
        <div id="payments" className="flex gap-x-[12px]">
          <PaymentLogo imgSrc="Visa.svg" alt="Visa" />
          <PaymentLogo imgSrc="Mastercard.svg" alt="Mastercard" />
          <PaymentLogo imgSrc="Paypal.svg" alt="Paypal" />
          <PaymentLogo imgSrc="ApplePay.svg" alt="ApplePay" />
          <PaymentLogo imgSrc="GPay.svg" alt="GPay" />
        </div>
      </div>
      <div id="menu" className="flex gap-x-2 flex-grow basis-0">
        <MenuSection title="Company" items={["About Us", "Contact", "Partner"]} />
        <MenuSection title="Social" items={["Instagram", "Twitter", "Facebook", "Linkedin"]} />
        <MenuSection title="FAQ" items={["Account", "Deliveries", "Orders", "Payments"]} />
        <MenuSection title="Resources" items={["E-books", "Tutorials", "Course", "Blog"]} />
      </div>
    </footer>
  );
}

export default Footer;
