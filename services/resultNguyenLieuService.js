const ResultNguyenLieu = require('../models/ResultNguyenLieu');

// Lấy tất cả các kết quả nguyên liệu
const getAllResults = async () => {
    return await ResultNguyenLieu.find();
};

// Lấy kết quả nguyên liệu theo ID
const getResultById = async (id) => {
    const result = await ResultNguyenLieu.findById(id);

    if (!result) {
        throw new Error('Kết quả nguyên liệu không tồn tại');
    }

    return result;
};

// Tạo mới kết quả nguyên liệu
const createResult = async (data) => {
    const newResult = new ResultNguyenLieu(data);
    return await newResult.save();
};

// Cập nhật kết quả nguyên liệu
const updateResult = async (id, data) => {
    const updatedResult = await ResultNguyenLieu.findByIdAndUpdate(id, data, { new: true });

    if (!updatedResult) {
        throw new Error('Kết quả nguyên liệu không tồn tại');
    }

    return updatedResult;
};

// Xóa kết quả nguyên liệu
const deleteResult = async (id) => {
    const deletedResult = await ResultNguyenLieu.findByIdAndDelete(id);

    if (!deletedResult) {
        throw new Error('Kết quả nguyên liệu không tồn tại');
    }

    return deletedResult;
};

module.exports = {
    getAllResults,
    getResultById,
    createResult,
    updateResult,
    deleteResult
};
