const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1Ijoib21hbGxlazA3IiwiYSI6ImNqYTlzczhxbzBicGkzM3M0YnBwbnh3MzkifQ.umt9h-D_sYz_O2fwXEaOHw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/light-v9' // mapbox has lots of different map styles available.
});

const marker = buildMarker("restaurant", [-87.6354, 41.8885]);

marker.addTo(map);
