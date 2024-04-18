"use strict";
const db = require("../models/db-conn");

function getAll() {
  let sql = "SELECT * FROM products;";
  const data = db.all(sql);
  return data;
}

//Each method you define you have to define
module.exports = {
  getAll
  // getAllByCategory,
  // getOneById,
 //  createNew
  // searchTerm,
};
