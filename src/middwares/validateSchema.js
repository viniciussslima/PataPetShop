module.exports = (req, res, next, schema, param) => {
  let error;
  if (!!req[param]) {
    error = schema.validate(req[param]).error;
  } else {
    error = schema.validate(req.body).error;
  }
  if (error) {
    return res.status(400).send({
      message: "Parametros inválidos!",
      error: error.details[0].message,
    });
  }
  next();
};
