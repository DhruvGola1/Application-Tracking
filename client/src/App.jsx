import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // No need to import user, login, and logout here
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Update from './components/Update';
import { fetchCourses } from './services/api';
import './App.css'; // Import global CSS file

const App = () => {
  useEffect(() => {
    // Fetch initial data (e.g., courses) if needed on app load
    fetchCourses().then((courses) => {
      console.log(courses);
      // Initialize your courses state if necessary
    });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="app-container"> {/* Adding a class for general app container */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
