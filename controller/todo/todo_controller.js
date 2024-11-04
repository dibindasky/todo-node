const todoModel = require('../../models/todo/todo');

exports.createTodo = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        if (!data.title || !data.description) {
            return res.status(400).json({ error: 'required field title or description missing' });
        }
        var todo = new todoModel(data);
        todo.userId = req.user.id;
        await todo.save();
        return res.status(201).json({ message: 'todo created successfully' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: 'server error' });
    }
}

exports.getTodo = async (req, res) => {
    try {
        const data = await todoModel.find({ deleted: false, userId: req.user.id });
        return res.status(200).json({ message: 'todo fetch successfully', todo: data });
    } catch {
        return res.status(500).json({ error: 'server error' });

    }
}

exports.getDeletedTodo = async (req, res) => {
    try {
        const data = await todoModel.find({ deleted: true, userId: req.user.id });
        return res.status(200).json({ message: 'todo fetch successfully', todo: data });
    } catch {
        return res.status(500).json({ error: 'server error' });

    }
}

exports.getPinnedTodo = async (req, res) => {
    try {
        const data = await todoModel.find({ isPinned: true, userId: req.user.id });
        return res.status(200).json({ message: 'todo fetch successfully', todo: data });
    } catch {
        return res.status(500).json({ error: 'server error' });

    }
}

exports.getCompletedTodo = async (req, res) => {
    try {
        const data = await todoModel.find({ completed: true, userId: req.user.id });
        return res.status(200).json({ message: 'todo fetch successfully', todo: data });
    } catch {
        return res.status(500).json({ error: 'server error' });

    }
}

exports.updateTodo = async (req, res) => {
    try {
        const data = req.body;
        if (!data.id) {
            return res.status(400).json({ error: 'id cannot be empty' });
        }
        let response = await todoModel.findById(data.id);

        if (!response) {
            return res.status(404).json({ error: 'Todo not found with the given id' });
        }

        response.set(data);
        await response.save();

        return res.status(200).json({ message: 'Todo updated successfully', todo: response });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ error: 'Server error' });
    }
};
