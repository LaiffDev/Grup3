'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('recharge_column', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      plus_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    //await queryInterface.removeConstraint('link_cars_columns', 'link_cars_columns_column_id_fkey')
    await queryInterface.dropTable('recharge_column')
  }
}