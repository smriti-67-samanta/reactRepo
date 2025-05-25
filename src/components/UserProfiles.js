import React, { useState, useEffect } from 'react';

const UserCard = ({ name, email, city }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      background: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      margin: '10px'
    }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{name}</h3>
      <p style={{ color: '#7f8c8d', fontSize: '0.9rem', margin: '0 0 8px 0' }}>{email}</p>
      <p style={{ color: '#3498db', margin: 0, fontWeight: '500' }}>
        <span role="img" aria-label="location">📍</span> {city}
      </p>
    </div>
  );
};

const UserProfiles = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div style={{ textAlign: 'center', fontSize: '1.2rem', margin: '2rem' }}>Loading users...</div>;
  if (error) return <div style={{ textAlign: 'center', fontSize: '1.2rem', margin: '2rem', color: '#d32f2f' }}>Error: {error}</div>;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>User Profiles</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {users.map(user => (
          <UserCard 
            key={user.id}
            name={user.name}
            email={user.email}
            city={user.address.city}
          />
        ))}
      </div>
    </div>
  );
};

export default UserProfiles;