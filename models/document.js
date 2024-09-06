const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  adhaar: { type: String, required: true },
  type: {
    type: String,
    enum: ['10th Certificate', '12th Certificate', 'Caste Certificate'],
    required: true,
  },
});

module.exports = mongoose.model('Document', documentSchema);
