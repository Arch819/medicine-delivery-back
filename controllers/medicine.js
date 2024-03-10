const Medicine = require("../models/medicine");
const { ctrlWrapper, HttpError } = require("../utils");

const getAllMedicine = async (req, res) => {
  const { shop = "", search, priceFrom, priceTo } = req.query;
  const query = {};
  if (shop) {
    query.shopId = shop;
  }
  if (search) {
    query.title = { $regex: search, $options: "i" };
  }
  if (priceFrom) {
    query.price = { $gte: priceFrom, ...query.price };
  }
  if (priceTo) {
    query.price = { ...query.price, $lte: priceTo };
  }
  const medicine = await Medicine.find(query);
  if (!medicine) {
    throw HttpError(404, "Medicine Not Found");
  }
  res.json(medicine);
};

const createMedicine = async (req, res) => {
  const medicine = await Medicine.create(req.body);
  res.status(200).json(medicine);
};

module.exports = {
  getAllMedicine: ctrlWrapper(getAllMedicine),
  createMedicine: ctrlWrapper(createMedicine),
};
