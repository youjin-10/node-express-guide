const path = require("path");
const express = require("express");

const rootDir = require("../util/path");

const expressRouter = express.Router();

// get (not 'use')
expressRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = expressRouter;
