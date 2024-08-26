const jwt = require('jsonwebtoken');

const verifyRole = (roles) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            
            if (!roles.includes(decoded.user.role)) {
                return res.status(403).json({ message: 'Bạn không có quyền truy cập vào chức năng này.' });
            }
            req.user = decoded.user; // Lưu thông tin người dùng vào request
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Xác thực không hợp lệ.' });
        }
    };
};

module.exports = verifyRole;
