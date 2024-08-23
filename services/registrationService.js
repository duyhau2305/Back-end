// services/registrationService.js
const Registration = require('../models/Registration');

// Tạo mới một đăng ký
const createRegistration = async (data) => {
  const registration = new Registration(data);
  return await registration.save();
};

// Lấy tất cả các đăng ký
const getAllRegistrations = async () => {
  return await Registration.find();
};

// Lấy một đăng ký theo ID
const getRegistrationById = async (id) => {
  return await Registration.findById(id);
};

// Cập nhật một đăng ký
const updateRegistration = async (id, data) => {
  return await Registration.findByIdAndUpdate(id, data, { new: true });
};

// Xóa một đăng ký
const deleteRegistration = async (id) => {
  return await Registration.findByIdAndDelete(id);
};

module.exports = {
  createRegistration,
  getAllRegistrations,
  getRegistrationById,
  updateRegistration,
  deleteRegistration,
};
