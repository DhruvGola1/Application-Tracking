import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Import the Dashboard CSS

const Dashboard = () => {
    const [formData, setFormData] = useState({
        course: '',
        duration: '',
        fees: '',
        name: '',
        email: '',
        city: '',
        month: ''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('authToken');
        
        if (!token) {
            alert('Please log in first!');
            return;
        }

        try {
            await axios.post('http://localhost:5000/api/applications', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Application submitted!');
        } catch (error) {
            console.error(error);
            alert('Error submitting application');
        }
    };

    return (
        <div className="dashboard-container">
            <form onSubmit={handleSubmit} className="dashboard-form">
                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="text"
                    name="duration"
                    placeholder="Duration"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="number"
                    name="fees"
                    placeholder="Fees"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <input
                    type="text"
                    name="month"
                    placeholder="Month"
                    onChange={handleInputChange}
                    className="dashboard-input"
                />
                <button type="submit" className="dashboard-submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Dashboard;
