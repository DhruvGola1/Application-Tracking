import React, { useState, useEffect } from 'react';
import { fetchUserApplications } from '../services/api';
import './Update.css';  // Import the Update CSS

const Update = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const data = await fetchUserApplications();
        setApplications(data);
      } catch (error) {
        console.error('Error fetching applications:', error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <div className="update-container">
      <h1 className="update-title">Update Applications</h1>
      <ul className="update-list">
        {applications.map((app) => (
          <li key={app._id} className="update-item">
            <span className="update-course">{app.course}</span> - <span className="update-status">{app.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Update;
