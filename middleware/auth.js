const jwt = require('jsonwebtoken');
const userModel = require("../models/users/user");

const secretKey = process.env.JWT_SECRET_KEY;

exports.authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    try {
        if (authHeader) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, secretKey, async (err, decodedToken) => {
                if (err) {
                    return res.status(401).json({ error: "session expired" });
                }
                req.user = decodedToken;
                try {
                    const user = await userModel.findById(req.user.id);
                    if (user) {
                        next();
                    } else {
                        return res.status(400).json({ error: "user not found" });
                    }
                } catch (e) {
                    console.log('authenticateUser jwt error -> ' + e);
                    return res.status(500).json({ error: "Server error" });
                }
            })
        } else {
            return res.status(401).json({ error: "Session Expired" });
        }
    } catch (e) {
        console.log('authenticateUser error -> ' + e);
        return res.status(500).json({ error: "Server error" });
    }
}
