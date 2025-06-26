import { useState } from 'react'
import './App.css'
import ThemeApp from './components/ThemeApp'
import FetchData from './components/FetchData'
import UserProfile from './components/UserProfile'
import Stopwatch from './components/Stopwatch'

function App() {
 

  return (
    <>
      <ThemeApp/>
     <div><FetchData/></div>
      <div><UserProfile/></div>
      <div><Stopwatch/></div>
        
    </>
  )
}

export default App
