// models/ProductionOrder.js
const mongoose = require('mongoose');

const ProductionOrderSchema = new mongoose.Schema({
  orderCode: { type: String, required: true },
  batch: { type: String, required: true },
  productCode: { type: String, required: true },
  productName: { type: String, required: true },
  dosageForm: { type: String, required: true },
  printedQty: { type: Number, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  productDate: { type: Date, required: true }
});

const ProductionOrder = mongoose.model('ProductionOrder', ProductionOrderSchema);

module.exports = ProductionOrder;
