const Todo = require("../modal/todo");

exports.getItem = (req, res, next) => {
  console.log(req)
  console.log(req.session);
  Todo.findAll({ where: { userId: req.session.user.id } })
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postItem = (req, res, next) => {
  console.log(req.user);
  console.log(req.body);
  req.user
    .createTodo({
      item: req.body.ok
    })
    .then(result => {
      console.log(req.cookies);
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postDeleteItem = (req, res, next) => {
  const deletedItem = req.body.id;
  console.log(deletedItem);
  Todo.destroy({ where: { id: deletedItem } })
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));

  next();
};
