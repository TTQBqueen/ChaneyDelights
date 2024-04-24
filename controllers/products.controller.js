"use strict";

const express = require("express");
const app = express();

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const model = require("../models/products.model");

function getAll(req, res, next) {
  let products = model.getAll();
  try {

    res.render("products", { products: products, title: 'All Meals' });
    // res.json(model.getAll());
  } catch (err) {
    console.error("Error while getting menu ", err.message);
    next(err);
  }
}

function getAllByCategory(req, res, next) {
  let category = req.params.category;
  let products = model.getAllByCategory(category);
  try {
    res.render("products", { productss: products, title: '' + category + ' Products' });
    //res.json(model.getAllByCategory(req.params.category));
  } catch (err) {
    console.error("Error while getting menu ", err.message);
    next(err);
  }
}

function getOneById(req, res, next) {
  let id = req.params.id;
  try {
    let products = model.getOneById(id);
    res.render("details", { products: products, title: 'products #' + id }); //goi view item-details ejs
    //res.json(model.getOneById(req.params.id));
  } catch (err) {
    console.error("Error while getting menu ", err.message);
    next(err);
  }
}
 
module.exports = {
  getAll,
  getAllByCategory,
   getOneById
  //  createNew
  // searchTerm,

};
