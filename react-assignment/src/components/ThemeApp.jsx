import React,{useState} from "react";
import ThemedBox from "./ThemedBox";

function ThemeApp(){
 const[theme,setTheme]=useState('light')
 return(
    <>
    <div>
        <h1>Toggle Theme</h1>
        <button onClick={()=>setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')}
            style={{
          padding: '10px 20px',
          backgroundColor: theme === 'light' ? '#333' : '#f5f5f5',
          color: theme === 'light' ? '#f5f5f5' : '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}>Click me</button>

        <div>
             <ThemedBox theme={theme}>
          <h2>Box 1</h2>
          <p>This box adapts to the current theme.</p>
        </ThemedBox>
        
        <ThemedBox theme={theme}>
          <h2>Box 2</h2>
          <p>All boxes use the same ThemedBox component.</p>
        </ThemedBox>
        
        <ThemedBox theme={theme}>
          <h2>Box 3</h2>
          <p>Try clicking the theme toggle button!</p>
        </ThemedBox>
        </div>
    </div>
    </>
 )

}

export default ThemeApp;