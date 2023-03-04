const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Books = new Schema({
    title: String,
    anotherTitle: String,
    author: String,
    description: String,
    price: Number,
    discount: Number,
    isNewBook: Boolean,
    bookCover: String,
    language: String,
    publicYear: Number,
    starRating: Number,
    sizeRating: Number,
    quantity: Number,
    pages: Number,
    volume: Number,
    category: [
    ],
    imgBookCover: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date
})

const booksModel = mongoose.model("books", Books);

module.exports = booksModel;