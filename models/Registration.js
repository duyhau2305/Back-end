// models/Registration.js
const mongoose = require('mongoose');

// Định nghĩa schema cho bảng đăng ký
const registrationSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  approvalNumber: { type: String, required: true },
  registrationDate: { type: Date, required: true },
  expirationDate: { type: Date, required: true },
  product: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
});

// Tạo model từ schema
const Registration = mongoose.model('Registration', registrationSchema);

module.exports = Registration;
