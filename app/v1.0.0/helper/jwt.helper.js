const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  //Auth header value = > send token into header

  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split the space at the bearer
    const bearer = bearerHeader.split(" ");
    //Get token from string
    const bearerToken = bearer[1];

    jwt.verify(bearerToken, process.env.secret, function (err, decoded) {
      if (err) {
        /*
                err = {
                  name: 'NotBeforeError',
                  message: 'jwt not active',
                  date: 2018-10-04T16:10:44.000Z
                }
              */
        return res.send({ message: "token invalid" });
      }
    });

    //set the token
    req.token = bearerToken;

    //next middleweare
    next();
  } else {
    //Fobidden
    res.sendStatus(403);
  }

};

exports.verifyPRToken = (req, res, next) => {
  jwt.verify(token, process.env.secret, function (err, decoded) {
    if (err) {
      /*
              err = {
                name: 'NotBeforeError',
                message: 'jwt not active',
                date: 2018-10-04T16:10:44.000Z
              }
            */
    } else {
    }
  });
};
exports.signToken = (data) => {
  return jwt.sign(
    {
      id: data.id,
      userType: data.userType,
      username: data.username,
    },
    process.env.secret,
    { expiresIn: "1h" }
  );
};
