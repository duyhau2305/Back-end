const mongoose = require('mongoose');

const phulieuSchema = new mongoose.Schema({
  status: { type: String, required: true },
  nCode: { type: String, required: true },
  material: { type: String, required: true },
  type: { type: String, required: true },
  unit: { type: String, required: true },
  manufacturer: { type: String, required: true },
  country: { type: String, required: true },
  externalSample: { type: Boolean, default: false },
});

module.exports = mongoose.model('PhuLieu', phulieuSchema);
