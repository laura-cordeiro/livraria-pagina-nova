const express = require("express"),
  routes = express.Router(),
  BookController = require("../controllers/bookcontroller");

routes.post("/book", BookController.create);

module.exports = routes;
