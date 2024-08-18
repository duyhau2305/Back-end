const User = require('../models/User');

// Tạo mới người dùng
exports.createUser = async (data) => {
  const user = new User(data);
  return await user.save();
};

// Cập nhật người dùng
exports.updateUser = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Xóa người dùng
exports.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

// Tìm người dùng theo tên đăng nhập
exports.findUserByUsername = async (username) => {
  return await User.findOne({ username });
};
