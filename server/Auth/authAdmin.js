const Users = require("../Schema/user");
const authAdmin = async (req, res, next) => {
    const user = await Users.findOne({ username: req.user.username })
    if (user.isAdmin === false) {
        return res.status(401).json({ message: "notAdmin" });
    } else {
        next();
    }
}

module.exports = authAdmin;