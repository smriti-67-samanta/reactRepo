import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Weather from './components/WeatherDetail';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/weather/:city" element={<Weather/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;