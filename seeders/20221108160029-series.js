'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('series', [
      {

        id_serie: 1,
        tittle: "HYMYM",
        genre: "Comedian",
        rate: "9",
        in_theater: true,
        release_date: "2022-11-16 00:00:00"
      }, {
        id_serie: 2,
        tittle: "Breaking Bad",
        genre: "Action",
        rate: "8",
        in_theater: false,
        release_date: "2022-12-22 00:00:00"
      }, {
        id_serie: 3,
        tittle: "Suits",
        genre: "Law",
        rate: "9",
        in_theater: false,
        release_date: "2022-11-17 00:00:00"
      }, {
        id_serie: 4,
        tittle: "Friends",
        genre: "Comedian",
        rate: "7",
        in_theater: true,
        release_date: "2023-11-13 00:00:00"
      }, {
        id_serie: 5,
        tittle: "House",
        genre: "Education",
        rate: "6.5",
        in_theater: true,
        release_date: "2022-11-14 00:00:00"
      }

      ], { });
    
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
