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
        var Products = this.sequelize.define('Products', {}),
          Users = this.sequelize.define('Users', {}),
          Swappings = this.sequelize.define('Swappings', {});

        Swappings.belongsToMany(Users, {through: 'SwapUser'});
        Users.belongsToMany(Swappings, {through: 'SwapUser'});

        Swappings.belongsToMany(Products, {through: 'SwapProduct'});
        Products.belongsToMany(Swappings, {through: 'SwapProduct'});

      }
    }
  });
  return Swappings;
};