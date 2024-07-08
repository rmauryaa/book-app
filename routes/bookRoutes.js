const express = require("express");
const { getReviewsByBook } = require("../controllers/bookController");
const authMiddleware = require("../middlewares/authMiddleware");
const rbacMiddleware = require("../middlewares/rbacMiddleware");

const router = express.Router();

router.get("/:bookId/reviews", authMiddleware, getReviewsByBook);

module.exports = router;
