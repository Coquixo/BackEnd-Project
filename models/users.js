'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db')
class Users extends Model { }
Users.init({
  id_user: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name_user: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  surname_user: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  is_admin: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'Users',
  freezeTableName: true,
  timestamps: false
});

module.exports = Users;