'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        id_user: 1,
        user_email: 'alex@gmail.com',
        user_password: '$2b$10$Y2bfzEFtKrWnk8o26oLPPes/i7rv/k2MZStPoLrq6cgFylw2.NutO',
        name_user: 'alex',
        surname_user: 'Lopez',
        is_admin: true
      }, {
        id_user: 2,
        user_email: 'notAlex@gmail.com',
        user_password: '$2b$10$ywMM4s.dLtx1qEb.uwoIpOGHAshu/NJhXvJR/ZbULEDuJQgPcbFaS',
        name_user: 'notAlex',
        surname_user: 'Lopez',
        is_admin: false
      }, {
        id_user: 3,
        user_email: 'maybeAlex@gmail.com',
        user_password: '$2b$10$BxuYQfCLQK3SmoOfMH/MM.YJiqPISO2u9cDJXBZbHPFuSS5Wy8rhm',
        name_user: 'maybeAlex',
        surname_user: 'Lopez',
        is_admin: false
      }, {
        id_user: 4,
        user_email: 'salva@gmail.com',
        user_password: '$2b$10$TSonFMemgQYLrYIgAWX2VerNpF3XslEKV8EfWnflXePJEt1pZkJP2',
        name_user: 'Salva',
        surname_user: 'Martinez',
        is_admin: true
      }, {
        id_user: 5,
        user_email: 'jesus@gmail.com',
        user_password: '$2b$10$Wj8SSZXU8FLhQd2kay521enSAt0utsWD0v4RcJgNsphYF6xqWYB4S',
        name_user: 'Jesus',
        surname_user: 'Valenzuela',
        is_admin: false

      }, {
        id_user: 6,
        user_email: 'Liza@gmail.com',
        user_password: '$2b$10$21vTJuvfH55sZUM0Zbx4Re/nXceh5tfKn0yjEKXMnBSmlLZlfO9IK',
        name_user: 'Liza',
        surname_user: 'Castrillon',
        is_admin: false
      },
      {
        id_user: 7,
        user_email: 'alexAgain@gmail.om',
        user_password: '$2b$10$N0Xhi0LspK3VV3YkBJdCN.SZ5pbcdq7mPxYIuFNOHTVkOqDRFOnCW',
        name_user: 'alexAgain',
        surname_user: 'Lopez',
        is_admin: true
      },
      {
        id_user: 8,
        user_email: 'SeriouslyAlexAgain@gmail.com',
        user_password: '$2b$10$xpdxGl6yXzMtVwSv/wDfpOdntM2plfVoSc39P8Xo1473La5/RmsiS',
        name_user: 'onceAgainAlex',
        surname_user: 'Lopez',
        is_admin: true
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
