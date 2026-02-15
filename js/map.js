// js/map.js
import { LOCATIONS } from "./data.js";

let map;
let markers = new Map();

// ===== INIT MAP =====
export function initMap() {
  // Center roughly around campus
  map = L.map("map").setView([16.4955, 80.4985], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  plotMarkers(LOCATIONS);
}

// ===== PLOT MARKERS =====
export function plotMarkers(locations) {
  // clear old markers
  markers.forEach(marker => map.removeLayer(marker));
  markers.clear();

  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng]).addTo(map);

    marker.on("click", () => {
      // tell app.js which location was clicked
      window.dispatchEvent(
        new CustomEvent("markerClick", { detail: loc })
      );
    });

    markers.set(loc.id, marker);
  });
}

// ===== ZOOM TO LOCATION =====
export function zoomToLocation(loc) {
  if (!map) return;

  map.setView([loc.lat, loc.lng], 18);

  const marker = markers.get(loc.id);
  if (marker) {
    marker.openPopup?.();
  }
}
