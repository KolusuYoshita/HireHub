// server.js

// Load environment variables immediately
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// --- Import Route Files ---
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// --- Middleware (CRITICAL ORDER) ---
// 1. CORS: Allows your frontend to talk to this server
app.use(cors());

// 2. JSON Parser: MUST be placed before any route that uses req.body
app.use(express.json());

// --- Route Integrations ---
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
// Your application route, which now handles simple JSON submissions
app.use('/api/applications', applicationRoutes); 

// --- Test Route ---
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the MERN Job Board API' });
});

// --- MongoDB Connection ---
mongoose
    // Correct connection options for modern driver: removed useNewUrlParser and useUnifiedTopology
    .connect(MONGO_URI, {
        dbName: 'jobboarddb',
    })
    .then(() => {
        // ⭐ Cleaned up the console.log line to prevent SyntaxError
        console.log('Connected to MongoDB Atlas!'); 
        // Start server only AFTER database connection is successful
        app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('❌ MongoDB connection failed:', err.message);
        process.exit(1);
    });