const bcrypt = require("bcrypt");

("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        username: "amhar",
        email: "amhar@gmail.com",
        password: await bcrypt.hash("amhar", 10),
      },
      {
        username: "nabila",
        email: "nabila@gmail.com",
        password: await bcrypt.hash("nabila", 10),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
