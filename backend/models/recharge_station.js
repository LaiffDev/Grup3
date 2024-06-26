'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recharge_station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recharge_station.init({
    plus_code: DataTypes.STRING,
    normal_charge_price: DataTypes.FLOAT,
    fast_charge_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'recharge_station',
  });
  return recharge_station;
};