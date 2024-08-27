const mongoose = require('mongoose');

const chemicalEntrySchema = new mongoose.Schema({
  date: { type: Date, required: true },
  enteredBy: { type: String, required: true },
  status: { type: String, required: true },
  chemicalName: { type: String, required: true },
  batch: { type: String, required: true },
  quantity: { type: String, required: true },
  unitPrice: { type: String, required: true },
  totalPrice: { type: String, required: true },
  VAT: { type: Number, required: true },
  warehouse: { type: String, required: true },
  manufacturer: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model('ChemicalEntry', chemicalEntrySchema);
