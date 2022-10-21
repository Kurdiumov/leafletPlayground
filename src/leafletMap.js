import "../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import tileServiceProviders from "./TileServiceProviders";

class LeafletMap {
  tileServices = tileServiceProviders;

  constructor() {
    const calgaryCoords = [51.04333, -114.078765];

    this.map = L.map("map", {
      attributionControl: false,
      zoomControl: false
    }).setView(calgaryCoords, 12);
  }

  initialize() {
    this.setNewTileService("google");
  }

  setNewTileService(key) {
    this.tiles?.remove();

    this.tiles = L.tileLayer(this.tileServices[key].url, {
      maxZoom: 19
    });

    this.tiles.addTo(this.map);
  }

  setLocateMe(lat, lon) {
    this._renderLocateMeCircle(lat, lon);

    const zoomLevel = 15;
    this.map.flyTo([lat, lon], zoomLevel, {
      animate: true,
      duration: 2
    });
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
