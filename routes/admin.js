const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const expressRouter = express.Router();

const products = [];

expressRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

expressRouter.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = expressRouter;
exports.products = products;
