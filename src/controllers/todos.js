// Simple in-memory demo for now
const state = {
  items: [],
  nextId: 1,
};

function listTodos(req, res) {
  res.json({ items: state.items });
}

function createTodo(req, res) {
  const { title } = req.body;
  const now = new Date().toISOString();
  const item = {
    id: state.nextId++,
    title,
    createdAt: now,
    updatedAt: now,
  };
  state.items.push(item);
  res.status(201).json({ item });
}

module.exports = { listTodos, createTodo };
