import React, { useState } from 'react';
import { searchLocation } from '../services/mapService';

const SearchBar = ({ onSearch, onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (query.trim()) {
      const locations = await searchLocation(query);
      setResults(locations);
      onSearch(locations);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a location..."
      />
      <button onClick={handleSearch}>Search</button>
      
      {results.length > 0 && (
        <ul className="search-results">
          {results.map((result, index) => (
            <li key={index} onClick={() => onSelect(result)}>
              {result.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;