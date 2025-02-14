import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';  // Import Signup CSS

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser({ name, email, password });
      navigate('/login'); // Replace history.push with navigate
    } catch (error) {
      console.error('Signup error:', error);
      alert('Error during signup');
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Signup</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="signup-input"
        />
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
