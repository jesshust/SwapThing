'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Products', [{
      product_name: 'Shampoo',
      description: 'Here is where my description would be.',
      imageURL: 'http://findapic.com',
      category: 'Hair Care',
      scaleRating: 3,
      UsersId: 1
    }, {
      product_name: 'That DVD',
      description: 'Here is where my description would be.',
      imageURL: 'http://findapic.com',
      category: 'Electronics',
      scaleRating: 3,
      UsersId: 1
    }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Products', null, {truncate: true});
  }
};
