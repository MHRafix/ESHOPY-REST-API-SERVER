// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const {
	deleteCartProduct,
} = require('../../controllers/delete/deleteCartProduct');

// products get api here
router.delete('/deleteCartlistProducts/:uniqueId', deleteCartProduct);

module.exports = router;
