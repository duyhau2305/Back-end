const phuLieuService = require('../services/phulieuService');

const createPhuLieu = async (req, res) => {
  try {
    const newPhuLieu = await phuLieuService.createPhuLieu(req.body);
    res.status(201).json(newPhuLieu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating PhuLieu', error });
  }
};

const getAllPhuLieus = async (req, res) => {
  try {
    const phuLieus = await phuLieuService.getAllPhuLieus();
    res.status(200).json(phuLieus);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PhuLieus', error });
  }
};

const getPhuLieuById = async (req, res) => {
  try {
    const phuLieu = await phuLieuService.getPhuLieuById(req.params.id);
    if (!phuLieu) return res.status(404).json({ message: 'PhuLieu not found' });
    res.status(200).json(phuLieu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PhuLieu by ID', error });
  }
};

const updatePhuLieu = async (req, res) => {
  try {
    const updatedPhuLieu = await phuLieuService.updatePhuLieu(req.params.id, req.body);
    if (!updatedPhuLieu) return res.status(404).json({ message: 'PhuLieu not found' });
    res.status(200).json(updatedPhuLieu);
  } catch (error) {
    res.status(500).json({ message: 'Error updating PhuLieu', error });
  }
};

const deletePhuLieu = async (req, res) => {
  try {
    const deletedPhuLieu = await phuLieuService.deletePhuLieu(req.params.id);
    if (!deletedPhuLieu) return res.status(404).json({ message: 'PhuLieu not found' });
    res.status(200).json({ message: 'PhuLieu deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting PhuLieu', error });
  }
};

module.exports = {
  createPhuLieu,
  getAllPhuLieus,
  getPhuLieuById,
  updatePhuLieu,
  deletePhuLieu,
};
