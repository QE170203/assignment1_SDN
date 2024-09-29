// Import required modules
const express = require('express');
const connectDB = require('./config/db');  // Assuming your connectDB function is in config/db.js
const quizRoutes = require('./router/quizRoutes');
const questionRoutes = require('./router/questionRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB using the connectDB function
connectDB();

// Use body-parser middleware to parse incoming JSON requests
app.use(express.json());
// Use the defined routes for quizzes and questions
app.use('/quizzes', quizRoutes);
app.use('/question', questionRoutes);

// Define the port for the server (environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// Start the Express server and listen on the defined port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
