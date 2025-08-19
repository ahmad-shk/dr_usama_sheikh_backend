const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Chat', ChatSchema);
