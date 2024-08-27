const shiftReportService = require('../services/shiftReportService');

// Lấy tất cả các báo cáo ca làm việc
const getShiftReports = async (req, res) => {
    try {
        const reports = await shiftReportService.getAllShiftReports();
        res.status(200).json(reports);
    } catch (error) {
        console.error('Lỗi khi lấy tất cả các báo cáo ca làm việc:', error);
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Lấy báo cáo ca làm việc theo ID
const getShiftReport = async (req, res) => {
    try {
        const report = await shiftReportService.getShiftReportById(req.params.id);
        res.status(200).json(report);
    } catch (error) {
        console.error(`Lỗi khi lấy báo cáo ca làm việc với ID ${req.params.id}:`, error);
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
    }
};

// Tạo báo cáo ca mới
const createShiftReport = async (req, res) => {
    try {
        const newReport = await shiftReportService.createShiftReport(req.body);
        res.status(201).json(newReport);
    } catch (error) {
        console.error('Lỗi khi tạo báo cáo ca mới:', error);
        res.status(500).json({ error: 'Lỗi khi tạo báo cáo ca' });
    }
};

// Cập nhật báo cáo ca làm việc theo ID
const updateShiftReport = async (req, res) => {
    try {
        const updatedReport = await shiftReportService.updateShiftReport(req.params.id, req.body);
        res.status(200).json(updatedReport);
    } catch (error) {
        console.error(`Lỗi khi cập nhật báo cáo ca với ID ${req.params.id}:`, error);
        res.status(500).json({ error: 'Lỗi khi cập nhật báo cáo ca' });
    }
};

// Xóa báo cáo ca làm việc
const deleteShiftReport = async (req, res) => {
    try {
        await shiftReportService.deleteShiftReport(req.params.id);
        res.status(200).json({ message: 'Đã xóa báo cáo ca thành công' });
    } catch (error) {
        console.error(`Lỗi khi xóa báo cáo ca với ID ${req.params.id}:`, error);
        res.status(500).json({ error: 'Lỗi khi xóa báo cáo ca' });
    }
};

module.exports = {
    getShiftReports,
    getShiftReport,
    createShiftReport,
    updateShiftReport,
    deleteShiftReport
};
