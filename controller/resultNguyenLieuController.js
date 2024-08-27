const resultNguyenLieuService = require('../services/resultNguyenLieuService');

// Lấy tất cả các kết quả nguyên liệu
const getAllResults = async (req, res) => {
    try {
        const results = await resultNguyenLieuService.getAllResults();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Lấy kết quả nguyên liệu theo ID
const getResultById = async (req, res) => {
    try {
        const result = await resultNguyenLieuService.getResultById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Tạo mới kết quả nguyên liệu
const createResult = async (req, res) => {
    try {
        const result = await resultNguyenLieuService.createResult(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Cập nhật kết quả nguyên liệu
const updateResult = async (req, res) => {
    try {
        const result = await resultNguyenLieuService.updateResult(req.params.id, req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Xóa kết quả nguyên liệu
const deleteResult = async (req, res) => {
    try {
        const result = await resultNguyenLieuService.deleteResult(req.params.id);
        res.status(200).json({ message: 'Kết quả nguyên liệu đã được xóa', result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllResults,
    getResultById,
    createResult,
    updateResult,
    deleteResult
};
