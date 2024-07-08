// models/sql/order.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");
const Customer = require("./customer");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

Order.belongsTo(Customer);
Customer.hasMany(Order);

module.exports = Order;
