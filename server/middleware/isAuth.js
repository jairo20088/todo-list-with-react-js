const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  const token = req.get("authorization").split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET_PASSWORD, (err, decoded) => {
    const userEmail = decoded.email;
    const userId = decoded.userId;
    if (
      userEmail === req.session.user.email &&
      userId === req.session.user.id
    ) {
      next();
    } else {
      return res.json({ message: "Not Authorization" });
    }
  });
};
module.exports = isAuth;
