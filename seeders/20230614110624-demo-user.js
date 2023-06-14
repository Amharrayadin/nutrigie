"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: "Ilmi",
        lastName: "Faizan",
        email: "ilmifaizan1112.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Icang",
        lastName: "Cange",
        email: "icang@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
