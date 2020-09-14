const Todo = require("../modal/todo");
const jwt = require("jsonwebtoken");

exports.getItem = (req, res, next) => {
  Todo.findAll({ where: { userId: req.session.user.id } })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postItem = (req, res, next) => {
  req.user
    .createTodo({
      item: req.body.ok
    })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postDeleteItem = (req, res, next) => {
  const deletedItem = req.body.id;

  Todo.destroy({ where: { id: deletedItem } })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  res.json({ message: "deleted success" });
};
