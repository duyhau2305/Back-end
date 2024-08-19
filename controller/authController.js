const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Đăng ký người dùng mới
exports.registerUser = async (req, res) => {
  const { employeeId, username, name, email, password, role } = req.body;
  
  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Tên đăng nhập đã tồn tại' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      employeeId,
      username,
      name,
      email,
      password: hashedPassword,
      role
    });

    await user.save();
    res.status(201).json({ message: 'Người dùng đã được tạo thành công' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Đăng nhập và lấy JWT
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ error: 'Tên đăng nhập hoặc mật khẩu không đúng' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi' });
  }
};

// Lấy danh sách người dùng
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách người dùng' });
  }
};

// Lấy thông tin người dùng theo ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'Người dùng không tìm thấy' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin người dùng' });
  }
};

// Cập nhật thông tin người dùng
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  try {
    const user = await User.findByIdAndUpdate(id, updates, { new: true });
    if (!user) return res.status(404).json({ error: 'Người dùng không tìm thấy' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật thông tin người dùng' });
  }
};

// Xóa người dùng
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: 'Người dùng đã được xóa thành công' });
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa người dùng' });
  }
};

// Khóa/Mở khóa người dùng
exports.lockUser = async (req, res) => {
  const { id } = req.params;
  
  try {
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'Người dùng không tìm thấy' });

    user.locked = !user.locked;
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Đã xảy ra lỗi khi thay đổi trạng thái khóa' });
  }
};

// Tạo tài khoản admin đầu tiên
exports.setupAdmin = async (req, res) => {
  const { employeeId, username, name, email, password } = req.body;
  const role = 'admin'; // Đặt vai trò là admin

  try {
    // Kiểm tra xem đã có tài khoản admin chưa
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      return res.status(400).json({ error: 'Tài khoản admin đã tồn tại' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Tạo tài khoản admin
    const admin = new User({
      employeeId,
      username,
      name,
      email,
      password: hashedPassword,
      role
    });

    await admin.save();
    res.status(201).json({ message: 'Tài khoản admin đã được tạo thành công' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
