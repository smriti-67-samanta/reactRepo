import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route index element={<Home />} />
      <Route path='/about' element={<About/>}/>
    
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
