'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recharge_stations', {
      plus_code: {
        primaryKey: true,
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('recharge_stations');
  }
};