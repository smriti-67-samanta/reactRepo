import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <ProtectedRoute>
      <div className="page">
        <Navbar />
        <div className="content">
          <h1>Your Profile</h1>
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Member Since:</strong> {user.joinedDate}</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Profile;