// services/shiftReportService.js
const ShiftReport = require('../models/ShiftReport');
const ProductionOrder = require('../models/ProductionOrder');

const createShiftReport = async (data) => {
  const { orderCode, date, shift, shiftLeader, plannedQty, actualQty } = data;

  // Tìm lệnh sản xuất theo orderCode
  const productionOrder = await ProductionOrder.findOne({ orderCode });

  if (!productionOrder) {
    throw new Error('Lệnh sản xuất không tồn tại');
  }

  // Tạo mới báo cáo ca làm việc
  const shiftReport = new ShiftReport({
    date,
    shift,
    shiftLeader,
    productionOrder: productionOrder._id,
    plannedQty,
    actualQty
  });

  return await shiftReport.save();
};

const getShiftReports = async () => {
  return await ShiftReport.find().populate('productionOrder');
};

const getShiftReportById = async (id) => {
  return await ShiftReport.findById(id).populate('productionOrder');
};

const updateShiftReport = async (id, data) => {
  const { orderCode, date, shift, shiftLeader, plannedQty, actualQty } = data;

  const productionOrder = await ProductionOrder.findOne({ orderCode });

  if (!productionOrder) {
    throw new Error('Lệnh sản xuất không tồn tại');
  }

  return await ShiftReport.findByIdAndUpdate(
    id,
    {
      date,
      shift,
      shiftLeader,
      productionOrder: productionOrder._id,
      plannedQty,
      actualQty
    },
    { new: true }
  );
};

const deleteShiftReport = async (id) => {
  return await ShiftReport.findByIdAndDelete(id);
};

module.exports = {
  createShiftReport,
  getShiftReports,
  getShiftReportById,
  updateShiftReport,
  deleteShiftReport
};
