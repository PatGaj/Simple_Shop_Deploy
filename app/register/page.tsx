"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { ConfirmIcon, HiddenIcon } from "@/components/icons";
import InputField from "@/components/ui/InputField";
import Logo from "@/components/ui/Logo";
import Checkbox from "@/components/ui/Checkbox";


const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(6, { message: "Phone number is too short" }),
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "At least one uppercase")
      .regex(/[a-z]/, "At least one lowercase")
      .regex(/[0-9]/, "At least one number"),
    confirmPassword: z.string(),
    country: z.string().nonempty("Select a country"),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function CreateAccount() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess(true);
    } else {
      const error = await res.json();
      alert(error.message || "Registration failed");
    }
  };

  return (
    <>
      {success ? (
        <div className="flex flex-col gap-y-10 my-20 items-center">
          <ConfirmIcon className="display1 text-success-500" />
          <div className="flex flex-col gap-y-4 items-center">
            <span className="heading1 font-bold">Thank you!</span>
            <span className="heading6 font-medium">You have successfully registered</span>
            <span className="textL text-[var(--textColor-secondary)] text-center max-w-md">
              Please check your e-mail for further information. Let’s explore our products and enjoy many gifts.
            </span>
            <span className="textL">
              Having problems? <span className="text-[var(--color-primary)] ml-1">Contact us</span>
            </span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-8 items-center my-20 max-w-md w-full">
          <Logo size="secondary" />
          <div className="flex flex-col gap-y-8 p-6 border border-[var(--color-border-primary)] rounded-md bg-[var(--color-tile)] w-full">
            <div>
              <p className="text-2xl font-medium">Create Account</p>
              <hr className="text-[var(--color-border-primary)] mt-5" />
            </div>

            <form className="flex flex-col gap-y-6" onSubmit={handleSubmit(onSubmit)}>
              <InputField
                withLabel
                label="Email"
                typeInput="email"
                placeholder="Your Email"
                {...register("email")}
                errorMessage={errors.email?.message}
              />

              <InputField
                withLabel
                label="Mobile Number"
                typeInput="text"
                placeholder="Mobile Number"
                {...register("phone")}
                errorMessage={errors.phone?.message}
              />

              <InputField
                withLabel
                label="Password"
                typeInput="password"
                placeholder="Password"
                withRightIcon
                rightIcon={<HiddenIcon className="text-2xl" />}
                {...register("password")}
                errorMessage={errors.password?.message}
                withSupportText
                supportText="At least 8 chars, 1 uppercase, 1 lowercase, 1 number"
              />

              <InputField
                withLabel
                label="Confirm Password"
                typeInput="password"
                placeholder="Confirm Password"
                withRightIcon
                rightIcon={<HiddenIcon className="text-2xl" />}
                {...register("confirmPassword")}
                errorMessage={errors.confirmPassword?.message}
              />

              <div className="flex flex-col gap-y-4 textL font-medium">
                Country or region
                <Dropdown
                  placeholder="Country or region"
                  options={["Indonesia", "Poland", "USA"]}
                  className="w-full"
                  onChange={(val) => setValue("country", val)}
                />
                {errors.country && <p className="text-error text-sm">{errors.country.message}</p>}
              </div>

              <div className="flex gap-x-4 items-start">
                <Checkbox checked={watch("terms")} onChange={(val) => setValue("terms", Boolean(val))} />
                <p className="text-sm">
                  By creating an account and checking, you agree to the{" "}
                  <span className="text-[var(--color-primary)]">Conditions of Use</span> and{" "}
                  <span className="text-[var(--color-primary)]">Privacy Notice.</span>
                </p>
              </div>
              {errors.terms && <p className="text-error text-sm">{errors.terms.message}</p>}

              <Button style="fill" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Creating..." : "Create Account"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
