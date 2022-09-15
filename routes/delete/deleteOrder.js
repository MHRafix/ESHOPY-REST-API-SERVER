// external improts are here
const express = require("express");
const router = express.Router();

// internal exports are here
const {
  deleteOrder,
} = require("../../controllers/delete/deleteOrder");

// products get api here
router.delete("/deleteOrders/:uniqueId", deleteOrder);

module.exports = router;
