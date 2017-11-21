const mapboxgl = require('mapbox-gl');

let buildMarker = function(type, coord) {
  let markerType;
  if (type === 'activity') {
    markerType = domMaker("url(http://i.imgur.com/WbMOfMl.png)");
  } else if (type === 'restaurant') {
    markerType = domMaker("url(http://i.imgur.com/cqR6pUI.png)");
  } else if (type === 'hotel') {
    markerType = domMaker("url(http://i.imgur.com/D9574Cu.png)");
  }
  return new mapboxgl.Marker(markerType).setLngLat(coord);
}


function domMaker(url){
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = url;
  return markerDomEl;
}

module.exports = buildMarker;
