// middlewares/errorHandler.js
// Error-handling middleware must have 4 arguments (err, req, res, next):contentReference[oaicite:10]{index=10}.
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
};

