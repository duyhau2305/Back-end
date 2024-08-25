const inspectionSheetService = require('../services/inspectionSheetService');

const getAllInspectionSheets = async (req, res) => {
  try {
    const sheets = await inspectionSheetService.getAllInspectionSheets();
    res.json(sheets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getInspectionSheetById = async (req, res) => {
  try {
    const sheet = await inspectionSheetService.getInspectionSheetById(req.params.id);
    if (!sheet) return res.status(404).json({ message: 'Phiếu không tồn tại' });
    res.json(sheet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createInspectionSheet = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.file = req.file.path;
    }
    const newSheet = await inspectionSheetService.createInspectionSheet(data);
    res.status(201).json(newSheet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateInspectionSheet = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.file = req.file.path;
    }
    const updatedSheet = await inspectionSheetService.updateInspectionSheet(req.params.id, data);
    if (!updatedSheet) return res.status(404).json({ message: 'Phiếu không tồn tại' });
    res.json(updatedSheet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInspectionSheet = async (req, res) => {
  try {
    const deletedSheet = await inspectionSheetService.deleteInspectionSheet(req.params.id);
    if (!deletedSheet) return res.status(404).json({ message: 'Phiếu không tồn tại' });
    res.json({ message: 'Xóa phiếu thành công' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllInspectionSheets,
  getInspectionSheetById,
  createInspectionSheet,
  updateInspectionSheet,
  deleteInspectionSheet,
};
