import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";

function MapComponent() {
  const { loading, result, isError } = useSelector(state => state?.ipReducer || {});
  if (loading) {
    return <></>;
  }
  if (isError) {
    return <></>;
  }
  return (
    <MapContainer center={result?.location ? [result?.location?.lat, result?.location?.lng] : [51.505, -0.09]} zoom={13} zoomControl={false}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={result?.location ? [result?.location?.lat, result?.location?.lng] : [51.505, -0.09]}>
        <Popup>Target location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default MapComponent;
