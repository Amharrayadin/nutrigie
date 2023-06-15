// const { User } = require("../models");

("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: "user_id" }); // Menentukan hubungan belongsTo dengan User
    }
  }
  History.init(
    {
      date: DataTypes.DATE,
      max_kkal: DataTypes.INTEGER,
      kkal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "History",
      tableName: "histories",
      timestamps: false,
    }
  );

  return History;
};
