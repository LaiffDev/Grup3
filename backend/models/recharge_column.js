'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recharge_column extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      recharge_column.belongsToMany(models.car, {
        through: 'link_cars_columns',
        foreignKey: 'column_id',
        otherKey: 'car_plate'
      })
    }
  }
  recharge_column.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    plus_code: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'recharge_column',
    underscored: true,
  });
  return recharge_column;
};