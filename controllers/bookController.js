const { Book, Review } = require("../models/nosql");
const { Customer } = require("../models/sql");

exports.getReviewsByBook = async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    const reviews = await Review.find({ book: bookId }).populate(
      "customer",
      "name email"
    );
    res.json(reviews);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
