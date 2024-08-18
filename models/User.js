const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'QA', 'QC', 'Production'], // Cập nhật đây
    required: true
  },
  locked: {
    type: Boolean,
    default: false
  }
});

// Hàm middleware trước khi lưu dữ liệu để mã hóa mật khẩu
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Chỉ mã hóa mật khẩu nếu nó được sửa đổi
  const salt = await bcrypt.genSalt(10); // Tạo salt với số vòng băm là 10
  this.password = await bcrypt.hash(this.password, salt); // Mã hóa mật khẩu
  next();
});

// Hàm so sánh mật khẩu để xác thực người dùng
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password); // So sánh mật khẩu nhập vào với mật khẩu đã mã hóa
};

module.exports = mongoose.model('User', UserSchema);
