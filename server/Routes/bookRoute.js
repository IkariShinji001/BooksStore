const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/book.controller")
const upload = require("../Middleware/multer");

router.get("/books", bookController.getAllBook);

router.get("/books/:_id", bookController.getDetailBook);

router.post("/books", upload.single("imgBookCover"), bookController.createBook);

router.delete("/books/:_id", bookController.deleteBook);

module.exports = router;