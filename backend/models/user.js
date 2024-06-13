'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasOne(models.car)
    }
  }
  user.init({
    full_name: DataTypes.STRING,
    cod_fisc: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    secret: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};