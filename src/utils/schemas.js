const { z } = require('zod');

const createTodoSchema = z.object({
  title: z.string().min(1).max(200),
});

const registerSchema = z.object({
  email: z.email().max(255),
  password: z.string().min(6).max(128),
});

module.exports = { createTodoSchema, registerSchema };
