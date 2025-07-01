import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home() {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${encodeURIComponent(city)}`);
    }
  };

  return (
    <div className="home-container">
      <h1 className="search-title">Weather App</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="search-input"
          required
        />
        <button type="submit" className="search-button">Get Weather</button>
      </form>
    </div>
  );
}

export default Home;