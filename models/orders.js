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


}, {
  sequelize,
  modelName: 'orders',
  freezeTableName: true,
  timestamps: true
});

module.exports = Orders;