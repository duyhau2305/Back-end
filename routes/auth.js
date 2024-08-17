const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controller/authController');
const { authMiddleware, adminMiddleware } = require('../middlewares/authMiddleware');

// Route cho xác thực và quản lý người dùng
router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware, getCurrentUser);

// Các route yêu cầu quyền admin
router.post('/users', authMiddleware, adminMiddleware, createUser);       // Tạo người dùng mới
router.put('/users/:id', authMiddleware, adminMiddleware, updateUser);    // Cập nhật thông tin người dùng
router.delete('/users/:id', authMiddleware, adminMiddleware, deleteUser); // Xóa người dùng

module.exports = router;
