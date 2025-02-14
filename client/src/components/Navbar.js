import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the Navbar CSS

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
                <li className="navbar-item"><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
                <li className="navbar-item"><Link to="/update" className="navbar-link">Update</Link></li>
                <li className="navbar-item"><Link to="/login" className="navbar-link">Login</Link></li>
                <li className="navbar-item"><Link to="/signup" className="navbar-link">Signup</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
