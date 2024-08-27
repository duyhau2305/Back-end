const ShiftReport = require('../models/ShiftReport');
const ProductionOrder = require('../models/ProductionOrder');

// Lấy tất cả các báo cáo ca
const getAllShiftReports = async () => {
    return await ShiftReport.find()
        .populate('productionOrder', 'orderCode quantity'); // Lấy orderCode và quantity từ ProductionOrder
};

// Lấy báo cáo ca theo ID
const getShiftReportById = async (id) => {
    const report = await ShiftReport.findById(id)
        .populate('productionOrder', 'orderCode quantity'); // Lấy orderCode và quantity từ ProductionOrder

    if (!report) {
        throw new Error('Báo cáo ca không tồn tại');
    }

    return report;
};

// Tạo báo cáo ca mới
const createShiftReport = async (data) => {
    const { date, shift, shiftLeader, productionOrderId, actualQty } = data;
     // In ra thông tin để kiểm tra
     console.log('orderCode received:', orderCode);

    // Tìm ProductionOrder dựa trên ID
    const productionOrder = await ProductionOrder.findById(productionOrderId);
    console.log('Found productionOrder:', productionOrder);
    if (!productionOrder) {
        throw new Error('Không tìm thấy lệnh sản xuất với mã đơn hàng này');
    }

    const plannedQty = productionOrder.quantity; // Lấy số lượng từ ProductionOrder làm plannedQty

    // Tạo báo cáo ca mới
    const newReport = new ShiftReport({
        date,
        shift,
        shiftLeader,
        productionOrder: productionOrder._id, // Liên kết với ProductionOrder
        plannedQty,
        actualQty
    });

    return await newReport.save();
};

// Cập nhật báo cáo ca
const updateShiftReport = async (id, data) => {
    const { date, shift, shiftLeader, productionOrderId, actualQty } = data;

    // Tìm ProductionOrder dựa trên ID
    const productionOrder = await ProductionOrder.findById(productionOrderId);
    if (!productionOrder) {
        throw new Error('Không tìm thấy lệnh sản xuất với mã đơn hàng này');
    }

    const plannedQty = productionOrder.quantity; // Lấy số lượng từ ProductionOrder làm plannedQty

    // Cập nhật báo cáo ca
    const updatedReport = await ShiftReport.findByIdAndUpdate(
        id,
        {
            date,
            shift,
            shiftLeader,
            productionOrder: productionOrder._id, // Liên kết với ProductionOrder
            plannedQty,
            actualQty
        },
        { new: true }
    );

    if (!updatedReport) {
        throw new Error('Báo cáo ca không tồn tại');
    }

    return updatedReport;
};

// Xóa báo cáo ca
const deleteShiftReport = async (id) => {
    const deletedReport = await ShiftReport.findByIdAndDelete(id);

    if (!deletedReport) {
        throw new Error('Báo cáo ca không tồn tại');
    }

    return deletedReport;
};

module.exports = {
    getAllShiftReports,
    getShiftReportById,
    createShiftReport,
    updateShiftReport,
    deleteShiftReport
};
