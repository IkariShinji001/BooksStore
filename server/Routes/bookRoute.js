const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/book.controller")

router.get("/books", bookController.getAllBook);

router.get("/books/:_id", bookController.getDetailBook);

router.get("/booksFilter", bookController.getFilter);


module.exports = router;