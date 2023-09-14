'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate({ Question }) {
      this.hasMany(Question, {
        foreignKey: 'themeId',
      });
    }
  }
  Theme.init(
    {
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Theme',
    }
  );
  return Theme;
};
