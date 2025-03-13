const mongoose = require('mongoose');

// Create user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email is unique in the database
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the model
const User = mongoose.model('User', userSchema);
module.exports = User;