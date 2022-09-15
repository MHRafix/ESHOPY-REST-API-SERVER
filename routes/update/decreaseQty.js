// external imports are here
const express = require('express');
const router = express.Router();

// internal mports are here
const { decreaseQty } = require('../../controllers/update/decreaseQty');

// product update / put api here
router.patch('/decCartProductQty/:email/:id', decreaseQty);

module.exports = router;
