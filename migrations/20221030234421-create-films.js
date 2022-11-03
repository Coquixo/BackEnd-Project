'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('films', {
      id_film: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER

      },
      tittle: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      rate: {
        type: Sequelize.INTEGER
      },
      release_date: {
        type: Sequelize.DATE
      },
      aricle_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('films');
  }
};