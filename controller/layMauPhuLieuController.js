const layMauPhuLieuService = require('../services/layMauPhuLieuService');

const createLayMauPhuLieu = async (req, res) => {
  try {
    const layMauPhuLieu = await layMauPhuLieuService.createLayMauPhuLieu(req.body);
    res.status(201).json(layMauPhuLieu);
  } catch (error) {
    res.status(500).json({ message: 'Error creating LayMauPhuLieu', error });
  }
};

const getAllLayMauPhuLieu = async (req, res) => {
  try {
    const layMauPhuLieu = await layMauPhuLieuService.getAllLayMauPhuLieu();
    res.status(200).json(layMauPhuLieu);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching LayMauPhuLieu', error });
  }
};

const getLayMauPhuLieuById = async (req, res) => {
  try {
    const layMauPhuLieu = await layMauPhuLieuService.getLayMauPhuLieuById(req.params.id);
    if (layMauPhuLieu) {
      res.status(200).json(layMauPhuLieu);
    } else {
      res.status(404).json({ message: 'LayMauPhuLieu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching LayMauPhuLieu', error });
  }
};

const updateLayMauPhuLieu = async (req, res) => {
  try {
    const layMauPhuLieu = await layMauPhuLieuService.updateLayMauPhuLieu(req.params.id, req.body);
    if (layMauPhuLieu) {
      res.status(200).json(layMauPhuLieu);
    } else {
      res.status(404).json({ message: 'LayMauPhuLieu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating LayMauPhuLieu', error });
  }
};

const deleteLayMauPhuLieu = async (req, res) => {
  try {
    const layMauPhuLieu = await layMauPhuLieuService.deleteLayMauPhuLieu(req.params.id);
    if (layMauPhuLieu) {
      res.status(200).json({ message: 'LayMauPhuLieu deleted successfully' });
    } else {
      res.status(404).json({ message: 'LayMauPhuLieu not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting LayMauPhuLieu', error });
  }
};

const getLayMauPhuLieuByKNumber = async (req, res) => {
    try {
      const layMauPhuLieu = await layMauPhuLieuService.getLayMauPhuLieuByKNumber(req.params.kNumber);
      if (layMauPhuLieu) {
        res.status(200).json(layMauPhuLieu);
      } else {
        res.status(404).json({ message: 'LayMauPhuLieu not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching LayMauPhuLieu by kNumber', error });
    }
  };
  
  module.exports = {
    createLayMauPhuLieu,
    getAllLayMauPhuLieu,
    getLayMauPhuLieuById,
    updateLayMauPhuLieu,
    deleteLayMauPhuLieu,
    getLayMauPhuLieuByKNumber,
  };
  