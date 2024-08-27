// models/SupportRequest.js
const mongoose = require('mongoose');

const SupportRequestSchema = new mongoose.Schema({
  issue: { type: String, required: true },
  priority: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "Chưa hướng dẫn" },
  emailContent: { type: String, default: "" },
});

module.exports = mongoose.model('SupportRequest', SupportRequestSchema);
