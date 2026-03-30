const {
  listCommentsByTodoId,
  createComment,
  updateComment,
  deleteComment,
} = require('../services/comments');
const { getTodoById } = require('../services/todos');

function ensureTodoExists(todoId) {
  const todo = getTodoById(todoId);
  if (!todo) {
    const err = new Error('Todo not found');
    err.statusCode = 404;
    err.code = 'TODO_NOT_FOUND';
    throw err;
  }
  return todo;
}

function listComments(req, res, next) {
  try {
    const todoId = Number(req.params.todoId);
    ensureTodoExists(todoId);
    const items = listCommentsByTodoId(todoId);
    res.json({ items });
  } catch (error) {
    next(error);
  }
}

function addComment(req, res, next) {
  try {
    const todoId = Number(req.params.todoId);
    ensureTodoExists(todoId);
    const comment = createComment({ todoId, content: req.body.content });
    res.status(201).json({ item: comment });
  } catch (error) {
    next(error);
  }
}

function editComment(req, res, next) {
  try {
    const todoId = Number(req.params.todoId);
    ensureTodoExists(todoId);
    const commentId = Number(req.params.commentId);
    const item = updateComment({ commentId, content: req.body.content });
    if (item.todoId !== todoId) {
      const err = new Error('Comment not found for this todo');
      err.statusCode = 404;
      err.code = 'COMMENT_NOT_FOUND';
      throw err;
    }
    res.json({ item });
  } catch (error) {
    next(error);
  }
}

function removeComment(req, res, next) {
  try {
    const todoId = Number(req.params.todoId);
    ensureTodoExists(todoId);
    const commentId = Number(req.params.commentId);
    const item = deleteComment(commentId);
    if (item.todoId !== todoId) {
      const err = new Error('Comment not found for this todo');
      err.statusCode = 404;
      err.code = 'COMMENT_NOT_FOUND';
      throw err;
    }
    res.json({ item });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  listComments,
  addComment,
  editComment,
  removeComment,
};
