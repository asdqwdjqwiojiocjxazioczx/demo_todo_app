const express = require('express');
const { listTodos, createTodo } = require('../controllers/todos');
const { createTodoSchema } = require('../utils/schemas');
const { validateBody } = require('../middleware/validate');

const router = express.Router();

router.get('/', listTodos);
router.post('/', validateBody(createTodoSchema), createTodo);

module.exports = router;
