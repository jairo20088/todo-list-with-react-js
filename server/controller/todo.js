const Todo = require("../modal/todo");

exports.postItem = (req, res, next) => {
  console.log(req.body);
  Todo.create({
    item: req.body.ok
  })
    .then(result => {
      res.send("connected");
    })
    .catch(err => console.log(err));
};

exports.getItem = (req, res, next) => {
  Todo.findAll()
    .then(result => {
      res.json(result);
    })
    .catch(err => console.log(err));
};
