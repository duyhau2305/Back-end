// models/ResultNguyenLieu.js
const mongoose = require('mongoose');

// Định nghĩa schema cho ResultNguyenLieu
const ResultNguyenLieuSchema = new mongoose.Schema({
  status: { type: String, required: true },
  kNumber: { type: String, required: true },
  material: { type: String, required: true },
  lotNumber: { type: String, required: true },
  productionDate: { type: Date, required: true },
  expiryDate: { type: Date, required: true },
  weight: { type: String, required: true },
  statusSample: { type: String, required: true },
  file: { type: String, required: true },
  resultDate: { type: Date, required: true },
  placesample: { type: String, required: true },
  user: { type: String, required: true },
  entryDate: { type: Date, required: true },
});

// Tạo và xuất model từ schema
const ResultNguyenLieu = mongoose.model('ResultNguyenLieu', ResultNguyenLieuSchema);
module.exports = ResultNguyenLieu;
