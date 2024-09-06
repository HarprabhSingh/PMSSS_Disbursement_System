const express = require('express');
const router = express.Router();
const Document = require('../models/document');

// Get documents by Aadhaar number
router.get('/:adhaar', async (req, res) => {
  const { adhaar } = req.params;

  try {
    const documents = await Document.find({ adhaar });

    if (!documents || documents.length === 0) {
      return res.status(404).json({ message: 'No documents found for this Aadhaar' });
    }

    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching documents', error: err.message });
  }
});

// Add document (for testing purpose)
router.post('/', async (req, res) => {
  const { adhaar, type } = req.body;

  if (!adhaar || !type) {
    return res.status(400).json({ message: 'Adhaar number and document type are required' });
  }

  try {
    const document = new Document({ adhaar, type });
    await document.save();

    res.status(201).json({ message: 'Document added successfully', document });
  } catch (err) {
    res.status(500).json({ message: 'Error adding document', error: err.message });
  }
});

module.exports = router;
