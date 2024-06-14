'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      car.belongsTo(models.user)
    }
  }
  car.init({
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    car_plate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'car',
    underscored: true,
  });
  return car;
};