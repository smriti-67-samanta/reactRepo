import React, { useState, useEffect } from 'react';
import './QuoteGenerator.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({ content: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Update your fetchQuote function in QuoteGenerator.js:
const fetchQuote = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('https://api.quotable.io/random', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    setQuote({
      content: data.content || 'No quote content available',
      author: data.author || 'Unknown author'
    });
  } catch (error) {
    console.error('API Error:', error);
    setQuote({
      content: 'Failed to load quote. Please check your connection.',
      author: 'System'
    });
  } finally {
    setIsLoading(false);
  }
};
  // Auto-refresh every 30 seconds
  useEffect(() => {
    fetchQuote(); // Initial fetch
    
    const interval = setInterval(() => {
      fetchQuote();
    }, 30000); // 30 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="quote-container">
      <h1>Daily Quote Generator</h1>
      
      {isLoading ? (
        <div className="loading">Loading quote...</div>
      ) : (
        <div className="quote-content">
          <blockquote>"{quote.content}"</blockquote>
          <p className="author">— {quote.author}</p>
        </div>
      )}
      
      <button 
        className="new-quote-btn" 
        onClick={fetchQuote}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Get New Quote'}
      </button>
      
      <div className="auto-refresh-notice">
        (Auto-refreshes every 30 seconds)
      </div>
    </div>
  );
};

export default QuoteGenerator;