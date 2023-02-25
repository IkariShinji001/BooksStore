const Books = require("../Schema/books");
const jwt = require("jsonwebtoken")
const cloudinary = require("../Middleware/cloudinary")
const fs = require("fs");
const bookController = {
    async getAllBook(req, res) {
        const books = await Books.find({});
        res.json({ books: books })
    },
    async getDetailBook(req, res) {
        try {
            const _id = req.params;
            const book = await Books.findById(_id);
            res.json({ book });
        } catch (err) {
            res.json({ err })
        }
    },
    async createBook(req, res) {
        try {
            const { path } = req.file;
            const result = await cloudinary.uploader.upload(path);
            const newBook = new Books({
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                category: req.body.category,
                imageUrl: result.secure_url,
            })
            await newBook.save();
            fs.unlinkSync(path);
            res.json({ message: "created" });

        } catch (err) {
            res.json({ err });
        }
    },

    async deleteBook(req, res) {
        try {
            const _id = req.params;
            const deletedBook = await Books.findByIdAndDelete(_id);
            res.json({ deletedBook });
        } catch (err) {
            res.json(err);
        }
    }
}

module.exports = bookController;