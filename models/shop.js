const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const shopSchema = new Schema(
  {
    title: { type: String, required: [true, "Set title for shop"] },
  },
  { versionKey: false }
);

shopSchema.post("save", handleMongooseError);
const Shops = model("shop", shopSchema);

module.exports = Shops;
