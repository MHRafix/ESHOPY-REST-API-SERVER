const express = require('express');
const router = express.Router();

const { cartProducts } = require('../../controllers/get/cartProducts');

// products get api here
router.get('/getFromCartList/:email', cartProducts);

module.exports = router;
