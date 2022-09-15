// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { priceFilter } = require('../../controllers/get/productsByPrice');

// products get api here
router.get('/products/filteredProducts/:minPrice/:maxPrice', priceFilter);

module.exports = router;
