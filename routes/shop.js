const express = require("express");

const expressRouter = express.Router();

// get (not 'use')
expressRouter.get("/", (req, res, next) => {
  console.log("middleware? ");
  res.send("<div>hahaha</div>");
});

module.exports = expressRouter;
