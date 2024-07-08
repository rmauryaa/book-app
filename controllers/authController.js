const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Customer } = require("../models/sql");
const config = require("../config/config");

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    const customer = await Customer.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    const token = jwt.sign(
      { id: customer.id, role: customer.role },
      config.jwtSecret,
      { expiresIn: "1d" }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ where: { email } });
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign(
      { id: customer.id, role: customer.role },
      config.jwtSecret,
      { expiresIn: "1d" }
    );
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
