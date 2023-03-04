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
        console.log("vao");
        try {
            const _id = req.params;
            const book = await Books.findById(_id);
            res.json({ book });
        } catch (err) {
            res.json({ err })
        }
    },
    async getFilter(req, res) {
        try {
            const price = req.query.price;
            const genres = req.query.genres;
            if (price != 0 && genres != undefined) {
                const books = await Books.find({ category: { $all: genres }, price: { $lt: price } })
                res.json({ books: books });
            } else if (price > 0 && genres == undefined) {
                const books = await Books.find({ price: { $lt: price } })
                res.json({ books: books });
            } else if (price == 0 && genres != undefined) {
                const books = await Books.find({ category: { $all: genres } })
                res.json({ books: books });
            } else {
                const books = await Books.find({})
                res.json({ books: books });
            }

        } catch (error) {

        }
    },
    async createBook(req, res) {
        try {
            const { path } = req.file;
            const result = await cloudinary.uploader.upload(path);
            const newBook = new Books({
                title: req.body.title,
                anotherTitle: req.body.anotherTitle,
                bookCover: req.body.bookCover,
                language: req.body.language,
                starRating: req.body.starRating,
                sizeRating: req.body.sizeRating,
                pages: req.body.pages,
                author: req.body.author,
                isNewBook: req.body.isNewBook,
                discount: req.body.discount,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity,
                category: req.body.category,
                imgBookCover: result.secure_url,
                volume: req.body.volume,
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