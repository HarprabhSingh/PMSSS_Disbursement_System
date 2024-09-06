const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

dotenv.config();

const mongouri = process.env.MONGO_URI || "mongodb+srv://arnav:09876543@cluster0.jlasi.mongodb.net/pmsss?retryWrites=true&w=majority&appName=Cluster0"

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(mongouri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('', userRoutes);
app.use('/documents', documentRoutes);
 
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
