import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import GeoCoderMarker from "./GeoCoderMarker";
import "../css/Map.css";
const Map = ({ address, city, country }) => {
  return (
    <MapContainer
      center={[16.047079, 108.20623]}
      zoom={12}
      scrollWheelZoom={false}
      style={{
        height: "40vh",
        width: "100%",
        marginTop: "20px",
        zIndex: 0,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  );
};

export default Map;
