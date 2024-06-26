'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class link_car_column extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        
      }
    }
    link_car_column.init({
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
      modelName: 'link_car_column',
      underscored: true,
    });
    return link_car_column;
  };