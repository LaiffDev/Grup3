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
      user.hasOne(models.car, { foreignKey: 'owner_id' })
    }
  }
  user.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    full_name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    cod_fisc: DataTypes.STRING,
    email: DataTypes.STRING,
    secret: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
  });
  return user;
};