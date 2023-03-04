const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    const authorization = req.header('Authorization');
    if (!authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authorization.split(' ')[1];
    jwt.verify(token, process.env.SECRET_TOKEN, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'Unauthorized' });
        req.user = decoded;
        next();
    });
}

module.exports = auth;