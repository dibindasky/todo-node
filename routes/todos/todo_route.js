const express = require('express');
const router = express.Router();

const todoController = require('../../controller/todo/todo_controller')

router.post('/create', todoController.createTodo);
router.get('/get', todoController.getTodo);

module.exports = router;