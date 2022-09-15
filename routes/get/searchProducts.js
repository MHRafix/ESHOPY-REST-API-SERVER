// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { searchResult } = require('../../controllers/get/searchProducts');

// products get api here
router.get('/products/searchedProducts/:productTitle', searchResult);

module.exports = router;
