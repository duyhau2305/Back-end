const ChemicalEntry = require('../models/ChemicalEntry');

const getAllChemicalEntries = async () => {
  return await ChemicalEntry.find();
};

const getChemicalEntryById = async (id) => {
  return await ChemicalEntry.findById(id);
};

const createChemicalEntry = async (data) => {
  const newChemicalEntry = new ChemicalEntry(data);
  return await newChemicalEntry.save();
};

const updateChemicalEntry = async (id, data) => {
  return await ChemicalEntry.findByIdAndUpdate(id, data, { new: true });
};

const deleteChemicalEntry = async (id) => {
  return await ChemicalEntry.findByIdAndDelete(id);
};

module.exports = {
  getAllChemicalEntries,
  getChemicalEntryById,
  createChemicalEntry,
  updateChemicalEntry,
  deleteChemicalEntry,
};
