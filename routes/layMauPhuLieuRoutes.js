const express = require('express');
const layMauPhuLieuController = require('../controller/layMauPhuLieuController');

const router = express.Router();

router.post('/', layMauPhuLieuController.createLayMauPhuLieu);
router.get('/', layMauPhuLieuController.getAllLayMauPhuLieu);
router.get('/:id', layMauPhuLieuController.getLayMauPhuLieuById);
router.put('/:id', layMauPhuLieuController.updateLayMauPhuLieu);
router.delete('/:id', layMauPhuLieuController.deleteLayMauPhuLieu);

module.exports = router;
