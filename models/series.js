'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  series.init({
    id_serie: DataTypes.INTEGER,
    tittle: DataTypes.STRING,
    genre: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    release_date: DataTypes.DATE,
    aricle_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'series',
  });
  return series;
};