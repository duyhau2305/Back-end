const jwt = require('jsonwebtoken');

// Middleware xác thực người dùng
const authMiddleware = (req, res, next) => {
  // Lấy token từ header 'x-auth-token'
  const token = req.headers['x-auth-token'];
  
  // Nếu không có token, trả về lỗi 401 (Unauthorized)
  if (!token) return res.status(401).json({ error: 'Không có token' });

  try {
    // Xác thực và giải mã token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Gán thông tin người dùng giải mã được vào đối tượng req
    req.user = decoded;
    
    // Tiếp tục với middleware hoặc route handler tiếp theo
    next();
  } catch (error) {
    // Nếu token không hợp lệ, trả về lỗi 401 (Unauthorized)
    res.status(401).json({ error: 'Token không hợp lệ' });
  }
};

module.exports = authMiddleware;
