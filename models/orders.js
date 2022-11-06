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
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  serie_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  film_id:{
    type: DataTypes.INTEGER,
    allowNull:true
  }


}, {
  sequelize,
  modelName: 'orders',
  freezeTableName: true,
  timestamps: true
});

module.exports = Orders;