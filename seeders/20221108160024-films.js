'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('films', [
      {
        id_film: 1,
        tittle: "Hancock",
        genre: "Action",
        rate: "5",
        release_date: "2022-11-16 00:00:00"
      }, {
        id_film: 2,
        tittle: "Lion King",
        genre: "Animation",
        rate: "10",
        release_date: "2022-12-22 00:00:00"
      }, {
        id_film: 3,
        tittle: "Lord of the Rings",
        genre: "Aventure",
        rate: "9",
        release_date: "2022-11-17 00:00:00"
      }, {
        id_film: 4,
        tittle: "The Path",
        genre: "Suspense",
        rate: "7",
        release_date: "2023-11-13 00:00:00"
      }, {
        id_film: 5,
        tittle: "Social Network",
        genre: "Education",
        rate: "6.5",
        release_date: "2022-11-14 00:00:00"
      }



    ], {});

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
