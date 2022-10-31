'use strict';
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/db')

class Orders extends Model { }

Orders.init({
  id_article: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

  },
  order_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  user_id: { //tengo que especicicar si es foranea??

    type: DataTypes.INTEGER,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'Orders',
  freezeTableName: true,
  timestamps: false
});

module.exports = Orders;