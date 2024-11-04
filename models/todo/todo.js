const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    isPinned: { type: Boolean, default: false },
    completed: { type: Boolean, default: false },
    deleted: { type: Boolean, default: false },
    userId: { type: Schema.Types.ObjectId, ref: "user" }
}, {
    timestamps: true
});

module.exports = mongoose.model('todo', todoSchema);