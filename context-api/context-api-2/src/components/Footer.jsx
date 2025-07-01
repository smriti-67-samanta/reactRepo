import { useAuth } from '../context/AuthContext';

export const Footer = () => {
  const { isAuthenticated } = useAuth();

  return (
    <footer style={{ padding: '1rem', background: '#f0f0f0', textAlign: 'center' }}>
      {isAuthenticated ? 'Welcome, User!' : 'Please log in to continue'}
    </footer>
  );
};