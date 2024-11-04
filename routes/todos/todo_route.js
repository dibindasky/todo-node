const express = require('express');
const router = express.Router();

const todoController = require('../../controller/todo/todo_controller')

router.post('/create', todoController.createTodo);
router.get('/get', todoController.getTodo);
router.patch('/update/:id', todoController.updateTodo);

module.exports = router;