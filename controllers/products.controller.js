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
    console.error("Error while getting products ", err.message);
    next(err);
  }
}

function getAllByCategory(req, res, next) {
  let category = req.params.category;
  let products = model.getAllByCategory(category);
  try {
    res.render("products", { products: products, title: '' + category + ' Products' });
    //res.json(model.getAllByCategory(req.params.category));
  } catch (err) {
    console.error("Error while getting menu ", err.message);
    next(err);
  }
}

function getOneById(req, res, next) {
  let id = req.params.id;
  try {
    let product = model.getOneById(id); // Assuming this function returns a single product object
    res.render("details", { product: product, title: 'Product #' + id }); // Pass 'product' instead of 'products'
  } catch (err) {
    console.error("Error while getting product ", err.message);
    next(err);
  }
}


function createNew(req, res, next) {
  try {
    let id = parseInt(req.body.id);
    let name = req.body.name;
    let description = req.body.description;
    let url = req.body.url;
    let price = parseFloat(req.body.price);
    let font_page = parseInt(req.body.font_page);
    let categorie_id = req.body.categorie_id;

    if (id && name && description && url && !isNaN(price) && !isNaN(font_page) && categorie_id) {
      let params = [id, name, description, url, price, font_page, categorie_id]; // Updated parameter name
      model.createNew(params);
      res.render("products", { products: model.getAll(), title: 'All Products' });
    } else {
      throw new Error("Missing or invalid parameters for creating product.");
    }
  } catch (err) {
    console.error("Error while creating product ", err.message);
    next(err);
  }
}
function deleteById(req, res, next) {
  let id = req.params.id;
  try {
      model.deleteById(id);
      res.json({ message: "Product deleted successfully." });
  } catch (err) {
      console.error("Error while deleting product ", err.message);
      res.status(500).json({ error: "Error deleting product." });
  }
}
function searchByName(req, res, next) {
  let term = req.query.term;
  let products = [];
  if (term) {
    let searchTerm = '%' + term + '%';
    products = model.search(searchTerm);
  }
  else {
    products = model.getAll();
  }
  try {
    res.render("products", { products: products, title: '' + term + ' Products' });
  } catch (err) {
    console.error("Error while getting menu ", err.message);
    next(err);
  }
}


module.exports = {
  getAll,
  getAllByCategory,
   getOneById,
  createNew,
  deleteById,
  searchByName,

};
