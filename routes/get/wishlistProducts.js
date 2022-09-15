// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { wishlistProducts } = require('../../controllers/get/wishlistProducts');

// products get api here
router.get('/getFromWishList/:email', wishlistProducts);

module.exports = router;
