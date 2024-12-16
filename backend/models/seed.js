const mongoose = require("mongoose");
const Product = require("./products");

mongoose.connect("mongodb://127.0.0.1:27017/Shoes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedProducts = require("../init/Data")

const seedDB = async () => {
  await Product.deleteMany(); // Clear existing data
  await Product.insertMany(seedProducts); // Insert sample data
  console.log("Database seeded!");
  mongoose.connection.close();
};

seedDB();
