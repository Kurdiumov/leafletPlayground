import TileServiceProvider from "./TileServiceProvider";

export default {
    osm: new TileServiceProvider(
      "Open Street Map",
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
    ),
    otp: new TileServiceProvider(
      "Open Topo Map",
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
    ),
    esri: new TileServiceProvider(
      "ESRI",
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    )
  };