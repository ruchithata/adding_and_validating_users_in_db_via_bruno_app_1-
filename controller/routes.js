const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../model/UserSchema');


const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already registered' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  // Save user to the database
  await newUser.save();

  return res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;