const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  item: {
    type: Sequelize.TEXT("longtext"),
    allowNull: false
  },
  isDone: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});
module.exports = todo;
