"use strict";
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");

router.get("/all", productsController.getAll);

//  router.get("/category/:category_id", productsController.getAllByCategory);

 router.get("/:id", productsController.getOneById);

//  router.get("/search", productsController.searchTerm);

// router.post("/new", productsController.createNew);

module.exports = router;