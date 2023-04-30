import React from "react";
import MapComponent from "../components/MapComponent";
import 'leaflet/dist/leaflet.css';

function MapSection() {
  return (
    <section className="h-[70vh] w-[100vw]">
      <MapComponent />
    </section>
  );
}

export default MapSection;
