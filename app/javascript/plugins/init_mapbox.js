import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";

const createElement = (marker) => {
  const element = document.createElement("div");
  element.className = "marker";
  element.style.backgroundImage = `url('${marker.image_url}')`;
  element.style.backgroundSize = "contain";
  element.style.width = "25px";
  element.style.height = "25px";
  return element;
}

const addMapToMarkers = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);
    new mapboxgl.Marker(createElement(marker))
    .setLngLat([marker.lng, marker.lat])
    .setPopup(popup)
    .addTo(map);
  });
}

const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach((marker) => bounds.extend([marker.lng, marker.lat]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};

const initMapbox = () => {
  const mapElement = document.getElementById("map");

  if (mapElement) {
    // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/syrashid11/ckiyj9gw44r5d19nauhw177w8",
    });

    const markers = JSON.parse(mapElement.dataset.markers);

    addMapToMarkers(map, markers);

    fitMapToMarkers(map, markers);

    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
      );
    }
  };

  export { initMapbox };
