const Todo = require("../modal/todo");
const jwt = require("jsonwebtoken");

exports.getItem = (req, res, next) => {
  console.log(req.headers.authorization);
  var token = req.headers.authorization.split(" ")[1];
  var tDecoded = jwt.verify(token, process.env.JWT_SECRET_PASSWORD);
  if (tDecoded.email == req.session.user.email) {
    Todo.findAll({ where: { userId: req.session.user.id } })
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  } else {
    res.json({ message: "User not Authenticated" });
  }
};

exports.postItem = (req, res, next) => {
  console.log(req.headers.autorizacion);
  var token = req.headers.autorizacion.split(" ")[1];
  var tDecoded = jwt.verify(token, process.env.JWT_SECRET_PASSWORD);

  if (tDecoded.email === req.user.email) {
    req.user
      .createTodo({
        item: req.body.ok
      })
      .then(result => {
        res.json(result);
      })
      .catch(err => console.log(err));
  } else {
    res.json({ message: "User no authenticated" });
  }
};

exports.postDeleteItem = (req, res, next) => {
  const deletedItem = req.body.id;
  console.log(req.body);
  console.log(req.headers);
  var token = req.headers.authorization.split(" ")[1];
  var tDecoded = jwt.verify(token, process.env.JWT_SECRET_PASSWORD);

  if (tDecoded.email === req.session.user.email) {
    Todo.destroy({ where: { id: deletedItem } })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
    res.json({ message: "deleted success" });
  } else {
    res.json({ message: "User not Authenticated" });
  }
};
