const express = require("express");
const router = express.Router();

const { emptyBody, validateBody, isValidId } = require("../middlewares");
const {
  getOrderByCustomer,
  getOrderById,
  createOrder,
} = require("../controllers/order");
const {
  createOrderSchemas,
  getOrderSchema,
} = require("../Schemas/orderSchemas");

router.get("/history/:orderId", isValidId, getOrderById);
router.post("/", emptyBody(), validateBody(createOrderSchemas), createOrder);
router.post(
  "/history",
  emptyBody(),
  validateBody(getOrderSchema),
  getOrderByCustomer
);

module.exports = router;
