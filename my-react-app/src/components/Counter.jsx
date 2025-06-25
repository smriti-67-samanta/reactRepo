import React, { useState } from 'react';

function Counter({ initialValue=0 }){
    const [count, setCount]=useState(initialValue);

    return(
      <>
      <h1>Count is: {count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
        <button onClick={()=>setCount(prev=>Math.max(0, prev - 1))} disabled={count === 0}>Decrement</button>
    </>
    )
}
export default Counter;