// services/supportRequestService.js
const SupportRequest = require('../models/supportRequestModel');

const getAllRequests = async () => {
  return await SupportRequest.find();
};

const getRequestById = async (id) => {
  return await SupportRequest.findById(id);
};

const createRequest = async (data) => {
  const newRequest = new SupportRequest(data);
  return await newRequest.save();
};

const updateRequest = async (id, data) => {
  return await SupportRequest.findByIdAndUpdate(id, data, { new: true });
};

const deleteRequest = async (id) => {
  return await SupportRequest.findByIdAndDelete(id);
};

module.exports = {
  getAllRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
};
