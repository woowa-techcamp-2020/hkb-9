const { isEmpty, isString } = require('./functions');

exports.validateUserBody = (req, res, next) => {
  const { loginId, password, name } = req.body;
  if (isEmpty(loginId) || isEmpty(name) || isEmpty(password)) {
    res.status(400).json({ message: 'invalid request body' });
    return;
  }

  if (!isString(loginId) || !isString(password) || !isString(name)) {
    res.status(400).json({ message: 'property type must be string' });
    return;
  }

  next();
};

exports.validateCardBody = (req, res, next) => {
  const { name } = req.body;
  if (isEmpty(name)) {
    res.status(400).json({ message: 'invalid request body' });
    return;
  }

  if (!isString(name)) {
    res.status(400).json({ message: 'property type must be string' });
    return;
  }
  next();
};

exports.validateUserLoginBody = (req, res, next) => {
  const { loginId, password } = req.body;
  if (isEmpty(loginId) || isEmpty(password)) {
    res.status(400).json({ message: 'invalid request body' });
    return;
  }

  if (!isString(loginId) || !isString(password)) {
    res.status(400).json({ message: 'property type must be string' });
    return;
  }

  next();
};
