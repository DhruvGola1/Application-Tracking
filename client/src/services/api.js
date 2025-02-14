import axios from 'axios';

// Base API URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Axios instance for API requests
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to set the Authorization header for JWT token
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers['Authorization'];
  }
};

// API requests

// Register a new user
export const registerUser = async (data) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Propagate error
  }
};

// Login user
export const loginUser = async (data) => {
  try {
    const response = await api.post('/auth/login', data);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Propagate error
  }
};

// Fetch all available courses
export const fetchCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error; // Propagate error
  }
};

// Create a new application
export const createApplication = async (data) => {
  try {
    const response = await api.post('/applications', data);
    return response.data;
  } catch (error) {
    console.error('Error creating application:', error);
    throw error; // Propagate error
  }
};

// Fetch applications of the logged-in user
export const fetchUserApplications = async () => {
  try {
    const response = await api.get('/applications');
    return response.data;
  } catch (error) {
    console.error('Error fetching user applications:', error);
    throw error; // Propagate error
  }
};
