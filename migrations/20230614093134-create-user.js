"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      job: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      activity: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      breakfast_min_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_max_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_salty: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      breakfast_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },

      lunch_min_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_max_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_salty: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      lunch_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },

      dinner_min_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_max_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_salty: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      dinner_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },

      snack_min_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_max_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_salty: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
      snack_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 5,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
