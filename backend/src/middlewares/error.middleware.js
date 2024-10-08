const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl} `);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  const message = err.message;
  res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export { errorHandler, notFoundHandler };
