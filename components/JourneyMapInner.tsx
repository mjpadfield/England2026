"use client";
import { MapContainer, TileLayer, Polyline, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";

type Stop = { name: string; coords: [number, number]; dates: string };

type Props = {
  route: [number, number][];
  stops: Stop[];
  color?: string;
  center?: [number, number];
  zoom?: number;
};

export default function JourneyMapInner({ route, stops, color = "#CF081F", center = [28, -90], zoom = 4 }: Props) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: "100%", width: "100%", background: "#0a0a14" }}
      zoomControl={false}
      scrollWheelZoom={false}
      attributionControl={false}
    >
      <TileLayer url={TILE_URL} />
      <Polyline positions={route} pathOptions={{ color, weight: 2, opacity: 0.8, dashArray: "6 8" }} />
      {stops.map((stop) => (
        <CircleMarker
          key={stop.name}
          center={stop.coords}
          radius={8}
          pathOptions={{ fillColor: color, fillOpacity: 1, color: "#ffffff", weight: 2 }}
        >
          <Tooltip permanent direction="top" offset={[0, -10]} className="journey-tooltip">
            <span style={{ fontWeight: 700, fontSize: "12px", color: "#fff" }}>{stop.name}</span>
            <br />
            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)" }}>{stop.dates}</span>
          </Tooltip>
        </CircleMarker>
      ))}
      <style>{`
        .journey-tooltip { background: rgba(10,10,20,0.9) !important; border: 1px solid rgba(255,255,255,0.15) !important; border-radius: 8px !important; box-shadow: 0 4px 16px rgba(0,0,0,0.6) !important; padding: 6px 10px !important; white-space: nowrap; }
        .journey-tooltip::before { display: none !important; }
      `}</style>
    </MapContainer>
  );
}
