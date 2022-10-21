import "normalize.css";
import "../styles/styles.scss";

import "./sidebar";
import LeafletMap from "./leafletMap";


LeafletMap.Initialize();

window.map = LeafletMap.map;