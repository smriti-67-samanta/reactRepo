import React,{useState} from "react";

const ThemedBox = ({ theme, children }) => {
  const styles = {
    light: {
      backgroundColor: '#f5f5f5',
      color: '#333',
      border: '1px solid #ddd'
    },
    dark: {
      backgroundColor: '#333',
      color: '#f5f5f5',
      border: '1px solid #555'
    }
  };

    
    return (
    <div style={{
      padding: '20px',
      margin: '10px',
      borderRadius: '8px',
      ...styles[theme]
    }}>
      {children}
    </div>
  );
}

export default ThemedBox;