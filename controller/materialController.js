const materialService = require('../services/materialService');

const createMaterial = async (req, res) => {
  try {
    const material = await materialService.createMaterial(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create material', error });
  }
};

const getAllMaterials = async (req, res) => {
  try {
    const materials = await materialService.getAllMaterials();
    res.status(200).json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch materials', error });
  }
};

const getMaterialById = async (req, res) => {
  try {
    const material = await materialService.getMaterialById(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch material', error });
  }
};

const updateMaterial = async (req, res) => {
  try {
    const material = await materialService.updateMaterial(req.params.id, req.body);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update material', error });
  }
};

const deleteMaterial = async (req, res) => {
  try {
    const material = await materialService.deleteMaterial(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(204).json({ message: 'Material deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete material', error });
  }
};

module.exports = {
  createMaterial,
  getAllMaterials,
  getMaterialById,
  updateMaterial,
  deleteMaterial,
};
