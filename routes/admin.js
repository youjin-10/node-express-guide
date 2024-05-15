const express = require("express");

const expressRouter = express.Router();

expressRouter.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">add product</button></form>'
  );
});

expressRouter.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  res.redirect("/");
});

module.exports = expressRouter;
