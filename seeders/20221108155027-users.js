'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 1,
        user_email: 'alex@gmail.com',
        user_password: '1234',
        name_user: 'alex',
        surname_user: 'Lopez',
        is_admin: true
      }, {
        id_user: 2,
        user_email: 'notAlex@gmail.com',
        user_password: '1234',
        name_user: 'notAlex',
        surname_user: 'Lopez',
        is_admin: false
      }, {
        id_user: 3,
        user_email: 'maybeAlex@gmail.com',
        user_password: '1234',
        name_user: 'maybeAlex',
        surname_user: 'Lopez',
        is_admin: false
      }, {
        id_user: 4,
        user_email: 'salva@gmail.com',
        user_password: '1234',
        name_user: 'Salva',
        surname_user: 'Martinez',
        is_admin: true
      }, {
        id_user: 5,
        user_email: 'jesus@gmail.com',
        user_password: '1234',
        name_user: 'Jesus',
        surname_user: 'Valenzuela',
        is_admin: false

      }, {
        id_user: 6,
        user_email: 'Liza@gmail.com',
        user_password: '1234',
        name_user: 'Liza',
        surname_user: 'Castrillon',
        is_admin: false
      },
      {
        id_user: 7,
        user_email: 'alexAgain@gmail.om',
        user_password: '1234',
        name_user: 'alexAgain',
        surname_user: 'Lopez',
        is_admin: true
      },
      {
        id_user: 8,
        user_email: 'seriouslyAlexAgain@gmail.com',
        user_password: '1234',
        name_user: 'onceAgainAlex',
        surname_user: 'Lopez',
        is_admin: false
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
