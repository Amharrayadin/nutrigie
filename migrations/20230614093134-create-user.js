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

      brekfast_min_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_max_price: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_salty: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_sweet: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_sour: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_spicy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_crispy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_smooth: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_creamy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_thick: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_fried: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_boiled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_grilled: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_steamed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_fastfood: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      brekfast_store_bought: {
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
