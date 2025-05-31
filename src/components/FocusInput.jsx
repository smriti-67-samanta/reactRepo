import React, { useRef, useState } from 'react';

function FocusInput() {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleButtonClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = 'lightblue';
    setIsFocused(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type here..."
        style={{ padding: '10px', marginBottom: '10px' }}
      />
      <button onClick={handleButtonClick} style={{ padding: '10px' }}>
        Focus Input
      </button>
      {isFocused && <p style={{ color: 'green' }}>Focused!</p>}
    </div>
  );
}

export default FocusInput;