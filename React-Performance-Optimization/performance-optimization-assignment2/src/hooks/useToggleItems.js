import { useState } from 'react';

const useToggleItems = (initialValue, initialPosition = 0) => {
  // Validate inputs
  if (!Array.isArray(initialValue) || initialValue.length === 0) {
    throw new Error("Initial value must be a non-empty array");
  }
  
  if (initialPosition < 0 || initialPosition >= initialValue.length) {
    throw new Error("Initial position is out of bounds");
  }

  const [currentIndex, setCurrentIndex] = useState(initialPosition);

  const toggleState = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === initialValue.length - 1 ? 0 : prevIndex + 1
    );
  };

  return [initialValue[currentIndex], toggleState];
};

export default useToggleItems;