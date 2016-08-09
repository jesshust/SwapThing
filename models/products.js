'use strict';
var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define('Products', {
    product_name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    category: DataTypes.STRING,
    scaleRating: DataTypes.INTEGER,
    swapStatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
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
          Users = this.sequelize.define('Users', {});

        Products.belongsTo(Users);
      }
    }
  });
  return Products;
};