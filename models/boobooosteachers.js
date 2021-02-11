'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BooBooosTeachers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BooBooosTeachers.init({
    name: DataTypes.STRING,
    smileys: DataTypes.STRING,
    pies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'BooBooosTeachers',
  });
  return BooBooosTeachers;
};