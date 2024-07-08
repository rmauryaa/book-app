const express = require("express");
const morgan = require("morgan");
const { sequelize } = require("./models/sql");
const mongoose = require("./models/nosql");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const bookRoutes = require("./routes/bookRoutes");
const setupSwagger = require("./swagger");
const logger = require("./utils/logger");

const app = express();

app.use(express.json());
app.use(morgan("combined", { stream: logger.stream }));

app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/books", bookRoutes);

setupSwagger(app);

app.use((err, req, res, next) => {
  logger.error(err.stack);
  res.status(500).send("Something broke!");
});

module.exports = app;
