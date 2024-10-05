// index.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./auth');
const appointmentRouter = require('./appointment');
const paymentRoutes = require('./payment');

app.use('/api', authRoutes);
app.use('/appointments', appointmentRouter);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
