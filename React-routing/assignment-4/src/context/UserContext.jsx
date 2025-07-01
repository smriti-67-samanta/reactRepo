import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Mock user data
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: '2023-01-15'
  };

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate login on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setUser(mockUser);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const updateUser = (updatedData) => {
    setUser(prev => ({
      ...prev,
      ...updatedData
    }));
  };

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser(mockUser);
  };

  return (
    <UserContext.Provider value={{ user, loading, updateUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};