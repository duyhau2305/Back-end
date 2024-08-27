const LayMauNguyenLieu = require('../models/LayMauNguyenLieu');

// Service để tạo mới một bản ghi LayMauNguyenLieu
const createLayMauNguyenLieu = async (data) => {
  const newRecord = new LayMauNguyenLieu(data);
  return await newRecord.save();
};

// Service để lấy tất cả các bản ghi LayMauNguyenLieu
const getAllLayMauNguyenLieu = async () => {
  return await LayMauNguyenLieu.find({});
};

// Service để lấy một bản ghi LayMauNguyenLieu theo ID
const getLayMauNguyenLieuById = async (id) => {
  return await LayMauNguyenLieu.findById(id);
};

// Service để cập nhật một bản ghi LayMauNguyenLieu theo ID
const updateLayMauNguyenLieu = async (id, data) => {
  return await LayMauNguyenLieu.findByIdAndUpdate(id, data, { new: true });
};

// Service để xóa một bản ghi LayMauNguyenLieu theo ID
const deleteLayMauNguyenLieu = async (id) => {
  return await LayMauNguyenLieu.findByIdAndDelete(id);
};

module.exports = {
  createLayMauNguyenLieu,
  getAllLayMauNguyenLieu,
  getLayMauNguyenLieuById,
  updateLayMauNguyenLieu,
  deleteLayMauNguyenLieu,
};
