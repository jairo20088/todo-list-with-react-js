const User = require("../modal/user");
const bcrypt = require("bcrypt");

exports.postLogin = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } }).then(user => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          console.log("User Logged in ");
        } else {
          console.log("Invalid password");
        }
      });
    }
  });
  res.json(req.body);
};
exports.postRegister = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        return res.json({ error: "Email already exist" });
      }
      if (req.body.password == req.body.confirmPassword) {
        return bcrypt.hash(req.body.password, 10).then(password => {
          return User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
          });
        });
      } else {
        return res.json({ error: "Invalid password" });
      }
    })
    .then(result => {
      res.json(req.body);
    })
    .catch(err => "Error has occure");
};
