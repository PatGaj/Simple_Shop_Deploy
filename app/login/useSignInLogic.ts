import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useAlert } from "@/hooks/useAlert";

type UseSignInLogicReturn = {
  step: "email" | "password";
  email: string;
  password: string;
  error: string | null;
  showPassword: boolean;
  isEmailValid: boolean;
  canSubmitPassword: boolean;
  handleEmailContinue: () => void;
  handleBackToEmail: () => void;
  handlePasswordChange: (val: string) => void;
  handleEmailChange: (val: string) => void;
  toggleShowPassword: () => void;
  handleSubmit: (event: React.FormEvent) => Promise<void>;
};

export function useSignInLogic(): UseSignInLogicReturn {
  const [step, setStep] = useState<"email" | "password">("email");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();
  const alert = useAlert();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const canSubmitPassword = password.length > 0;

  const handleEmailContinue = useCallback(() => {
    if (!isEmailValid) {
      setError("Please enter a valid email address");
      return;
    }
    setError(null);
    setStep("password");
  }, [email, isEmailValid]);

  const handleBackToEmail = useCallback(() => {
    setStep("email");
    setPassword("");
    setError(null);
  }, []);

  const toggleShowPassword = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleEmailChange = useCallback((val: string) => {
    setEmail(val);
    if (error) setError(null);
  }, [error]);

  const handlePasswordChange = useCallback((val: string) => {
    setPassword(val);
    if (error) setError(null);
  }, [error]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", { redirect: false, email, password });
    if (res?.error) {
      setError("Nieprawidłowy email lub hasło");
    } else {
      alert({ type: "success", message: "Poprawnie zalogowano" });
      router.push("/");
    }
  }, [email, password, router, alert]);

  return {
    step,
    email,
    password,
    error,
    showPassword,
    isEmailValid,
    canSubmitPassword,
    handleEmailContinue,
    handleBackToEmail,
    handleEmailChange,
    handlePasswordChange,
    toggleShowPassword,
    handleSubmit,
  };
}