// external improts are here
const express = require('express');
const router = express.Router();

// internal exports are here
const { placeOrder } = require('../../controllers/post/placeOrder');

// products post api here
router.post('/allCustomersOrders', placeOrder);

module.exports = router;
