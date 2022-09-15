// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const {
	newArrivalProducts,
} = require('../../controllers/get/newArrivalProducts');

// products get api here
router.get('/newArrivalProducts', newArrivalProducts);

module.exports = router;
