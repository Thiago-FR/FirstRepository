const errorMiddleware = (err, _req, res, _next) => {
  res.status(500).json({ message: err })
};

module.exports = errorMiddleware;
