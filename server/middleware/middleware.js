const jwt = require("jsonwebtoken");
const User = require("../model/userSchema");

const middleware = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const userData = await User.findOne({
            _id: verifyToken._id, "tokens.token": token
        });
        if (!userData) { throw new Error("user not found") }
        req.token = token;
        req.userData = userData;
        req.userID = userData._id;
        next();
    } catch (err) {
        res.status(401).send("Unautharized")
        console.log(err)
    }
}

module.exports = middleware;