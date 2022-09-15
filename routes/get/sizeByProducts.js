// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { sizeFilter } = require('../../controllers/get/sizeByProducts');

// products get api here
router.get('/products/sizedProducts/:size', sizeFilter);

module.exports = router;
