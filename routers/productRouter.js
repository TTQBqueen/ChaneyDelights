"use strict";
const express = require("express");
const router = express.Router();

const menucontroller = require("../controllers/menu.controller");

router.get("/all", menucontroller.getAll);

router.get("/category/:category", menucontroller.getAllByCategory);

router.get("/:id", menucontroller.getOneById);

router.get("/search", menucontroller.searchTerm);

router.post("/new", menucontroller.createNew);

module.exports = router;