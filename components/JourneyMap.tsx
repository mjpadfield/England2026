"use client";
import dynamic from "next/dynamic";

const Inner = dynamic(() => import("./JourneyMapInner"), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center bg-[#0d0d1a]"><span className="text-white/30 text-sm">Loading map…</span></div>,
});

type Stop = { name: string; coords: [number, number]; dates: string };

type Props = {
  route: [number, number][];
  stops: Stop[];
  color?: string;
  center?: [number, number];
  zoom?: number;
};

export default function JourneyMap({ route, stops, color, center, zoom }: Props) {
  return <Inner route={route} stops={stops} color={color} center={center} zoom={zoom} />;
}
