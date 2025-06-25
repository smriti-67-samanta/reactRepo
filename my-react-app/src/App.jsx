
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton';
import ProfileCard from './components/ProfileCard';
import AutoCorrectApp from './components/AutoCorrectApp';

function App() {
  

  return (
    <>
     <Counter/>
     <div> <ToggleButton/></div>
     <div><ProfileCard/></div>
     <div><AutoCorrectApp/></div>
    </>
  )
}

export default App
