const { isEmpty } = require('./functions');

const isString = value => typeof value === 'string';

exports.validateUserBody = (req, res, next) => {
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

exports.validateCardBody = (req, res, next) => {
  const { name } = req.body;
  if (isEmpty(name)) {
    res.status(400).json({ message: 'invalid request body' });
    return;
  }

  if (!isString(name)) {
    res.status(400).json({ message: 'property type must be string' });
  }

  next();
};
