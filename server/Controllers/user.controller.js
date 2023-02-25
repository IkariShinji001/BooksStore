const Users = require("../Schema/user");
const jwt = require("jsonwebtoken")

const userController = {
    async register(req, res) {
        try {
            const newUser = new Users({
                username: req.body.username,
                mail: req.body.mail,
                password: req.body.password,
            })
            await newUser.save()
            res.status(200).json({ message: "ok", data: newUser });

        } catch (err) {
            res.json("Duplicate username or mail" + err);
        }

    },
    async login(req, res) {
        try {
            const user = await Users.findOne({
                username: req.body.username
            });
            if (user) {
                const token = jwt.sign({
                    username: req.body.username,
                    password: req.body.password
                }, process.env.SECRET_TOKEN, { expiresIn: 60 * 60 })
                res.json({ message: "login", token: token })
            } else {
                res.json({ message: "not login" })
            }
        }
        catch (err) {
            res.json({ message: err })
        }

    }
}

module.exports = userController;