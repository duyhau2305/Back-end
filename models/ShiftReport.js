// models/ShiftReport.js
const mongoose = require('mongoose');

const ShiftReportSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // Ngày ca làm việc
  shift: { type: String, required: true }, // Ca làm việc (ví dụ: Sáng, Chiều)
  shiftLeader: { type: String, required: true }, // Trưởng ca
  productionOrder: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductionOrder', required: true }, // Liên kết với ProductionOrder
  plannedQty: { type: Number, required: true }, // Số lượng kế hoạch (sẽ lấy từ quantity của ProductionOrder)
  actualQty: { type: Number, required: true } // Số lượng thực tế
});

const ShiftReport = mongoose.model('ShiftReport', ShiftReportSchema);

module.exports = ShiftReport;
