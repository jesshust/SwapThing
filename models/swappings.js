'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Swappings = sequelize.define('Swappings', {
    firstPersonID: DataTypes.INTEGER,
    firstPersonProductID: DataTypes.INTEGER,
    secondPersonID: DataTypes.INTEGER,
    secondPersonProductID: DataTypes.INTEGER,
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Swappings;
};