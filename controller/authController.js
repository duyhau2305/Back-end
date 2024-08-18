const authService = require('../services/authService');

// Đăng ký người dùng mới
exports.register = async (req, res) => {
  try {
    const token = await authService.registerUser(req.body);
    res.status(201).json({ token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const token = await authService.loginUser(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Lấy thông tin người dùng hiện tại
exports.getCurrentUser = async (req, res) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Tạo người dùng mới (dành cho quản trị viên)
exports.createUser = async (req, res) => {
  try {
    const user = await authService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
  try {
    const user = await authService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
  try {
    const user = await authService.deleteUser(req.params.id);
    res.status(200).json({ msg: 'User deleted', user });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

// Tìm người dùng theo username
exports.findUser = async (req, res) => {
  try {
    const user = await authService.findUser(req.params.username);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
