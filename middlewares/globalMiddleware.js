const globalMiddleware = (req, res, next) => {
  console.log("Global middleware started");

  next();

  console.log("Global middleware stopped");
};

module.exports = { globalMiddleware };
