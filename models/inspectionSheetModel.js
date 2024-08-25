const mongoose = require('mongoose');

const inspectionSheetSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  productCode: {
    type: String,
    required: true,
  },
  batchNumber: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  printed: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const InspectionSheet = mongoose.model('InspectionSheet', inspectionSheetSchema);

module.exports = InspectionSheet;
