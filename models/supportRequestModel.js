const mongoose = require('mongoose');

const SupportRequestSchema = new mongoose.Schema({
  issue: { type: String, required: true },
  priority: { type: String, required: true, enum: ['Bình Thường', 'Cao', 'Khẩn cấp'] },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('SupportRequest', SupportRequestSchema);
