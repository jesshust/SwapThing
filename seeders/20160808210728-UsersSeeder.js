'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {truncate:true}); 
  }
};
