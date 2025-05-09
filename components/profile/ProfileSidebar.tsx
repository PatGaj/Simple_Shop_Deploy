"use client";

import React from "react";
import Avatar from "@/components/ui/Avatar";
import {signOut } from "next-auth/react";

export type ProfileSidebarProps = {
  firstName: string;
  email: string;
};

export default function ProfileSidebar({ firstName, email }: ProfileSidebarProps) {
  return (
    <div className="flex flex-col gap-y-6 h-max border border-[var(--color-border-secondary)] rounded-md p-6 w-[320px] bg-[var(--color-tile)]">
      <div className="flex gap-x-6 items-center">
        <Avatar />
        <div className="flex flex-col gap-y-1">
          <span className="textM font-medium">{firstName}</span>
          <span className="textS text-[var(--textColor-secondary)]">{email}</span>
        </div>
      </div>
      <hr className="text-[var(--color-border-secondary)]" />
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="w-max text-[var(--color-primary)]"
      >
        Logout
      </button>
    </div>
  );
}
