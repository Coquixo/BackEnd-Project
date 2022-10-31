'use strict';
const { DataTypes, Model } = require('sequelize');
class Series extends Model { }

Series.init({
  id_serie: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  tittle: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 25]
    }
  },
  rate: DataTypes.INTEGER,
  release_date: DataTypes.DATE,

  aricle_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Series',
  freezeTableName: true,
  timestamps: false
});

module.exports = Series;