const express = require('express');
const router = express.Router();
const supportRequestController = require('../controller/supportRequestController');

router.get('/', supportRequestController.getRequests);
router.get('/:id', supportRequestController.getRequest);
router.post('/', supportRequestController.createRequest);
router.put('/:id', supportRequestController.updateRequest);
router.delete('/:id', supportRequestController.deleteRequest);

module.exports = router;
