import React, { useState, useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = () => {
  const Mapbox = ReactMapboxGl({
    accessToken: 'pk.eyJ1IjoiZ2Vub3VyZXRhIiwiYSI6ImNsMTRtNmhuZTI1dzIzZG8wZmFmcWV4M2MifQ.u6Xd8j-lckbQkvgidnGXIQ',
  });

  const [zoom, setZoom] = useState(9); // Initial zoom level
  const [center, setCenter] = useState([12.9716, 77.5946]); // Default center coordinates

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCenter([longitude, latitude]); // Set the center to the current location
    });
  }, []);

  const handleZoomIn = () => {
    if (zoom < 20) { // Adjust the maximum zoom level as needed
      setZoom(zoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (zoom > 0) { // Adjust the minimum zoom level as needed
      setZoom(zoom - 1);
    }
  };

  return (
    <div className='mapContainer'>
      
      <Mapbox
        style="mapbox://styles/mapbox/streets-v11" // Choose a map style
        center={center} // Use the center state variable
        zoom={[zoom]} // Use the zoom state variable
        containerStyle={{
          height: '600px',
          width: '100%',
        }}
      >
        <div className='flex flex-row gap-3'>
        <button className='text-white bg-cyan-600 p-2 rounded-sm' onClick={handleZoomIn}>Zoom In</button>
        <button className='text-white bg-cyan-600 p-2 rounded-sm' onClick={handleZoomOut}>Zoom Out</button>
        </div>

      </Mapbox>
    </div>
  );
};

export default Map;
