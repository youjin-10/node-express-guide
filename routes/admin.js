const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const expressRouter = express.Router();

const products = [];

// /admin/add-product => GET
expressRouter.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// /admin/add-product => POST
expressRouter.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = expressRouter;
exports.products = products;
