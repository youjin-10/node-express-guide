const path = require("path");
const express = require("express");

const expressRouter = express.Router();

// get (not 'use')
expressRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = expressRouter;
