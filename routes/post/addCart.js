// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { addCart } = require('../../controllers/post/addCart');

// products post api here
router.post('/addToCartList', addCart);

module.exports = router;
