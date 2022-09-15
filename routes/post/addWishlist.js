// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { addWishlist } = require('../../controllers/post/addWishlist');

// products post api here
router.post('/addToWishList', addWishlist);

module.exports = router;
