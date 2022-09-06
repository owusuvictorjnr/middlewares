const pathMiddleware = (req, res, next) => {
    console.log("Path middleware started");
  
    next();
  
    console.log("Path middleware stopped");
  };
  
  module.exports = { pathMiddleware };
  