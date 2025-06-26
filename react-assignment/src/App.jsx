import { useState } from 'react'
import './App.css'
import ThemeApp from './components/ThemeApp'
import FetchData from './components/FetchData'
import UserProfile from './components/UserProfile'

function App() {
 

  return (
    <>
      <ThemeApp/>
     <div><FetchData/></div>
      <div><UserProfile/></div>
        
    </>
  )
}

export default App
