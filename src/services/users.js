const bcrypt = require('bcryptjs');

const state = {
  users: [],
  nextId: 1,
};

async function createUser({ email, password }) {
  const normalizedEmail = email.trim().toLowerCase();
  const existing = state.users.find((u) => u.email === normalizedEmail);
  if (existing) {
    const err = new Error('Email already registered');
    err.statusCode = 409;
    err.code = 'EMAIL_ALREADY_EXISTS';
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const now = new Date().toISOString();
  const user = {
    id: state.nextId++,
    email: normalizedEmail,
    passwordHash,
    createdAt: now,
    updatedAt: now,
  };

  state.users.push(user);
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
  };
}

module.exports = { createUser };
