import React from 'react';
import FocusInput from './components/FocusInput';
import TodoPagination from './components/TodoPagination';
import CharacterBrowser from './components/CharacterBrowser';

function App() {
  return (
    <div className="App" style={{ 
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <header style={{ 
        textAlign: 'center', 
        marginBottom: '40px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: '#333' }}>React Components Demo</h1>
        <p style={{ color: '#666' }}>Demonstrating useRef, useEffect, and API integration</p>
      </header>
      
      <main style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <section style={{ 
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>
            Focus Input Component (useRef)
          </h2>
          <FocusInput />
        </section>
        
        <section style={{ 
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>
            Todo Pagination (JSONPlaceholder API)
          </h2>
          <TodoPagination />
        </section>
        
        <section style={{ 
          padding: '25px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#444' }}>
            Character Browser (Rick and Morty API)
          </h2>
          <CharacterBrowser />
        </section>
      </main>
      
      <footer style={{
        marginTop: '40px',
        textAlign: 'center',
        padding: '20px',
        color: '#666',
        fontSize: '0.9rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <p>Built with React, useEffect, and useRef</p>
      </footer>
    </div>
  );
}

export default App;