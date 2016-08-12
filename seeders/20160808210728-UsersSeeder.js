'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Users', [{
      firstName: 'Mila',
      lastName: 'Weiss',
      email: 'mila@gmail.com',
      password: 'Popcorn1',
      userImage:'../css/imgs/placeholder/profile2.jpg'
    }, {
      firstName: 'Brian',
      lastName: 'Davis',
      email: 'bdavis@gmail.com',
      password: 'Popcorn2',
      userImage: '../css/imgs/placeholder/profile1.jpg'
    }, {
      firstName: 'Dee',
      lastName: 'Martinez',
      email: 'dmartinez@gmail.com',
      password: 'Popcorn3',
      userImage: '../css/imgs/placeholder/profile3.jpg'
    }, {
      firstName: 'Alex',
      lastName: 'Wu',
      email: 'alexwu@gmail.com',
      password: 'Popcorn4',
      userImage: '../css/imgs/placeholder/profile4.jpg'
    }], {}); 
  },

  down: function (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('Users', null); 
  }
};
