require("dotenv").config({ path : '../.env' });
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    
    const token = req.headers['Authorization'].split(" ")[1]; // Format is x-auth-token: Bearer <token>

    if (!token) {
        return res.status(400).json({
            message: "INVALID TOKEN, authorization denied"
        });
    }
    else {
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            console.log(decoded);
            if (err){
                return res.status(400).json({
                    message: "INVALID decoded"
                });
            }
            else {
                req.user = decoded.newUser;
                next();
            }
        });
    }
}