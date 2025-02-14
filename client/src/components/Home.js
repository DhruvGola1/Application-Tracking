import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';  // Import Home CSS

const Home = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/courses')
            .then(response => setCourses(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="home-container">
            <h1 className="home-title">Available Courses</h1>
            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course._id} className="course-item">{course.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
