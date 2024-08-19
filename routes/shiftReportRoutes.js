// routes/shiftReportRoutes.js
const express = require('express');
const {
  createShiftReport,
  getShiftReports,
  getShiftReportById,
  updateShiftReport,
  deleteShiftReport
} = require('../controller/shiftReportController');

const router = express.Router();

// Route để tạo mới một báo cáo ca làm việc
router.post('/', createShiftReport);

// Route để lấy tất cả các báo cáo ca làm việc
router.get('/', getShiftReports);

// Route để lấy một báo cáo ca làm việc cụ thể theo ID
router.get('/:id', getShiftReportById);

// Route để cập nhật một báo cáo ca làm việc theo ID
router.put('/:id', updateShiftReport);

// Route để xóa một báo cáo ca làm việc theo ID
router.delete('/:id', deleteShiftReport);

module.exports = router;
