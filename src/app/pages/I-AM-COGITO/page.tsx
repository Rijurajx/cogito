"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { TextGenerateEffectBlock } from "@/app/components/blocks/text-generate-block";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showButtons, setShowButtons] = useState(false);
  const router = useRouter();

  const handleVideoEnd = () => {
    setShowButtons(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = async () => {
        try {
            await video.play();
            video.muted = false;
          } catch {
            console.error("Autoplay blocked: User interaction needed.");
            video.muted = true;
          }
          
      };

      playVideo();
      video.onended = handleVideoEnd; // Attach the event when video first loads
    }
  }, []);

  const handleReplay = () => {
    setShowButtons(false);
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play();
      video.onended = handleVideoEnd; // Rebind the onended event
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {!showButtons ? (
        <video
        ref={videoRef}
        src="/assets/aivid.mp4"
        className="max-w-full max-h-full w-auto h-auto object-contain"
        autoPlay
        playsInline
        controls
      />
      
      ) : (
        <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Centered Text with Padding */}
        <div className="max-w-3xl w-full py-4">
          <TextGenerateEffectBlock />
        </div>
      
        {/* Buttons Section (Horizontally Aligned) */}
        <div className="flex space-x-6 mt-6">
          <button
            onClick={handleReplay}
            className="w-24 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Replay
            </span>
          </button>
      
          <button
            onClick={() => router.push("/")}
            className="w-24 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Go back
            </span>
          </button>
      
          <button
            onClick={() => router.push("/")}
            className="w-24 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Proceed
            </span>
          </button>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Page;
