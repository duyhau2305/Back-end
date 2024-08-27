// models/chemical.js
const mongoose = require('mongoose');

const chemicalSchema = new mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  typeChemical: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Chemical = mongoose.model('Chemical', chemicalSchema);

module.exports = Chemical;
