"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Import from next/navigation

const ShimmerButton: React.FC = () => {
  const router = useRouter(); // Initialize router

  return (
    <button
      onClick={() => router.push("/pages/I-AM-COGITO")}
      className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110"
    >
      Get Started
    </button>
  );
};

export default ShimmerButton;
