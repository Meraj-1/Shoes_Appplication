// const express = require("express");
// const { MongoClient, ObjectId } = require("mongodb");
// require("dotenv").config();
// const cors = require("cors");
// const Product = require("./models/products");

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173', 
//   methods: 'GET, POST, PUT, DELETE',
//   allowedHeaders: 'Content-Type, Authorization'
// }));

// app.use(express.json());


// const uri = process.env.MONGO;
// const client = new MongoClient(uri);


// app.get("/api/products", async (req, res) => {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db("Shoes");
//     const collection = db.collection("products_collection");
//     const products = await collection.find({}).toArray();
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ message: "Error fetching products" });
//   } finally {
//     await client.close();
//   }
// });


// const mongoose = require("mongoose");

// // mongoose
//   // .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   // .then(() => console.log("Connected to MongoDB"))
//   // .catch((error) => console.error("Error connecting to MongoDB:", error));


// // let client;
// // let db;

// async function connectDB() {
//   if (!client) {
//     try {
//       client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//       await client.connect(); // Ensure the connection is established
//       db = client.db(dbName); // Get the database object
//       console.log('Connected to MongoDB');
//     } catch (err) {
//       console.error('Error connecting to MongoDB:', err);
//       throw new Error('Failed to connect to MongoDB');
//     }
//   }
// }

// app.get("/api/products/:id", async (req, res) => {
//   try {
//     const productId = req.params.id;
//     if (!ObjectId.isValid(productId)) {
//       return res.status(400).json({ message: "Invalid product ID" });
//     }
//     const database = client.db("Shoes"); 
//     const products = database.collection("products_collection");
//     const product = await products.findOne({ _id: new ObjectId(productId) });
//     if (!product) {
//       return res.status(404).json({ message: "Product not found" });
//     }
//     res.json(product);
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });



// // Route handler for fetching product



// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend running on this port
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.json());

// MongoDB Connection URI
const uri = process.env.MONGO;
const client = new MongoClient(uri);

// Connect MongoDB once at the start
let db;

async function connectDB() {
  try {
    if (!db) {
      await client.connect();
      console.log("Connected to MongoDB");
      db = client.db("Shoes");  // Select the "Shoes" database
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
}

// Call the connectDB function when the server starts
connectDB();

// Route to fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await db.collection("products_collection").find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Route to fetch a single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    const product = await db.collection("products_collection").findOne({ _id: new ObjectId(productId) });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown: close the MongoDB connection when the app shuts down
process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});


