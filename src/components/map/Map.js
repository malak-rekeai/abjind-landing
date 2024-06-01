import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

// Import icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const locations = [
  { lat: 24.7136, lng: 46.6753, city: "Riyadh" }, // Replace with actual coordinates
  { lat: 21.4858, lng: 39.1925, city: "Jeddah" }, // Replace with actual coordinates
  { lat: 26.4207, lng: 50.0888, city: "Dammam" }  // Replace with actual coordinates
];

const MapSection = () => {
  return (
    <div className="map-section">
      <MapContainer center={[24.7136, 46.6753]} zoom={6} scrollWheelZoom={false} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>
              {location.city}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
