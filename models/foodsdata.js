"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FoodsData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FoodsData.init(
    {
      takaran_g: DataTypes.STRING,
      nama: DataTypes.STRING,
      energi_kkal: DataTypes.FLOAT,
      protein_g: DataTypes.FLOAT,
      lemak_g: DataTypes.FLOAT,
      karbohidrat_g: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "FoodsData",
      tableName: "foods_data",
      timestamps: false,
    }
  );
  return FoodsData;
};
