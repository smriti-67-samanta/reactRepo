import React from "react";
function App(){
  const items=["React", "JavaScript", "CSS"];
  return(
    <div>
      <h1 style={{textAlign:"center", color:"blue"}}>My Tech Items</h1>
      <ul style={{textAlign:"center"}}> {items.map((item, index) => (
        <li  key={index} style={{ padding: '8px',
              margin: '4px 0',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              color:"green"}}>
          {item}
        </li>
        ))}
      </ul>
    </div>
  )
}
export default App;