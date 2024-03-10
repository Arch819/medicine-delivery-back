const Coupon = require("../models/coupons");
const { HttpError, ctrlWrapper } = require("../utils");

const getAllCoupons = async (req, res) => {
  const couponsList = await Coupon.find();
  if (!couponsList) {
    throw HttpError(404, "Not Found");
  }
  res.json(couponsList);
};

const createCoupon = async (req, res) => {
  console.log(req.body);
  const newCoupon = Coupon.create({ ...req.body });
  if (!newCoupon) {
    throw HttpError(400, "Bad Request");
  }
  res.status(201).json(newCoupon);
};

module.exports = {
  getAllCoupons: ctrlWrapper(getAllCoupons),
  createCoupon: ctrlWrapper(createCoupon),
};
