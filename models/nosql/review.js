// models/nosql/review.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  customer: { type: Number, ref: "Customer", required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
