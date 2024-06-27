const rechargeStation = require('../models/').recharge_station

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recharge_stations', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      plus_code: {
        type: Sequelize.STRING(50)
      },
      normal_charge_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      fast_charge_price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })

    await queryInterface.bulkInsert('recharge_stations', [{
      plus_code: '74FJ+R2 Gemona, Province of Udine',
      normal_charge_price: 0.09,
      fast_charge_price: 0.85,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recharge_stations');
  }
};