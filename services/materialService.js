const Material = require('../models/Material');

const createMaterial = async (data) => {
  const material = new Material(data);
  return await material.save();
};

const getAllMaterials = async () => {
  return await Material.find();
};

const getMaterialById = async (id) => {
  return await Material.findById(id);
};

const updateMaterial = async (id, data) => {
  return await Material.findByIdAndUpdate(id, data, { new: true });
};

const deleteMaterial = async (id) => {
  return await Material.findByIdAndDelete(id);
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
};
