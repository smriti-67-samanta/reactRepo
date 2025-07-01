import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function WeatherDetail() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );
        setWeather(response.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <div className="loading">Loading weather data...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!weather) return <div className="error-message">No weather data found</div>;

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h1 className="weather-title">Weather in {weather.name}</h1>
        {weather.weather[0].icon && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="weather-icon"
          />
        )}
      </div>

      <div className="weather-details">
        <div className="weather-card">
          <p className="detail-title">Temperature</p>
          <p className="detail-value temperature">{Math.round(weather.main.temp)}°C</p>
        </div>
        
        <div className="weather-card">
          <p className="detail-title">Humidity</p>
          <p className="detail-value humidity">{weather.main.humidity}%</p>
        </div>
        
        <div className="weather-card">
          <p className="detail-title">Condition</p>
          <p className="detail-value condition">{weather.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetail;