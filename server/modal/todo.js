const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const todo = sequelize.define("blog", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  item: {
    type: Sequelize.TEXT("longtext"),
    allowNull: false
  }
});
module.exports = todo;
