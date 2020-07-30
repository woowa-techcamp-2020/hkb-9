exports.validateUserBody = (req, res, next) => {
  const { loginId, password } = req.body;
  if (!loginId || !password) {
    res.status(400).json({ message: 'invalid request body' });
    return;
  }

  if (typeof loginId !== 'string' || typeof password !== 'string') {
    res.status(400).json({ message: 'property type must be string' });
    return;
  }

  next();
};
