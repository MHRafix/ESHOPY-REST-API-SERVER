// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { shopProducts } = require('../../controllers/get/shopProducts');

// products get api here
router.get('/shopProducts', shopProducts);

module.exports = router;
