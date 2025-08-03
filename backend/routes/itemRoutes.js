const express = require('express');
const router = express.Router();
const itemControllers = require('../controllers/itemControllers');

router.get('/',itemControllers.getAllProducts);

router.get('/:id', itemControllers.getSpecificProduct);

module.exports = router;