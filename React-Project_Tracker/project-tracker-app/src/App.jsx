import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import ProjectDetails from './components/ProjectDetails'
import AddProject from './components/AddProject'
import EditProject from './components/EditProject'
import LogIn from './components/LogIn'

function App() {
 
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Dashboard/>} />
    <Route path='/projectdetails' element={<ProjectDetails/>}/>
    <Route path='/addproject' element={<AddProject/>}/>
    <Route path='/editproject' element={<EditProject/>}/>
    <Route path='/login' element={<LogIn/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
