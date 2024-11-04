const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, default: '' },
    phone: { type: Number, required: true, unique: true },
    password: { type: String, required: true }
}, {
    timestamp: true
});

module.exports = mongoose.model('user', userSchema);