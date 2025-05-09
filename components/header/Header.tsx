"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Avatar from "../ui/Avatar";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { CartIcon } from "../icons";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const isLoading = status === "loading";
  const isLoggedIn = !!session?.user;

  return (
    <header className="flex flex-col gap-y-10 px-10 py-8 max-w-[1440px] mx-auto w-full">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Logo size="primary" />
        </Link>

        {isLoading ? null : isLoggedIn ? (
          <div className="flex items-center gap-x-7">
            <button onClick={() => router.push("/cart")} className="cursor-pointer" aria-label="Go to cart">
              <CartIcon className="text-[var(--textColor-primary)]" />
            </button>
            <Link href="/profile">
              <Avatar />
            </Link>
          </div>
        ) : (
          <Button onClick={() => router.push("/login")} buttonStyle="fill">
            Sign in
          </Button>
        )}
      </div>

      {isLoggedIn && (
        <>
          <nav className="flex gap-x-12 textM">
            <Link href="/" className={pathname === "/" ? "text-primary-500 font-medium" : ""}>
              Home
            </Link>
            <Link href="/products" className={pathname === "/products" ? "text-primary-500 font-medium" : ""}>
              Products
            </Link>
          </nav>
        </>
      )}
      <hr className="text-[var(--color-border-secondary)]" />
    </header>
  );
};

export default Header;
