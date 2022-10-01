import React from "react";
import Navbar from "./Navbar";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  return (
    <div>
      <Navbar />
      <MapContainer className="map" center={[9, 38]} zoom={6} maxZoom={18}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[9, 42]} />
        <Marker position={[10, 37]} />
        <Marker position={[11, 40]} />
      </MapContainer>
    </div>
  );
};

export default Map;
