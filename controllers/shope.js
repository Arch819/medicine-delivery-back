const Shops = require("../models/shop");
const { HttpError, ctrlWrapper } = require("../utils");

const getAllShops = async (req, res) => {
  const shops = await Shops.find();
  if (!shops) {
    throw HttpError(404, "Shop Not Found");
  }

  res.json(shops);
};
const createShop = async (req, res) => {
  const newShop = await Shops.create(req.body);
  res.status(201).json(newShop);
};

module.exports = {
  getAllShops: ctrlWrapper(getAllShops),
  createShop: ctrlWrapper(createShop),
};
