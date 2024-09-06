const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Helper to generate OTP
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// POST login (Enter Aadhaar to receive OTP)
router.post('/login', async (req, res) => {
  const { adhaar } = req.body;

  if (!adhaar) {
    return res.status(400).json({ message: 'Adhaar number is required' });
  }

  try {
    let user = await User.findOne({ adhaar });

    const otp = generateOtp();

    if (user) {
      user.otp = otp;
    } else {
      user = new User({ adhaar, otp });
    }

    await user.save();

    // Simulate sending OTP (in real scenario, integrate with an SMS service)
    res.status(200).json({ message: `OTP sent to Aadhaar: ${adhaar}`, otp }); 
  } catch (err) {
    res.status(500).json({ message: 'Error generating OTP', error: err.message });
  }
});

// Verify OTP
router.post('/verify', async (req, res) => {
  const { adhaar, otp } = req.body;

  if (!adhaar || !otp) {
    return res.status(400).json({ message: 'Adhaar number and OTP are required' });
  }

  try {
    const user = await User.findOne({ adhaar, otp });

    if (!user) {
      return res.status(401).json({ message: 'Invalid OTP or Aadhaar number' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error verifying OTP', error: err.message });
  }
});

module.exports = router;
