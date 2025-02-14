// applications.js
import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import Application from '../models/Application.js';

const router = express.Router();

// Create Application
router.post('/', verifyToken, async (req, res) => {
    const { course, duration, fees, name, email, city, month } = req.body;

    try {
        const application = new Application({
            userId: req.user.userId,
            course,
            duration,
            fees,
            name,
            email,
            city,
            month
        });
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

export default router;
