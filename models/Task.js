const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import the connection uses the same db instant


const Task = sequelize.define(
  'Task',
  {
    title: {type:DataTypes.STRING, allowNull : false},
    state: {type: DataTypes.BOOLEAN,defaultValue:false},
  },
  {
    timestamps : false,
  }
);

module.exports = Task; 

