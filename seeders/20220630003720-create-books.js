"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Books",
      [
        {
          title: "Por que nós dormimos: A nova ciência do sono e do sonho",
          edition_year: 2018,
          author: "Matthew Walker",
          pages: 400,
          stock: 3
        },
        {
          title: "É assim que acaba",
          edition_year: 2018,
          author: "Colleen Hoover",
          pages: 368,
          stock: 5
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null, {});
  }
};
