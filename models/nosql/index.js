// models/nosql/index.js
const mongoose = require("mongoose");
const config = require("../../config/config").nosql;

mongoose.connect(config.uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Book = require("./book");
const Review = require("./review");

module.exports = { Book, Review };
