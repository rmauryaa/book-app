require("dotenv").config();

module.exports = {
  sql: {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    host: process.env.SQL_HOST,
    dialect: process.env.SQL_DIALECT || "postgres",
  },
  nosql: {
    uri: process.env.MONGO_URI,
  },
  jwtSecret: process.env.JWT_SECRET,
};
