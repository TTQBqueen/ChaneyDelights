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


// Render
app.get('/', (req, res) => {
  res.redirect("/index")
});
app.get('/homepage', (req, res) => {
  res.render("index" , { title: 'Home Page' });
});
app.get('/products', (req, res) => {
  res.render("products" , { title: 'Products' });
});
app.get('/details', (req, res) => {
  res.render("details" , { title: 'details' });
});
app.get('/cart', (req, res) => {
  res.render("cart" , { title: 'cart' });
});
app.get('/admin', (req, res) => {
  res.render("admin" , { title: 'admin' });
});
app.get('/admin/bulk', (req, res) => {
  res.render("bulk" , { title: 'bulk' });
});
app.get('/login', (req, res) => {
  res.render("login" , { title: 'login' });
});
app.get('/admin/edit', (req, res) => {
  res.render("edit" , { title: 'edit' });
});
app.get('/admin/test', (req, res) => {
  res.render("test" , { title: 'test' });
});

//router
const productsRouter = require("./routes/products.route");
app.use("/products", productsRouter);



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
