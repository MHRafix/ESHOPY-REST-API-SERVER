// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { singleProduct } = require('../../controllers/get/singleProduct');

// products get api here
router.get('/shop/singleProducts/:productId', singleProduct);

module.exports = router;
