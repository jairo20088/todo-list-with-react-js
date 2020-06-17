const User = require("../modal/user");

exports.postLogin = (req, res, next) => {
  //console.log(req.body);
  console.log(req.body);
  res.redirect("/");
};
exports.postRegister = (req, res, next) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  })
    .then(result => {
      res.json(req.body);
    })
    .catch(err => console.log(err));
};
