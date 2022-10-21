import "normalize.css";
import "../styles/styles.scss";

import "./sidebar";
import LeafletMap from "./leafletMap";
import Sidebar from "./sidebar";

const sidebar = new Sidebar(LeafletMap);
LeafletMap.initialize();

window.map = LeafletMap.map;