// external imports are here
const express = require('express');
const router = express.Router();

// internal mports are here
const { increaseQty } = require('../../controllers/update/increaseQty');

// product update / put api here
router.patch('/incCartProductQty/:email/:id', increaseQty);

module.exports = router;
