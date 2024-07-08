// models/nosql/book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Book", bookSchema);