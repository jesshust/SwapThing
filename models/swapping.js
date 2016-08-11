'use strict';
module.exports = function(sequelize, DataTypes) {
  var Swapping = sequelize.define('Swapping', {
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
  return Swapping;
};