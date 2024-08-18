const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Middleware xác thực
const userController = require('../controller/userController');

// Đăng ký người dùng mới (chỉ dành cho admin)
router.post('/users', authMiddleware, userController.registerUser);

// Đăng nhập và lấy JWT
router.post('/login', userController.loginUser);

// Lấy danh sách người dùng
router.get('/users', authMiddleware, userController.getUsers);

// Lấy thông tin người dùng theo ID
router.get('/users/:id', authMiddleware, userController.getUserById);

// Cập nhật thông tin người dùng
router.put('/users/:id', authMiddleware, userController.updateUser);

// Xóa người dùng
router.delete('/users/:id', authMiddleware, userController.deleteUser);

// Khóa/Mở khóa người dùng
router.put('/users/:id/lock', authMiddleware, userController.lockUser);

module.exports = router;
