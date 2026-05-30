"use client";
import dynamic from "next/dynamic";

const PlanBMapInner = dynamic(() => import("./PlanBMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0d0d1a]">
      <span className="text-white/30 text-sm">Loading map…</span>
    </div>
  ),
});

export default function PlanBMap() {
  return <PlanBMapInner />;
}
