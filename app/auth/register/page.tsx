import Button from "@/components/Button";
import CheckboxForm from "@/components/Form/CheckboxForm";
import InputForm from "@/components/Form/InputForm";
import SelectForm from "@/components/Form/SelectForm";
import Logo from "@/components/Logo";

export default function Register() {
  const options: string[] = ["Poland", "USA", "RPA"];
  return (
    <div className="flex flex-col gap-y-8 items-center my-20 max-w-md">
      <Logo size="4xl" />
      <div className="flex flex-col gap-y-8 p-6 border border-payment-border rounded-md bg-tile">
        <div>
          <p className="text-2xl font-medium">Create Account</p>
          <hr className="text-payment-border mt-5" />
        </div>

        <form className="flex flex-col gap-y-6">
          <InputForm label="Email" placeholder="Your Email" type="email" />
          <InputForm label="Mobile Number" placeholder="Mobile Number" type="tel" />
          <InputForm label="Password" placeholder="Password" type="password" />
          <InputForm label="Confirm Password" placeholder="Confirm Password" type="password" />
          <SelectForm label="Country or region" options={options} />
          <div className="flex gap-x-4">
            <CheckboxForm />
            <p>
              By creating an account and check, you agree to the{" "}
              <span className="text-logo-primary">Conditions of Use</span> and{" "}
              <span className="text-logo-primary">Privacy Notice.</span>
            </p>
          </div>

          <Button>Create Account</Button>
        </form>
      </div>
    </div>
  );
}
