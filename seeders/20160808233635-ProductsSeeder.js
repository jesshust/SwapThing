'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Products', [{
      product_name: 'Glasses',
      description: 'Fine whiskey glasses.',
      imageURL: '../css/imgs/placeholder/whiskey_glasses.jpg',
      category: 'Household Goods',
      scaleRating: 5,
      UsersId: 1,
      swapStatus: 0
    }, {
      product_name: 'Polaroid',
      description: 'Take fun pictures in this awesome pink camera!',
      imageURL: '../css/imgs/placeholder/polaroid_camera.jpg',
      category: 'Electronics',
      scaleRating: 3,
      UsersId: 1,
      swapStatus: 1
    }, {
      product_name: 'Makeup',
      description: 'Hardly used eye shadow palette',
      imageURL: '../css/imgs/placeholder/makeuppalette.jpg',
      category: 'Beauty/Health',
      scaleRating: 1,
      UsersId: 1,
      swapStatus: 1
    }, {
      product_name: 'Nike Shoes',
      description: "Black shoes that didn't fit me, size 7",
      imageURL: '../css/imgs/placeholder/nikes.jpg',
      category: 'Apparel',
      scaleRating: 4,
      UsersId: 2,
      swapStatus: 0
    }, {
      product_name: 'Measuring Cups',
      description: "So cute for the kitchen!",
      imageURL: '../css/imgs/placeholder/measuringcups.jpg',
      category: 'Household Goods',
      scaleRating: 5,
      UsersId: 2,
      swapStatus: 0
    }, {
      product_name: 'Desk and Chair',
      description: "Orange chair, classic IKEA",
      imageURL: '../css/imgs/placeholder/desk.jpg',
      category: 'Other',
      scaleRating: 3,
      UsersId: 2,
      swapStatus: 1
    }, {
      product_name: 'Terrarium',
      description: "Perfect for cacti and succulents",
      imageURL: '../css/imgs/placeholder/vase.jpg',
      category: 'Other',
      scaleRating: 2,
      UsersId: 3,
      swapStatus: 0
    }, {
      product_name: 'Bicycle',
      description: "Never have time to ride, great condition",
      imageURL: '../css/imgs/placeholder/bike_img.jpg',
      category: 'Other',
      scaleRating: 5,
      UsersId: 3,
      swapStatus: 1
    }], {});
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Products', null, {truncate: true});
  }
};
