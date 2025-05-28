import React, { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const inputRef= useRef(null);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>
        Increase Count
      </button>
      <br/>
      <input ref={inputRef} type="text" placeholder="Click me" />
    </div>
  );
}