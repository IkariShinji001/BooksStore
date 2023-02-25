const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: String,
    isAdmin: {
        type: Boolean,
        default: false,
    },
})

const usersModel = mongoose.model("users", Users);

module.exports = usersModel;