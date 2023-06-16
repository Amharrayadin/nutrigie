"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("histories", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users", // Nama model User
          key: "id", // Kolom yang menjadi foreign key di model User
        },
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      max_kkal: {
        type: Sequelize.INTEGER,
      },
      kkal: {
        type: Sequelize.INTEGER,
      },
      breakfast_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // defaultValue: 0,
      },
      lunch_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // defaultValue: 0,
      },
      dinner_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // defaultValue: 0,
      },
      snack_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // defaultValue: 0,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("histories");
  },
};
