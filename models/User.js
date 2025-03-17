const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Import the connection uses the same db instant

const User = sequelize.define(
  'User',
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: {type:DataTypes.STRING, unique:true, allowNull: false}
  },
  {
    timestamps: false, //disable timestamps that are generated auto
  }
);

module.exports = User;