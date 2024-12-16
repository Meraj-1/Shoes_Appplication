const { MongoClient } = require('mongodb');
require("dotenv").config();
const {default : productArray} = require("./Data")

// MongoDB connection URI and database/collection names
const uri = process.env.MONGO_URI; 
const dbName = "Shoes";
const collectionName = "products_collection";



// async function insertProducts() {
//   const client = new MongoClient(uri);

//   try {
//     // Connect to MongoDB
//     await client.connect();
//     console.log("Connected to MongoDB");

//     // Access the database and collection
//     const db = client.db(dbName);
//     const collection = db.collection(collectionName);

//     // Insert product array into the collection
//     const result = await collection.insertMany(productArray);
//     console.log(`${result.insertedCount} products inserted successfully`);
//   } catch (error) {
//     console.error("Error inserting products:", error);
//   } 
// }

// insertProducts();
