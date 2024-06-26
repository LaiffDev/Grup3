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
      car.belongsToMany(models.recharge_column, {
        through: 'link_car_column',
        foreignKey: 'car_plate',
        otherKey: 'column_id'
      })
    }
  }
  car.init({
    plate: DataTypes.STRING(7),
    owner_id: DataTypes.INTEGER,
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    battery_capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'car',
    underscored: true
  });
  return car;
};