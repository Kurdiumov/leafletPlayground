import "normalize.css";
import "../styles/styles.scss";

import "./sidebar";
import LeafletMap from "./leafletMap";
import Sidebar from "./sidebar";

import * as turf from '@turf/turf'
import "leaflet-draw";

var state = parseQuery(window.location.search) ?? {};

const leafletMap = new LeafletMap(state);
const sidebar = new Sidebar(leafletMap, state.tile);

window.map = leafletMap.map;
window.turf = turf;

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}