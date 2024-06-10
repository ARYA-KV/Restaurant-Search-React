import React from 'react';

const LocationMap = ({ lat, lng }) => {
  const iframeSrc = `https://maps.google.com/maps?q=${lat},${lng}&hl=es;&output=embed`;

  return (
    <div className="map-container">
      <iframe
        title="location-map"
        width="100%"
        height="370"
        frameBorder="0"
        style={{ border: 0 }}
        src={iframeSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LocationMap;
