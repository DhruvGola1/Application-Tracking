import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const checkRole = (role) => {
    return async (req, res, next) => {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        try {
            const decoded = jwt.verify(token, 'secretKey');
            req.user = decoded;
            
            const user = await User.findById(decoded.userId);
            if (!user || user.role !== role) {
                return res.status(403).json({ error: 'Access denied' });
            }

            next();
        } catch (error) {
            res.status(403).json({ error: 'Invalid token' });
        }
    };
};
