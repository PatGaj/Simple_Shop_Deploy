"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Avatar from "../ui/Avatar";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { CartIcon } from "../icons";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <header className="flex flex-col gap-y-10 px-10 py-8 max-w-[1440px] mx-auto w-full">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Logo size="primary" />
        </Link>
        {status === "loading" ? null : session ? (
          <div className="flex items-center gap-x-7">
            <button onClick={() => router.push("/cart")}>
              <CartIcon className="text-[var(--textColor-primary)]" />
            </button>

            <Avatar />
          </div>
        ) : (
          <Button onClick={() => router.push("/login")} style="fill">
            Sign In
          </Button>
        )}
      </div>
      {status !== "loading" && session && (
        <nav className="flex gap-x-12 textM">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
        </nav>
      )}

      <hr className="text-[var(--color-border-secondary)]" />
    </header>
  );
};

export default Header;
