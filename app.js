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

app.get("/", (req, res) => {
  res.json({ message: "You are at the home page!" });
});

app.use("/product", productsRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
