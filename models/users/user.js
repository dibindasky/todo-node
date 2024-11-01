const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: Number }
}, {
    timestamp: true
});

module.exports = mongoose.model('user', userSchema);