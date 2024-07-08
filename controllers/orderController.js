const { Order, Customer } = require("../models/sql");
const { Book } = require("../models/nosql");

exports.getOrdersByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const customer = await Customer.findByPk(customerId, {
      include: { model: Order },
    });
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    const orders = await Promise.all(
      customer.Orders.map(async (order) => {
        const books = await Book.find({ _id: { $in: order.bookIds } });
        return { ...order.toJSON(), books };
      })
    );
    res.json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
