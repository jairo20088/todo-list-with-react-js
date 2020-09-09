const express = require("express");
const db = require("./server/util/database");
const session = require("express-session");
const todoRoute = require("./server/routes/todo");
const authRoute = require("./server/routes/auth");
const MySQLStore = require("express-mysql-session")(session);
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Todo = require("./server/modal/todo");
const User = require("./server/modal/user");

const options = {
  host: "localhost",
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  clearExpired: true,
  checkExpirationInterval: 2000
};

const store = new MySQLStore(options);

const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(
  session({
    secret: process.env.SECRET_PASSWORD,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      expires: 900000
    }
  })
);
app.use((req, res, next) => {
  if (!req.session.user) {
    next();
  } else {
    User.findByPk(req.session.user.id).then(user => {
      //console.log(user);
      req.user = user;
      //console.log(user);
      next();
    });
  }
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(todoRoute);
app.use(authRoute);

User.hasMany(Todo);
Todo.belongsTo(User);

const port = process.env.PORT || 5000;

db.sync()
  .then(result => {
    app.listen(port);
  })
  .catch(err => console.log(err));
