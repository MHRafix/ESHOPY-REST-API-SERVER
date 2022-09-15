// external imports are here
const express = require('express');
const router = express.Router();

// import
const { updateReview } = require('../../controllers/update/updateReview');

// product update / put api here
router.patch('/addReview/:id', updateReview);

module.exports = router;
