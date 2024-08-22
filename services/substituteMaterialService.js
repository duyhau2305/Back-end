// services/substituteMaterialService.js
const SubstituteMaterial = require('../models/SubstituteMaterial');

const getAllSubstituteMaterials = async () => {
  return await SubstituteMaterial.find();
};

const getSubstituteMaterialById = async (id) => {
  return await SubstituteMaterial.findById(id);
};

const createSubstituteMaterial = async (data) => {
  const newMaterial = new SubstituteMaterial(data);
  return await newMaterial.save();
};

const updateSubstituteMaterial = async (id, data) => {
  return await SubstituteMaterial.findByIdAndUpdate(id, data, { new: true });
};

const deleteSubstituteMaterial = async (id) => {
  return await SubstituteMaterial.findByIdAndDelete(id);
};

module.exports = {
  getAllSubstituteMaterials,
  getSubstituteMaterialById,
  createSubstituteMaterial,
  updateSubstituteMaterial,
  deleteSubstituteMaterial
};
