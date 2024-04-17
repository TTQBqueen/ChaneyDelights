"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/products.model");

function getAll(req, res, next) {
  try {
    res.json(model.getAll());
  } catch (err) {
    console.error("Error while getting products ", err.message);
    next(err);
  }
}

// function getOneById(req, res, next) {
//   try {
//     res.json(model.getOneById(req.params.id));
//   } catch (err) {
//     console.error("Error while getting products ", err.message);
//     next(err);
//   }
// }

// function createNew(req, res, next) {
//   let id = parseInt(req.body.id);
//   let name = req.body.name;
//   let category = req.body.category;
//   let subcategory = req.body.subcategory;
//   let price = parseFloat(req.body.price);
//   let cost = parseFloat(req.body.cost);
//   if (id && name && category && subcategory && price && cost) {
//     let params = [id, name, category, subcategory, price, cost];
//     try {
//       res.json(model.createNew(params));
//     } catch (err) {
//       console.error("Error while creating products ", err.message);
//       next(err);
//     }
//   }
// }

// function searchTerm (req, res, next){
//     try {
//       res.json(model.searchTerm(req.params.term));
//     } catch (err) {
//       console.error("Error while searching for products items", err.message);
//       next(err);
//     }
// }


 
module.exports = {
  getAll
  // getOneById,
  // createNew,
  // searchTerm,

};
