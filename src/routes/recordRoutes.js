const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');

router.post('/', recordController.createRecords);
router.get('/', recordController.getRecords);

module.exports = router;