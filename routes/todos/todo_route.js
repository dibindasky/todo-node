const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/auth')

const todoController = require('../../controller/todo/todo_controller')

router.post('/create', authMiddleware.authenticateUser, todoController.createTodo);
router.get('/get', authMiddleware.authenticateUser, todoController.getTodo);
router.get('/deleted-todo', authMiddleware.authenticateUser, todoController.getDeletedTodo);
router.patch('/update', authMiddleware.authenticateUser, todoController.updateTodo);

module.exports = router;