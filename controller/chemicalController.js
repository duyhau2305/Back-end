// controllers/chemicalController.js
const chemicalService = require('../services/chemicalService');

const getChemicals = async (req, res) => {
  try {
    const chemicals = await chemicalService.getAllChemicals();
    res.json(chemicals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChemicalById = async (req, res) => {
  try {
    const chemical = await chemicalService.getChemicalById(req.params.id);
    if (chemical) {
      res.json(chemical);
    } else {
      res.status(404).json({ message: 'Chemical not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createChemical = async (req, res) => {
  try {
    const newChemical = await chemicalService.createChemical(req.body);
    res.status(201).json(newChemical);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateChemical = async (req, res) => {
  try {
    const updatedChemical = await chemicalService.updateChemical(req.params.id, req.body);
    if (updatedChemical) {
      res.json(updatedChemical);
    } else {
      res.status(404).json({ message: 'Chemical not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteChemical = async (req, res) => {
  try {
    const deletedChemical = await chemicalService.deleteChemical(req.params.id);
    if (deletedChemical) {
      res.json({ message: 'Chemical deleted' });
    } else {
      res.status(404).json({ message: 'Chemical not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChemicals,
  getChemicalById,
  createChemical,
  updateChemical,
  deleteChemical,
};
