import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import FetchData from './components/FetchData'
import CourseDetails from './components/CourseDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/fetchdata' element={<FetchData/>}/>

      <Route path='/coursedetails' element={<CourseDetails/>}/>


    </Routes>
    <Footer/>
     
        
    </>
  )
}

export default App
