export default class Sidebar {
  constructor(map) {
    this.map = map;
    this.initializeLocationBtn();
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
}
