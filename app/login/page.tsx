import Button from "@/components/ui/Button";
import { HiddenIcon } from "@/components/icons";
import InputField from "@/components/ui/InputField";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Checkbox from "@/components/ui/Checkbox";

function signInForm() {
  const success = false;
  return (
    <div className="flex flex-col justify-center items-center gap-y-8">
      <Logo size="secondary" />
      <div className="flex flex-col gap-y-8 border border-[var(--color-border-secondary)] bg-[var(--color-tile)] p-6 rounded-md w-[448px]">
        <div className="flex flex-col gap-y-5">
          <span className="heading6 font-medium">Sign in</span>
          <hr className="text-[var(--color-border-secondary)]" />
        </div>

        {success ? (
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6">
              <InputField
                placeholder="Password"
                withLabel
                label="Password"
                typeInput="password"
                withRightIcon
                rightIcon={<HiddenIcon className="text-2xl" />}
              />
              <div className="flex justify-between">
                <Checkbox size="l" withText text="Save password" />
                <Link className="textM font-medium" href={"#"}>
                  Forgot your password?
                </Link>
              </div>
            </div>
            <Button style="fill">Sign in</Button>
          </div>
        ) : (
          <div className="flex flex-col gap-y-8">
            <div>
              <InputField
                withLabel
                label="Email or mobile phone number"
                placeholder="Email or Mobile phone Number"
                typeInput="text"
              />
            </div>
            <div className="flex flex-col w-full gap-y-6">
              <Button style="fill">Continue</Button>
              <span className="textM">
                Don’t have an account?{" "}
                <Link className="font-semibold" href={"/register"}>
                  Register
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default signInForm;
