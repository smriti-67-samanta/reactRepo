import React, { useState } from 'react';
import useGeolocation from './hooks/useGeolocation';
import MapContainer from './components/MapContainer';
import SearchBar from './components/SearchBar';
import RouteInfo from './components/RouteInfo';
import { getRoute } from './services/mapService';


function App() {
  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);
  const [route, setRoute] = useState(null);
  const [markers, setMarkers] = useState([]);
  const currentLocation = useGeolocation();

  const handleSearch = (results) => {
    setMarkers(results);
  };

  const handleSelect = (location) => {
    if (!startLocation) {
      setStartLocation(location);
    } else if (!endLocation) {
      setEndLocation(location);
    }
  };

  const calculateRoute = async () => {
    if (startLocation && endLocation) {
      const routeData = await getRoute(startLocation, endLocation);
      setRoute(routeData);
    }
  };

  const resetRoute = () => {
    setStartLocation(null);
    setEndLocation(null);
    setRoute(null);
  };

  const center = currentLocation.loaded
    ? [currentLocation.coordinates.lat, currentLocation.coordinates.lng]
    : [51.505, -0.09]; 

  return (
    <div className="app">
      <h1>Location Tracker</h1>
      
      <div className="controls">
        <button onClick={() => currentLocation.loaded && setStartLocation({
          lat: currentLocation.coordinates.lat,
          lon: currentLocation.coordinates.lng,
          display_name: "Current Location"
        })}>
          Use Current Location as Start
        </button>
        
        <SearchBar onSearch={handleSearch} onSelect={handleSelect} />
        
        <div className="selected-locations">
          <p>Start: {startLocation?.display_name || 'Not selected'}</p>
          <p>Destination: {endLocation?.display_name || 'Not selected'}</p>
        </div>
        
        <button onClick={calculateRoute} disabled={!startLocation || !endLocation}>
          Calculate Route
        </button>
        
        <button onClick={resetRoute}>Reset</button>
      </div>
      
      <MapContainer 
        center={center} 
        markers={[...(startLocation ? [startLocation] : []), ...(endLocation ? [endLocation] : [])]} 
        route={route}
      />
      
      <RouteInfo route={route} />
    </div>
  );
}

export default App;