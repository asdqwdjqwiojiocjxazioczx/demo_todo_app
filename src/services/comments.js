const state = {
  comments: [],
  nextId: 1,
};

function listCommentsByTodoId(todoId) {
  return state.comments.filter((comment) => comment.todoId === todoId);
}

function createComment({ todoId, content }) {
  const now = new Date().toISOString();
  const comment = {
    id: state.nextId++,
    todoId,
    content,
    createdAt: now,
    updatedAt: now,
  };
  state.comments.push(comment);
  return comment;
}

function updateComment({ commentId, content }) {
  const comment = state.comments.find((item) => item.id === commentId);
  if (!comment) {
    const err = new Error('Comment not found');
    err.statusCode = 404;
    err.code = 'COMMENT_NOT_FOUND';
    throw err;
  }
  comment.content = content;
  comment.updatedAt = new Date().toISOString();
  return comment;
}

function deleteComment(commentId) {
  const index = state.comments.findIndex((item) => item.id === commentId);
  if (index === -1) {
    const err = new Error('Comment not found');
    err.statusCode = 404;
    err.code = 'COMMENT_NOT_FOUND';
    throw err;
  }
  const [deleted] = state.comments.splice(index, 1);
  return deleted;
}

module.exports = {
  listCommentsByTodoId,
  createComment,
  updateComment,
  deleteComment,
};
