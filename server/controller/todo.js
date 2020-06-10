const Todo = require("../modal/todo");

exports.getItem = (req, res, next) => {
  Todo.findAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};

exports.postItem = (req, res, next) => {
  console.log(req.body);
  Todo.create({
    item: req.body.ok
  })
    .then(result => {
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
