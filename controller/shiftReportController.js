// controllers/shiftReportController.js
const shiftReportService = require('../services/shiftReportService');

const createShiftReport = async (req, res) => {
  try {
    const shiftReport = await shiftReportService.createShiftReport(req.body);
    res.status(201).json(shiftReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShiftReports = async (req, res) => {
  try {
    const shiftReports = await shiftReportService.getShiftReports();
    res.status(200).json(shiftReports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getShiftReportById = async (req, res) => {
  try {
    const shiftReport = await shiftReportService.getShiftReportById(req.params.id);
    if (!shiftReport) {
      return res.status(404).json({ message: 'Báo cáo ca làm việc không tồn tại' });
    }
    res.status(200).json(shiftReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateShiftReport = async (req, res) => {
  try {
    const shiftReport = await shiftReportService.updateShiftReport(req.params.id, req.body);
    if (!shiftReport) {
      return res.status(404).json({ message: 'Báo cáo ca làm việc không tồn tại' });
    }
    res.status(200).json(shiftReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteShiftReport = async (req, res) => {
  try {
    const shiftReport = await shiftReportService.deleteShiftReport(req.params.id);
    if (!shiftReport) {
      return res.status(404).json({ message: 'Báo cáo ca làm việc không tồn tại' });
    }
    res.status(200).json({ message: 'Đã xóa báo cáo ca làm việc' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createShiftReport,
  getShiftReports,
  getShiftReportById,
  updateShiftReport,
  deleteShiftReport
};
