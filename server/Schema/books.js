const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Books = new Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String,
    imageUrl: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date
})

const booksModel = mongoose.model("books", Books);

module.exports = booksModel;