import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([{ username: 'admin', password: 'admin' }]);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const register = (username, password) => {
    if (users.find(user => user.username === username)) {
      return false; // User already exists
    }
    const newUser = { username, password };
    setUsers([...users, newUser]);
    return true;
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.username === updatedUser.username ? updatedUser : user)));
    setCurrentUser(updatedUser);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, user: currentUser, updateUser, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
