import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import LoadingSpinner from '../components/LoadingSpinner';

const API_KEY = 'e0f4775e'; // Replace with your actual API key

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const searchMovies = async (title) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
      );
      const data = await response.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No movies found');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <h1>Movie Search</h1>
      
      <SearchBar onSearch={searchMovies} />
      
      {loading && <LoadingSpinner />}
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie}
            onClick={() => navigate(`/movie/${movie.imdbID}`)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;