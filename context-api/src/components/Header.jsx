import { useTheme } from '../context/ThemeContext.jsx';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const headerStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
    color: theme === 'light' ? '#333' : '#f0f0f0',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <header style={headerStyle}>
      <h1>Theme Context Demo</h1>
      <button onClick={toggleTheme}>
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
    </header>
  );
}

export default Header;