// courses.js
import express from 'express';
import { checkRole } from '../middleware/authMiddleware.js';
import Course from '../models/Course.js';

const router = express.Router();

// Create Course (Admin Only)
router.post('/', checkRole('admin'), async (req, res) => {
    const { name, description } = req.body;

    try {
        const course = new Course({ name, description });
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Get All Courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
});

export default router;
