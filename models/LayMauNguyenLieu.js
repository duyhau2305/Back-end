const mongoose = require('mongoose');

// Định nghĩa schema cho collection LayMauNguyenLieu
const layMauNguyenLieuSchema = new mongoose.Schema({
  entryDate: { type: Date, required: true }, // Ngày nhập
  enteredBy: { type: String, required: true }, // Người nhập
  status: { type: String, required: true }, // Trạng thái (ví dụ: 'Sampled', 'Pending Sample')
  materialType: { type: String, required: true }, // Loại nguyên liệu
  lotNumber: { type: String, required: true }, // Số lô
  kNumber: { type: String, required: true }, // Số K
  weight: { type: String, required: true }, // Khối lượng
  packaging: { type: String, required: true }, // Quy cách (ví dụ: '1 (Box)', '11 (Box)')
  productionDate: { type: Date, required: true }, // Ngày sản xuất
  expiryDate: { type: Date, required: true }, // Hạn sử dụng
  manufacturer: { type: String, required: true }, // Nhà sản xuất
  supplier: { type: String, required: true }, // Nhà cung cấp
}, { timestamps: true }); // Tự động tạo createdAt và updatedAt

// Tạo model từ schema
const LayMauNguyenLieu = mongoose.model('LayMauNguyenLieu', layMauNguyenLieuSchema);

module.exports = LayMauNguyenLieu;
