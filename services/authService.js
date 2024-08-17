const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Đăng ký người dùng mới
const registerUser = async ({ employeeId, username, name, email, password, role }) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    user = new User({
      employeeId,
      username,
      name,
      email,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' });

    return { token };
  } catch (error) {
    throw new Error(`Registration failed: ${error.message}`);
  }
};

// Đăng nhập người dùng
const loginUser = async ({ username, password }) => {
  try {
    let user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5h' });

    return { token };
  } catch (error) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

// Lấy thông tin người dùng hiện tại
const getCurrentUser = async (userId) => {
  try {
    const user = await User.findById(userId).select('-password');
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Fetching user failed: ${error.message}`);
  }
};

// Tạo người dùng mới (dành cho quản trị viên)
const createUser = async ({ employeeId, username, name, email, password, role }) => {
  try {
    let user = await User.findOne({ email });
    if (user) {
      throw new Error('User already exists');
    }

    user = new User({
      employeeId,
      username,
      name,
      email,
      password,
      role,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    return user;
  } catch (error) {
    throw new Error(`Creating user failed: ${error.message}`);
  }
};

// Cập nhật thông tin người dùng
const updateUser = async (userId, updateData) => {
  try {
    let user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    if (updateData.password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(updateData.password, salt);
    }

    Object.assign(user, updateData);
    await user.save();

    return user;
  } catch (error) {
    throw new Error(`Updating user failed: ${error.message}`);
  }
};

// Xóa người dùng
const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error(`Deleting user failed: ${error.message}`);
  }
};

module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  createUser,
  updateUser,
  deleteUser,
};
