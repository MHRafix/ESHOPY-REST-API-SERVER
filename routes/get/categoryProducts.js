// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { catgorizeProducts } = require('../../controllers/get/categoryProducts');

// products get api here
router.get('/products/:category', catgorizeProducts);

module.exports = router;
