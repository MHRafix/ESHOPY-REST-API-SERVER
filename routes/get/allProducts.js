// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { allProducts } = require('../../controllers/get/allProducts');

// products get api here
router.get('/products', allProducts);

module.exports = router;
