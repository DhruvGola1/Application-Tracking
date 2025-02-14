// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import userRoutes from './routes/userRoutes.js';
// import courseRoutes from './routes/courseRoutes.js';
// import applicationRoutes from './routes/courseRoutes.js';
// import { errorHandler } from './middleware/errorHandler.js';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/application-tracking').then(() => {
//     console.log('MongoDB connected!');
// }).catch(err => {
//     console.error('MongoDB connection error:', err);
// });

// // Routes
// app.use('/api/auth', userRoutes);
// app.use('/api/courses', courseRoutes);
// app.use('/api/applications', applicationRoutes);

// // Error Handling Middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


// server/app.js or server.js

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json()); // To parse JSON request body

// Use the routes
app.use('/api', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
