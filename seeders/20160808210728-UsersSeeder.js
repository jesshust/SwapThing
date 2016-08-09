'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'Jessica', 
      lastName: 'Hust', 
      email: 'jessicakhust@gmail.com',
      password: 'Popcorn1' 
    }, {
      firstName: 'Justin', 
      lastName: 'Hust', 
      email: 'jkhust@gmail.com', 
      password: 'Popcorn2'
    }, {
      firstName: 'Jennifer', 
      lastName: 'Jordan', 
      email: 'jjordan@jsg.utexas.edu', 
      password: 'Popcorn3'
    }, {
      firstName: 'Lane', 
      lastName: 'Cockrell', 
      email: 'lane.cockrell@gmail.com', 
      password: 'Popcorn4'
    }], {}); 
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null); 
  }
};
