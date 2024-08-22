// controllers/substituteMaterialController.js
const substituteMaterialService = require('../services/substituteMaterialService');

const getAllSubstituteMaterials = async (req, res) => {
  try {
    const materials = await substituteMaterialService.getAllSubstituteMaterials();
    res.json(materials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getSubstituteMaterialById = async (req, res) => {
  try {
    const material = await substituteMaterialService.getSubstituteMaterialById(req.params.id);
    if (!material) return res.status(404).json({ error: 'Material not found' });
    res.json(material);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createSubstituteMaterial = async (req, res) => {
  try {
    const newMaterial = await substituteMaterialService.createSubstituteMaterial(req.body);
    res.status(201).json(newMaterial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateSubstituteMaterial = async (req, res) => {
  try {
    const updatedMaterial = await substituteMaterialService.updateSubstituteMaterial(req.params.id, req.body);
    if (!updatedMaterial) return res.status(404).json({ error: 'Material not found' });
    res.json(updatedMaterial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteSubstituteMaterial = async (req, res) => {
  try {
    const deletedMaterial = await substituteMaterialService.deleteSubstituteMaterial(req.params.id);
    if (!deletedMaterial) return res.status(404).json({ error: 'Material not found' });
    res.json({ message: 'Material deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSubstituteMaterials,
  getSubstituteMaterialById,
  createSubstituteMaterial,
  updateSubstituteMaterial,
  deleteSubstituteMaterial
};
