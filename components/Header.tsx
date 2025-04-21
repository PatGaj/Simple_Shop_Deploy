"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import Button from "./Button";

const Header = () => {
  const { data: session, status } = useSession();
  return (
    <header className="flex flex-col gap-y-10 px-10 py-8">
      <div className="flex justify-between items-center">
        <Logo size="4xl" />
        {status === "loading" ? null : session ? (
          <div className="flex gap-x-7">
            <img src="cart.svg" alt="Cart" />
            <Avatar />
          </div>
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
      {status === "loading" ? null : session ? (
        <nav className="flex gap-x-12">
          <Link href="/">Home</Link>
          <Link href="/products">Product</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
      ) : (
        <></>
      )}

      <hr className="text-payment-border" />
    </header>
  );
};

export default Header;
