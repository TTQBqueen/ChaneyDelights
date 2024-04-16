"use strict";
const express = require("express");
const app = express();
const path = require('path');

const multer = require("multer");
app.use(multer().none());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//Home Page
app.get("/", (req, res) => {
  req.session.returnTo = req.originalUrl;
  res.render("index", { title: 'Home Page', user: req.user });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("App listening at http://localhost:" + PORT);
});
