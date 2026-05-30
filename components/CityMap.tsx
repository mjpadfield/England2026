"use client";
import dynamic from "next/dynamic";
import type { MapLocation } from "@/lib/data";

const CityMapInner = dynamic(() => import("./CityMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0d0d1a]">
      <span className="text-white/30 text-sm">Loading map…</span>
    </div>
  ),
});

type Props = {
  center: [number, number];
  zoom: number;
  locations: MapLocation[];
};

export default function CityMap({ center, zoom, locations }: Props) {
  return <CityMapInner center={center} zoom={zoom} locations={locations} />;
}
