"use strict";
const express = require("express");
const app = express();
const path=require("path");

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


// app.get("/", (req, res) => {
//   res.render("index", { title: 'Home Page' });
// });

app.get('/', (req, res) => {
  res.redirect("/index")
})

app.get('/homepage', (req, res) => {
  res.render("index" , { title: 'Home Page' });
})
app.get('/products', (req, res) => {
  res.render("products" , { title: 'Products' });
})
app.get('/details', (req, res) => {
  res.render("details" , { title: 'details' });
})
app.get('/cart', (req, res) => {
  res.render("cart" , { title: 'cart' });
})
app.get('/admin', (req, res) => {
  res.render("admin" , { title: 'admin' });
})
app.get('/admin/bulk', (req, res) => {
  res.render("bulk" , { title: 'bulk' });
})
app.get('/login', (req, res) => {
  res.render("login" , { title: 'login' });
})
app.get('/admin/edit', (req, res) => {
  res.render("edit" , { title: 'edit' });
})
//router
// const productsRouter = require("./routes/products.route");
// app.use("/product", productsRouter);


app.get("/products/all", async function (req, res) {
  let qry = 'SELECT * FROM products;';
  let db = await getDbConnection();
  try {
      let menu = await db.all(qry);
      res.render("products", {item : menu})
  } catch (error) {
      res.status(SERVER_ERROR).send(SERVER_ERROR_MSG);
  }
})

app.get("/products/:name", async function (req, res) {
  let qry = 'SELECT * FROM products WHERE category_id = ?;';
  let db = await getDbConnection();
  try {
      let menu = await db.all(qry, req.params.name);
      res.render('roducts', { item : menu });
  } catch (err) {
      console.log("Error:", err);
      console.log(qry);
      // Handle error gracefully, maybe send an error response
      res.status(500).send("Internal Server Error");
  }
})

app.get('/detail', function(req, res) {
  const itemString = req.query.item;
  const item = JSON.parse(decodeURIComponent(itemString));
  // Now you can use the 'item' object as needed
  res.render('products', { item: item });
});

app.get("products/:name", async function(req, res) {
  let qry = 'SELECT * FROM products WHERE name = ?;';
  let db = await getDbConnection();
  try {
      let menu = await db.all(qry, req.params.name);
      res.render('products', { item : menu });
  } catch (error) {
      console.log("Error:", err);
      console.log(qry);
      // Handle error gracefully, maybe send an error response
      res.status(500).send("Internal Server Error");
  }
})










const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
