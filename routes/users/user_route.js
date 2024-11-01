const express = require("express");
const router = express.Router();

const userController = require('../../controller/user/user_controller')

router.post('/login', userController.loginOrSignup);
router.get('/login', async (req, res) => {
    return res.status(200).json({ message: 'success login or signup' });
});


module.exports = router;