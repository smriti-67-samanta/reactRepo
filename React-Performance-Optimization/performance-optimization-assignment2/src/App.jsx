import React from 'react';
import useToggleItems from './hooks/useToggleItems';

function App() {
  const [currentItem, toggleItem] = useToggleItems(["A", "B", "C"], 1);

  return (
    <div className="app">
      <h1>Toggle Items Demo</h1>
      <div className="container">
        <p>Current Item: <span className="current-item">{currentItem}</span></p>
        <button onClick={toggleItem}>Toggle Item</button>
      </div>
    </div>
  );
}

export default App;
