const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
const User = require('../models/User');

// Tạo tài khoản admin
const createAdminUser = async (req, res) => {
    try {
        const adminUser = await userService.createAdminUser(req.body);
        res.status(201).json(adminUser);
    } catch (error) {
        console.error('Error creating admin user:', error.message);
        res.status(400).json({ message: error.message });
    }
};

// Đăng nhập người dùng
const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Tên đăng nhập không đúng' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mật khẩu không đúng' });
        }

        const token = jwt.sign(
            { user: { id: user._id, isAdmin: user.isAdmin } },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ token, user });
    } catch (error) {
        console.error('Lỗi server:', error.message);
        res.status(500).json({ message: 'Lỗi server', error: error.message });
    }
};

// Tạo người dùng mới
const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error.message);
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật thông tin người dùng
const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error.message);
        res.status(400).json({ message: error.message });
    }
};

// Xóa người dùng
const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(204).json({ message: 'User deleted' });
    } catch (error) {
        console.error('Error deleting user:', error.message);
        res.status(400).json({ message: error.message });
    }
};

// Lấy danh sách người dùng
const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(400).json({ message: error.message });
    }
};

const toggleLockUser = async (req, res) => {
  try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      
      if (!user) {
          return res.status(404).json({ message: 'Người dùng không tồn tại' });
      }

      // Đảo ngược trạng thái khóa
      user.locked = !user.locked;
      await user.save();

      res.status(200).json({ message: `Người dùng đã được ${user.locked ? 'khóa' : 'mở khóa'}`, user });
  } catch (error) {
      console.error('Error toggling lock status:', error.message);
      res.status(500).json({ message: 'Lỗi server', error: error.message });
  }
};

module.exports = {
  createAdminUser,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
  toggleLockUser // Thêm hàm này vào exports
};