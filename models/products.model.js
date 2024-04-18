"use strict";
const db = require("../models/db-conn");

function getAll() {
  let sql = "SELECT * FROM products;";
  const data = db.all(sql);
  return data;
}
function createNew(params) {
  let sql =
    'INSERT INTO menu ("id","name","description","url","price","rating","catrgorie-id") ' +
    "VALUES(?, ?, ?, ?, ?, ?, ?);";
  const item = db.run(sql, params);
  return item;
};
//Each method you define you have to define
module.exports = {
  getAll,
  // getAllByCategory,
  // getOneById,
   createNew
  // searchTerm,
};
