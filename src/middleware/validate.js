function validateBody(schema) {
  return (req, res, next) => {
    const parsed = schema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: parsed.error.issues.map(i => i.message).join('; '),
        },
      });
    }
    req.body = parsed.data;
    next();
  };
}

module.exports = { validateBody };
