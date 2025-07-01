import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useContext(UserContext);

  if (loading) return <div className="loading">Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return children;
}

export default ProtectedRoute;