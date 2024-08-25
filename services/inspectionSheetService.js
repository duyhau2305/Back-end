const InspectionSheet = require('../models/inspectionSheetModel');

const getAllInspectionSheets = async () => {
  return await InspectionSheet.find();
};

const getInspectionSheetById = async (id) => {
  return await InspectionSheet.findById(id);
};

const createInspectionSheet = async (data) => {
  const inspectionSheet = new InspectionSheet(data);
  return await inspectionSheet.save();
};

const updateInspectionSheet = async (id, data) => {
  return await InspectionSheet.findByIdAndUpdate(id, data, { new: true });
};

const deleteInspectionSheet = async (id) => {
  return await InspectionSheet.findByIdAndDelete(id);
};

module.exports = {
  getAllInspectionSheets,
  getInspectionSheetById,
  createInspectionSheet,
  updateInspectionSheet,
  deleteInspectionSheet,
};
