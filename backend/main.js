const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB URI and Client Setup
const uri = process.env.MONGO;  // MongoDB URI from your .env file
const client = new MongoClient(uri);

app.get("/api/products", async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Access the database and collection
    const db = client.db("Shoes"); // Replace with your database name
    const collection = db.collection("products_collection"); // Replace with your collection name

    // Fetch all products
    const products = await collection.find({}).toArray();

    // Send products as JSON response
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  } finally {
    // Close MongoDB connection
    await client.close();
  }
});

// Start the Express Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
