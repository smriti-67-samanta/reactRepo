import React, {useState} from "react";

function AutoCorrectApp(){
    const[inputText,setInputText]=useState(' ')

    const corrections = {
  "teh": "the",
  "recieve": "receive",
  "adress": "address",
  "wierd": "weird",
  "thier": "their"
};

const applyAutoCorrect = (text) => {
    return text
      .split(' ')
      .map(word => corrections[word.toLowerCase()] || word)
      .join(' ');
  };

  const correctedText = applyAutoCorrect(inputText)
  return(
    <>
    <div style={{ padding: '20px' }}>
    <h2>Autocurrect App</h2>
    <input type="text"  value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="type here..."  style={{ width: '100%', padding: '8px' }}/>
    
    
    <div style={{ marginTop: '20px' }}>
        <h3>Original:</h3>
        <p style={{color:'red'}}>{inputText || '(empty)'}</p>
        
        <h3 >Corrected:</h3>
        <p style={{ color: 'green' }}>
          {correctedText || '(empty)'}
        </p>
    </div>
     </div>

    </>
  )
}

export default AutoCorrectApp;