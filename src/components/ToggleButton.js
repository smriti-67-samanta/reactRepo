import React, { useState } from 'react';
import './ToggleButton.css'; 

function ToggleButton({ label = '' }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => setIsOn(!isOn);

  return (
    <div className="toggle-container">
      {label && <span className="toggle-label">{label}</span>}
      <button 
        className={`toggle-button ${isOn ? 'on' : 'off'}`}
        onClick={toggle}
      >
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;