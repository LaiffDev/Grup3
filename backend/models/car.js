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
      car.belongsTo(models.user, { foreignKey: 'owner_id' })
    }
  }
  car.init({
    plate: DataTypes.STRING(7),
    manufacturer: DataTypes.STRING,
    model: DataTypes.STRING,
    owner_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'car',
    underscored: true,
  });
  return car;
};