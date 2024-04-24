"use strict";
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products.controller");

router.get("/all", productsController.getAll);
router.get("/category/:category", productsController.getAllByCategory);
router.get("/item/:id", productsController.getOneById);
router.post("/new", productsController.createNew);

module.exports = router;