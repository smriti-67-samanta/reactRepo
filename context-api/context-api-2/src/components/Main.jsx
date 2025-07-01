import { useAuth } from '../context/AuthContext';

export const Main = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main style={{ padding: '2rem' }}>
      <h2>
        {isAuthenticated 
          ? 'Welcome to your dashboard!' 
          : 'Please log in to access your content'}
      </h2>
    </main>
  );
};