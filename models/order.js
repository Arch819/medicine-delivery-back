const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const orderListSchema = new Schema(
  {
    medicine: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const orderSchema = new Schema(
  {
    email: { type: String, required: true },
    phone: { type: String, required: true },
    orderList: {
      type: orderListSchema,
      required: true,
    },
  },
  { versionKey: false }
);

orderSchema.post("save", handleMongooseError);
const Order = model("order", orderSchema);

module.exports = Order;
