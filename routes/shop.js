const express = require("express");
const { getAllShops, createShop } = require("../controllers/shope");
const router = express.Router();

router.get("/", getAllShops);
router.post("/", createShop);

module.exports = router;
