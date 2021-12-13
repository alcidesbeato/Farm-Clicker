'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animais_quantidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  animais_quantidade.init({
    galinha: DataTypes.INTEGER,
    vaca: DataTypes.INTEGER,
    porco: DataTypes.INTEGER,
    ovelha: DataTypes.INTEGER,
    cavalo: DataTypes.INTEGER,
    carpa: DataTypes.INTEGER,
    abelha: DataTypes.INTEGER,
    camarao: DataTypes.INTEGER,
    girafa: DataTypes.INTEGER,
    lontra: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'animais_quantidade',
  });
  return animais_quantidade;
};