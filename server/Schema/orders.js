const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Orders = new Schema({
    user: {
        username: String,
        email: String
    },
    books: [
        {
            bookId: ObjectId,
            title: String,
            author: String,
            price: Number,
            quantity: Number
        }
    ],
    totalPrice: Number,
    createdAt: {
        type: Date,
        default: Date.toString(Date.now),
    },
    createdAt: {
        type: Date,
        default: Date.toString(Date.now),
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    paidAt: Date,
    isDelivered: {
        type: Boolean,
        default: false,
    },
    deliveredAt: Date
})

const ordersModel = mongoose.model("orders", Orders);

module.exports = ordersModel;