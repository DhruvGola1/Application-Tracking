import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';  // Import Login CSS

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token } = await loginUser({ email, password });
      login(token);
      navigate('/dashboard'); // Replace history.push with navigate
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="login-input"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
