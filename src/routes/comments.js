const express = require('express');
const {
  listComments,
  addComment,
  editComment,
  removeComment,
} = require('../controllers/comments');
const { validateBody } = require('../middleware/validate');
const { commentSchema } = require('../utils/schemas');

const router = express.Router({ mergeParams: true });

router.get('/', listComments);
router.post('/', validateBody(commentSchema), addComment);
router.put('/:commentId', validateBody(commentSchema), editComment);
router.delete('/:commentId', removeComment);

module.exports = router;
