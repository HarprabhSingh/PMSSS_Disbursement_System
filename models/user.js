const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  adhaar: { type: String, required: true, unique: true },
  otp: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
