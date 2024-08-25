const PhuLieu = require('../models/PhuLieu'); // Đảm bảo rằng bạn đã tạo model PhuLieu

const createPhuLieu = async (data) => {
  try {
    const phuLieu = new PhuLieu(data);
    return await phuLieu.save();
  } catch (error) {
    throw new Error('Error creating PhuLieu: ' + error.message);
  }
};

const getAllPhuLieus = async () => {
  try {
    return await PhuLieu.find();
  } catch (error) {
    throw new Error('Error fetching PhuLieus: ' + error.message);
  }
};

const getPhuLieuById = async (id) => {
  try {
    return await PhuLieu.findById(id);
  } catch (error) {
    throw new Error('Error fetching PhuLieu by ID: ' + error.message);
  }
};

const getPhuLieuByKNumber = async (kNumber) => {
  try {
    return await PhuLieu.findOne({ kNumber: kNumber });
  } catch (error) {
    throw new Error('Error fetching PhuLieu by KNumber: ' + error.message);
  }
};

const updatePhuLieu = async (id, data) => {
  try {
    return await PhuLieu.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error('Error updating PhuLieu: ' + error.message);
  }
};

const deletePhuLieu = async (id) => {
  try {
    return await PhuLieu.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting PhuLieu: ' + error.message);
  }
};

module.exports = {
  createPhuLieu,
  getAllPhuLieus,
  getPhuLieuById,
  getPhuLieuByKNumber, // Thêm hàm mới này
  updatePhuLieu,
  deletePhuLieu,
};
