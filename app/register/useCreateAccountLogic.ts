"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAlert } from "@/hooks/useAlert";

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(9, { message: "Phone number is too short" }),
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "At least one uppercase")
      .regex(/[a-z]/, "At least one lowercase")
      .regex(/[0-9]/, "At least one number"),
    confirmPassword: z.string(),
    country: z.string().nonempty("Select a country"),
    firstName: z.string().min(1, "First name is required"),
    terms: z.boolean().refine((val) => val === true, { message: "You must accept the terms" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof schema>;

export function useCreateAccountLogic() {
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const alert = useAlert();

  const form = useForm<FormData>({ resolver: zodResolver(schema) });
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: FormData) => {
    const { ...sanitized } = data;
    try {
      const res = await fetch(`${process.env.NEXTAUTH_URL || ''}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitized),
      });
      if (res.ok) {
        setSuccess(true);
        reset();
        alert({ type: "success", message: "Account created successfully!" });
      } else {
        const error = await res.json();
        alert({
          type: "danger",
          message: error.errors?.email?._errors?.[0] || error.message || "Registration failed",
        });
      }
    } catch (e) {
      console.error(e);
      alert({ type: "danger", message: "Registration failed" });
    }
  };

  const submitHandler = handleSubmit(onSubmit);

  const handleCountryChange = (val: string) => {
    setValue("country", val);
    trigger("country");
  };
  const handleTermsChange = (checked: boolean) => {
    setValue("terms", checked);
    trigger("terms");
  };

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const toggleShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

  return {
    success,
    showPassword,
    toggleShowPassword,
    showConfirmPassword,
    toggleShowConfirmPassword,
    register,
    submitHandler,
    errors,
    isSubmitting,
    watch,
    handleCountryChange,
    handleTermsChange,
  } as const;
}
