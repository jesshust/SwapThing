'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'Jessica', 
      lastName: 'Hust', 
      email: 'jessicakhust@gmail.com',
      password: 'Popcorn1', 
      userImage:'https://www.mautic.org/media/images/default_avatar.png'
    }, {
      firstName: 'Justin', 
      lastName: 'Hust', 
      email: 'jkhust@gmail.com', 
      password: 'Popcorn2', 
      userImage: 'https://www.mautic.org/media/images/default_avatar.png'
    }, {
      firstName: 'Jennifer', 
      lastName: 'Jordan', 
      email: 'jjordan@jsg.utexas.edu', 
      password: 'Popcorn3', 
      userImage: 'https://www.mautic.org/media/images/default_avatar.png'
    }, {
      firstName: 'Lane', 
      lastName: 'Cockrell', 
      email: 'lane.cockrell@gmail.com', 
      password: 'Popcorn4', 
      userImage: 'https://www.mautic.org/media/images/default_avatar.png'
    }], {}); 
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null); 
  }
};
