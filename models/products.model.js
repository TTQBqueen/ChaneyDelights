"use strict";
const db = require("../models/db-conn");

function getAll() {
  let sql = "SELECT * FROM products;";
  const data = db.all(sql);
  return data;
}

function getAllByCategory(category) {
  let sql = "SELECT * FROM products WHERE category =? ORDER BY name;";
  const data = db.all(sql, category);
  return data;
}

function getOneById(id) {
  let sql = "SELECT * FROM products WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
}

function createNew(params) {
  let sql =
    'INSERT INTO products ("id","name","description","url","price","rating","catergorie-id") ' +
    "VALUES(?, ?, ?, ?, ?, ?, ?);";
  const item = db.run(sql, params);
  return item;
}

function searchTerm(term) {
  let sql = "SELECT name, price FROM products WHERE name LIKE ?";
  let products =  db.all(sql + "%",term + "%");
  return products;
}




//Each method you define you have to define
module.exports = {
  getAll,
  getAllByCategory,
  getOneById,
  createNew,
  searchTerm,
};
