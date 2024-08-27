const layMauNguyenLieuService = require('../services/layMauNguyenLieuService');

// Controller để tạo mới một bản ghi LayMauNguyenLieu
const createLayMauNguyenLieu = async (req, res) => {
  try {
    const newRecord = await layMauNguyenLieuService.createLayMauNguyenLieu(req.body);
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tạo mới nguyên liệu.', error: error.message });
  }
};

// Controller để lấy tất cả các bản ghi LayMauNguyenLieu
const getAllLayMauNguyenLieu = async (req, res) => {
  try {
    const records = await layMauNguyenLieuService.getAllLayMauNguyenLieu();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách nguyên liệu.', error: error.message });
  }
};

// Controller để lấy một bản ghi LayMauNguyenLieu theo ID
const getLayMauNguyenLieuById = async (req, res) => {
  try {
    const record = await layMauNguyenLieuService.getLayMauNguyenLieuById(req.params.id);
    if (!record) {
      return res.status(404).json({ message: 'Không tìm thấy nguyên liệu.' });
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy thông tin nguyên liệu.', error: error.message });
  }
};

// Controller để cập nhật một bản ghi LayMauNguyenLieu theo ID
const updateLayMauNguyenLieu = async (req, res) => {
  try {
    const updatedRecord = await layMauNguyenLieuService.updateLayMauNguyenLieu(req.params.id, req.body);
    if (!updatedRecord) {
      return res.status(404).json({ message: 'Không tìm thấy nguyên liệu để cập nhật.' });
    }
    res.status(200).json(updatedRecord);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi cập nhật nguyên liệu.', error: error.message });
  }
};

// Controller để xóa một bản ghi LayMauNguyenLieu theo ID
const deleteLayMauNguyenLieu = async (req, res) => {
  try {
    const deletedRecord = await layMauNguyenLieuService.deleteLayMauNguyenLieu(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({ message: 'Không tìm thấy nguyên liệu để xóa.' });
    }
    res.status(204).json({ message: 'Xóa nguyên liệu thành công.' });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi xóa nguyên liệu.', error: error.message });
  }
};

module.exports = {
  createLayMauNguyenLieu,
  getAllLayMauNguyenLieu,
  getLayMauNguyenLieuById,
  updateLayMauNguyenLieu,
  deleteLayMauNguyenLieu,
};
