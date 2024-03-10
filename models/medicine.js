const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const medicineSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Set name for medicine"],
    },
    price: {
      type: String,
      required: [true, "Set price for medicine"],
    },
    shopId: {
      type: String,
      ref: "shop",
      required: [true, "Set shop for medicine"],
    },
  },
  { versionKey: false }
);

medicineSchema.post("save", handleMongooseError);
const Medicine = model("medicine", medicineSchema);

module.exports = Medicine;
