const User = require("../modal/user");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.postLogin = (req, res, next) => {
  const errors = validationResult(req);
  let listOfErros = [];

  //if user send a bad email
  if (errors.errors.length !== 0) {
    listOfErros = errors.errors.map(el => {
      return el.msg;
    });
    if (errors.errors.length > 1) {
      listOfErros = listOfErros.join(" and ");
    } else {
      listOfErros = listOfErros.join("");
    }
    return res.json({ invalid: listOfErros });
  }
  // if all fields are corrent
  else {
    User.findOne({ where: { email: req.body.email } }).then(user => {
      if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            req.session.user = user;
            req.session.save();

            var token = jwt.sign(
              {
                userId: user.id,
                email: user.email
              },
              process.env.JWT_SECRET_PASSWORD
            );
            console.log(token);
            res.json({ loggedIn: "user logged in", token: token });
          } else {
            res.json({ invalid: "Invalid email or password" });
          }
        });
      } else {
        res.json({ invalid: "email do not exist" });
      }
    });
  }
};
exports.postRegister = (req, res, next) => {
  const errors = validationResult(req);
  let listOfErros = [];

  if (errors.errors.length !== 0) {
    listOfErros = errors.errors.map(el => {
      return el;
    });
  }
  if (listOfErros.length > 0) {
    return res.json({ errors: listOfErros });
  }

  User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if (user) {
        return res.json({ emailExist: "Email already exist" });
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
        return res.json({ error: "Passwords don't match" });
      }
    })
    .then(result => {
      res.json(req.body);
    })
    .catch(err => "Error has occured");
};
exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.json({ message: "logged out" });
  next();
};
