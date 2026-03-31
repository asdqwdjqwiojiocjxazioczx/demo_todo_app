const state = {
  items: [],
  nextId: 1,
};

function listTodos() {
  return state.items;
}

function getTodoById(id) {
  return state.items.find((item) => item.id === id);
}

function createTodo({ title, dueDate }) {
  const now = new Date().toISOString();
  const item = {
    id: state.nextId++,
    title,
    dueDate: dueDate || null,
    createdAt: now,
    updatedAt: now,
  };
  state.items.push(item);
  return item;
}

module.exports = { listTodos, getTodoById, createTodo };
