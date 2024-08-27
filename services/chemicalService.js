// services/chemicalService.js
const Chemical = require('../models/chemical');

const getAllChemicals = () => Chemical.find();

const getChemicalById = (id) => Chemical.findById(id);

const createChemical = (data) => Chemical.create(data);

const updateChemical = (id, data) => Chemical.findByIdAndUpdate(id, data, { new: true });

const deleteChemical = (id) => Chemical.findByIdAndDelete(id);

module.exports = {
  getAllChemicals,
  getChemicalById,
  createChemical,
  updateChemical,
  deleteChemical,
};
