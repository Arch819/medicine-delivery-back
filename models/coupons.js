const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const couponSchema = new Schema(
  {
    title: { type: String, required: true },
    img: { type: String },
    code: { type: String, required: true },
    discount: { type: String, required: true },
  },
  { versionKey: false }
);

couponSchema.post("save", handleMongooseError);

const Coupon = model("coupon", couponSchema);

module.exports = Coupon;
