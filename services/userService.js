const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Tạo người dùng mới
const createUser = async (userData) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = new User({
        ...userData,
        password: hashedPassword
    });

    return await newUser.save();
};

// Tạo tài khoản admin mới
const createAdminUser = async (userData) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newAdmin = new User({
        ...userData,
        password: hashedPassword,
        isAdmin: true
    });

    return await newAdmin.save();
};

// Cập nhật thông tin người dùng
const updateUser = async (userId, userData) => {
    if (userData.password) {
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(userData.password, salt);
    }

    return await User.findByIdAndUpdate(userId, userData, { new: true });
};

// Xóa người dùng
const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

// Lấy danh sách người dùng
const getUsers = async () => {
    return await User.find();
};

module.exports = {
    createUser,
    createAdminUser,
    updateUser,
    deleteUser,
    getUsers
};
