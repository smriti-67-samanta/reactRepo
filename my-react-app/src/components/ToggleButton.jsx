import React, { useState } from 'react';

function ToggleButton(){
    const[isOn, setIsOn]=useState(false)

    return(
        <>
        <h1>Toggle Button</h1>
        <button onClick={()=>setIsOn(prevState => !prevState)}
             style={{
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          backgroundColor: isOn ? '#e6ffe6' : '#ffe6e6',
          color: isOn ? 'green' : 'red',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        }}> {isOn ? 'ON' : 'OFF'}</button>
        </>
    )
}

export default ToggleButton;