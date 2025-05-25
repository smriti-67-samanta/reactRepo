import { useState } from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton';
import ProfileCard from './components/ProfileCard';
import AutoCorrectApp from './components/AutoCorrectApp';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <div className="app">
      <h1>React Components Demo</h1>
      
     
      <div className="counter">
        <h2>Count: {count}</h2>
        <div className="buttons">
          <button onClick={increment}>Increment (+)</button>
          <button onClick={decrement} disabled={count === 0}>
            Decrement (-)
          </button>
        </div>
      </div>

     
      <div className="toggle-section">
        <h2>Toggle Buttons</h2>
        <ToggleButton />
        <ToggleButton label="Power" />
        <ToggleButton label="Lights" />
      </div>

     
      <div className="profile-section">
        <h2>User Profiles</h2>
        <div className="profile-cards">
          <ProfileCard 
            name="John Doe" 
            age={28} 
            bio="Frontend developer specializing in React with 5 years of experience building web applications."
          />
          <ProfileCard 
            name="Sarah Smith" 
            age={32} 
            bio="Full-stack engineer passionate about creating accessible web applications. Currently working with Node.js and React."
          />
          <ProfileCard 
            name="Alex Johnson"
            age={25}
            bio="UX designer with a focus on creating intuitive user interfaces and improving user experience."
          />
        </div>
      </div>

     
      <div className="autocorrect-section">
        <AutoCorrectApp />
      </div>
    </div>
  );
}

export default App;