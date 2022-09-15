// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const {
	deleteWishlistProduct,
} = require('../../controllers/delete/deleteWishlistProduct');

// products get api here
router.delete('/deleteWishlistProducts/:uniqueId', deleteWishlistProduct);

module.exports = router;
