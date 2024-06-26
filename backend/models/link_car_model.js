'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class link_cars_columns extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        
      }
    }
    link_cars_columns.init({
        car_plate: {
            type: DataTypes.STRING(7),
            primaryKey: true
          },
          recharge_column_id: {
            type: DataTypes.INTEGER,
            primaryKey: true
          },
          created_at: DataTypes.DATE,
          updated_at: DataTypes.DATE
    }, {
      sequelize,
      modelName: 'link_cars_columns',
      underscored: true,
    });
    return link_cars_columns;
  };