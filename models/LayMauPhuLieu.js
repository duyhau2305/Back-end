const mongoose = require('mongoose');

const LayMauPhuLieuSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  user: { type: String, required: true },
  status: { type: String, required: true },
  material: { type: String, required: true },
  lotNumber: { type: String, required: true },
  kNumber: { type: String, required: true },
  weight: { type: String, required: true },
  packaging: { type: String, required: true },
  productionDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  manufacturer: { type: String, required: true },
  supplier: { type: String, required: true }
});

module.exports = mongoose.model('LayMauPhuLieu', LayMauPhuLieuSchema);
