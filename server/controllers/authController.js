// server/controllers/authController.js

import bcrypt from 'bcryptjs';  // For hashing passwords
import jwt from 'jsonwebtoken'; // For generating JWT tokens
import User from '../models/User.js'; // Assuming you have a User model

// Register User
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Login User
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET || 'yourSecretKey',
      { expiresIn: '1h' }
    );

    // Send response with token
    return res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

// Middleware to authenticate using JWT token
export const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yourSecretKey');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid Token' });
  }
};
