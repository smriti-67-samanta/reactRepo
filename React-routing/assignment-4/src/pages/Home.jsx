import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar';

function Home() {
  const { user } = useContext(UserContext);

  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <h1>Welcome {user ? user.name : 'Guest'}</h1>
        <p>
          {user 
            ? 'You are logged in and can access profile and settings.'
            : 'Please login to access your profile and settings.'
          }
        </p>
      </div>
    </div>
  );
}

export default Home;