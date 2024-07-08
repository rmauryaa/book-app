// models/sql/customer.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index");

class Customer extends Model {}

Customer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "customer",
    },
  },
  {
    sequelize,
    modelName: "Customer",
  }
);

module.exports = Customer;
