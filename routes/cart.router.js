"use strict";
const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart.controller");

router.get("/all", cartController.getAll);
router.post("/new", cartController.createNew);
router.get("/item/:id", menucontroller.getOneById);
router.delete("/delete/:id", cartcontroller.deleteById);

module.exports = router;