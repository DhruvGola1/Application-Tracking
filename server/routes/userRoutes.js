// server/routes/userRoutes.js

import express from 'express';
import { register, login, authenticate } from '../controllers/authController.js';

const router = express.Router();

// Register Route
router.post('/register', register);

// Login Route
router.post('/login', login);

// Example Protected Route
router.get('/profile', authenticate, (req, res) => {
  res.json({ message: 'Protected profile data', user: req.user });
});

export default router;
