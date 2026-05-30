"use client";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { MapLocation } from "@/lib/data";

const TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const TILE_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>';

const typeConfig: Record<MapLocation["type"], { color: string; emoji: string; radius: number }> = {
  stay:    { color: "#a855f7", emoji: "🏠", radius: 10 },
  stadium: { color: "#CF081F", emoji: "⚽", radius: 12 },
  fanzone: { color: "#10b981", emoji: "🎉", radius: 10 },
  bar:     { color: "#f59e0b", emoji: "🍺", radius: 8 },
};

type Props = {
  center: [number, number];
  zoom: number;
  locations: MapLocation[];
};

export default function CityMapInner({ center, zoom, locations }: Props) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%", background: "#0a0a14" }}
      zoomControl={true}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url={TILE_URL} attribution={TILE_ATTR} />

      {locations.map((loc, i) => {
        const cfg = typeConfig[loc.type];
        return (
          <CircleMarker
            key={i}
            center={[loc.lat, loc.lng]}
            radius={cfg.radius}
            pathOptions={{
              fillColor: cfg.color,
              fillOpacity: 0.9,
              color: "#ffffff",
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -12]} className="city-tooltip">
              <span style={{ fontWeight: 700, fontSize: "12px", color: "#fff" }}>
                {cfg.emoji} {loc.name}
              </span>
              {loc.address && (
                <>
                  <br />
                  <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>
                    {loc.address}
                  </span>
                </>
              )}
            </Tooltip>
          </CircleMarker>
        );
      })}

      <style>{`
        .city-tooltip {
          background: rgba(10,10,20,0.95) !important;
          border: 1px solid rgba(255,255,255,0.15) !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.6) !important;
          padding: 6px 10px !important;
          white-space: nowrap;
        }
        .city-tooltip::before { display: none !important; }
        .leaflet-control-zoom a {
          background: rgba(10,10,20,0.9) !important;
          color: white !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
      `}</style>
    </MapContainer>
  );
}
