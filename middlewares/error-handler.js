module.exports = function (err, req, res, next) {
  let statusCode = 500;
  let errArr = [];
  switch (err.name) {
    case "SequelizeUniqueConstraintError":
    case "SequelizevalidationError":
      statusCode = 400;
      err.errors.forEach((errData) => {
        errArr.push(errDta.message);
      });
      break;
    case "JsonWebTokenError":
      statusCode = 400;
      errArr.push("Token Invalid");
      break;
    default:
      let message = err.msg || "Internal Serve Error";
      errArr.push(messange);
      statusCode = err.status || statuscode;
      break;
  }
  res.status(statusCode).json(errArr.toString());
};
