import React, { useState, useEffect } from "react";

function FetchData() {
    const [quote, setQuote] = useState({ content: '', author: '' });
    const [loading, setLoading] = useState(false); // Changed from string 'false' to boolean false

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote({
                content: data.content,
                author: data.author
            });
        } catch (error) {
            console.error('Error fetching quote:', error);
            setQuote({
                content: 'Failed to load quote. Please try again.',
                author: 'System'
            });
        } finally {
            setLoading(false); // Fixed from setIsLoading to setLoading
        }
    };
    
    useEffect(() => {
        fetchQuote(); 
        
        const interval = setInterval(() => {
            fetchQuote();
        }, 30000); 
        
        return () => clearInterval(interval); 
    }, []);

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Quote Viewer</h1>
            
            {loading ? (
                <p>Loading quote...</p>
            ) : (
                <div style={{ margin: '20px 0' }}>
                    <blockquote style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
                        "{quote.content}"
                    </blockquote>
                    <p style={{ fontWeight: 'bold' }}>- {quote.author}</p>
                </div>
            )}
            
            <button 
                onClick={fetchQuote}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '1rem'
                }}
            >
                {loading ? 'Loading...' : 'Get New Quote'}
            </button>
        </div>
    );
}

export default FetchData;