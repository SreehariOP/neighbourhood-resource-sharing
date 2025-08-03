const express = require('express');
const router = express.Router();
const itemControllers = require('../controllers/itemControllers');

router.get('/',itemControllers.getAllProducts);

module.exports = router;