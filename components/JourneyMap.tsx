"use client";
import dynamic from "next/dynamic";

const JourneyMapInner = dynamic(() => import("./JourneyMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0d0d1a] rounded-2xl">
      <span className="text-white/30 text-sm">Loading map…</span>
    </div>
  ),
});

export default function JourneyMap() {
  return <JourneyMapInner />;
}
