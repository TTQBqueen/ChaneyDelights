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

function createNew(req, res, next) {
  let id = parseInt(req.body.id);
  let name = req.body.name;
  let description = req.body.description;
  let url = req.body.url;
  let price = parseFloat(req.body.price);
  let rating = parseFloat(req.body.rating);
  let category_id = parseInt(req.body.category_id);
  if (id && name && category && url && price && cost) {
    let params = [id, name, description, url, price, rating, category_id];
    try {
      res.json(model.createNew(params));
    } catch (err) {
      console.error("Error while creating products ", err.message);
      next(err);
    }
  }
}

// function searchTerm (req, res, next){
//     try {
//       res.json(model.searchTerm(req.params.term));
//     } catch (err) {
//       console.error("Error while searching for products items", err.message);
//       next(err);
//     }
// }


 
module.exports = {
  getAll,
  // getOneById,
   createNew
  // searchTerm,

};
