import tileServiceProviders from "./TileServiceProviders";

export default class Sidebar {
  constructor(map, tileService) {
    this.map = map;
    this.initializeLocationBtn();
    this.initializeDropDown(tileService);

    document.getElementById("shareMap").onclick = () => {
      const mapCenter = this.map.map.getCenter();
      const mapZoomLevel = this.map.map.getZoom();
      const selectedTileLayer = document.getElementById("tileServiceSelect").value;

      var newUrl = `${window.location.origin}?mapCenter=${mapCenter.lat},${mapCenter.lng}&zoom=${mapZoomLevel}&tile=${selectedTileLayer}`;

      window.open(newUrl, '_blank');
    };
  }

  initializeLocationBtn() {
    document.getElementById("locateMeBtn").onclick = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          this.map.setLocateMe(lat, lon);
        },
        () => {
          console.error("Could not retrieve current position");
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    };
  }

  initializeDropDown(tileService) {
    const tileServiceSelect = document.getElementById("tileServiceSelect");

    for (const key in tileServiceProviders) {
      const option = document.createElement("option");
      option.value = key;
      option.innerHTML = tileServiceProviders[key].name;

      if (tileService === key) {
        option.selected = "selected";
      }

      tileServiceSelect.appendChild(option);
    }

    const instances = M.FormSelect.init(tileServiceSelect, {
      closeOnClick: true,
      hover: true
    });

    tileServiceSelect.onchange = () => {
      const newValue = document.getElementById("tileServiceSelect").value;

      this.map.setNewTileService(newValue);
    };
  }
}
