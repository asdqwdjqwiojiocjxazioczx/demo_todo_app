const { z } = require('zod');

const createTodoSchema = z.object({
  title: z.string().min(1).max(200),
});

module.exports = { createTodoSchema };
