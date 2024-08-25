const LayMauPhuLieu = require('../models/LayMauPhuLieu');

const createLayMauPhuLieu = async (data) => {
  const layMauPhuLieu = new LayMauPhuLieu(data);
  return await layMauPhuLieu.save();
};

const getAllLayMauPhuLieu = async () => {
  return await LayMauPhuLieu.find();
};

const getLayMauPhuLieuById = async (id) => {
  return await LayMauPhuLieu.findById(id);
};

const updateLayMauPhuLieu = async (id, data) => {
  return await LayMauPhuLieu.findByIdAndUpdate(id, data, { new: true });
};

const deleteLayMauPhuLieu = async (id) => {
  return await LayMauPhuLieu.findByIdAndDelete(id);
};

module.exports = {
  createLayMauPhuLieu,
  getAllLayMauPhuLieu,
  getLayMauPhuLieuById,
  updateLayMauPhuLieu,
  deleteLayMauPhuLieu,
};
