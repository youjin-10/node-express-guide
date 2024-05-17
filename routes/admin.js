const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const expressRouter = express.Router();

expressRouter.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

expressRouter.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = expressRouter;
