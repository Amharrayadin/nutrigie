"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      age: DataTypes.INTEGER,
      job: DataTypes.STRING,
      height: DataTypes.INTEGER,
      weight: DataTypes.FLOAT,
      activity: DataTypes.STRING,

      breakfast_min_price: DataTypes.INTEGER,
      breakfast_max_price: DataTypes.INTEGER,
      breakfast_salty: DataTypes.INTEGER,
      breakfast_sweet: DataTypes.INTEGER,
      breakfast_sour: DataTypes.INTEGER,
      breakfast_savory: DataTypes.INTEGER,
      breakfast_spicy: DataTypes.INTEGER,
      breakfast_crispy: DataTypes.INTEGER,
      breakfast_smooth: DataTypes.INTEGER,
      breakfast_creamy: DataTypes.INTEGER,
      breakfast_thick: DataTypes.INTEGER,
      breakfast_fried: DataTypes.INTEGER,
      breakfast_boiled: DataTypes.INTEGER,
      breakfast_grilled: DataTypes.INTEGER,
      breakfast_steamed: DataTypes.INTEGER,
      breakfast_fastfood: DataTypes.INTEGER,
      breakfast_store_bought: DataTypes.INTEGER,

      lunch_min_price: DataTypes.INTEGER,
      lunch_max_price: DataTypes.INTEGER,
      lunch_salty: DataTypes.INTEGER,
      lunch_sweet: DataTypes.INTEGER,
      lunch_sour: DataTypes.INTEGER,
      lunch_savory: DataTypes.INTEGER,
      lunch_spicy: DataTypes.INTEGER,
      lunch_crispy: DataTypes.INTEGER,
      lunch_smooth: DataTypes.INTEGER,
      lunch_creamy: DataTypes.INTEGER,
      lunch_thick: DataTypes.INTEGER,
      lunch_fried: DataTypes.INTEGER,
      lunch_boiled: DataTypes.INTEGER,
      lunch_grilled: DataTypes.INTEGER,
      lunch_steamed: DataTypes.INTEGER,
      lunch_fastfood: DataTypes.INTEGER,
      lunch_store_bought: DataTypes.INTEGER,

      dinner_min_price: DataTypes.INTEGER,
      dinner_max_price: DataTypes.INTEGER,
      dinner_salty: DataTypes.INTEGER,
      dinner_sweet: DataTypes.INTEGER,
      dinner_sour: DataTypes.INTEGER,
      dinner_savory: DataTypes.INTEGER,
      dinner_spicy: DataTypes.INTEGER,
      dinner_crispy: DataTypes.INTEGER,
      dinner_smooth: DataTypes.INTEGER,
      dinner_creamy: DataTypes.INTEGER,
      dinner_thick: DataTypes.INTEGER,
      dinner_fried: DataTypes.INTEGER,
      dinner_boiled: DataTypes.INTEGER,
      dinner_grilled: DataTypes.INTEGER,
      dinner_steamed: DataTypes.INTEGER,
      dinner_fastfood: DataTypes.INTEGER,
      dinner_store_bought: DataTypes.INTEGER,

      snack_min_price: DataTypes.INTEGER,
      snack_max_price: DataTypes.INTEGER,
      snack_salty: DataTypes.INTEGER,
      snack_sweet: DataTypes.INTEGER,
      snack_sour: DataTypes.INTEGER,
      snack_savory: DataTypes.INTEGER,
      snack_spicy: DataTypes.INTEGER,
      snack_crispy: DataTypes.INTEGER,
      snack_smooth: DataTypes.INTEGER,
      snack_creamy: DataTypes.INTEGER,
      snack_thick: DataTypes.INTEGER,
      snack_fried: DataTypes.INTEGER,
      snack_boiled: DataTypes.INTEGER,
      snack_grilled: DataTypes.INTEGER,
      snack_steamed: DataTypes.INTEGER,
      snack_fastfood: DataTypes.INTEGER,
      snack_store_bought: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      timestamps: false,
    }
  );
  return User;
};
