const userModel = require('../../models/users/user');

exports.loginOrSignup = async (req, res) => {
    try {
        const { name, phone } = req.body;
        if (!phone) {
            return res.status(400).json({ error: 'mandatry field phone number missing' });
        }
        if (!name) {
            return res.status(400).json({ error: 'mandatry field name missing' });
        }
        let user;
        user = await userModel.findOne({ phone: req.phone });
        if (!user) {
            const newUser = new userModel({
                name,
                phone
            })
            newUser.save();
            return res.status(201).json({ message: 'user signedup successfully', user: newUser });
        } else {
            return res.status(201).json({ message: 'user login successfully', user: user });
        }
    } catch {
        return res.status(500).json({ error: 'server error' });
    }
}