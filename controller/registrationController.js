// controllers/registrationController.js
const registrationService = require('../services/registrationService');

// Xử lý yêu cầu tạo mới một đăng ký
const createRegistration = async (req, res) => {
  try {
    const registration = await registrationService.createRegistration(req.body);
    res.status(201).json(registration);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xử lý yêu cầu lấy tất cả đăng ký
const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await registrationService.getAllRegistrations();
    res.status(200).json(registrations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xử lý yêu cầu lấy một đăng ký theo ID
const getRegistrationById = async (req, res) => {
  try {
    const registration = await registrationService.getRegistrationById(req.params.id);
    if (registration) {
      res.status(200).json(registration);
    } else {
      res.status(404).json({ message: 'Đăng ký không tồn tại' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xử lý yêu cầu cập nhật một đăng ký
const updateRegistration = async (req, res) => {
  try {
    const registration = await registrationService.updateRegistration(req.params.id, req.body);
    if (registration) {
      res.status(200).json(registration);
    } else {
      res.status(404).json({ message: 'Đăng ký không tồn tại' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Xử lý yêu cầu xóa một đăng ký
const deleteRegistration = async (req, res) => {
  try {
    const registration = await registrationService.deleteRegistration(req.params.id);
    if (registration) {
      res.status(200).json({ message: 'Xóa thành công' });
    } else {
      res.status(404).json({ message: 'Đăng ký không tồn tại' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
