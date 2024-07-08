// models/sql/index.js
const { Sequelize } = require("sequelize");
const config = require("../../config/config").sql;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const Customer = require("./customer");
const Order = require("./order");

sequelize.sync();

module.exports = { sequelize, Customer, Order };
