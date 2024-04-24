"use strict";
const db = require("../models/db-conn");

function getAll() {
  let sql = "SELECT * FROM products;";
  const data = db.all(sql);
  return data;
}
function getAllByCategory(category) {
  let sql = "SELECT * FROM menu WHERE category =? ORDER BY name;";
  const data = db.all(sql, category);
  return data;
};

function getOneById(id) {
  let sql = "SELECT * FROM MENU WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
};
module.exports = {
  getAll,
   getAllByCategory,
  getOneById
  // createNew
  // search,
  // deleteById,
  // update,
};
