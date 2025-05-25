import React, { useState } from 'react';

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <div className="counter">
      <h2>Current Count: {count}</h2>
      <div className="button-group">
        <button onClick={increment}>Increment (+)</button>
        <button onClick={decrement} disabled={count === 0}>
          Decrement (-)
        </button>
      </div>
    </div>
  );
}

export default Counter;