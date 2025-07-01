import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import Navbar from '../components/Navbar';
import ProtectedRoute from '../components/ProtectedRoute';

function Settings() {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [success, setSuccess] = useState(false);

  // Initialize form data when user is available
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  if (!user) return null; // Or loading spinner

  return (
    <ProtectedRoute>
      <div className="page">
        <Navbar />
        <div className="content">
          <h1>Account Settings</h1>
          <form onSubmit={handleSubmit} className="settings-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="save-btn">Save Changes</button>
            {success && <p className="success-message">Profile updated successfully!</p>}
          </form>
        </div>
      </div>
    </ProtectedRoute>
  );
}

export default Settings;