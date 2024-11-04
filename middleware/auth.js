const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY;

const authenticateUser = (req, res, next)
