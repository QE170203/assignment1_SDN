const mongoose = require('mongoose');
require('dotenv').config();  // To load environment variables from .env file

// Define and export the connectDB function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodb_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully!');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit the application if the DB connection fails
    }
};

module.exports = connectDB;
