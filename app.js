"use strict";
const express = require("express");
const app = express();
const path = require('path');

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// // Import routes
const productsRouter = require("./routes/products.route");
app.use("/product", productsRouter);
// Define static file directories
app.use(express.static(path.join(__dirname, "public")));

// Route to serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
  
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
