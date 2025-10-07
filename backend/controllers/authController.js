// controllers/authController.js
const axios = require('axios');
const jwt   = require('jsonwebtoken');
const User  = require('../models/User');

exports.sendOTP = async (req, res, next) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: 'Phone is required' });
    // Call D7 SMS API to send OTP
    const options = {
      method: 'POST',
      url: 'https://d7sms.p.rapidapi.com/otp/send',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
        'X-RapidAPI-Key':  process.env.RAPIDAPI_KEY,
      },
      data: {
        to: phone,
        content: "Your Formique & Co OTP is: {}",
      },
    };
    const response = await axios.request(options);
    res.json({ otpId: response.data.otp_id, message: 'OTP sent' });
  } catch (error) {
    next(error);
  }
};

exports.verifyOTP = async (req, res, next) => {
  try {
    const { phone, otpId, otp } = req.body;
    if (!phone || !otpId || !otp) {
      return res.status(400).json({ message: 'Phone, OTP ID and OTP code are required' });
    }
    // Verify OTP via D7
    const options = {
      method: 'POST',
      url: 'https://d7sms.p.rapidapi.com/otp/verify',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST,
        'X-RapidAPI-Key':  process.env.RAPIDAPI_KEY,
      },
      data: { otp_id: otpId, otp: otp },
    };
    const response = await axios.request(options);
    if (response.data.verified) {
      let user = await User.findOne({ phone });
      if (!user) {
        user = await User.create({ phone, isVerified: true });
      } else {
        user.isVerified = true;
        await user.save();
      }
      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
      return res.json({ token, user });
    }
    res.status(400).json({ message: 'Invalid OTP' });
  } catch (error) {
    next(error);
  }
};

