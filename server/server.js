const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute")
const bookRoute = require("./Routes/bookRoute")
const bookAdminRoute = require("./Routes/bookAdminRoute")
const dotenv = require("dotenv");
const auth = require("./Auth/auth");
const authAdmin = require("./Auth/authAdmin");

dotenv.config();

//Connect MongoDB
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/e-commerce')
    .then(() => {
        console.log("Connected DB");
    })

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/", userRoute);

app.use("/api/", auth, bookRoute);

app.use("/api/", auth, authAdmin, bookAdminRoute);




app.listen(process.env.PORT, () => {
    console.log("SERVER IS RUNNING ON PORT " + process.env.PORT);
}) 