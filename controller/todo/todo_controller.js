const todoModel = require('../../models/todo/todo');

exports.createTodo = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        if (!data.title || !data.description) {
            return res.status(400).json({ error: 'required field title or description missing' });
        }
        var todo = new todoModel(data);
        await todo.save();
        return res.status(201).json({ message: 'todo created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: 'server error' });
    }
}

exports.getTodo = async (req, res) => {
    try {
        const data = await todoModel.find();
        return res.status(200).json({ message: 'todo fetch successfully', todo: data });
    } catch {
        return res.status(500).json({ error: 'server error' });

    }
}