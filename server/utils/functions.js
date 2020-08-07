exports.wrapAsync = fn => async (req, res, next) =>
  await fn(req, res, next).catch(next);

exports.isEmpty = value =>
  value === undefined || value === null || value === '';

exports.isString = value => typeof value === 'string';
