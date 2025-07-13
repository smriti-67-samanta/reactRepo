import React from 'react';

const RouteInfo = ({ route }) => {
  if (!route) return null;

  return (
    <div className="route-info">
      <h3>Route Information</h3>
      <p>Distance: {route.distance}</p>
      <p>Estimated Duration: {route.duration}</p>
    </div>
  );
};

export default RouteInfo;