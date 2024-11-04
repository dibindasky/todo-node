const userModel = require('../../models/users/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const secretKey = process.env.JWT_SECRET_KEY;

exports.login = async (req, res) => {
    try {
        const { password, phone } = req.body;
        if (!phone) {
            return res.status(400).json({ error: 'mandatry field phone number missing' });
        }
        if (!password) {
            return res.status(400).json({ error: 'mandatry field password missing' });
        }
        let user;
        user = await userModel.findOne({ phone });
        if (!user) {
            return res.status(401).json({ message: 'user not found' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ message: 'wrong password' });
        }
        const payload = {
            id: user._id,
        };
        const token = jwt.sign(payload, secretKey);
        return res.status(201).json({ message: 'user signedup successfully', user: user, token: token });
    } catch (e) {
        console.log('error login --> ' + e)
        return res.status(500).json({ error: 'server error' });
    }
}

exports.signup = async (req, res) => {
    try {
        const { name, phone, password, email } = req.body;

        if (!phone || !password || !name) {
            return res.status(400).json({ error: 'mandatry field phone number missing' });
        }
        const present = await userModel.findOne({
            $or: [{ phone }, { email }]
        })
        if (present) {
            return res.status(400).json({ error: 'user with email or phone alredy exists' });
        }
        let user;
        const salt = await bcrypt.genSalt(10);
        const encriptedPwd = await bcrypt.hash(password, salt);
        user = userModel({ name, phone, password: encriptedPwd, email });
        await user.save();
        return res.status(201).json({ message: 'user signup successfully', user: user });
    } catch (e) {
        console.log('error signup --> ' + e);
        return res.status(500).json({ error: 'server error' });
    }
}