const express = require('express');
const router = express.Router();
const { loginUser } = require('../controller/athuController');

// Đăng nhập
router.post('/login', loginUser);

module.exports = router;
