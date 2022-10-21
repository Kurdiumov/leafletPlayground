import tileServiceProviders from "./TileServiceProviders";

export default class Sidebar {
  constructor(map) {
    this.map = map;
    this.initializeLocationBtn();
    this.initializeDropDown();
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

  initializeDropDown() {
    const tileServiceSelect = document.getElementById("tileServiceSelect");

    for (const key in tileServiceProviders) {
      const option = document.createElement("option");
      option.value = key;
      option.innerHTML = tileServiceProviders[key].name;

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
