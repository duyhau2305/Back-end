const supportRequestService = require('../services/supportRequestService');

const getRequests = async (req, res) => {
  try {
    const requests = await supportRequestService.getAllRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};

const getRequest = async (req, res) => {
  try {
    const request = await supportRequestService.getRequestById(req.params.id);
    if (!request) return res.status(404).json({ error: 'Yêu cầu không tồn tại' });
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};

const createRequest = async (req, res) => {
  try {
    const newRequest = await supportRequestService.createRequest(req.body);
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};

const updateRequest = async (req, res) => {
  try {
    const updatedRequest = await supportRequestService.updateRequest(req.params.id, req.body);
    if (!updatedRequest) return res.status(404).json({ error: 'Yêu cầu không tồn tại' });
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const deletedRequest = await supportRequestService.deleteRequest(req.params.id);
    if (!deletedRequest) return res.status(404).json({ error: 'Yêu cầu không tồn tại' });
    res.json({ message: 'Đã xóa yêu cầu thành công' });
  } catch (error) {
    res.status(500).json({ error: 'Lỗi máy chủ nội bộ' });
  }
};

module.exports = {
  getRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
};
