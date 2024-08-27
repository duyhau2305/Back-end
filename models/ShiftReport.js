const mongoose = require('mongoose');

const ShiftReportSchema = new mongoose.Schema({
  date: { type: Date, required: true }, // Ngày ca làm việc
  shift: { type: String, required: true }, // Ca làm việc (ví dụ: Sáng, Chiều)
  shiftLeader: { type: String, required: true }, // Trưởng ca
  productionOrder: { type: String, required: true }, // Mã lệnh sản xuất
  plannedQty: { type: Number, required: true }, // Số lượng kế hoạch
  actualQty: { type: Number, required: true } // Số lượng thực tế
});

const ShiftReport = mongoose.model('ShiftReport', ShiftReportSchema);

module.exports = ShiftReport;
