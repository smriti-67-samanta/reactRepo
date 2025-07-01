import { useTheme } from '../context/ThemeContext.jsx';

function Footer() {
  const { theme } = useTheme();

  const footerStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#111',
    color: theme === 'light' ? '#333' : '#ddd',
    padding: '1rem',
    textAlign: 'center'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 Theme Context Demo</p>
      <p>Current theme: {theme}</p>
    </footer>
  );
}

export default Footer;