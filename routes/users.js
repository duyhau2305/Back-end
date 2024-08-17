// routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser, deleteUser, toggleLockUser } = require('../controller/userController');

// Lấy danh sách người dùng
router.get('/', getUsers);

// Thêm người dùng mới
router.post('/', createUser);

// Cập nhật người dùng
router.put('/:id', updateUser);

// Xóa người dùng
router.delete('/:id', deleteUser);

// Thay đổi trạng thái khóa người dùng
router.patch('/lock/:id', toggleLockUser);

module.exports = router;
