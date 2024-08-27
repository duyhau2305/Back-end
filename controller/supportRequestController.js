// controllers/supportRequestController.js
const supportRequestService = require('../services/supportRequestService');

const sendEmail = require('../services/emailService');

const getAllRequests = async (req, res) => {
  try {
    const requests = await supportRequestService.getAllRequests();
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRequestById = async (req, res) => {
  try {
    const request = await supportRequestService.getRequestById(req.params.id);
    res.json(request);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRequest = async (req, res) => {
  try {
    const newRequest = await supportRequestService.createRequest(req.body);
    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRequest = async (req, res) => {
  try {
    const updatedRequest = await supportRequestService.updateRequest(req.params.id, req.body);
    res.json(updatedRequest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRequest = async (req, res) => {
  try {
    await supportRequestService.deleteRequest(req.params.id);
    res.json({ message: 'Request deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const sendSupportEmail = async (req, res) => {
    const { recipientEmail, subject, emailContent } = req.body;
  
    try {
      await sendEmail(recipientEmail, subject, emailContent);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  };
  




module.exports = {
  getAllRequests,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
  sendSupportEmail
};
