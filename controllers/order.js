const Order = require("../models/order");
const { HttpError, ctrlWrapper } = require("../utils");

const getOrderByCustomer = async (req, res) => {
  const { email, phone } = req.body;
  const orderList = await Order.find({ email, phone });
  if (!orderList) {
    throw HttpError(404, "Order Not Found");
  }
  res.json(orderList);
};

const getOrderById = async (req, res) => {
  const { orderId } = req.params;
  console.log(orderId);
  const orderList = await Order.findById(orderId);
  if (!orderList) {
    throw HttpError(404, "Order Not Found");
  }
  res.json([orderList]);
};
const createOrder = async (req, res) => {
  const newOrder = await Order.create({ ...req.body });
  if (!newOrder) {
    throw HttpError(400, "Bad request");
  }
  res.status(201).json(newOrder);
};

module.exports = {
  getOrderByCustomer: ctrlWrapper(getOrderByCustomer),
  getOrderById: ctrlWrapper(getOrderById),
  createOrder: ctrlWrapper(createOrder),
};
