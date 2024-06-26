'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cars', {
      plate: {
        primaryKey: true,
        type: Sequelize.STRING(7)
      },
      owner_id: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      battery_capacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id: {
        type: Sequelize.CHAR,
        allowNull: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    //await queryInterface.removeConstraint('link_cars_columns', 'link_cars_columns_car_plate_fkey')
    await queryInterface.dropTable('cars')
  }
}