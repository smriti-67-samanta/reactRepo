import React, { useState, useEffect, useRef } from 'react';

const CharacterBrowser = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const pageRef = useRef(1);
  const charactersPerPage = 10;

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://rickandmortyapi.com/api/character?page=${pageRef.current}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [pageRef.current]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      pageRef.current = newPage;
      // Trigger re-render by updating state
      setCharacters([]);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h2>Loading characters...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', color: 'red' }}>
        <h2>Error: {error}</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Rick and Morty Characters</h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {characters.map(character => (
          <div key={character.id} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={character.image} 
              alt={character.name} 
              style={{
                width: '100%',
                borderRadius: '4px',
                marginBottom: '10px'
              }}
            />
            <h3>{character.name}</h3>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => handlePageChange(pageRef.current - 1)}
          disabled={pageRef.current === 1}
          style={{
            padding: '8px 16px',
            backgroundColor: pageRef.current === 1 ? '#f1f1f1' : '#4CAF50',
            color: pageRef.current === 1 ? '#666' : 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: pageRef.current === 1 ? 'not-allowed' : 'pointer'
          }}
        >
          Previous
        </button>

        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const pageNumber = i + 1;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              style={{
                padding: '8px 12px',
                backgroundColor: pageRef.current === pageNumber ? '#4CAF50' : '#f1f1f1',
                color: pageRef.current === pageNumber ? 'white' : 'black',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                minWidth: '36px'
              }}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => handlePageChange(pageRef.current + 1)}
          disabled={pageRef.current === totalPages}
          style={{
            padding: '8px 16px',
            backgroundColor: pageRef.current === totalPages ? '#f1f1f1' : '#4CAF50',
            color: pageRef.current === totalPages ? '#666' : 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: pageRef.current === totalPages ? 'not-allowed' : 'pointer'
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterBrowser;