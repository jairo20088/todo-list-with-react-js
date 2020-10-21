const jwt = require("jsonwebtoken");
const User = require("../modal/user");

const isAuth = (req, res, next) => {
  const token = req.get("authorization").split(" ")[1];
  console.log(token);
  if (token == "undefined") {
    return res.json({ message: "Not Authorization" });
  }
  jwt.verify(token, process.env.JWT_SECRET_PASSWORD, (err, decoded) => {
    const userEmail = decoded.email;
    const userId = decoded.userId;

    User.findOne({ where: { email: userEmail } }).then(user => {
      if (user) {
        req.session.user = user;
        req.session.save();
      }
      if (
        userEmail === req.session.user.email &&
        userId === req.session.user.id
      ) {
        next();
      } else {
        return res.json({ message: "Not Authorization" });
      }
    });
  });
};
module.exports = isAuth;
