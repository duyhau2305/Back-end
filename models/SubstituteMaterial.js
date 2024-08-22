// models/SubstituteMaterial.js
const mongoose = require('mongoose');

const SubstituteMaterialSchema = new mongoose.Schema({
  status: { type: String, required: true },
  currentMaterial: { type: String, required: true },
  substituteMaterial: { type: String, required: true },
  materialCode: { type: String, required: true },
  dueDate: { type: Date, required: true },
  result: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('SubstituteMaterial', SubstituteMaterialSchema);
