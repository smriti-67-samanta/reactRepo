import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        {user && (
          <>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </>
        )}
      </div>
      <div className="auth-status">
        {user ? (
          <button onClick={logout} className="logout-btn">Logout</button>
        ) : (
          <button onClick={() => window.location.reload()} className="login-btn">
            Login (Mock)
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;