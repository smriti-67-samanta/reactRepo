import React, { useState } from 'react';
import './AutoCorrectApp.css';

const AutoCorrectApp = () => {
 
  const corrections = {
    "teh": "the",
    "receive": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their",
    "seperate": "separate",
    "definately": "definitely",
    "occured": "occurred"
  };

  const [inputText, setInputText] = useState('');

 
  const autoCorrectText = (text) => {
    return text.split(/(\s+)/).map(token => {
     
      if (token.trim().length === 0) return token;
      
     
      const punctuation = token.match(/[^a-zA-Z0-9']*$/)?.[0] || '';
      const baseWord = token.slice(0, token.length - punctuation.length);
      
      
      const lowerWord = baseWord.toLowerCase();
      const corrected = corrections[lowerWord] || baseWord;
      
      return corrected + punctuation;
    }).join('');
  };

  const correctedText = autoCorrectText(inputText);

  return (
    <div className="auto-correct-app">
      <h1>AutoCorrect App</h1>
      <div className="input-section">
        <label htmlFor="user-input">Type your text:</label>
        <textarea
          id="user-input"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type something with common misspellings..."
        />
      </div>
      <div className="output-section">
        <h3>Corrected Text:</h3>
        <div className="corrected-text">
          {correctedText || <span className="placeholder">Your corrected text will appear here</span>}
        </div>
      </div>
      <div className="corrections-list">
        <h4>Supported Corrections:</h4>
        <ul>
          {Object.entries(corrections).map(([wrong, correct]) => (
            <li key={wrong}>
              <span className="wrong">{wrong}</span> → <span className="correct">{correct}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AutoCorrectApp;