exports.errorHandler = (err, req, res, next) => {
  const status = err.status ? err.status : 500;
  console.log(err);
  res.status(status).send(err);
};
