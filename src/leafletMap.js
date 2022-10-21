import "../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";

class LeafletMap {
  constructor() {
    this.map = L.map("map", {
      attributionControl: false,
      zoomControl: false
    }).setView([51.04333, -114.078765], 12);
  }

  initialize() {
    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19
      }
    );

    tiles.addTo(this.map);
  }

  setLocateMe(lat, lon) {
    this._renderLocateMeCircle(lat, lon);

    const zoomLevel = 15;
    this.map.setView({ lat: lat, lon: lon }, zoomLevel);
  }

  _renderLocateMeCircle(lat, lon) {
    if (this.locateMeCircle) {
      this.locateMeCircle.remove();
    }

    this.locateMeCircle = L.circle([lat, lon], {
      color: "#29b6f6",
      fillColor: "#29b6f6",
      fillOpacity: 0.5,
      radius: 50
    }).addTo(this.map);
  }
}

export default new LeafletMap();
