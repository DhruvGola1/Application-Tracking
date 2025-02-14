import React, { createContext, useState, useEffect } from 'react';
import { setAuthToken } from '../services/api';

// Create context
export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authToken, setAuthTokenState] = useState(localStorage.getItem('authToken'));

  // Check if token exists and validate the user
  useEffect(() => {
    if (authToken) {
      setAuthToken(authToken);
      // You can add an API call here to fetch user details by token if needed.
      // For example: getUserDataFromToken(authToken)
    } else {
      setUser(null);
    }
  }, [authToken]);

  // Login function
  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthTokenState(token);
    // Fetch user data if necessary after login
    // setUser(fetchedUserData);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthTokenState(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
