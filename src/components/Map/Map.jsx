import React from 'react';
const Map = ({ cities }) => {
  const position = [20.5937, 78.9629]; // Center position of India

  return (
    <div className="map">
    <MapContainer center={position} zoom={4} style={{ height: '700px', width: '700px', zIndex: 0 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city) => (
        <Marker position={[city.lat, city.lng]} key={city.name} icon={LeafletIcon}>
          <Tooltip>{city.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
    </div>
  );
};

export default Map;