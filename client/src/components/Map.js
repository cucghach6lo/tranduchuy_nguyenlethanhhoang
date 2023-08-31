import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "./GeoCoderMarker";
import "../css/Map.css";
const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      center={[21.0285, 105.8542]}
      zoom={2}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
