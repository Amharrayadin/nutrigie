"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
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
      },
      breakfast_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      breakfast_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
      },
      lunch_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      lunch_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
      },
      dinner_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      dinner_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
      },
      snack_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_savory: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      snack_store_bought: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
