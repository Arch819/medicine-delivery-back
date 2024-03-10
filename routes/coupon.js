const express = require("express");
const { getAllCoupons, createCoupon } = require("../controllers/coupon");
const router = express.Router();

const { emptyBody } = require("../middlewares");

router.get("/", getAllCoupons);
router.post("/", emptyBody(), createCoupon);

module.exports = router;
