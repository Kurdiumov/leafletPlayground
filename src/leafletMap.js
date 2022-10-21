import "../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";

class LeafletMap {
  constructor() {
    this.map = L.map("map", {
      attributionControl: false,
      zoomControl: false
    }).setView([51.04333, -114.078765], 12);
  }

  Initialize() {
    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19
      }
    );

    tiles.addTo(this.map);
  }
}

export default new LeafletMap();
