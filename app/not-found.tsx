"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Unfortunately, the page you are looking for could not be found.</p>
      <Link href="/" className="text-blue-600 hover:underline">
        Return to the main page
      </Link>
    </div>
  );
}
