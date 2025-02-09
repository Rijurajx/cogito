"use client";
import React from "react";
import { Spotlight } from "../ui/spotlight-new";
import ShimmerButton from "./shimmer-button";

export function SpotlightBlock() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden px-4">
      <Spotlight />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Cogito <br />{" "}
          <p className="pt-6 text-3xl">Smart Automation for Your Workflow</p>
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg mx-auto">
          Cogito integrates with your system to automate tasks, manage databases, transcribe videos, and run custom tools—enhancing efficiency effortlessly.
        </p>

        {/* CTA Button Centered */}
        <div className="mt-6 flex justify-center">
          <ShimmerButton />
        </div>
      </div>
    </div>
  );
}
