const express = require("express");
const router = express.Router();

const userController = require('../../controller/user/user_controller')

router.post('/login', userController.login);
router.post('/sign_up', userController.signup);

module.exports = router;