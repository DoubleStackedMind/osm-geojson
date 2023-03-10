import React from 'react';
import './map.css';
import { MapContainer, TileLayer } from 'react-leaflet'
import L from "leaflet";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { GeolocationBox } from '../geolocation box/geolocation';


export const MapComponent: React.FC = ({
}) => {

    let DefaultIcon = L.icon({
        iconUrl: icon,
        shadowUrl: iconShadow
    });

    L.Marker.prototype.options.icon = DefaultIcon;
    return (
        <MapContainer style={{ position: 'relative', width: "100%", height: "100vh" }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeolocationBox />
        </MapContainer>
    );
};
