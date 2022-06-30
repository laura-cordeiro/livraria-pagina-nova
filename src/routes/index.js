const express = require("express"),
  routes = express.Router(),
  BookController = require("../domain/books/controllers/bookController");

routes.post("/book", BookController.create);

module.exports = routes;
