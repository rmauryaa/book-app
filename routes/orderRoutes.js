const express = require("express");
const { getOrdersByCustomer } = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");
const rbacMiddleware = require("../middlewares/rbacMiddleware");

const router = express.Router();

router.get(
  "/:customerId/orders",
  authMiddleware,
  rbacMiddleware("admin"),
  getOrdersByCustomer
);

module.exports = router;
