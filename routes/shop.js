const path = require("path");
const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin");

const expressRouter = express.Router();

// get (not 'use')
expressRouter.get("/", (req, res, next) => {
  console.log(adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  res.render("shop");
});

module.exports = expressRouter;
