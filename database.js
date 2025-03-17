const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_database', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});
module.exports = sequelize;