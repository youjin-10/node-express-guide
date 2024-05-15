const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("this always runs");
  next();
});

app.use("/hello", (req, res, next) => {
  console.log(" hello middleware ");
  res.send("<div>/hello</div>"); // don't call next() after res.send
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">add product</button></form>'
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  console.log(req.body.title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("middleware? ");
  res.send("<div>hahaha</div>");
});

app.listen(3232);
