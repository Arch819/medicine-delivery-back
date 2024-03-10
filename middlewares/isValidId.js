const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../utils");

const isValidId = (req, res, next) => {
  const { orderId } = req.params;
  if (!isValidObjectId(orderId)) {
    next(HttpError(400, `${orderId} is not valid id`));
  }
  next();
};

module.exports = isValidId;
