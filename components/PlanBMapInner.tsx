"use client";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { planBRoute, planBStops } from "@/lib/planb-data";

const TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

const allStops = [
  { name: "London Gatwick", coords: [51.508, -0.190] as [number, number], dates: "Depart 26 June" },
  ...planBStops.map((s) => ({ name: s.city, coords: s.coords, dates: s.dates })),
];

export default function PlanBMapInner() {
  return (
    <MapContainer
      center={[42, -72]}
      zoom={4}
      style={{ height: "100%", width: "100%", background: "#0a0a14" }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url={TILE_URL} />

      <Polyline
        positions={planBRoute}
        pathOptions={{ color: "#3b82f6", weight: 2, opacity: 0.7, dashArray: "6 8" }}
      />

      {allStops.map((stop) => (
        <CircleMarker
          key={stop.name}
          center={stop.coords}
          radius={stop.name === "London Gatwick" ? 5 : 8}
          pathOptions={{
            fillColor: stop.name === "London Gatwick" ? "#ffffff" : "#3b82f6",
            fillOpacity: 1,
            color: "#ffffff",
            weight: 2,
          }}
        >
          <Tooltip permanent direction="top" offset={[0, -10]} className="journey-tooltip">
            <span style={{ fontWeight: 700, fontSize: "12px", color: "#fff" }}>{stop.name}</span>
            <br />
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>{stop.dates}</span>
          </Tooltip>
        </CircleMarker>
      ))}

      <style>{`
        .journey-tooltip {
          background: rgba(10,10,20,0.9) !important;
          border: 1px solid rgba(255,255,255,0.15) !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.6) !important;
          padding: 6px 10px !important;
          white-space: nowrap;
        }
        .journey-tooltip::before { display: none !important; }
      `}</style>
    </MapContainer>
  );
}
