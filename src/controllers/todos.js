const { listTodos: getTodos, createTodo: addTodo } = require('../services/todos');

function listTodos(req, res) {
  res.json({ items: getTodos() });
}

function createTodo(req, res) {
  const { title, dueDate } = req.body;
  const item = addTodo({ title, dueDate });
  res.status(201).json({ item });
}

module.exports = { listTodos, createTodo };
