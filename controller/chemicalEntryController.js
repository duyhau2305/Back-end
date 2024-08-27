const chemicalEntryService = require('../services/chemicalEntryService');

const getChemicalEntries = async (req, res) => {
  try {
    const chemicalEntries = await chemicalEntryService.getAllChemicalEntries();
    res.json(chemicalEntries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getChemicalEntry = async (req, res) => {
  try {
    const chemicalEntry = await chemicalEntryService.getChemicalEntryById(req.params.id);
    if (!chemicalEntry) {
      return res.status(404).json({ message: 'Chemical Entry not found' });
    }
    res.json(chemicalEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createChemicalEntry = async (req, res) => {
  try {
    const chemicalEntry = await chemicalEntryService.createChemicalEntry(req.body);
    res.status(201).json(chemicalEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateChemicalEntry = async (req, res) => {
  try {
    const chemicalEntry = await chemicalEntryService.updateChemicalEntry(req.params.id, req.body);
    if (!chemicalEntry) {
      return res.status(404).json({ message: 'Chemical Entry not found' });
    }
    res.json(chemicalEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteChemicalEntry = async (req, res) => {
  try {
    const chemicalEntry = await chemicalEntryService.deleteChemicalEntry(req.params.id);
    if (!chemicalEntry) {
      return res.status(404).json({ message: 'Chemical Entry not found' });
    }
    res.json({ message: 'Chemical Entry deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChemicalEntries,
  getChemicalEntry,
  createChemicalEntry,
  updateChemicalEntry,
  deleteChemicalEntry,
};
