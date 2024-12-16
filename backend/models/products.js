const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  about: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
