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
};

function getOneById(id) {
  let sql = "SELECT * FROM PRODUCTS WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
};
function createNew(params) {
  let sql =
    'INSERT INTO products ("id","name","description","url","price","font_page","categorie_id") ' +
    "VALUES(?, ?, ?, ?, ?, ?, ?);";
  const item = db.run(sql, params);
  return item;
};

function deleteById(id) {
  let sql = 'DELETE FROM PRODUCTS WHERE id = ?';
  db.run(sql, id, function(err) {
      if (err) {
          throw new Error(err.message);
      }
      console.log(`Product with ID ${id} deleted successfully.`);
  });
}

function search(params) {
  let sql = 'SELECT * FROM products WHERE name LIKE ?;';
  let products = db.all(sql, params);
  return products;
};

module.exports = {
  getAll,
   getAllByCategory,
  getOneById,
   createNew,
   search,
   deleteById,
  // update,
};
