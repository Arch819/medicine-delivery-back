const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const medicineRoute = require("./routes/medicine");
const shopRouter = require("./routes/shop");
const orderRouter = require("./routes/order");
const couponRouter = require("./routes/coupon");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/medicine", medicineRoute);
app.use("/shops", shopRouter);
app.use("/order", orderRouter);
app.use("/coupons", couponRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
