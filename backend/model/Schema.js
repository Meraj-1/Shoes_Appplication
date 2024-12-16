const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: String,
  price:Number,
  description:  String,

});

// Create Model based on Schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
