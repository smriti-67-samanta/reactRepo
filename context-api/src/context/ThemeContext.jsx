import { createContext, useState, useContext } from 'react';

// Create context
const ThemeContext = createContext();

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Context value that will be available to all consumers
  const contextValue = {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark' // Additional derived value
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook for consuming the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}