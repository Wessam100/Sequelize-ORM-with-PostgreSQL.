const sequelize = require('../database');
const User = require('./User');
const Task = require('./Task');

//Relationships
User.hasMany(Task,{foreignkey:'userid'}) //user has many tasks
Task.belongsTo(User,{foreignKey:'userid'}) //task belongs to one user 

module.exports = { sequelize, User, Task };