import "normalize.css";
import "../styles/styles.scss";

import "./sidebar";
import LeafletMap from "./leafletMap";
import Sidebar from "./sidebar";

import * as turf from '@turf/turf'

const sidebar = new Sidebar(LeafletMap);
LeafletMap.initialize();

window.map = LeafletMap.map;
window.turf = turf;