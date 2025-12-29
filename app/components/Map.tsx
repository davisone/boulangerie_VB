"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix pour les icônes par défaut de Leaflet
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function Map() {
  // Coordonnées de la boulangerie (1 Rue du Centre, 35310 Chavagne)
  const position: [number, number] = [48.0528, -1.7644];

  useEffect(() => {
    // Fix pour le problème des tiles Leaflet avec Next.js
    if (typeof window !== "undefined") {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    }
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%", minHeight: "500px", borderRadius: "1rem" }}
      className="rounded-2xl shadow-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          <div className="text-center">
            <strong className="text-lg">Boulangerie Vanessa & Baptiste</strong>
            <br />
            <span className="text-sm">1 Rue du Centre, 35310 Chavagne</span>
            <br />
            <a
              href="https://www.openstreetmap.org/?mlat=48.0528&mlon=-1.7644#map=15/48.0528/-1.7644"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              Ouvrir dans OpenStreetMap
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}