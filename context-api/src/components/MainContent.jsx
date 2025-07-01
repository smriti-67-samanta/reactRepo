import { useTheme } from '../context/ThemeContext.jsx';

function MainContent() {
  const { theme } = useTheme();

  const contentStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '2rem',
    minHeight: '300px',
    transition: 'all 0.3s ease'
  };

  return (
    <main style={contentStyle}>
      <h2>Main Content Area</h2>
      <p>Current theme: {theme}</p>
      <p>This component automatically adapts to the current theme.</p>
    </main>
  );
}

export default MainContent;