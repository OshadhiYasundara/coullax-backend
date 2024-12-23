const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewRoutes = require('./routes/reviews'); // Import routes

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Log successful server start
console.log('Server starting...');

// Routes
app.use('/reviews', reviewRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
