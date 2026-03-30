const express = require('express');
const { register } = require('../controllers/auth');
const { validateBody } = require('../middleware/validate');
const { registerSchema } = require('../utils/schemas');

const router = express.Router();

router.post('/register', validateBody(registerSchema), register);

module.exports = router;
