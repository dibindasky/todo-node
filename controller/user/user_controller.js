const userModel = require('../../models/users/user');

exports.loginOrSignup = async (req, res) => {
    const { name, phone } = req.body;
    if (!phone) {
        return res.status(400).json({ error: 'mandatry field phone number missing' });
    }
    if (!name) {
        return res.status(400).json({ error: 'mandatry field name missing' });
    }
    return res.status(200).json({ message: 'success login or signup' });
    // let user;
    // user = await userModel.findOne({ phone: req.phone });
    // if(!user){

    // }

}