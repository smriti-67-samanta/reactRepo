import React from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const CustomMapContainer = ({ center, markers, route }) => {
  return (
    <LeafletMapContainer 
      center={center} 
      zoom={13} 
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      
    
      {markers.map((marker, index) => (
        <Marker key={index} position={[marker.lat, marker.lon]}>
          <Popup>{marker.display_name}</Popup>
        </Marker>
      ))}
      
     
      {route?.coordinates?.length > 1 && (
        <Polyline 
          positions={route.coordinates.map(coord => [coord.lat, coord.lon])} 
          color="blue"
          weight={3}
        />
      )}
    </LeafletMapContainer>
  );
};

export default CustomMapContainer;