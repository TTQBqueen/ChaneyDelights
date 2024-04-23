"use strict";
const db = require("../models/db-conn");

function getAll() {
  let sql = "SELECT * FROM products;";
  const data = db.all(sql);
  return data;
}
// function createNew(params) {
//   let sql =
//     'INSERT INTO products ("id","name","description","url","price","rating","catrgorie-id") ' +
//     "VALUES(?, ?, ?, ?, ?, ?, ?);";
//   const item = db.run(sql, params);
//   return item;x
// };

// function getAllByCategory(category) {
//   let sql = "SELECT * FROM products WHERE category_id =? ORDER BY name;";
//   const data = db.all(sql, category);
//   return data;
// };

function getOneById(id) {
  let sql = "SELECT * FROM PRODUCTS WHERE id =? ;";
  const item = db.get(sql, id);
  return item;
};


// function search(params) {
//   let sql = 'SELECT * FROM products WHERE name LIKE ?;';
//   let products = db.all(sql, params);
//   return products;
// };

// function deleteById(id) {
//   let sql = 'DELETE FROM PRODUCTS WHERE id =?';
//   const response = db.run(sql, id);
//   return response;
// };

// function update(params) {
//   let sql = 'UPDATE products SET id =?, name =?, description =? url =?, price =?, rating =?, catrgorie-id =?;';
  
//   const response = db.run(sql, params);
//   return response;
// };



module.exports = {
  getAll,
  // getAllByCategory,
  getOneById
  // createNew
  // search,
  // deleteById,
  // update,
};
