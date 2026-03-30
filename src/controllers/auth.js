const { createUser } = require('../services/users');

async function register(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await createUser({ email, password });
    res.status(201).json({
      message: 'Account registered successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { register };
