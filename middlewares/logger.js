export const requestLogger = (req, res, next) => {
  console.log(`${req.method} method at route ${req.url} at time ${new Date().toLocaleString()}`);
  next();
};