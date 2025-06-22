import React, { useState } from 'react';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('contact'); // Default to contact page

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <ContactPage />;
    }
  };

  return (
    <div className="app-container">
      <Navbar setActivePage={setActivePage} activePage={activePage} />
      {renderPage()}
    </div>
  );
}

const Navbar = ({ setActivePage, activePage }) => {
  return (
    <nav className="navbar">
      <button 
        className={`nav-link ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => setActivePage('home')}
      >
        Home
      </button>
      <button 
        className={`nav-link ${activePage === 'about' ? 'active' : ''}`}
        onClick={() => setActivePage('about')}
      >
        About
      </button>
      <button 
        className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}
        onClick={() => setActivePage('contact')}
      >
        Contact
      </button>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="page home-page">
      <h1>Welcome to Home</h1>
      <p>This is the home page of our React SPA.</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="page about-page">
      <h1>About Us</h1>
      <p>Learn more about our company and team.</p>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="page contact-page">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Get in touch with our support team.</p>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="submit-btn">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default App;